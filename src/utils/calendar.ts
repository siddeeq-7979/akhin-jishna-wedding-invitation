import { CountdownTime } from '../types/wedding';

/**
 * Calculates countdown difference between target date and current time.
 */
export function calculateCountdown(targetDate: Date, now: Date = new Date()): CountdownTime {
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
  };
}

/**
 * Formats a Date to ISO format required by Google Calendar URL: YYYYMMDDTHHmmssZ
 */
export function formatGoogleCalendarDate(d: Date): string {
  return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
}

/**
 * Creates Google Calendar URL for one-click add to calendar
 */
export function generateGoogleCalendarUrl(
  title: string,
  details: string,
  location: string,
  startDate: Date,
  endDate: Date
): string {
  const startIso = formatGoogleCalendarDate(startDate);
  const endIso = formatGoogleCalendarDate(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startIso}/${endIso}`,
    details: details,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates downloadable .ics calendar file text
 */
export function generateIcsFileContent(
  title: string,
  description: string,
  location: string,
  startDate: Date,
  endDate: Date
): string {
  const startIso = formatGoogleCalendarDate(startDate);
  const endIso = formatGoogleCalendarDate(endDate);
  const nowIso = formatGoogleCalendarDate(new Date());

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Akhin and Jishna Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${startDate.getTime()}@akhin-jishna-wedding.local`,
    `DTSTAMP:${nowIso}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    `SUMMARY:${title.replace(/\n/g, ' ')}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location.replace(/\n/g, ' ')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/**
 * Converts DMS (Degrees Minutes Seconds) string to decimal degrees
 * Input: 11°45'25.5"N, 75°50'41.3"E
 */
export function dmsToDecimal(degrees: number, minutes: number, seconds: number, direction: string): number {
  let dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === 'S' || direction === 'W') {
    dd = dd * -1;
  }
  return Number(dd.toFixed(6));
}

export const GROOM_COORDINATES = {
  lat: 11.757083,
  lng: 75.844806,
  dms: `11°45'25.5"N 75°50'41.3"E`,
  label: "Groom's Residence, Anchil House, Kunjom, Wayanad",
};
