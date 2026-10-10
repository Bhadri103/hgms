import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/dashboard-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5241,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5241'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};

try {
 await visit('/attendance_gym_qrcode');
 await page.locator('.hgms-qr-frame img').waitFor();
 const first=await page.locator('.hgms-qr-frame img').getAttribute('src');
 await page.locator('#qr-organization').selectOption('2');
 await page.getByRole('heading',{name:'Highgrade Move',exact:true}).waitFor();
 await page.locator('.hgms-qr-frame img').waitFor();
 assert.notEqual(await page.locator('.hgms-qr-frame img').getAttribute('src'),first);
 await page.screenshot({path:output+'/qr-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
 await page.screenshot({path:output+'/qr-mobile.png',fullPage:true});
 await page.emulateMedia({media:'print'});
 assert.equal(await page.locator('.hgms-qr-heading').isVisible(),false);
 assert.equal(await page.locator('.hgms-qr-poster').isVisible(),true);
 assert.deepEqual(errors,[]);
 console.log('PASS QR branch regeneration, mobile overflow, and print visibility');
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
