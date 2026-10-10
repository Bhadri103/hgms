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
{" View Attendance Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"View Attendance Report"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_monthly_attendance_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_monthly_attendance_php" tabIndex="-1" role="dialog">
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
<AppLink href="/attendance/monthly_attendance?org_id=all" className="gym-switcher-item">
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
<AppLink href="/attendance/monthly_attendance?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/attendance/monthly_attendance?org_id=2" className="gym-switcher-item">
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
<div className="row">
<div className="col-md-12">
<div className="monthly-filter-wrap">
<LocalForm className="form-inline monthly-filter-bar" formKey="form-1">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="form-group">
<Field type="text" name="search" className="form-control" placeholder="Search name or membership no" defaultValue="" as="input" />
</div>
<div className="form-group">
<Field name="member_status" className="form-control" defaultValue="live" as="select">
<option value="live">
{"Live Members"}
</option>
<option value="expired">
{"Expired Members"}
</option>
<option value="all">
{"All Members"}
</option>
</Field>
</div>
<div className="form-group">
<Field name="sort_by" className="form-control" defaultValue="attendance_desc" as="select">
<option value="attendance_desc">
{"Most Attendance"}
</option>
<option value="attendance_asc">
{"Least Attendance"}
</option>
<option value="name_asc">
{"Name A to Z"}
</option>
<option value="name_desc">
{"Name Z to A"}
</option>
<option value="expiry_asc">
{"Expiry Soonest"}
</option>
<option value="expiry_desc">
{"Expiry Latest"}
</option>
<option value="joining_desc">
{"Newest Joinings"}
</option>
<option value="joining_asc">
{"Oldest Joinings"}
</option>
</Field>
</div>
<ActionButton type="submit" className="btn btn-primary">
{"Apply"}
</ActionButton>
</LocalForm>
<div className="monthly-filter-state">
<span className="monthly-filter-chip primary">
<strong >
{"Status:"}
</strong>
{" Live Members"}
</span>
<span className="monthly-filter-chip success">
<strong >
{"Sort:"}
</strong>
{" Most Attendance"}
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" View Attendance Report"}
</div>
<div className="container">

</div>
<div id="ajax_data">
<div className="panel-body">
<div className="row">
<div className="col-md-4">
<div className="alert alert-success">
<strong >
{"Live Members:"}
</strong>
{" 27 "}
</div>
</div>
<div className="col-md-4">
<div className="alert alert-info">
<strong >
{"Most Attendance:"}
</strong>
{" sx2157 - radhe (1) "}
</div>
</div>
<div className="col-md-4">
<div className="alert alert-warning">
<strong >
{"Least Attendance:"}
</strong>
{" sx2149 - HGMS Sanjay (0) "}
</div>
</div>
</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="attendance/monthly_attendance:table-0" columns={["Joining Date","Expiry Date","Membership No","Name","Monthly Attendance","View Log"]} className="table table-striped table-bordered table-hover table-full-width" />
<div className="">
<AppLink className="btn btn-xs btn-primary" href="/attendance/monthly_attendance?org_id=1&page_no=1">
{"1"}
</AppLink>
<AppLink className="btn btn-xs btn-default" href="/attendance/monthly_attendance?org_id=1&page_no=2">
{"2"}
</AppLink>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
