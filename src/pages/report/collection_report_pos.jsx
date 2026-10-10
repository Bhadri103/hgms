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
{"Month Collection Report ₹ "}
<b >
{"0"}
</b>
</h1>
<b className="text-success">

</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-3 col-xs-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_collection_report_pos_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_collection_report_pos_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/collection_report_pos?org_id=all&collection=month" className="gym-switcher-item">
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
<AppLink href="/report/collection_report_pos?org_id=1&collection=month" className="gym-switcher-item is-active">
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
<AppLink href="/report/collection_report_pos?org_id=2&collection=month" className="gym-switcher-item">
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
<div className="coll-toolbar">
<div className="coll-toolbar-top">
<div className="coll-toolbar-title">
<AppIcon className="fa fa-filter" />
{" POS Collection Filters "}
</div>
</div>
<div className="coll-filter-row">
<div className="btn-group coll-preset-group">
<AppLink href="/report/collection_report_pos?org_id=1&per_page=100&collection=today" className="btn btn-sm btn-default">
<AppIcon className="fa fa-sun-o" />
{" Today"}
</AppLink>
<AppLink href="/report/collection_report_pos?org_id=1&per_page=100&collection=7days" className="btn btn-sm btn-default">
{"7 Days"}
</AppLink>
<AppLink href="/report/collection_report_pos?org_id=1&per_page=100&collection=month" className="btn btn-sm btn-primary">
{"Month"}
</AppLink>
<AppLink href="/report/collection_report_pos?org_id=1&per_page=100&collection=year" className="btn btn-sm btn-default">
{"Year"}
</AppLink>
<AppLink href="/report/collection_report_pos?org_id=1&per_page=100&collection=all" className="btn btn-sm btn-default">
{"All"}
</AppLink>
</div>
<div className="report-filter-field"><label htmlFor="col_per_page_filter">Report limit</label><Field id="col_per_page_filter" defaultValue="100" as="select" behavior="applyCollFilter()">
<option value="100">
{"Show 100"}
</option>
<option value="250">
{"Show 250"}
</option>
<option value="500">
{"Show 500"}
</option>
</Field></div>
<Field id="col_paymode_filter" className="hidden" as="select" behavior="applyCollFilter()">
<option value="">
{"All Payment Modes"}
</option>
<option value="Cash">
{"🟢 Cash (0)"}
</option>
<option value="Cheque">
{"🟠 Cheque (0)"}
</option>
<option value="Card Payment">
{"🔵 Card Payment (0)"}
</option>
<option value="Online Payment">
{"🟣 Online Payment (0)"}
</option>
</Field>
<div className="coll-paymode-group">
<ActionButton type="button" className="coll-paymode-chip is-active" data-paymode="" behavior="setCollPayMode(this)">
<span className="coll-paymode-dot cash">

</span>
<span >
{"All Payment Modes"}
</span>
</ActionButton>
<ActionButton type="button" className="coll-paymode-chip" data-paymode="Cash" behavior="setCollPayMode(this)">
<span className="coll-paymode-dot cash">

</span>
<span >
{"Cash"}
</span>
<span className="coll-paymode-count">
{"(0)"}
</span>
</ActionButton>
<ActionButton type="button" className="coll-paymode-chip" data-paymode="Cheque" behavior="setCollPayMode(this)">
<span className="coll-paymode-dot cheque">

</span>
<span >
{"Cheque"}
</span>
<span className="coll-paymode-count">
{"(0)"}
</span>
</ActionButton>
<ActionButton type="button" className="coll-paymode-chip" data-paymode="Card Payment" behavior="setCollPayMode(this)">
<span className="coll-paymode-dot card">

</span>
<span >
{"Card"}
</span>
<span className="coll-paymode-count">
{"(0)"}
</span>
</ActionButton>
<ActionButton type="button" className="coll-paymode-chip" data-paymode="Online Payment" behavior="setCollPayMode(this)">
<span className="coll-paymode-dot online">

