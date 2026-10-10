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
{" Today Events"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{" Today Events "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_today_event_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_today_event_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/today_event?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/today_event?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/today_event?org_id=2" className="gym-switcher-item">
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
{" Today Events"}
</div>
<div className="panel-body">
<div className="today-event-shell">
<div className="today-filter-card">
<div className="today-filter-head">
<div className="today-filter-title">
<AppIcon className="fa fa-birthday-cake" />
{"Today Events Filters"}
</div>
<div className="today-actions">
<ActionButton type="button" id="today_event_today" className="btn btn-default">
{"Today"}
</ActionButton>
<ActionButton type="button" id="today_event_apply" className="btn btn-primary">
{"Apply"}
</ActionButton>
</div>
</div>
<div className="today-mode-row">
<label >
<Field type="radio" name="event_mode" id="event_mode_date" defaultValue="date" defaultChecked={true} as="input" />
{" Date"}
</label>
<label >
<Field type="radio" name="event_mode" defaultValue="range" as="input" />
{" Date Range"}
</label>
</div>
<div className="today-filter-grid">
<div className="today-filter-field">
<label  htmlFor="type">
{"Search Type"}
</label>
<Field name="type" className="form-control" id="type" as="select">
<option value="">
{"All"}
</option>
<option value="mem_id">
{" Prefix"}
</option>
<option value="name">
{"Name"}
</option>
</Field>
</div>
<div className="today-date-panel is-active" id="event_date_single">
<div className="today-filter-field">
<label  htmlFor="event_dd">
{"Date"}
</label>
<Field type="date" className="form-control" id="event_dd" defaultValue="2026-10-09" as="input" />
</div>
</div>
<div className="today-date-panel" id="event_date_range">
<div className="today-filter-grid">
<div className="today-filter-field">
<label  htmlFor="event_dd1">
{"From Date"}
</label>
<Field type="date" className="form-control" id="event_dd1" defaultValue="" as="input" />
</div>
<div className="today-filter-field">
<label  htmlFor="event_dd2">
{"To Date"}
</label>
<Field type="date" className="form-control" id="event_dd2" defaultValue="" as="input" />
</div>
</div>
</div>
</div>
</div>
<DataTable tableKey="report/today_event:table-0" columns={["Membership No","Name","Contact No","Address","DOB","Marriage Anniversary"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
