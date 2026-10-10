import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/dashboard-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5242,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5242'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};

try {
 await visit('/report/sales_tracker');
 const search=await page.getByLabel('Search members',{exact:true}).boundingBox();
 const org=await page.getByLabel('Active organization',{exact:true}).boundingBox();
 assert.ok(search.x<org.x);
 const outer=page.locator('#myTab4');
 await outer.getByRole('tab').filter({hasText:'Inquiry'}).first().click();
 assert.equal(await page.locator('#panel_tab_inquiry').isVisible(),true);
 const inner=page.locator('#panel_tab_inquiry .nav-tabs').first().getByRole('tab');
 if(await inner.count()>1)await inner.nth(1).click();
 assert.equal(await page.locator('#panel_tab_inquiry').isVisible(),true);
 assert.equal(await page.locator('#panel_tab_inquiry .nav-tabs').first().locator('[aria-selected="true"]').count(),1);
 await outer.getByRole('tab').filter({hasText:'Sales'}).click();
 assert.equal(await page.locator('#panel_tab_sales').isVisible(),true);
 await page.setViewportSize({width:390,height:844});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
 assert.deepEqual(errors,[]);
 console.log('PASS header order, nested tabs, active selection, and mobile width');
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
