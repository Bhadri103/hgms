import {accountProfile} from '@/services/account';
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Activity, ArrowUpRight, BarChart3, BookOpen, CalendarDays, ChevronRight, CircleDollarSign, ClipboardList, Dumbbell, Grid2X2, Layers, LayoutDashboard, Megaphone, MessageSquare, Settings2, ShieldCheck, Users, Wallet, X} from 'lucide-react';
import navigation from '@/data/navigation.json';
import {usePage, useRepository} from './PageContext';

const icons = {Dashboard: LayoutDashboard, 'Cashflow Report': Wallet, Master: Settings2, Membership: Users, 'Member Profile': Users, 'Promotion/Broadcast': Megaphone, Enquiry: MessageSquare, 'Invoice Management': ClipboardList, 'Receipt Management': CircleDollarSign, Reports: BarChart3, Attendance: Activity, 'Salary Module': Wallet, 'Class Booking': CalendarDays, 'Diet Plan Adv': BookOpen, 'Assign Diet Plan': BookOpen, 'Workout Plan Adv': Dumbbell, 'Assign Workout Plan': Dumbbell, 'Measurement Adv': Activity};
function includesPath(item, pathname) { return item.href?.split('?')[0] === pathname || item.children?.some(child => includesPath(child, pathname)); }

function NavigationItem({item, depth = 0, close}) {
  const {pathname} = useLocation();
  const selected = includesPath(item, pathname);
  const [open, setOpen] = useState(selected);
  useEffect(() => {setOpen(includesPath(item, pathname));}, [pathname, item]);
  const Icon = icons[item.label] || (depth ? null : Layers);
  const classes = `nav-item ${depth ? 'nav-child' : ''} ${selected ? 'is-active' : ''}`;
  const contents = <>{Icon && <Icon size={17} strokeWidth={1.65} aria-hidden="true" />}<span className="min-w-0 flex-1 text-left">{item.label}</span>{item.children?.length > 0 && <ChevronRight size={14} className={`shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} />}</>;
  return <li>
    {item.children?.length ? <><button type="button" className={classes} aria-expanded={open} onClick={() => setOpen(v => !v)}>{contents}</button>{open && <ul className="ml-5 mt-1 border-l border-nav-line pl-2">{item.children.map(child => <NavigationItem key={child.label} item={child} depth={depth + 1} close={close} />)}</ul>}</> : <Link to={item.href} onClick={close} className={classes} aria-current={selected ? 'page' : undefined}>{contents}</Link>}
  </li>;
}

export default function Sidebar() {
  const {sidebar, setSidebar, organization} = usePage();
  const profile = accountProfile(useRepository());
  const {pathname} = useLocation();
  useEffect(() => {setSidebar(false);}, [pathname]);
  useEffect(() => {if (!sidebar) return; const handle = e => {if (e.key === 'Escape') setSidebar(false);}; document.addEventListener('keydown', handle); return () => document.removeEventListener('keydown', handle);}, [sidebar]);
  return <>
    {sidebar && <button type="button" className="fixed inset-0 z-40 bg-sidebar/50 backdrop-blur-sm lg:hidden" aria-label="Close navigation overlay" onClick={() => setSidebar(false)} />}
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[244px] flex-col bg-sidebar text-nav-text transition-transform duration-200 lg:translate-x-0 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Main navigation">
      <div className="flex h-[76px] shrink-0 items-center gap-3 px-6"><Link to="/home" className="flex items-center gap-3" aria-label="HGMS dashboard"><span className="flex size-9 items-center justify-center rounded-xl bg-primary"><Dumbbell className="text-white" size={21} /></span><span className="text-[23px] font-semibold tracking-[-1px] text-white">HGMS<span className="text-teal">.</span></span></Link><button className="ml-auto rounded-lg p-1 text-nav-muted lg:hidden" type="button" aria-label="Close navigation" onClick={() => setSidebar(false)}><X size={20}/></button></div>
      <div className="mx-4 mb-2 flex items-center gap-2 rounded-lg border border-nav-line bg-nav-surface px-3 py-2"><Grid2X2 size={16} className="shrink-0 text-teal"/><span className="truncate text-[12px] font-medium text-white" title={organization.name}>{organization.name}</span></div>
      <nav className="sidebar-scroll min-h-0 flex-1 overflow-y-auto px-3 pb-5">{navigation.map((section, index) => <div key={section.label} className={index ? 'mt-5' : ''}>{index > 0 && <p className="mb-2 px-3 text-[11px] font-semibold tracking-[0.16em] text-nav-muted">{section.label}</p>}<ul className="space-y-0.5">{section.items.map(item => <NavigationItem key={item.label} item={item} close={() => setSidebar(false)}/>)}</ul></div>)}</nav>
      <div className="shrink-0 border-t border-nav-line p-3"><div className="mb-3 flex items-center gap-2 px-1 text-[12px] text-nav-muted"><ShieldCheck size={13} className="text-teal"/> Local workspace <span className="ml-auto size-1.5 rounded-full bg-teal"/></div><Link to="/local/edit_admin_profile" className="flex items-center gap-2.5 rounded-xl bg-nav-surface p-2.5"><span className="flex size-8 items-center justify-center rounded-full bg-primary/25 text-[14px] font-semibold text-violet-soft">{profile.name.charAt(0).toUpperCase()}</span><span className="flex-1"><span className="block text-[14px] font-medium text-white">{profile.name}</span><span className="text-[12px] text-nav-muted">My profile</span></span><ArrowUpRight size={14} className="text-nav-muted"/></Link></div>
    </aside>
  </>;
}
