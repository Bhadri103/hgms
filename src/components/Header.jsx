import {accountProfile} from '@/services/account';
import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Cake, ChevronDown, LogOut, Menu, Search, Settings2} from 'lucide-react';
import {usePage, useRepository} from './PageContext';
import {members} from '@/data/seed';
import Notifications from './Notifications';

export default function Header() {
  const page = usePage(), state = useRepository(), navigate = useNavigate();
  const [search, setSearch] = useState(''), [panel, setPanel] = useState(null), ref = useRef(null);
  const profile = accountProfile(state);
  const results = [...members].filter(m => search && `${m.name} ${m.mobile}`.toLowerCase().includes(search.toLowerCase())).slice(0, 5);
  useEffect(() => {const close = e => {if (!ref.current?.contains(e.target) || e.key === 'Escape') setPanel(null);};document.addEventListener('pointerdown', close);document.addEventListener('keydown', close);return () => {document.removeEventListener('pointerdown', close);document.removeEventListener('keydown', close);};}, []);
  useEffect(() => {setPanel(null);setSearch('');}, [page.location.pathname]);
  return <header ref={ref} className="hgms-topbar relative z-30 flex h-[76px] items-center justify-between gap-3 border-b border-line bg-surface px-4 sm:px-6 xl:px-9">
    <div className="header-leading flex min-w-0 items-center gap-3"><button type="button" className="icon-button lg:hidden" aria-label="Open navigation" aria-expanded={page.sidebar} onClick={() => page.setSidebar(v => !v)}><Menu size={20}/></button><span className="hidden min-w-0 truncate text-[14px] font-medium text-ink sm:block" title={page.organization.name}>{page.organization.name}</span></div>
    <div className="hgms-topbar-controls flex items-center gap-2 sm:gap-4"><div className="relative hidden sm:block"><form onSubmit={e => {e.preventDefault();navigate(`/member_profile/member_profile?q=${encodeURIComponent(search)}`);setPanel(null);}} className="flex w-60 items-center gap-2.5 rounded-lg border border-line bg-canvas px-3 py-2 xl:w-72"><Search size={15} className="text-muted"/><input className="min-w-0 flex-1 border-0 bg-transparent text-[14px] outline-none" aria-label="Search members" placeholder="Search members, mobile…" value={search} onFocus={() => setPanel('search')} onChange={e => {setSearch(e.target.value);setPanel('search');}}/><kbd className="rounded border border-line px-1 text-[12px] text-muted">↵</kbd></form>{panel === 'search' && search && <div className="header-popover left-0 w-full">{results.length ? results.map(m => <Link key={`${m.org_id}:${m.id}`} className="block rounded-lg px-3 py-2 hover:bg-canvas" to={`/member_profile/member_profile?q=${encodeURIComponent(m.name)}`}><span className="block text-[14px] font-medium">{m.name}</span><span className="text-[13px] text-muted">{m.mobile}</span></Link>) : <p className="p-3 text-[14px] text-muted">No matching members</p>}</div>}</div>
      <label className="header-org-select"><span className="sr-only">Active organization</span><select aria-label="Active organization" value={page.organization.id} onChange={e=>page.selectOrganization(e.target.value)}><option value="all">All Highgrade</option>{page.organizations.map(org=><option key={org.id} value={org.id}>{org.name}</option>)}</select></label>
      <Notifications open={panel === 'notifications'} onToggle={() => setPanel(panel === 'notifications' ? null : 'notifications')} onClose={() => setPanel(null)}/>
      <Link to={`/local/birthday_alert?org_id=${page.organization.id}`} className="icon-button" aria-label="Birthday notifications" title="Upcoming birthdays" onClick={() => setPanel(null)}><Cake size={19}/></Link>
      <span className="hidden h-7 w-px bg-line sm:block"/>
      <div className="relative"><button type="button" className="flex items-center gap-2.5 rounded-lg p-1" aria-label="Account menu" aria-expanded={panel === 'account'} onClick={() => setPanel(panel === 'account' ? null : 'account')}><span className="flex size-9 items-center justify-center rounded-full bg-primary-soft text-[14px] font-semibold text-primary">{profile.name.charAt(0).toUpperCase()}</span><span className="hidden text-left md:block"><span className="block text-[14px] font-semibold">{profile.name}</span><span className="block text-[12px] text-muted">Studio admin</span></span><ChevronDown size={13} className="text-muted"/></button>{panel === 'account' && <div className="header-popover right-0 w-48"><Link to="/local/edit_admin_profile" className="popover-item"><Settings2 size={15}/> My Profile</Link><Link to="/login" onClick={() => sessionStorage.removeItem('hgms-session')} className="popover-item"><LogOut size={15}/> Log Out</Link><Link to="/master/organizations" className="popover-item"><Settings2 size={15}/> Organizations</Link></div>}</div>
    </div>
  </header>;
}
