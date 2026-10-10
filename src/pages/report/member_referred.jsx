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
{" Referred Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Referred Report "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_member_referred_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_member_referred_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/member_referred?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/member_referred?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/member_referred?org_id=2" className="gym-switcher-item">
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
{" Referred Report"}
</div>
<div className="container">

</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/member_referred:table-0" columns={["Membership No","Name","Address","Contact No","Referred by"]} className="table table-striped table-bordered nowrap" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
