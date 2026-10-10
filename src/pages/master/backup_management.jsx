import AppIcon from '@/components/AppIcon';
import React from 'react';
import {Database, Plus} from 'lucide-react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>










<div className="row">
<div className="col-sm-12">
<ol className="breadcrumb">
<li >
<AppIcon className="clip-home-3" />
<AppLink href="/home">
{" Home "}
</AppLink>
</li>
<li className="active">
{" Manage Backup "}
</li>
</ol>
<div className="page-header bill-page-header">
<h1>Manage Backup</h1>
<div className="bill-header-actions">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_backup_management_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_backup_management_php" tabIndex="-1" role="dialog">
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
<AppLink href="/master/backup_management?org_id=all" className="gym-switcher-item">
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
<AppLink href="/master/backup_management?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/master/backup_management?org_id=2" className="gym-switcher-item">
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
</div>
</div>





<div className="row">
<div className="col-md-12">
<div className="panel panel-default">
<div className="panel-heading">
<span className="flex items-center gap-3"><Database size={17} className="text-primary"/>Backup history</span>
<ActionButton type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
<Plus size={15}/>
{"New Backup "}
</ActionButton>
</div>
<div className="panel-body">
<LocalForm id="myform" formKey="myform">
<DataTable tableKey="master/backup_management:table-0" columns={["#","Logged By","File Type","File Name","Status","Action"]} className="table table-hover table-full-width" />
</LocalForm>
</div>
</div>
</div>
</div>



</>;
}
