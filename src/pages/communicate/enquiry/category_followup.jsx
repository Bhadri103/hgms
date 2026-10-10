import React, {useMemo} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {Grid2X2, Filter, Plus, ListChecks} from 'lucide-react';
import {usePage, useRepository} from '@/components/PageContext';
import DataTable from '@/components/DataTable';
import CountBadge from '@/components/CountBadge';
import {names} from '@/data/seed';

const categories = [['10','Walk in'],['14','Social Media'],['15','Other'],['16','Zumba'],['17','Application'],['18','Call back'],['19','Self'],['22','Student']];
const columns = ['Enquiry No.','Customer Name','Mobile','Category','Follow-up Date','Follow-up Time','Status','Log by','Action'];

export default function CategoryFollowup() {
  const page = usePage();
  const repository = useRepository();
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const rows = useMemo(() => {
    const samples = categories.map(([id, label], index) => ({
      id: `category-demo-${page.organization.id}-${id}`, org_id: page.organization.id,
      cells: [`DEMO-${1001+index}`, names[index], `900001${String(index+1).padStart(4,'0')}`, label, `2026-10-${String(10+index%5).padStart(2,'0')}`, ['09:30','11:00','14:30','17:00'][index%4], ['Pending','Contacted','Interested'][index%3], ['Pooja Shah','Ravi Kumar'][index%2], '']
    }));
    const saved = (repository.collections.enquiries || []).filter(record => !record.org_id || record.org_id === page.organization.id).map(record => ({
      id: record.id, org_id: record.org_id,
      cells: [String(record.id), record.name || record.iname || 'Enquiry', record.mobile || record.imobile || '', categories.find(([id])=>id===String(record.iinq_type || record.inq_type))?.[1] || 'Other', record.ifollowup || record.followup_date || '', record.ifollowuptime || '', record.status || 'Pending', record['Log by'] || 'Admin', '']
    }));
    return [...saved, ...samples].filter(row=>!repository.deleted?.enquiries?.includes(row.id)).map(row=>({...row,cells:columns.map((column,i)=>repository.edits?.enquiries?.[row.id]?.[column] ?? row.cells[i])}));
  }, [repository, page.organization.id]);
  const selectedLabel = categories.find(([id])=>id===category)?.[1];
  const selected = selectedLabel ? rows.filter(row=>row.cells[3]===selectedLabel) : rows;
  function selectCategory(value) { setParams(previous=>{const next=new URLSearchParams(previous);if(value)next.set('category',value);else next.delete('category');return next;}); }

  return <div className="container category-followup-page">
    <ol className="breadcrumb"><li><Grid2X2 size={15}/><Link to="/home">Home</Link></li><li className="active">Category Follow-up</li></ol>
    <header className="page-header category-followup-header"><div><h1>Category Follow-up <CountBadge count={rows.length}/></h1><p className="section-subtitle">Organize enquiries by source and plan your next conversation.</p></div><Link className="button-primary" to="/communicate/enquiry/add_enquiry_pre"><Plus size={16}/>Add enquiry</Link></header>
    <section className="surface-card category-followup-filter" aria-label="Category filters">
      <div><h2 className="section-title"><Filter size={17}/>Filter enquiries</h2><p className="section-subtitle">Choose a category to view its follow-ups.</p></div>
      <div className="uniform-filter-field"><label htmlFor="followup-category">Enquiry category</label><select id="followup-category" className="form-control" value={category} onChange={event=>selectCategory(event.target.value)}><option value="">All categories</option>{categories.map(([id,label])=><option key={id} value={id}>{label} ({rows.filter(row=>row.cells[3]===label).length})</option>)}</select></div>
      <button type="button" className="button-secondary" disabled={!category} onClick={()=>selectCategory('')}>Reset filter</button>
    </section>
    <section className="panel category-followup-results"><div className="panel-heading"><ListChecks size={18}/><h2>{selectedLabel || 'All enquiries'}</h2><CountBadge count={selected.length}/></div><div className="panel-body"><p className="category-demo-note">Includes illustrative sample enquiries marked DEMO. Saved enquiries appear alongside them.</p><DataTable key={category} tableKey="communicate/enquiry/category_followup:table-0" columns={columns} initialRows={selected}/></div></section>
  </div>;
}
