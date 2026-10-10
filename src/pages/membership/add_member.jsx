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
{" Add Member "}
</li>
</ol>
<div className="page-header row">
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<h1 >
{"Add Member "}
</h1>
</div>
<div className="btn-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ActionButton type="button" className="btn btn-dark-grey" data-toggle="modal" data-target="#AddMemberGymSwitcherModal">
{" HGMS - Gym Management Software "}
<span className="caret">

</span>
</ActionButton>
</div>
</div>
</div>
</div>
<Modal className="modal fade global-gym-switcher-modal" id="AddMemberGymSwitcherModal" tabIndex="-1" role="dialog">
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
{"Select a gym to add the member in the correct workspace."}
</p>
</div>
<div className="gym-switcher-body">
<div className="gym-switcher-list">
<AppLink href="/membership/add_member?org_id=all" className="gym-switcher-item">
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
<AppLink href="/membership/add_member?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/membership/add_member?org_id=2" className="gym-switcher-item">
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
<div className="row">
<div className="col-md-12">
<div className="panel panel-default member-form-panel">
<div className="panel-heading member-form-hero">
<div className="member-form-hero-icon">
<AppIcon className="fa fa-user-plus" />
</div>
<div className="member-form-hero-copy">
<div className="member-form-hero-title">
{"Add Member"}
</div>
<div className="member-form-hero-subtitle">
{"Create a complete member profile with personal details, documents, plan and billing information."}
</div>
</div>
</div>
<div className="panel-body member-form-body">
<LocalForm role="form" id="add_name" formKey="add_name">
<div className="row member-form-grid">
<div className="col-md-12">
<div className="errorHandler alert alert-danger no-display">
<AppIcon className="fa fa-times-sign" />
{" You have some form errors. Please check below. "}
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="col-md-4 member-form-column" id="dynamic_field">
<div className="member-form-section">
<div className="member-section-heading">
<span className="member-section-icon">
<AppIcon className="fa fa-user" />
</span>
<div >
<div className="member-section-title">
{"Basic Details"}
</div>
<div className="member-section-subtitle">
{"Identity, contact info and member profile inputs."}
</div>
</div>
</div>
<PhotoCapture />
<div className="form-group">
<label className="control-label">
<span id="unique_username">
{" Member Id"}
</span>
</label>
<strong >
<Field type="text" placeholder="Input Member Id" className="form-control" defaultValue="2160" id="m_name_id" name="member_id" as="input" />
</strong>
</div>
<div className="form-group">
<label className="control-label">
{" Member's Name "}
<span className="symbol required">

