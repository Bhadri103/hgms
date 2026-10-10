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
{" Manage Expenses"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Manage Expenses "}
<AppLink className="" role="link" href="/local/add_expense">
<ActionButton className="btn btn-success" type="button">
{"Add Expense"}
</ActionButton>
</AppLink>
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_manage_expenses_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_manage_expenses_php" tabIndex="-1" role="dialog">
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
<AppLink href="/finance/expense_management/manage_expenses?org_id=all" className="gym-switcher-item">
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
<AppLink href="/finance/expense_management/manage_expenses?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/finance/expense_management/manage_expenses?org_id=2" className="gym-switcher-item">
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
{"Manage Expenses"}
</strong>
</div>
<div className="">
<LocalForm id="manage-expense-filter" formKey="manage-expense-filter">
<Field type="hidden" id="me_active_preset" defaultValue="" as="input" />
<div className="">
<span className="">
<AppIcon className="fa fa-bolt" />
{" Quick Filter: "}
</span>
<AppLink href="#" data-preset="today" className="me-preset-btn">
<AppIcon className="fa fa-sun-o" />
{"Today "}
</AppLink>
<AppLink href="#" data-preset="7days" className="me-preset-btn">
<AppIcon className="fa fa-calendar" />
{"7 Days "}
</AppLink>
<AppLink href="#" data-preset="month" className="me-preset-btn">
<AppIcon className="fa fa-calendar-check-o" />
{"Month "}
</AppLink>
<AppLink href="#" data-preset="year" className="me-preset-btn">
<AppIcon className="fa fa-globe" />
{"Year "}
</AppLink>
<AppLink href="#" id="me-clear-btn" className="hidden">
<AppIcon className="fa fa-times" />
{"Clear "}
</AppLink>
</div>
<div className="">
<label className="">
<Field type="radio" name="filter_mode" id="me_mode_single" defaultValue="single" defaultChecked={true} className="" as="input" />
<AppIcon className="fa fa-calendar-o" />
{" Single Date "}
</label>
<label className="">
<Field type="radio" name="filter_mode" id="me_mode_range" defaultValue="range" className="" as="input" />
<AppIcon className="fa fa-calendar" />
{" Date Range "}
</label>
</div>
<div id="me_row_single" className="">
<div className="">
<label className="" htmlFor="me_dd_single">
<AppIcon className="fa fa-calendar-o" />
{" Date "}
</label>
<div className="input-group">
<Field type="date" name="dd" id="me_dd_single" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="">
<label className="" htmlFor="label-finance-expense-management-manage-expenses-jsx-1">
<AppIcon className="fa fa-tag" />
{" Category "}
</label>
<Field name="exp_cate" className="form-control" as="select" id="label-finance-expense-management-manage-expenses-jsx-1">
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
<div className="">
<label className="" htmlFor="me_from_single">
<AppIcon className="fa fa-university" />
{" From Account "}
</label>
<Field name="from_id" id="me_from_single" className="form-control" as="select">
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
<div className="">
<label className="" htmlFor="me_user_single">
<AppIcon className="fa fa-user" />
{" User "}
</label>
<Field name="filter_user_id" id="me_user_single" className="form-control" as="select">
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
<div className="">
<label className="">
{"."}
</label>
<ActionButton type="submit" className="btn btn-primary">
<AppIcon className="fa fa-search" />
{"Submit "}
</ActionButton>
</div>
</div>
<div id="me_row_range" className="hidden">
<div className="">
<label className="" htmlFor="me_dd1">
<AppIcon className="fa fa-calendar" />
{" From Date "}
</label>
<div className="input-group">
<Field type="date" name="dd1" id="me_dd1" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="">
<label className="" htmlFor="me_dd2">
<AppIcon className="fa fa-calendar" />
{" To Date "}
</label>
<div className="input-group">
<Field type="date" name="dd2" id="me_dd2" className="form-control" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="">
<label className="" htmlFor="label-finance-expense-management-manage-expenses-jsx-2">
<AppIcon className="fa fa-tag" />
{" Category "}
</label>
<Field name="exp_cate" className="form-control" as="select" id="label-finance-expense-management-manage-expenses-jsx-2">
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
<div className="">
<label className="" htmlFor="me_from_range">
<AppIcon className="fa fa-university" />
{" From Account "}
</label>
<Field name="from_id" id="me_from_range" className="form-control" as="select">
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
<div className="">
<label className="" htmlFor="me_user_range">
<AppIcon className="fa fa-user" />
{" User "}
</label>
<Field name="filter_user_id" id="me_user_range" className="form-control" as="select">
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
<div className="">
<label className="">
{"."}
</label>
<ActionButton type="submit" className="btn btn-primary">
<AppIcon className="fa fa-search" />
{"Submit "}
</ActionButton>
</div>
</div>
</LocalForm>
</div>
<div className="panel-body">
<DataTable tableKey="finance/expense_management/manage_expenses:table-0" columns={["Date","Category","Description","Amount","User","From Account","Log By","Action"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>



</>;
}
