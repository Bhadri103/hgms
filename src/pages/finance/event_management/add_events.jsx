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
<AppIcon className="clip-pencil" />
<AppLink href="/home">
{" Home "}
</AppLink>
</li>
<li className="active">
{" Add Events "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add Events"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_add_events_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_add_events_php" tabIndex="-1" role="dialog">
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
<AppLink href="/finance/event_management/add_events?org_id=all" className="gym-switcher-item">
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
<AppLink href="/finance/event_management/add_events?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/finance/event_management/add_events?org_id=2" className="gym-switcher-item">
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
{" Add Events "}
</div>
<div className="panel-body">
<LocalForm role="form" id="form" formKey="form">
<div className="col-md-6">
<Field type="hidden" name="date" defaultValue="2026-10-09 04:15:40" as="input" />
<div className="form-group">
<label className="control-label" htmlFor="form-field-select-1">
{" Select Category "}
<span className="symbol required">

</span>
</label>
<Field id="form-field-select-1" name="category" className="form-control" required={true} as="select">
<option value="">
{"Select Category"}
</option>
<option value="2">
{"Event1"}
</option>
<option value="4">
{"k"}
</option>
<option value="5">
{"Company Anniversary"}
</option>
<option value="6">
{"Gaming"}
</option>
<option value="7">
{"festival"}
</option>
<option value="8">
{"new year festival"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="name">
{" Name of Event "}
<span className="symbol required">

</span>
</label>
<Field type="text" className="form-control" placeholder="Event Name" id="name" name="name" required={true} defaultValue="" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-finance-event-management-add-events-jsx-1">
{" Description "}
</label>
<Field className="form-control ckeditor" name="description" defaultValue="\t" as="textarea"  id="label-finance-event-management-add-events-jsx-1"/>
</div>
<div className="col-md-4">
<div className="form-group">
<ActionButton className="btn btn-yellow btn-block" type="submit">
{" Submit "}
</ActionButton>
</div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="value">
{" Entry Fees "}
</label>
<Field type="text" className="form-control" id="value" placeholder="Entry Fees" name="entry_fee" defaultValue="" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="value">
{" Discounted Entry Fees "}
</label>
<Field type="text" className="form-control" id="value" placeholder="Discounted Entry Fees" name="d_entry_fee" defaultValue="" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="value">
{" Link "}
</label>
<Field type="text" className="form-control" id="value" placeholder="Link" name="link" defaultValue="" as="input" />
<Field type="hidden" id="org_gym_id" name="org_gym_id" className="form-control" defaultValue="1" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="start_date1">
{" Event Start Date "}
</label>
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="start_date" id="start_date1" required={true} autoComplete="off" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="end_date1">
{" Event End Date "}
</label>
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="end_date" id="end_date1" required={true} autoComplete="off" as="input" />
</div>
<div className="form-group">
<label >
{" Image Upload "}
</label>
<div className="fileupload fileupload-new" data-provides="fileupload">
<div className="fileupload-new thumbnail">
<img src={`${import.meta.env.BASE_URL}assets/avatar.svg`} alt="" />
</div>
<div className="fileupload-preview fileupload-exists thumbnail">

</div>
<div >
<span className="btn btn-light-grey btn-file">
<span className="fileupload-new">
<AppIcon className="fa fa-picture-o" />
{" Select image"}
</span>
<span className="fileupload-exists">
<AppIcon className="fa fa-picture-o" />
{" Change"}
</span>
<Field type="file" name="image" as="input" />
</span>
<AppLink href="#" className="btn fileupload-exists btn-light-grey" data-dismiss="fileupload">
<AppIcon className="fa fa-times" />
{" Remove "}
</AppLink>
</div>
</div>
</div>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
