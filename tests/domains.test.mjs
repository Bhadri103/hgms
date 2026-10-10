import test from 'node:test';
import assert from 'node:assert/strict';
import {domainFor,seedRows} from '../src/data/seed.js';
test('source references and React routes use the same collection',()=>{for(const page of ['master/manage_batch','membership/add_member','finance/expense_management/manage_expenses','Class_booking/manage_booking'])assert.equal(domainFor(page+'.html'),domainFor('/'+page));});
test('member, billing, attendance, and scheduling collections are distinct',()=>{const paths=['membership/add_member','billing/invoice_management/manage_invoice','attendance/bulk_attendance','Class_booking/manage_booking'];assert.equal(new Set(paths.map(domainFor)).size,4);});
test('seed tables align every cell with a column',()=>{const rows=seedRows(['Name','Plan Name','Contact No','Amount','Action'],'membership/all_member_live_report');assert.equal(rows.length,4);assert.ok(rows.every(row=>row.cells.length===5));assert.match(rows[0].cells[0],/Aarav/);assert.equal(rows[0].cells[3],'1000');});
