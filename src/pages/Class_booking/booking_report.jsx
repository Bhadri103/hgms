import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="container report-page">
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
{"Booking Report"}
</li>
</ol>
</div>
</div>
<div className="report-hero">
<div className="report-hero-top">
<div >
<h1 >
{"Booking Report"}
</h1>
<p >
{"Review session-wise occupancy, amount collected, and outstanding dues across each class date and timing slot."}
</p>
</div>
<AppLink className="report-action-btn" role="link" href="/local/add_booking">
<AppIcon className="fa fa-plus" />
<span >
{"Add Booking"}
</span>
</AppLink>
</div>
</div>
<div className="report-stats">
<div className="stat-card">
<div className="stat-label">
{"Active Sessions"}
</div>
<div className="stat-value">
{"24"}
</div>
<div className="stat-note">
{"Grouped class dates and timing slots."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Booked Seats"}
</div>
<div className="stat-value">
{"9"}
</div>
<div className="stat-note">
{"Confirmed and waiting seats together."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Collected"}
</div>
<div className="stat-value">
{"0.00"}
</div>
<div className="stat-note">
{"Payments already received."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Outstanding"}
</div>
<div className="stat-value">
{"0.00"}
</div>
<div className="stat-note">
{"Balance still to be collected."}
</div>
</div>
</div>
<div className="filter-card">
<div className="section-head">
<h3 >
{"Filter Sessions"}
</h3>
<p >
{"Narrow the report by class, date range, or a search term like day or time."}
</p>
</div>
<div className="filter-grid">
<div className="filter-group">
<label htmlFor="reportSearch">
{"Search"}
</label>
<Field type="text" id="reportSearch" className="form-control" placeholder="Class, day, date, start time" as="input" />
</div>
<div className="filter-group">
<label htmlFor="reportClass">
{"Class"}
</label>
<Field id="reportClass" className="form-control" as="select">
<option value="">
{"All classes"}
</option>
<option value="16">
{"4 Day Week"}
</option>
<option value="14">
{"5PM Advanced"}
</option>
<option value="17">
{"6:30 PM Advanced "}
</option>
<option value="30">
{"cardio(1)"}
</option>
<option value="29">
{"cardio(1)"}
</option>
<option value="40">
{"Physio Therapy 15"}
</option>
<option value="39">
{"Pilates Trainer"}
</option>
<option value="26">
{"yoga class"}
</option>
<option value="27">
{"yoga class"}
</option>
<option value="28">
{"yoga class3"}
</option>
<option value="23">
{"yoga classes"}
</option>
<option value="22">
{"zumba class"}
</option>
<option value="21">
{"zumba class"}
</option>
<option value="19">
{"zumba class"}
</option>
<option value="18">
{"zumba class"}
</option>
<option value="25">
{"zumba classs 1"}
</option>
<option value="34">
{"zumba classs 1"}
</option>
<option value="35">
{"zumba classs 1"}
</option>
<option value="38">
{"zumba classs 1"}
</option>
</Field>
</div>
<div className="filter-group">
<label htmlFor="reportFrom">
{"From Date"}
</label>
<Field type="date" id="reportFrom" className="form-control" as="input" />
</div>
<div className="filter-group">
<label htmlFor="reportTo">
{"To Date"}
</label>
<Field type="date" id="reportTo" className="form-control" as="input" />
</div>
</div>
<div className="filter-actions">
<ActionButton type="button" className="btn btn-default" id="resetReportFilters">
{"Reset"}
</ActionButton>
<ActionButton type="button" className="btn btn-primary" id="applyReportFilters">
{"Apply Filters"}
</ActionButton>
</div>
</div>
<div className="table-card">
<div className="table-head">
<h3 >
{"Session Report"}
</h3>
<p >
{"Each row represents one class slot on one specific date."}
</p>
</div>
<div className="table-wrap">
<DataTable tableKey="Class_booking/booking_report:table-0" columns={["#","Class Name","Class Date","Day","Time","Slots","Booked","Status Mix","Total Amount","Total Paid","Total Due","Action"]} className="table table-bordered table-striped" />
</div>
</div>
</div>

</>;
}
