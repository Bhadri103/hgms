import {preview} from 'vite';
import {chromium} from '@playwright/test';
import fs from 'node:fs';
const server=await preview({configLoader:'native',preview:{host:'127.0.0.1',port:5199}});
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const output='reports/layout-polish';fs.mkdirSync(output,{recursive:true});
const results=[],errors=[];
const reports=['gift_days_report','irregular_members','pt_gx_expiring','today_member_report','renewal_members','expired_memberreport','sales_tracker','collection_report','collection_report_all','collection_report_pos','due_report','profit_loss_report','promotion_report','trainer_ptreport','today_event','incentive_report'];
try {
 for(const width of [390,820,1440]){
  const page=await browser.newPage({viewport:{width,height:1000}});page.on('pageerror',error=>errors.push(error.message));
  for(const name of reports){await page.goto('http://127.0.0.1:5199/report/'+name);await page.locator('.hgms-loading').waitFor({state:'hidden'});await page.locator('main input,main h1').first().waitFor();
   const audit=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+2,unnamed:[...document.querySelectorAll('main input:not([type=hidden]),main select')].filter(el=>el.getClientRects().length&&!['submit','button','reset'].includes(el.type)&&!el.labels?.length&&!el.getAttribute('aria-label')).map(el=>({id:el.id,name:el.name,type:el.type}))}));
   results.push({name,width,...audit});
   if(width!==820)await page.screenshot({path:output+'/'+name+'-'+width+'.png',fullPage:true});
  }
  for(const [name,range,single] of [['sales_tracker','#tday2','#tday'],['incentive_report','#tday2','#tday'],['today_event','#event_date_range','#event_date_single'],['profit_loss_report','#pl_range_box','#pl_single_box']]){
   await page.goto('http://127.0.0.1:5199/report/'+name);await page.locator('.hgms-loading').waitFor({state:'hidden'});
   await page.locator('input[type=radio][value=range]').first().check();if(!await page.locator(range).isVisible()||await page.locator(single).isVisible())errors.push(name+' range mode');
   await page.locator('input[type=radio][value=date]').first().check();if(!await page.locator(single).isVisible()||await page.locator(range).isVisible())errors.push(name+' date mode');
  }
  await page.close();console.log('Checked reports at '+width+'px');
 }
}finally{await browser.close();await new Promise(resolve=>server.httpServer.close(resolve));fs.writeFileSync(output+'/results.json',JSON.stringify({results,errors},null,2));}
console.log(JSON.stringify({checks:results.length,overflow:results.filter(r=>r.overflow),unnamed:results.filter(r=>r.unnamed.length),errors}));process.exitCode=results.some(r=>r.overflow)||errors.length?1:0;
