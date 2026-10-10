import test from 'node:test';
import assert from 'node:assert/strict';
import {invoiceTotals,addDays} from '../src/services/calculations.js';
test('discount is applied before exclusive tax and split payments',()=>{assert.deepEqual(invoiceTotals({amount:1000,discount:10,discountType:'percent',taxRate:5,paid:500}),{subtotal:900,discount:100,tax:45,total:945,due:445});});
test('inclusive tax does not charge tax twice',()=>{assert.deepEqual(invoiceTotals({amount:1050,taxRate:5,taxIncluded:true,paid:1050}),{subtotal:1000,discount:0,tax:50,total:1050,due:0});});
test('discount and overpayments cannot create negative balances',()=>{assert.equal(invoiceTotals({amount:100,discount:200,paid:20}).total,0);assert.equal(invoiceTotals({amount:100,paid:500}).due,0);});
test('expiry arithmetic crosses month and leap-year boundaries',()=>{assert.equal(addDays('2028-02-28',2),'2028-03-01');assert.equal(addDays('2026-12-15',30),'2027-01-14');});
