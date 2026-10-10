// Calendar-day arithmetic avoids daylight-saving time changing the day count.
export function upcomingBirthdays(members, today = new Date(), days = 3) {
  const year = today.getFullYear();
  const start = Date.UTC(year, today.getMonth(), today.getDate());
  return members.flatMap(member => {
    const dob = String(member.dob || member.date_of_birth || member.birth_date || '');
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob);
    if (!match) return [];
    const [, y, m, d] = match.map(Number);
    const valid = new Date(Date.UTC(y, m - 1, d));
    if (valid.getUTCFullYear() !== y || valid.getUTCMonth() !== m - 1 || valid.getUTCDate() !== d || valid.getTime() > start) return [];
    // February 29 birthdays fall on March 1 in non-leap years.
    let next = Date.UTC(year, m - 1, d);
    if (next < start) next = Date.UTC(year + 1, m - 1, d);
    const daysAway = (next - start) / 86400000;
    return daysAway <= days ? [{...member, birthday: new Date(next).toISOString().slice(0, 10), daysAway}] : [];
  }).sort((a, b) => a.daysAway - b.daysAway || String(a.name || '').localeCompare(String(b.name || '')));
}
