import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="container">
<div className="ai-access-shell">
<div className="ai-access-toolbar">
<div className="ai-access-toolbar-top">
<div className="ai-access-toolbar-copy">
<h1 className="ai-access-title">
{"AI Timezones"}
</h1>
<p className="ai-access-subtitle">
{"Configure up to 8 timezone records per gym. Each timezone can hold 5 access windows. This restriction feature is supported only on AI devices."}
</p>
</div>
<div className="ai-access-toolbar-actions">
<div className="ai-access-group-switch">
<Field className="form-control" defaultValue="1" as="select" behavior="switchAiTimezoneGroup(this.value)">
<option value="1">
{" Group ID: 1 - Ai Bio (AYTC03019920) "}
</option>
</Field>
</div>
<div className="btn-group ai-access-gym-switch">
<ActionButton type="button" className="btn btn-dark-grey" behavior="openAiTimezoneGymModal(); return false;">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
</div>
</div>
</div>
</div>
<div className="ai-access-help">
<div className="ai-access-help-title">
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
{" if that gym has multiple AI device groups."}
</li>
<li >
{"Each group keeps its own timezone setup. Saving here updates only the selected group and pushes it to that group."}
</li>
<li >
{"A timezone can contain up to "}
<strong >
{"5 time slots"}
</strong>
{". Any blank slot is ignored by the device."}
</li>
<li >
<strong >
{"Zone 5 - Holiday"}
</strong>
{" means no access timing. Leave all time slots blank for that zone."}
</li>
<li >
{"After saving timezones here, use "}
<strong >
{"AI Weekzones"}
</strong>
{" to assign those timezone numbers to each day of the week."}
</li>
</ul>
</div>
<LocalForm  formKey="form-0">
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<Field type="hidden" name="group_id" defaultValue="1" as="input" />
<div className="ai-access-grid">
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 1"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-1">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[1]" className="form-control" defaultValue="Gym Timing" as="input"  id="label-master-manage-ai-timezone-jsx-1"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[1][1]" defaultValue="05:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[1][1]" defaultValue="08:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[1][2]" defaultValue="10:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[1][2]" defaultValue="13:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[1][3]" defaultValue="10:00:05" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[1][3]" defaultValue="14:05:16" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[1][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[1][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[1][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[1][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 2"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-2">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[2]" className="form-control" defaultValue="Ladies Only  Timing" as="input"  id="label-master-manage-ai-timezone-jsx-2"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[2][1]" defaultValue="10:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[2][1]" defaultValue="16:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[2][2]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[2][2]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[2][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[2][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[2][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[2][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[2][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[2][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 3"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-3">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[3]" className="form-control" defaultValue="Gents Timing" as="input"  id="label-master-manage-ai-timezone-jsx-3"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[3][1]" defaultValue="05:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[3][1]" defaultValue="10:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[3][2]" defaultValue="16:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[3][2]" defaultValue="22:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[3][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[3][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[3][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[3][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[3][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[3][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 4"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-4">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[4]" className="form-control" defaultValue="Happy Hours" as="input"  id="label-master-manage-ai-timezone-jsx-4"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[4][1]" defaultValue="10:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[4][1]" defaultValue="14:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[4][2]" defaultValue="15:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[4][2]" defaultValue="17:00:00" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[4][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[4][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[4][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[4][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[4][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[4][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 5"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-5">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[5]" className="form-control" defaultValue="Holiday" as="input"  id="label-master-manage-ai-timezone-jsx-5"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[5][1]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[5][1]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[5][2]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[5][2]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[5][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[5][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[5][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[5][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[5][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[5][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 6"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-6">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[6]" className="form-control" defaultValue="24 hour Working" as="input"  id="label-master-manage-ai-timezone-jsx-6"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[6][1]" defaultValue="00:00:00" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[6][1]" defaultValue="23:59:00" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[6][2]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[6][2]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[6][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[6][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[6][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[6][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[6][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[6][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 7"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-7">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[7]" className="form-control" defaultValue="Timezone 7" as="input"  id="label-master-manage-ai-timezone-jsx-7"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[7][1]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[7][1]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[7][2]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[7][2]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[7][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[7][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[7][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[7][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[7][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[7][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="ai-access-card">
<div className="ai-zone-badge">
{"Timezone 8"}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-master-manage-ai-timezone-jsx-8">
{"Timezone Name"}
</label>
<Field type="text" name="zone_name[8]" className="form-control" defaultValue="Timezone 8" as="input"  id="label-master-manage-ai-timezone-jsx-8"/>
</div>
<div className="table-responsive">
<table className="table table-bordered slot-table">
<thead >
<tr >
<th className="">
{"Slot"}
</th>
<th >
{"Start"}
</th>
<th >
{"End"}
</th>
</tr>
</thead>
<tbody >
<tr >
<td >
{"1"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[8][1]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[8][1]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"2"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[8][2]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[8][2]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"3"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[8][3]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[8][3]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"4"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[8][4]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[8][4]" defaultValue="" as="input" />
</td>
</tr>
<tr >
<td >
{"5"}
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_start[8][5]" defaultValue="" as="input" />
</td>
<td >
<Field type="time" step="1" className="form-control" name="slot_end[8][5]" defaultValue="" as="input" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="">
<ActionButton type="submit" name="save_ai_timezones" className="btn btn-primary">
{"Save Timezones"}
</ActionButton>
</div>
</LocalForm>
</div>
</div>

</>;
}
