import React, {useEffect, useState} from 'react';
import SalesProjection from './SalesProjection';
import {Link} from 'react-router-dom';
import {ArrowUpRight, Activity, Wallet, Users, CalendarDays, Bell, TrendingUp} from 'lucide-react';
import groups from '@/data/dashboard-reports.json';
import {brand} from '@/config/brand';
import {presetRange} from '@/services/dashboard';

const tones=['metric-indigo','metric-teal','metric-blue','metric-pink','metric-amber','metric-coral'];
const icons=[Users,Activity,Wallet,CalendarDays,Bell,TrendingUp];
const number=n=>new Intl.NumberFormat('en-IN',{maximumFractionDigits:2}).format(n);

function AnimatedMetricNumber({value}) {
  const target = Number(value) || 0;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    const finish = () => {
      cancelAnimationFrame(frame);
      setDisplay(target);
    };
    const onMotionChange = () => { if (motion.matches) finish(); };
    if (motion.matches || target === 0) {
      setDisplay(target);
      return;
    }

    setDisplay(0);
    const start = performance.now();
    const precision = Number.isInteger(target) ? 1 : 100;
    const tick = now => {
      const progress = Math.min((now - start) / 1100, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(progress === 1 ? target : Math.trunc(target * eased * precision) / precision);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    motion.addEventListener('change', onMotionChange);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [target]);

  return <><span aria-hidden="true">{number(display)}</span><span className="sr-only">{number(target)}</span></>;
}

export function DashboardRange({draft,setDraft,range,onApply,error}) {
  const [selectedPreset, setSelectedPreset] = useState('year');
  const matchesRange = key => { const preset = presetRange(key); return preset.from === range.from && preset.to === range.to; };
  const activePreset = matchesRange(selectedPreset) ? selectedPreset : ['day', 'week', 'month', 'year'].find(matchesRange);
  return <section className="dashboard-date-filter surface-card min-w-0 p-5 sm:p-6" aria-label="Dashboard date filter"><div className="flex flex-wrap items-end justify-between gap-5"><div><h2 className="section-title">General overview</h2><div className="mt-3 flex flex-wrap gap-2">{[['day','Today'],['week','Last 7 days'],['month','This month'],['year','This year']].map(([key,label])=><button key={key} type="button" aria-pressed={activePreset===key} className={activePreset===key ? "button-primary" : "button-secondary"} onClick={()=>{const next=presetRange(key);setSelectedPreset(key);setDraft(next);onApply(next);}}>{label}</button>)}</div></div><form className="flex flex-wrap items-end gap-3" onSubmit={e=>{e.preventDefault();onApply(draft);}}><label className="grid gap-1.5 text-xs font-medium">From date<input aria-label="From date" required type="date" className="rounded-lg border border-line bg-canvas p-2.5" value={draft.from} onChange={e=>setDraft({...draft,from:e.target.value})}/></label><label className="grid gap-1.5 text-xs font-medium">To date<input aria-label="To date" required type="date" className="rounded-lg border border-line bg-canvas p-2.5" value={draft.to} onChange={e=>setDraft({...draft,to:e.target.value})}/></label><button className="button-primary" type="submit">Apply dates</button></form></div>{error&&<p role="alert" className="mt-3 text-sm text-coral">{error}</p>}<div className="mt-4 border-t border-line pt-3 text-xs leading-5 text-muted" role="status">Showing <strong className="text-ink">{range.from} to {range.to}</strong></div></section>;
}

function TrendChart({buckets,series,title,subtitle,currency=false}) {
  const max=Math.max(1,...buckets.flatMap(b=>series.map(s=>b[s.key])));
  const width=600,baseline=165;
  return <section className="surface-card min-w-0 p-5 sm:p-6"><h2 className="section-title">{title}</h2><p className="section-subtitle">{subtitle}</p><div className="my-4 flex flex-wrap gap-4 text-xs">{series.map(s=><span key={s.key} className="flex items-center gap-2"><span className={`size-2 rounded-full ${s.dot}`}/>{s.label}<strong>{currency?brand.currency+' ':''}{number(buckets.reduce((total,b)=>total+b[s.key],0))}</strong></span>)}</div><svg viewBox="0 0 640 215" className="w-full" role="img" aria-label={title}>{[0,1,2,3].map(i=><g key={i}><line x1="38" x2="635" y1={15+i*50} y2={15+i*50} stroke="var(--color-line)" strokeDasharray="3 4"/><text x="0" y={19+i*50} fill="var(--color-muted)" fontSize="10">{number(max*(1-i/3))}</text></g>)}{buckets.map((b,i)=>{const x=38+i*width/buckets.length,w=Math.min(18,width/buckets.length/3);return <g key={b.from}>{series.map((s,j)=><rect key={s.key} tabIndex="0" aria-label={`${b.from} to ${b.to}, ${s.label}: ${b[s.key]}`} x={x+j*w+3} y={baseline-b[s.key]/max*150} width={w-2} height={Math.max(b[s.key]>0?2:0,b[s.key]/max*150)} rx="3" fill={`var(--color-${s.color})`}><title>{b.from} to {b.to}: {s.label} {number(b[s.key])}</title></rect>)}<text transform={`translate(${x+8},187) rotate(-25)`} fill="var(--color-muted)" fontSize="9">{b.label}</text></g>})}</svg>{buckets.every(b=>series.every(s=>!b[s.key]))&&<p className="text-xs text-muted">No records in the selected range.</p>}<details className="mt-3 text-xs"><summary className="cursor-pointer text-primary">View graph data</summary><div className="mt-3 overflow-x-auto"><table className="w-full text-left"><thead><tr><th className="p-2">Date range</th>{series.map(s=><th className="p-2" key={s.key}>{s.label}</th>)}</tr></thead><tbody>{buckets.map(b=><tr className="border-t border-line" key={b.from}><td className="p-2">{b.from} – {b.to}</td>{series.map(s=><td className="p-2" key={s.key}>{number(b[s.key])}</td>)}</tr>)}</tbody></table></div></details></section>;
}

export default function DashboardMetrics({data,scoped}) {
  const cards=group=><section key={group.title} aria-label={group.title} className="space-y-3"><div className="flex items-center gap-3"><span className="h-5 w-1 rounded-full bg-primary"/><h2 className="section-title">{group.title}</h2><span className="text-xs text-muted">{group.items.length} metrics</span></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{group.items.map((item,i)=>{const Icon=icons[i%icons.length],amount=/Collection|Expense|GYM Due Amount/.test(item.label);return <Link key={item.label} to={scoped(item.href)} data-metric={item.label} className={`dashboard-metric ${tones[(i+groups.indexOf(group))%tones.length]}`}><div className="flex items-start justify-between gap-3"><span className="dashboard-metric-icon"><Icon size={19} strokeWidth={1.75} aria-hidden="true"/></span><ArrowUpRight size={16} className="dashboard-metric-arrow" aria-hidden="true"/></div><p className="dashboard-metric-value" data-metric-value>{amount&&<span className="mr-1 text-xs font-medium">{brand.currency}</span>}<AnimatedMetricNumber value={data.value(item.label)}/></p><h3 className="dashboard-metric-label">{item.label}</h3></Link>;})}</div></section>;
  return <>{cards(groups[0])}<div className="grid gap-5 xl:grid-cols-2"><TrendChart buckets={data.buckets} title="Collection & expenses" subtitle="Actual dated local transactions in your selected range" currency series={[{key:'collection',label:'Collection',color:'teal',dot:'bg-teal'},{key:'expenses',label:'Expenses',color:'coral',dot:'bg-coral'}]}/><TrendChart buckets={data.buckets} title="Joining & enquiries" subtitle="Member registrations and new enquiries over time" series={[{key:'joining',label:'Joining',color:'primary',dot:'bg-primary'},{key:'enquiries',label:'Enquiries',color:'blue',dot:'bg-blue'}]}/></div><SalesProjection data={data}/>{groups.slice(1).map(cards)}</>;
}
