// Local-only demo transactions: 18 months of history plus recent daily activity.
const day = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const demoToday=day(new Date());
const now=new Date(demoToday+'T12:00:00');
// Repeatable peaks and dips make the demo's monthly sales trends easy to see.
const monthlySalesFactors=[1.1,0.82,1.35,0.95,1.18,0.72,1.28,0.9,1.12,0.78,1.3,0.88,1.16,0.8,1.24,0.92,1.08,0.76];
export const demoHistory=Object.fromEntries(['receipts','expenses','enquiries','attendance','events','reminders','followups','freeze_requests','renewals','trainers'].map((domain,k)=>{
 const rows=[];
 for(let org=1;org<=3;org++)for(let month=0;month<18;month++)for(let i=0;i<3;i++){
   const date=day(new Date(now.getFullYear(),now.getMonth()-month,3+i*8));
   rows.push({id:`demo-${domain}-${org}-${month}-${i}`,org_id:String(org),date,name:['Aarav Sharma','Priya Singh','Rohan Mehta'][i],amount:domain==='receipts'?Math.round((3500+org*750+(18-month)*180+i*500)*monthlySalesFactors[month]):500+org*90+i*150,status:i%2?'Fresh':'Delayed'});
 }
 for(let org=1;org<=3;org++)for(let offset=0;offset<7;offset++){
   const date=new Date(now);date.setDate(date.getDate()-offset);
   rows.push({id:`demo-recent-${domain}-${org}-${offset}`,org_id:String(org),date:day(date),name:'Neha Kapoor',amount:domain==='receipts'?1250+offset*200:250+offset*50,status:offset%2?'Fresh':'Delayed'});
 }
 return [domain,rows];
}));
