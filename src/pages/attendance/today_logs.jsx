import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container tl-shell">
<div className="row">
<div className="col-sm-12">
<div className="tl-hero">
<div className="tl-top">
<div >
<h1 className="tl-title">
{"Today Attendance Logs"}
</h1>
<p className="tl-subtitle">
{"Monitor membership expiry and today's attendance activity."}
</p>
<div className="tl-summary">
<div className="tl-pill member">
{"Member Checked In "}
<span className="count">
{"0"}
</span>
</div>
<AppLink className="tl-pill-link" role="link" href="/local/trainer_today_logs?org_id=1">
<div className="tl-pill staff">
{"Staff Checked In "}
<span className="count">
{"0"}
</span>
</div>
</AppLink>
</div>
</div>
<div className="tl-top-right">
<div className="tl-gym-switcher">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_today_logs_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_today_logs_php" tabIndex="-1" role="dialog">
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
<AppLink href="/attendance/today_logs?org_id=all" className="gym-switcher-item">
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
<AppLink href="/attendance/today_logs?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/attendance/today_logs?org_id=2" className="gym-switcher-item">
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
<div className="tl-badge">
<AppIcon className="fa fa-calendar" />
{" 09 Oct 2026"}
</div>
</div>
</div>
<div className="tl-breakdown">
<p className="tl-breakdown-title">
{"Membership status among today's checked-in members"}
</p>
<div className="tl-grid">
<div className="tl-card breakdown-live">
<div className="label">
{"Live Membership"}
</div>
<div className="value">
{"0"}
</div>
<div className="help">
{"Checked-in members with 4+ days remaining"}
</div>
</div>
<div className="tl-card breakdown-expired">
<div className="label">
{"Expired Memberships"}
</div>
<div className="value">
{"0"}
</div>
<div className="help">
{"Checked-in members already expired"}
</div>
</div>
<div className="tl-card breakdown-today">
<div className="label">
{"Expiring Today"}
</div>
<div className="value">
{"0"}
</div>
<div className="help">
{"Membership ends on today's date"}
</div>
</div>
<div className="tl-card breakdown-soon">
<div className="label">
{"Expiring in 1-3 Days"}
</div>
<div className="value">
{"0"}
</div>
<div className="help">
{"Checked-in members nearing expiry"}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default tl-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" View Today Attendance "}
</div>
<div className="container">

</div>
<div className="panel-body">
<DataTable tableKey="attendance/today_logs:table-0" columns={["Date","ID","Image","Name","Expiry Date","Contact No","In Time","Out Time","All Logs","Device ID","Due Amount","Status"]} className="table table-striped table-bordered nowrap" />
</div>
</div>
</div>
</div>
</div>

</>;
}
