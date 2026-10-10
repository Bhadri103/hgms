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
{" Manage Sale Bill"}
</li>
</ol>
<div className="page-header bill-page-header">
<h1 >
{"Manage Sale Bill "}

</h1>
<div className="bill-header-actions">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_manage_sell_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_manage_sell_php" tabIndex="-1" role="dialog">
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
<AppLink href="/general/inventory-management/manage_sell?org_id=all" className="gym-switcher-item">
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
<AppLink href="/general/inventory-management/manage_sell?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/general/inventory-management/manage_sell?org_id=2" className="gym-switcher-item">
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
<ActionButton type="button" id="show_deleted_btn" className="btn btn-default" data-active="0">
<span className="glyphicon glyphicon-trash">

</span>
{" Show Deleted "}
</ActionButton>
<AppLink className="" role="link" href="/local/pos_red?bill_type=out">
<ActionButton className="btn btn-success" type="button">
{"Add Sale Bill"}
</ActionButton>
</AppLink>
<Field type="checkbox" id="show_deleted" defaultValue="1" className="hidden" as="input" />
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Manage Sell Bill"}
</div>
<div className="panel-body">

</div>
<DataTable tableKey="general/inventory-management/manage_sell:table-0" columns={["Date","Sr No","Name","Address","Total Amount","Discount","Total Paid","Due Amount","Action"]} className="table table-striped table-bordered" />
</div>
</div>
</div>
</div>



</>;
}
