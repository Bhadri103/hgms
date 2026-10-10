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
<AppIcon className="fa-solid fa-house" />
<AppLink href="/home">

</AppLink>
</li>
<li className="active">

</li>
</ol>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
{" Logged Users "}
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="master/logged_user:table-0" columns={["Name","Last Active","Device ID","Mac ID / IP Address","Device Type","Status","Verified","Action"]} className="table table-striped table-bordered table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
