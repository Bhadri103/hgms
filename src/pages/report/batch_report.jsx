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
{" Batch Report"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_batch_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_batch_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/batch_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/batch_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/batch_report?org_id=2" className="gym-switcher-item">
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
<div className="batch-report-shell">
<div className="batch-filter-card">
<div className="batch-filter-top">
<div >
<h2 className="batch-filter-title">
{"Batch Report"}
</h2>
<p className="batch-filter-note">
{"Select a batch to view members, seat usage, and attendance actions."}
</p>
</div>
<div className="batch-filter-badge">
<AppIcon className="fa fa-users" />
<span id="selected_batch_label">
{"Batch Selected"}
</span>
</div>
</div>
<div className="batch-filter-grid">
<div className="batch-filter-group">
<label htmlFor="batch_id">
{"Batch Name :"}
</label>
<Field id="batch_id" name="batch_id" className="form-control search-select" required={true} defaultValue="23" as="select">
<option value="">
{"Select Your Batch"}
</option>
<option value="23">
{"6 am - offline"}
</option>
<option value="24">
{"6 am - online"}
</option>
<option value="31">
{"afternoon batch"}
</option>
<option value="25">
{"evening batch"}
</option>
<option value="29">
{"Guitar"}
</option>
<option value="30">
{"gym 2"}
</option>
<option value="27">
{"new batch"}
</option>
<option value="26">
{"Today"}
</option>
</Field>
</div>
<div className="batch-filter-actions">
<AppLink href="/report/batch_report?org_id=1" className="btn btn-default">
{"View All"}
</AppLink>
</div>
</div>
</div>
<div className="panel panel-default batch-report-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Batch Report "}
</div>
<div className="panel-body">
<div id="pt_report_data"><DataTable tableKey="report/batch_report:table-0" columns={["Membership No","Name","Batch","Plan Name","Mobile","Start Date","Expiry Date","Status"]}/></div>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
