import {moneyCell,moneyLabel} from '@/services/currency';
import AppIcon from '@/components/AppIcon';
import {FileSpreadsheet} from 'lucide-react';
import React,{useMemo,useState} from 'react';
import {usePage,useRepository} from './PageContext';
import Modal from './Modal';
import {domainFor,seedRows,members} from '@/data/seed';
import {updateState,download,toCSV} from '@/services/repository';

function recordCell(record,column,index) {
  if(record.cells)return record.cells[index]??'';
  if(record[column]!==undefined)return String(record[column]);
  const c=column.toLowerCase();
  const key=/action|image|img|view log|thread/.test(c)?null:/membership no|^id$|^#$/.test(c)?'id':/plan/.test(c)?'plan':/name|member|customer/.test(c)?'name':/phone|mobile|contact/.test(c)?'mobile':/address/.test(c)?'address':/invoice/.test(c)?'invoice_no':/expiry|end/.test(c)?'expiry':/date|start/.test(c)?'start':/due/.test(c)?'due_amount':/paid/.test(c)?'paid':/amount|total/.test(c)?'amount':/status/.test(c)?'status':/gym/.test(c)?'org_id':null;
  return key?String(record[key]??''):String(record[column]??'');
}
export default function DataTable({tableKey,columns,initialRows,toolbarFilters,showPageSize=true,className='table table-striped table-bordered'}) {
  const page=usePage(),state=useRepository(),domain=domainFor(tableKey.split(':')[0]);
  const [query,setQuery]=useState(new URLSearchParams(page.location.search).get('q')||''),[size,setSize]=useState(10),[offset,setOffset]=useState(0),[sort,setSort]=useState({index:-1,asc:true}),[edit,setEdit]=useState(null),[remove,setRemove]=useState(null),[view,setView]=useState(null),[selected,setSelected]=useState([]);
  const rows=useMemo(()=>{
    const base=state.activeOrganizationId==='all'&&!initialRows?state.organizations.flatMap(org=>(state.branchStates[org.id]?.tables?.[tableKey]||seedRows(columns,page.page).filter(row=>String(row.org_id)===org.id)).map(row=>({...row,org_id:org.id}))):state.tables[tableKey]||initialRows||seedRows(columns,page.page);
    const added=(initialRows?[]:state.collections[domain]||[]).map(record=>({id:record.id,org_id:record.org_id,cells:columns.map((column,index)=>recordCell(record,column,index))}));
    return [...added,...base.filter(r=>!added.some(a=>a.id===r.id&&a.org_id===r.org_id))].filter(r=>!(state.branchStates?.[r.org_id]||state).deleted?.[domain]?.includes(r.id)).map(r=>({...r,cells:columns.map((c,i)=>(state.branchStates?.[r.org_id]||state).edits?.[domain]?.[r.id]?.[c]??r.cells[i])}));
  },[state,tableKey,columns.join('|'),initialRows]);
  const filtered=useMemo(()=>{
    const org=state.activeOrganizationId;
    let next=rows.filter(row=>(!org||org==='all'||!row.org_id||row.org_id===org)&&row.cells.join(' ').toLowerCase().includes(query.toLowerCase()));
    for(const [key,{value,text}] of Object.entries(page.filters)) {
      if(!value||/^(all|0|-1)$/i.test(value)||/^all\b|^select\b/i.test(text)||/type$|rep_type|date_by|sort_by|per_page/.test(key))continue;
      if(/search|keyword/.test(key))next=next.filter(row=>row.cells.join(' ').toLowerCase().includes(String(value).toLowerCase()));
      else if(/plan|batch|status|class|category|trainer|payment|paymode|gender/.test(key)){
        const term=key.replace(/filter|report|col|_|id/g,'');const column=columns.findIndex(c=>c.toLowerCase().includes(term)||(/plan/.test(key)&&/plan/i.test(c))||(/status/.test(key)&&/status/i.test(c)));
        if(column>=0)next=next.filter(row=>row.cells[column]?.toLowerCase().includes(String(text).replace(/\(.*\)/,'').trim().toLowerCase()));
      } else if(/from|dd1|start/.test(key)&&/^\d{4}-\d{2}-\d{2}$/.test(value)){const i=columns.findIndex(c=>/date|start/i.test(c));if(i>=0)next=next.filter(r=>r.cells[i]>=value);}
      else if(/to|dd2|end/.test(key)&&/^\d{4}-\d{2}-\d{2}$/.test(value)){const i=columns.findIndex(c=>/date|start/i.test(c));if(i>=0)next=next.filter(r=>r.cells[i]<=value);}
      else if(/^(dd|date|event_dd)$/.test(key)&&/^\d{4}-\d{2}-\d{2}$/.test(value)){const i=columns.findIndex(c=>/date|start/i.test(c));if(i>=0)next=next.filter(r=>r.cells[i]===value);}
    }
    if(sort.index>=0)next=[...next].sort((a,b)=>String(a.cells[sort.index]).localeCompare(String(b.cells[sort.index]),undefined,{numeric:true})*(sort.asc?1:-1));
    return next;
  },[rows,query,sort,page.filters,page.location.search]);
  const lastPage=Math.max(0,Math.ceil(filtered.length/size)-1),current=Math.min(offset,lastPage),visible=filtered.slice(current*size,(current+1)*size);
  const saveRows=next=>{try{updateState(s=>({...s,deleted:{...s.deleted,[domain]:[...(s.deleted?.[domain]||[]),...rows.filter(r=>!next.some(n=>n.id===r.id)).map(r=>r.id)]},edits:{...s.edits,[domain]:{...s.edits?.[domain],...Object.fromEntries(next.map(r=>[r.id,Object.fromEntries(columns.map((c,i)=>[c,r.cells[i]]))]))}}}));}catch(e){page.notify(e.message,'error');throw e;}};
  const exportRows=()=>download(page.page.split('/').at(-1)+'.csv',toCSV(columns.map(moneyLabel),filtered.map(r=>r.cells)));
  function saveEdit(e){e.preventDefault();saveRows(rows.map(r=>r.id===edit.id?edit:r));setEdit(null);page.notify('Changes saved.');}
  return <div className="hgms-data-table">
    <div className="data-table-toolbar">
      {toolbarFilters}
      {showPageSize&&<label className="table-page-size"><span>Rows per page</span><select aria-label="Rows per page" value={size} onChange={e=>{setSize(Number(e.target.value));setOffset(0);}}>{[10,25,50,100].map(n=><option key={n}>{n}</option>)}</select></label>}
      <label className="table-search-field"><span>Search records</span><input type="search" aria-label="Search table" placeholder="Enter a name, ID, or keyword" value={query} onChange={e=>{setQuery(e.target.value);setOffset(0);}}/></label>
      <button type="button" className="btn btn-excel table-export-button" onClick={exportRows}><FileSpreadsheet size={16} aria-hidden="true"/>Export to Excel</button>
    </div>
    <p className="mt-2 text-xs text-muted sm:hidden">Swipe the table to see all columns and actions.</p><div className="hgms-table-scroll" role="region" aria-label="Scrollable data table" tabIndex={0}><table className={`table ${className}`}><thead><tr>{columns.map((column,i)=><th key={i} scope="col" aria-sort={sort.index===i?(sort.asc?'ascending':'descending'):'none'}>{column?<button className="hgms-sort" type="button" onClick={()=>setSort({index:i,asc:sort.index===i?!sort.asc:true})}>{moneyLabel(column)}<span aria-hidden="true"> ↕</span></button>:<input aria-label="Select all rows" type="checkbox" checked={visible.length>0&&visible.every(r=>selected.includes(r.id))} onChange={e=>setSelected(e.target.checked?visible.map(r=>r.id):[])}/>}</th>)}</tr></thead><tbody>{visible.map(row=><tr key={`${row.org_id}:${row.id}`}>{columns.map((column,i)=><td key={i} data-compact={/date|valid from|valid to|expiry|mobile|phone|contact|amount|price|balance|invoice|receipt|^id$|^#$|^code$|status/i.test(column)}>{/action/i.test(column)?<div className="hgms-row-actions"><button type="button" className="btn btn-xs btn-primary" aria-label={`View ${row.cells.find(Boolean)}`} onClick={()=>setView(row)}><AppIcon className="clip-eye" /></button><button type="button" className="btn btn-xs btn-info" aria-label={`Edit ${row.cells.find(Boolean)}`} onClick={()=>state.activeOrganizationId==='all'?page.notify('Select a Highgrade branch to edit this record.','info'):setEdit({...row,cells:[...row.cells]})}><AppIcon className="clip-pencil" /></button><button type="button" className="btn btn-xs btn-danger" aria-label={`Delete ${row.cells.find(Boolean)}`} onClick={()=>state.activeOrganizationId==='all'?page.notify('Select a Highgrade branch to delete this record.','info'):setRemove(row)}><AppIcon className="clip-remove" /></button></div>:/image|^img$|^logo$/i.test(column)?<img src={`${import.meta.env.BASE_URL}assets/avatar.svg`} className="hgms-avatar" alt="Member"/>:/view log|all logs|view thread|last thread/i.test(column)?<button type="button" className="btn btn-xs btn-default" onClick={()=>setView(row)}>View</button>:!column?<input type="checkbox" aria-label={`Select row ${row.id}`} checked={selected.includes(row.id)} onChange={e=>setSelected(e.target.checked?[...selected,row.id]:selected.filter(id=>id!==row.id))}/>:moneyCell(column,row.cells[i])}</td>)}</tr>)}{!visible.length&&<tr><td colSpan={columns.length} className="text-center">No matching records found</td></tr>}</tbody></table></div>
    <div className="hgms-table-controls"><span>Showing {filtered.length?current*size+1:0} to {Math.min((current+1)*size,filtered.length)} of {filtered.length} entries</span><div className="hgms-pagination"><button type="button" disabled={current===0} onClick={()=>setOffset(current-1)}>Previous</button><span>{current+1}</span><button type="button" disabled={current>=lastPage} onClick={()=>setOffset(current+1)}>Next</button></div></div>
    <Modal id={`${tableKey}-edit`} title="Edit" open={!!edit} onClose={()=>setEdit(null)}><div className="modal-dialog"><div className="modal-content"><form onSubmit={saveEdit}><div className="modal-header"><h4>Edit</h4></div><div className="modal-body">{edit&&columns.map((column,i)=>!/action|image|^img$|^logo$|log by/i.test(column)&&column&&<label className="hgms-edit-field" key={i}>{moneyLabel(column)}<input className="form-control" required value={edit.cells[i]} onChange={e=>setEdit(v=>({...v,cells:v.cells.map((c,index)=>index===i?e.target.value:c)}))}/></label>)}</div><div className="modal-footer"><button type="button" className="btn btn-default" onClick={()=>setEdit(null)}>Close</button><button className="btn btn-primary">Save changes</button></div></form></div></div></Modal>
    <Modal id={`${tableKey}-delete`} title="Delete" open={!!remove} onClose={()=>setRemove(null)}><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4>Delete</h4></div><div className="modal-body">Are You Sure To Delete The Entry ?</div><div className="modal-footer"><button type="button" className="btn btn-default" onClick={()=>setRemove(null)}>Cancel</button><button type="button" className="btn btn-danger" onClick={()=>{saveRows(rows.filter(r=>r.id!==remove.id));setRemove(null);page.notify('Entry deleted.');}}>Delete</button></div></div></div></Modal>
    <Modal id={`${tableKey}-view`} title="View Details" open={!!view} onClose={()=>setView(null)}><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4>View Details</h4></div><div className="modal-body"><dl>{view&&columns.map((column,i)=>!/action|image|^img$/.test(column.toLowerCase())&&<React.Fragment key={i}><dt>{column}</dt><dd>{view.cells[i]||'—'}</dd></React.Fragment>)}</dl></div><div className="modal-footer"><button type="button" className="btn btn-default" onClick={()=>window.print()}>Print</button><button type="button" className="btn btn-primary" onClick={()=>setView(null)}>Close</button></div></div></div></Modal>
  </div>;
}
