import React, {useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {Activity, ArrowDownToLine, ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, Layers, Plus, Search, UserPlus, Wallet} from 'lucide-react';
import {useRepository, usePage} from '@/components/PageContext';
import {members as seedMembers} from '@/data/seed';
import reportGroups from '@/data/dashboard-reports.json';
import {download, toCSV} from '@/services/repository';
import {brand} from '@/config/brand';
import DashboardMetrics, {DashboardRange} from '@/components/DashboardMetrics';
import {dashboardData, presetRange} from '@/services/dashboard';

const formatNumber = value => new Intl.NumberFormat('en-IN', {maximumFractionDigits:0}).format(value);
const money = value => `${brand.currency} ${formatNumber(value)}`;
const avatarColors = ['bg-primary-soft text-primary', 'bg-teal-soft text-teal-deep', 'bg-amber-soft text-amber-deep', 'bg-blue-soft text-blue'];

export default function Dashboard() {
  const repository = useRepository();
  const page = usePage();
  const [range,setRange]=useState(()=>presetRange('year'));
  const [draft,setDraft]=useState(range), [dateError,setDateError]=useState('');
  function applyDates(next){if(!/^\d{4}-\d{2}-\d{2}$/.test(next.from)||!/^\d{4}-\d{2}-\d{2}$/.test(next.to)||next.from>next.to){setDateError('Choose valid dates with the from date on or before the to date.');return;}setDateError('');setRange(next);}
  const org = page.organization.id;
  const gym = page.organization;
  const [query, setQuery] = useState(''), [memberFilter, setMemberFilter] = useState('All members'), [reportFilter, setReportFilter] = useState('All Report');
  const members = useMemo(() => {
    const saved = repository.collections.members || [];
    return [...saved, ...seedMembers.filter(m => !saved.some(s=>s.id===m.id&&String(s.org_id||1)===String(m.org_id||1)))].filter(m => !repository.deleted?.members?.includes(m.id)).filter(m => org==='all'||String(m.org_id || '1')===org).map(m => ({...m,name:m.name||m.m_name||'Member',mobile:m.mobile||m.cell_phone||'',plan:m.plan||'Membership',status:m.status||'Active',paid:Number(m.paid||m.paid_amount||0),amount:Number(m.amount||m.p_amount||0)}));
  }, [repository,org]);
  const data=useMemo(()=>dashboardData(repository,members,range,org),[repository,members,range,org]);
  const active = members.filter(m=>m.status==='Active').length;
  const collection = members.reduce((sum,m)=>sum+m.paid,0);
  const due = members.reduce((sum,m)=>sum+Math.max(0,m.amount-m.paid),0);
  const dueCount = members.filter(m=>m.amount>m.paid).length;
  const inactive = members.length-active;
  const currentDate = new Date().toLocaleDateString('en', {month:'short',day:'numeric',year:'numeric'});
  const selectedMembers = data.selected.filter(m => (memberFilter==='All members'||m.status===memberFilter) && `${m.name} ${m.mobile} ${m.id}`.toLowerCase().includes(query.toLowerCase()));
  const scoped = href => {const url=new URL(href,location.origin);url.searchParams.set('org_id',org);url.searchParams.set('from',range.from);url.searchParams.set('to',range.to);return url.pathname+url.search;};
  function exportOverview() {download('hgms-dashboard.csv',toCSV(['Metric','Value','Currency','Workspace','From','To'],reportGroups.flatMap(g=>g.items.map(item=>[item.label,data.value(item.label),/Collection|Expense|GYM Due Amount/.test(item.label)?brand.currencyCode:'',gym.name,range.from,range.to]))));}

  return <div className="space-y-6" data-testid="dashboard">
    <section className="surface-card min-w-0 p-5 sm:p-6" aria-label="Dashboard overview"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="min-w-0"><h1 className="text-[24px] font-semibold tracking-tight">Dashboard overview</h1><p className="mt-1 flex items-center gap-2 text-[13px] text-muted"><CalendarDays size={13} aria-hidden="true"/>{currentDate}</p></div>
      <div className="flex flex-wrap items-center gap-2"><button className="button-secondary btn-excel" type="button" onClick={exportOverview}><ArrowDownToLine size={14}/> Export overview</button><Link className="button-primary" to="/membership/add_member"><Plus size={15}/> Add member</Link></div>
    </div>
    </section>

    <DashboardRange draft={draft} setDraft={setDraft} range={range} onApply={applyDates} error={dateError}/>

    <DashboardMetrics data={data} scoped={scoped}/>

    <section className="grid gap-5 xl:grid-cols-[minmax(0,1.85fr)_minmax(280px,1fr)]">
      <div className="surface-card min-w-0 overflow-hidden"><div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6"><div><h2 className="section-title">Your members <span className="ml-1.5 rounded-md bg-primary-soft px-1.5 py-0.5 text-[12px] font-medium text-primary">{data.selected.length}</span></h2><p className="section-subtitle">The people at the heart of your gym</p></div><Link to={scoped('/member_profile/member_profile')} className="text-link">View all members <ArrowUpRight size={13}/></Link></div>
        <div className="flex flex-wrap items-center gap-2 border-y border-line bg-canvas/35 px-5 py-3 sm:px-6"><div className="flex min-w-0 flex-1 items-center gap-2"><Search size={14} className="text-muted"/><input className="w-full bg-transparent text-[13px] outline-none" value={query} aria-label="Filter dashboard members" placeholder="Find a member…" onChange={e=>setQuery(e.target.value)}/></div><select aria-label="Membership status" className="rounded-lg border border-line bg-surface px-2 py-1.5 text-[12px]" value={memberFilter} onChange={e=>setMemberFilter(e.target.value)}>{['All members','Active','Expired','Blocked'].map(s=><option key={s}>{s}</option>)}</select></div>
        <div className="overflow-x-auto"><table className="w-full whitespace-nowrap text-left" aria-label="Recent members"><thead><tr className="border-b border-line text-[12px] font-medium text-muted">{['Member','Membership','Status','Paid'].map(t=><th key={t} className={`px-5 py-3 font-medium sm:px-6 ${t==='Paid'?'text-right':''}`}>{t}</th>)}</tr></thead><tbody>{selectedMembers.slice(0,5).map((m,i)=><tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-canvas/70"><td className="px-5 py-3.5 sm:px-6"><Link to={`/member_profile/member_profile?q=${encodeURIComponent(m.name)}`} className="group flex items-center gap-2.5"><span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${avatarColors[i%avatarColors.length]}`}>{m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</span><span><span className="block text-[13px] font-medium group-hover:text-primary">{m.name}</span><span className="mt-0.5 block text-[11px] text-muted">#{m.id}</span></span></Link></td><td className="px-5 py-3.5 text-[13px] text-muted sm:px-6">{m.plan}</td><td className="px-5 py-3.5 sm:px-6"><span className={`badge ${m.status==='Active'?'bg-teal-soft text-teal-deep':m.status==='Expired'?'bg-amber-soft text-amber-deep':'bg-coral-soft text-coral'}`}><span className="size-1 rounded-full bg-current"/>{m.status}</span></td><td className="px-5 py-3.5 text-right text-[13px] font-medium tabular-nums sm:px-6">{money(m.paid)}</td></tr>)}</tbody></table>{!selectedMembers.length&&<p className="p-10 text-center text-[14px] text-muted">No members match this search.</p>}</div><div className="flex items-center justify-between border-t border-line px-5 py-3 text-[12px] text-muted sm:px-6"><span>Showing {Math.min(selectedMembers.length,5)} of {selectedMembers.length} members</span><Link to={scoped('/membership/add_member')} className="text-link"><Plus size={12}/> Add member</Link></div>
      </div>

      <div className="space-y-5"><div className="surface-card p-5 sm:p-6"><h2 className="section-title">Quick actions</h2><p className="section-subtitle">Less searching. More doing.</p><div className="mt-4 grid grid-cols-2 gap-2.5">{[{label:'Add member',icon:UserPlus,href:'/membership/add_member',color:'bg-primary-soft text-primary'},{label:'Add enquiry',icon:Layers,href:'/communicate/enquiry/add_enquiry_pre',color:'bg-teal-soft text-teal-deep'},{label:'Attendance',icon:Activity,href:'/attendance/bulk_attendance',color:'bg-blue-soft text-blue'},{label:'Add expense',icon:Wallet,href:'/local/add_expense',color:'bg-amber-soft text-amber-deep'}].map(a=><Link key={a.label} to={scoped(a.href)} className="group flex items-center gap-2.5 rounded-xl border border-line p-3 transition-colors hover:border-primary/40 hover:bg-canvas"><span className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${a.color}`}><a.icon size={14}/></span><span className="text-[12px] font-medium">{a.label}</span></Link>)}</div></div>
        <div className="rounded-2xl border border-primary/10 bg-primary-soft/70 p-5 sm:p-6"><div className="flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface text-primary"><CalendarDays size={18}/></span><div><h2 className="text-[14px] font-semibold">Make room for the next session.</h2><p className="mt-2 text-[13px] leading-5 text-muted">Keep classes, trainers, and member bookings in sync.</p><Link to={scoped('/Class_booking/booking_calendar')} className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-primary">Open class calendar <ArrowRight size={14}/></Link></div></div></div>
      </div>
    </section>

    <section className="surface-card p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="section-title">Explore your reports</h2><p className="section-subtitle">Every part of your business, one click away</p></div><BarIcon/></div><div className="my-5 flex gap-1.5 overflow-x-auto border-b border-line pb-3" aria-label="Report categories">{reportGroups.map(group=><button key={group.title} type="button" className={`shrink-0 rounded-lg px-3 py-2 text-[12px] font-medium transition-colors ${reportFilter===group.title?'bg-primary-soft text-primary':'text-muted hover:bg-canvas'}`} aria-pressed={reportFilter===group.title} onClick={()=>setReportFilter(group.title)}>{group.title==='All Report'?'Overview':group.title}</button>)}</div><div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">{reportGroups.find(g=>g.title===reportFilter)?.items.map((item,i)=><Link key={item.label} to={scoped(item.href)} className="group flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-3 hover:border-primary/30 hover:bg-canvas"><span className="flex min-w-0 items-center gap-2.5"><span className={`size-1.5 shrink-0 rounded-full ${['bg-primary','bg-teal','bg-blue','bg-amber','bg-coral'][i%5]}`}/><span className="text-[13px]">{item.label}</span></span><ChevronRight size={13} className="shrink-0 text-muted group-hover:text-primary"/></Link>)}</div></section>

  </div>;
}

function BarIcon(){return <span className="flex size-9 items-center justify-center rounded-xl bg-canvas text-muted"><Layers size={17}/></span>;}
