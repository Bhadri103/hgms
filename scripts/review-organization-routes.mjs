import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/dashboard-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5237,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5237'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};

try {
 await visit('/master/organizations');await page.getByRole('button',{name:'Add organization',exact:true}).click();await page.getByRole('dialog').getByLabel('Organization name').fill('Empty audit branch');await page.getByRole('button',{name:'Create organization',exact:true}).click();await page.getByLabel('Active organization',{exact:true}).selectOption({label:'Empty audit branch'});
 const routes=JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json'))).filter(r=>!r.empty&&r.shell!==false);let count=0;
 for(const route of routes){await page.goto('http://127.0.0.1:5237'+route.path,{waitUntil:'domcontentloaded'});await page.locator('.hgms-loading').waitFor({state:'hidden'});assert.equal(await page.getByText('Unable to open this page',{exact:true}).count(),0,route.path);assert.equal(await page.getByLabel('Active organization',{exact:true}).locator('option:checked').innerText(),'Empty audit branch',route.path);const tbody=await page.locator('.hgms-data-table tbody').allInnerTexts();assert.ok(!tbody.join(' ').match(/Aarav|Ananya|Priya|Vikram/),route.path+' leaked seed members');count++;}
 assert.equal(errors.length,0);console.log('PASS '+count+' routes preserve active organization and show no other branch seed members');
}finally{await browser.close();server.close();}
