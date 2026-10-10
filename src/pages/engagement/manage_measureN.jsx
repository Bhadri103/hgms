import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>

<div className="container mmn-page">
<div className="mmn-shell">
<div className="mmn-header">
<div >
<h1 >
{"Manage Measurements"}
</h1>
<p >
{"View, inspect, and remove saved measurement logs by member."}
</p>
</div>
<div className="mmn-header-actions">
<ActionButton type="button" className="mmn-btn mmn-gym-button" data-toggle="modal" data-target="#MmnOrgModal">
<AppIcon className="fa fa-building-o" />
{" HGMS - Gym Management Software"}
</ActionButton>
</div>
</div>
<div className="mmn-card">
<div className="mmn-card-top">
<div >
<h3 >
{"Saved Measurements "}
<span className="mmn-count-pill">
{"15 members"}
</span>
</h3>
</div>
<AppLink className="mmn-btn mmn-primary" role="link" href="/local/add_measureN?org_id=1">
<AppIcon className="fa fa-plus" />
{" Add Measurement "}
</AppLink>
</div>
<div className="mmn-table-wrap">
<DataTable tableKey="engagement/manage_measureN:table-0" columns={["Member","Logs","Latest Date","Trend","Actions"]} className="mmn-table" />
</div>
</div>
</div>
</div>
</>;
}
