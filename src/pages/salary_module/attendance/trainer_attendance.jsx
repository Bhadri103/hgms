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
{" Add Trainer/Staff Attendance "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add Trainer/Staff Attendance "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_trainer_attendance_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_trainer_attendance_php" tabIndex="-1" role="dialog">
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
<AppLink href="/salary_module/attendance/trainer_attendance?org_id=all" className="gym-switcher-item">
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
<AppLink href="/salary_module/attendance/trainer_attendance?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/salary_module/attendance/trainer_attendance?org_id=2" className="gym-switcher-item">
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
{" Add Attendance "}
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<div className="row">
<div className="form-group col-md-4">
<div className="form-group">
<label className="control-label" htmlFor="label-salary-module-attendance-trainer-attendance-jsx-1">
{" Date (* Change date if you want to add old days attendance) "}
<span className="">

</span>
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" defaultValue="2026-10-09" className="form-control date-picker" name="date" as="input"  id="label-salary-module-attendance-trainer-attendance-jsx-1"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
</div>
</div>
<div className="row">
<div className="form-group col-md-4">
<label className="control-label" htmlFor="member_id">
{" Staff Name : "}
</label>
<Field id="member_id" name="userid" className="form-control search-select" required={true} as="select">
<option value="">
{"Select Your Name"}
</option>
<option value="10001">
{"Sanjay(10001-7240361235)"}
</option>
<option value="10084">
{"HGMS DEMO(10084-7885745821)"}
</option>
<option value="10087">
{"testing permission(10087-9649011021)"}
</option>
<option value="10091">
{"sfsdf(10091-sdfsdf)"}
</option>
<option value="10097">
{"HGMS Trainer(10097-7240361235)"}
</option>
<option value="10098">
{"New trainer(10098-9649011021)"}
</option>
</Field>
</div>
</div>
<div className="form-group">
<p className="">
{" Attendance"}
<span className="symbol required">

</span>
</p>
<label className="radio-inline">
<Field type="radio" name="attend" defaultChecked={true} className="grey" defaultValue="present" required={true} as="input" />
{" Present "}
</label>
<label className="radio-inline">
<Field type="radio" name="attend" className="grey" defaultValue="absent" required={true} as="input" />
{" Absent "}
</label>
<label className="radio-inline">
<Field type="radio" name="attend" className="grey" defaultValue="holiday" required={true} as="input" />
{" Holiday "}
</label>
<label className="radio-inline">
<Field type="radio" name="attend" className="grey" defaultValue="half day" required={true} as="input" />
{" Half day "}
</label>
</div>
<ActionButton type="submit" className="btn btn-success">
{"Submit"}
</ActionButton>
</LocalForm>
</div>
</div>
</div>
</div>
</div>



</>;
}
