import {chromium} from '@playwright/test';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {checkWorkflows} from './workflow-checks.mjs';
const root=path.resolve(import.meta.dirname,'..'), output=path.join(root,'reports/browser');
fs.mkdirSync(output,{recursive:true});
const routes=JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json')));
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json'};
function server(base,port,spa){return new Promise(resolve=>{const app=http.createServer((req,res)=>{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(base,'.'+name);if(!file.startsWith(base+path.sep)&&file!==base){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory()){if(spa)file=path.join(base,'index.html');else {res.writeHead(404).end();return;}}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});app.listen(port,'127.0.0.1',()=>resolve(app));});}
const app=await server(path.join(root,'dist'),5173,true),reference=await server(path.resolve(root,'..'),5174,false);
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--disable-gpu']});
const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
const page=await context.newPage();const errors=[],requests=[];let current='';
page.on('pageerror',e=>errors.push({route:current,error:e.message}));
await context.route('**/*',route=>{const url=route.request().url();if(!url.startsWith('http://127.0.0.1:5173/')&&!url.startsWith('http://127.0.0.1:5174/')&&!url.startsWith('data:')){requests.push({route:current,url});return route.abort();}return route.continue();});
const results=[];
let workflowResults=[];
page.setDefaultTimeout(8000);
try{
  const selected=process.argv.includes('--workflows')?[]:process.argv.includes('--quick')?routes.filter(r=>['/home','/membership/add_member','/master/manage_batch','/login0bfe'].includes(r.path)):routes;
  for(const route of selected){current=route.path;try{await page.goto('http://127.0.0.1:5173'+route.path,{waitUntil:'networkidle',timeout:20000});await page.locator('.hgms-loading').waitFor({state:'hidden'});const text=await page.locator('body').innerText();const broken=await page.locator('img').evaluateAll(images=>images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));const count=await page.locator('input,select,textarea').count();const pass=text.length>80&&!/Unable to open this page|Page not found/.test(text);results.push({path:route.path,pass,fields:count,brokenImages:broken});if(['/home','/membership/add_member','/master/manage_batch','/login0bfe'].includes(route.path))await page.screenshot({path:path.join(output,route.path.slice(1).replaceAll('/','-')+'.png'),fullPage:true});if(!pass)console.log('FAIL '+route.path+' '+text.slice(0,150));}catch(e){results.push({path:route.path,pass:false,error:e.message});}if(results.length%20===0)console.log(`Checked ${results.length}/${selected.length} routes`);}
  if(process.argv.includes('--workflows'))workflowResults=await checkWorkflows(page,output);
  else for(const route of ['/home','/master/manage_batch','/membership/add_member','/login0bfe']){current='reference:'+route;await page.goto('http://127.0.0.1:5174/ggmsmultigym'+route+'.html',{waitUntil:'domcontentloaded'});await page.waitForTimeout(350);await page.screenshot({path:path.join(output,'reference-'+route.slice(1).replaceAll('/','-')+'.png'),fullPage:true});}
}finally{fs.writeFileSync(path.join(output,process.argv.includes('--workflows')?'workflow-runtime.json':'routes.json'),JSON.stringify({results,errors,externalRequests:requests},null,2));const runtimeErrors=errors.filter(e=>!e.route.startsWith('reference:')),external=requests.filter(e=>!e.route.startsWith('reference:'));console.log(JSON.stringify({tested:results.length,passed:results.filter(r=>r.pass).length,errors:runtimeErrors.length,externalRequests:external.length},null,2));process.exitCode=results.some(r=>!r.pass||r.brokenImages?.length)||workflowResults.some(r=>!r.pass)||runtimeErrors.length||external.length?1:0;await browser.close();app.close();reference.close();}