</span>
</label>
<strong >
<Field type="text" placeholder="Input Member Name" className="form-control" defaultValue="" id="m_name" name="m_name" required={true} autoComplete="off" as="input" />
</strong>
</div>
<div className="form-group">
<label className="control-label">
{" Life "}
</label>
<div className="">
<span className="">
<Field type="checkbox" className="checkbox-inline" name="vip[]" id="vip_member" defaultValue="VIP" as="input" />
{"VIP"}
</span>
</div>
</div>
<div className="form-group">
<label className="control-label">
{" Member Address "}
</label>
<strong >
<Field type="text" placeholder="Input Address" className="form-control" defaultValue="" id="cash" name="m_address" autoComplete="off" as="input" />
</strong>
</div>
<div className="form-group">
<label className="control-label" htmlFor="dial_code">
{" Dial Code "}
</label>
<Field name="dial_code" id="dial_code" className="form-control" defaultValue="+91" as="select">
<option value="">
{"-- Select Country Dial Code --"}
</option>
<option value="+93" data-credits="4">
{" Afghanistan (+93) "}
</option>
<option value="+355" data-credits="4">
{" Albania (+355) "}
</option>
<option value="+213" data-credits="4">
{" Algeria (+213) "}
</option>
<option value="+376" data-credits="4">
{" Andorra (+376) "}
</option>
<option value="+244" data-credits="4">
{" Angola (+244) "}
</option>
<option value="+54" data-credits="4">
{" Argentina (+54) "}
</option>
<option value="+374" data-credits="4">
{" Armenia (+374) "}
</option>
<option value="+61" data-credits="4">
{" Australia (+61) "}
</option>
<option value="+43" data-credits="4">
{" Austria (+43) "}
</option>
<option value="+994" data-credits="4">
{" Azerbaijan (+994) "}
</option>
<option value="+973" data-credits="4">
{" Bahrain (+973) "}
</option>
<option value="+880" data-credits="4">
{" Bangladesh (+880) "}
</option>
<option value="+375" data-credits="4">
{" Belarus (+375) "}
</option>
<option value="+32" data-credits="4">
{" Belgium (+32) "}
</option>
<option value="+975" data-credits="4">
{" Bhutan (+975) "}
</option>
<option value="+591" data-credits="4">
{" Bolivia (+591) "}
</option>
<option value="+387" data-credits="4">
{" Bosnia and Herzegovina (+387) "}
</option>
<option value="+55" data-credits="4">
{" Brazil (+55) "}
</option>
<option value="+359" data-credits="4">
{" Bulgaria (+359) "}
</option>
<option value="+855" data-credits="4">
{" Cambodia (+855) "}
</option>
<option value="+237" data-credits="4">
{" Cameroon (+237) "}
</option>
<option value="+1" data-credits="4">
{" Canada (+1) "}
</option>
<option value="+56" data-credits="4">
{" Chile (+56) "}
</option>
<option value="+86" data-credits="4">
{" China (+86) "}
</option>
<option value="+57" data-credits="4">
{" Colombia (+57) "}
</option>
<option value="+385" data-credits="4">
{" Croatia (+385) "}
</option>
<option value="+53" data-credits="4">
{" Cuba (+53) "}
</option>
<option value="+357" data-credits="4">
{" Cyprus (+357) "}
</option>
<option value="+420" data-credits="4">
{" Czech Republic (+420) "}
</option>
<option value="+45" data-credits="4">
{" Denmark (+45) "}
</option>
<option value="+1" data-credits="4">
{" Dominican Republic (+1) "}
</option>
<option value="+593" data-credits="4">
{" Ecuador (+593) "}
</option>
<option value="+20" data-credits="4">
{" Egypt (+20) "}
</option>
<option value="+503" data-credits="4">
{" El Salvador (+503) "}
</option>
<option value="+372" data-credits="4">
{" Estonia (+372) "}
</option>
<option value="+251" data-credits="4">
{" Ethiopia (+251) "}
</option>
<option value="+358" data-credits="4">
{" Finland (+358) "}
</option>
<option value="+33" data-credits="4">
{" France (+33) "}
</option>
<option value="+220" data-credits="4">
{" Gambia (+220) "}
</option>
<option value="+49" data-credits="4">
{" Germany (+49) "}
</option>
<option value="+233" data-credits="4">
{" Ghana (+233) "}
</option>
<option value="+30" data-credits="4">
{" Greece (+30) "}
</option>
<option value="+502" data-credits="4">
{" Guatemala (+502) "}
</option>
<option value="+504" data-credits="4">
{" Honduras (+504) "}
</option>
<option value="+852" data-credits="4">
{" Hong Kong (+852) "}
</option>
<option value="+36" data-credits="4">
{" Hungary (+36) "}
</option>
<option value="+354" data-credits="4">
{" Iceland (+354) "}
</option>
<option value="+91" data-credits="4">
{" India (+91) "}
</option>
<option value="+62" data-credits="4">
{" Indonesia (+62) "}
</option>
<option value="+98" data-credits="4">
{" Iran (+98) "}
</option>
<option value="+964" data-credits="4">
{" Iraq (+964) "}
</option>
<option value="+353" data-credits="4">
{" Ireland (+353) "}
</option>
<option value="+972" data-credits="4">
{" Israel (+972) "}
</option>
<option value="+39" data-credits="4">
{" Italy (+39) "}
</option>
<option value="+1" data-credits="4">
{" Jamaica (+1) "}
</option>
<option value="+81" data-credits="4">
{" Japan (+81) "}
</option>
<option value="+962" data-credits="4">
{" Jordan (+962) "}
</option>
<option value="+7" data-credits="4">
{" Kazakhstan (+7) "}
</option>
<option value="+254" data-credits="4">
{" Kenya (+254) "}
</option>
<option value="+965" data-credits="4">
{" Kuwait (+965) "}
</option>
<option value="+856" data-credits="4">
{" Laos (+856) "}
</option>
<option value="+371" data-credits="4">
{" Latvia (+371) "}
</option>
<option value="+961" data-credits="4">
{" Lebanon (+961) "}
</option>
<option value="+218" data-credits="4">
{" Libya (+218) "}
</option>
<option value="+370" data-credits="4">
{" Lithuania (+370) "}
</option>
<option value="+352" data-credits="4">
{" Luxembourg (+352) "}
</option>
<option value="+60" data-credits="4">
{" Malaysia (+60) "}
</option>
<option value="+960" data-credits="4">
{" Maldives (+960) "}
</option>
<option value="+230" data-credits="4">
{" Mauritius (+230) "}
</option>
<option value="+52" data-credits="4">
{" Mexico (+52) "}
</option>
<option value="+976" data-credits="4">
{" Mongolia (+976) "}
</option>
<option value="+212" data-credits="4">
{" Morocco (+212) "}
</option>
<option value="+95" data-credits="4">
{" Myanmar (+95) "}
</option>
<option value="+977" data-credits="4">
{" Nepal (+977) "}
</option>
<option value="+31" data-credits="4">
{" Netherlands (+31) "}
</option>
<option value="+64" data-credits="4">
{" New Zealand (+64) "}
</option>
<option value="+505" data-credits="4">
{" Nicaragua (+505) "}
</option>
<option value="+234" data-credits="4">
{" Nigeria (+234) "}
</option>
<option value="+850" data-credits="4">
{" North Korea (+850) "}
</option>
<option value="+47" data-credits="4">
{" Norway (+47) "}
</option>
<option value="+968" data-credits="4">
{" Oman (+968) "}
</option>
<option value="+92" data-credits="4">
{" Pakistan (+92) "}
</option>
<option value="+970" data-credits="4">
{" Palestine (+970) "}
</option>
<option value="+507" data-credits="4">
{" Panama (+507) "}
</option>
<option value="+595" data-credits="4">
{" Paraguay (+595) "}
</option>
<option value="+51" data-credits="4">
{" Peru (+51) "}
</option>
<option value="+63" data-credits="4">
{" Philippines (+63) "}
</option>
<option value="+48" data-credits="4">
{" Poland (+48) "}
</option>
<option value="+351" data-credits="4">
{" Portugal (+351) "}
</option>
<option value="+974" data-credits="4">
{" Qatar (+974) "}
</option>
<option value="+40" data-credits="4">
{" Romania (+40) "}
</option>
<option value="+7" data-credits="4">
{" Russia (+7) "}
</option>
<option value="+966" data-credits="4">
{" Saudi Arabia (+966) "}
</option>
<option value="+221" data-credits="4">
{" Senegal (+221) "}
</option>
<option value="+381" data-credits="4">
{" Serbia (+381) "}
</option>
<option value="+65" data-credits="4">
{" Singapore (+65) "}
</option>
<option value="+421" data-credits="4">
{" Slovakia (+421) "}
</option>
<option value="+386" data-credits="4">
{" Slovenia (+386) "}
</option>
<option value="+252" data-credits="4">
{" Somalia (+252) "}
</option>
<option value="+27" data-credits="4">
{" South Africa (+27) "}
</option>
<option value="+82" data-credits="4">
{" South Korea (+82) "}
</option>
<option value="+34" data-credits="4">
{" Spain (+34) "}
</option>
<option value="+94" data-credits="4">
{" Sri Lanka (+94) "}
</option>
<option value="+249" data-credits="4">
{" Sudan (+249) "}
</option>
<option value="+46" data-credits="4">
{" Sweden (+46) "}
</option>
<option value="+41" data-credits="4">
{" Switzerland (+41) "}
</option>
<option value="+963" data-credits="4">
{" Syria (+963) "}
</option>
<option value="+886" data-credits="4">
{" Taiwan (+886) "}
</option>
<option value="+255" data-credits="4">
{" Tanzania (+255) "}
</option>
<option value="+66" data-credits="4">
{" Thailand (+66) "}
</option>
<option value="+216" data-credits="4">
{" Tunisia (+216) "}
</option>
<option value="+90" data-credits="4">
{" Turkey (+90) "}
</option>
<option value="+380" data-credits="4">
{" Ukraine (+380) "}
</option>
<option value="+971" data-credits="4">
{" United Arab Emirates (+971) "}
</option>
<option value="+44" data-credits="4">
{" United Kingdom (+44) "}
</option>
<option value="+1" data-credits="4">
{" United States (+1) "}
</option>
<option value="+598" data-credits="4">
{" Uruguay (+598) "}
</option>
<option value="+998" data-credits="4">
{" Uzbekistan (+998) "}
</option>
<option value="+58" data-credits="4">
{" Venezuela (+58) "}
</option>
<option value="+84" data-credits="4">
{" Vietnam (+84) "}
</option>
<option value="+967" data-credits="4">
{" Yemen (+967) "}
</option>
<option value="+260" data-credits="4">
{" Zambia (+260) "}
</option>
<option value="+263" data-credits="4">
{" Zimbabwe (+263) "}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label">
{" Cell Phone "}
<span className="symbol required">

