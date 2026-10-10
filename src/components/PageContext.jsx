import React, {createContext,useContext,useState,useEffect,useSyncExternalStore} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {readState,subscribe,download,toCSV,switchOrganization,allOrganizations} from '@/services/repository';
import {seedRows} from '@/data/seed';
import tableDefinitions from '@/data/tables.json';

const Context=createContext(null);
export const usePage=()=>useContext(Context);
export const useRepository=()=>useSyncExternalStore(subscribe,readState,readState);
export function PageProvider({children}) {
  const location=useLocation(), navigate=useNavigate();
  const repository=useRepository();
  const organization=repository.activeOrganizationId==='all'?allOrganizations:repository.organizations.find(org=>org.id===repository.activeOrganizationId);
  function selectOrganization(id) {try {switchOrganization(id);}catch(error){setNotice({message:error.message,type:'error',id:Date.now()});}}
  const [modal,setModal]=useState(null),[tabs,setTabs]=useState({}),[filters,setFilters]=useState({}),[notice,setNotice]=useState(null),[sidebar,setSidebar]=useState(false),[loginPanel,setLoginPanel]=useState('login');
  const page=location.pathname.replace(/^\//,'');
  useEffect(()=>{setFilters({});setModal(null);setTabs({});setNotice(null);window.scrollTo(0,0);},[location.pathname,repository.activeOrganizationId]);
  useEffect(()=>{
    if(location.pathname==='/'||location.pathname.startsWith('/login'))return;
    const params=new URLSearchParams(location.search);
    if(params.get('org_id')!==repository.activeOrganizationId){params.set('org_id',repository.activeOrganizationId);navigate(location.pathname+'?'+params.toString(),{replace:true});}
  },[location.pathname,location.search,repository.activeOrganizationId,navigate]);
  useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(null),5500);return()=>clearTimeout(t);},[notice]);
  function exportTable() {
    const [key,definition]=Object.entries(tableDefinitions).find(([,v])=>v.page===page)||[];
    if(!definition)return;
    const rows=readState().tables[key] || seedRows(definition.columns,page);
    download(page.split('/').at(-1)+'.csv',toCSV(definition.columns,rows.map(r=>r.cells)));
  }
  return <Context.Provider value={{page,location,navigate,organization,organizations:repository.organizations,selectOrganization,modal,setModal,tabs,setTabs,filters,setFilters,notice,notify:(message,type='success')=>setNotice({message,type,id:Date.now()}),exportTable,sidebar,setSidebar,loginPanel,setLoginPanel}}><React.Fragment key={repository.activeOrganizationId}>{children}</React.Fragment><Toast notice={notice} dismiss={()=>setNotice(null)}/></Context.Provider>;
}
export function Toast({notice,dismiss}) {return notice?<div className={`hgms-toast ${notice.type}`} role={notice.type==='error'?'alert':'status'}><span>{notice.message}</span><button type="button" aria-label="Dismiss notification" onClick={dismiss}>×</button></div>:null;}
