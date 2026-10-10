import test from 'node:test';
import assert from 'node:assert/strict';
import {formatMoney,moneyCell,moneyLabel} from '../src/services/currency.js';
test('Rupee formatting uses Indian grouping and preserves paise',()=>{assert.equal(formatMoney(123456.75),'₹1,23,456.75');assert.equal(moneyLabel('Amount'),'Amount (INR)');});
test('Money display never formats counts, percentages, dates or nonnumeric values',()=>{assert.equal(moneyCell('Paid','30000'),'₹30,000.00');for(const label of ['Discount %','Total Count','Due Date','Price Type'])assert.equal(moneyCell(label,'12'),'12');assert.equal(moneyCell('Amount','Pending'),'Pending');});
