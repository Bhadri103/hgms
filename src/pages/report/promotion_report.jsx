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
{" Promotion Events Report"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Promotion Events Report"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_promotion_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_promotion_report_php" tabIndex="-1" role="dialog">
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
<AppLink href="/report/promotion_report?org_id=all" className="gym-switcher-item">
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
<AppLink href="/report/promotion_report?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/report/promotion_report?org_id=2" className="gym-switcher-item">
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
<div className="promo-filter-card">
<div className="promo-filter-head">
<div >
<h2 className="promo-filter-title">
{"Promotion Events Report"}
</h2>
<p className="promo-filter-note">
{"Showing the same promotion source options used in add member. Select one or more event checkboxes."}
</p>
</div>
<div className="promo-filter-pill">
<AppIcon className="fa fa-bullhorn" />
<span id="selected_event_label">
{"All Events"}
</span>
</div>
</div>
<div className="promo-filter-grid">
<div className="promo-filter-group">
<label >
{"Promotion Event"}
</label>
<div className="promo-checkbox-grid">
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Google" data-label="Google" as="input" />
<span >
{"Google"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Fb" data-label="Fb" as="input" />
<span >
{"Fb"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Insta" data-label="Insta" as="input" />
<span >
{"Insta"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="SMS" data-label="SMS" as="input" />
<span >
{"SMS"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Newspaper Inserts" data-label="Newspaper Inserts" as="input" />
<span >
{"Newspaper Inserts"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Direct" data-label="Direct" as="input" />
<span >
{"Direct"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Newspaper Ad" data-label="Newspaper Ad" as="input" />
<span >
{"Newspaper Ad"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Society" data-label="Society" as="input" />
<span >
{"Society"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Magazine" data-label="Magazine" as="input" />
<span >
{"Magazine"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Radio" data-label="Radio" as="input" />
<span >
{"Radio"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Kiosk" data-label="Kiosk" as="input" />
<span >
{"Kiosk"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Mall" data-label="Mall" as="input" />
<span >
{"Mall"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Hoarding" data-label="Hoarding" as="input" />
<span >
{"Hoarding"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Just Dial" data-label="Just Dial" as="input" />
<span >
{"Just Dial"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Theater" data-label="Theater" as="input" />
<span >
{"Theater"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Television" data-label="Television" as="input" />
<span >
{"Television"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Media Article" data-label="Media Article" as="input" />
<span >
{"Media Article"}
</span>
</label>
<label className="promo-check-option">
<Field type="checkbox" className="promo-event-checkbox" defaultValue="Drop down/banner" data-label="Drop down/banner" as="input" />
<span >
{"Drop down/banner"}
</span>
</label>
</div>
</div>
<div className="promo-filter-actions">
<ActionButton type="button" className="btn btn-primary" id="apply_promo_filter">
{"Apply Filter"}
</ActionButton>
<ActionButton type="button" className="btn btn-default" id="clear_promo_filter">
{"Clear"}
</ActionButton>
</div>
</div>
</div>
<div className="panel panel-default promo-report-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Promotion Events Report"}
</div>
<div className="container">

</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="report/promotion_report:table-0" columns={["Membership No","Name","Address","Contact No","Hear BY"]} className="table table-striped table-bordered nowrap" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
