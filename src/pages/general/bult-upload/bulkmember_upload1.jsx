import AppIcon from '@/components/AppIcon';
import React from 'react';
import {Download, UploadCloud, FileSpreadsheet, Info, ArrowRight} from 'lucide-react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container">
<div className="row">
<div className="col-sm-12">
<ol className="breadcrumb">
<li >
<AppIcon className="clip-pencil" />
<AppLink href="/home">
{" Home "}
</AppLink>
</li>
<li className="active">
{" Import member"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Unbound Bulk Member"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_bulkmember_upload1_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_bulkmember_upload1_php" tabIndex="-1" role="dialog">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="gym-switcher-head">
<div className="gym-switcher-kicker">
{"Gym Switcher"}
</div>
<h4 className="gym-switcher-title">
{"Choose Workspace"}
</h4>
<p className="gym-switcher-subtitle">
{"Select a gym to open this page in the right workspace."}
</p>
</div>
<div className="gym-switcher-body">
<div className="gym-switcher-list">
<AppLink href="/general/bult-upload/bulkmember_upload1?org_id=all" className="gym-switcher-item">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-th-large" />
</span>
<span className="gym-switcher-name">
{"All Gyms"}
</span>
</span>
<span className="gym-switcher-badge">
{"Select"}
</span>
</AppLink>
<AppLink href="/general/bult-upload/bulkmember_upload1?org_id=1" className="gym-switcher-item is-active">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-building-o" />
</span>
<span className="gym-switcher-name">
{"HGMS - Gym Management Software"}
</span>
</span>
<span className="gym-switcher-badge">
{"Active"}
</span>
</AppLink>
<AppLink href="/general/bult-upload/bulkmember_upload1?org_id=2" className="gym-switcher-item">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-building-o" />
</span>
<span className="gym-switcher-name">
{"BIOMETRIC TEST"}
</span>
</span>
<span className="gym-switcher-badge">
{"Select"}
</span>
</AppLink>
</div>
</div>
</div>
</div>
</Modal>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Unbound Bulk Member "}
</div>
<div className="panel-body">
<LocalForm role="form" id="form" formKey="form" className="bulk-import-form">
<div className="bulk-import-main">
<section className="bulk-import-section"><div className="bulk-section-heading"><span>01</span><div><h2>Import settings</h2><p>Choose how your member data should be read.</p></div></div>
<div className="form-group"><label className="control-label" htmlFor="bulk-plan">Membership plan <span className="text-primary">*</span></label><Field className="form-control" name="plan_id" id="bulk-plan" required={true} as="select">
<option value="">
{"Select Plan Name"}
</option>
<option value="67">
{"3 month plan ."}
</option>
<option value="76">
{"1 Month plan"}
</option>
<option value="79">
{"6 month plan"}
</option>
<option value="82">
{"Special Month Plan"}
</option>
<option value="84">
{"Quaterly plan"}
</option>
<option value="85">
{"Test Month 3"}
</option>
<option value="86">
{"Fast Monthly"}
</option>
<option value="87">
{"Daily Plan"}
</option>
<option value="88">
{"3 month plan"}
</option>
<option value="92">
{"test plan monthly"}
</option>
<option value="93">
{"test 1 month"}
</option>
<option value="94">
{"weekly plan"}
</option>
</Field></div>
<fieldset className="bulk-date-field"><legend>Date format <span className="text-primary">*</span></legend><p>Match the date format used in your CSV.</p><div className="bulk-option-grid">{['DD/MM/YYYY','DD-MM-YYYY','YYYY/MM/DD','YYYY-MM-DD'].map((format,index)=><label key={format} className="bulk-option"><Field type="radio" defaultValue={String(index+1)} name="start_joining_format" required={true} as="input"/><span>{format}</span></label>)}</div></fieldset>
</section>
<section className="bulk-import-section"><div className="bulk-section-heading"><span>02</span><div><h2>Tax preferences</h2><p>Set the tax options for this import.</p></div></div>
<label className="bulk-tax-inclusive"><Field type="checkbox" defaultValue="1" id="tax_include" name="tax_include" as="input"/><span>Plan amount includes tax</span></label>
<fieldset><legend className="bulk-tax-legend">Applicable taxes</legend><div className="bulk-tax-options">{[['12','CGST (2.5 %)'],['13','VAT (2.5 %)'],['14','GST (15 %)'],['15','GST (5 %)'],['16','VAT (10 %)']].map(([id,label])=><label key={id} className="bulk-option"><Field type="checkbox" defaultValue={id} id={'tax'+id} name="tax[]" as="input"/><span>{label}</span></label>)}</div></fieldset>
</section>
<section className="bulk-import-section"><div className="bulk-section-heading"><span>03</span><div><h2>Upload member file</h2><p>Select your completed CSV to import members.</p></div></div>
<div className="bulk-file-box"><span className="bulk-upload-icon"><UploadCloud size={24}/></span><label htmlFor="uploadFile">Choose your member CSV</label><p>CSV format ? Maximum 5 MB</p><Field type="file" accept=".csv,text/csv" className="form-control" id="uploadFile" name="cname" required={true} as="input"/></div>
<Field type="hidden" defaultValue="1" name="orgn_org_id" required={true} as="input"/>
</section>
<div className="bulk-import-actions"><p>Review your settings before importing.</p><ActionButton className="btn btn-primary" id="uploadData" type="submit">Import members <ArrowRight size={15}/></ActionButton></div>
</div>
<aside className="bulk-import-guide"><div className="bulk-template-card"><span className="bulk-template-icon"><FileSpreadsheet size={23}/></span><h2>Start with the template</h2><p>Use the sample file to prepare your member data in the expected format.</p><AppLink download="" className="button-secondary" href="/local/gym_unbbulkmember.csv"><Download size={15}/> Download sample CSV</AppLink></div>
<div className="bulk-help-card"><h3><Info size={16}/> Before you import</h3><ul><li>Include a Member ID in your CSV.</li><li>Use the same date format throughout the file.</li><li>For Discount Type, use <code>percentage</code> or <code>amount</code>.</li><li>Select the membership plan and applicable taxes before uploading.</li></ul></div></aside>
</LocalForm>
<div id="loader-icon" className="hidden">
<img src={`${import.meta.env.BASE_URL}assets/avatar.svg`} />
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
