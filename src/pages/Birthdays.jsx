import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Cake} from 'lucide-react';
import {usePage, useRepository} from '@/components/PageContext';
import DataTable from '@/components/DataTable';
import {members} from '@/data/seed';
import {upcomingBirthdays} from '@/services/birthdays';

export default function Birthdays() {
  useRepository();
  const {organization} = usePage();
  const [days, setDays] = useState(3);
  const birthdays = upcomingBirthdays([...members], new Date(), days);
  const rows = birthdays.map(member => ({id: member.id, org_id: organization.id, cells: [member.birthday, member.name || member.m_name || 'Member', member.mobile || member.cell_phone || '', member.daysAway === 0 ? 'Today' : member.daysAway === 1 ? 'Tomorrow' : `In ${member.daysAway} days`]}));
  return <div className="container">
    <ol className="breadcrumb"><li><Link to="/home">Home</Link></li><li>Birthdays</li></ol>
    <div className="page-header">
      <div><h1><Cake size={24} className="text-primary"/>Upcoming birthdays</h1><p className="mt-2 text-sm text-muted">{organization.name} · {birthdays.length} {birthdays.length === 1 ? 'birthday' : 'birthdays'}</p></div>
      <label className="flex items-center gap-3 text-sm">Show<select className="form-control" aria-label="Birthday window" value={days} onChange={event => setDays(Number(event.target.value))}><option value={0}>Today</option><option value={3}>Today + next 3 days</option><option value={7}>Today + next 7 days</option><option value={30}>Today + next 30 days</option></select></label>
    </div>
    <section className="surface-card p-5 sm:p-6">
      <p className="mb-5 text-sm text-muted">Based on the date of birth saved in each member’s profile. Members without a valid date of birth are excluded.</p>
      {!rows.length && <div className="mb-5 rounded-xl bg-canvas p-5 text-center">No birthdays {days === 0 ? 'today' : `today or in the next ${days} days`}.</div>}
      <DataTable key={days} tableKey="birthday-upcoming:table-0" columns={['Birthday date', 'Member name', 'Mobile', 'When']} initialRows={rows}/>
    </section>
  </div>;
}
