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
{"Home"}
</AppLink>
</li>
<li className="active">
{"Gift Days Report"}
</li>
</ol>
<div className="page-header">
<h1 >
{"Gift Days Report"}
</h1>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-gift" />
{" Gift Days Report "}
</div>
<div className="panel-body">
<LocalForm id="giftFilter" className="form-inline report-inline-filters" formKey="giftFilter">
<div className="report-filter-field"><label  htmlFor="from_date">
{"From:"}
</label>
<Field type="date" id="from_date" className="form-control" defaultValue="" as="input" /></div>
<div className="report-filter-field"><label className="" htmlFor="to_date">
{"To:"}
</label>
<Field type="date" id="to_date" className="form-control" defaultValue="" as="input" /></div>
<ActionButton type="submit" className="btn btn-primary">
{"Filter"}
</ActionButton>
<ActionButton type="button" id="resetFilter" className="btn btn-default">
{"Reset"}
</ActionButton>
</LocalForm>
<div className="gift-legend">
<span className="label label-success">
{"Days"}
</span>
<span className="label label-warning">
{"Pass"}
</span>
<span className="label label-primary">
{"Days + Pass"}
</span>
<span className="label label-danger">
{"Old Date"}
</span>
<span className="label label-info">
{"New Date"}
</span>
</div>
<DataTable tableKey="report/gift_days_report:table-0" columns={["#","Image","Plan Name","Start Date","Expiry Date","Name","Contact No","Gift Days","Old Date","New Date","Log By","Device","Remark","Date Time"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
</div>

</>;
}
