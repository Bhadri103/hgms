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
{"Home"}
</AppLink>
</li>
<li className="active">
{"Coupon Management"}
</li>
</ol>
<div className="page-header">
<h1 >
<span className="page-title-with-count"><span>{"Coupon Management"}</span><CountBadge count="0"/></span>
<AppLink className="" role="link" href="/local/add_coupon">
<ActionButton className="btn btn-success" type="button">
{"Add Coupon"}
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
<AppIcon className="fa fa-tag" />
{" Coupon Management"}
</div>
<div className="panel-body">
<DataTable tableKey="master/manage_coupon:table-0" columns={["Code","Name","Type","Discount (%)","Min Amount","Max Discount","Valid From","Valid To","Usage Limit","Used","Organisation","Status","Show/Hide","Action"]} className="table table-striped table-bordered nowrap" />
</div>
</div>
</div>
</div>
</div>

</>;
}
