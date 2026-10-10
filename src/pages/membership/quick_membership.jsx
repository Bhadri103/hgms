import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle2, UserPlus} from 'lucide-react';
import {usePage, useRepository} from '@/components/PageContext';
import {saveRecord, uid} from '@/services/repository';
import {members} from '@/data/seed';

const emptyForm = {name:'', email:'', mobile:'', alternate_mobile:'', gender:'', dob:'', note:''};
const cleanPhone = value => value.replace(/[^\d+]/g, '');

export default function QuickMembership() {
  const page = usePage();
  const repository = useRepository();
  const [form,setForm] = useState(emptyForm);
  const [saving,setSaving] = useState(false);
  const [created,setCreated] = useState(null);
  const update = event => setForm(current=>({...current,[event.target.name]:event.target.value}));
  function submit(event) {
    event.preventDefault(); if(saving)return;
    const mobile=cleanPhone(form.mobile.trim()), alternate=cleanPhone(form.alternate_mobile.trim());
    if(!/^\+?\d{7,15}$/.test(mobile)){page.notify('Enter a valid mobile number.','error');return;}
    if(alternate&&!/^\+?\d{7,15}$/.test(alternate)){page.notify('Enter a valid alternate mobile number.','error');return;}
    const existing=[...members,...(repository.collections.members||[])];
    if(existing.some(member=>cleanPhone(String(member.mobile||member.cell_phone||''))===mobile)){page.notify('A member with this mobile number already exists in this organization.','error');return;}
    setSaving(true);
    try {
      const member=saveRecord('members',{id:`QM-${uid().slice(0,8).toUpperCase()}`,name:form.name.trim(),email:form.email.trim(),mobile,alternate_mobile:alternate,gender:form.gender,dob:form.dob,note:form.note.trim(),status:'Active',membership_stage:'Quick membership'});
      setCreated(member);setForm(emptyForm);page.notify(`${member.name} added successfully.`);
    } catch(error) {page.notify(error.message||'Unable to add this member.','error');}
    finally {setSaving(false);}
  }
  return <div className="quick-membership-page">
    <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/home">Home</Link><span>/</span><Link to="/membership/add_member">Membership</Link><span>/</span><span>Quick Membership</span></nav>
    <section className="page-header quick-member-header"><div className="quick-member-title"><span className="quick-member-icon"><UserPlus size={23}/></span><div><h1>Quick Membership</h1><p>Add a member now and complete the remaining details later.</p></div></div><div className="quick-member-org"><span>Adding to</span><strong>{page.organization.name}</strong></div></section>
    <div className="quick-member-layout">
      <section className="surface-card quick-member-card"><div className="quick-member-card-head"><div><h2>Basic member details</h2><p>Only fields marked with * are required.</p></div><span>Quick add</span></div>
        <form onSubmit={submit} className="quick-member-form">
          <label>Name <b>*</b><input className="form-control" name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter member name"/></label>
          <label>Email<input className="form-control" name="email" value={form.email} onChange={update} type="email" autoComplete="email" placeholder="member@example.com"/></label>
          <label>Mobile Number <b>*</b><input className="form-control" name="mobile" value={form.mobile} onChange={update} required inputMode="tel" autoComplete="tel" placeholder="Enter mobile number"/></label>
          <label>Alternate Mobile Number<input className="form-control" name="alternate_mobile" value={form.alternate_mobile} onChange={update} inputMode="tel" placeholder="Optional alternate number"/></label>
          <label>Gender <b>*</b><select className="form-control" name="gender" value={form.gender} onChange={update} required><option value="">Select gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option><option value="Prefer not to say">Prefer not to say</option></select></label>
          <label>Date of Birth<input className="form-control" name="dob" value={form.dob} onChange={update} type="date" max={new Date().toISOString().slice(0,10)}/></label>
          <label className="quick-member-note">Note<textarea className="form-control" name="note" value={form.note} onChange={update} rows="4" placeholder="Optional note about this member"/></label>
          <div className="quick-member-actions"><Link to="/membership/add_member" className="button-secondary">Open full form</Link><button className="button-primary" type="submit" disabled={saving}><UserPlus size={16}/>{saving?'Adding…':'Add member'}</button></div>
        </form>
      </section>
      <aside className="surface-card quick-member-help">{created?<><span className="quick-member-success"><CheckCircle2 size={22}/></span><h2>Member added</h2><p><strong>{created.name}</strong> is now active in {page.organization.name}.</p><Link className="button-primary" to={`/member_profile/member_profile?q=${encodeURIComponent(created.name)}`}>View member <ArrowRight size={15}/></Link><button type="button" className="button-secondary" onClick={()=>setCreated(null)}>Add another member</button></>:<><span className="quick-member-help-icon"><UserPlus size={21}/></span><h2>Finish the profile later</h2><p>The member becomes available immediately. You can add a plan, address, photo, documents, and payment details from the member profile later.</p><ul><li><CheckCircle2 size={15}/>Saved under the selected organization</li><li><CheckCircle2 size={15}/>Available in member search</li><li><CheckCircle2 size={15}/>Ready for profile completion</li></ul></>}</aside>
    </div>
  </div>;
}
