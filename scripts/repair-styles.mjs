import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
// Remove unmatched closing braces in the supplied CSS while preserving valid rules.
function balance(css){let depth=0,quote='',comment=false,out='';for(let i=0;i<css.length;i++){const c=css[i],next=css[i+1];if(comment){out+=c;if(c==='*'&&next==='/'){out+=next;i++;comment=false;}continue;}if(quote){out+=c;if(c==='\\'){out+=next||'';i++;}else if(c===quote)quote='';continue;}if(c==='/'&&next==='*'){comment=true;out+=c+next;i++;continue;}if(c==='"'||c==="'"){quote=c;out+=c;continue;}if(c==='{')depth++;if(c==='}'){if(!depth)continue;depth--;}out+=c;}return out+'}'.repeat(depth);}
for(const file of [...walk(path.join(root,'public/assets')),...walk(path.join(root,'src/styles'))].filter(p=>p.endsWith('.css'))){const css=fs.readFileSync(file,'utf8'),fixed=balance(css).replace(/,\s*\{/g,'{');if(css!==fixed){fs.writeFileSync(file,fixed);console.log('Repaired '+path.relative(root,file));}}
