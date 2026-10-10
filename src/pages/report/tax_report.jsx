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
{" Tax Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Tax Report "}
</h1>
<b className="text-success">
{"All dates"}
</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_tax_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_tax_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/tax_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/tax_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/tax_report?org_id=2" className="gym-switcher-item">
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
<div className="tax-report-shell">
<LocalForm className="tax-filter-card" id="tax_report_filter_form" formKey="tax_report_filter_form">
<div className="tax-filter-top">
<div >
<h2 className="tax-filter-title">
{"Tax Report"}
</h2>
<p className="tax-filter-note">
{"Filter the tax report by single date or date range."}
</p>
</div>
<div className="tax-filter-badge">
<AppIcon className="fa fa-filter" />
<span >
{"All dates"}
</span>
</div>
</div>
<div className="tax-filter-modes">
<label className="tax-filter-mode">
<Field name="rep_type" defaultValue="all" type="radio" defaultChecked={true} as="input" />
{" All Dates "}
</label>
<label className="tax-filter-mode">
<Field name="rep_type" defaultValue="date" type="radio" as="input" />
{" Report By Date "}
</label>
<label className="tax-filter-mode">
<Field name="rep_type" defaultValue="range" type="radio" as="input" />
{" Report By Date Range "}
</label>
</div>
<div className="tax-filter-grid">
<div className="tax-filter-group tax-filter-date-single hidden">
<label htmlFor="dd">
{"Report By Date"}
</label>
<Field type="date" className="form-control" name="dd" id="dd" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="tax-filter-group tax-filter-date-range hidden">
<label htmlFor="dd1">
{"From Date"}
</label>
<Field type="date" className="form-control" name="dd1" id="dd1" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="tax-filter-group tax-filter-date-range hidden">
<label htmlFor="dd2">
{"To Date"}
</label>
<Field type="date" className="form-control" name="dd2" id="dd2" autoComplete="off" defaultValue="" as="input" />
</div>
<div className="tax-filter-actions">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<ActionButton type="submit" className="btn btn-primary">
{"Apply filters"}
</ActionButton>
<AppLink href="/report/tax_report?org_id=1" className="btn btn-default">
{"VIEW ALL"}
</AppLink>
</div>
</div>
</LocalForm>
<div className="panel panel-default tax-report-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Tax Report "}
<span className="">
<ActionButton id="exportBtn" type="button">
{"Export Table to CSV"}
</ActionButton>
</span>
</div>
<div className="panel-body">
<div className="tax-summary-grid">
<div className="tax-summary-card rows">
<h4 >
{"Entries"}
</h4>
<div className="value">
{"5"}
</div>
<div className="help">
{"Invoices included in this tax view"}
</div>
</div>
<div className="tax-summary-card subtotal">
<h4 >
{"Subtotal"}
</h4>
<div className="value">
{"29,997.00"}
</div>
<div className="help">
{"Taxable base before final tax total"}
</div>
</div>
<div className="tax-summary-card tax">
<h4 >
{"Total Tax"}
</h4>
<div className="value">
{"5,425.00"}
</div>
<div className="help">
{"Combined tax amount from filtered invoices"}
</div>
</div>
<div className="tax-summary-card final">
<h4 >
{"Final Amount"}
</h4>
<div className="value">
{"35,422.00"}
</div>
<div className="help">
{"Final invoice total after tax handling"}
</div>
</div>
</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/tax_report:table-0" columns={["Date","Membership No","Member Name","Invoice Number","Subtotal","Is Plan Amount Tax Included?","CGST(2.5)","VAT(2.5)","gst (15)","gst(5)","VAT(10)","Final Amount","Total"]} className="table table-striped table-bordered table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
