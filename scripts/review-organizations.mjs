import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'reports/dashboard-review');
fs.mkdirSync(output,{recursive:true});
const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png'};
const server=http.createServer((req,res)=>{let file=path.resolve(dist,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(dist+path.sep)&&file!==dist){res.writeHead(403).end();return;}if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(dist,'index.html');res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));});
await new Promise(resolve=>server.listen(5234,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});
const page=await context.newPage();page.setDefaultTimeout(10000);
const errors=[],requests=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
const visit=async route=>{await page.goto('http://127.0.0.1:5234'+route,{waitUntil:'networkidle'});await page.locator('.hgms-loading').waitFor({state:'hidden'});};

try {
 await visit('/home');await page.getByLabel('Active organization',{exact:true}).waitFor();assert.equal(await page.getByLabel('Active organization',{exact:true}).inputValue(),'1');assert.equal(await page.locator('[data-metric="Total Memberships"] [data-metric-value]').innerText(),'4');
 await visit('/member_profile/member_profile');assert.equal(await page.locator('.hgms-data-table tbody tr').count(),4);assert.match(await page.locator('.hgms-data-table').innerText(),/Aarav/);assert.ok(!(await page.locator('.hgms-data-table').innerText()).includes('Ananya'));
 await page.getByLabel('Active organization',{exact:true}).selectOption('2');await page.waitForURL('**org_id=2');assert.equal(await page.locator('.hgms-data-table tbody tr').count(),4);assert.match(await page.locator('.hgms-data-table').innerText(),/Ananya/);assert.ok(!(await page.locator('.hgms-data-table').innerText()).includes('Aarav'));
 await page.getByLabel('Search members',{exact:true}).fill('Aarav');await page.getByText('No matching members',{exact:true}).waitFor();await page.keyboard.press('Escape');
 await visit('/master/organizations');await page.getByRole('button',{name:'Add organization',exact:true}).click();await page.getByRole('dialog').getByLabel('Organization name').fill('Highgrade Test Branch');await page.getByRole('button',{name:'Create organization',exact:true}).click();
 const id=await page.getByLabel('Active organization',{exact:true}).locator('option').filter({hasText:'Highgrade Test Branch'}).getAttribute('value');await page.getByLabel('Active organization',{exact:true}).selectOption(id);
 await visit('/home');assert.equal(await page.locator('[data-metric="Total Memberships"] [data-metric-value]').innerText(),'0');assert.match(await page.locator('[data-metric="Total Collection"] [data-metric-value]').innerText(),/0/);
 await visit('/member_profile/member_profile');await page.getByText('No matching records found',{exact:true}).waitFor();
 await page.getByRole('button',{name:'Highgrade Test Branch',exact:true}).click();await page.getByRole('dialog',{name:'Switch organization'}).waitFor();assert.equal(await page.getByRole('dialog').locator('.org-choice').count(),4);await page.keyboard.press('Escape');
 await visit('/local/add_branch_record');await page.getByLabel('Name',{exact:true}).fill('BranchOnlyMember');await page.getByLabel('Mobile',{exact:true}).fill('9000088888');await page.getByLabel('Address',{exact:true}).fill('Test address');await page.getByLabel('Status',{exact:true}).fill('Active');await page.getByRole('button',{name:'Submit',exact:true}).click();await page.getByText('Saved successfully.',{exact:true}).waitFor();
 await visit('/member_profile/member_profile');assert.match(await page.locator('.hgms-data-table').innerText(),/BranchOnlyMember/);const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Export To Excel',exact:true}).click();const stream=await (await pending).createReadStream();let csv='';for await(const chunk of stream)csv+=chunk;assert.match(csv,/BranchOnlyMember/);assert.ok(!csv.includes('Aarav'));
 await page.getByLabel('Active organization',{exact:true}).selectOption('1');await page.waitForURL('**org_id=1');assert.ok(!(await page.locator('.hgms-data-table').innerText()).includes('BranchOnlyMember'));await page.getByLabel('Active organization',{exact:true}).selectOption(id);await page.reload();await page.locator('.hgms-loading').waitFor({state:'hidden'});assert.equal(await page.getByLabel('Active organization',{exact:true}).inputValue(),id);assert.match(await page.locator('.hgms-data-table').innerText(),/BranchOnlyMember/);
 await visit('/master/organizations');await page.screenshot({path:output+'/organizations-desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:output+'/organizations-mobile.png',fullPage:true});assert.equal(errors.length,0);console.log('PASS branch creation, switching, scoped dashboard/search/tables/exports, saved-record isolation, refresh persistence, legacy switchers, mobile');
} finally {await browser.close();server.close();}
