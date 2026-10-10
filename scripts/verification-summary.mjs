import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readLog=p=>{const bytes=fs.readFileSync(path.join(root,p));return bytes.toString(bytes[0]===255&&bytes[1]===254?'utf16le':'utf8').replace(/^\uFEFF/,'');};
const routes=read('reports/browser/routes.json'),workflows=read('reports/browser/workflows.json'),inventory=read('reports/source-inventory.json'),manifest=read('src/data/routes.json');
const result={
  project:'HGMS',
  fullParity:false,
  productionReady:false,
  originalFilesUnchanged:readLog('reports/source-audit.log').startsWith('Verified'),
  originalFileCount:Object.keys(read('reports/original-hashes.json')).length,
  originalPageCount:inventory.length,
  nativeReferenceLayouts:manifest.filter(p=>!p.empty).length,
  emptySourceSubstitutions:manifest.filter(p=>p.empty).map(p=>p.path),
  unresolvedLinkedDestinations:read('reports/missing-pages.json').length,
  unavailableAssetReferences:read('reports/missing-assets.json').length,
  productionBuildPassed:/built in/.test(readLog('reports/build.log')),
  routeSmokeChecks:{tested:routes.results.length,passed:routes.results.filter(p=>p.pass&&!p.brokenImages.length).length},
  workflowChecks:{tested:workflows.length,passed:workflows.filter(p=>p.pass).length},
  applicationRuntimeErrors:routes.errors.filter(p=>!p.route.startsWith('reference:')),
  applicationExternalRequests:routes.externalRequests.filter(p=>!p.route.startsWith('reference:')),
  limitations:'See IMPLEMENTATION_STATUS.md. Smoke checks do not certify full visual or behavioral parity.',
};
fs.writeFileSync(path.join(root,'reports/verification-summary.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
