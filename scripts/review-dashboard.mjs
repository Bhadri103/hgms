import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/dashboard-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5188,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5188'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};
async function check(name,run){try{await run();checks.push({name,pass:true});console.log('PASS '+name);}catch(e){checks.push({name,pass:false,error:e.message});console.log('FAIL '+name+' '+e.message);}}
try{
  await visit('/home');
  await check('Desktop dashboard, local theme, and font weight cap',async()=>{await page.getByRole('heading',{name:'Dashboard overview.'}).waitFor();assert.equal(await page.locator('style').count(),0);const weights=await page.locator('body *').evaluateAll(els=>els.filter(e=>e.getClientRects().length).map(e=>Number(getComputedStyle(e).fontWeight)));assert.ok(Math.max(...weights)<=700);assert.equal(await page.evaluate(()=>getComputedStyle(document.body).fontFamily.includes('Inter')),true);assert.ok(!requests.some(url=>/stylesheet.*\.css|bootstrap|main\.css|theme_dark|shell\.css|inline\.css|montserrat/i.test(url)));await page.screenshot({path:output+'/desktop.png',fullPage:true});});
  await check('All 49 metric cards, graphs, date filtering and validation',async()=>{
    const groups=JSON.parse(fs.readFileSync(path.join(root,'src/data/dashboard-reports.json')));
    assert.equal(await page.locator('[data-metric]').count(),49);
    for(const item of groups.flatMap(g=>g.items))assert.equal(await page.locator('[data-metric]').filter({has:page.getByRole('heading',{name:item.label,exact:true})}).count(),1);
    await page.getByRole('img',{name:'Collection & expenses',exact:true}).waitFor();
    await page.getByRole('img',{name:'Joining & enquiries',exact:true}).waitFor();
    await page.getByLabel('From date',{exact:true}).fill('1900-01-01');await page.getByLabel('To date',{exact:true}).fill('1900-12-31');await page.getByRole('button',{name:'Apply dates'}).click();
    assert.equal(await page.locator('[data-metric="Total Memberships"] [data-metric-value]').innerText(),'0');
    assert.match(await page.locator('[data-metric="Total Collection"] [data-metric-value]').innerText(),/0/);
    assert.equal(await page.locator('table[aria-label="Recent members"] tbody tr').count(),0);
    await page.getByLabel('From date',{exact:true}).fill('2027-01-01');await page.getByRole('button',{name:'Apply dates'}).click();await page.getByRole('alert').filter({hasText:'Choose valid dates'}).waitFor();
    await page.getByLabel('From date',{exact:true}).fill('2026-10-01');await page.getByLabel('To date',{exact:true}).fill('2026-10-01');await page.getByRole('button',{name:'Apply dates'}).click();
    assert.equal(await page.locator('[data-metric="Total Memberships"] [data-metric-value]').innerText(),'12');
    assert.match(await page.locator('[data-metric="Total Collection"] [data-metric-value]').innerText(),/30,000/);
    await page.getByRole('button',{name:'This year',exact:true}).click();assert.match(await page.getByLabel('From date',{exact:true}).inputValue(),/^\d{4}-01-01$/);await page.getByLabel('Projection history',{exact:true}).selectOption('12');assert.equal(await page.getByRole('img',{name:'Monthly sales projection history'}).locator('[data-projection-point]').count(),12);
  });
  await check('Rupee displays across dashboard and financial reports',async()=>{
    assert.match(await page.locator('[data-metric="Total Collection"]').innerText(),/₹/);
    for(const route of ['/report/collection_report','/report/due_report','/report/sales_tracker']){await visit(route);const text=await page.locator('body').innerText();assert.ok(!text.includes('AED'));assert.ok(text.includes('₹'));}
    await visit('/home');
  });
  await check('Member search and status filters',async()=>{await page.getByLabel('Filter dashboard members').fill('Aarav');assert.equal(await page.locator('table[aria-label="Recent members"] tbody tr').count(),1);await page.getByLabel('Filter dashboard members').fill('');await page.getByLabel('Membership status').selectOption('Expired');assert.equal(await page.locator('table[aria-label="Recent members"] tbody tr').count(),1);await page.getByLabel('Membership status').selectOption('All members');});
  await check('Workspace selection, focus, and escape',async()=>{await page.getByRole('button',{name:'Choose workspace'}).click();await page.getByRole('dialog',{name:'Choose workspace'}).waitFor();await page.keyboard.press('Escape');assert.equal(await page.getByRole('dialog').count(),0);await page.getByRole('button',{name:'Choose workspace'}).click();await page.getByRole('dialog').getByRole('button',{name:/HGMS TEST/}).click();await page.waitForURL('**/home?org_id=2');await page.waitForFunction(()=>document.querySelector('[data-metric="Total Memberships"] [data-metric-value]')?.textContent==='4');assert.equal(await page.locator('table[aria-label="Recent members"] tbody tr').count(),4);await visit('/home');});
  await check('All report groups remain navigable',async()=>{const groups=JSON.parse(fs.readFileSync(path.join(root,'src/data/dashboard-reports.json')));for(const group of groups){await page.getByRole('button',{name:group.title==='All Report'?'Overview':group.title,exact:true}).click();for(const item of group.items)assert.ok(await page.getByRole('link',{name:item.label,exact:true}).last().isVisible());}});
  await check('Dashboard export downloads actual summary',async()=>{const waiting=page.waitForEvent('download');await page.getByRole('button',{name:'Export overview'}).click();const download=await waiting;assert.equal(download.suggestedFilename(),'hgms-dashboard.csv');const stream=await download.createReadStream();let csv='';for await(const chunk of stream)csv+=chunk;assert.match(csv,/Total Memberships/);assert.match(csv,/Freezed Member Report/);assert.match(csv,/From/);});
  await check('Sidebar navigation and module styling',async()=>{await page.getByRole('button',{name:'Master',exact:true}).click();await page.getByRole('link',{name:'Batch Management',exact:true}).click();await page.waitForURL('**/master/manage_batch*');await page.getByLabel('Search table').fill('Morning');assert.ok(await page.locator('tbody').innerText().then(t=>t.includes('Morning')));await page.getByLabel('Search table').fill('');await page.screenshot({path:output+'/batch.png',fullPage:true});});
  await check('Mobile layout and navigation',async()=>{await page.setViewportSize({width:390,height:844});await visit('/home');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.getByRole('button',{name:'Open navigation'}).click();assert.ok(await page.getByRole('link',{name:'HGMS dashboard'}).isVisible());await page.getByRole('button',{name:'Close navigation',exact:true}).click();await page.screenshot({path:output+'/mobile.png',fullPage:true});});
  await check('Tablet layout has no horizontal overflow',async()=>{await page.setViewportSize({width:820,height:1180});await visit('/home');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:output+'/tablet.png',fullPage:true});});
  if(process.argv.includes('--all-routes')){await page.setViewportSize({width:1440,height:1000});const routes=JSON.parse(fs.readFileSync(path.join(root,'src/data/routes.json')));let count=0;for(const route of routes){await check(`Route ${route.path}`,async()=>{await visit(route.path);assert.equal(await page.getByText('Unable to open this page',{exact:true}).count(),0);assert.ok((await page.locator('body').innerText()).length>80);const weights=await page.locator('body *').evaluateAll(els=>els.filter(e=>e.getClientRects().length).map(e=>Number(getComputedStyle(e).fontWeight)));assert.ok(Math.max(...weights)<=700);});count++;}}
}finally{fs.writeFileSync(output+'/results.json',JSON.stringify({checks,errors,legacyStylesRequested:requests.filter(url=>/stylesheet.*\.css|bootstrap|main\.css|theme_dark|shell\.css|inline\.css|montserrat/i.test(url))},null,2));await browser.close();server.close();process.exitCode=checks.some(c=>!c.pass)||errors.length?1:0;console.log(JSON.stringify({checks:checks.length,passed:checks.filter(c=>c.pass).length,errors}));}

