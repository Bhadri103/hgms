import AppIcon from '@/components/AppIcon';
import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>

<div className="container ae-page">
<div className="ae-shell">
<div className="ae-header">
<div className="ae-header-left">
<h1 >
<AppIcon className="fa fa-cutlery" />
{"Assign Diet"}
</h1>
<p >
{"Assign diet plans to gym members."}
</p>
</div>
<div className="ae-header-actions"><ActionButton type="button" className="btn btn-primary" data-toggle="modal" data-target="#add-diet-assignment">+ Assign Diet</ActionButton>
<ActionButton type="button" className="ae-btn ae-gym-button" data-toggle="modal" data-target="#AeOrgModal">
<AppIcon className="fa fa-building-o" />
{" HGMS - Gym Management Software"}
</ActionButton>
</div>
</div>
<Modal id="add-diet-assignment" title="Assign Diet" className="sms-add-dialog"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h2>Assign Diet</h2></div><div className="modal-body module-content"><LocalForm id="aeForm" formKey="aeForm">
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
<label className="ae-label" htmlFor="ae_diet_select">
{"Diet Plan "}
<span className="">
{"*"}
</span>
</label>
<Field name="diet" id="ae_diet_select" className="ae-select" required={true} as="select">
<option value="">
{"— Select diet plan —"}
</option>
<option value="fat loss" data-id="61" data-json-key="HGMS-0002/diet/fat_loss_20260609_123745_edit_20260609_124212.json">
{" fat loss "}
</option>
<option value="fat loss copy" data-id="62" data-json-key="HGMS-0002/diet/fat_loss_20260609_123745_edit_20260609_124212_20260612_174216.json">
{" fat loss copy "}
</option>
<option value="keto diet" data-id="60" data-json-key="HGMS-0002/diet/keto_diet_20260605_105714.json">
{" keto diet "}
</option>
<option value="Keto Diet copy" data-id="59" data-json-key="HGMS-0002/diet/keto_diet_20260423_160228_edit_20260423_162254_20260506_075719.json">
{" Keto Diet copy "}
</option>
<option value="Keto Diet copy copy" data-id="64" data-json-key="HGMS-0002/diet/keto_diet_20260423_160228_edit_20260423_162254_20260506_075719_20260814_131931.json">
{" Keto Diet copy copy "}
</option>
<option value="MUKESH" data-id="63" data-json-key="HGMS-0002/diet/mukesh_20260709_150112.json">
{" MUKESH "}
</option>
<option value="Muscle Gain - Egg" data-id="22" data-json-key="HGMS-0002/diet/muscle_gain_egg.json">
{" Muscle Gain - Egg "}
</option>
<option value="Muscle Gain - Egg" data-id="1" data-json-key="HGMS-0002/diet/muscle_gain_egg.json">
{" Muscle Gain - Egg "}
</option>
<option value="Muscle Gain - Non-Veg" data-id="2" data-json-key="HGMS-0002/diet/muscle_gain_nonveg.json">
{" Muscle Gain - Non-Veg "}
</option>
<option value="Muscle Gain - Non-Veg" data-id="23" data-json-key="HGMS-0002/diet/muscle_gain_nonveg.json">
{" Muscle Gain - Non-Veg "}
</option>
<option value="Muscle Gain - Veg" data-id="3" data-json-key="HGMS-0002/diet/muscle_gain_veg.json">
{" Muscle Gain - Veg "}
</option>
<option value="Muscle Gain - Veg" data-id="24" data-json-key="HGMS-0002/diet/muscle_gain_veg.json">
{" Muscle Gain - Veg "}
</option>
<option value="Muscle Gain - Vegan" data-id="4" data-json-key="HGMS-0002/diet/muscle_gain_vegan.json">
{" Muscle Gain - Vegan "}
</option>
<option value="Muscle Gain - Vegan" data-id="25" data-json-key="HGMS-0002/diet/muscle_gain_vegan.json">
{" Muscle Gain - Vegan "}
</option>
<option value="self created diet plan" data-id="38" data-json-key="HGMS-0002/diet/self_created_diet_plan_20260422_101507.json">
{" self created diet plan "}
</option>
<option value="self created diet plan copy" data-id="53" data-json-key="HGMS-0002/diet/self_created_diet_plan_20260422_101507_20260422_163208_edit_20260422_170814.json">
{" self created diet plan copy "}
</option>
<option value="Stay Active - Egg" data-id="26" data-json-key="HGMS-0002/diet/stay_active_egg.json">
{" Stay Active - Egg "}
</option>
<option value="Stay Active - Egg" data-id="5" data-json-key="HGMS-0002/diet/stay_active_egg.json">
{" Stay Active - Egg "}
</option>
<option value="Stay Active - Non-Veg" data-id="27" data-json-key="HGMS-0002/diet/stay_active_nonveg.json">
{" Stay Active - Non-Veg "}
</option>
<option value="Stay Active - Non-Veg" data-id="6" data-json-key="HGMS-0002/diet/stay_active_nonveg.json">
{" Stay Active - Non-Veg "}
</option>
<option value="Stay Active - Veg" data-id="7" data-json-key="HGMS-0002/diet/stay_active_veg.json">
{" Stay Active - Veg "}
</option>
<option value="Stay Active - Veg" data-id="28" data-json-key="HGMS-0002/diet/stay_active_veg.json">
{" Stay Active - Veg "}
</option>
<option value="Stay Active - Vegan" data-id="8" data-json-key="HGMS-0002/diet/stay_active_vegan.json">
{" Stay Active - Vegan "}
</option>
<option value="Stay Active - Vegan" data-id="29" data-json-key="HGMS-0002/diet/stay_active_vegan.json">
{" Stay Active - Vegan "}
</option>
<option value="weight gain" data-id="65" data-json-key="HGMS-0002/diet/weight_gain_20260827_121305.json">
{" weight gain "}
</option>
<option value="Weight Gain - Egg" data-id="30" data-json-key="HGMS-0002/diet/weight_gain_egg.json">
{" Weight Gain - Egg "}
</option>
<option value="Weight Gain - Egg" data-id="9" data-json-key="HGMS-0002/diet/weight_gain_egg.json">
{" Weight Gain - Egg "}
</option>
<option value="Weight Gain - Non-Veg" data-id="31" data-json-key="HGMS-0002/diet/weight_gain_nonveg.json">
{" Weight Gain - Non-Veg "}
</option>
<option value="Weight Gain - Non-Veg" data-id="10" data-json-key="HGMS-0002/diet/weight_gain_nonveg.json">
{" Weight Gain - Non-Veg "}
</option>
<option value="Weight Gain - Veg" data-id="32" data-json-key="HGMS-0002/diet/weight_gain_veg.json">
{" Weight Gain - Veg "}
</option>
<option value="Weight Gain - Veg" data-id="11" data-json-key="HGMS-0002/diet/weight_gain_veg.json">
{" Weight Gain - Veg "}
</option>
<option value="Weight Gain - Vegan" data-id="33" data-json-key="HGMS-0002/diet/weight_gain_vegan.json">
{" Weight Gain - Vegan "}
</option>
<option value="Weight Gain - Vegan" data-id="12" data-json-key="HGMS-0002/diet/weight_gain_vegan.json">
{" Weight Gain - Vegan "}
</option>
<option value="weight loss" data-id="42" data-json-key="HGMS-0002/diet/weight_loss_20260422_114508.json">
{" weight loss "}
</option>
<option value="Weight Loss - Egg" data-id="34" data-json-key="HGMS-0002/diet/weight_loss_egg.json">
{" Weight Loss - Egg "}
</option>
<option value="Weight Loss - Egg" data-id="13" data-json-key="HGMS-0002/diet/weight_loss_egg.json">
{" Weight Loss - Egg "}
</option>
<option value="Weight Loss - Non-Veg" data-id="35" data-json-key="HGMS-0002/diet/weight_loss_nonveg.json">
{" Weight Loss - Non-Veg "}
</option>
<option value="Weight Loss - Non-Veg" data-id="14" data-json-key="HGMS-0002/diet/weight_loss_nonveg.json">
{" Weight Loss - Non-Veg "}
</option>
<option value="Weight Loss - Veg" data-id="36" data-json-key="HGMS-0002/diet/weight_loss_veg.json">
{" Weight Loss - Veg "}
</option>
<option value="Weight Loss - Veg" data-id="15" data-json-key="HGMS-0002/diet/weight_loss_veg.json">
{" Weight Loss - Veg "}
</option>
<option value="Weight Loss - Vegan" data-id="16" data-json-key="HGMS-0002/diet/weight_loss_vegan.json">
{" Weight Loss - Vegan "}
</option>
</Field>
</div>
</div>
<div className="ae-form-actions">
<AppLink href="/engagement/assign_diet_web?org_id=1" className="ae-btn ae-soft">
<AppIcon className="fa fa-times" />
{" Cancel"}
</AppLink>
<ActionButton type="submit" className="ae-btn ae-primary">
<AppIcon className="fa fa-check" />
{" Assign Diet "}
</ActionButton>
</div>
</LocalForm><ActionButton className="btn btn-default mt-4" type="button" data-dismiss="modal">Cancel</ActionButton></div></div></div></Modal>
<div className="ae-card">
<div className="ae-card-title">
<span >
<AppIcon className="fa fa-list" />
{"Assignments "}
<span className="">
{"20"}
</span>
</span>
<div className="ae-search-wrap">
<Field type="text" className="ae-search" id="aeSearch" placeholder="Search assignments..." as="input" />
</div>
</div>
<div className="ae-table-wrap">
<DataTable tableKey="engagement/assign_diet_web:table-0" columns={["#","Member","Phone","Diet","Diet Type","Date","Actions"]} className="ae-table" />
</div>
</div>
</div>
</div>
</>;
}
