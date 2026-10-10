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
{" Generate Salary "}
</li>
</ol>
<div className="page-header">
<h1 >
{"Generate Salary"}
</h1>
<LocalForm id="myform" formKey="myform">
<div className="form-group">
<label className="control-label">
{" Select Month Year "}
</label>
<div className="row">
<div className="col-md-4">
<Field name="mm" id="mm" className="form-control" defaultValue="10" as="select">
<option value="">
{"MM"}
</option>
<option value="01">
{"1"}
</option>
<option value="02">
{"2"}
</option>
<option value="03">
{"3"}
</option>
<option value="04">
{"4"}
</option>
<option value="05">
{"5"}
</option>
<option value="06">
{"6"}
</option>
<option value="07">
{"7"}
</option>
<option value="08">
{"8"}
</option>
<option value="09">
{"9"}
</option>
<option value="10">
{"10"}
</option>
<option value="11">
{"11"}
</option>
<option value="12">
{"12"}
</option>
</Field>
</div>
<div className="col-md-4">
<Field type="text" placeholder="YYYY" id="yyyy" name="yyyy" className="form-control" defaultValue="2026" as="input" />
</div>
<div className="col-md-4">
<ActionButton type="submit" className="btn btn-warning">
{"Submit"}
</ActionButton>
</div>
</div>
</div>
</LocalForm>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<AppIcon className="fa fa-external-link-square" />
{" Generate Salary "}
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="salary_module/attendance/generate_salary:table-0" columns={["Employee","Salary","Present","Absent","Half Day","Holiday","Status"]}/>
</LocalForm>
</div>
</div>
</div>
</div>
</div>



































































</>;
}
