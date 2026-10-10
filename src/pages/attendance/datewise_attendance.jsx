import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container dwa-shell">
<div className="row">
<div className="col-sm-12">
<div className="dwa-hero">
<div className="dwa-top">
<div >
<h1 className="dwa-title">
{"View 9 Oct 2026 Attendance"}
</h1>
<p className="dwa-subtitle">
{"Review a specific day and sync the device logs from this screen."}
</p>
<div className="dwa-summary">
<AppLink className="dwa-pill-link" href="/attendance/today_logs?org_id=1">
<div className="dwa-pill member">
{"Member Checked In "}
<span className="count">
{"0"}
</span>
</div>
</AppLink>
<div className="dwa-pill staff">
<span className="count">
{"0"}
</span>
</div>
</div>
</div>
<div className="dwa-top-right">
<div className="dwa-gym-switcher">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_datewise_attendance_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_datewise_attendance_php" tabIndex="-1" role="dialog">
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
<AppLink href="/attendance/datewise_attendance?org_id=all&dd=2026-10-09" className="gym-switcher-item">
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
<AppLink href="/attendance/datewise_attendance?org_id=1&dd=2026-10-09" className="gym-switcher-item is-active">
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
<AppLink href="/attendance/datewise_attendance?org_id=2&dd=2026-10-09" className="gym-switcher-item">
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
<div className="dwa-badge">
<AppIcon className="fa fa-calendar" />
{" 09 Oct 2026"}
</div>
</div>
</div>
<div className="dwa-filter">
<LocalForm id="myform" className="" formKey="myform">
<div className="input-group">
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="dd" id="ttday" autoComplete="off" defaultValue="2026-10-09" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<Field id="attendanceDeviceFilter" as="select">
<option value="">
{"All Devices"}
</option>
<option value="AYTC03019920">
{"AYTC03019920 (Ai Bio)"}
</option>
<option value="CGKK211663404">
{"CGKK211663404 (ESSL)"}
</option>
</Field>
<Field type="submit" className="btn btn-primary" id="submit3" defaultValue="Submit" as="input" />
<ActionButton type="button" className="btn btn-warning" id="toggleIllegalAccess" data-default-label="Illegal Access (0)">
{"Illegal Access (0)"}
</ActionButton>
<Field type="hidden" id="org_gym_id" name="org_id" className="form-control" defaultValue="1" as="input" />
</LocalForm>
<LocalForm className="" formKey="form-0">
<Field name="sync_device" className="form-control" required={true} as="select">
<option value="">
{"-- Select Machine --"}
</option>
<option value="AYTC03019920">
{"AYTC03019920"}
</option>
<option value="CGKK211663404">
{"CGKK211663404"}
</option>
</Field>
<ActionButton type="submit" className="btn btn-info">
{"Sync"}
</ActionButton>
</LocalForm>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default dwa-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" View Today Attendance "}
</div>
<div className="container">

</div>
<div className="panel-body">
<DataTable tableKey="attendance/datewise_attendance:table-0" columns={["Date","ID","Image","Name","Expiry Date","Contact No","In Time","Out Time","All Logs","Device ID","Due Amount","Status"]} className="table table-striped table-bordered nowrap" />

</div>
</div>
</div>
</div>
</div>

</>;
}