</span>
</label>
<strong >
<Field type="text" placeholder="" className="form-control" id="unique_mobile" name="cell_phone" defaultValue="" maxLength="20" autoComplete="off" required={true} as="input" />
<span id="errmsg2" className="">

</span>
<div id="checkUniqueMobile">

</div>
<div className="form-group">
<label className="control-label">
{" E-mail Id "}
</label>
<Field name="gmail" placeholder="E-mail ID " id="" defaultValue="" type="email" className="form-control" autoComplete="off" as="input" />
</div>
</strong>
</div>
<div className="form-group">
<label className="control-label">
{"Gender "}
</label>
<label className="radio-inline">
<Field type="radio" defaultValue="male" className="red" name="gender" as="input" />
{"Male "}
</label>
<label className="radio-inline">
<Field type="radio" defaultValue="female" className="green" name="gender" as="input" />
{"Female"}
</label>
<label className="radio-inline">
<Field type="radio" defaultValue="other" className="green" name="gender" as="input" />
{"Other"}
</label>
</div>
<div className="form-group">
<label className="control-label" htmlFor="report-field-membership-add-member-jsx-1">
{" Date Of Birth "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="dob" autoComplete="off" as="input"  id="report-field-membership-add-member-jsx-1"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<Field type="hidden" name="id1_webcam" id="id1_webcam_data" as="input" />
<Field type="hidden" name="id2_webcam" id="id2_webcam_data" as="input" />
<Field type="hidden" name="id3_webcam" id="id3_webcam_data" as="input" />
</div>
</div>
<div className="col-md-4 member-form-column">
<div className="member-form-section">
<div className="member-section-heading">
<span className="member-section-icon">
<AppIcon className="fa fa-list-alt" />
</span>
<div >
<div className="member-section-title">
{"Additional Details"}
</div>
<div className="member-section-subtitle">
{"Personal, referral and supporting member information."}
</div>
</div>
</div>
<div id="hideiddetails">
<PhotoCapture number={1} />
<PhotoCapture number={2} />
<PhotoCapture number={3} />
</div>
<div id="otherdetails">
<span className="btn btn-success">
<AppIcon className="fa fa-file" />
{" Fill Other Details "}
</span>
</div>
<span id="hidedetails" className="hidden">
<div className="form-group">
<label className="control-label">
{" Unique ID Number "}
</label>
<strong >
<Field type="text" placeholder="" className="form-control" id="" name="uid" as="input" />
</strong>
</div>
<div className="form-group">
<label className="control-label">
{" Batch "}
</label>
<strong >
<Field className="form-control" name="batch" as="select">
<option value="">
{"Select Batch"}
</option>
<option value="23">
{"6 am - offline"}
</option>
<option value="24">
{"6 am - online"}
</option>
<option value="25">
{"evening batch"}
</option>
<option value="26">
{"Today"}
</option>
<option value="27">
{"new batch"}
</option>
<option value="28">
{"Gym"}
</option>
<option value="29">
{"Guitar"}
</option>
<option value="30">
{"gym 2"}
</option>
<option value="31">
{"afternoon batch"}
</option>
</Field>
</strong>
</div>
<div className="form-group">
<label className="control-label">
{" Home Phone "}
</label>
<strong >
<Field type="text" placeholder="" className="form-control" id="" name="home_phone" maxLength="20" as="input" />
<span id="errmsg" className="">

</span>
</strong>
</div>
<div className="form-group">
<label className="control-label" htmlFor="cash">
{" Place of Work/Company Name "}
</label>
<Field type="text" placeholder="Company name" className="form-control" id="cash" name="company_name" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-add-member-jsx-1">
{" Company GST "}
</label>
<Field type="text" placeholder="Company GST" className="form-control" name="comp_gst" as="input"  id="label-membership-add-member-jsx-1"/>
</div>
<div className="form-group">
<label className="control-label" htmlFor="cash">
{" Designation "}
</label>
<Field type="text" placeholder="Designation" className="form-control" id="cash" name="designation" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-add-member-jsx-2">
{" Marriage Anniversary "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="marriage_anniversary" autoComplete="off" as="input"  id="label-membership-add-member-jsx-2"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label">
{" In Case of emergency contact:Name "}
</label>
<Field name="emergency_name" placeholder="In Case Of emergency call:Name" id="" type="text" className="form-control" as="input" />
</div>
<div className="form-group">
<label className="control-label">
{" Emergency contact Number "}
</label>
<Field name="emergency_phone" placeholder="Input Emergency Phone Number" id="" type="text" className="form-control" as="input" />
<span id="errmsg3" className="">

</span>
</div>
<div className="form-group">
<label className="control-label">
{" How did you hear about? HGMS "}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Google" as="input" />
{"Google"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Fb" as="input" />
{"FB"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Insta" as="input" />
{"Insta"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="SMS" as="input" />
{"SMS"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Newspaper Inserts" as="input" />
{"Newspaper Inserts"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Direct" as="input" />
{"Direct"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Newspaper Ad" as="input" />
{"Newspaper Ad"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Society" as="input" />
{"Society"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Magazine" as="input" />
{"Magazine"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Radio" as="input" />
{"Radio"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Kiosk" as="input" />
{"Kiosk"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Mall" as="input" />
{"Mall"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Hoarding" as="input" />
{"Hoarding"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Just Dial" as="input" />
{"Just Dial"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Theater" as="input" />
{"Theater"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Television" as="input" />
{"Television"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Media Article" as="input" />
{"Media Article"}
</label>
<label className="radio-inline">
<Field type="radio" className="red" name="about" defaultValue="Drop down/banner" as="input" />
{"Drop down/banner"}
</label>
</div>
<div className="form-group">
<label className="control-label" htmlFor="corner">
{" Guest Voucher Form "}
</label>
<Field type="text" placeholder="Guest Voucher Form" className="form-control" id="corner" name="guest_voucher" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="member_id">
{" Referred by: "}
</label>
<Field id="member_id" name="referred" className="form-control" as="select">
<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="cash">
{" Other "}
</label>
<Field type="text" placeholder="Other" className="form-control" id="cash" name="other" as="input" />
</div>
</span>
</div>
</div>
<div className="col-md-4 member-form-column">
<div className="member-form-section">
<div className="member-section-heading">
<span className="member-section-icon">
<AppIcon className="fa fa-credit-card" />
</span>
<div >
<div className="member-section-title">
{"Plan & Billing"}
</div>
<div className="member-section-subtitle">
{"Program selection, payment setup, tax and due details."}
</div>
</div>
</div>
<div id="hide3">
<div className="form-group">
<label className="control-label" htmlFor="plan">
{" Program "}
<span className="symbol required">

</span>
</label>
<Field className="form-control" name="plan" id="plan" required={true} as="select">
<option value="">
{"Select Plan"}
</option>
<option value="67">
{"3 month plan .(4999)(90 Days)"}
</option>
<option value="76">
{"1 Month plan(1000)(30 Days)"}
</option>
<option value="79">
{"6 month plan(5000)(6 Months)"}
</option>
<option value="82">
{"Special Month Plan(2500)(30 Days)"}
</option>
<option value="84">
{"Quaterly plan(2500)(3 Months)"}
</option>
<option value="85">
{"Test Month 3(9999)(3 Months)"}
</option>
<option value="86">
{"Fast Monthly(1800)(1 Days)"}
</option>
<option value="87">
{"Daily Plan(100)(1 Days)"}
</option>
<option value="88">
{"3 month plan(8000)(90 Days)"}
</option>
<option value="92">
{"test plan monthly(8000)(1 Months)"}
</option>
<option value="93">
{"test 1 month(5000)(1 Months)"}
</option>
<option value="94">
{"weekly plan(500)(7 Days)"}
</option>
</Field>
</div>
<Field type="hidden" className="form-control" id="charge5" as="input" />
<div className="form-group">
<label className="control-label" htmlFor="start_date1">
{" Start Date: "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="start_date" id="start_date1" required={true} autoComplete="off" as="input" />
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div id="charges">

</div>
<div className="form-group">
<label className="control-label" htmlFor="payment_method">
{" Payment Method "}
</label>
<Field id="payment_method" name="payment_method" className="form-control" required={true} as="select">
<option value="">
{"Select Your Payment Method"}
</option>
<option value="Cash">
{"Cash"}
</option>
<option value="Cheque">
{"Cheque"}
</option>
<option value="Card Payment">
{"Card Payment"}
</option>
<option value="Online Payment">
{"Online Payment"}
</option>
</Field>
</div>
<div id="payment_method_data">

</div>
<div className="form-group">
<label className="control-label" htmlFor="paid_amount">
{" Paid Amount "}
</label>
<Field type="text" className="form-control" id="paid_amount" name="paid_amount" required={true} defaultValue="0" as="input" />
<span id="errmsg3" className="">

</span>
</div>
<div className="form-group">
<label className="control-label" htmlFor="payment_method2">
{" Payment Method 2 "}
</label>
<Field id="payment_method2" name="payment_method2" className="form-control" as="select">
<option value="">
{"Select Your Payment Method"}
</option>
<option value="Cash">
{"Cash"}
</option>
<option value="Cheque">
{"Cheque"}
</option>
<option value="Card Payment">
{"Card Payment"}
</option>
<option value="Online Payment">
{"Online Payment"}
</option>
</Field>
</div>
<div id="payment_method_data2">

</div>
<div className="form-group">
<label className="control-label" htmlFor="paid_amount2">
{" Paid Amount 2 "}
</label>
<Field type="text" className="form-control" id="paid_amount2" name="paid_amount2" placeholder="Input paid amount" autoComplete="off" inputMode="decimal" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="enrollment">
{" Enrollment Fee "}
</label>
<Field type="text" className="form-control" id="enrollment" defaultValue="0" name="enrollment" readOnly={true} as="input" />
<span id="errmsg3" className="">

</span>
</div>
<div className="form-group">
<label className="control-label" htmlFor="discount_type">
{"Discount Type"}
<span className="symbol">

</span>
</label>
<Field id="discount_type" name="discount_type" className="form-control" as="select">
<option value="">
{"Discount Type"}
</option>
<option value="percent">
{" Percent"}
</option>
<option value="amount">
{"Amount"}
</option>
</Field>
</div>
<div className="form-group">
<label className="control-label" htmlFor="discount">
{"Discount "}
</label>
<Field type="text" className="form-control" id="discount" name="discount" as="input" />
</div>
<div className="boxed">
<div className="form-group">
{" Is Plan Amount Tax Included? "}
<label className="checkbox-inline">
<Field type="checkbox" id="tax_include" name="tax_include" defaultValue="1" as="input" />
</label>
</div>
<div className="form-group">
<strong >
{"Tax"}
</strong>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="12" id="tax12" name="tax[]" as="input" />
{" CGST (2.5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="13" id="tax13" name="tax[]" as="input" />
{" VAT (2.5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="14" id="tax14" name="tax[]" as="input" />
{" gst (15) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="15" id="tax15" name="tax[]" as="input" />
{" gst (5) "}
</label>
<label className="checkbox-inline">
<Field type="checkbox" defaultValue="16" id="tax16" name="tax[]" as="input" />
{" VAT (10) "}
</label>
</div>
</div>
<div className="form-group" id="">
<label className="control-label">
{" Tax Amount "}
</label>
<Field type="hidden" className="form-control" id="tax_helper" defaultValue="0" readOnly={true} as="input" />
<Field type="text" className="form-control" id="tax_amount" name="tax_amount" placeholder="Input Due Amount" defaultValue="0" readOnly={true} as="input" />
</div>
<div className="form-group" id="">
<label className="control-label" htmlFor="due_amount">
{" Due Amount "}
</label>
<Field type="text" className="form-control" id="due_amount" name="due_amount" placeholder="Input Due Amount" readOnly={true} as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-add-member-jsx-3">
{" Due Amount Reminder "}
</label>
<div className="input-group">
<Field type="text" data-date-format="yyyy-mm-dd" data-date-viewmode="years" className="form-control date-picker" name="reminder_date" autoComplete="off" as="input"  id="label-membership-add-member-jsx-3"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
</div>
<div className="form-group" id="">
<label className="control-label" htmlFor="label-membership-add-member-jsx-4">
{" Remark "}
</label>
<Field type="text" className="form-control" name="remark" autoComplete="off" as="input"  id="label-membership-add-member-jsx-4"/>
</div>
<div className="form-group" id="bill_date">
<label className="control-label" htmlFor="label-membership-add-member-jsx-5">
{" Bill Date "}
</label>
<div className="input-group">
<Field type="text" name="date" defaultValue="2026-10-09" className="form-control" readOnly={true} data-date-format="yyyy-mm-dd" data-date-viewmode="years" autoComplete="off" as="input"  id="label-membership-add-member-jsx-5"/>
<span className="input-group-addon">
<AppIcon className="fa fa-calendar" />
</span>
</div>
</div>
<div className="form-group">
<label className="control-label" htmlFor="trainer">
{" Trainer Name : "}
</label>
<Field id="trainer" name="trainer" className="form-control" as="select">
<option value="">
{"Select Your Trainer Name"}
</option>
<option value="10097">
{"HGMS Trainer(10097)"}
</option>
<option value="10098">
{"New trainer(10098)"}
</option>
<option value="10099">
{"sathar(10099)"}
</option>
</Field>
</div>
<Field type="hidden" id="org_id" defaultValue="1" className="form-control" as="input" />
<Field type="hidden" id="discount_amt" as="input" />
<div className="member-access-card">
<div className="">
{"AI Access Control"}
</div>
<div className="">
{"Select the AI device group for biometric sync. If needed, assign a weekzone to apply timezone-based access restriction to this member."}
</div>
<div className="form-group">
<label className="control-label" htmlFor="label-membership-add-member-jsx-6">
{"AI Device Group"}
</label>
<Field type="text" className="form-control" defaultValue="Group ID: 1 - Ai Bio (AYTC03019920)" readOnly={true} as="input"  id="label-membership-add-member-jsx-6"/>
<Field type="hidden" name="ai_group_id" id="ai_group_id" defaultValue="1" as="input" />
</div>
<div className="form-group">
<label className="control-label" htmlFor="ai_weekzone_no">
{"AI Weekzone"}
</label>
<Field className="form-control" name="ai_weekzone_no" id="ai_weekzone_no" as="select">
<option value="0">
{"No Weekzone Restriction"}
</option>
</Field>
</div>
</div>
<div className="col-md-12">
<div className="member-submit-wrap">
<Field type="submit" defaultValue="Submit" id="btn1" name="submit" className="btn btn-yellow btn-block member-submit-btn" as="input" />
</div>
</div>
</div>
</div>
<Modal className="modal fade" id="VerficationModal" tabIndex="-1" role="dialog">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="myModalLabel">
{"Please verify the member "}
</h4>
</div>
<div className="modal-body row">
<div className="col-md-12 row">
<div className="col-md-3">

</div>
<div className="col-md-6">
<div className="form-group">
{"Please Insert the OTP from "}
<br  />
<Field type="text" id="verify_otp" name="verify_otp" defaultValue="" className="form-control" as="input" />
<Field type="hidden" id="memberid" defaultValue="" className="form-control" as="input" />
<Field type="hidden" id="run_id_ledger" name="run_id_ledger" defaultValue="" className="form-control" as="input" />
</div>
<div id="otp_verified" className="form-group">

</div>
<ActionButton className="btn btn-yellow btn-block" id="verify_member" name="verify_member" value="1" type="button">
{"Submit"}
</ActionButton>
</div>
<div className="col-md-3">
<ActionButton className="btn btn-bricky btn-xs" id="resend_otp" value="" type="button">
{"Resend OTP"}
</ActionButton>
<div id="otp_resent" className="form-group">

</div>
</div>
</div>
</div>
</div>
</div>
</Modal>
<Modal className="modal fade global-gym-switcher-modal" id="OrgModal" tabIndex="-1" role="dialog">
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
{"Select a gym to continue on the add member page."}
</p>
</div>
<div className="gym-switcher-body">
<div className="gym-switcher-list">
<AppLink href="/membership/add_member?org_id=all" className="gym-switcher-item">
<span className="gym-switcher-item-main">
<span className="gym-switcher-icon">
<AppIcon className="fa fa-th-large" />
</span>
<span className="gym-switcher-name">
{"Select Gym"}
</span>
</span>
<span className="gym-switcher-badge">
{"Select"}
</span>
</AppLink>
<AppLink href="/membership/add_member?org_id=1" className="gym-switcher-item is-active">
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
<AppLink href="/membership/add_member?org_id=2" className="gym-switcher-item">
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
<div className="col-md-4 hidden">

</div>
</div>
</div>
</LocalForm>
</div>
</div>
</div>
</div>
</div>

</>;
}
