import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="container">
<div className="pl-headbar">
<div >
<h1 className="pl-title">
{"Profit & Loss Report"}
</h1>
<div className="pl-period">
{"From 1 Oct 2026 to 31 Oct 2026"}
</div>
</div>
<div className="pl-filter-actions">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_profit_loss_report_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_profit_loss_report_php" tabIndex="-1" role="dialog">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="gym-switcher-head">
<div className="gym-switcher-kicker">
{"Gym Switcher"}
</div>
<h4 className="gym-switcher-title">
{"Choose Workspace"}
</h4>
<p className="gym-switcher-subtitle">
{"Select a gym to open this page in the right workspace."}
</p>
</div>
<div className="gym-switcher-body">
<div className="gym-switcher-list">
<AppLink href="/report/profit_loss_report?org_id=all" className="gym-switcher-item">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-th-large" />
</span>
<span className="gym-switcher-name">
{"All Gyms"}
</span>
</span>
<span className="gym-switcher-badge">
{"Select"}
</span>
</AppLink>
<AppLink href="/report/profit_loss_report?org_id=1" className="gym-switcher-item is-active">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-building-o" />
</span>
<span className="gym-switcher-name">
{"HGMS - Gym Management Software"}
</span>
</span>
<span className="gym-switcher-badge">
{"Active"}
</span>
</AppLink>
<AppLink href="/report/profit_loss_report?org_id=2" className="gym-switcher-item">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-building-o" />
</span>
<span className="gym-switcher-name">
{"BIOMETRIC TEST"}
</span>
</span>
<span className="gym-switcher-badge">
{"Select"}
</span>
</AppLink>
</div>
</div>
</div>
</div>
</Modal>
</div>
</div>
<div className="pl-hero">
<div className="pl-hero-top">
<div >
<p className="pl-subtitle">
{"Track collections, expenses, and net result for the selected period."}
</p>
</div>
<div className="pl-badge">
<AppIcon className="fa fa-filter" />
<span >
{"P & L"}
</span>
</div>
</div>
<div className="pl-filter-card">
<div className="filter-title">
<AppIcon className="fa fa-filter" />
{" Report Filters"}
</div>
<div className="pl-filter-bar">
<div className="pl-filter-main">
<label className="pl-chip">
<Field name="rep_type" required={true} id="rep_type" defaultValue="date" type="radio" as="input" />
<span >
{"Report By Date"}
</span>
</label>
<label className="pl-chip">
<Field name="rep_type" required={true} id="rep_type1" defaultValue="range" type="radio" defaultChecked={true} as="input" />
<span >
{"Report By Date Range"}
</span>
</label>
</div>
<div className="pl-filter-actions">
<span className="pl-badge">
<AppIcon className="fa fa-clock-o" />
<span >
{"From 1 Oct 2026 to 31 Oct 2026"}
</span>
</span>
</div>
</div>
<div className="pl-filter-row">
<div className="pl-dategroup">
<div className="pl-datebox compact hidden" id="pl_single_box">
<label >
{"Report By Date"}
</label>
<LocalForm id="pl_single_form" className="pl-date-form" formKey="pl_single_form">
<div className="report-filter-field"><label htmlFor="pl-dd">Report date</label><div className="input-group">
<Field type="date" className="form-control" name="dd" id="pl-dd" defaultValue="" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div></div>
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="pl-filter-tools">
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
<div className="pl-datebox compact" id="pl_range_box">
<label >
{"Report By Date Range"}
</label>
<LocalForm id="pl_range_form" className="pl-date-form" formKey="pl_range_form">
<div className="report-filter-field"><label htmlFor="pl-dd1">From date</label><div className="input-group">
<Field type="date" className="form-control" name="dd1" id="pl-dd1" defaultValue="2026-10-01" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div></div>
<div className="report-filter-field"><label htmlFor="pl-dd2">To date</label><div className="input-group">
<Field type="date" className="form-control" name="dd2" id="pl-dd2" defaultValue="2026-10-31" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div></div>
<Field type="hidden" name="org_id" defaultValue="1" as="input" />
<div className="pl-filter-tools">
<Field type="submit" defaultValue="Apply filters" className="btn btn-primary" as="input" />
</div>
</LocalForm>
</div>
</div>
<div className="pl-filter-actions">

</div>
</div>
</div>
<div className="pl-summary">
<div className="pl-card collect">
<div className="label">
{"Collection"}
</div>
<div className="value">
{"3,700.00"}
</div>
<div className="help">
{"Income in the selected month"}
</div>
</div>
<div className="pl-card expense">
<div className="label">
{"Expense"}
</div>
<div className="value">
{"0.00"}
</div>
<div className="help">
{"Expenses in the selected month"}
</div>
</div>
<div className="pl-card result">
<div className="label">
{"Net Result"}
</div>
<div className="value">
{"3,700.00"}
</div>
<div className="help">
{"Collection minus expense"}
</div>
</div>
<div className="pl-card status">
<div className="label">
{"Status"}
</div>
<div className="value pl-status-profit">
{"Profit"}
</div>
<div className="help">
{"Current financial position"}
</div>
</div>
</div>
</div>
</div>

</>;
}
