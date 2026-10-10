import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container">
<div className="ba-hero">
<div className="ba-hero-row">
<div >
<h1 className="ba-title">
{"Add Member Attendance"}
</h1>
<p className="ba-subtitle">
{"Mark attendance for a member with a date and present/absent status."}
</p>
<div className="ba-note">
<AppIcon className="fa fa-calendar" />
{" 09 Oct 2026"}
</div>
</div>
<div className="ba-hero-actions">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_bulk_attendance_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_bulk_attendance_php" tabIndex="-1" role="dialog">
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
<AppLink href="/attendance/bulk_attendance?org_id=all" className="gym-switcher-item">
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
<AppLink href="/attendance/bulk_attendance?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/attendance/bulk_attendance?org_id=2" className="gym-switcher-item">
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
<div className="row">
<div className="row">
<div className="col-md-12">
<div className="panel panel-default ba-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Add Member Attendance "}
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<div className="ba-form-card">
<div className="row">
<div className="col-md-6 ba-field">
<label className="control-label" htmlFor="label-attendance-bulk-attendance-jsx-1">
{" Date (* Change date if you want to add old days attendance) "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" defaultValue="2026-10-09" className="form-control date-picker" name="date" as="input"  id="label-attendance-bulk-attendance-jsx-1"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="ba-help">

</div>
</div>
</div>
<div className="row">
<div className="col-md-6 ba-field">
<label className="control-label" htmlFor="member_id">
{" Member Name : "}
</label>
<Field id="member_id" name="userid" className="form-control search-select" required={true} as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
</div>
</div>
<div className="row">
<div className="col-md-6 ba-field">
<label className="control-label">
{"Attendance"}
</label>
<div className="ba-switch-wrap">
<div className="make-switch" data-on="success" data-off="warning">
<Field type="checkbox" defaultChecked={true} defaultValue="1" name="attendance" as="input" />
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12 ba-field">
<ActionButton type="submit" className="btn btn-success ba-submit">
{"Submit"}
</ActionButton>
</div>
</div>
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
