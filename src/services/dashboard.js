import {demoHistory} from '../data/demo-history.js';
// Date-only comparisons keep inclusive boundaries independent of the browser timezone.
export const dateKey = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const inRange = (date, range) => Boolean(date && String(date).slice(0,10)>=range.from && String(date).slice(0,10)<=range.to);
const shift = (day,n) => {const d=new Date(day+'T12:00:00');d.setDate(d.getDate()+n);return dateKey(d);};
export function presetRange(preset, today=dateKey(new Date())) {
  return {from:preset==='day'?today:preset==='week'?shift(today,-6):preset==='month'?today.slice(0,7)+'-01':today.slice(0,4)+'-01-01',to:today};
}
// Explicit dated local fixtures, never inferred from the reference screenshot totals.
export function dashboardData(repository,members,range,org='all',history=demoHistory) {
  const scope = rows => rows.filter(r=>org==='all'||String(r.org_id||'1')===org);
  const records = domain => {const saved=repository.collections?.[domain]||[];return scope([...saved,...(history[domain]||[]).filter(r=>!saved.some(s=>s.id===r.id&&String(s.org_id||1)===String(r.org_id||1)))]).filter(r=>!(repository.branchStates?.[r.org_id]||repository).deleted?.[domain]?.includes(r.id)).map(r=>({...r,date:r.date||r.Date||r.dd||r.payment_date||r.createdAt?.slice(0,10)||r.updatedAt?.slice(0,10),amount:Number(r.amount||r.Amount||r.paid_amount||0)}));};
  const joined = m => m.start||m.start_date||m.join_date||m.createdAt?.slice(0,10);
  const expiry = m => m.expiry||m.end_date;
  const selected=members.filter(m=>inRange(joined(m),range));
  const receipts=records('receipts');
  // Seed paid balances act as one opening receipt per member. Saved receipts are additional transactions.
  const payments=[...members.filter(m=>m.paid>0).map(m=>({date:joined(m),amount:m.paid})),...receipts];
  const expenses=records('expenses'), enquiries=records('enquiries'), events=records('events'), reminders=records('reminders'), followups=records('followups');
  const count=(rows,r=range,field='date')=>rows.filter(x=>inRange(x[field],r)).length;
  const sum=(rows,r=range)=>rows.filter(x=>inRange(x.date,r)).reduce((s,x)=>s+x.amount,0);
  const windowFor = label => {
    let from=range.from;
    if(/today/i.test(label))from=range.to;
    else if(/1-7|weekly/i.test(label))from=shift(range.to,-6);
    else if(/month/i.test(label))from=range.to.slice(0,7)+'-01';
    else if(/year/i.test(label))from=range.to.slice(0,4)+'-01';
    return {from:from>range.from?from:range.from,to:range.to};
  };
  const anniversary=(field)=>members.filter(m=>{
    if(!m[field])return false;
    for(let y=Number(range.from.slice(0,4));y<=Number(range.to.slice(0,4));y++)if(inRange(`${y}-${m[field].slice(5,10)}`,range))return true;
    return false;
  }).length;
  function value(label) {
    const r=windowFor(label), exp=members.map(m=>({...m,date:expiry(m)}));
    if(label==='Total Memberships'||label==='Total Joining')return selected.length;
    if(label==='Live Memberships')return selected.filter(m=>m.status==='Active'&&(!expiry(m)||expiry(m)>=range.to)).length;
    if(label==='GYM Due Amount')return selected.reduce((s,m)=>s+Math.max(0,m.amount-m.paid),0);
    if(/Collection/.test(label))return sum(payments,r);
    if(/Expense/.test(label))return sum(expenses,r);
    if(/Enquiry/.test(label))return count(enquiries,r);
    if(label==='Checked In')return count(records('attendance'));
    if(label==='Birthday'||label==='Anniversary')return anniversary(label==='Birthday'?'dob':'anniversary');
    if(label==='Irregular Members')return selected.filter(m=>m.last_attendance&&m.last_attendance<shift(range.to,-14)).length;
    if(label==='Membership Expired')return count(exp);
    if(/Expiring/.test(label))return count(exp.filter(m=>!/^PT/.test(label)||/pt|personal|group/i.test(m.plan)),r);
    if(label==='Joining Yearly')return selected.filter(m=>inRange(joined(m),r)).length;
    if(/Member Left/.test(label))return count(members.map(m=>({date:m.left_date})),r);
    if(/Reminder/.test(label))return count(reminders,r);
    if(/Followup/.test(label))return count(followups.filter(x=>x.status===(label==='Delayed Followup'?'Delayed':'Fresh')),r);
    if(label==='Freeze Requests')return count(records('freeze_requests'));
    if(label==='Total Trainer')return count(records('trainers'));
    if(/Events/.test(label))return count(events,r);
    if(label==='Renewed Memberships')return count(records('renewals'));
    if(label==='Freezed Member Report')return selected.filter(m=>/freez|frozen/i.test(m.status)).length;
    throw new Error(`Dashboard metric is unmapped: ${label}`);
  }
  const days=Math.round((new Date(range.to+'T12:00:00')-new Date(range.from+'T12:00:00'))/86400000)+1;
  const step=days<=14?1:Math.ceil(days/12);
  const buckets=[];
  for(let i=0;i<days;i+=step){const from=shift(range.from,i),to=shift(range.from,Math.min(days-1,i+step-1)),r={from,to};buckets.push({from,to,label:from.slice(5),collection:sum(payments,r),expenses:sum(expenses,r),joining:selected.filter(m=>inRange(joined(m),r)).length,enquiries:count(enquiries,r)});}
  function projection(months) {
    const end=new Date(range.to+'T12:00:00');
    const history=Array.from({length:months},(_,i)=>{
      const first=new Date(end.getFullYear(),end.getMonth()-months+i,1),last=new Date(first.getFullYear(),first.getMonth()+1,0);
      return {label:first.toLocaleDateString('en',{month:'short',year:'2-digit'}),value:sum(payments,{from:dateKey(first),to:dateKey(last)})};
    });
    return {history,estimate:history.reduce((total,p)=>total+p.value,0)/months};
  }
  return {value,selected,buckets,projection,collection:sum(payments),expenses:sum(expenses)};
}
