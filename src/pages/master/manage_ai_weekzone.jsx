import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="container">
<div className="ai-week-shell">
<div className="ai-week-toolbar">
<div className="ai-week-toolbar-top">
<div className="ai-week-toolbar-copy">
<h1 className="ai-week-title">
{"AI Weekzones"}
</h1>
<p className="ai-week-subtitle">
{"Map a timezone to each day for 8 weekzone records. Use 0 if a day should have no access zone. This restriction feature is supported only on AI devices."}
</p>
</div>
<div className="ai-week-toolbar-actions">
<div className="ai-week-group-switch">
<Field className="form-control" defaultValue="1" as="select" behavior="switchAiWeekzoneGroup(this.value)">
<option value="1">
{" Group ID: 1 - Ai Bio (AYTC03019920) "}
</option>
</Field>
</div>
<div className="btn-group ai-week-gym-switch">
<ActionButton type="button" className="btn btn-dark-grey" behavior="openAiWeekzoneGymModal(); return false;">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
</div>
</div>
</div>
</div>
<div className="ai-week-help">
<div className="ai-week-help-title">
{"How It Works"}
</div>
<ul >
<li >
{"Select the "}
<strong >
{"gym"}
</strong>
{" first, then select the required "}
<strong >
{"group"}
</strong>
{" if multiple AI groups exist in that gym."}
</li>
<li >
{"Each group keeps its own weekzone mapping. Saving here updates only the selected group and pushes it to that group."}
</li>
<li >
{"Each day should be mapped to a "}
<strong >
{"timezone number"}
</strong>
{" from the AI Timezones page."}
</li>
<li >
<strong >
{"Zone 5 - Holiday"}
</strong>
{" is the no-timing zone. Use it on any day that should block access completely."}
</li>
<li >
{"Set up the time windows on "}
<strong >
{"AI Timezones"}
</strong>
{" first, then use this page to apply those zone numbers across Monday to Sunday."}
</li>
</ul>
</div>
<LocalForm  formKey="form-0">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<Field type="hidden" name="group_id" defaultValue="1" as="input" />
<div className="ai-week-panel">
<div className="table-responsive">
<table className="table table-bordered weekzone-table">
<thead >
<tr >
<th className="">
{"No."}
</th>
<th className="">
{"Weekzone Name"}
</th>
<th >
{"Monday"}
</th>
<th >
{"Tuesday"}
</th>
<th >
{"Wednesday"}
</th>
<th >
{"Thursday"}
</th>
<th >
{"Friday"}
</th>
<th >
{"Saturday"}
</th>
<th >
{"Sunday"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[1]" defaultValue="Gym Timming" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[1]" defaultValue="1" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[2]" defaultValue="Ladies Timing" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[2]" defaultValue="2" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[3]" defaultValue="Gents Timing" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[3]" defaultValue="3" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[4]" defaultValue="Happy Hours" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[4]" defaultValue="4" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[5]" defaultValue="Holiday" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[5]" defaultValue="5" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"6"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[6]" defaultValue="24 hour Working" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[6]" defaultValue="6" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"7"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[7]" defaultValue="Weekzone 7" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[7]" defaultValue="7" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
<tr >
<td >
{"8"}
</td>
<td >
<Field type="text" className="form-control" name="weekzone_name[8]" defaultValue="Weekzone 8" as="input" />
</td>
<td >
<Field className="form-control" name="monday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="tuesday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="wednesday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="thursday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="friday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="saturday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
<td >
<Field className="form-control" name="sunday_zone[8]" defaultValue="8" as="select">
<option value="0">
{"0 - No zone"}
</option>
<option value="1">
{"1"}
</option>
<option value="2">
{"2"}
</option>
<option value="3">
{"3"}
</option>
<option value="4">
{"4"}
</option>
<option value="5">
{"5"}
</option>
<option value="6">
{"6"}
</option>
<option value="7">
{"7"}
</option>
<option value="8">
{"8"}
</option>
</Field>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="">
<ActionButton type="submit" name="save_ai_weekzones" className="btn btn-primary">
{"Save Weekzones"}
</ActionButton>
</div>
</LocalForm>
</div>
</div>

</>;
}
