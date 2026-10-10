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
{" Plan Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Plan Report "}
</h1>
<b className="text-success">
{"All plans and all dates"}
</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_plan_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_plan_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/plan_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/plan_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/plan_report?org_id=2" className="gym-switcher-item">
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
<div className="plan-report-shell">
<LocalForm className="plan-filter-card" id="plan_report_filter_form" formKey="plan_report_filter_form">
<div className="plan-filter-top">
<div >
<h2 className="plan-filter-title">
{"Plan Report"}
</h2>
<p className="plan-filter-note">
{"Filter the report by a single date, date range, and plan name."}
</p>
</div>
<div className="plan-filter-badge">
<AppIcon className="fa fa-filter" />
<span >
{"All plans and all dates"}
</span>
</div>
</div>
<div className="plan-filter-modes">
<label className="plan-filter-mode">
<Field type="radio" name="rep_type" defaultValue="all" defaultChecked={true} as="input" />
{" All Dates "}
</label>
<label className="plan-filter-mode">
<Field type="radio" name="rep_type" defaultValue="date" as="input" />
{" Report By Date "}
</label>
<label className="plan-filter-mode">
<Field type="radio" name="rep_type" defaultValue="range" as="input" />
{" Report By Date Range "}
</label>
</div>
<div className="plan-filter-grid">
<div className="plan-filter-group plan-filter-date-single hidden">
<label htmlFor="dd">
{"Report By Date"}
</label>
<Field type="date" className="form-control" name="dd" id="dd" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="plan-filter-group plan-filter-date-range hidden">
<label htmlFor="dd1">
{"From Date"}
</label>
<Field type="date" className="form-control" name="dd1" id="dd1" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="plan-filter-group plan-filter-date-range hidden">
<label htmlFor="dd2">
{"To Date"}
</label>
<Field type="date" className="form-control" name="dd2" id="dd2" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="plan-filter-group">
<label htmlFor="plan">
{"Plan Name"}
</label>
<Field name="plan" id="plan" className="form-control" as="select">
<option value="">
{"All Plans"}
</option>
<option value="76">
{" 1 Month plan "}
</option>
<option value="88">
{" 3 month plan "}
</option>
<option value="67">
{" 3 month plan . "}
</option>
<option value="66">
{" 6 month "}
</option>
<option value="79">
{" 6 month plan "}
</option>
<option value="87">
{" Daily Plan "}
</option>
<option value="86">
{" Fast Monthly "}
</option>
<option value="62">
{" Happy Hours "}
</option>
<option value="78">
{" PT 6 Moths Advance "}
</option>
<option value="47">
{" PT Plan 2 month "}
</option>
<option value="74">
{" PT Plan 3 Month "}
</option>
<option value="77">
{" PT Plan 6 MOthn "}
</option>
<option value="64">
{" PT Plan monthly "}
</option>
<option value="84">
{" Quaterly plan "}
</option>
<option value="82">
{" Special Month Plan "}
</option>
<option value="93">
{" test 1 month "}
</option>
<option value="85">
{" Test Month 3 "}
</option>
<option value="92">
{" test plan monthly "}
</option>
<option value="94">
{" weekly plan "}
</option>
<option value="73">
{" Yearly "}
</option>
</Field>
</div>
<div className="plan-filter-actions">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<ActionButton type="submit" className="btn btn-primary">
{"Apply filters"}
</ActionButton>
<AppLink href="/report/plan_report?org_id=1" className="btn btn-default">
{"VIEW ALL"}
</AppLink>
</div>
</div>
</LocalForm>
<div className="panel panel-default plan-report-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Plan Report"}
</div>
<div className="panel-body">
<div className="plan-summary-grid">
<div className="plan-summary-card plans">
<h4 >
{"Plans"}
</h4>
<div className="plan-summary-value">
{"20"}
</div>
<div className="plan-summary-help">
{"Plans included in the current view"}
</div>
</div>
<div className="plan-summary-card members">
<h4 >
{"Members"}
</h4>
<div className="plan-summary-value">
{"130"}
</div>
<div className="plan-summary-help">
{"Member payments counted for this selection"}
</div>
</div>
<div className="plan-summary-card collection">
<h4 >
{"Collection"}
</h4>
<div className="plan-summary-value">
{"597,734.00"}
</div>
<div className="plan-summary-help">
{"Total credited collection from the filtered plans"}
</div>
</div>
<div className="plan-summary-card due">
<h4 >
{"Due"}
</h4>
<div className="plan-summary-value">
{"292,829.00"}
</div>
<div className="plan-summary-help">
{"Outstanding due amount across the filtered plans"}
</div>
</div>
</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/plan_report:table-0" columns={["Sr No","Plan Name","Plan Type","Plan Details","Plan Duration","Plan Amount","Members","Collection","Due"]} className="table table-striped table-bordered table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
