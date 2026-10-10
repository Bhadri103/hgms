import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {UserRound, LockKeyhole, Eye, EyeOff, Check} from 'lucide-react';
import {usePage, useRepository} from '@/components/PageContext';
import {accountProfile, changePassword} from '@/services/account';
import {updateState} from '@/services/repository';

export default function MyProfile() {
  const state = useRepository(), page = usePage();
  const [draft, setDraft] = useState(() => accountProfile(state));
  const [passwords, setPasswords] = useState({current: '', next: '', confirm: ''});
  const [show, setShow] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState('');
  const profile = accountProfile(state);
  function save(event) {
    event.preventDefault();
    if (!draft.name.trim() || !draft.studio.trim()) {page.notify('Enter your name and studio name.', 'error'); return;}
    try {updateState(current => ({...current, profile: Object.fromEntries(Object.entries(draft).map(([key, value]) => [key, value.trim()]))})); page.notify('Profile updated.');}
    catch {page.notify('Could not save your profile. Please try again.', 'error');}
  }
  async function savePassword(event) {
    event.preventDefault(); setError('');
    if (passwords.next !== passwords.confirm) {setError('New passwords do not match.'); return;}
    setBusy(true);
    try {await changePassword(passwords.current, passwords.next); setPasswords({current: '', next: '', confirm: ''}); page.notify('Password updated for this browser.');}
    catch (failure) {setError(failure.message);}
    finally {setBusy(false);}
  }
  return <div className="account-page">
    <div className="account-heading"><div><Link to="/home" className="text-link">Home</Link><h1>My profile</h1><p>Personal details and account security.</p></div><span className="account-avatar">{profile.name.charAt(0).toUpperCase()}</span></div>
    <div className="account-grid">
      <section className="surface-card account-card"><header><UserRound size={18}/><div><h2>Profile details</h2><p>{profile.studio}</p></div></header>
        <form onSubmit={save}><div className="account-fields">{[['name','Full name','text',true],['studio','Studio name','text',true],['email','Email address','email',true],['mobile','Mobile number','tel',false]].map(([key,label,type,required]) => <label key={key}>{label}{required && <span className="text-primary"> *</span>}<input className="field" type={type} required={required} autoComplete={{name:'name',studio:'organization',email:'email',mobile:'tel'}[key]} value={draft[key]} onChange={event => setDraft({...draft,[key]:event.target.value})}/></label>)}<label className="account-full">Studio address<textarea className="field" rows="3" autoComplete="street-address" value={draft.address} onChange={event => setDraft({...draft,address:event.target.value})}/></label></div><footer><span>* Required fields</span><button type="submit" className="button-primary"><Check size={15}/>Save changes</button></footer></form>
      </section>
      <section className="surface-card account-card"><header><LockKeyhole size={18}/><div><h2>Change password</h2><p>Update your local sign-in password.</p></div></header><form onSubmit={savePassword}>
        <div className="account-fields account-passwords">{[['current','Current password'],['next','New password'],['confirm','Confirm new password']].map(([key,label]) => <label key={key}>{label}<input className="field" type={show?'text':'password'} required minLength={key==='current'?undefined:8} autoComplete={key==='current'?'current-password':'new-password'} value={passwords[key]} onChange={event => setPasswords({...passwords,[key]:event.target.value})}/></label>)}<div className="account-password-hint"><span>Use at least 8 characters.</span><button type="button" onClick={()=>setShow(!show)} aria-label={show?'Hide passwords':'Show passwords'}>{show?<EyeOff size={15}/>:<Eye size={15}/>} {show?'Hide':'Show'}</button></div>{error && <p role="alert" className="text-sm text-coral">{error}</p>}</div>
        <footer><span>Saved on this browser</span><button type="submit" className="button-primary" disabled={busy}>{busy?'Updating…':'Update password'}</button></footer>
      </form></section>
    </div>
  </div>;
}
