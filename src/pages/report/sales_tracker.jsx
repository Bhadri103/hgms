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
{" View Left Member"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Daily Sales Tracker Report "}
</h1>
<b className="text-success">
{"On Date: 9 Oct 2026"}
</b>
<AppLink href="/report/sales_tracker?date=2026-10-01&date1=2026-10-31&left=month&org_id=1" className="btn btn-teal">
{"VIEW ALL"}
</AppLink>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_sales_tracker_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_sales_tracker_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/sales_tracker?org_id=all&date=2026-10-09&left=date" className="gym-switcher-item">
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
<AppLink href="/report/sales_tracker?org_id=1&date=2026-10-09&left=date" className="gym-switcher-item is-active">
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
<AppLink href="/report/sales_tracker?org_id=2&date=2026-10-09&left=date" className="gym-switcher-item">
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
{" Sales Tracker Report"}
</div>
<div className="panel-body">
<div className="sales-tracker-shell">
<div className="sales-summary-grid">
<div className="sales-summary-card sales">
<h4 >
{"Sales"}
</h4>
<div className="summary-value">
{"0"}
</div>
<div className="summary-note">
{"Sales entries in the selected period"}
</div>
</div>
<div className="sales-summary-card inquiry">
<h4 >
{"Inquiry"}
</h4>
<div className="summary-value">
{"0"}
</div>
<div className="summary-note">
{"New inquiries logged for this selection"}
</div>
</div>
<div className="sales-summary-card ifollow">
<h4 >
{"Inquiry Followup"}
</h4>
<div className="summary-value">
{"0"}
</div>
<div className="summary-note">
{"Inquiry follow-up activities recorded"}
</div>
</div>
<div className="sales-summary-card mfollow">
<h4 >
{"Member Followup"}
</h4>
<div className="summary-value">
{"0"}
</div>
<div className="summary-note">
{"Member follow-up activities recorded"}
</div>
</div>
</div>
<div className="sales-filter-shell">
<div className="sales-filter-head">
<div >
<div className="sales-filter-title">
<AppIcon className="fa fa-filter" />
{"Sales Tracker Report Filters"}
</div>
<div className="sales-filter-note">
{"Active period: 9 Oct 2026"}
</div>
</div>
<div className="sales-period-nav">
<AppLink href="/report/sales_tracker?org_id=1&date=2026-10-08&left=" className="btn btn-default btn-sm">
<AppIcon className="fa fa-angle-left" />
{" Back"}
</AppLink>
<span className="sales-period-label">
<AppIcon className="fa fa-calendar" />
{" 9 Oct 2026"}
</span>
<AppLink href="/report/sales_tracker?org_id=1&date=2026-10-10&left=" className="btn btn-default btn-sm">
{"Next "}
<AppIcon className="fa fa-angle-right" />
</AppLink>
<AppLink href="/report/sales_tracker?date=2026-10-01&date1=2026-10-31&left=month&org_id=1" className="btn btn-primary btn-sm">
{"Current Month"}
</AppLink>
</div>
</div>
<div className="sales-filter-toggle">
<label >
<Field name="rep_type" id="rep_type" defaultValue="date" type="radio" defaultChecked={true} as="input" />
<span >
{"Report By Date"}
</span>
</label>
<label >
<Field name="rep_type" id="rep_type1" defaultValue="range" type="radio" as="input" />
<span >
{"Report By Date Range"}
</span>
</label>
</div>
<div className="sales-filter-panel is-active" id="tday">
<LocalForm className="sales-filter-form" formKey="form-1">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="sales-filter-field">
<label  htmlFor="report-field-report-sales-tracker-jsx-1">
{"Report By Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="date" defaultValue="2026-10-09" autoComplete="off" as="input"  id="report-field-report-sales-tracker-jsx-1"/>
</div>
<div className="sales-filter-actions">
<AppLink href="/report/sales_tracker?org_id=1&date=2026-10-08&left=" className="btn btn-default btn-sm">
<AppIcon className="fa fa-angle-left" />
{" Back"}
</AppLink>
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
<AppLink href="/report/sales_tracker?org_id=1&date=2026-10-10&left=" className="btn btn-default btn-sm">
{"Next "}
<AppIcon className="fa fa-angle-right" />
</AppLink>
</div>
</LocalForm>
</div>
<div className="sales-filter-panel" id="tday2">
<LocalForm className="sales-filter-form" formKey="form-2">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="sales-filter-field">
<label  htmlFor="label-report-sales-tracker-jsx-1">
{"From Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="date" defaultValue="2026-10-09" autoComplete="off" as="input"  id="label-report-sales-tracker-jsx-1"/>
</div>
<div className="sales-filter-field">
<label  htmlFor="label-report-sales-tracker-jsx-2">
{"To Date"}
</label>
<Field type="date" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control" name="date1" defaultValue="" autoComplete="off" as="input"  id="label-report-sales-tracker-jsx-2"/>
</div>
<div className="sales-filter-actions">
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
</div>
</div>
<div className="tabbable sales-board">
<ul id="myTab4" className="nav nav-tabs tab-padding tab-space-3 tab-blue">
<li className="active">
<AppLink href="#panel_tab_sales" data-toggle="tab">
{" Sales"}
<span className="sales-tab-count">
{"0"}
</span>
</AppLink>
</li>
<li >
<AppLink href="#panel_tab_inquiry" data-toggle="tab">
{" Inquiry"}
<span className="sales-tab-count">
{"0"}
</span>
</AppLink>
</li>
<li >
<AppLink href="#panel_tab_ifollowup" data-toggle="tab">
{" Inquiry Followup"}
<span className="sales-tab-count">
{"0"}
</span>
</AppLink>
</li>
<li >
<AppLink href="#panel_tab_mfollowup" data-toggle="tab">
{" Member Followup"}
<span className="sales-tab-count">
{"0"}
</span>
</AppLink>
</li>
</ul>
<div className="tab-content">
<TabPane className="tab-pane" id="panel_tab_inquiry" initialActive={false}>
<div className="tabbable tabs-left">
<ul id="myTab1" className="nav nav-tabs tab-bricky">
<li className="active">
<AppLink href="#panel_user_10001" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" Sanjay "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_user_10084" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS DEMO "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_user_10087" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" testing permission "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_user_10091" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" sfsdf "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_user_10097" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS Trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_user_10098" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" New trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
</ul>
<div className="tab-content">
<TabPane className="tab-pane active" id="panel_user_10001" initialActive={true}>
<DataTable tableKey="report/sales_tracker:table-0" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_user_10084" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-1" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_user_10087" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-2" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_user_10091" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-3" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_user_10097" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-4" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_user_10098" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-5" columns={["Log Date","Enquiry No.","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
</div>
</div>
</TabPane>
<TabPane className="tab-pane" id="panel_tab_ifollowup" initialActive={false}>
<div className="tabbable tabs-left">
<ul id="myTab1" className="nav nav-tabs tab-bricky">
<li className="active">
<AppLink href="#panel_followup_10001" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" Sanjay "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_followup_10084" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS DEMO "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_followup_10087" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" testing permission "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_followup_10091" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" sfsdf "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_followup_10097" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS Trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_followup_10098" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" New trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
</ul>
<div className="tab-content">
<TabPane className="tab-pane active" id="panel_followup_10001" initialActive={true}>
<DataTable tableKey="report/sales_tracker:table-6" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_followup_10084" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-7" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_followup_10087" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-8" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_followup_10091" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-9" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_followup_10097" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-10" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_followup_10098" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-11" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
</div>
</div>
</TabPane>
<TabPane className="tab-pane" id="panel_tab_mfollowup" initialActive={false}>
<div className="tabbable tabs-left">
<ul id="myTab1" className="nav nav-tabs tab-bricky">
<li className="active">
<AppLink href="#panel_mfollow_10001" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" Sanjay "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_mfollow_10084" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS DEMO "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_mfollow_10087" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" testing permission "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_mfollow_10091" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" sfsdf "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_mfollow_10097" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS Trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_mfollow_10098" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" New trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
</ul>
<div className="tab-content">
<TabPane className="tab-pane active" id="panel_mfollow_10001" initialActive={true}>
<DataTable tableKey="report/sales_tracker:table-12" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_mfollow_10084" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-13" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_mfollow_10087" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-14" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_mfollow_10091" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-15" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_mfollow_10097" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-16" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_mfollow_10098" initialActive={false}>
<DataTable tableKey="report/sales_tracker:table-17" columns={["Log Date","Customer Name","Mobile","Last Response","Follow up Date & Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
</div>
</div>
</TabPane>
<TabPane className="tab-pane in active" id="panel_tab_sales" initialActive={true}>
<div className="tabbable tabs-left">
<ul id="myTab2" className="nav nav-tabs tab-green">
<li className="active">
<AppLink href="#panel_sale_user_10001" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" Sanjay "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_sale_user_10084" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS DEMO "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_sale_user_10087" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" testing permission "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_sale_user_10091" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" sfsdf "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_sale_user_10097" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" HGMS Trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
<li className="">
<AppLink href="#panel_sale_user_10098" data-toggle="tab">
<AppIcon className="pink fa fa-user" />
{" New trainer "}
<b className="text-danger">
{"(0)"}
</b>
</AppLink>
</li>
</ul>
<div className="tab-content">
<TabPane className="tab-pane active" id="panel_sale_user_10001" initialActive={true}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-18" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_sale_user_10084" initialActive={false}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-19" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_sale_user_10087" initialActive={false}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-20" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_sale_user_10091" initialActive={false}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-21" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_sale_user_10097" initialActive={false}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-22" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
<TabPane className="tab-pane" id="panel_sale_user_10098" initialActive={false}>
<div className="sales-metric-line">
<span className="sales-currency-symbol">
{"₹"}
</span>
{" Total Collection: "}
</div>
<DataTable tableKey="report/sales_tracker:table-23" columns={["Date","Mem No.","Image","Name","Mobile","Plan","Start","Expiry","INV No.","Account"]} className="table table-striped table-bordered table-hover table-full-width" />
</TabPane>
</div>
</div>
</TabPane>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
