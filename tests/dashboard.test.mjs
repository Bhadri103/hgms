import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {dashboardData as calculateDashboard,presetRange} from '../src/services/dashboard.js';
const dashboardData=(repository,members,range,org='all')=>calculateDashboard(repository,members,range,org,{});
const groups=JSON.parse(fs.readFileSync(new URL('../src/data/dashboard-reports.json',import.meta.url)));
const members=[{id:'1',start:'2026-01-01',expiry:'2026-12-31',amount:200,paid:100,status:'Active',org_id:'1'},{id:'2',start:'2026-02-01',expiry:'2026-02-28',amount:500,paid:300,status:'Expired',org_id:'1'}];
test('Every original dashboard metric has a numeric calculation',()=>{const d=dashboardData({},members,{from:'2026-01-01',to:'2026-12-31'});assert.equal(groups.flatMap(g=>g.items).length,49);for(const item of groups.flatMap(g=>g.items))assert.ok(Number.isFinite(d.value(item.label)),item.label);});
test('Inclusive date filters update totals and chart buckets consistently',()=>{const d=dashboardData({},members,{from:'2026-01-01',to:'2026-01-01'});assert.equal(d.value('Total Memberships'),1);assert.equal(d.collection,100);assert.equal(d.buckets.reduce((s,b)=>s+b.collection,0),100);assert.equal(d.value('Today Collection'),100);assert.equal(d.value('GYM Due Amount'),100);});
test('Empty dates do not fabricate revenue or memberships',()=>{const d=dashboardData({},members,{from:'2025-01-01',to:'2025-12-31'});assert.equal(d.collection,0);assert.equal(d.value('Total Memberships'),0);assert.equal(d.expenses,0);});
test('Saved dated expenses respect organization and date boundaries',()=>{const d=dashboardData({collections:{expenses:[{id:'custom',date:'2025-06-12',amount:95,org_id:'2'},{id:'other',date:'2025-06-12',amount:300,org_id:'1'}]}},[],{from:'2025-06-12',to:'2025-06-12'},'2');assert.equal(d.expenses,95);assert.equal(d.value('Today Expense'),95);});
test('Calendar shortcuts cross month boundaries correctly',()=>{assert.deepEqual(presetRange('week','2026-03-02'),{from:'2026-02-24',to:'2026-03-02'});});
test('Year shortcut is a complete valid date',()=>{assert.deepEqual(presetRange('year','2026-10-10'),{from:'2026-01-01',to:'2026-10-10'});});

test('Demo forecast has complete monthly history in every workspace',()=>{const range=presetRange('year');for(const org of ['all','1','2','3']){const data=calculateDashboard({},[],range,org);for(const n of [3,6,12])assert.ok(data.projection(n).history.every(point=>point.value>0));}});
