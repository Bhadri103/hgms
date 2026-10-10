import AppIcon from '@/components/AppIcon';
import React from 'react';
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
{" Import Basic Member"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Upload Basic Member"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_bulkmember_upload2_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_bulkmember_upload2_php" tabIndex="-1" role="dialog">
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
<AppLink href="/general/bult-upload/bulkmember_upload2?org_id=all" className="gym-switcher-item">
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
<AppLink href="/general/bult-upload/bulkmember_upload2?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/general/bult-upload/bulkmember_upload2?org_id=2" className="gym-switcher-item">
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
{" Upload Basic Member "}
</div>
<div className="panel-body">
<LocalForm role="form" id="form" formKey="form">
<div className="row">
<div className="col-md-12">
<div className="errorHandler alert alert-danger no-display">
<AppIcon className="fa fa-times-sign" />
{" You have errors below. "}
</div>
</div>
</div>
<div className="col-md-6">
<h1 >
<AppLink download="" className="" role="link" href="/local/gym_basicbulkmember.csv">
{" Download the Sample File "}
</AppLink>
</h1>
<div className="form-group">
<label className="control-label">
{" Date Format "}
<span className="symbol required">

</span>
</label>
<br  />
<div className="radio">
<label >
<Field type="radio" defaultValue="1" name="start_joining_format" className="grey" defaultChecked={true} as="input" />
{" DD/MM/YYYY "}
</label>
</div>
<div className="radio">
<label >
<Field type="radio" defaultValue="2" name="start_joining_format" className="grey" as="input" />
{" Any format PHP can parse (strtotime) "}
</label>
</div>
<div className="radio">
<label >
<Field type="radio" defaultValue="3" name="start_joining_format" className="grey" as="input" />
{" YYYY-MM-DD "}
</label>
</div>
<div className="radio">
<label >
<Field type="radio" defaultValue="4" name="start_joining_format" className="grey" as="input" />
{" YYYYMMDD "}
</label>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="bulk_plan_id">
{" Plan "}
<span className="symbol required">

</span>
</label>
<Field className="form-control" name="bulk_plan_id" id="bulk_plan_id" required={true} as="select">
<option value="">
{"Select Plan"}
</option>
<option value="67">
{"3 month plan .(4999)(90 Days)"}
</option>
<option value="76">
{"1 Month plan(1000)(30 Days)"}
</option>
<option value="79">
{"6 month plan(5000)(6 Months)"}
</option>
<option value="82">
{"Special Month Plan(2500)(30 Days)"}
</option>
<option value="84">
{"Quaterly plan(2500)(3 Months)"}
</option>
<option value="85">
{"Test Month 3(9999)(3 Months)"}
</option>
<option value="86">
{"Fast Monthly(1800)(1 Days)"}
</option>
<option value="87">
{"Daily Plan(100)(1 Days)"}
</option>
<option value="88">
{"3 month plan(8000)(90 Days)"}
</option>
<option value="92">
{"test plan monthly(8000)(1 Months)"}
</option>
<option value="93">
{"test 1 month(5000)(1 Months)"}
</option>
<option value="94">
{"weekly plan(500)(7 Days)"}
</option>
</Field>
<p className="help-block">
{"Applied to every member in this file. Start Date / Expiry Date are still taken from the CSV as-is."}
</p>
</div>
<div className="form-group">
<label className="control-label" htmlFor="uploadFile">
{" Import Member CSV "}
<span className="symbol required">

</span>
</label>
<Field type="file" placeholder="Name" className="form-control" id="uploadFile" name="cname" required={true} as="input" />
<Field type="hidden" defaultValue="1" name="orgn_org_id" required={true} as="input" />
</div>
<div className="col-md-12">
<div className="col-md-4 form-group">
<ActionButton className="btn btn-yellow btn-block" id="uploadData" type="submit">
{" Submit "}
</ActionButton>
</div>
</div>
<div className="progress col-md-12">
<div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">

</div>
</div>
<div id="targetLayer" className="hidden">

</div>
</div>
<div className="col-md-6 text-danger">
<fieldset >
<legend >
{"NOTE"}
</legend>
<ul >
<li >
{"CSV columns (in order): Member Name, Address, Mobile, Start Date, Expiry Date."}
</li>
<li >
{"The selected Plan is assigned to every member in this file; Start Date and Expiry Date still come from the CSV as-is."}
</li>
<li >
{"Member Name is required; rows with a blank name are skipped."}
</li>
<li >
{"Member ID is auto-assigned; do not include it in the CSV."}
</li>
<li >
{"If Expiry Date is left blank, it defaults to Start Date."}
</li>
<li >
{"Rows with a Mobile number already used by another member in this gym (or duplicated earlier in the same file) are skipped."}
</li>
</ul>
</fieldset>
</div>
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
