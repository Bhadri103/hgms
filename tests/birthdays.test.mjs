import test from 'node:test';
import assert from 'node:assert/strict';
import {upcomingBirthdays} from '../src/services/birthdays.js';

test('includes today through day three, ignoring birth year and invalid dates', () => {
  const members = ['1990-10-10', '1985-10-13', '2000-10-14', '', '1990-02-30', '2030-10-11'].map((dob, id) => ({id, dob}));
  assert.deepEqual(upcomingBirthdays(members, new Date(2026, 9, 10)).map(m => [m.id, m.daysAway]), [[0, 0], [1, 3]]);
});
test('handles year rollover and leap-day birthdays', () => {
  assert.equal(upcomingBirthdays([{dob: '1990-01-01'}], new Date(2026, 11, 30))[0].daysAway, 2);
  assert.equal(upcomingBirthdays([{dob: '2000-02-29'}], new Date(2027, 1, 28))[0].birthday, '2027-03-01');
  assert.equal(upcomingBirthdays([{dob: '2000-02-29'}], new Date(2028, 1, 28))[0].birthday, '2028-02-29');
});
test('today-only excludes tomorrow', () => {
  assert.equal(upcomingBirthdays([{dob: '1990-10-11'}], new Date(2026, 9, 10), 0).length, 0);
});
