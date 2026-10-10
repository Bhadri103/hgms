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

</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Assign Workout"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_assign_workout_plan_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_assign_workout_plan_php" tabIndex="-1" role="dialog">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=all" className="gym-switcher-item">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=2" className="gym-switcher-item">
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
{" Assign Workout "}
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
<Field type="checkbox" defaultValue="8" name="category[]" className="grey" as="input" />
{" Muscle maintain 2 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="3" name="category[]" className="grey" as="input" />
{" Fat Loss 3 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="2" name="category[]" className="grey" as="input" />
{" Fat Loss 2 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="5" name="category[]" className="grey" as="input" />
{" Muscle Gain 2 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="7" name="category[]" className="grey" as="input" />
{" Muscle Maintain 1 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="9" name="category[]" className="grey" as="input" />
{" Muscle Maintain 3 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="6" name="category[]" className="grey" as="input" />
{" Muscle Gain 3 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="19" name="category[]" className="grey" as="input" />
{" Single Muscle Training + Fat Loss "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="20" name="category[]" className="grey" as="input" />
{" Single muscle Trainig + Muscle Gain "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="11" name="category[]" className="grey" as="input" />
{" Strength Gain 1 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="1" name="category[]" className="grey" as="input" />
{" Fat Loss 1 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="21" name="category[]" className="grey" as="input" />
{" Fat Loss For Knee injury "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="22" name="category[]" className="grey" as="input" />
{" Fat Loss + Muscle gain Spine Injury "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="24" name="category[]" className="grey" as="input" />
{" Sports Special "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="12" name="category[]" className="grey" as="input" />
{" Fat Loss 1 (Level 2) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="13" name="category[]" className="grey" as="input" />
{" Fat Loss 2 (Level 2) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="17" name="category[]" className="grey" as="input" />
{" Fat Loss 3 (Level 2) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="28" name="category[]" className="grey" as="input" />
{" Starting 2 Week Workout Plan For Beginner "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="43" name="category[]" className="grey" as="input" />
{" cric training "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="44" name="category[]" className="grey" as="input" />
{" Weight Loss "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="50" name="category[]" className="grey" as="input" />
{" Weight Loss 1 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="10" name="category[]" className="grey" as="input" />
{" Strength Gain 2 "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="56" name="category[]" className="grey" as="input" />
</label>
</div>
<div className="form-group col-md-6">
<label className="control-label" htmlFor="member_id">
{" Member Name: "}
</label>
<Field id="member_id" multiple={true} name="member_id[]" className="form-control search-select" required={true} as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
<br  />
<br  />
<ActionButton type="submit" className="btn btn-warning">
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

<Modal className="modal fade" id="OrgModal" tabIndex="-1" role="dialog">
<div className="modal-dialog modal-sm">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="myModalLabel">
{"Please select organisation"}
</h4>
</div>
<div className="modal-body row">
<div className="col-md-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_assign_workout_plan_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_assign_workout_plan_php" tabIndex="-1" role="dialog">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=all" className="gym-switcher-item">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/engagement/old/workout-plan/assign_workout_plan?org_id=2" className="gym-switcher-item">
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
</Modal>











<Modal id="event-management" className="modal fade" tabIndex="-1" data-width="760">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<ActionButton type="button" className="close" data-dismiss="modal" aria-hidden="true">
{" × "}
</ActionButton>
<h4 className="modal-title">
{"Event Management"}
</h4>
</div>
<div className="modal-body">

</div>
<div className="modal-footer">
<ActionButton type="button" data-dismiss="modal" className="btn btn-light-grey">
{" Close "}
</ActionButton>
<ActionButton type="button" className="btn btn-danger remove-event no-display">
<AppIcon className="fa fa-trash-o" />
{" Delete Event "}
</ActionButton>
<ActionButton type="submit" className="btn btn-success save-event">
<AppIcon className="fa fa-check" />
{" Save "}
</ActionButton>
</div>
</div>
</div>
</Modal>





































































</>;
}
