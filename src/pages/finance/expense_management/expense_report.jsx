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
{" Manage Expenses Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{" Manage Expenses Report"}
</h1>
<b className="text-success">

</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_expense_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_expense_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/finance/expense_management/expense_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/finance/expense_management/expense_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/finance/expense_management/expense_report?org_id=2" className="gym-switcher-item">
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
<AppIcon className="fa fa-bar-chart" />
<strong >
{"Manage Expenses Report"}
</strong>
</div>
<div className="er-filter-card">
<LocalForm id="expense-filter-form" formKey="expense-filter-form">
<Field type="hidden" id="er_active_preset" defaultValue="" as="input" />
<span className="er-section-label">
<AppIcon className="fa fa-bolt" />
{"Quick Filter:"}
</span>
<div className="">
<AppLink href="#" data-preset="today" className="er-preset-btn preset-today">
<AppIcon className="fa fa-sun-o" />
{"Today "}
</AppLink>
<AppLink href="#" data-preset="7days" className="er-preset-btn preset-7days">
<AppIcon className="fa fa-calendar" />
{"7 Days "}
</AppLink>
<AppLink href="#" data-preset="month" className="er-preset-btn preset-month">
<AppIcon className="fa fa-calendar-check-o" />
{"Month "}
</AppLink>
<AppLink href="#" data-preset="year" className="er-preset-btn preset-year">
<AppIcon className="fa fa-globe" />
{"Year "}
</AppLink>
<AppLink href="#" id="er-clear-btn" className="er-clear-btn">
<AppIcon className="fa fa-times" />
{"Clear "}
</AppLink>
</div>
<div className="">
<div className="er-mode-toggle">
<ActionButton type="button" className="er-mode-btn active" id="btn_single">
<AppIcon className="fa fa-calendar-o" />
{"Single Date "}
</ActionButton>
<ActionButton type="button" className="er-mode-btn" id="btn_range">
<AppIcon className="fa fa-calendar" />
{"Date Range "}
</ActionButton>
</div>
<div id="inline_single" className="">
<div className="input-group">
<Field type="date" name="dd" id="dd_single" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div id="inline_range" className="hidden">
<div className="input-group">
<Field type="date" name="dd1" id="dd1" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<span className="">
{"—"}
</span>
<div className="input-group">
<Field type="date" name="dd2" id="dd2" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
</div>
<Field type="radio" name="filter_mode" id="mode_single" defaultValue="single" defaultChecked={true} className="hidden" as="input" />
<Field type="radio" name="filter_mode" id="mode_range" defaultValue="range" className="hidden" as="input" />
<div id="row_single" className="er-fields-row">
<div className="er-field-group">
<label  htmlFor="exp_cate_single">
<AppIcon className="fa fa-tag" />
{" Select Category"}
</label>
<Field name="exp_cate" id="exp_cate_single" className="form-control" as="select">
<option value="">
{"— All Categories —"}
</option>
<option value="41">
{" test "}
</option>
<option value="44">
{" pop "}
</option>
<option value="45">
{" salary "}
</option>
<option value="46">
{" tea "}
</option>
<option value="47">
{" Rent "}
</option>
<option value="48">
{" bfvtv "}
</option>
<option value="56">
{" light billing "}
</option>
<option value="61">
{" light bill "}
</option>
</Field>
</div>
<div className="er-field-group">
<label  htmlFor="from_id_single">
<AppIcon className="fa fa-university" />
{" From Account"}
</label>
<Field name="from_id" id="from_id_single" className="form-control" as="select">
<option value="">
{"— All Accounts —"}
</option>
<option value="23">
{" Cash Account "}
</option>
<option value="24">
{" Online Account "}
</option>
</Field>
</div>
<div className="er-field-group">
<label  htmlFor="user_single">
<AppIcon className="fa fa-user" />
{" User"}
</label>
<Field name="filter_user_id" id="user_single" className="form-control" as="select">
<option value="">
{"— All Users —"}
</option>
<option value="10068">
{" Akash Singh "}
</option>
<option value="10029">
{" Janvi "}
</option>
<option value="10067">
{" Kunal Saini "}
</option>
<option value="10058">
{" O_MY_GYM "}
</option>
<option value="10007">
{" Ramsha "}
</option>
<option value="10028">
{" rashi "}
</option>
<option value="10083">
{" rina "}
</option>
<option value="10002">
{" RK "}
</option>
<option value="10001">
{" Sanjay "}
</option>
<option value="10057">
{" sanjay singh "}
</option>
<option value="10076">
{" SATHAR KERALA "}
</option>
<option value="10073">
{" sonali "}
</option>
<option value="10014">
{" tanwar "}
</option>
<option value="10089">
{" vtvtv6v "}
</option>
</Field>
</div>
<div className="er-field-group er-field-submit">
<label className="">
{"."}
</label>
<ActionButton type="submit" className="er-submit-btn er-submit-single">
<AppIcon className="fa fa-search" />
{"Submit "}
</ActionButton>
</div>
</div>
<div id="row_range" className="er-fields-row hidden">
<div className="er-field-group">
<label  htmlFor="exp_cate_range">
<AppIcon className="fa fa-tag" />
{" Select Category"}
</label>
<Field name="exp_cate" id="exp_cate_range" className="form-control" as="select">
<option value="">
{"— All Categories —"}
</option>
<option value="41">
{" test "}
</option>
<option value="44">
{" pop "}
</option>
<option value="45">
{" salary "}
</option>
<option value="46">
{" tea "}
</option>
<option value="47">
{" Rent "}
</option>
<option value="48">
{" bfvtv "}
</option>
<option value="56">
{" light billing "}
</option>
<option value="61">
{" light bill "}
</option>
</Field>
</div>
<div className="er-field-group">
<label  htmlFor="from_id_range">
<AppIcon className="fa fa-university" />
{" From Account"}
</label>
<Field name="from_id" id="from_id_range" className="form-control" as="select">
<option value="">
{"— All Accounts —"}
</option>
<option value="23">
{" Cash Account "}
</option>
<option value="24">
{" Online Account "}
</option>
</Field>
</div>
<div className="er-field-group">
<label  htmlFor="user_range">
<AppIcon className="fa fa-user" />
{" User"}
</label>
<Field name="filter_user_id" id="user_range" className="form-control" as="select">
<option value="">
{"— All Users —"}
</option>
<option value="10068">
{" Akash Singh "}
</option>
<option value="10029">
{" Janvi "}
</option>
<option value="10067">
{" Kunal Saini "}
</option>
<option value="10058">
{" O_MY_GYM "}
</option>
<option value="10007">
{" Ramsha "}
</option>
<option value="10028">
{" rashi "}
</option>
<option value="10083">
{" rina "}
</option>
<option value="10002">
{" RK "}
</option>
<option value="10001">
{" Sanjay "}
</option>
<option value="10057">
{" sanjay singh "}
</option>
<option value="10076">
{" SATHAR KERALA "}
</option>
<option value="10073">
{" sonali "}
</option>
<option value="10014">
{" tanwar "}
</option>
<option value="10089">
{" vtvtv6v "}
</option>
</Field>
</div>
<div className="er-field-group er-field-submit">
<label className="">
{"."}
</label>
<ActionButton type="submit" className="er-submit-btn er-submit-range">
<AppIcon className="fa fa-search" />
{"Submit "}
</ActionButton>
</div>
</div>
</LocalForm>
</div>
<div className="panel-body">
<DataTable tableKey="finance/expense_management/expense_report:table-0" columns={["Date","Category","Description","Amount","User","From Account","Log By"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>



</>;
}
