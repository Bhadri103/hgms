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
{" Manage Salary Structure "}
</li>
</ol>
<div className="salary-hero">
<div className="salary-hero-top">
<div >
<h1 >
{"Manage Salary Structure"}
</h1>
<p >
{"Review, edit, and maintain employee salary structures from one place."}
</p>
</div>
<div className="salary-hero-actions">
<AppLink className="btn btn-success" role="link" href="/local/add_salary_structure?org_id=1">
{"Add Salary Structure "}
</AppLink>
<div className="salary-gym">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_manage_salary_structure_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_manage_salary_structure_php" tabIndex="-1" role="dialog">
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
<AppLink href="/salary_module/manage_salary_structure?org_id=all" className="gym-switcher-item">
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
<AppLink href="/salary_module/manage_salary_structure?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/salary_module/manage_salary_structure?org_id=2" className="gym-switcher-item">
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
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default salary-panel">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
<span className="heading-text">
{"Manage Salary Structure"}
</span>
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="salary_module/manage_salary_structure:table-0" columns={["Employee","Salary","HRA/Special/ESI/PF","Allowed Leaves(Monthly)","Shift Hours","Shift","Action"]} className="table table-striped table-bordered table-hover table-full-width salary-table" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
