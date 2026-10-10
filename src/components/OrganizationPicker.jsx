import React from 'react';
import {Link} from 'react-router-dom';
import {Building2, Check, Plus} from 'lucide-react';
import {usePage} from './PageContext';

export default function OrganizationPicker({onClose}) {
  const {organization,organizations,selectOrganization}=usePage();
  return <div className="modal-dialog"><div className="modal-content"><div className="modal-header"><div><h2 className="section-title">Switch organization</h2><p className="section-subtitle">View all Highgrade data or select an individual branch.</p></div></div><div className="org-picker-list">{[{id:'all',name:'All Highgrade'},...organizations].map(org=><button key={org.id} type="button" className={`org-choice ${org.id===organization.id?'is-active':''}`} onClick={()=>{selectOrganization(org.id);onClose?.();}}><Building2 size={18}/><span>{org.name}</span>{org.id===organization.id&&<Check size={16}/>}</button>)}</div><div className="modal-footer"><Link className="button-primary" to="/master/organizations" onClick={onClose}><Plus size={15}/>Manage organizations</Link></div></div></div>;
}