</span>
<span >
{"Online"}
</span>
<span className="coll-paymode-count">
{"(0)"}
</span>
</ActionButton>
</div>
<ActionButton type="button" className="btn coll-custom-btn btn-sm" behavior="$('#custom_date_section').slideToggle(200);">
<AppIcon className="fa fa-calendar" />
{" Custom Date "}
</ActionButton>
</div>
<div id="custom_date_section" className="hidden">
<div className="coll-date-panel">
<div className="row">
<div className="col-md-6">
<label >
<AppIcon className="fa fa-calendar-o" />
{" Report By Date"}
</label>
<LocalForm className="form-inline report-inline-filters" formKey="form-1">
<Field type="hidden" name="collection" defaultValue="month" as="input" />
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<Field type="hidden" name="per_page" defaultValue="100" as="input" />
<Field type="date" name="dd" defaultValue="" className="" as="input" />
<ActionButton type="submit" className="btn btn-primary btn-sm">
{"Apply"}
</ActionButton>
</LocalForm>
</div>
<div className="col-md-6">
<label >
<AppIcon className="fa fa-calendar" />
{" Report By Date Range"}
</label>
<LocalForm className="form-inline report-inline-filters" formKey="form-2">
<Field type="hidden" name="collection" defaultValue="month" as="input" />
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<Field type="hidden" name="per_page" defaultValue="100" as="input" />
<Field type="date" name="dd1" defaultValue="" className="" as="input" />
<span className="">
{"to"}
</span>
<Field type="date" name="dd2" defaultValue="" className="" as="input" />
<ActionButton type="submit" className="btn btn-primary btn-sm">
{"Apply"}
</ActionButton>
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading panel-heading-coll">
<div className="panel-heading-coll-title">
<AppIcon className="fa fa-shopping-cart" />
<span >Collection records</span>
</div>

</div>
<div id="tran_date">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/collection_report_pos:table-0" columns={["Date","Membership No.","Invoice No.","Receipt No.","Member Name","Payment Mode","Paid Amount","Log by"]} className="table table-striped table-bordered table-hover table-full-width coll-table" />
<div className="coll-pagebar">
<div className="coll-page-meta">
{" POS sale rows: 0-0 of 0 shown, 100 per page "}
</div>
<div className="coll-page-actions">
<span className="coll-page-meta">
{"Page 1 / 1"}
</span>
</div>
</div>
<div className="col-md-12 hidden">
<div className="space12">
<div className="btn-group btn-group-justified">
<AppLink className="btn btn-orange active" href="/report/collection_report_pos?pay_mode=Cash&collection=month">
{" Cash(0) "}
</AppLink>
<AppLink className="btn btn-orange active" href="/report/collection_report_pos?pay_mode=Cheque&collection=month">
{" Cheque(0) "}
</AppLink>
<AppLink className="btn btn-orange active" href="/report/collection_report_pos?pay_mode=Card Payment&collection=month">
{" Card Payment(0) "}
</AppLink>
<AppLink className="btn btn-orange active" href="/report/collection_report_pos?pay_mode=Online Payment&collection=month">
{" Online Payment(0) "}
</AppLink>
</div>
</div>
</div>
</LocalForm>
</div>
<div className="panel-heading panel-heading-coll">
<div className="panel-heading-coll-title">
<AppIcon className="fa fa-shopping-bag" />
<span >
{"Pos Purchase Report"}
</span>
</div>

</div>
<DataTable tableKey="report/collection_report_pos:table-1" columns={["Date","Membership No.","Invoice No.","Receipt No.","Member Name","Payment Mode","Paid Amount","Log by"]} className="table table-striped table-bordered table-hover table-full-width" />
<div className="coll-pagebar">
<div className="coll-page-meta">
{" POS purchase rows: 0-0 of 0 shown, 100 per page "}
</div>
<div className="coll-page-actions">
<span className="coll-page-meta">
{"Page 1 / 1"}
</span>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
