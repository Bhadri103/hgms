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
{"Home"}
</AppLink>
</li>
<li className="active">
{"Manage Enquiry"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Manage Enquiry"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_manage_enquiry_pre_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_manage_enquiry_pre_php" tabIndex="-1" role="dialog">
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
<AppLink href="/communicate/enquiry/manage_enquiry_pre?org_id=all&followup=delayed" className="gym-switcher-item">
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
<AppLink href="/communicate/enquiry/manage_enquiry_pre?org_id=1&followup=delayed" className="gym-switcher-item is-active">
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
<AppLink href="/communicate/enquiry/manage_enquiry_pre?org_id=2&followup=delayed" className="gym-switcher-item">
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
<div className="col-sm-12">
<span className="stat-badge stat-total" id="btn_stat_total" title="Show all">
<AppIcon className="fa fa-list" />
{" Total: 31"}
</span>
<span className="stat-badge stat-hot" id="btn_stat_hot" title="Show Hot leads">
<AppIcon className="fa fa-fire" />
{" Hot: 3"}
</span>
<span className="stat-badge stat-warm" id="btn_stat_warm" title="Show Warm leads">
<AppIcon className="fa fa-sun-o" />
{" Warm: 26"}
</span>
<span className="stat-badge stat-cold" id="btn_stat_cold" title="Show Cold leads">
<AppIcon className="fa fa-snowflake-o" />
{" Cold: 2"}
</span>
<ActionButton id="btn_today_fu" className="btn btn-xs btn-success" title="Show today's follow-ups" type="button">
<AppIcon className="fa fa-calendar-check-o" />
{" Today's Follow-ups "}
<span className="badge">
{"0"}
</span>
</ActionButton>
<ActionButton id="btn_delayed_fu" className="btn btn-xs btn-danger" title="Show delayed follow-ups" type="button">
<AppIcon className="fa fa-clock-o" />
{" Delayed Follow-ups "}
<span className="badge">
{"16"}
</span>
</ActionButton>
</div>
</div>
<div className="filter-card">
<div className="filter-title">
<AppIcon className="fa fa-filter" />
{" Filters"}
</div>
<div className="row">
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="type">
{"Search By"}
</label>
<Field id="type" className="form-control" as="select">
<option value="">
{"All Fields"}
</option>
<option value="mem_id">
{"Enquiry No."}
</option>
<option value="name">
{"Name"}
</option>
<option value="mobile">
{"Mobile"}
</option>
</Field>
</div>
</div>
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="lead_type_filter">
{"Lead Type"}
</label>
<Field id="lead_type_filter" className="form-control" as="select">
<option value="">
{"All Types"}
</option>
<option value="2">
{"Hot"}
</option>
<option value="0">
{"Warm"}
</option>
<option value="1">
{"Cold"}
</option>
</Field>
</div>
</div>
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="inq_type_filter">
{"Inquiry Type"}
</label>
<Field id="inq_type_filter" className="form-control" as="select">
<option value="">
{"All Inquiry Types"}
</option>
<option value="13">
{"abc"}
</option>
<option value="17">
{"application"}
</option>
<option value="11">
{"call "}
</option>
<option value="18">
{"call back"}
</option>
<option value="24">
{"facebook"}
</option>
<option value="12">
{"google"}
</option>
<option value="23">
{"instagram"}
</option>
<option value="21">
{"instsgram"}
</option>
<option value="16">
{"Jumba"}
</option>
<option value="20">
{"reference"}
</option>
<option value="19">
{"Self"}
</option>
<option value="14">
{"Social Media"}
</option>
<option value="22">
{"student"}
</option>
<option value="10">
{"walk in"}
</option>
<option value="15">
{"xyz"}
</option>
</Field>
</div>
</div>
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="date_from">
{"Log Date From"}
</label>
<Field type="date" id="date_from" className="form-control" as="input" />
</div>
</div>
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="date_to">
{"Log Date To"}
</label>
<Field type="date" id="date_to" className="form-control" as="input" />
</div>
</div>
<div className="col-md-2 col-sm-6 col-xs-12">
<div className="form-group">
<label  htmlFor="followup_date">
{"Follow-up Date"}
</label>
<Field type="date" id="followup_date" className="form-control" as="input" />
</div>
</div>
</div>
<Field type="hidden" id="delayed_mode" defaultValue="" as="input" />
<div className="row">
<div className="col-sm-12">
<ActionButton id="btn_apply" className="btn btn-primary btn-filter" type="button">
<AppIcon className="fa fa-search" />
{" Apply"}
</ActionButton>
<ActionButton id="btn_clear" className="btn btn-default btn-filter" type="button">
<AppIcon className="fa fa-times" />
{" Clear"}
</ActionButton>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Manage Enquiry "}
<span className="panel-actions">

<AppLink href="/communicate/enquiry/add_enquiry_pre">
<ActionButton className="btn btn-primary btn-xs" type="button">
<AppIcon className="fa fa-plus" />
{" Add Enquiry"}
</ActionButton>
</AppLink>
</span>
</div>
<div className="panel-body">
<div className="table-responsive">
<DataTable tableKey="communicate/enquiry/manage_enquiry_followup_delayed:table-0" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Address","Inquiry Type","Entry Type","Follow up Date","Follow up Time","Log by","Last Thread","View Thread","Action"]} className="table table-striped table-bordered table-hover" />
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
