import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>




<div className="container sch-page">
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
{"Manage Class"}
</li>
</ol>
</div>
</div>
<div className="sch-hero">
<div className="sch-hero-top">
<div className="sch-hero-copy">
<h1 >
{"Manage Scheduling Classes"}
</h1>
<p >
{"Review upcoming and live classes, filter by trainer or category, and access mapped plans without digging through a long table."}
</p>
</div>
<AppLink className="sch-add-btn" role="link" href="/local/add_schclass">
<AppIcon className="fa fa-plus" />
<span >
{"Add Class"}
</span>
</AppLink>
</div>
</div>
<div className="sch-stats">
<div className="sch-stat-card">
<div className="sch-stat-label">
{"Total Classes"}
</div>
<div className="sch-stat-value">
{"19"}
</div>
<div className="sch-stat-note">
{"All active classes in this gym."}
</div>
</div>
<div className="sch-stat-card">
<div className="sch-stat-label">
{"Online"}
</div>
<div className="sch-stat-value">
{"2"}
</div>
<div className="sch-stat-note">
{"Virtual sessions and remote batches."}
</div>
</div>
<div className="sch-stat-card">
<div className="sch-stat-label">
{"Offline"}
</div>
<div className="sch-stat-value">
{"17"}
</div>
<div className="sch-stat-note">
{"On-floor or studio-based classes."}
</div>
</div>
<div className="sch-stat-card">
<div className="sch-stat-label">
{"Ongoing Today"}
</div>
<div className="sch-stat-value">
{"0"}
</div>
<div className="sch-stat-note">
{"Classes currently active on 09 Oct 2026."}
</div>
</div>
</div>
<div className="sch-filter-card">
<div className="sch-section-head">
<div >
<h3 >
{"Filter Classes"}
</h3>
<p >
{"Use targeted filters to narrow the list before searching."}
</p>
</div>
</div>
<div className="sch-filter-grid">
<div className="sch-filter-group">
<label htmlFor="classSearch">
{"Search"}
</label>
<Field type="text" id="classSearch" className="form-control" placeholder="Search class, category, trainer, location" as="input" />
</div>
<div className="sch-filter-group">
<label htmlFor="filterCategory">
{"Category"}
</label>
<Field id="filterCategory" className="form-control" as="select">
<option value="">
{"All categories"}
</option>
<option value="38">
{"cardio"}
</option>
<option value="39">
{"cardio"}
</option>
<option value="24">
{"Functional Fitness"}
</option>
<option value="25">
{"Functional Fitness 1"}
</option>
<option value="46">
{"Physio Therapy"}
</option>
<option value="45">
{"Pilates"}
</option>
<option value="32">
{"yoga"}
</option>
<option value="37">
{"yoga3"}
</option>
<option value="29">
{"zumba"}
</option>
<option value="31">
{"zumba"}
</option>
<option value="42">
{"zumba 1"}
</option>
</Field>
</div>
<div className="sch-filter-group">
<label htmlFor="filterTrainer">
{"Trainer"}
</label>
<Field id="filterTrainer" className="form-control" as="select">
<option value="">
{"All trainers"}
</option>
<option value="10080">
{"harsh"}
</option>
<option value="10082">
{"muskan "}
</option>
<option value="10083">
{"rina "}
</option>
<option value="10072">
{"Test Trainer"}
</option>
</Field>
</div>
<div className="sch-filter-group">
<label htmlFor="filterType">
{"Class Type"}
</label>
<Field id="filterType" className="form-control" as="select">
<option value="">
{"All types"}
</option>
<option value="online">
{"Online"}
</option>
<option value="offline">
{"Offline"}
</option>
</Field>
</div>
<div className="sch-filter-group">
<label htmlFor="filterStatus">
{"Date Status"}
</label>
<Field id="filterStatus" className="form-control" as="select">
<option value="">
{"All statuses"}
</option>
<option value="ongoing">
{"Ongoing"}
</option>
<option value="upcoming">
{"Upcoming"}
</option>
<option value="completed">
{"Completed"}
</option>
</Field>
</div>
</div>
<div className="sch-filter-actions">
<Field type="text" id="filterLocation" className="form-control" placeholder="Filter by location or meeting link" as="input" />
<ActionButton type="button" className="btn btn-default" id="resetFilters">
{"Reset"}
</ActionButton>
<ActionButton type="button" className="btn btn-primary" id="applyFilters">
{"Apply Filters"}
</ActionButton>
</div>
</div>
<div className="sch-table-card">
<div className="sch-table-head">
<div >
<h3 >
{"Class Directory"}
</h3>
<p >
{"Server-side list with plan access, edit actions, and date-based sorting."}
</p>
</div>
</div>
<div className="sch-table-wrap">
<DataTable tableKey="Class_booking/manage_schclass:table-0" columns={["#","Class Name","Category","Trainer","Start","End","Slots","Schedule","Type","Location","Plans","Action"]} className="table table-bordered table-striped" />
</div>
</div>
<Modal className="modal fade" id="planModal" tabIndex="-1" role="dialog">
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<ActionButton type="button" className="close" data-dismiss="modal">
{"×"}
</ActionButton>
<h4 className="modal-title">
{"Plans for: "}
<span id="modal_class_name">

</span>
</h4>
</div>
<div className="modal-body">
<DataTable tableKey="Class_booking/manage_schclass:table-1" columns={["Plan Name","Plan Amount","Trainer","Trainer Amount"]} className="table table-bordered" />
</div>
</div>
</div>
</Modal>
</div>

</>;
}
