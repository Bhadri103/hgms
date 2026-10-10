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
{" Profit & Loss Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Profit & Loss Report "}
</h1>
<b className="text-success">

</b>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_invcollection_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_invcollection_php" tabIndex="-1" role="dialog">
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
<AppLink href="/general/inventory-management/invcollection?org_id=all" className="gym-switcher-item">
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
<AppLink href="/general/inventory-management/invcollection?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/general/inventory-management/invcollection?org_id=2" className="gym-switcher-item">
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
{" Profit & Loss Report"}
</div>
<div className="panel-body">
<div className="container">
<div id="date_fields" className="report-mode-options">
<div className="form-group">
<label className="radio-inline">
<Field name="rep_type" required={true} id="rep_type" defaultValue="date" type="radio" as="input" />
{" Report By Date "}
</label>
<label className="radio-inline">
<Field name="rep_type" required={true} id="rep_type1" defaultValue="range" type="radio" as="input" />
{" Report By Date Range "}
</label>
</div>
</div>
<div className="col-md-12 hidden" id="tday">
<LocalForm id="myform" formKey="myform">
<div className="input-group col-md-3">
<Field type="date" className="form-control" name="dd" id="start_date1" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="">
<Field type="hidden" id="org_gym_id" name="org_id" className="form-control" defaultValue="1" as="input" />
<Field type="submit" defaultValue="Submit" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
<div className="col-md-12 hidden" id="tday2">
<LocalForm id="myform" formKey="myform">
<div className="input-group col-md-3">
<Field type="date" className="form-control" name="dd1" id="start_date1" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div className="input-group col-md-3">
<Field type="date" className="form-control" name="dd2" id="start_date1" autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
<div >
<Field type="hidden" id="org_gym_id" name="org_id" className="form-control" defaultValue="1" as="input" />
<Field type="submit" defaultValue="Submit" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="general/inventory-management/invcollection:table-0" columns={["Collection","Expense","Total","Result"]} className="table table-striped table-bordered table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
