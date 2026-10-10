import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist');
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5243,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
try {
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto('http://127.0.0.1:5243/membership/quick_membership',{waitUntil:'networkidle'});
  assert.equal(await page.getByRole('link',{name:'Quick Membership',exact:true}).count(),1);
  assert.equal(await page.locator('.quick-member-form :is(input,select,textarea)').count(),7);
  await page.getByLabel('Name *').fill('Quick Member Test');
  await page.getByLabel('Mobile Number *').fill('9876501234');
  await page.getByLabel('Gender *').selectOption('Female');
  await page.getByRole('button',{name:'Add member'}).click();
  await page.getByRole('heading',{name:'Member added'}).waitFor();
  assert.match(await page.locator('.quick-member-help').innerText(),/Quick Member Test/);
  await page.getByRole('link',{name:'View member'}).click();
  await page.waitForLoadState('networkidle');
  assert.match(page.url(),/member_profile\/member_profile\?q=Quick(?:%20|\+)Member(?:%20|\+)Test/);
  const profileTable=page.locator('.hgms-data-table tbody');
  assert.match(await profileTable.innerText(),/Quick Member Test/);
  assert.deepEqual(errors,[]);
  await page.setViewportSize({width:390,height:844});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
  console.log('PASS quick membership menu, seven fields, save flow, and mobile layout');
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
