import {activeOrganizationId, readState} from '../services/repository.js';
import {demoToday} from './demo-history.js';
export const names = ['Aarav Sharma', 'Ananya Patel', 'Rohan Mehta', 'Priya Singh', 'Vikram Shah', 'Neha Kapoor', 'Arjun Rao', 'Isha Verma', 'Kabir Jain', 'Meera Joshi', 'Dev Malhotra', 'Sana Khan'];
const allMembers = names.map((name, i) => ({ id: String(2101+i), name, mobile: `900001${String(i+1).padStart(4,'0')}`, email: `member${i+1}@example.com`, address: `${12+i} Park Road, Jaipur`, gender: i%2?'female':'male', plan: ['1 Month plan','3 month plan','6 month plan'][i%3], start: '2026-10-01', expiry: ['2026-10-31','2026-12-30','2027-03-30'][i%3], amount: [1000,2500,5000][i%3], paid: [1000,2000,4500][i%3], status: i===10?'Blocked':i===11?'Expired':'Active', org_id: String(i%3+1), batch: ['Morning','Evening'][i%2], vip: i%4===0 }));
// Enrich the local member fixtures so lifecycle reports can be previewed.
allMembers.forEach((member,i)=>{
 member.start=demoToday.slice(0,7)+'-01';
 const end=new Date(demoToday+'T12:00:00');end.setDate(end.getDate()+(i>=6&&i<=8||i===11?0:45+i));
 member.expiry=end.getFullYear()+'-'+String(end.getMonth()+1).padStart(2,'0')+'-'+String(end.getDate()).padStart(2,'0');
 member.dob='1995-'+demoToday.slice(5);member.anniversary='2020-'+demoToday.slice(5);
 member.last_attendance='2024-01-01';
 if(i>=6&&i<=8)member.plan='Personal Training';
 if(i===9)member.status='Frozen';
 if(i===1)member.left_date=demoToday;
});
const allPlans = [{id:'76', name:'1 Month plan', amount:1000, days:30}, {id:'67', name:'3 month plan', amount:2500, days:90}, {id:'79', name:'6 month plan', amount:5000, days:180}, {id:'82',name:'Special Month Plan',amount:2500,days:30}];
const scopedArray = getRows => new Proxy([], {get(_target, key) {const rows=getRows();const value=Reflect.get(rows,key);return typeof value==='function'?value.bind(rows):value;}});
export const members = scopedArray(() => {
 const state=readState(), saved=state.collections.members||[];
 return [...saved,...allMembers.filter(member=>(state.activeOrganizationId==='all'||member.org_id===state.activeOrganizationId)&&!saved.some(record=>record.id===member.id&&record.org_id===member.org_id))].filter(member=>!(state.branchStates?.[member.org_id]||state).deleted?.members?.includes(member.id));
});
export const plans = scopedArray(() => {
 const state=readState(), saved=[...(state.collections.plan||[]),...(state.collections.plans||[])];
 return [...saved,...(['all','1','2','3'].includes(state.activeOrganizationId)?allPlans:[]).filter(plan=>!saved.some(record=>record.id===plan.id))].filter(plan=>!state.deleted?.plan?.includes(plan.id));
});
export const staff = ['Ravi Kumar','Pooja Shah','Karan Singh','Nisha Gupta'];

