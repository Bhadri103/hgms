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
{" View Members"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Expiring PT/Groupx All Members"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_pt_gx_expiring_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_pt_gx_expiring_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/pt_gx_expiring?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/pt_gx_expiring?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/pt_gx_expiring?org_id=2" className="gym-switcher-item">
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
<div className="col-md-12">
<div className="mem-stat-row">
<AppLink className="mem-stat-card c-green active" href="/report/pt_gx_expiring?m_type=all&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">

</path>
<circle cx="9" cy="7" r="4">

</circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87">

</path>
<path d="M16 3.13a4 4 0 0 1 0 7.75">

</path>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"7"}
</div>
<div className="mem-stat-label">
{"Live Memberships"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-blue" href="/report/pt_gx_expiring?m_type=7days&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10">

</circle>
<polyline points="12 6 12 12 16 14">

</polyline>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"1"}
</div>
<div className="mem-stat-label">
{"1-7 Days"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-orange" href="/report/pt_gx_expiring?m_type=15days&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="4" width="18" height="18" rx="2" ry="2">

</rect>
<line x1="16" y1="2" x2="16" y2="6">

</line>
<line x1="8" y1="2" x2="8" y2="6">

</line>
<line x1="3" y1="10" x2="21" y2="10">

</line>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"3"}
</div>
<div className="mem-stat-label">
{"1-15 Days"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-red" href="/report/pt_gx_expiring?m_type=expired&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10">

</circle>
<line x1="12" y1="8" x2="12" y2="12">

</line>
<line x1="12" y1="16" x2="12.01" y2="16">

</line>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"24"}
</div>
<div className="mem-stat-label">
{"Expired"}
</div>
</div>
</AppLink>
</div>
</div>
</div>
<div className="row">
<div id="sms_charge">

</div>
<div className="col-md-12">
<div className="panel panel-default member-report-card">
<Field type="hidden" id="new_date_e" name="date_datepicker" as="input" />
<div className="panel-body">
<div className="member-report-toolbar">
{"Expiring PT/Groupx — All Members "}
<div >

</div>
<div className="member-filter-bar">
<div className="uniform-filter-field"><label htmlFor="type">Search field</label><Field name="type" id="type" as="select">
<option value="name">
{"Name"}
</option>
<option value="mem_id">
{"Membership id"}
</option>
<option value="train_name">
{"Trainer Name"}
</option>
<option value="mobile">
{"Mobile Number"}
</option>
<option value="gender">
{"Gender"}
</option>
</Field></div>
</div>
</div>
<div className="member-table-wrap">
<div id="new_div">
<DataTable tableKey="report/pt_gx_expiring:table-0" columns={["#","Image","Plan Name","Start Date","Expiry Date","Name","Trainer Name","Amount","log By","Action"]} className="table table-striped table-bordered" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>









<Modal className="modal fade" id="myModalpt" role="dialog">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<ActionButton type="button" className="close" data-dismiss="modal" aria-hidden="true">
{"×"}
</ActionButton>
<center >
<h3 >
{"Update Pt Member"}
</h3>
</center>
<table width="200" border="" className="table table-striped" cellPadding="50" cellSpacing="50">
<tbody >
<tr >
<td width="200">
<span className="style2">
{"PT Member Name "}
</span>
</td>
<td >
<LocalForm  formKey="form-1">
<Field type="hidden" id="add_onid" name="add_onid" as="input" />
<Field className="form-control" name="trainer_id" id="trainer_id" as="select">
<option value="">
{"Select Trainer Name"}
</option>
<option value="10097">
{"HGMS Trainer"}
</option>
<option value="10098">
{"New trainer"}
</option>
</Field>
<br  />
<ActionButton className="btn btn-success" type="submit" name="pt_update" value="pt_update">
{"Submit"}
</ActionButton>
</LocalForm>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</Modal>



<Modal className="modal fade" id="enrollModal" tabIndex="-1" role="dialog">
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<ActionButton type="button" className="close" data-dismiss="modal" aria-hidden="true">
{"×"}
</ActionButton>
<h5 className="modal-title">
<AppIcon className="glyphicon glyphicon-cloud-upload" />
{"Remote Enroll & Sync "}
</h5>
<div id="enrollModalSubtitle" className="">

</div>
</div>
<div className="modal-body">
<LocalForm id="enrollForm" formKey="enrollForm">
<Field type="hidden" name="orgId" id="enroll_orgId" as="input" />
<Field type="hidden" name="enroll_type" id="enrollType" as="input" />
<div className="row">
<div className="col-sm-5">
<div className="form-group">
<label className="" htmlFor="enroll_userid">
{"Member ID"}
</label>
<Field type="text" className="form-control" name="userid" id="enroll_userid" readOnly={true} as="input" />
</div>
</div>
<div className="col-sm-7">
<div className="form-group">
<label className="" htmlFor="enroll_username">
{"Member Name"}
</label>
<Field type="text" className="form-control" name="username" id="enroll_username" readOnly={true} as="input" />
</div>
</div>
</div>
<div className="row">
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_fromdate">
{"From Date"}
</label>
<Field type="date" className="form-control" name="fromdate" id="enroll_fromdate" readOnly={true} as="input" />
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_todate">
{"Expiry Date"}
</label>
<Field type="date" className="form-control" name="todate" id="enroll_todate" readOnly={true} as="input" />
</div>
</div>
</div>
<div id="enroll_cardpwd_wrap" className="hidden">
<div className="row">
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_cardno">
{"Card Number"}
</label>
<Field type="text" className="form-control" name="cardno" id="enroll_cardno" placeholder="Optional" as="input" />
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_password">
{"Password"}
</label>
<Field type="number" className="form-control" name="password" id="enroll_password" placeholder="Optional (numeric)" as="input" />
</div>
</div>
</div>
</div>
<div id="enroll_ai_section" className="hidden">
<div className="">
<AppIcon className="glyphicon glyphicon-lock" />
{"AI Access Control "}
</div>
<div className="row">
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_ai_group">
{"Device Group"}
</label>
<Field className="form-control" name="ai_group_id" id="enroll_ai_group" as="select">
<option value="">
{"Loading..."}
</option>
</Field>
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<label className="" htmlFor="enroll_weekzone">
{"Weekzone"}
</label>
<Field className="form-control" name="weekzone" id="enroll_weekzone" as="select">
<option value="0">
{"No Restriction"}
</option>
</Field>
</div>
</div>
</div>
</div>
</LocalForm>
<div id="responseBox" className="hidden">

</div>
</div>
<div className="modal-footer">
<div className="">
<div className="">
<span className="">
{"Enroll via:"}
</span>
<ActionButton type="button" className="btn btn-success btn-sm" behavior="submitEnroll('face')">
<AppIcon className="fa fa-user" />
{" Face "}
</ActionButton>
<ActionButton type="button" className="btn btn-warning btn-sm" behavior="submitEnroll('finger')">
<AppIcon className="glyphicon glyphicon-hand-up" />
{" Finger "}
</ActionButton>
<ActionButton type="button" className="btn btn-default btn-sm" id="enroll_btn_card" behavior="submitEnroll('card')">
<AppIcon className="glyphicon glyphicon-credit-card" />
{" Card "}
</ActionButton>
<ActionButton type="button" className="btn btn-primary btn-sm" behavior="submitEnroll('cardpwd')">
<AppIcon className="glyphicon glyphicon-lock" />
{" Card / Password "}
</ActionButton>
<ActionButton type="button" className="btn btn-link btn-sm" data-dismiss="modal">
{"Cancel"}
</ActionButton>
</div>
</div>
</div>
</div>
</div>
</Modal>

</>;
}
