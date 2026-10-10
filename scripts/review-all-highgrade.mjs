import {checkWorkflows} from './workflow-checks.mjs';
import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'reports/all-highgrade-build'),output=path.join(root,'reports/all-highgrade-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5189,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5189'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};
async function check(name,run){try{await run();checks.push({name,pass:true});console.log('PASS '+name);}catch(e){checks.push({name,pass:false,error:e.message});console.log('FAIL '+name+' '+e.message);}}

try {
await visit('/home');
const selector=page.getByLabel('Active organization',{exact:true});
const totals=[];
for(const id of ['1','2','3','all']){
 await selector.selectOption(id);
 await page.waitForURL('**/home?org_id='+id);
 await page.getByLabel('From date',{exact:true}).fill('2020-01-01');await page.getByLabel('To date',{exact:true}).fill('2030-12-31');await page.getByRole('button',{name:'Apply dates'}).click();
 await page.locator('[data-metric="Total Memberships"]').scrollIntoViewIfNeeded();await page.waitForTimeout(1200);
 totals.push(Number((await page.locator('[data-metric="Total Memberships"] [data-metric-value] .sr-only').innerText()).replaceAll(',','')));
}
assert.ok(totals[3]>0);assert.equal(totals[3],totals[0]+totals[1]+totals[2]);
await page.reload();assert.equal(await selector.inputValue(),'all');
await visit('/billing/invoice_management/manage_invoice?org_id=all');
const sizes=page.getByLabel('Rows per page');
console.log('TABLE LABELS',await page.locator('select').evaluateAll(es=>es.map(e=>({label:e.getAttribute('aria-label'),options:[...e.options].map(o=>o.value)}))));
assert.ok(await page.locator('tbody tr').count()>4);
for(const width of [360,768,1440]){
 await page.setViewportSize({width,height:1000});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.screenshot({path:output+'/all-'+width+'.png',fullPage:true});
}
assert.deepEqual(errors,[]);
fs.writeFileSync(output+'/results.json',JSON.stringify({totals,checks:['branch totals aggregate','selection persists','combined invoice rows','responsive at 360,768,1440'],errors},null,2));
console.log('PASS All Highgrade',totals);
}finally{await browser.close();server.close();}
