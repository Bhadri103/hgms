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
{" View Memberships"}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"View Live Memberships "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#AllMemberReportGymSwitcherModal">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
</div>
<Modal className="modal fade global-gym-switcher-modal" id="AllMemberReportGymSwitcherModal" tabIndex="-1" role="dialog">
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
{"Select a gym to open the correct member report."}
</p>
</div>
<div className="gym-switcher-body">
<div className="gym-switcher-list">
<AppLink href="/report/all_member_report?org_id=all&m_type=live" className="gym-switcher-item">
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
<AppLink href="/report/all_member_report?org_id=1&m_type=live" className="gym-switcher-item is-active">
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
<AppLink href="/report/all_member_report?org_id=2&m_type=live" className="gym-switcher-item">
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
<div className="col-md-12">
<div className="mem-stat-row">
<AppLink className="mem-stat-card c-blue" href="/report/all_member_report?m_type=all&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">

</path>
<circle cx="9" cy="7" r="4">

</circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87">

</path>
<path d="M16 3.13a4 4 0 0 1 0 7.75">

</path>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"1106"}
</div>
<div className="mem-stat-label">
{"All Memberships"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-green active" href="/report/all_member_report?m_type=live&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">

</path>
<polyline points="22 4 12 14.01 9 11.01">

</polyline>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"23"}
</div>
<div className="mem-stat-label">
{"Live Memberships"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-red" href="/report/all_member_report?m_type=exp&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10">

</circle>
<line x1="12" y1="8" x2="12" y2="12">

</line>
<line x1="12" y1="16" x2="12.01" y2="16">

</line>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"79"}
</div>
<div className="mem-stat-label">
{"Expired Memberships"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-teal" href="/report/all_member_report?m_type=vip&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">

</polygon>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"8"}
</div>
<div className="mem-stat-label">
{"VIP Memberships"}
</div>
</div>
</AppLink>
<AppLink className="mem-stat-card c-orange" href="/report/all_member_report?m_type=left&org_id=1">
<div className="mem-stat-icon">
<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<path d="M9 14l-4-4 4-4">

</path>
<path d="M5 10h10a4 4 0 0 1 4 4v0">

</path>
</svg>
</div>
<div className="mem-stat-info">
<div className="mem-stat-num">
{"1"}
</div>
<div className="mem-stat-label">
{"Left Memberships"}
</div>
</div>
</AppLink>
</div>
</div>
</div>
<div className="row">
<div id="sms_charge">

</div>
<div className="col-md-12">
<div className="panel panel-default member-report-card">
<div className="container">

</div>
<Field type="hidden" id="new_date_e" name="date_datepicker" as="input" />
<div className="panel-body">
<div className="member-report-toolbar">
<div className="member-report-summary">
<span className="member-report-summary-badge">
{"Smart Filters"}
</span>
</div>
<div className="member-filter-bar">
<div className="uniform-filter-field"><label htmlFor="type">Search field</label><Field name="type" id="type" as="select">
<option value="">
{"All"}
</option>
<option value="mem_id">
{" Prefix"}
</option>
<option value="name">
{"Name"}
</option>
<option value="mobile">
{"Mobile Number"}
</option>
<option value="gender">
{"Gender"}
</option>
<option value="uid">
{"Unique id"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="plan_id_filter">Membership plan</label><Field id="plan_id_filter" required={true} as="select">
<option value="">
{"Select Plan"}
</option>
<option value="67">
{"3 month plan .(4999)(90 Days)"}
</option>
<option value="76">
{"1 Month plan(1000)(30 Days)"}
</option>
<option value="79">
{"6 month plan(5000)(6 Months)"}
</option>
<option value="82">
{"Special Month Plan(2500)(30 Days)"}
</option>
<option value="84">
{"Quaterly plan(2500)(3 Months)"}
</option>
<option value="85">
{"Test Month 3(9999)(3 Months)"}
</option>
<option value="86">
{"Fast Monthly(1800)(1 Days)"}
</option>
<option value="87">
{"Daily Plan(100)(1 Days)"}
</option>
<option value="88">
{"3 month plan(8000)(90 Days)"}
</option>
<option value="92">
{"test plan monthly(8000)(1 Months)"}
</option>
<option value="93">
{"test 1 month(5000)(1 Months)"}
</option>
<option value="94">
{"weekly plan(500)(7 Days)"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="sort_by">Sort by</label><Field id="sort_by" className="member-sort-select" as="select">
<option value="">
{"Sort Members"}
</option>
<option value="name_asc">
{"Name (A-Z)"}
</option>
<option value="name_desc">
{"Name (Z-A)"}
</option>
<option value="expiry_asc">
{"Date of Expiry (First-Last)"}
</option>
<option value="expiry_desc">
{"Date of Expiry (Last-First)"}
</option>
<option value="joining_asc">
{"Date of Joining (First-Last)"}
</option>
<option value="joining_desc">
{"Date of Joining (Last-First)"}
</option>
<option value="member_id_asc">
{"Member ID (First-Last)"}
</option>
<option value="member_id_desc">
{"Member ID (Last-First)"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="gender_filter">Gender</label><Field id="gender_filter" as="select">
<option value="">
{"All Gender"}
</option>
<option value="Male">
{"Male"}
</option>
<option value="Female">
{"Female"}
</option>
<option value="Other">
{"Other"}
</option>
</Field></div>
</div>
</div>
<div className="member-date-filter-group">
<div className="uniform-filter-field"><label htmlFor="date_filter_type">Date filter</label><Field id="date_filter_type" as="select">
<option value="">
{"Select Date Filter"}
</option>
<option value="start_date">
{"Start Date"}
</option>
<option value="expiry_date">
{"Expiry Date"}
</option>
</Field></div>
<div className="uniform-filter-field"><label htmlFor="date_from">
{"From:"}
</label>
<Field type="date" id="date_from" title="Date From" as="input" /></div>
<div className="uniform-filter-field"><label htmlFor="date_to">
{"To:"}
</label>
<Field type="date" id="date_to" title="Date To" as="input" /></div>
<div className="member-filter-actions"><ActionButton type="button" id="member_date_filter_btn" className="member-filter-btn">
{"Filter"}
</ActionButton>
<ActionButton type="button" id="member_date_reset_btn" className="member-filter-reset-btn">
{"Reset"}
</ActionButton></div>
</div>
<div id="new_div">
<div className="member-table-wrap">
<DataTable tableKey="membership/all_member_live_report:table-0" columns={["#","Image","Plan Name","Start Date","Expiry Date","Name","Contact No","Amount","log By","Action"]} className="table table-striped table-bordered" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



</>;
}
