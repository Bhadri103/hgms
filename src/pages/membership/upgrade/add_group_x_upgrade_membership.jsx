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

</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add GroupX Upgrade Membership "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_add_member_planaddon_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_add_member_planaddon_php" tabIndex="-1" role="dialog">
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
<AppLink href="/membership/upgrade/add_group_x_upgrade_membership?org_id=all" className="gym-switcher-item">
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
<AppLink href="/membership/upgrade/add_group_x_upgrade_membership?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/membership/upgrade/add_group_x_upgrade_membership?org_id=2" className="gym-switcher-item">
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
<div className="panel renewal-panel">
<div className="panel-heading renewal-hero">
<div className="renewal-hero-icon">
<AppIcon className="fa fa-external-link-square" />
</div>
<div >
<div className="renewal-hero-title">
{"Add GroupX Upgrade Membership"}
</div>
</div>
</div>
<div className="panel-body renewal-panel-body">
<LocalForm role="form" id="form" formKey="form">
<div className="row">
<div className="col-md-12">
<div className="errorHandler alert alert-danger no-display">
<AppIcon className="fa fa-times-sign" />
{" You have some Measurement errors. Please check below. "}
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 renewal-column">
<div className="renewal-section">
<div className="renewal-section-heading">
<span className="renewal-section-icon">
<AppIcon className="fa fa-pencil" />
</span>
<div >
<div className="renewal-section-title">
{"Add GroupX Upgrade Membership"}
</div>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-upgrade-add-group-x-upgrade-membership-jsx-1">
{" Date "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" name="date" required={true} className="form-control" readOnly={true} defaultValue="2026-10-09" as="input"  id="label-membership-upgrade-add-group-x-upgrade-membership-jsx-1"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="member_id">
{" Select Member "}
</label>
<Field id="member_id" name="member_id" className="form-control search-select" required={true} as="select">
<option value="">
{"Select Member"}
</option>
<option value="86">
{"sunny (95)"}
</option>
<option value="49">
{"cycy (20)"}
</option>
</Field>
</div>
<div className="form-group" id="pt_plans">
<label className="control-label">
{" Select Plan"}
<span className="text-danger">

</span>
</label>
<br  />
<Field className="form-control" id="plan" name="old_ptplan" as="select">
<option value="">
{"Select Plan"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label">
{" Add New Plan "}
</label>
<br  />
<Field className="form-control" name="plan_id" id="plan_newplan" as="select">
<option value="">
{"Select Plan"}
</option>
<option value="62" data-price="7999">
{"Happy Hours(7999)(360 Days)"}
</option>
<option value="66" data-price="6999">
{"6 month(6999)(180 Days)"}
</option>
<option value="73" data-price="10999">
{"Yearly(10999)(365 Days)"}
</option>
</Field>
</div>
<div id="charges">
<div className="form-group">
<label className="control-label">
{" Expiry Date "}
</label>
<br  />
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="expiry_datee" required={true} defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="p_amount">
{" Plan Amount "}
</label>
<Field type="text" className="form-control" id="p_amount" name="p_amount" placeholder="Input Amount" as="input" />
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="payment_method">
{" Payment Method "}
</label>
<Field id="payment_method" name="payment_method" className="form-control" as="select">
<option value="">
{"Select Your Payment Method"}
</option>
<option value="Cash">
{"Cash"}
</option>
<option value="Cheque">
{"Cheque"}
</option>
<option value="Card Payment">
{"Card Payment"}
</option>
<option value="Online Payment">
{"Online Payment"}
</option>
</Field>
</div>
<Field type="hidden" defaultValue="" id="forgin_ket_t" as="input" />
<div id="payment_method_data">

</div>
<div className="form-group">
<label className="control-label" htmlFor="paid_amount">
{" Paid Amount "}
</label>
<Field type="text" className="form-control" id="paid_amount" name="paid_amount" placeholder="Input Amount" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="discount_type">
{"Discount Type"}
</label>
<Field id="discount_type" name="discount_type" className="form-control" as="select">
<option value="">
{"Discount Type"}
</option>
<option value="percent">
{" Percent"}
</option>
<option value="amount">
{"Amount"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="discount">
{"Discount"}
</label>
<Field type="text" className="form-control" id="discount" name="discount" defaultValue="0" as="input" />
</div>
<div className="boxed">
<div className="form-group">
{" Is Plan Amount Tax Included? "}
<label className="checkbox-inline">
<Field type="checkbox" id="tax_include" name="tax_include" defaultValue="1" as="input" />
</label>
</div>
<div className="form-group">
<strong >
{"Tax"}
</strong>
<br  />
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="12" id="tax12" name="tax[]" as="input" />
{" CGST (2.5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="13" id="tax13" name="tax[]" as="input" />
{" VAT (2.5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="14" id="tax14" name="tax[]" as="input" />
{" gst (15) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="15" id="tax15" name="tax[]" as="input" />
{" gst (5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="16" id="tax16" name="tax[]" as="input" />
{" VAT (10) "}
</label>
<br  />
</div>
</div>
<div className="form-group" id="">
<label className="control-label">
{" Tax Amount "}
</label>
<Field type="hidden" className="form-control" id="tax_helper" defaultValue="0" readOnly={true} as="input" />
<Field type="hidden" className="form-control" id="enrollment" defaultValue="0" readOnly={true} as="input" />
<Field type="text" className="form-control" id="tax_amount" name="tax_amount" placeholder="Input Due Amount" defaultValue="0" readOnly={true} as="input" />
</div>
<div className="form-group" id="">
<label className="control-label" htmlFor="due_amount">
{" Due Amount "}
</label>
<Field type="text" className="form-control" id="due_amount" name="due_amount" placeholder="Input Due Amount" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-upgrade-add-group-x-upgrade-membership-jsx-2">
{" Due Amount Reminder "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="reminder_date" autoComplete="off" as="input"  id="label-membership-upgrade-add-group-x-upgrade-membership-jsx-2"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
</div>
</div>
<div className="col-md-6 renewal-column" id="membership">
<div className="renewal-section renewal-section-summary">
<div className="renewal-section-heading">
<span className="renewal-section-icon">
<AppIcon className="fa fa-id-card" />
</span>
<div >
<div className="renewal-section-title">
{"Membership No"}
</div>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="membership_id">
{" Membership No "}
</label>
<Field type="text" placeholder="" className="form-control" id="membership_id" name="membership_id[]" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="membership_id">
{" OLD Plan "}
</label>
<Field type="text" placeholder="" className="form-control" id="membership_id" name="" defaultValue="" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="membership_id">
{" OLD Plan Amount "}
</label>
<Field type="text" placeholder="" className="form-control" id="membership_id" name="" defaultValue="" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Start Date "}
</label>
<br  />
<Field type="text" placeholder="" className="form-control" id="start_datee" name="start_date" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Expiry Date "}
</label>
<br  />
<Field type="text" placeholder="" className="form-control" id="expiry_date" name="expiry_date" as="input" />
</div>
</div>
</div>
</div>
<div className="col-md-6 renewal-submit-row">
<div className="col-md-12">
<div className="member-access-card">
<div className="">
{"AI Access Control"}
</div>
<div className="">
{"Select the AI device group for biometric sync. If needed, assign a weekzone to apply timezone-based access restriction to this member."}
</div>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="report-field-membership-upgrade-add-group-x-upgrade-membership-jsx-1">
{"AI Device Group"}
</label>
<Field type="text" className="form-control" defaultValue="Group ID: 1 - Ai Bio (AYTC03019920)" readOnly={true} as="input"  id="report-field-membership-upgrade-add-group-x-upgrade-membership-jsx-1"/>
<Field type="hidden" name="ai_group_id" id="ai_group_id" defaultValue="1" as="input" />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="control-label" htmlFor="ai_weekzone_no">
{"AI Weekzone"}
</label>
<Field className="form-control" name="ai_weekzone_no" id="ai_weekzone_no" as="select">
<option value="0">
{"No Weekzone Restriction"}
</option>
</Field>
</div>
</div>
</div>
</div>
<Field type="submit" defaultValue="Submit" name="submit" className="btn btn-yellow btn-block renewal-submit-btn" as="input" />
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
