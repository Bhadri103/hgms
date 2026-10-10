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
{" Add Attendance "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Assign Diet Plan"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_assign_dietplan_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_assign_dietplan_php" tabIndex="-1" role="dialog">
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
<AppLink href="/engagement/old/diet/assign_dietplan?org_id=all" className="gym-switcher-item">
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
<AppLink href="/engagement/old/diet/assign_dietplan?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/engagement/old/diet/assign_dietplan?org_id=2" className="gym-switcher-item">
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
{" Assign Diet Plan "}
</div>
<div className="panel-body">
<div className="row">
<div className="col-sm-12 col-md-12">
<LocalForm id="myform" formKey="myform">
<div className="form-group">
<label className="control-label">
{" Category Name: "}
</label>
<br  />
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Keto" name="category[]" className="grey" as="input" />
{" Keto "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Keto 1" name="category[]" className="grey" as="input" />
{" Keto 1 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Fat Losst" name="category[]" className="grey" as="input" />
{" Fat Losst "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="sdsdfsdf" name="category[]" className="grey" as="input" />
{" sdsdfsdf "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="sdsdfsdfsdfsdf" name="category[]" className="grey" as="input" />
{" sdsdfsdfsdfsdf "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="sdfdsfdsf" name="category[]" className="grey" as="input" />
{" sdfdsfdsf "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="keto" name="category[]" className="grey" as="input" />
{" keto "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="weight loss" name="category[]" className="grey" as="input" />
{" weight loss "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="shuger" name="category[]" className="grey" as="input" />
{" shuger "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="shuger" name="category[]" className="grey" as="input" />
{" shuger "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="shuger" name="category[]" className="grey" as="input" />
{" shuger "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="shuger" name="category[]" className="grey" as="input" />
{" shuger "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="shuger" name="category[]" className="grey" as="input" />
{" shuger "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Weight Gain Diet Chart" name="category[]" className="grey" as="input" />
{" Weight Gain Diet Chart "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Self - Na" name="category[]" className="grey" as="input" />
{" Self - Na "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Weight Loss" name="category[]" className="grey" as="input" />
{" Weight Loss "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="weight loss javad" name="category[]" className="grey" as="input" />
{" weight loss javad "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="teadsads" name="category[]" className="grey" as="input" />
{" teadsads "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="weight loss " name="category[]" className="grey" as="input" />
{" weight loss "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="Abvc" name="category[]" className="grey" as="input" />
{" Abvc "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="wait gain ravina" name="category[]" className="grey" as="input" />
{" wait gain ravina "}
</label>
</div>
<div className="form-group col-md-6">
<label className="control-label" htmlFor="member_id">
{" Member Name: "}
</label>
<Field multiple={true} id="member_id" name="member_id[]" className="form-control search-select" required={true} as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
<br  />
<br  />
<Field type="hidden" className="form-control" name="org_id" defaultValue="1" as="input" />
<ActionButton type="submit" className="btn btn-success">
{"Submit"}
</ActionButton>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