export function domainFor(page) {
  page=page.replace(/\.(html|php)(\?.*)?$/,'').replace(/^\//,'');
  if (/master\//.test(page)) return page.replace(/^\//,'').replace('master/','').replace('manage_','');
  if (/expense/.test(page)) return 'expenses';
  if (/enquiry|followup|sales_tracker/.test(page)) return 'enquiries';
  if (/receipt|recipt|collection/.test(page)) return 'receipts';
  if (/invoice|due_report|tax_report/.test(page)) return 'invoices';
  if (/attendance|today_logs/.test(page)) return /trainer|staff/.test(page)?'staff_attendance':'attendance';
  if (/schcat/.test(page)) return 'scheduling_categories';
  if (/schplan/.test(page)) return 'scheduling_plans';
  if (/schclass/.test(page)) return 'classes';
  if (/booking/.test(page)) return 'bookings';
  if (/purchase/.test(page)) return 'purchases';
  if (/sale|sell/.test(page)) return 'sales';
  if (/product|item_report/.test(page)) return 'products';
  if (/event/.test(page)) return 'events';
  if (/salary/.test(page)) return 'salary';
  if (/measurement|measureN/.test(page)) return 'measurements';
  if (/workout|exercise/.test(page)) return /assign/.test(page)?'workout_assignments':'workouts';
  if (/diet/.test(page)) return /assign/.test(page)?'diet_assignments':'diets';
  if (/feedback/.test(page)) return 'feedback';
  if (/offer/.test(page)) return 'offers';
  if (/promotion_broadcast/.test(page)) return 'messages';
  return 'members';
}
export function columnValue(column, i, page = '') {
  const c = column.toLowerCase().trim(), m=allMembers[i%allMembers.length];
  if (/action|view log|thread|image|^img$|^logo$/.test(c)) return '';
  if (c==='id'||c==='#'||/sr no|^no\.|membership no|mem no|enquiry no/.test(c)) return m.id;
  if (/invoice/.test(c)&&!/date/.test(c)) return `INV${287+i}`;
  if (/receipt/.test(c)) return `REC${180+i}`;
  if (/phone|mobile|contact/.test(c)) return m.mobile;
  if (/e-?mail/.test(c)) return m.email;
  if (/address/.test(c)) return m.address;
  if (/expiry|end date|valid to/.test(c)) return m.expiry;
  if (/date|valid from|^start$|^end$|join|last updated/.test(c)) return m.start;
  if (/in time|out time|timing|time|shift/.test(c)) return /out/.test(c)?'08:15':'06:30';
  if (/due/.test(c)) return String(m.amount-m.paid);
  if (/discount|percentage|percent|cgst|vat|gst|tax/.test(c)) return /tax/.test(c)&&!/%|amount/.test(c)?['CGST','VAT','GST'][i%3]:'5';
  if (/paid|collection/.test(c)) return String(m.paid);
  if (/amount|price|selling|purchase|subtotal|total|salary|hra/.test(c)) return String(/salary/.test(c)?18000+i*1500:m.amount);
  if (/trainer|employee|log by|logby|^by$|user type|^user$/.test(c)) return staff[i%staff.length];
  if (/gym|organisation|organization/.test(c)) return ['HGMS - Gym Management Software','HGMS TEST','BIOMETRIC TEST'][i%3];
  if (/status|visible|show\/hide|verified/.test(c)) return 'Active';
  if (/payment|mode|account/.test(c)) return ['Cash','Online','Card'][i%3];
  if (/plan|package/.test(c)) return /workout/.test(c)?['Strength Foundation','Full Body Fitness','Mobility Flow'][i%3]:/diet/.test(c)?['Balanced Diet','High Protein','Plant Based'][i%3]:m.plan;
  if (/batch/.test(c)) return ['Morning','Evening','Weekend'][i%3];
  if (/unit/.test(c)) return ['Piece','Kg','Pack'][i%3];
  if (/role/.test(c)) return ['Trainer','Receptionist','Manager'][i%3];
  if (/product/.test(c)) return ['Protein Powder','Yoga Mat','Shaker Bottle'][i%3];
  if (/class/.test(c)) return ['Yoga Flow','Strength Training','Spin Class'][i%3];
  if (/category|inquiry type/.test(c)) return ['General','Fitness','Personal Training'][i%3];
  if (/duration|days/.test(c)) return '30';
  if (/feedback|remark|description|notes|response|content/.test(c)) return ['Morning training session','Follow up on membership renewal','Interested in personal training'][i%3];
  if (/name|member|customer|^workout$|^diet$/.test(c)) return m.name;
  if (/code/.test(c)) return `HG${100+i}`;
  if (/phone|contact/.test(c)) return m.mobile;
  if (/present/.test(c)) return '22';
  if (/absent|half day|holiday/.test(c)) return '2';
  if (/stock|^in$|^out$|balance|slots|booked|pass|session|usage|used|logs/.test(c)) return String(10+i);
  if (/type/.test(c)) return ['Regular','Group','Personal'][i%3];
  if (/city/.test(c)) return 'Jaipur';
  if (/location/.test(c)) return ['Studio A','Main Floor','Studio B'][i%3];
  return String(i+1);
}
export function seedRows(columns,page) {
  return Array.from({length:12},(_,i)=>({id:`seed-${i+1}`, memberId:allMembers[i].id, org_id:allMembers[i].org_id, cells: columns.map(c=>columnValue(c,i,page))})).filter(row=>activeOrganizationId()==='all'||row.org_id===activeOrganizationId());
}
