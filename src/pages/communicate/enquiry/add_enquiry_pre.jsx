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
{" Add Enquiry "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add Enquiry "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_add_enquiry_pre_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_add_enquiry_pre_php" tabIndex="-1" role="dialog">
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
<AppLink href="/communicate/enquiry/add_enquiry_pre?org_id=all" className="gym-switcher-item">
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
<AppLink href="/communicate/enquiry/add_enquiry_pre?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/communicate/enquiry/add_enquiry_pre?org_id=2" className="gym-switcher-item">
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
{" Add Enquiry "}
</div>
<div className="panel-body">
<LocalForm role="form" id="form" formKey="form">
<div className="row">
<div className="col-md-12">
<div className="errorHandler alert alert-danger no-display">
<AppIcon className="fa fa-times-sign" />
{" You have some form errors. Please check below. "}
</div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-1">
{" Date "}
<span className="symbol required">

</span>
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" defaultValue="2026-10-09" className="form-control date-picker" name="date" as="input"  id="label-communicate-enquiry-add-enquiry-pre-jsx-1"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="invoice">
{" Enquiry No : "}
</label>
<Field type="text" className="form-control" id="invoice" name="enquiry_no" defaultValue="3216" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="user_id">
{" FC Name "}
</label>
<Field id="user_id" name="log_by" className="form-control search-select" required={true} defaultValue="10084" as="select">
<option value="">
{"Select Name"}
</option>
<option value="10001">
{"Sanjay(10001)"}
</option>
<option value="10084">
{"HGMS DEMO(10084)"}
</option>
<option value="10087">
{"testing permission(10087)"}
</option>
<option value="10091">
{"sfsdf(10091)"}
</option>
<option value="10097">
{"HGMS Trainer(10097)"}
</option>
<option value="10098">
{"New trainer(10098)"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-2">
{" Name : "}
</label>
<Field type="text" className="form-control" name="name" required={true} as="input"  id="label-communicate-enquiry-add-enquiry-pre-jsx-2"/>
</div>
<div className="form-group">
<label className="control-label" htmlFor="number">
{" Mobile : "}
</label>
<Field type="text" className="form-control" id="number" name="number" required={true} as="input" behavior="checkUniquenumber('check_mobile_inq_ajax.html?number='+this.value);" />
<div id="unique_username">

</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-3">
{" Address : "}
</label>
<Field name="address" className="form-control" defaultValue="" as="textarea"  id="label-communicate-enquiry-add-enquiry-pre-jsx-3"/>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="form-field-select-3">
{" Inquiry Type "}
</label>
<Field id="form-field-select-3" name="iinq_type" className="form-control search-select" as="select">
<option value="">
{"Select"}
</option>
<option value="10">
{"walk in"}
</option>
<option value="11">
{"call "}
</option>
<option value="12">
{"google"}
</option>
<option value="13">
{"abc"}
</option>
<option value="14">
{"Social Media"}
</option>
<option value="15">
{"xyz"}
</option>
<option value="16">
{"Jumba"}
</option>
<option value="17">
{"application"}
</option>
<option value="18">
{"call back"}
</option>
<option value="19">
{"Self"}
</option>
<option value="20">
{"reference"}
</option>
<option value="21">
{"instsgram"}
</option>
<option value="22">
{"student"}
</option>
<option value="23">
{"instagram"}
</option>
<option value="24">
{"facebook"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-4">
{" Package : "}
</label>
<Field className="form-control" name="package" as="select" id="label-communicate-enquiry-add-enquiry-pre-jsx-4">
<option value="">
{"Select Plan"}
</option>
<option value="47">
{"PT Plan 2 month(18000)"}
</option>
<option value="62">
{"Happy Hours(7999)"}
</option>
<option value="64">
{"PT Plan monthly(10000)"}
</option>
<option value="66">
{"6 month(6999)"}
</option>
<option value="67">
{"3 month plan .(4999)"}
</option>
<option value="73">
{"Yearly(10999)"}
</option>
<option value="74">
{"PT Plan 3 Month(25000)"}
</option>
<option value="76">
{"1 Month plan(1000)"}
</option>
<option value="77">
{"PT Plan 6 MOthn(18000)"}
</option>
<option value="78">
{"PT 6 Moths Advance(21000)"}
</option>
<option value="79">
{"6 month plan(5000)"}
</option>
<option value="81">
{"15 days(800)"}
</option>
<option value="82">
{"Special Month Plan(2500)"}
</option>
<option value="83">
{"Combo 1 year(12000)"}
</option>
<option value="84">
{"Quaterly plan(2500)"}
</option>
<option value="85">
{"Test Month 3(9999)"}
</option>
<option value="86">
{"Fast Monthly(1800)"}
</option>
<option value="87">
{"Daily Plan(100)"}
</option>
<option value="88">
{"3 month plan(8000)"}
</option>
<option value="89">
{"2 month(900)"}
</option>
<option value="90">
{"3 month(3000)"}
</option>
<option value="91">
{"2nd branch PT Plan(1200)"}
</option>
<option value="92">
{"test plan monthly(8000)"}
</option>
<option value="93">
{"test 1 month(5000)"}
</option>
<option value="94">
{"weekly plan(500)"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="form-field-select-3">
{" Customer Category "}
</label>
<Field id="form-field-select-3" name="icust_cat" className="form-control search-select" as="select">
<option value="">
{"Select"}
</option>
<option value="2">
{"student"}
</option>
<option value="3">
{"Cust1 sn 1097765"}
</option>
<option value="8">
{"police officer"}
</option>
<option value="9">
{"teacher"}
</option>
<option value="10">
{"reporter"}
</option>
<option value="11">
{"Company Worker"}
</option>
<option value="12">
{"businessman"}
</option>
<option value="13">
{"Doctor"}
</option>
<option value="14">
{"Advocate"}
</option>
<option value="15">
{"firemen"}
</option>
<option value="16">
{"private job"}
</option>
<option value="18">
{"engineer"}
</option>
<option value="19">
{"sales axecutive"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-5">
{" Follow up "}
<span className="symbol required">

</span>
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="ifollowup" autoComplete="off" required={true} as="input"  id="label-communicate-enquiry-add-enquiry-pre-jsx-5"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-6">
{" Follow up Time "}
</label>
<div className="input-group">
<Field type="time" className="form-control" name="ifollowuptime" autoComplete="off" as="input"  id="label-communicate-enquiry-add-enquiry-pre-jsx-6"/>
<span className="input-group-addon add-on">
<AppIcon className="fa fa-clock" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-communicate-enquiry-add-enquiry-pre-jsx-7">
{" Inquiry Description "}
<span className="symbol required">

</span>
</label>
<Field name="ientry" className="form-control" required={true} defaultValue="" as="textarea"  id="label-communicate-enquiry-add-enquiry-pre-jsx-7"/>
</div>
<div className="form-group">
<label className="control-label">
{" Lead Type "}
<span className="symbol required">

</span>
</label>
<div >
<label className="radio-inline">
<Field type="radio" name="lead_type" defaultValue="2" required={true} as="input" />
{" Hot "}
</label>
<label className="radio-inline">
<Field type="radio" name="lead_type" defaultValue="0" as="input" />
{" Warm "}
</label>
<label className="radio-inline">
<Field type="radio" name="lead_type" defaultValue="1" as="input" />
{" Cold "}
</label>
</div>
</div>
</div>
<div className="col-md-6">
<center >
<ActionButton className="btn btn-yellow btn-block" type="submit">
{" submit "}
</ActionButton>
</center>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
</div>



</>;
}
