import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=process.env.HGMS_REVIEW_DIST||path.join(root,'dist'),output=path.join(root,'reports/full-ui-pass-'+(process.argv[2]||'1'));
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5188,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5188'+route,{waitUntil:'domcontentloaded'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};
async function check(name,run){try{await run();checks.push({name,pass:true});console.log('PASS '+name);}catch(e){checks.push({name,pass:false,error:e.message});console.log('FAIL '+name+' '+e.message);}}


const routes=[...new Set([...JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json'))).map(r=>r.path),...JSON.parse(fs.readFileSync(path.join(root,'src/data/missing-routes.json'))).map(r=>'/'+r.route),'/login'])];
const results=[];
try {await Promise.all([360,768,1440,1920].map(async width=>{
const p=await context.newPage();p.setDefaultTimeout(8000);p.on('pageerror',e=>errors.push({width,message:e.message}));await p.setViewportSize({width,height:1000});
for(const route of routes){
await p.goto('http://127.0.0.1:5188'+route,{waitUntil:'domcontentloaded'});await p.locator('main').first().waitFor();await p.locator('.hgms-loading').waitFor({state:'hidden'});await p.evaluate(()=>document.fonts.ready);
const audit=await p.evaluate(()=>{
const shown=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden',rect=e=>e.getBoundingClientRect();
const inputs=[...document.querySelectorAll('main input:not([type=hidden]),main select,main textarea')].filter(shown);
const tables=[...document.querySelectorAll('.hgms-data-table')].filter(shown);
const unstyled=tables.filter(t=>{const cell=t.querySelector('td');return cell&&parseFloat(getComputedStyle(cell).paddingLeft)<8;}).length;
const padding=tables.filter(e=>{const panel=e.closest('.panel');if(!panel)return false;return rect(e).left-rect(panel).left<10&&!e.classList.contains('panel-body')&&parseFloat(getComputedStyle(e).paddingLeft)<10;}).map(e=>e.closest('.panel').querySelector('.panel-heading')?.innerText);
const rows=[...document.querySelectorAll('.module-content .row > .row')].filter(shown).filter(e=>rect(e).width<e.parentElement.clientWidth-parseFloat(getComputedStyle(e.parentElement).paddingLeft)-parseFloat(getComputedStyle(e.parentElement).paddingRight)-3).map(e=>e.innerText.slice(0,80));
const controls=[...document.querySelectorAll('main button,main input:not([type=hidden]),main select,main textarea')].filter(shown).filter(e=>!e.closest('.hgms-table-scroll'));
const overlaps=[];for(let i=0;i<controls.length;i++){for(let j=i+1;j<controls.length;j++){const a=controls[i],b=controls[j];if(a.contains(b)||b.contains(a)||(a.closest('.sidebar-search')&&a.closest('.sidebar-search')===b.closest('.sidebar-search')))continue;if((a.id==='hgms-password'&&b.getAttribute('aria-label')==='Show password')||(b.id==='hgms-password'&&a.getAttribute('aria-label')==='Show password'))continue;const x=rect(a),y=rect(b);if(Math.min(x.right,y.right)-Math.max(x.left,y.left)>3&&Math.min(x.bottom,y.bottom)-Math.max(x.top,y.top)>3)overlaps.push([a.outerHTML.slice(0,160),b.outerHTML.slice(0,160)]);}}
return {unstyled,overflow:document.documentElement.scrollWidth>innerWidth+2,renderError:/Unable to open this page|Page not found/.test(document.body.innerText),unnamed:inputs.filter(e=>!e.labels?.length&&!e.getAttribute('aria-label')&&!e.getAttribute('aria-labelledby')).length,small:inputs.filter(e=>!['checkbox','radio','file'].includes(e.type)&&rect(e).height<36).length,padding,rows,overlaps,tableCount:tables.length,formCount:document.querySelectorAll('main form').length};});
let tableSearch=true;
if(width===1440){for(const table of await p.locator('.hgms-data-table').all()){if(!await table.isVisible())continue;const input=table.getByRole('textbox',{name:'Search table',exact:true});await input.fill('HGMS_NONEXISTENT_TEST');if(!(await table.innerText()).includes('No matching records found'))tableSearch=false;await input.fill('');}}
results.push({route,width,...audit,tableSearch});await p.evaluate(()=>{document.activeElement?.blur();window.scrollTo(0,0);});
if(audit.overflow||audit.padding.length||audit.rows.length||audit.overlaps.length||!tableSearch)console.log('ISSUE '+JSON.stringify(results.at(-1)));
if((width===1440&&process.argv[2]==='1')||/billing|coupon|organizations|engagement\/manage/.test(route))await p.screenshot({path:output+'/'+route.replaceAll('/','_')+'-'+width+'.png',fullPage:true});
if(results.length%80===0)console.log('Progress '+results.length);
}await p.close();console.log('Reviewed '+routes.length+' routes at '+width); }));
}finally{const failures=results.filter(r=>r.unstyled||r.overflow||r.renderError||r.unnamed||r.small||r.padding.length||r.rows.length||r.overlaps.length||!r.tableSearch);fs.writeFileSync(output+'/results.json',JSON.stringify({results,failures,errors},null,2));console.log(JSON.stringify({checks:results.length,failures:failures.length,errors}));process.exitCode=failures.length||errors.length?1:0;await browser.close();server.close();}
