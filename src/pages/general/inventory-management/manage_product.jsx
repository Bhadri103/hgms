import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';
import { usePage } from '@/components/PageContext';

export default function Page() {
 const page = usePage();
 const [filterVersion, setFilterVersion] = React.useState(0);
 return <>


<div className="container">
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
{"Manage Product"}
</li>
</ol>
<div className="page-header">
<div className="inventory-hero">
<div className="inventory-banner">
<span className="inventory-kicker">
<AppIcon className="fa fa-archive" />
{" Inventory Workspace"}
</span>
<h1 >
{"Manage Product"}
</h1>
<p >
{"Control your product catalog, pricing, stockable items, and product images from one cleaner inventory view."}
</p>
<div className="inventory-actions">
<AppLink className="hero-link" role="link" href="/local/add_product">
<AppIcon className="fa fa-plus" />
{" Add Product "}
</AppLink>
<span className="inventory-mini">
<AppIcon className="fa fa-cubes" />
{" 4 Total Products"}
</span>
<span className="inventory-mini">
<AppIcon className="fa fa-tags" />
{" 4 Categories"}
</span>
</div>
</div>
<div className="inventory-side">
<div >
<h3 >
{"Inventory Snapshot"}
</h3>
<p >
{"Use the filters below to narrow products by name, category, and stockable type before editing or reviewing pricing."}
</p>
</div>
<div className="btn-group">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_manage_product_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_manage_product_php" tabIndex="-1" role="dialog">
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
<AppLink href="/general/inventory-management/manage_product?org_id=all" className="gym-switcher-item">
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
<AppLink href="/general/inventory-management/manage_product?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/general/inventory-management/manage_product?org_id=2" className="gym-switcher-item">
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
</div>
</div>
<div className="stat-grid">
<div className="metric-card">
<span >
{"Total Products"}
</span>
<strong >
{"4"}
</strong>
<em >
{"All active products in the current scope"}
</em>
</div>
<div className="metric-card">
<span >
{"Stockable"}
</span>
<strong >
{"4"}
</strong>
<em >
{"Items that affect physical stock"}
</em>
</div>
<div className="metric-card">
<span >
{"Non Stockable"}
</span>
<strong >
{"0"}
</strong>
<em >
{"Service or non-stock inventory rows"}
</em>
</div>
<div className="metric-card">
<span >
{"Categories"}
</span>
<strong >
{"4"}
</strong>
<em >
{"Distinct product category groups"}
</em>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="filter-card">
<div className="filter-card-head">
<div >
<h3 >
{"Filter Directory"}
</h3>
<p >
{"Quickly narrow the product list before updating price, category, or stock settings."}
</p>
</div>
</div>
<LocalForm key={filterVersion} formKey="form-0" className="product-filter-search">
<div className="filter-grid product-filter-grid">
<div className="form-group full-row">
<label  htmlFor="label-general-inventory-management-manage-product-jsx-1">
{"Search Product"}
</label>
<Field type="text" className="form-control" name="search" defaultValue="" placeholder="Search by product name, category, barcode, or unit" as="input"  id="label-general-inventory-management-manage-product-jsx-1"/>
</div>
<div className="form-group">
<label  htmlFor="label-general-inventory-management-manage-product-jsx-2">
{"Category"}
</label>
<Field className="form-control" name="category" as="select" id="label-general-inventory-management-manage-product-jsx-2">
<option value="">
{"All Categories"}
</option>
<option value="7">
{"weight machine"}
</option>
<option value="8">
{"Thyraband"}
</option>
<option value="13">
{"Juice and Shake"}
</option>
<option value="19">
{"Suppliment"}
</option>
<option value="28">
{"protin pack"}
</option>
</Field>
</div>
<div className="form-group">
<label  htmlFor="label-general-inventory-management-manage-product-jsx-3">
{"Stockable"}
</label>
<Field className="form-control" name="stockable" as="select" id="label-general-inventory-management-manage-product-jsx-3">
<option value="">
{"All"}
</option>
<option value="1">
{"Yes"}
</option>
<option value="0">
{"No"}
</option>
</Field>
</div>
<div className="product-filter-actions">
<ActionButton type="submit" className="btn btn-primary">
{"Apply Filters"}
</ActionButton>
<button type="button" className="btn product-filter-reset" onClick={() => { page.setFilters({}); setFilterVersion(value => value + 1); }}>
{"Reset"}
</button>
</div>
</div>
</LocalForm>
</div>
<div className="panel panel-default table-panel">
<div className="table-shell">
<div className="table-head">
<div >
<h3 >
{"Product Directory"}
</h3>
<p >
{"Review category, stockability, barcode, and pricing at a glance."}
</p>
</div>
<div className="table-head-tools">
<AppIcon className="fa fa-table" />
{" Live inventory list"}
</div>
</div>
<div className="table-wrap">
<DataTable tableKey="general/inventory-management/manage_product:table-0" columns={["Category","Product","Product Image","Unit","Bar Code","Stockable","Purchase","Selling","Action"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>
</div>

</>;
}
