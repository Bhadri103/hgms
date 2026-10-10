import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowLeft, Building2, Dumbbell, Printer, QrCode, ScanLine, Smartphone, CheckCircle2} from 'lucide-react';
import {usePage} from '@/components/PageContext';
import AttendanceQR from '@/components/AttendanceQR';

export default function Page() {
  const {organization, organizations, selectOrganization} = usePage();
  const attendanceUrl = `${window.location.origin}${import.meta.env.BASE_URL}${import.meta.env.MODE === 'github' ? '#/' : ''}attendance/bulk_attendance?org_id=${encodeURIComponent(organization.id)}`;
  return <div className="hgms-qr-page">
    <div className="hgms-qr-topbar no-print"><Link to="/home" className="text-link"><ArrowLeft size={16}/>Back to dashboard</Link><span className="hgms-qr-wordmark"><Dumbbell size={19}/>HGMS<span>.</span></span></div>
    <section className="surface-card hgms-qr-heading no-print">
      <div className="hgms-qr-title"><span className="hgms-qr-icon"><QrCode size={24}/></span><div><h1>Attendance QR code</h1><p>A clear, printable code for your branch.</p></div></div>
      <div className="hgms-qr-actions"><label className="sr-only" htmlFor="qr-organization">Organization</label><select id="qr-organization" className="form-control" value={organization.id} onChange={event=>selectOrganization(event.target.value)}>{organizations.map(org=><option key={org.id} value={org.id}>{org.name}</option>)}</select><button type="button" className="button-primary" onClick={()=>window.print()}><Printer size={16}/>Print QR</button></div>
    </section>
    <div className="hgms-qr-grid">
      <section className="surface-card hgms-qr-poster" aria-label="Printable attendance QR">
        <div className="hgms-qr-poster-brand"><Dumbbell size={23}/><strong>HGMS<span>.</span></strong></div>
        <span className="hgms-qr-tag"><Building2 size={13}/>Attendance</span>
        <h2>{organization.name}</h2>
        <p className="hgms-qr-subtitle">Scan to open attendance</p>
        <div className="hgms-qr-frame"><AttendanceQR value={attendanceUrl} name={organization.name}/></div>
        <div className="hgms-qr-scan-label"><ScanLine size={18}/><span>Keep the full code inside your camera frame</span></div>
        <div className="hgms-qr-poster-footer"><CheckCircle2 size={16}/><span>Check the branch name before recording attendance.</span></div>
      </section>
      <div className="hgms-qr-details no-print">
        <section className="surface-card hgms-qr-guide"><h2>How to use</h2><ol>{[
          ['Open your scanner', 'Use your phone camera or a QR scanner.', Smartphone],
          ['Scan the code', 'Open the attendance link and sign in if prompted.', ScanLine],
          ['Record attendance', 'Confirm the selected branch and complete attendance in HGMS.', CheckCircle2]
        ].map(([title,description,Icon],index)=><li key={title}><span className="hgms-qr-step">{index+1}</span><div><h3>{title}</h3><p>{description}</p></div><Icon size={18} aria-hidden="true"/></li>)}</ol></section>
        <section className="surface-card hgms-qr-guide"><h2>Ready for reception</h2><p>Print on white paper and place near the front desk. Keep the code flat, well lit, and free from glare.</p><button className="button-secondary" type="button" onClick={()=>window.print()}><Printer size={16}/>Print attendance sheet</button></section>
        <div className="hgms-qr-note"><strong>Local preview</strong><p>This code opens this HGMS installation. A localhost address cannot be reached from another phone. Scanning opens the page; it does not automatically record attendance.</p></div>
      </div>
    </div>
  </div>;
}
