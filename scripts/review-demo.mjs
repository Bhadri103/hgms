import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/demo-review');
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

try{
 await check('Login entry, validation, password toggle and demo sign in',async()=>{
  await visit('/');await page.waitForURL('**/login');await page.getByRole('heading',{name:'Sign in to your workspace'}).waitFor();
  await page.getByPlaceholder('Username',{exact:true}).fill('wrong');await page.getByPlaceholder('Password',{exact:true}).fill('wrong');await page.getByRole('button',{name:'Sign in',exact:true}).click();await page.getByRole('alert').waitFor();
  await page.getByRole('button',{name:'Fill demo credentials'}).click();await page.getByRole('button',{name:'Show password'}).click();assert.equal(await page.getByPlaceholder('Password',{exact:true}).getAttribute('type'),'text');
  await page.screenshot({path:output+'/login-desktop.png',fullPage:true});await page.getByRole('button',{name:'Sign in',exact:true}).click();await page.waitForURL('**/home');
 });
 await check('All 49 metrics and all monthly forecast windows have data',async()=>{
  await page.locator('[data-metric-value]').first().waitFor();const values=await page.locator('[data-metric-value]').allTextContents();assert.equal(values.length,49);assert.ok(values.every(v=>Number(v.replace(/[^0-9.]/g,''))>0),JSON.stringify(values));
  for(const months of ['3','6','12']){await page.getByLabel('Projection history',{exact:true}).selectOption(months);const heights=await page.getByRole('img',{name:'Monthly sales projection history'}).locator('rect').evaluateAll(els=>els.map(e=>Number(e.getAttribute('height'))));assert.ok(heights.every(h=>h>1));}
  await page.screenshot({path:output+'/dashboard.png',fullPage:true});
 });
 await check('Demo form fill supplies editable values',async()=>{await visit('/local/add_batch');await page.getByRole('button',{name:'Fill demo data'}).click();assert.ok(await page.locator('main input[type=text]').first().inputValue());});
 const routes=[...JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json'))),...JSON.parse(fs.readFileSync(path.join(root,'src/data/missing-routes.json'))).map(r=>({path:'/'+r.route}))];
 for(const r of routes){await check(r.path,async()=>{await visit(r.path);const body=await page.locator('body').innerText();assert.ok(!/ggms/i.test(body));assert.ok(!/Unable to open this page|Page not found/.test(body));assert.equal(await page.locator('.hgms-data-table tbody').filter({hasText:'No matching records found'}).count(),0);assert.equal(await page.locator('select').evaluateAll(els=>els.filter(e=>e.getClientRects().length&&e.options.length===0).length),0);});}
 await check('Mobile login layout',async()=>{await page.setViewportSize({width:390,height:844});await visit('/login');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:output+'/login-mobile.png',fullPage:true});});
 await check('No external requests or API connections',async()=>{assert.ok(requests.every(url=>url.startsWith('http://127.0.0.1:5188/')||url.startsWith('data:')||url.startsWith('blob:')));assert.ok(await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content').then(v=>v.includes("connect-src 'none'")));});
}finally{fs.writeFileSync(output+'/results.json',JSON.stringify({checks,errors,externalRequests:requests.filter(url=>!url.startsWith('http://127.0.0.1:5188/')&&!url.startsWith('data:')&&!url.startsWith('blob:'))},null,2));await browser.close();server.close();process.exitCode=checks.some(c=>!c.pass)||errors.length?1:0;console.log(JSON.stringify({checks:checks.length,passed:checks.filter(c=>c.pass).length,errors}));}
