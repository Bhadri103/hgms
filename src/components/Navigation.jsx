import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import {usePage} from './PageContext';
import {excelExportClass} from './exportStyle';
import {download,toCSV} from '@/services/repository';

const ToggleContext=createContext(null);
export function MenuGroup({children,className='',...props}) {
  const page=usePage(),ref=useRef(null),[open,setOpen]=useState(false);
  useEffect(()=>{setOpen([...ref.current.querySelectorAll('a[data-route]')].some(a=>a.getAttribute('data-route').split('?')[0]===page.location.pathname));},[page.location.pathname]);
  return <ToggleContext.Provider value={()=>setOpen(!open)}><li {...props} ref={ref} className={`${className.replace(/\b(active|open)\b/g,'')} ${open?'open':''}`}>{children}</li></ToggleContext.Provider>;
}
export function Dropdown({children,className='',...props}) {
  const ref=useRef(null),[open,setOpen]=useState(false);
  useEffect(()=>{const handler=e=>{if(e.key==='Escape'||!ref.current?.contains(e.target))setOpen(false);};document.addEventListener('click',handler);document.addEventListener('keydown',handler);return()=>{document.removeEventListener('click',handler);document.removeEventListener('keydown',handler);};},[]);
  return <ToggleContext.Provider value={()=>setOpen(!open)}><li {...props} ref={ref} className={`${className} ${open?'open':''}`}>{children}</li></ToggleContext.Provider>;
}
export function AppLink({href='#',children,behavior,className='',...props}) {
  const page=usePage(),toggle=useContext(ToggleContext);
  const target=props['data-target'];
  const tabLink=props['data-toggle']==='tab', tabId=href.replace('#',''), linkRef=useRef(null);
  const [initialTab,setInitialTab]=useState(false);
  useEffect(()=>{if(tabLink)setInitialTab(linkRef.current?.closest('li')?.classList.contains('active')||false);},[tabLink]);
  const selectedTab=page.tabs[tabId]??initialTab;
  function click(e) {
    if(props.onClick){props.onClick(e);if(e.defaultPrevented)return;}
    if(props['data-preset']){e.preventDefault();const date=new Date('2026-10-09T12:00:00Z'),preset=props['data-preset'];let from=new Date(date);if(preset==='7days')from.setUTCDate(from.getUTCDate()-6);if(preset==='month')from.setUTCDate(1);if(preset==='year'){from.setUTCMonth(0);from.setUTCDate(1);}page.setFilters({date_from:{value:from.toISOString().slice(0,10),text:from.toISOString().slice(0,10)},date_to:{value:date.toISOString().slice(0,10),text:date.toISOString().slice(0,10)}});return;}
    if(/clear-btn/.test(className)){e.preventDefault();page.setFilters({});return;}
    if(/export|_csv|\.csv/.test(href)) {e.preventDefault();if(/sample|bulkmember/i.test(href))download('members-sample.csv',toCSV(['Name','Mobile','Email','Address'],[['Aarav Sharma','9000010001','member@example.com','12 Park Road']]));else page.exportTable();return;}
    if(/GymSwitcher|gymSwitcher|AeOrgModal|gym.*modal/i.test(target||'')){e.preventDefault();page.setModal('global-organizations');return;}
    if(props['data-toggle']==='modal'){e.preventDefault();page.setModal((target||href).replace('#',''));return;}
    if(tabLink){e.preventDefault();const links=e.currentTarget.closest('ul')?.querySelectorAll('[data-toggle="tab"]')||[];const group=Object.fromEntries([...links].map(link=>[link.getAttribute('href').split('#').at(-1),false]));page.setTabs(t=>({...t,...group,[tabId]:true}));return;}
    if(className.includes('forgot')){e.preventDefault();page.setLoginPanel('forgot');return;}
    if(className.includes('go-back')){e.preventDefault();page.setLoginPanel('login');return;}
    if(href==='#'){e.preventDefault();if(toggle)toggle();else if(className.includes('navigation-toggler'))page.setSidebar(v=>!v);return;}
    if(href.includes('?org_id='))page.setModal(null);
  }
  return <Link {...props} ref={linkRef} to={href} role={tabLink?'tab':undefined} aria-selected={tabLink?selectedTab:undefined} aria-controls={tabLink?tabId:undefined} data-route={href.startsWith('/')?href:undefined} className={`${className}${excelExportClass(children)}`} aria-current={href.split('?')[0]===page.location.pathname?'page':undefined} onClick={click}>{children}</Link>;
}
export function TabPane({id,initialActive,className='',children,...props}) {
  const {tabs,page}=usePage();const active=page==='home'||(tabs[id]??initialActive);
  return <div {...props} id={id} className={`${className.replace(/\bactive\b/g,'')} ${active?'active':''}`} hidden={!active}>{children}</div>;
}
