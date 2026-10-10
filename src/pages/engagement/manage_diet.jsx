import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>

<div className="container mdn-page">
<div className="mdn-shell">
<div className="mdn-header">
<div className="mdn-header-left">
<h1 >
{"Manage Diet Plans"}
</h1>
<p >
{"View, edit, or remove saved diet plans created from the planner."}
</p>
</div>
<div className="mdn-header-actions">
<ActionButton type="button" className="mdn-btn mdn-gym-button" data-toggle="modal" data-target="#MdnOrgModal">
<AppIcon className="fa fa-building-o" />
{" HGMS - Gym Management Software"}
</ActionButton>
<AppLink className="mdn-btn mdn-soft" role="link" href="/local/food_guide?org_id=1">
<AppIcon className="fa fa-book" />
{" Food Guide "}
</AppLink>
<ActionButton type="button" className="mdn-btn mdn-soft" id="mdnTipsOpen">
<AppIcon className="fa fa-lightbulb-o" />
{" Tips"}
</ActionButton>
</div>
</div>
<div className="mdn-card">
<div className="mdn-card-top">
<div >
<h3 >
{"Saved Plans "}
<span className="mdn-count-pill">
{"44"}
</span>
</h3>
</div>
<div className="">
<AppLink className="mdn-btn mdn-soft" href="/engagement/manage_diet?org_id=1&plan=default">
<AppIcon className="fa fa-star" />
{" Default Plans "}
<span className="mdn-count-pill">
{"33"}
</span>
</AppLink>
<AppLink className="mdn-btn mdn-primary" role="link" href="/local/add_dietN?org_id=1">
<AppIcon className="fa fa-plus" />
{" Add Diet Plan "}
</AppLink>
</div>
</div>
<div className="mdn-analytics">
<AppLink className="mdn-stat-card is-all is-active" href="/engagement/manage_diet?org_id=1">
<span className="mdn-stat-left">
<span className="mdn-stat-ico">
<AppIcon className="fa fa-th-large" />
</span>
<span className="mdn-stat-meta">
<span className="mdn-stat-label">
{"All Plans"}
</span>
<span className="mdn-stat-count">
{"44"}
</span>
<span className="mdn-stat-sub">
{"Everything in scope"}
</span>
</span>
</span>
</AppLink>
<AppLink className="mdn-stat-card is-vegan" href="/engagement/manage_diet?org_id=1&type=vegan">
<span className="mdn-stat-left">
<span className="mdn-stat-ico">
<AppIcon className="fa fa-leaf" />
</span>
<span className="mdn-stat-meta">
<span className="mdn-stat-label">
{"Vegan"}
</span>
<span className="mdn-stat-count">
{"12"}
</span>
<span className="mdn-stat-sub">
{"Green"}
</span>
</span>
</span>
</AppLink>
<AppLink className="mdn-stat-card is-veg" href="/engagement/manage_diet?org_id=1&type=veg">
<span className="mdn-stat-left">
<span className="mdn-stat-ico">
<AppIcon className="fa fa-envira" />
</span>
<span className="mdn-stat-meta">
<span className="mdn-stat-label">
{"Vegetarian"}
</span>
<span className="mdn-stat-count">
{"15"}
</span>
<span className="mdn-stat-sub">
{"Light green"}
</span>
</span>
</span>
</AppLink>
<AppLink className="mdn-stat-card is-nonveg" href="/engagement/manage_diet?org_id=1&type=nonveg">
<span className="mdn-stat-left">
<span className="mdn-stat-ico">
<AppIcon className="fa fa-cutlery" />
</span>
<span className="mdn-stat-meta">
<span className="mdn-stat-label">
{"Non-Vegetarian"}
</span>
<span className="mdn-stat-count">
{"9"}
</span>
<span className="mdn-stat-sub">
{"Red"}
</span>
</span>
</span>
</AppLink>
<AppLink className="mdn-stat-card is-egg" href="/engagement/manage_diet?org_id=1&type=egg">
<span className="mdn-stat-left">
<span className="mdn-stat-ico">
<AppIcon className="fa fa-dot-circle-o" />
</span>
<span className="mdn-stat-meta">
<span className="mdn-stat-label">
{"Eggetarian"}
</span>
<span className="mdn-stat-count">
{"8"}
</span>
<span className="mdn-stat-sub">
{"Yellow"}
</span>
</span>
</span>
</AppLink>
</div>
<div className="mdn-table-wrap">
<DataTable tableKey="engagement/manage_diet:table-0" columns={["Diet Plan","Assigned Gyms","Type","Remark","Last Updated","Actions"]} className="mdn-table" />
</div>
</div>
</div>
</div>
</>;
}
