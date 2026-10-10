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
{" View User Logs"}
</li>
</ol>
<div className="page-header">
<h1 >
<span className="page-title-with-count"><span>{"View User Logs"}</span><CountBadge count="8"/></span>
</h1>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" View User Logs"}
</div>
<div className="container">

</div>
<div className="panel-body">
<div id="sms_charge">

</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="master/user_log:table-0" columns={["Join Date","Page Name","User Type","Mobile","username","View Log"]} className="table table-striped table-bordered nowrap" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
