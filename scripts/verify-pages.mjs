import {chromium} from '@playwright/test';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import assert from 'node:assert/strict';
const live=process.argv[2],root=path.resolve('docs');
let server;
if(!live){server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');let p=decodeURIComponent(url.pathname).replace(/^\/hgms\//,'');if(!p||p.endsWith('/'))p+='index.html';const file=path.resolve(root,p);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404).end();return;}const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.woff2':'font/woff2'};res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});await new Promise(r=>server.listen(5193,'127.0.0.1',r));}
const base=live||'http://127.0.0.1:5193/hgms/';
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const errors=[],failed=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});
const ready=async()=>{await page.waitForTimeout(150);await page.locator('.hgms-loading').waitFor({state:'hidden'});};
const visit=async route=>{await page.evaluate(route=>{location.hash=route},route);await ready();};
try{
await page.goto(base,{waitUntil:'networkidle'});await ready();
await page.getByRole('button',{name:'Fill demo credentials'}).click();await page.getByRole('button',{name:'Sign in',exact:true}).click();await page.waitForURL('**#/home*');await ready();checks.push('Demo login');
await page.getByLabel('Active organization',{exact:true}).selectOption('all');await ready();assert.equal(await page.getByLabel('Active organization',{exact:true}).inputValue(),'all');checks.push('All Highgrade switch');
await page.reload({waitUntil:'networkidle'});await ready();assert.ok(await page.getByTestId('dashboard').isVisible());checks.push('Refresh on nested hash route');
const routes=JSON.parse(fs.readFileSync('src/data/routes.json','utf8')).filter(r=>!r.empty);
for(const [i,route] of routes.entries()){await visit(route.path);assert.equal(await page.getByRole('heading',{name:'Unable to open this page',exact:true}).count(),0,route.path);assert.ok((await page.locator('#root').innerText()).length>30,route.path);if(i%40===0)console.log('Reviewed',i+1,'/',routes.length);}
checks.push(routes.length+' routes rendered');
for(const width of [360,768,1440]){await page.setViewportSize({width,height:1000});for(const route of ['/home','/billing/invoice_management/manage_invoice','/master/organizations']){await visit(route);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route+' overflow '+width);}}
checks.push('Dashboard, invoices and organizations at 360/768/1440');
await visit('/home');fs.mkdirSync('reports/pages-deployment',{recursive:true});await page.screenshot({path:'reports/pages-deployment/'+(live?'live':'local')+'.png',fullPage:true});
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);fs.writeFileSync('reports/pages-deployment/'+(live?'live':'local')+'.json',JSON.stringify({base,checks,errors,failed},null,2));console.log('PASS',JSON.stringify(checks));
}finally{await browser.close();server?.close();}
