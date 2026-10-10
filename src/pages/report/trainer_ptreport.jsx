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
{"Trainer Pt Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9">
<h1 >
{"Trainer Pt Report"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_trainer_ptreport_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_trainer_ptreport_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/trainer_ptreport?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/trainer_ptreport?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/trainer_ptreport?org_id=2" className="gym-switcher-item">
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
<div className="ptr-shell">
<LocalForm className="ptr-filter-card" id="ptr_filter_form" formKey="ptr_filter_form">
<div className="ptr-filter-top">
<div >
<h2 className="ptr-filter-title">
{"Trainer Pt Report"}
</h2>
<p className="ptr-filter-note">
{"Filter by trainer and date to view PT members."}
</p>
</div>
<div className="ptr-filter-badge">
<AppIcon className="fa fa-user" />
<span id="ptr_badge_label">
{"HGMS Trainer"}
</span>
</div>
</div>
<div className="ptr-filter-modes">
<label className="ptr-filter-mode">
<Field type="radio" name="rep_type" defaultValue="all" as="input" />
{" All Dates "}
</label>
<label className="ptr-filter-mode">
<Field type="radio" name="rep_type" defaultValue="date" as="input" />
{" By Date "}
</label>
<label className="ptr-filter-mode">
<Field type="radio" name="rep_type" defaultValue="range" defaultChecked={true} as="input" />
{" By Date Range "}
</label>
</div>
<div className="ptr-filter-grid">
<div className="ptr-filter-group">
<label htmlFor="trainer_id">
{"Trainer Name :"}
</label>
<Field id="trainer_id" name="trainer_id" className="form-control search-select" defaultValue="10097" as="select">
<option value="">
{"Select Your Trainer Name"}
</option>
<option value="10097">
{" HGMS Trainer (10097) "}
</option>
<option value="10098">
{" New trainer (10098) "}
</option>
</Field>
</div>
<div className="ptr-filter-group ptr-date-single hidden">
<label htmlFor="dd">
{"Date"}
</label>
<Field type="date" className="form-control" name="dd" id="dd" defaultValue="" as="input" />
</div>
<div className="ptr-filter-group ptr-date-range">
<label htmlFor="dd1">
{"From Date"}
</label>
<Field type="date" className="form-control" name="dd1" id="dd1" defaultValue="2026-10-01" as="input" />
</div>
<div className="ptr-filter-group ptr-date-range">
<label htmlFor="dd2">
{"To Date"}
</label>
<Field type="date" className="form-control" name="dd2" id="dd2" defaultValue="2026-10-31" as="input" />
</div>
<div className="ptr-filter-actions">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<ActionButton type="submit" className="btn btn-primary">
{"Submit"}
</ActionButton>
</div>
</div>
</LocalForm>
<div className="panel panel-default ptr-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Trainer Pt Report "}
</div>
<div className="panel-body">
<div className="ptr-summary-grid">
<div className="ptr-summary-card live">
<h4 >
{"Live Subscriptions"}
</h4>
<div className="value">
{"0"}
</div>
<div className="help">
{"Currently active PT subscriptions"}
</div>
</div>
<div className="ptr-summary-card expired">
<h4 >
{"Expired Subscriptions"}
</h4>
<div className="value">
{"0"}
</div>
<div className="help">
{"PT subscriptions already expired"}
</div>
</div>
<div className="ptr-summary-card plans">
<h4 >
{"Distinct Plans"}
</h4>
<div className="value">
{"0"}
</div>
<div className="help">
{"Unique plans across all members"}
</div>
</div>
<div className="ptr-summary-card accounting">
<h4 >
{"Accounting"}
</h4>
<div className="value">
{"0.00"}
</div>
<div className="help">
{"Paid: 0.00 | Due: 0.00"}
</div>
</div>
</div>
<div className="ptr-section-title live">
<AppIcon className="fa fa-check-circle" />
{" Live Subscriptions (0)"}
</div>
<p className="text-muted">
{"None"}
</p>
<div className="ptr-section-title expired">
<AppIcon className="fa fa-times-circle" />
{" Expired Subscriptions (0)"}
</div>
<p className="text-muted">
{"None"}
</p>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
