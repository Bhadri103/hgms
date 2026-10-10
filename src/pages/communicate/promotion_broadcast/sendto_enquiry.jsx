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
<AppIcon className="clip-pencil" />
<AppLink href="/home">
{" Home "}
</AppLink>
</li>
<li className="active">

</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
<span className="page-title-with-count"><span>{"SMS To ALL Enquiry"}</span><CountBadge count="32"/></span>
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#GymSwitcherModal_sendto_enquiry_php">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
<Modal className="modal fade global-gym-switcher-modal" id="GymSwitcherModal_sendto_enquiry_php" tabIndex="-1" role="dialog">
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
<AppLink href="/communicate/promotion_broadcast/sendto_enquiry?org_id=all" className="gym-switcher-item">
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
<AppLink href="/communicate/promotion_broadcast/sendto_enquiry?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/communicate/promotion_broadcast/sendto_enquiry?org_id=2" className="gym-switcher-item">
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
<AppIcon className="fa fa-external-link-square" />
{" SMS All Enquiry "}
<ActionButton className="btn btn-primary" type="button" data-toggle="modal" data-target="#add-enquiry-sms"><span aria-hidden="true">+</span> Add SMS</ActionButton>
</div>
<div className="panel-body">
<Modal id="add-enquiry-sms" title="Add SMS" className="sms-add-dialog"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><div><h2>Add SMS</h2><p className="mt-1 text-xs text-muted">Prepare a message for your enquiries.</p></div></div><div className="modal-body module-content"><LocalForm role="form" id="form" formKey="form" className="sms-compose-form">
<div className="sms-fields">
<div className="form-group"><label className="control-label" htmlFor="form-field-select-3">Recipient filter</label><Field id="form-field-select-3" name="iinq_type" className="form-control" as="select" behavior="if (this.value) window.location.href=this.value">
<option value="">
{"Select"}
</option>
<option value="sendto_enquiry.html">
{"All"}
</option>
<option value="sendto_enquiry.html?filter=7">
{"Last 7 days"}
</option>
<option value="sendto_enquiry.html?filter=15">
{"Last 15 days"}
</option>
<option value="sendto_enquiry.html?filter=30">
{"Last 30 days"}
</option>
</Field></div>
<div className="form-group"><label className="control-label" htmlFor="message_type">Message type</label><Field className="form-control" id="message_type" name="message_type" as="select">
<option value="">
{"Select Message Type"}
</option>
<option value="1">
{"Membership"}
</option>
<option value="2">
{"Birthday"}
</option>
<option value="3">
{"Renewal"}
</option>
<option value="4">
{"Inquiry"}
</option>
<option value="5">
{"Anniversary"}
</option>
<option value="6">
{"Offers"}
</option>
<option value="7">
{"Holiday"}
</option>
<option value="8">
{"PT Renewal"}
</option>
</Field></div>
</div>
<Field type="hidden" id="totalsms_no" defaultValue="32" readOnly={true} as="input" />
<Field type="hidden" name="filter" defaultValue="" readOnly={true} as="input" />
<Field type="hidden" name="org_idd" defaultValue="1" readOnly={true} as="input" />
<div className="sms-editor"><label htmlFor="text_count">Your message</label><p>Keep your message clear, friendly, and to the point.</p><Field name="message" rows="7" id="text_count" className="form-control" required={true} defaultValue="" placeholder="Write your message here?" as="textarea" />
<div className="sms-message-stats"><label htmlFor="message_chh">Message segments<Field type="text" name="message_no" id="message_chh" defaultValue="0" readOnly={true} as="input" /></label><label htmlFor="total_ch">Characters<Field type="text" id="total_ch" name="total_char_value" defaultValue="0" readOnly={true} as="input" /></label></div></div>
<div className="sms-send-row"><p>Review your message and recipients before sending.</p><div className="flex items-center gap-2"><ActionButton className="btn btn-default" type="button" data-dismiss="modal">Cancel</ActionButton><ActionButton className="btn btn-primary" type="submit">Save SMS</ActionButton></div></div>
</LocalForm></div></div></div></Modal>
<div className="sms-enquiry-table">
<DataTable tableKey="communicate/promotion_broadcast/sendto_enquiry:table-0" columns={["Log Date","Enquiry No","Customer Name","Mobile","Last Response","Follow up Date"]} className="table table-striped table-bordered table-hover table-full-width" />
</div>
</div>
</div>
</div>
<div className="col-md-4">

</div>
</div>
</div>

</>;
}
