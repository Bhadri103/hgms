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
<AppIcon className="clip-grid-6" />
<AppLink href="/home">
{" Home "}
</AppLink>
</li>
<li className="active">
{" Expired Members Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Expired Members Report"}
</h1>
<b className="text-success">

</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_expired_memberreport_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_expired_memberreport_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/expired_memberreport?org_id=all&exp=expired" className="gym-switcher-item">
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
<AppLink href="/report/expired_memberreport?org_id=1&exp=expired" className="gym-switcher-item is-active">
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
<AppLink href="/report/expired_memberreport?org_id=2&exp=expired" className="gym-switcher-item">
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
<div id="sms_charge">

</div>
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Expired Members Report"}
</div>
<div className="container">
<div className="">
<div id="date_fields" className="report-mode-options">
<div className="">
<label className="radio-inline">
<Field name="rep_type" required={true} id="rep_type" defaultValue="date" type="radio" as="input" />
{" Report By Date "}
</label>
<label className="radio-inline">
<Field name="rep_type" required={true} id="rep_type1" defaultValue="range" type="radio" as="input" />
{" Report By Date Range "}
</label>
</div>
</div>
<div className="col-md-12 hidden" id="tday">
<LocalForm id="myform" formKey="myform">
<div className="input-group col-md-3">
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd" id="start_date1" autoComplete="off" as="input" />
<Field type="hidden" name="exp" defaultValue="expired" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="">
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
<div className="col-md-12 hidden" id="tday2">
<LocalForm id="myform" formKey="myform">
<div className="input-group col-md-3">
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd1" id="start_date1" autoComplete="off" as="input" />
<Field type="hidden" name="exp" defaultValue="expired" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="input-group col-md-3">
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd2" id="start_date1" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div >
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
</div>
</div>
<Field type="hidden" id="new_date_e" name="date_datepicker" as="input" />
<div className="panel-body">
<div className="member-report-toolbar">
<div className="member-report-summary">
<span className="member-report-summary-badge">
{"Period"}
</span>
<span >
{"Filter members by when their membership expires."}
</span>
</div>
<div className="member-filter-bar">
<AppLink href="/report/expired_memberreport?exp=expired" className="btn btn-primary btn-sm">
{"Expired "}
</AppLink>
<AppLink href="/report/expired_memberreport?exp=today" className="btn btn-default btn-sm">
{"Today"}
</AppLink>
<AppLink href="/report/expired_memberreport?exp=7days" className="btn btn-default btn-sm">
{"7 Days"}
</AppLink>
<AppLink href="/report/expired_memberreport?exp=month" className="btn btn-default btn-sm">
{"Month"}
</AppLink>
<AppLink href="/report/expired_memberreport?exp=lastmonth" className="btn btn-default btn-sm">
{"Last Month"}
</AppLink>
<AppLink href="/report/expired_memberreport?exp=year" className="btn btn-default btn-sm">
{"Year"}
</AppLink>
<AppLink id="export_exp_link" className="btn btn-success btn-sm" role="link" href="/local/export_expmember_report?exp=expired&org_id=1">
<AppIcon className="fa fa-download" />
{" Export All (CSV) "}
</AppLink>
</div>
</div>
<div className="member-report-toolbar">
<div className="member-report-summary">
<span className="member-report-summary-badge">
{"Smart Filters"}
</span>
<span >
{"Choose search type, plan, and member sorting before running a search."}
</span>
</div>
<div className="member-filter-bar">
<div className="uniform-filter-field"><label htmlFor="type">Search field</label><Field name="type" id="type" as="select">
<option value="">
{"All"}
</option>
<option value="mem_id">
{"Prefix"}
</option>
<option value="name">
{"Name"}
</option>
<option value="mobile">
{"Mobile Number"}
</option>
<option value="gender">
{"Gender"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="plan_id_filter">Membership plan</label><Field id="plan_id_filter" as="select">
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
{"6 month plan(5000)(6 Days)"}
</option>
<option value="82">
{"Special Month Plan(2500)(30 Days)"}
</option>
<option value="84">
{"Quaterly plan(2500)(3 Days)"}
</option>
<option value="85">
{"Test Month 3(9999)(3 Days)"}
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
{"test plan monthly(8000)(1 Days)"}
</option>
<option value="93">
{"test 1 month(5000)(1 Days)"}
</option>
<option value="94">
{"weekly plan(500)(7 Days)"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="sort_by">Sort by</label><Field id="sort_by" className="member-sort-select" as="select">
<option value="">
{"Sort Members"}
</option>
<option value="name_asc">
{"Name (A-Z)"}
</option>
<option value="name_desc">
{"Name (Z-A)"}
</option>
<option value="expiry_asc">
{"Date of Expiry (First-Last)"}
</option>
<option value="expiry_desc">
{"Date of Expiry (Last-First)"}
</option>
<option value="joining_asc">
{"Date of Joining (First-Last)"}
</option>
<option value="joining_desc">
{"Date of Joining (Last-First)"}
</option>
<option value="member_id_asc">
{"Member ID (First-Last)"}
</option>
<option value="member_id_desc">
{"Member ID (Last-First)"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="gender_filter">Gender</label><Field id="gender_filter" as="select">
<option value="">
{"All Gender"}
</option>
<option value="Male">
{"Male"}
</option>
<option value="Female">
{"Female"}
</option>
<option value="Other">
{"Other"}
</option>
</Field></div>
</div>
</div>
<div id="new_div">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/expired_memberreport:table-0" columns={["ID","Img","Plan","Start","Expiry","Name","Contact","Account","By","Action"]} className="table table-striped table-bordered" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
