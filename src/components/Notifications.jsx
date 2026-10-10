import React, {useRef} from 'react';
import {Bell, Check, CheckCheck, CalendarDays, CreditCard, Users, X} from 'lucide-react';
import {usePage, useRepository} from './PageContext';
import {updateState} from '@/services/repository';

const examples = [
  {id: 'demo-renewal', title: 'Membership renewal reminder', detail: 'Review upcoming expiries and help members stay on track.', icon: Users, tone: 'violet'},
  {id: 'demo-payment', title: 'Keep collections up to date', detail: 'Check outstanding balances in your due report.', icon: CreditCard, tone: 'green'},
  {id: 'demo-class', title: 'Plan your next session', detail: 'Review your class calendar and upcoming bookings.', icon: CalendarDays, tone: 'blue'},
  {id: 'demo-member', title: 'Welcome your next member', detail: 'Add their membership details to get them started.', icon: Users, tone: 'violet'},
  {id: 'demo-overview', title: 'Your dashboard is ready', detail: 'Explore collections, attendance, and membership trends.', icon: Bell, tone: 'blue'},
];

export default function Notifications({open, onToggle, onClose}) {
  const state = useRepository(), page = usePage(), trigger = useRef(null);
  const read = new Set(state.readNotificationIds || []);
  const items = [...state.logs.map(log => ({id: `activity-${log.id}`, title: `${log.action} · ${log.domain.replaceAll('_', ' ')}`, detail: 'Workspace activity', at: log.at, icon: Bell, tone: 'blue'})), ...examples];
  const unread = items.filter(item => !read.has(item.id)).length;
  function markRead(ids) {
    try {updateState(current => ({...current, readNotificationIds: [...new Set([...(current.readNotificationIds || []), ...ids])]}));}
    catch {page.notify('Could not save read status. Please try again.', 'error');}
  }
  function close() {onClose(); trigger.current?.focus();}

  return <div className="notification-anchor" onKeyDown={event => {if(event.key === 'Escape'){event.stopPropagation(); close();}}}>
    <button ref={trigger} type="button" className="icon-button relative" aria-label="Notifications" aria-expanded={open} aria-controls="notification-panel" onClick={onToggle}>
      <Bell size={19}/>{unread > 0 && <span className="notification-count" aria-hidden="true">{unread > 99 ? '99+' : unread}</span>}
      <span className="sr-only">{unread} unread</span>
    </button>
    {open && <section id="notification-panel" className="notification-panel" aria-label="Notifications">
      <div className="notification-heading"><div><h2>Notifications <span>{unread}</span></h2><p aria-live="polite">{unread ? `${unread} unread updates` : "You're all caught up"}</p></div><button type="button" className="icon-button" aria-label="Close notifications" onClick={close}><X size={17}/></button></div>
      <div className="notification-toolbar"><span>Your activity</span><button type="button" disabled={!unread} onClick={() => markRead(items.map(item => item.id))}><CheckCheck size={15}/>Read all</button></div>
      <div className="notification-list" tabIndex="0" role="region" aria-label="Notification list">
        {items.map(item => {const isRead = read.has(item.id), Icon = item.icon; return <article key={item.id} className={`notification-item ${isRead ? 'is-read' : 'is-unread'}`}>
          <span className={`notification-item-icon ${item.tone}`}><Icon size={17}/></span>
          <div className="notification-content"><h3>{item.title}{!isRead && <span className="notification-dot" aria-label="Unread"/>}</h3><p>{item.detail}</p><div className="notification-item-footer"><span>{item.at ? <time dateTime={item.at}>{new Date(item.at).toLocaleString(undefined, {month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'})}</time> : 'Demo notification'}</span>{isRead ? <span className="notification-read"><Check size={12}/>Read</span> : <button type="button" aria-label={`Mark as read: ${item.title}`} onClick={() => markRead([item.id])}>Mark as read</button>}</div></div>
        </article>;})}
      </div>
      <div className="notification-bottom"><CheckCheck size={13}/>Read status is saved in this workspace</div>
    </section>}
  </div>;
}
