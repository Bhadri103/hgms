import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container">
<div className="row">
<div className="col-sm-12">
<div className="staff-att-hero">
<div className="staff-att-hero-top">
<div >
<div className="staff-att-kicker">
{"Staff attendance"}
</div>
<h1 >
{"View Today Attendance"}
</h1>
<p >
{"Track staff check-ins, edit attendance, and review all logs for the selected day."}
</p>
</div>
<div className="staff-att-badges">
<AppLink href="/attendance/today_logs?org_id=1" className="staff-att-chip btn btn-success">
{" Member Checked In "}
<span className="count">

</span>
</AppLink>
<AppLink className="staff-att-chip btn btn-info" role="link" href="/local/trainer_today_logs?org_id=1">
{" Staff Checked In "}
<span className="count">

</span>
</AppLink>
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_staff_today_att_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_staff_today_att_php" tabIndex="-1" role="dialog">
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
<AppLink href="/salary_module/attendance/staff_today_att?org_id=all" className="gym-switcher-item">
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
<AppLink href="/salary_module/attendance/staff_today_att?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/salary_module/attendance/staff_today_att?org_id=2" className="gym-switcher-item">
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
<div className="staff-att-filter">
<LocalForm id="myform" className="staff-att-filter-row" formKey="myform">
<div className="input-group">
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="dd" id="ttday" autoComplete="off" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<Field type="hidden" id="org_gym_id" name="org_id" className="form-control" defaultValue="1" as="input" />
<Field type="submit" className="btn btn-primary" id="submit3" defaultValue="Submit" as="input" />
</LocalForm>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default staff-att-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
<span >
{"View Today Attendance"}
</span>
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="salary_module/attendance/staff_today_att:table-0" columns={["Id","Role","Name","Contact No","In Time","Out Time","All Logs","Status"]} className="table table-striped table-bordered table-hover table-full-width staff-att-table" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
