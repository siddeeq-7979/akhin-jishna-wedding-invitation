import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCountdown,
  formatGoogleCalendarDate,
  generateGoogleCalendarUrl,
  dmsToDecimal,
  GROOM_COORDINATES
} from './calendar';

test('calculateCountdown calculates days, hours, minutes, seconds correctly', () => {
  const now = new Date('2027-01-20T10:00:00Z');
  const target = new Date('2027-01-23T16:00:00Z'); // 3 days and 6 hours later

  const countdown = calculateCountdown(target, now);
  assert.equal(countdown.isPast, false);
  assert.equal(countdown.days, 3);
  assert.equal(countdown.hours, 6);
  assert.equal(countdown.minutes, 0);
  assert.equal(countdown.seconds, 0);
});

test('calculateCountdown flags past date correctly', () => {
  const now = new Date('2027-01-25T10:00:00Z');
  const target = new Date('2027-01-23T16:00:00Z');

  const countdown = calculateCountdown(target, now);
  assert.equal(countdown.isPast, true);
  assert.equal(countdown.days, 0);
  assert.equal(countdown.hours, 0);
});

test('formatGoogleCalendarDate converts date without symbols', () => {
  const date = new Date('2027-01-20T04:30:00.000Z');
  const formatted = formatGoogleCalendarDate(date);
  assert.equal(formatted, '20270120T043000Z');
});

test('generateGoogleCalendarUrl produces valid Google Calendar link', () => {
  const start = new Date('2027-01-23T10:30:00.000Z');
  const end = new Date('2027-01-23T14:30:00.000Z');
  const url = generateGoogleCalendarUrl(
    'Akhin & Jishna Wedding Reception',
    'Reception at Groom Residence',
    'Anchil House, Kunjom, Wayanad',
    start,
    end
  );

  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?'));
  assert.ok(url.includes('Akhin+%26+Jishna+Wedding+Reception'));
  assert.ok(url.includes('20270123T103000Z'));
});

test('dmsToDecimal converts degrees minutes seconds accurately', () => {
  // 11°45'25.5"N -> 11 + 45/60 + 25.5/3600 = 11.757083
  const lat = dmsToDecimal(11, 45, 25.5, 'N');
  assert.equal(lat, 11.757083);

  // 75°50'41.3"E -> 75 + 50/60 + 41.3/3600 = 75.844806
  const lng = dmsToDecimal(75, 50, 41.3, 'E');
  assert.equal(lng, 75.844806);

  assert.equal(GROOM_COORDINATES.lat, 11.757083);
  assert.equal(GROOM_COORDINATES.lng, 75.844806);
});
