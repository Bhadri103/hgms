import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="container booking-page">
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
{"Manage Booking"}
</li>
</ol>
</div>
</div>
<div className="booking-hero">
<div className="booking-hero-top">
<div >
<h1 >
{"Manage Class Bookings"}
</h1>
<p >
{"Track booking status, payment collection, and outstanding balances from one filtered view. Search by member, invoice, class, or date."}
</p>
</div>
<AppLink className="booking-add-btn" role="link" href="/local/add_booking">
<AppIcon className="fa fa-plus" />
<span >
{"Add Booking"}
</span>
</AppLink>
</div>
</div>
<div className="booking-stats">
<div className="stat-card">
<div className="stat-label">
{"Total Bookings"}
</div>
<div className="stat-value">
{"9"}
</div>
<div className="stat-note">
{"All active bookings in this gym."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Confirmed"}
</div>
<div className="stat-value">
{"9"}
</div>
<div className="stat-note">
{"Booked and confirmed seats."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Waiting"}
</div>
<div className="stat-value">
{"0"}
</div>
<div className="stat-note">
{"Pending or waiting list entries."}
</div>
</div>
<div className="stat-card">
<div className="stat-label">
{"Total Due"}
</div>
<div className="stat-value">
{"0.00"}
</div>
<div className="stat-note">
{"0 bookings still have outstanding balance."}
</div>
</div>
</div>
<div className="filter-card">
<div className="section-head">
<h3 >
{"Filter Bookings"}
</h3>
<p >
{"Mix search with class, status, payment state, and date range filters."}
</p>
</div>
<div className="filter-grid">
<div className="filter-group">
<label htmlFor="bookingSearch">
{"Search"}
</label>
<Field type="text" id="bookingSearch" className="form-control" placeholder="Invoice, member, mobile, class, plan" as="input" />
</div>
<div className="filter-group">
<label htmlFor="filterClass">
{"Class"}
</label>
<Field id="filterClass" className="form-control" as="select">
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
<label htmlFor="filterStatus">
{"Booking Status"}
</label>
<Field id="filterStatus" className="form-control" as="select">
<option value="">
{"All statuses"}
</option>
<option value="confirmed">
{"Confirmed"}
</option>
<option value="waiting">
{"Waiting"}
</option>
<option value="cancel">
{"Cancel"}
</option>
</Field>
</div>
<div className="filter-group">
<label htmlFor="filterPaymentState">
{"Payment State"}
</label>
<Field id="filterPaymentState" className="form-control" as="select">
<option value="">
{"All payment states"}
</option>
<option value="paid">
{"Paid"}
</option>
<option value="partial">
{"Partial"}
</option>
<option value="due">
{"Unpaid"}
</option>
</Field>
</div>
<div className="filter-group">
<label htmlFor="filterFrom">
{"From Date"}
</label>
<Field type="date" id="filterFrom" className="form-control" as="input" />
</div>
<div className="filter-group">
<label htmlFor="filterTo">
{"To Date"}
</label>
<Field type="date" id="filterTo" className="form-control" as="input" />
</div>
</div>
<div className="filter-actions">
<ActionButton type="button" className="btn btn-default" id="resetFilters">
{"Reset"}
</ActionButton>
<ActionButton type="button" className="btn btn-primary" id="applyFilters">
{"Apply Filters"}
</ActionButton>
</div>
</div>
<div className="table-card">
<div className="table-head">
<div >
<h3 >
{"Booking Directory"}
</h3>
<p >
{"Use the payment button to collect dues and the list button to inspect payment history."}
</p>
</div>
</div>
<div className="table-wrap">
<DataTable tableKey="Class_booking/manage_booking:table-0" columns={["#","Invoice","Member","Date","Class","Plan","Timing","Total","Paid","Due","Status","Actions"]} className="table table-bordered table-striped" />
</div>
</div>
</div>

</>;
}
