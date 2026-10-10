import React,{createContext,useContext,useRef,useState,useEffect,useId} from 'react';
import {usePage} from './PageContext';
import {saveRecord,readState,updateState,parseCSV,uid} from '@/services/repository';
import {domainFor,plans,members} from '@/data/seed';
import {invoiceTotals,addDays} from '@/services/calculations';
import missingRoutes from '@/data/missing-routes.json';

const FormContext=createContext(null);
function serialize(form) {const data={};for(const [key,value] of new FormData(form)){if(value instanceof File){if(value.size)data[key]=value.name;continue;}if(key.endsWith('[]'))data[key]=[...(data[key]||[]),value];else data[key]=value;}return data;}
export function LocalForm({children,formKey='form',className='',onSubmit,...props}) {
  const page=usePage(),ref=useRef(null),key=`${page.page}:${formKey}`;
  const [values,setValues]=useState(()=>readState().forms[key]||{}),[busy,setBusy]=useState(false);
  function change(name,value,element) {
    setValues(v=>({...v,[name]:value}));
    const data=serialize(ref.current), selected=plans.find(p=>p.id===String(data.plan||data.plan_id||data.old_ptplan));
    if(selected) {
      const taxRate=[...(ref.current.querySelectorAll('input[name="tax[]"]:checked'))].reduce((sum,el)=>{const label=el.closest('label')?.textContent||el.parentElement.textContent;return sum+(Number(label.match(/\(([\d.]+)/)?.[1])||0);},0);
      const totals=invoiceTotals({amount:selected.amount,discount:data.discount,discountType:/percent|%|^1$/.test(data.discount_type||'')?'percent':'amount',taxRate,taxIncluded:!!data.tax_include,paid:Number(data.paid_amount||0)+Number(data.paid_amount2||0),enrollment:data.enrollment});
      setValues(v=>({...v,p_amount:String(selected.amount),charge5:String(selected.amount),tax_amount:String(totals.tax),due_amount:String(totals.due),expiry_date:addDays(data.start_date||'2026-10-09',selected.days),expiry_datee:addDays(data.start_date||'2026-10-09',selected.days)}));
    }
    if(name==='message'){const count=String(value).length;setValues(v=>({...v,message_no:String(Math.ceil(count/160)),message_count:String(count),total_char_value:String(count)}));}
    if(/search|filter|report|datewise|collection/.test(page.page+' '+className) && !/add_|upgrade/.test(page.page))page.setFilters(v=>({...v,[name]:{value,text:element.selectedOptions?.[0]?.textContent||value}}));
  }
  function fillDemo(){
    const next={...values};
    for(const el of ref.current.querySelectorAll('input,select,textarea')){
      if(!el.name||el.disabled||el.readOnly||['hidden','file','checkbox','radio','submit','button'].includes(el.type)||el.value)continue;
      const key=(el.name+' '+el.getAttribute('aria-label')).toLowerCase();
      next[el.name]=el.tagName==='SELECT'?[...el.options].find(o=>o.value&&!o.disabled)?.value||'':el.type==='date'?new Date().toISOString().slice(0,10):el.type==='time'?'09:00':el.type==='number'?'500':/mail/.test(key)?'demo.member@example.com':/phone|mobile|cell/.test(key)?'9876543210':/address/.test(key)?'24 Park Road, Jaipur':/name/.test(key)?'Ananya Sharma':/status/.test(key)?'Active':'Demo details';
    }
    setValues(next);page.notify('Demo values filled. Review the form before saving.');
  }
  async function submit(e) {
    e.preventDefault(); if(busy)return;
    if(onSubmit){onSubmit(e);return;}
    const form=e.currentTarget;if(!form.reportValidity())return;
    const data=serialize(form);
    if(className.includes('quick-search-form')) { const query=form.querySelector('input[type=text]').value;page.navigate('/member_profile/member_profile?q='+encodeURIComponent(query));return; }
    if(/search/.test(className)||/report|manage_invoice|cancel_invoice|manage_recipt|datewise|monthly|today_logs|manage_expenses|manage_enquiry/.test(page.page)&&!/add_/.test(page.page)) {page.setFilters(v=>({...v,...Object.fromEntries(Object.entries(data).map(([k,value])=>[k,{value,text:form.elements.namedItem(k)?.selectedOptions?.[0]?.textContent||value}]))}));return;}
    setBusy(true);
    try {
      if(page.page==='login0bfe') {
        if(page.loginPanel==='forgot'){page.notify('Password reset requests are recorded locally for this demo.');saveRecord('password_resets',{email:data.email});page.setLoginPanel('login');return;}
        if(data.username!=='admin'||data.password!=='HGMS@123'){page.notify('Use admin and HGMS@123 to sign in to the local demo.','error');return;}
        sessionStorage.setItem('hgms-session','admin');page.navigate('/home');return;
      }
      const file=form.querySelector('input[type=file]')?.files?.[0];
      if(/bulk.*upload|bulkmember/.test(page.page)&&file) {
        const rows=parseCSV(await file.text());if(rows.length<2)throw Error('The file must contain headers and at least one member.');
        const headers=rows.shift().map(h=>h.replace(/^\uFEFF/,'').trim().toLowerCase());const nameIndex=headers.findIndex(h=>/name/.test(h)),mobileIndex=headers.findIndex(h=>/mobile|phone/.test(h));
        if(nameIndex<0||mobileIndex<0)throw Error('CSV headers must include Name and Mobile.');
        const valid=rows.map((row,i)=>{if(!row[nameIndex]||!/^\+?[\d -]{7,20}$/.test(row[mobileIndex]||''))throw Error(`Invalid name or mobile at row ${i+2}.`);return {id:uid(),name:row[nameIndex],mobile:row[mobileIndex],org_id:readState().activeOrganizationId};});
        updateState(s=>({...s,collections:{...s.collections,members:[...(s.collections.members||[]),...valid]}}));page.notify(`${valid.length} members imported.`);return;
      }
      if(data.cell_phone&&!/^\+?[\d -]{7,20}$/.test(data.cell_phone))throw Error('Enter a valid mobile number.');
      if(data.start_date&&data.expiry_date&&data.expiry_date<data.start_date)throw Error('Expiry date must be on or after the start date.');
      if(Number(data.paid_amount)<0)throw Error('Paid amount cannot be negative.');
      let domain=domainFor(page.page);
      if(page.page.startsWith('local/')){const source=missingRoutes.find(r=>r.route===page.page)?.references.find(r=>r!=='home.html');if(source)domain=domainFor(source);}
      const selected=plans.find(p=>p.id===String(data.plan||data.plan_id));
      const member=data.member_id||data.userid;
      const name=data.m_name||data.name||data.Name||data['Member Name']||data['Plan Name']||members.find(m=>m.id===member)?.name;
      const normalized={...data,name,mobile:data.cell_phone||data.number||data.Mobile||data.mobile,plan:selected?.name||data.plan,start:data.start_date||data.date,expiry:data.expiry_date,amount:selected?.amount||data.p_amount,paid:data.paid_amount,org_id:readState().activeOrganizationId};
      if(/add_member/.test(page.page)) {
        domain='members';
        if([...members,...(readState().collections.members||[])].some(m=>m.id===data.member_id))throw Error('This member ID already exists.');
        normalized.id=data.member_id||uid();
        normalized.mobile=data.cell_phone;
      }
      if(/promotion_broadcast/.test(page.page)) {domain='messages';if(!data.message?.trim())throw Error('Enter a message.');normalized.status='Recorded locally';}
      if(/attendance/.test(page.page)&&member) {normalized.memberId=member;normalized.status=data.attend|| (data.attendance?'Present':'Absent');}
      saveRecord(domain,normalized);
      if(/add_member/.test(page.page)&&selected)saveRecord('invoices',{...normalized,id:uid(),memberId:normalized.id,invoice_no:data.invoice_no});
      updateState(s=>({...s,forms:{...s.forms,[key]:data}}));
      page.notify(/promotion_broadcast/.test(page.page)?'Message saved to the local outbox.':'Saved successfully.');page.setModal(null);
    } catch(error) {page.notify(error.message||'Unable to save.','error');} finally {setBusy(false);}
  }
  return <FormContext.Provider value={{values,change}}><form {...props} ref={ref} className={className} onSubmit={submit} aria-busy={busy}>{/add_|local\/(edit|add)/.test(page.page)&&!/(search|filter)/.test(className)&&<div className="mb-5 flex w-full basis-full flex-wrap items-center justify-between gap-3 rounded-xl bg-primary-soft p-3 text-sm"><span>Preview this form with sample values.</span><button type="button" className="button-secondary" onClick={fillDemo}>Fill demo data</button></div>}{children}</form></FormContext.Provider>;
}
export function Field({as:Tag='input',defaultValue='',defaultChecked=false,children,behavior,...props}) {
  if(Tag==='select'&&!React.Children.toArray(children).some(child=>React.isValidElement(child)&&child.type==='option'&&child.props.value!=='')){const key=String(props.name||props.id||'').toLowerCase();const options=/plan/.test(key)?plans.map(p=>[p.id,p.name]):/class/.test(key)?[['yoga','Yoga Flow'],['strength','Strength Training'],['spin','Spin Class']]:/member|user/.test(key)?members.map(m=>[m.id,m.name]):[['1','Morning'],['2','Evening'],['3','Weekend']];children=options.map(([value,label])=><option key={value} value={value}>{label}</option>);}
  if(Tag==='select' && /^(plan|plan_id|bulk_plan_id|p_id|old_ptplan)$/.test(String(props.name||''))) {
    const placeholders=React.Children.toArray(children).filter(child=>React.isValidElement(child)&&child.type==='option'&&(!child.props.value||child.props.value==='all'));
    children=[...placeholders,...plans.map(plan=><option key={plan.id} value={plan.id}>{plan.name||plan['Plan Name']||'Plan'}</option>)];
  }
  const form=useContext(FormContext),page=usePage(),ref=useRef(null),name=props.name||props.id||props.placeholder||'field';
  const [local,setLocal]=useState(defaultValue),[checked,setChecked]=useState(defaultChecked),[preview,setPreview]=useState(null);
  const value=form?.values[name]??local;
  const type=props.type||'text';
  const isChoice=type==='checkbox'||type==='radio';
  const radioValue=form ? form.values[name] : page.filters[name]?.value;
  const generatedId=useId();
  useEffect(()=>{const element=ref.current;if(!element)return;const label=element.labels?.[0]||(element.closest('.form-group')?.querySelectorAll('input,select,textarea').length===1?element.closest('.form-group')?.querySelector('label'):null);if(label&&!label.htmlFor&&element.closest('.form-group')?.querySelectorAll('input,select,textarea').length===1)label.htmlFor=element.id;if(label&&!props['aria-label'])element.setAttribute('aria-label',label.textContent.trim().replace(/\s+/g,' '));},[generatedId]);
  const nativeProps={...props,id:props.id||generatedId,ref,'aria-label':props['aria-label']||props.placeholder||props.name||props.id||'Field'};
  if(Tag==='input' && /date-picker/.test(props.className||''))nativeProps.type='date';
  if(Tag==='input' && /time-picker/.test(props.className||''))nativeProps.type='time';
  if(Tag==='input' && /phone|mobile|number/.test(name) && type==='text')nativeProps.inputMode='tel';
  if(Tag==='input' && /amount|discount|weight|height/.test(name) && !props.readOnly)nativeProps.inputMode='decimal';
  function change(e) {
    if(type==='file'){
      const file=e.target.files?.[0];
      if(file&&file.size>5*1024*1024){page.notify('Choose a file smaller than 5 MB.','error');e.target.value='';return;}
      if(file&&file.type.startsWith('image/')){const reader=new FileReader();reader.onload=()=>setPreview(reader.result);reader.readAsDataURL(file);}return;
    }
    const next=props.multiple?[...e.target.selectedOptions].map(o=>o.value):e.target.value;
    setLocal(next);setChecked(e.target.checked);
    form?.change(name,isChoice?(type==='radio'?next:e.target.checked):next,e.target);
    if(!form)page.setFilters(f=>({...f,[name]:{value:next,text:e.target.selectedOptions?.[0]?.textContent||next}}));
    if(/window.location.href/.test(behavior||''))page.navigate(next.replace(/\.html/,'').replace(/^([^/])/,'/$1'));
  }
  if(type==='submit'||type==='button'||type==='reset')return <input {...nativeProps} value={defaultValue} />;
  if(type==='file')return <><input {...nativeProps} onChange={change}/>{preview&&<img className="hgms-upload-preview" src={preview} alt="Selected file"/>}</>;
  return <Tag {...nativeProps} value={isChoice?defaultValue:value} checked={isChoice?(type==='radio'?radioValue!==undefined ? radioValue===defaultValue : checked:typeof form?.values[name]==='boolean'?form.values[name]:checked):undefined} onChange={change}>{children}</Tag>;
}
