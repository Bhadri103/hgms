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
{" Manage Offer/Gallery Image"}
</li>
</ol>
<div className="page-header">
<h1 >
<span className="page-title-with-count"><span>{"Manage Offer/Gallery Image"}</span><CountBadge count="5"/></span>
<AppLink className="" role="link" href="/local/add_offer_gal">
<ActionButton className="btn btn-success" type="button">
{"Add Offer/Gallery Image"}
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
{" Offer/Gallery Image"}
</div>
<div className="container">

</div>
<div className="panel-body">
<div id="sms_charge">

</div>
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="manage_offer_gal:table-0" columns={["Image","Image Name","Type","Assigned Gym","Action"]} className="table table-striped table-bordered nowrap" />
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
