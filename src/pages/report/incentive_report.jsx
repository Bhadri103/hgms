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

</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{" Incentive Report "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_incentive_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_incentive_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/incentive_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/incentive_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/incentive_report?org_id=2" className="gym-switcher-item">
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
{" Incentive Report "}
</div>
<div className="panel-body">
<div className="incentive-shell">
<div className="incentive-filter-card">
<div className="incentive-filter-head">
<div >
<div className="incentive-filter-title">
<AppIcon className="fa fa-money" />
{"Incentive Report Filters"}
</div>
<div className="incentive-filter-note">
{"Default period is the current month. Select a user to load the report."}
</div>
</div>
</div>
<div className="incentive-mode-row" id="date_fields">
<label >
<Field name="rep_type" required={true} id="rep_type" defaultValue="date" type="radio" as="input" />
{" Report By Date"}
</label>
<label >
<Field name="rep_type" required={true} id="rep_type1" defaultValue="range" type="radio" defaultChecked={true} as="input" />
{" Report By Date Range"}
</label>
</div>
<div className="incentive-filter-grid">
<div className="incentive-field">
<label  htmlFor="admin_id">
{"User :"}
</label>
<Field id="admin_id" name="admin_id" className="form-control search-select" required={true} defaultValue="10001" as="select">
<option value="">
{"Select Your User"}
</option>
<option value="10001">
{"Sanjay (7240361235-admin@gayatrisoft.co)"}
</option>
<option value="10084">
{"HGMS DEMO (7885745821-abcd@gmail..com)"}
</option>
<option value="10087">
{"testing permission (9649011021-testing@gmail.com)"}
</option>
<option value="10091">
{"sfsdf (sdfsdf-admin@gmail.com)"}
</option>
<option value="10097">
{"HGMS Trainer (7240361235-support@gayatrisoft.co)"}
</option>
<option value="10098">
{"New trainer (9649011021-)"}
</option>
</Field>
</div>
<div className="incentive-date-panel" id="tday">
<div className="incentive-filter-grid">
<div className="incentive-field">
<label  htmlFor="dd">
{"Report By Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd" id="dd" defaultValue="" autoComplete="off" as="input" />
</div>
<div className="incentive-actions">
<ActionButton type="button" id="incentive_prev_day" className="btn btn-default">
<AppIcon className="fa fa-angle-left" />
{" Back"}
</ActionButton>
<Field type="button" defaultValue="Apply Report" className="btn btn-primary" as="input" behavior="PT_ReportDataView()" />
<ActionButton type="button" id="incentive_next_day" className="btn btn-default">
{"Next "}
<AppIcon className="fa fa-angle-right" />
</ActionButton>
</div>
</div>
</div>
<div className="incentive-date-panel is-active" id="tday2">
<div className="incentive-filter-grid">
<div className="incentive-field">
<label  htmlFor="dd1">
{"From Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd1" id="dd1" defaultValue="2026-10-01" autoComplete="off" as="input" />
</div>
<div className="incentive-field">
<label  htmlFor="dd2">
{"To Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="dd2" id="dd2" defaultValue="2026-10-31" autoComplete="off" as="input" />
</div>
</div>
</div>
<div className="incentive-actions">
<ActionButton type="button" id="incentive_current_month" className="btn btn-default">
{"Current Month"}
</ActionButton>
</div>
</div>
</div>
<div id="pt_report_data">
<div className="loader-note">
{"Select a user or apply filters to load incentive data."}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
