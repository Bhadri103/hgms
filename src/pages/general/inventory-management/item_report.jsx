import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="container report-shell">
<div className="row">
<div className="col-sm-12">
<ol className="breadcrumb">
<li >
<AppIcon className="clip-grid-6" />
<AppLink href="/home">
{"Home"}
</AppLink>
</li>
<li className="active">
{"Item Report"}
</li>
</ol>
<div className="page-header">
<div className="report-hero">
<div >
<h1 >
{"Item Report"}
</h1>
<p >
{"Track product movement, balance, and category-level stock position."}
</p>
</div>
<div className="btn-group">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_item_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_item_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/general/inventory-management/item_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/general/inventory-management/item_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/general/inventory-management/item_report?org_id=2" className="gym-switcher-item">
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
<div className="report-grid">
<div className="report-card">
<span >
{"Total Items"}
</span>
<strong >
{"4"}
</strong>
</div>
<div className="report-card">
<span >
{"Total In"}
</span>
<strong >
{"12.00"}
</strong>
</div>
<div className="report-card">
<span >
{"Total Out"}
</span>
<strong >
{"4.00"}
</strong>
</div>
<div className="report-card">
<span >
{"Total Balance"}
</span>
<strong >
{"8.00"}
</strong>
</div>
<div className="report-card">
<span >
{"Zero/Low Stock"}
</span>
<strong >
{"3"}
</strong>
</div>
</div>
<div className="filter-card">
<LocalForm  formKey="form-0">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="filter-grid">
<div >
<label  htmlFor="label-general-inventory-management-item-report-jsx-1">
{"Search"}
</label>
<Field type="text" className="form-control" name="search" defaultValue="" placeholder="Product name, barcode, unit" as="input"  id="label-general-inventory-management-item-report-jsx-1"/>
</div>
<div >
<label  htmlFor="label-general-inventory-management-item-report-jsx-2">
{"Category"}
</label>
<Field name="category_id" className="form-control" as="select" id="label-general-inventory-management-item-report-jsx-2">
<option value="0">
{"All Categories"}
</option>
<option value="13">
{"Juice and Shake"}
</option>
<option value="28">
{"protin pack"}
</option>
<option value="19">
{"Suppliment"}
</option>
<option value="8">
{"Thyraband"}
</option>
<option value="7">
{"weight machine"}
</option>
</Field>
</div>
<div >
<label  htmlFor="label-general-inventory-management-item-report-jsx-3">
{"Stock Status"}
</label>
<Field name="stock_status" className="form-control" as="select" id="label-general-inventory-management-item-report-jsx-3">
<option value="">
{"All Status"}
</option>
<option value="in_stock">
{"In Stock"}
</option>
<option value="out_stock">
{"Zero / Negative"}
</option>
</Field>
</div>
<div className="filter-actions">
<ActionButton type="submit" className="btn-stock">
{"Apply"}
</ActionButton>
<AppLink href="/general/inventory-management/item_report?org_id=1" className="btn-lightline">
{"Reset"}
</AppLink>
</div>
</div>
</LocalForm>
</div>
<div className="table-card">
<div className="table-head">
<h3 >
{"Item Report"}
</h3>
</div>
<div className="table-responsive">
<DataTable tableKey="general/inventory-management/item_report:table-0" columns={["Product","Category","Unit","IN","OUT","BALANCE","Status"]} className="table table-striped table-bordered table-hover table-full-width report-table" />
</div>
</div>
</div>
</div>
</div>

</>;
}
