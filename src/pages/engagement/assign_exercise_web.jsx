import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';
import { Building2, ChevronDown, Dumbbell, Plus } from 'lucide-react';
import { usePage } from '@/components/PageContext';

export default function Page() {
 const page = usePage();
 return <>

<div className="container ae-page">
<div className="ae-shell">
<div className="ae-header exercise-page-header">
<div className="ae-header-left">
<span className="exercise-header-icon" aria-hidden="true"><Dumbbell size={22} /></span>
<div>
<h1 >
{"Assign Exercise"}
</h1>
<p >
{"Assign workout exercises to gym members."}
</p>
</div>
</div>
<div className="ae-header-actions">
<button type="button" className="button-secondary exercise-org-button" onClick={() => page.setModal('global-organizations')} aria-label={`Switch organization: ${page.organization.name}`}>
<Building2 size={17} aria-hidden="true" /><span>{page.organization.name}</span><ChevronDown size={16} aria-hidden="true" />
</button>
<ActionButton type="button" className="btn btn-primary" data-toggle="modal" data-target="#add-exercise-assignment"><Plus size={17} aria-hidden="true" />Assign Exercise</ActionButton>
</div>
</div>
<Modal id="add-exercise-assignment" title="Assign Exercise" className="sms-add-dialog"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h2>Assign Exercise</h2></div><div className="modal-body module-content"><LocalForm id="aeForm" formKey="aeForm">
<Field type="hidden" name="gym_id" defaultValue="1" as="input" />
<Field type="hidden" name="ae_action" defaultValue="add" as="input" />
<Field type="hidden" name="category" id="ae_category" defaultValue="" as="input" />
<Field type="hidden" name="json_key" id="ae_json_key" defaultValue="" as="input" />
<div className="ae-form-grid">
<div className="ae-field">
<label className="ae-label" htmlFor="ae_member_select">
{"Member "}
<span className="">
{"*"}
</span>
</label>
<Field name="member_id" id="ae_member_select" className="ae-select" required={true} as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
</div>
<div className="ae-field">
<label className="ae-label" htmlFor="ae_workout_select">
{"Workout Plan "}
<span className="">
{"*"}
</span>
</label>
<Field name="workout" id="ae_workout_select" className="ae-select" required={true} as="select">
<option value="">
{"— Select workout plan —"}
</option>
<option value="cttvtv" data-id="19" data-json-key="HGMS-0002/workout/cttvtv_20260422_123508.json">
{" cttvtv "}
</option>
<option value="keto workout" data-id="35" data-json-key="HGMS-0002/workout/keto_workout_20260605_133110.json">
{" keto workout "}
</option>
<option value="Muscle Gain" data-id="14" data-json-key="exercise/sample/muscle_gain.json">
{" Muscle Gain "}
</option>
<option value="Muscle Gain copy" data-id="24" data-json-key="HGMS-0002/workout/muscle_gain_copy_20260422_152748.json">
{" Muscle Gain copy "}
</option>
<option value="self app" data-id="18" data-json-key="HGMS-0002/workout/self_app_20260422_113138.json">
{" self app "}
</option>
<option value="shhzhz" data-id="34" data-json-key="HGMS-0002/workout/shhzhz_20260427_115205.json">
{" shhzhz "}
</option>
<option value="Stay Active" data-id="15" data-json-key="exercise/sample/stay_active.json">
{" Stay Active "}
</option>
<option value="Weight Gain" data-id="16" data-json-key="exercise/sample/weight_gain.json">
{" Weight Gain "}
</option>
<option value="Weight Loss" data-id="17" data-json-key="exercise/sample/weight_loss.json">
{" Weight Loss "}
</option>
<option value="weight loss" data-id="36" data-json-key="HGMS-0002/workout/weight_loss_20260902_125755.json">
{" weight loss "}
</option>
</Field>
</div>
</div>
<div className="ae-form-actions">
<AppLink href="/engagement/assign_exercise_web?org_id=1" className="ae-btn ae-soft">
<AppIcon className="fa fa-times" />
{" Cancel"}
</AppLink>
<ActionButton type="submit" className="ae-btn ae-primary">
<AppIcon className="fa fa-check" />
{" Assign Exercise "}
</ActionButton>
</div>
</LocalForm><ActionButton className="btn btn-default mt-4" type="button" data-dismiss="modal">Cancel</ActionButton></div></div></div></Modal>
<div className="ae-card">
<div className="ae-card-title">
<span >
<AppIcon className="fa fa-list" />
{"Assignments "}
<span className="">
{"15"}
</span>
</span>
<div className="ae-search-wrap">
<Field type="text" className="ae-search" id="aeSearch" placeholder="Search table..." as="input" />
</div>
</div>
<div className="ae-table-wrap">
<DataTable tableKey="engagement/assign_exercise_web:table-0" columns={["#","Member","Phone","Workout","Date","Actions"]} className="ae-table" />
</div>
</div>
</div>
</div>
</>;
}
