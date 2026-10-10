import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,process.argv.includes('--polish')?'reports/ui-review-polish':'reports/ui-review');
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

const routes=[...JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json'))),...JSON.parse(fs.readFileSync(path.join(root,'src/data/missing-routes.json'))).map(r=>({path:'/'+r.route}))];
if(process.argv.includes('--polish')){const keep=routes.filter(r=>r.path==='/general/inventory-management/manage_product'||(!r.empty&&r.file&&/-summary-value/.test(fs.readFileSync(path.join(root,r.file),'utf8'))));routes.splice(0,routes.length,...keep);}
const results=[];
try {
await Promise.all([390,820,1440].map(async width=> {
 const page=await context.newPage();page.setDefaultTimeout(10000);page.on('pageerror',e=>errors.push({width,error:e.message}));
 const visit=async route=>{await page.goto('http://127.0.0.1:5188'+route,{waitUntil:'domcontentloaded'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};
 await page.setViewportSize({width,height:1000});
 for(const route of routes){
  await visit(route.path);await page.locator('main').first().waitFor();await page.waitForTimeout(70);
  const audit=await page.evaluate(()=>{
   const visible=e=>e.getClientRects().length>0;
   const controls=[...document.querySelectorAll('main input:not([type=hidden]),main select,main textarea')].filter(visible);
   const overflow=[...document.querySelectorAll('main *')].filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+2&&!e.closest('.hgms-table-scroll,.overflow-x-auto,.table-responsive');}).slice(0,8).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.slice(0,70)}));
   return {overflow:document.documentElement.scrollWidth>innerWidth+2,renderError:/Unable to open this page|Page not found/.test(document.body.innerText),offenders:overflow,forms:document.querySelectorAll('main form').length,controls:controls.length,unnamed:controls.filter(e=>!e.labels?.length&&!e.getAttribute('aria-label')&&!e.getAttribute('aria-labelledby')).length,smallControls:controls.filter(e=>!['checkbox','radio','file'].includes(e.type)&&e.getBoundingClientRect().height<36).length};
  });
  results.push({route:route.path,width,...audit});
  if(audit.smallControls)console.log('SMALL CONTROLS '+width+' '+route.path+' '+audit.smallControls);
  if(audit.overflow)console.log('OVERFLOW '+width+' '+route.path+' '+JSON.stringify(audit.offenders));
  if(['/cash-flow-report/cashflow_report','/membership/all_member_live_report','/master/organizations','/communicate/promotion_broadcast/sendto_all','/general/bult-upload/bulkmember_upload1','/general/bult-upload/bulkmember_upload2','/membership/add_member','/master/manage_batch','/Class_booking/booking_calendar','/login0bfe','/report/collection_report','/general/bulk-upload','/attendance_gym_qrcode','/report/plan_report','/report/due_report','/report/sales_tracker','/master/manage_ai_timezone','/general/inventory-management/manage_product'].includes(route.path))await page.screenshot({path:output+'/'+route.path.replaceAll('/','_')+'-'+width+'.png',fullPage:true});
 }
 console.log('Reviewed '+routes.length+' routes at '+width+'px');
await page.close();
}));
}finally{process.exitCode=results.some(r=>r.overflow||r.renderError||r.unnamed||r.smallControls)||errors.length?1:0;fs.writeFileSync(output+'/results.json',JSON.stringify({results,errors},null,2));await browser.close();server.close();console.log(JSON.stringify({pages:results.length,overflow:results.filter(r=>r.overflow).length,unnamed:results.reduce((s,r)=>s+r.unnamed,0),smallControls:results.reduce((s,r)=>s+r.smallControls,0),errors}));}

