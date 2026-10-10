import React from 'react';
import { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';
import { members } from '@/data/seed';

export default function Page() {
 return <>


<div className="calendar-shell">
<section className="calendar-hero">
<div className="calendar-hero-content">
<div >
<h1 >
{"Booking Calendar"}
</h1>
<p >
{"Plan weekly classes, drag or resize assigned slots, and keep the full schedule visually clean for trainers and the front desk."}
</p>
<div className="hero-meta">
<span className="hero-pill">
{"Gym ID: 1"}
</span>
<span className="hero-pill">
{"Weekly View"}
</span>
<span className="hero-pill">
{"Right click on a class to delete"}
</span>
</div>
</div>
<div className="hero-actions">
<ActionButton id="todayBtn" className="hero-btn hero-btn-ghost" type="button">
{"Today"}
</ActionButton>
<ActionButton id="exportPNGBtn" className="hero-btn hero-btn-primary" type="button">
{"Export PNG"}
</ActionButton>
</div>
</div>
</section>
<section className="calendar-grid">
<div className="calendar-card">
<div className="calendar-toolbar">
<div className="calendar-toolbar-copy">
<h2 >
{"Weekly Class Schedule"}
</h2>
<p >
{"Select a time slot to assign a class. Drag existing items to move them, or pull the bottom edge to change duration."}
</p>
</div>
<div className="calendar-toolbar-actions">
<ActionButton className="toolbar-btn accent" id="refreshCalendarBtn" type="button">
{"Refresh Schedule"}
</ActionButton>
<ActionButton className="toolbar-btn" id="jumpWeekBtn" type="button">
{"Current Week"}
</ActionButton>
</div>
</div>
<div id="calendarWrap">
<BookingCalendar />
</div>
</div>
<aside className="sidebar-stack">
<div className="sidebar-card">
<h3 >
{"Quick Guide"}
</h3>
<p >
{"The calendar is optimized for front-desk use. Use the interaction shortcuts below to keep changes fast and predictable during booking updates."}
</p>
<div className="tips-list">
<div className="tips-item">
<div className="legend-swatch teal">

</div>
<div className="tips-copy">
<strong >
{"Select"}
</strong>
<span >
{"Drag on empty time cells to open the assign modal for that slot."}
</span>
</div>
</div>
<div className="tips-item">
<div className="legend-swatch blue">

</div>
<div className="tips-copy">
<strong >
{"Reschedule"}
</strong>
<span >
{"Drag an event to move it to another day or time without opening another screen."}
</span>
</div>
</div>
<div className="tips-item">
<div className="legend-swatch gold">

</div>
<div className="tips-copy">
<strong >
{"Resize"}
</strong>
<span >
{"Pull the lower edge of a class block to adjust its end time."}
</span>
</div>
</div>
<div className="tips-item">
<div className="legend-swatch rose">

</div>
<div className="tips-copy">
<strong >
{"Delete"}
</strong>
<span >
{"Right click any booked class and confirm removal."}
</span>
</div>
</div>
</div>
</div>
<div className="sidebar-card">
<h3 >
{"Calendar Notes"}
</h3>
<p >
{"Colors are generated per class name so repeat bookings stay visually grouped across the week."}
</p>
<div className="legend-list">
<div className="legend-item">
<div className="legend-swatch teal">

</div>
<div className="legend-copy">
<strong >
{"Consistent Color Memory"}
</strong>
<span >
{"Each class uses the same color during this session to make patterns easier to scan."}
</span>
</div>
</div>
<div className="legend-item">
<div className="legend-swatch blue">

</div>
<div className="legend-copy">
<strong >
{"Compact Weekly Layout"}
</strong>
<span >
{"The week grid stays readable even when multiple classes stack in the same hour."}
</span>
</div>
</div>
</div>
<div className="mini-stat-grid">
<div className="mini-stat">
<div className="mini-stat-label">
{"View"}
</div>
<div className="mini-stat-value">
{"Week"}
</div>
</div>
<div className="mini-stat">
<div className="mini-stat-label">
{"Mode"}
</div>
<div className="mini-stat-value">
{"Live"}
</div>
</div>
</div>
</div>
</aside>
</section>
</div>

<div id="modalBackdrop" className="modal-backdrop-custom">

</div>

<Modal id="classModal" title="Assign Class"><div className="modal-dialog"><div className="modal-content">
<div className="modal-head">
<div >
<h4 >
{"Assign Class"}
</h4>
<p >
{"Choose which class should be placed in the selected time slot."}
</p>
</div>
<ActionButton className="modal-close" type="button" behavior="closeClassModal()">
{"×"}
</ActionButton>
</div>
<div className="modal-group">
<label htmlFor="classSelect">
{"Available Classes"}
</label>
<Field id="classSelect" as="select">

</Field>
</div>
<div id="slotPreview" className="slot-preview">
{"Select a slot on the calendar to preview the booking window here."}
</div>
<div className="modal-actions">
<ActionButton className="modal-btn modal-btn-secondary" type="button" behavior="closeClassModal()">
{"Cancel"}
</ActionButton>
<ActionButton className="modal-btn modal-btn-primary" type="button" behavior="assignSelectedClass()">
{"Assign Class"}
</ActionButton>
</div>
</div></div></Modal>



</>;
}
