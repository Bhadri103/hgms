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
{" Irregular Members"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Irregular Members"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_irregular_members_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_irregular_members_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/irregular_members?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/irregular_members?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/irregular_members?org_id=2" className="gym-switcher-item">
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
<div className="row">
<div id="sms_charge">

</div>
<div className="col-md-12">
<div className="panel panel-default irr-card">
<Field type="hidden" id="new_date_e" name="date_datepicker" as="input" />
<Field type="hidden" id="absence_days" defaultValue="3" as="input" />
<div className="panel-body">
<div className="irr-toolbar">
<div className="irr-toolbar-left">
<div className="irr-toolbar-label">
{"Filter by Absence Period"}
</div>
<div className="absence-cards">
<AppLink href="#" className="absence-card" data-days="15">
<AppIcon className="fa fa-calendar-o" />
{" 15 Days"}
</AppLink>
<AppLink href="#" className="absence-card" data-days="10">
<AppIcon className="fa fa-calendar-o" />
{" 10 Days"}
</AppLink>
<AppLink href="#" className="absence-card" data-days="7">
<AppIcon className="fa fa-calendar-o" />
{" 7 Days"}
</AppLink>
<AppLink href="#" className="absence-card active" data-days="3">
<AppIcon className="fa fa-calendar-o" />
{" 3 Days"}
</AppLink>
</div>
</div>
<div className="irr-filter-bar"><label htmlFor="type">Search field</label>
<Field name="type" id="type" as="select">
<option value="">
{"All"}
</option>
<option value="mem_id">
{"Prefix"}
</option>
<option value="name">
{"Name"}
</option>
<option value="mobile">
{"Mobile Number"}
</option>
<option value="gender">
{"Gender"}
</option>
<option value="uid">
{"Unique id"}
</option>
</Field>
</div>
</div>
<div id="new_div">
<div className="irr-table-wrap">
<DataTable tableKey="report/irregular_members:table-0" columns={["#","Image","Plan Name","Start Date","Expiry Date","Name","Contact No","Amount","log By","Action"]} className="table table-striped table-bordered" />
</div>
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
