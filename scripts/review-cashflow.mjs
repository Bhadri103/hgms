import {checkWorkflows} from './workflow-checks.mjs';
import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/cashflow-review');
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
try{await visit('/cash-flow-report/cashflow_report?org_id=1');
await page.getByRole('button',{name:'Add Opening Balance',exact:true}).click();
await page.getByLabel('Opening Balance (INR)',{exact:true}).fill('25000');
await page.getByRole('button',{name:'Save balance'}).click();
assert.match(await page.locator('[aria-label="Cashflow summary"]').innerText(),/25,000/);
await page.reload();assert.match(await page.locator('[aria-label="Cashflow summary"]').innerText(),/25,000/);
await page.locator('[data-testid="cashflow-page"] form select').first().selectOption('9');await page.getByRole('button',{name:'Submit',exact:true}).click();
assert.match(await page.locator('tbody').first().innerText(),new RegExp(new Date().getFullYear()+'-09'));
await page.getByRole('button',{name:'HGMS Central',exact:true}).click();await page.getByRole('button',{name:'HGMS West',exact:true}).click();assert.match(page.url(),/org_id=2/);
for(const width of [390,820,1440]){await page.setViewportSize({width,height:1000});await visit('/membership/all_member_live_report?org_id=1');const cards=await page.locator('.mem-stat-card').evaluateAll(es=>es.map(e=>({width:e.clientWidth,height:e.clientHeight})));assert.ok(cards.every(c=>c.width>130&&c.height<180));await page.screenshot({path:output+'/membership-'+width+'.png',fullPage:true});}
assert.equal(errors.length,0);console.log('PASS cashflow opening balance persistence, month filter, workspace switch, membership cards at 3 widths');}finally{await browser.close();server.close();}