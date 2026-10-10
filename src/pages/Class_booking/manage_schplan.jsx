import CountBadge from '@/components/CountBadge';
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
{" Manage Scheduling Plan"}
</li>
</ol>
<div className="page-header">
<h1 >
<span className="page-title-with-count"><span>{"Manage Scheduling Plan"}</span><CountBadge count="0"/></span>
<AppLink className="" role="link" href="/local/add_schplan">
<ActionButton className="btn btn-success" type="button">
{"Add Scheduling Plan"}
</ActionButton>
</AppLink>
</h1>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Manage Scheduling Plan"}
</div>
<div className="container">

</div>
<div className="panel-body">
<div id="sms_charge">

</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="Class_booking/manage_schplan:table-0" columns={["Scheduling Category","Scheduling Plan","Session/Pass","Plan Amount","Assigned Gym","Action"]} className="table table-striped table-bordered nowrap" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
