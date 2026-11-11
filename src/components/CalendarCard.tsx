import React from 'react';
import { Calendar as CalendarIcon, Heart, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl, generateIcsFileContent } from '../utils/calendar';
import { WEDDING_EVENTS } from '../data/weddingData';

export const CalendarCard: React.FC = () => {
  // January 2027 starts on Friday (Day 5, 0-indexed where Sun=0, or Mon=0)
  // Let's use standard Mon-Sun or Sun-Sat calendar
  // Jan 1 2027 is Friday. Jan 20 is Wednesday. Jan 23 is Saturday.
  const daysInMonth = 31;
  const startDayOffset = 5; // Friday (0 = Sun, 1 = Mon ... 5 = Fri)

  const emptyCells = Array.from({ length: startDayOffset });
  const dateCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const downloadIcs = (eventIndex: number) => {
    const event = WEDDING_EVENTS[eventIndex];
    const icsContent = generateIcsFileContent(
      event.title,
      event.description,
      event.venueAddress,
      event.startDate,
      event.endDate
    );
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-alhin-jishna.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-lg shadow-stone-900/5 max-w-md mx-auto text-stone-800">
      <div className="text-center mb-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#8C6A28]">
          Save the Dates
        </span>
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
          January 2027
        </h3>
        <p className="text-xs text-stone-500 font-medium mt-0.5">
          1202 Makaram (കൊല്ലവർഷം 1202 മകരം)
        </p>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-stone-400 mb-2">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>

      {/* Month Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {emptyCells.map((_, i) => (
          <div key={`empty-${i}`} className="h-9 w-9 mx-auto" />
        ))}

        {dateCells.map((day) => {
          const isCeremony = day === 20; // Wed 20 Jan
          const isReception = day === 23; // Sat 23 Jan

          if (isCeremony) {
            return (
              <div
                key={day}
                className="h-9 w-9 mx-auto rounded-full bg-[#E2C792] border-2 border-[#8C6A28] text-stone-900 font-bold flex flex-col items-center justify-center relative shadow-sm cursor-help group"
                title="20 Jan: Wedding Ceremony at Guruvayur"
              >
                <span className="text-xs leading-none">{day}</span>
                <span className="text-[8px] leading-none text-[#8C6A28]">💍</span>
              </div>
            );
          }

          if (isReception) {
            return (
              <div
                key={day}
                className="h-9 w-9 mx-auto rounded-full bg-rose-600 border-2 border-rose-800 text-white font-bold flex flex-col items-center justify-center relative shadow-md shadow-rose-600/30 cursor-help group animate-pulse"
                title="23 Jan: Wedding Reception at Wayanad"
              >
                <span className="text-xs leading-none">{day}</span>
                <Heart className="w-2.5 h-2.5 fill-white text-white leading-none -mt-0.5" />
              </div>
            );
          }

          return (
            <div
              key={day}
              className="h-9 w-9 mx-auto rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <span className="text-xs">{day}</span>
            </div>
          );
        })}
      </div>

      {/* Calendar Legend */}
      <div className="mt-6 pt-5 border-t border-stone-100 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#E2C792] border border-[#8C6A28] flex items-center justify-center text-[9px] font-bold">
              20
            </span>
            <span className="font-medium text-stone-800">Wedding Ceremony (Guruvayur)</span>
          </div>
          <button
            onClick={() => downloadIcs(0)}
            className="text-[11px] text-[#8C6A28] hover:underline font-medium cursor-pointer"
          >
            + Add .ics
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-rose-600 border border-rose-800 text-white flex items-center justify-center text-[9px] font-bold">
              23
            </span>
            <span className="font-medium text-stone-800">Grand Reception (Wayanad)</span>
          </div>
          <button
            onClick={() => downloadIcs(1)}
            className="text-[11px] text-[#8C6A28] hover:underline font-medium cursor-pointer"
          >
            + Add .ics
          </button>
        </div>
      </div>
    </div>
  );
};
