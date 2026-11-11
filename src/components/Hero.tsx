import React, { useState, useEffect } from 'react';
import { calculateCountdown } from '../utils/calendar';
import { CountdownTime } from '../types/wedding';
import { Calendar, MapPin, Heart, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  // Target Reception date: Saturday, 23 January 2027 16:00 IST
  const receptionDate = new Date('2027-01-23T16:00:00+05:30');
  const [countdown, setCountdown] = useState<CountdownTime>(() =>
    calculateCountdown(receptionDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(receptionDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [receptionDate]);

  return (
    <header className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden bg-gradient-to-b from-[#F6F1E7] via-[#FAF7F2] to-[#F3EDE2]">
      {/* Decorative Traditional Kerala Kasavu Gold Borders */}
      <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#996515] via-[#E2C792] via-[#C5A059] to-[#996515]" />
      <div className="absolute top-2.5 left-0 right-0 h-[1px] bg-[#C5A059]/40" />

      {/* Subtle traditional lotus/diya watermark background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `radial-gradient(circle, #8C6A28 10%, transparent 70%)`,
        }}
      />

      {/* Auspicious Invocation Header */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#8C6A28] font-medium uppercase mb-3">
          <span className="w-8 h-[1px] bg-[#C5A059]/60" />
          <span>ശ്രീ ഗുരുവായൂരപ്പൻ തുണ · ॐ · ശുഭം</span>
          <span className="w-8 h-[1px] bg-[#C5A059]/60" />
        </div>

        <p className="font-serif-wedding italic text-stone-600 text-lg md:text-xl mb-4 font-light tracking-wide">
          With the divine blessings of our beloved elders & Almighty
        </p>

        {/* The Couple Names & Authentic Guruvayur Portrait */}
        <div className="relative my-2 py-2 px-6 flex flex-col items-center">
          <div className="font-script text-4xl sm:text-5xl md:text-6xl text-[#996515] mb-2">
            Save the Date
          </div>

          {/* Authentic Guruvayur Wedding Portrait */}
          <div className="relative my-2 group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#8C6A28] via-[#F4E8C1] to-[#C5A059] shadow-xl">
              <img
                src="/assets/aistudio/test_frame_cw.jpg"
                alt="Akhin Kishor & Jishna Vijayan at Guruvayur"
                className="w-full h-full rounded-full object-cover shadow-inner"
              />
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-stone-900 text-[#E2C792] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[#C5A059]/40 shadow-sm whitespace-nowrap">
              Guruvayur · 2027
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-tight mt-3">
            <span className="block text-[#1C1917]">Akhin Kishor</span>
            <span className="font-script font-normal text-3xl sm:text-4xl md:text-5xl text-[#C5A059] my-1 block">
              &
            </span>
            <span className="block text-[#1C1917]">Jishna Vijayan</span>
          </h1>
        </div>

        {/* Auspicious Date Callout */}
        <div className="mt-4 mb-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm md:text-base text-stone-700">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-[#8C6A28]" />
            <span>20 Jan (Ceremony) & 23 Jan 2027 (Reception)</span>
          </div>
          <span className="hidden sm:inline text-stone-300">|</span>
          <div className="flex items-center gap-1.5 text-stone-600">
            <MapPin className="w-4 h-4 text-[#8C6A28]" />
            <span>Guruvayur & Wayanad, Kerala</span>
          </div>
        </div>

        {/* Live Countdown Timer (inspired by the uploaded mockup reference) */}
        <div className="w-full max-w-xl mx-auto bg-white/80 backdrop-blur-sm border border-[#C5A059]/35 rounded-2xl p-5 md:p-6 shadow-lg shadow-stone-900/5 mb-8">
          <p className="text-xs uppercase tracking-widest text-[#8C6A28] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Counting Down to the Auspicious Reception</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="bg-[#FAF7F2] border border-[#E8DFC8] rounded-xl py-3 px-1 sm:px-3">
              <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-stone-900">
                {countdown.days}
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">
                Days
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E8DFC8] rounded-xl py-3 px-1 sm:px-3">
              <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-stone-900">
                {countdown.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">
                Hours
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E8DFC8] rounded-xl py-3 px-1 sm:px-3">
              <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-stone-900">
                {countdown.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">
                Minutes
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E8DFC8] rounded-xl py-3 px-1 sm:px-3">
              <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#8C6A28]">
                {countdown.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">
                Seconds
              </span>
            </div>
          </div>
          <p className="text-[11px] text-stone-500 mt-3 italic">
            Reception: Saturday, 23 January 2027 · 4:00 PM – 8:00 PM (Groom's Residence, Wayanad)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onScrollToSection('events')}
            className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-[#FAF7F2] text-sm font-medium shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            Wedding Events
          </button>
          <button
            onClick={() => onScrollToSection('venue')}
            className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b58f48] text-stone-950 text-sm font-semibold shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Location & Map
          </button>
          <button
            onClick={() => onScrollToSection('rsvp')}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-sm font-medium transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            Confirm RSVP
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => onScrollToSection('couple')}
          className="mt-10 text-stone-400 hover:text-stone-700 transition-colors flex flex-col items-center gap-1 text-xs cursor-pointer"
          aria-label="Scroll to couple introduction"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </header>
  );
};
