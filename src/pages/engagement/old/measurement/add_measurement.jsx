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
{" Add Measurement "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add Measurement"}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_add_measurement_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_add_measurement_php" tabIndex="-1" role="dialog">
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
<AppLink href="/engagement/old/measurement/add_measurement?org_id=all" className="gym-switcher-item">
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
<AppLink href="/engagement/old/measurement/add_measurement?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/engagement/old/measurement/add_measurement?org_id=2" className="gym-switcher-item">
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
{" Add Measurement "}
</div>
<div className="panel-body">
<LocalForm role="form" id="form" formKey="form">
<div className="row">
<div className="col-md-12">
<div className="errorHandler alert alert-danger no-display">
<AppIcon className="fa fa-times-sign" />
{" You have some Measurement errors. Please check below. "}
</div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="label-engagement-old-measurement-add-measurement-jsx-1">
{" Date "}
</label>
<Field type="date" className="form-control" name="date" required={true} defaultValue="2026-10-09" as="input"  id="label-engagement-old-measurement-add-measurement-jsx-1"/>
</div>
<div className="form-group">
<label className="control-label" htmlFor="member_id">
{" Member Name "}
</label>
<Field id="member_id" name="member_id" className="form-control search-select" required={true} as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="chest">
{" Age "}
</label>
<Field type="text" placeholder="Input Height" className="form-control" id="chest" name="age" required={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="chest">
{" Height "}
</label>
<Field type="text" placeholder="Input Height" className="form-control" id="chest" name="height" required={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="age">
{" Weight "}
</label>
<Field type="text" placeholder="Input Weight" className="form-control" id="age" name="weight" required={true} as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Fat % "}
</label>
<Field type="text" placeholder="Input Fat %" className="form-control" id="" name="fat" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Visceral Fat % "}
</label>
<Field type="text" placeholder="Input Visceral Fat %" className="form-control" id="" name="visceral_fat" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" RM(Calories) "}
</label>
<br  />
<Field type="text" placeholder="Input RM(Calories)" className="form-control" id="" name="rm_calories" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" BMI "}
</label>
<br  />
<Field type="text" placeholder="Input BMI" className="form-control" id="" name="bmi" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Body Age "}
</label>
<br  />
<Field type="text" placeholder="Input Body Age" className="form-control" id="" name="body_age" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" BMR "}
</label>
<br  />
<Field type="text" placeholder="Input BMR" className="form-control" id="" name="bmr" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Lean Muscle % "}
</label>
<br  />
<Field type="text" placeholder="Input Lean Muscle %" className="form-control" id="" name="lean" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="chest">
{" Neck "}
</label>
<Field type="text" placeholder="Input Neck" className="form-control" id="chest" name="neck" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="age">
{" Shoulder (Round) "}
</label>
<Field type="text" placeholder="Input Shoulder (Round)" className="form-control" id="age" name="shoulder" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="chest">
{" Chest "}
</label>
<Field type="text" placeholder="Input Chest" className="form-control" id="chest" name="chest" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Upper Abs "}
</label>
<Field type="text" placeholder="Input Upper Abs" className="form-control" id="" name="upper_abs" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Navel Point "}
</label>
<br  />
<Field type="text" placeholder="Input Navel Point" className="form-control" id="" name="navel_point" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="age">
{" Waist "}
</label>
<Field type="text" placeholder="Input Waist" className="form-control" id="age" name="waist" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Measure Pic "}
<span className="symbol required">

</span>
</label>
<br  />
<br  />
<label className="col-sm-3 control-label">
{" Upload Image "}
<span className="symbol required">

</span>
</label>
<div className="col-sm-9">
<div className="fileupload fileupload-new" data-provides="fileupload">
<div className="fileupload-preview fileupload-exists thumbnail">

</div>
<div className="user-edit-image-buttons">
<Field type="file" name="measure_pic" id="image" accept="image/*" as="input" behavior="validate(this.value)" />
<AppLink href="#" className="btn fileupload-exists btn-light-flat-black" data-dismiss="fileupload">
<AppIcon className="fa fa-times" />
{" Remove "}
</AppLink>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="age">
{" Arms "}
</label>
<Field type="text" placeholder="Input Arms" className="form-control" id="age" name="arms" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="age">
{" Fore Arm "}
</label>
<Field type="text" placeholder="Input Fore Arm" className="form-control" id="age" name="forearm" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Hips "}
</label>
<Field type="text" placeholder="Input Hip" className="form-control" id="" name="hip" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Thigh "}
</label>
<Field type="text" placeholder="Input Calves" className="form-control" id="" name="thigh" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Calves "}
</label>
<Field type="text" placeholder="Input Calves" className="form-control" id="" name="calves" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" R Arm "}
</label>
<br  />
<Field type="text" placeholder="Input R Arm" className="form-control" id="" name="r_arm" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" L Arm "}
</label>
<br  />
<Field type="text" placeholder="Input L Arm" className="form-control" id="" name="l_arm" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Mid Upper Arm Circunference "}
</label>
<br  />
<Field type="text" placeholder="Input Mid Upper Arm Circunference" className="form-control" id="" name="midarm" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" L Navel Point "}
</label>
<br  />
<Field type="text" placeholder="Input L Navel Point" className="form-control" id="" name="l_navel_point" as="input" />
</div>
<div className="form-group">
<br  />
<label className="control-label">
{" U Thigh "}
</label>
<Field type="text" placeholder="Input Thigh" className="form-control" id="" name="thighs" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Thigh R "}
</label>
<br  />
<Field type="text" placeholder="Input Thigh R" className="form-control" id="" name="thing_r" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Thigh L "}
</label>
<br  />
<Field type="text" placeholder="Input Thigh L" className="form-control" id="" name="thing_l" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" R calves "}
</label>
<br  />
<Field type="text" placeholder="Input R calves" className="form-control" id="" name="r_calves" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" L calves "}
</label>
<br  />
<Field type="text" placeholder="Input L calves" className="form-control" id="" name="l_calves" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Remark "}
</label>
<br  />
<Field className="form-control" name="notes" defaultValue=" " as="textarea" />
</div>
<div className="form-group">
<label className="control-label">
{" Goal "}
</label>
<br  />
<Field type="text" placeholder="Input Goal" className="form-control" id="" name="goal" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Duration "}
</label>
<br  />
<Field type="text" placeholder="Input Duration" className="form-control" id="" name="duration" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Next Measurement Date "}
</label>
<br  />
<Field type="date" placeholder="Input Date" className="form-control" id="" name="next_measure" defaultValue="2026-11-08" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Prescribed By: "}
</label>
<br  />
<Field type="text" placeholder="Input trainer" className="form-control" id="" name="trainer" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Current Pic "}
<span className="symbol required">

</span>
</label>
<br  />
<br  />
<label className="col-sm-3 control-label">
{" Upload Image "}
<span className="symbol required">

</span>
</label>
<div className="col-sm-9">
<div className="fileupload fileupload-new" data-provides="fileupload">
<div className="fileupload-preview fileupload-exists thumbnail">

</div>
<div className="user-edit-image-buttons">
<Field type="file" name="current_pic" id="image" accept="image/*" as="input" behavior="validate(this.value)" />
<AppLink href="#" className="btn fileupload-exists btn-light-flat-black" data-dismiss="fileupload">
<AppIcon className="fa fa-times" />
{" Remove "}
</AppLink>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-12">
<div className="col-md-4">
<Field type="submit" name="submit" className="btn btn-yellow btn-block" as="input" />
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
