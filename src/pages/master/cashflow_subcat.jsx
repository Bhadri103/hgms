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
{" Manage Expense Category"}
</li>
</ol>
<div className="page-header">
<h1 >
{"Manage Expense Category "}
<AppLink className="btn btn-sm btn-teal" role="link" href="/local/add_cashflowsubcat">
{"Add Category "}
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
{" Manage Expense Category "}
</div>
<div className="panel-body">
<DataTable tableKey="master/cashflow_subcat:table-0" columns={["Expense Sub Category","Notes","Type","Action"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>

</>;
}
