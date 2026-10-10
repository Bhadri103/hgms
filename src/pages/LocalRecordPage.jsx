import MyProfile from './MyProfile';
import Birthdays from './Birthdays';
import React from 'react';
import {useParams,Link} from 'react-router-dom';
import missing from '@/data/missing-routes.json';
import tables from '@/data/tables.json';
import {LocalForm,Field,DataTable} from '@/components/ui';
import {usePage} from '@/components/PageContext';

export default function LocalRecordPage() {
  const {name}=useParams(),page=usePage();
  if(name==='edit_admin_profile')return <MyProfile/>;
  if(name==='birthday_alert')return <Birthdays/>;
  const definition=missing.find(p=>p.route===`local/${name}`);
  const source=definition?.references.find(p=>!p.endsWith('home.html'))||definition?.references[0];
  const table=Object.values(tables).find(t=>t.page===source?.replace(/\.html$/,''));
  const title=definition?.label||name.replaceAll('_',' ');
  const fields=(table?.columns||['Name','Mobile','Address','Status']).filter(c=>c&&!/action|image|^img$|^#$|^id$|log by|^by$|^used$|view|assigned/i.test(c));
  const edit=/^(add|edit|pos_red)/.test(name);
  return <div className="container"><ol className="breadcrumb"><li><Link to="/home">Home</Link></li><li className="active">{title}</li></ol><div className="page-header"><h1>{title}</h1></div><div className="panel panel-default"><div className="panel-heading">{title}</div><div className="panel-body">{edit?<LocalForm formKey={name}><div className="row">{fields.map((label,i)=><div className="col-md-6" key={i}><div className="form-group"><label className="control-label" htmlFor={`local-${i}`}>{label}</label><Field id={`local-${i}`} name={label} required={true} className="form-control" type={/date|valid from|valid to/i.test(label)?'date':/amount|discount|percentage|salary|duration/i.test(label)?'number':'text'} min={/amount|discount|salary/.test(label)?0:undefined}/></div></div>)}</div><button className="btn btn-success" type="submit">Submit</button> <Link className="btn btn-default" to={source?'/'+source.replace(/\.html$/,''):'/home'}>Back</Link></LocalForm>:<DataTable tableKey={source?source.replace(/\.html$/,'')+':table-0':page.page+':table-0'} columns={table?.columns||['Date','Name','Description','Status','Action']}/>}</div></div></div>;
}
