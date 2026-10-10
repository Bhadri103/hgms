import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>

<div className="container mwn-page">
<div className="mwn-shell">
<div className="mwn-header">
<div className="mwn-header-left">
<h1 >
{"Manage Workout Plans"}
</h1>
<p >
{"View, edit, or remove saved weekly exercise plans."}
</p>
</div>
<div className="mwn-header-actions">
<ActionButton type="button" className="mwn-btn mwn-gym-button" data-toggle="modal" data-target="#MwnOrgModal">
<AppIcon className="fa fa-building-o" />
{" HGMS - Gym Management Software"}
</ActionButton>
<AppLink className="mwn-btn mwn-soft" href="/engagement/manage_workoutN?org_id=1&plan=default">
<AppIcon className="fa fa-star" />
{" Default Plans"}
</AppLink>
<AppLink className="mwn-btn mwn-soft" role="link" href="/local/workout_guide?org_id=1">
<AppIcon className="fa fa-book" />
{" Workout Guide "}
</AppLink>
<ActionButton type="button" className="mwn-btn mwn-soft" id="mwnTipsOpen">
<AppIcon className="fa fa-lightbulb-o" />
{" Tips"}
</ActionButton>
</div>
</div>
<div className="mwn-card">
<div className="mwn-card-top">
<div >
<h3 >
{"Saved Plans "}
<span className="mwn-count-pill">
{"11"}
</span>
</h3>
</div>
<AppLink className="mwn-btn mwn-primary" role="link" href="/local/add_workoutN?org_id=1">
<AppIcon className="fa fa-plus" />
{" Add Workout Plan "}
</AppLink>
</div>
<div className="mwn-table-wrap">
<DataTable tableKey="engagement/manage_workoutN:table-0" columns={["Workout Plan","Assigned Gyms","Days","Remark","Last Updated","Actions"]} className="mwn-table" />
</div>
</div>
</div>
</div>
</>;
}
