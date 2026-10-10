import { brand } from '../config/brand.js';
const listeners = new Set();
let memory, root;
export const defaultOrganizations = [
  {id:'1', name:'Highgrade Fitness Studio - Unisex'},
  {id:'2', name:'Highgrade Move'},
  {id:'3', name:'Highgrade for Womens'},
];
export const allOrganizations = {id:'all',name:'All Highgrade'};
const branchKeys = ['collections','tables','forms','logs','edits','deleted','readNotificationIds'];
const emptyBranch = () => ({collections:{},tables:{},forms:{},logs:[],edits:{},deleted:{},readNotificationIds:[]});
function initialize() {
  if(root) return;
  let stored;
  try {stored=JSON.parse(localStorage.getItem(brand.storageKey));} catch {stored=null;}
  if(stored?.organizationVersion===1) {root=stored;return;}
  const previous=stored||emptyBranch();
  const ids=new Set(['1','2','3']);
  for(const rows of Object.values(previous.collections||{})) for(const record of rows) if(record.org_id&&record.org_id!=='all')ids.add(String(record.org_id));
  for(const rows of Object.values(previous.tables||{})) for(const record of rows) if(record.org_id&&record.org_id!=='all')ids.add(String(record.org_id));
  const organizations=[...defaultOrganizations,...[...ids].filter(id=>!['1','2','3'].includes(id)).map(id=>({id,name:`Imported branch ${id}`}))];
  const branches=Object.fromEntries([...ids].map(id=>{
    const scope=rows=>rows.filter(row=>String(row.org_id&&row.org_id!=='all'?row.org_id:'1')===id);
    const belongs=recordId=>{
      const record=[...Object.values(previous.collections||{}).flat(),...Object.values(previous.tables||{}).flat()].find(row=>row.id===recordId);
      if(record)return String(record.org_id&&record.org_id!=='all'?record.org_id:'1')===id;
      const seedIndex=/^seed-(\d+)$/.exec(recordId);
      if(seedIndex)return String((Number(seedIndex[1])-1)%3+1)===id;
      if(/^21\d\d$/.test(recordId))return String((Number(recordId)-2101)%3+1)===id;
      return id==='1';
    };
    return [id,{...emptyBranch(),collections:Object.fromEntries(Object.entries(previous.collections||{}).map(([key,rows])=>[key,scope(rows)])),tables:Object.fromEntries(Object.entries(previous.tables||{}).map(([key,rows])=>[key,scope(rows)])),logs:scope(previous.logs||[]),forms:id==='1'?previous.forms||{}:{},edits:Object.fromEntries(Object.entries(previous.edits||{}).map(([domain,entries])=>[domain,Object.fromEntries(Object.entries(entries).filter(([recordId])=>belongs(recordId)))])),deleted:Object.fromEntries(Object.entries(previous.deleted||{}).map(([domain,entries])=>[domain,entries.filter(belongs)])),readNotificationIds:id==='1'?previous.readNotificationIds||[]:[]}];
  }));
  root={...previous,organizationVersion:1,organizations,activeOrganizationId:'1',branches};
  // Keep an untouched recovery copy before the first migration write.
  if(stored&&!localStorage.getItem(brand.storageKey+'-before-organizations')) localStorage.setItem(brand.storageKey+'-before-organizations',JSON.stringify(stored));
}
export function readState() {
  if (memory) return memory;
  initialize();
  const {branches,...global}=root;
  if(root.activeOrganizationId==='all') {
    const combined=emptyBranch();
    for(const [orgId,branch] of Object.entries(branches)) {
      for(const key of ['collections','tables']) for(const [domain,rows] of Object.entries(branch[key]||{})) {
        combined[key][domain]=[...(combined[key][domain]||[]),...rows.filter(row=>key!=='collections'||!branch.deleted?.[domain]?.includes(row.id)).map(row=>({...row,org_id:orgId}))];
      }
      combined.logs.push(...(branch.logs||[]));
      combined.readNotificationIds.push(...(branch.readNotificationIds||[]));
    }
    memory={...global,...combined,branchStates:branches};
  } else memory={...global,...(branches[root.activeOrganizationId]||emptyBranch())};
  return memory;
}
export function writeState(next) {
  initialize();
  if(root.activeOrganizationId==='all') {
    const current=readState();
    if(branchKeys.some(key=>key!=='readNotificationIds'&&next[key]!==current[key]))throw Error('Select a Highgrade branch before adding or changing records.');
    const global=Object.fromEntries(Object.entries(next).filter(([key])=>!branchKeys.includes(key)&&!['branches','branchStates'].includes(key)));
    const branches=Object.fromEntries(Object.entries(root.branches).map(([id,branch])=>[id,{...branch,readNotificationIds:next.readNotificationIds||branch.readNotificationIds}]));
    const updated={...root,...global,branches};
    localStorage.setItem(brand.storageKey,JSON.stringify(updated));root=updated;memory=null;listeners.forEach(fn=>fn());return;
  }
  const branch=Object.fromEntries(branchKeys.map(key=>[key,next[key]??emptyBranch()[key]]));
  const global=Object.fromEntries(Object.entries(next).filter(([key])=>!branchKeys.includes(key)&&key!=='branches'));
  const updated={...root,...global,branches:{...root.branches,[root.activeOrganizationId]:branch}};
  localStorage.setItem(brand.storageKey,JSON.stringify(updated));
  root=updated; memory=null; listeners.forEach(fn=>fn());
}
export const activeOrganizationId=()=>readState().activeOrganizationId;
export function switchOrganization(id) {
  if(id!=='all'&&!readState().organizations.some(org=>org.id===id))throw Error('Organization not found.');
  const updated={...root,activeOrganizationId:id};
  localStorage.setItem(brand.storageKey,JSON.stringify(updated));root=updated;memory=null;listeners.forEach(fn=>fn());
}
export function addOrganization(details) {
  const name=details.name.trim();
  if(!name)throw Error('Enter an organization name.');
  if(readState().organizations.some(org=>org.name.toLowerCase()===name.toLowerCase()))throw Error('An organization with this name already exists.');
  const organization={...details,name,id:crypto.randomUUID()};
  updateState(state=>({...state,organizations:[...state.organizations,organization]}));
  return organization;
}
export function updateState(change) { writeState(change(readState())); }
export const subscribe = fn => { listeners.add(fn); return ()=>listeners.delete(fn); };
export const uid = () => globalThis.crypto.randomUUID();
export function saveRecord(domain,record) {
  if(activeOrganizationId()==='all')throw Error('Select a Highgrade branch before adding or changing records.');
  const saved={...record,org_id:activeOrganizationId(),id:record.id || uid(),updatedAt:new Date().toISOString()};
  updateState(s=>({...s,collections:{...s.collections,[domain]:[...(s.collections[domain]||[]).filter(r=>r.id!==saved.id),saved]},logs:[{id:uid(),org_id:s.activeOrganizationId,domain,action:'Saved',at:saved.updatedAt},...s.logs].slice(0,500)}));
  return saved;
}
export function toCSV(columns, rows) {
  const escape=value=>{let text=String(value??''); if(/^[=+@\-]/.test(text)) text="'"+text; return '"'+text.replaceAll('"','""')+'"';};
  return '\uFEFF'+[columns,...rows].map(row=>row.map(escape).join(',')).join('\r\n');
}
export function download(name,content,type='text/csv;charset=utf-8') {
  const url=URL.createObjectURL(new Blob([content],{type}));
  const a=document.createElement('a'); a.href=url; a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function parseCSV(text) {
  const rows=[]; let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++) { const c=text[i]; if(c==='"') {if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;} else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}else cell+=c; }
  if(quoted) throw Error('The CSV contains an unclosed quote.');
  row.push(cell); if(row.some(Boolean))rows.push(row);
  return rows;
}
