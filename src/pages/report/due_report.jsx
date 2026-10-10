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
{" Due Amount Gym Members"}
</li>
</ol>
<div className="row">
<div className="col-sm-12">
<div className="due-shell">
<div className="due-hero">
<div className="due-hero-top">
<div >
<h1 className="due-title">
{"Due Amount Gym Members"}
</h1>
<p className="due-subtitle">
{"Track outstanding dues, set due dates and reminders, and follow up with members."}
</p>
</div>
<div className="">
<div className="due-badge">
<AppIcon className="fa fa-filter" />
<span >
{"All Dues"}
</span>
</div>
<div className="due-gym-group">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_due_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_due_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/due_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/due_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/due_report?org_id=2" className="gym-switcher-item">
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
<div className="due-tabs" role="tablist">
<AppLink href="/report/due_report?org_id=1" role="tab" aria-selected="true" className="due-tab active">
<AppIcon className="fa fa-list" />
{" Open Dues"}
</AppLink>
<AppLink href="/report/due_report?view=settled&org_id=1" role="tab" aria-selected="false" className="due-tab">
<AppIcon className="fa fa-check-circle" />
{" Settled"}
</AppLink>
</div>
<div className="due-stats">
<div className="due-stat amount">
<div className="label">
{"Total Due"}
</div>
<div className="value">
{"₹ 384,628.00"}
</div>
<div className="help">
{"Outstanding balance across the filtered rows"}
</div>
</div>
<div className="due-stat count">
<div className="label">
{"Due Entries"}
</div>
<div className="value">
{"98"}
</div>
<div className="help">
{"Unpaid invoices in the filtered rows"}
</div>
</div>
<div className="due-stat overdue">
<div className="label">
{"Overdue"}
</div>
<div className="value">
{"₹ 12,398.00"}
</div>
<div className="help">
{"8 invoice(s) past their due date"}
</div>
</div>
</div>
<div className="due-chips">
<AppLink href="/report/due_report?org_id=1" className="due-chip active">
{"All Dues"}
</AppLink>
<AppLink href="/report/due_report?period=overdue&org_id=1" className="due-chip overdue">
{"Overdue"}
</AppLink>
<AppLink href="/report/due_report?period=today&org_id=1" className="due-chip">
{"Due Today"}
</AppLink>
<AppLink href="/report/due_report?period=7days&org_id=1" className="due-chip">
{"Next 7 Days"}
</AppLink>
<AppLink href="/report/due_report?period=month&org_id=1" className="due-chip">
{"This Month"}
</AppLink>
<AppLink href="/report/due_report?period=year&org_id=1" className="due-chip">
{"This Year"}
</AppLink>
</div>
<LocalForm className="due-filter" formKey="form-1">
<div >
<label htmlFor="due_date_by">
{"Filter By"}
</label>
<Field name="date_by" id="due_date_by" className="form-control" defaultValue="due" as="select">
<option value="due">
{"Due Date"}
</option>
<option value="invoice">
{"Invoice Date"}
</option>
</Field>
</div>
<div >
<label >
{"Report Type"}
</label>
<div className="">
<label className="radio-inline">
<Field name="rep_type" required={true} id="due_rep_type" defaultValue="date" type="radio" as="input" />
{" Report By Date "}
</label>
<label className="radio-inline">
<Field name="rep_type" required={true} id="due_rep_type1" defaultValue="range" type="radio" as="input" />
{" Report By Date Range "}
</label>
</div>
</div>
<div id="due_tday" className="hidden">
<label htmlFor="due_start_date1">
{"Date"}
</label>
<div className="input-group">
<Field type="date" className="form-control" name="dd" id="due_start_date1" defaultValue="" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div id="due_tday2" className="hidden">
<label >
{"From / To"}
</label>
<div className="">
<div className="input-group">
<Field type="date" className="form-control" name="dd1" defaultValue="" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="input-group">
<Field type="date" className="form-control" name="dd2" defaultValue="" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
</div>
<div className="due-filter-actions">
<Field type="hidden" name="org_id" className="form-control" defaultValue="1" as="input" />
<ActionButton type="submit" className="btn btn-primary">
{"Apply filters"}
</ActionButton>
<AppLink className="btn btn-success" role="link" href="/local/export_duereminder?org_id=1">
<AppIcon className="fa fa-download" />
{" CSV "}
</AppLink>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default due-card">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Due Amount Gym Members "}
</div>
<div className="panel-body">
<div className="due-table-toolbar">
<div className="type-wrap report-filter-field">
<label htmlFor="type">Search field</label>
<Field name="type" id="type" as="select">
<option value="">
{"All"}
</option>
<option value="mem_id">
{" Prefix"}
</option>
<option value="inv_number">
{"Invoice Number"}
</option>
<option value="plan_name">
{"Plan Name"}
</option>
</Field>
</div>
</div>
<div id="new_div">
<DataTable tableKey="report/due_report:table-0" columns={["Membership No","Name","Contact No","Invoice NO","Invoice Date","Plan Name","Due Amount","Due Date","Status","Last Thread","Action"]} className="table table-striped table-bordered" />
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
