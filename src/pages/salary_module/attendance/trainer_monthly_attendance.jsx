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
<div className="row">
<div className="col-md-12">
<div className="col-md-3">
<h1 >
{" Attendance Report"}
</h1>
</div>
<div className="col-md-1">
<LocalForm id="myform" formKey="myform">
<Field name="mm" id="mm" className="form-control" defaultValue="10" as="select">
<option value="">
{"MM"}
</option>
<option value="01">
{"1"}
</option>
<option value="02">
{"2"}
</option>
<option value="03">
{"3"}
</option>
<option value="04">
{"4"}
</option>
<option value="05">
{"5"}
</option>
<option value="06">
{"6"}
</option>
<option value="07">
{"7"}
</option>
<option value="08">
{"8"}
</option>
<option value="09">
{"9"}
</option>
<option value="10">
{"10"}
</option>
<option value="11">
{"11"}
</option>
<option value="12">
{"12"}
</option>
</Field>
</LocalForm>
</div>
<div className="col-md-2">
<Field type="text" placeholder="YYYY" id="yyyy" name="yyyy" className="form-control" defaultValue="2026" as="input" />
</div>
<div className="col-md-3">
<ActionButton type="submit" className="btn btn-warning">
{"Submit"}
</ActionButton>
</div>
<div className="col-md-3">
<b className="text-success">

</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_trainer_monthly_attendance_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_trainer_monthly_attendance_php" tabIndex="-1" role="dialog">
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
<AppLink href="/salary_module/attendance/trainer_monthly_attendance?org_id=all" className="gym-switcher-item">
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
<AppLink href="/salary_module/attendance/trainer_monthly_attendance?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/salary_module/attendance/trainer_monthly_attendance?org_id=2" className="gym-switcher-item">
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
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="salary_module/attendance/trainer_monthly_attendance:table-0" columns={["id","Type","Name","Present","Absent","Half Day","Holiday","View Log"]} className="table table-striped table-bordered table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
