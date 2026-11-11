import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BotanicalBranch } from './BotanicalAccents';
import { calculateCountdown, generateGoogleCalendarUrl, generateIcsFileContent, GROOM_COORDINATES } from '../utils/calendar';
import { CountdownTime } from '../types/wedding';
import {
  GROOM_DETAILS,
  BRIDE_DETAILS,
  WEDDING_EVENTS,
  INVITATION_CORDIAL_TEXT,
  INVITATION_CREDITS
} from '../data/weddingData';
import {
  Calendar,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Phone,
  Share2,
  Navigation
} from 'lucide-react';

export const InvitationCards: React.FC = () => {
  // Target Reception date: Saturday, 23 January 2027 16:00 IST
  const receptionDate = new Date('2027-01-23T16:00:00+05:30');
  const [countdown, setCountdown] = useState<CountdownTime>(() =>
    calculateCountdown(receptionDate)
  );
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);
  const [copiedInvite, setCopiedInvite] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(receptionDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [receptionDate]);

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(GROOM_COORDINATES.dms);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2200);
  };

  const shareText = `*Wedding & Reception Invitation*\n\nAkhin Kishor & Jishna Vijayan\n\nWedding Ceremony: Wednesday, 20 January 2027 at Guruvayur Temple\n\nGrand Reception: Saturday, 23 January 2027 (4:00 PM – 8:00 PM) at Groom's Residence, Anchil House, Kunjom P.O., Thondernad, Wayanad.\n\nGoogle Maps: 11°45'25.5"N 75°50'41.3"E\n\n"${INVITATION_CORDIAL_TEXT}"\n\nWith regards: ${INVITATION_CREDITS.regards}\nWith best compliments: ${INVITATION_CREDITS.compliments}\n\nInvitation: ${window.location.origin}`;

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopyInvite = () => {
    navigator.clipboard.writeText(shareText);
    setCopiedInvite(true);
    setTimeout(() => setCopiedInvite(false), 2200);
  };

  const downloadIcs = (eventIndex: number) => {
    const event = WEDDING_EVENTS[eventIndex];
    const ics = generateIcsFileContent(
      event.title,
      event.description,
      event.venueAddress,
      event.startDate,
      event.endDate
    );
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-akhin-jishna.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // January 2027 Calendar Days
  const daysInMonth = 31;
  const startDayOffset = 5; // Friday
  const emptyCells = Array.from({ length: startDayOffset });
  const dateCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Reference card motion settings
  const cardMotion = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.65, ease: 'easeOut' as const },
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 space-y-7 sm:space-y-9 relative z-20">
      {/* ============================================================== */}
      {/* CARD 1: HERO, CALLIGRAPHY NAMES & CALENDAR (Reference Style)   */}
      {/* ============================================================== */}
      <motion.section {...cardMotion} className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8DFC8]/70 shadow-lg shadow-stone-900/5 relative overflow-hidden text-center">
        {/* Botanical watercolor top branch */}
        <BotanicalBranch className="-mt-2 mb-2" />

        {/* Traditional Auspicious Invocation */}
        <div className="text-[11px] tracking-[0.25em] text-[#8C6A28] font-semibold uppercase mb-2">
          ശ്രീ ഗുരുവായൂരപ്പൻ തുണ · ॐ · ശുഭം
        </div>

        {/* Calligraphy Couple Names (matching cursive reference) */}
        <div className="py-2">
          <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-tight">
            Akhin
          </h1>
          <span className="font-serif-wedding italic text-xl text-[#C5A059] block -my-1">
            and
          </span>
          <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-tight">
            Jishna
          </h1>
        </div>

        {/* Animated Groom & Bride Vector Illustration in Arched Frame */}
        <div className="my-4 flex justify-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-t-full rounded-b-3xl overflow-hidden border-2 border-[#C5A059] shadow-xl bg-[#FAF7F2] p-1"
          >
            <img
              src="/assets/aistudio/IMG_4027_7c393d31.jpeg"
              alt="Akhin Kishor & Jishna Vijayan"
              className="w-full h-full object-cover object-bottom rounded-t-full rounded-b-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-stone-900/90 text-[#E2C792] text-[9px] font-semibold tracking-wider uppercase border border-[#C5A059]/50 shadow-sm">
              Guruvayur · 2027
            </span>
          </motion.div>
        </div>

        {/* Dear Guests greeting (matching reference: "Дорогие гости!") */}
        <div className="mt-5 mb-6">
          <h2 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 mb-1.5">
            Dear Family & Friends!
          </h2>
          <p className="font-serif-wedding text-stone-600 text-sm sm:text-base italic max-w-xs mx-auto leading-relaxed">
            With great joy and our parents' blessings, we invite you to celebrate our wedding and reception, which will take place on:
          </p>
        </div>

        {/* Month Calendar Block (matching reference calendar) */}
        <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFC8]/80 max-w-sm mx-auto">
          <div className="text-center mb-4">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900">
              January 2027
            </h3>
            <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-0.5">
              1202 Makaram (കൊല്ലവർഷം 1202 മകരം)
            </p>
          </div>

          {/* Weekday headers: Mo Tu We Th Fr Sa Su */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-stone-400 mb-2">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>

          {/* Grid of days (Jan 1 2027 is Friday) */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {/* Empty slots for Mon-Thu (4 slots) */}
            <div className="h-8 w-8 mx-auto" />
            <div className="h-8 w-8 mx-auto" />
            <div className="h-8 w-8 mx-auto" />
            <div className="h-8 w-8 mx-auto" />

            {dateCells.map((day) => {
              const isCeremony = day === 20; // Wed 20 Jan
              const isReception = day === 23; // Sat 23 Jan

              if (isCeremony) {
                return (
                  <div
                    key={day}
                    className="h-8 w-8 mx-auto rounded-full bg-[#E2C792] border-2 border-[#8C6A28] text-stone-950 font-bold flex flex-col items-center justify-center relative shadow-sm"
                    title="20 Jan: Wedding Ceremony at Guruvayur"
                  >
                    <span className="text-[11px] leading-none">{day}</span>
                    <span className="text-[7px] leading-none text-[#8C6A28]">💍</span>
                  </div>
                );
              }

              if (isReception) {
                return (
                  <div
                    key={day}
                    className="h-8 w-8 mx-auto rounded-full bg-rose-600 border-2 border-rose-800 text-white font-bold flex flex-col items-center justify-center relative shadow-sm shadow-rose-600/30 animate-pulse"
                    title="23 Jan: Wedding Reception at Wayanad"
                  >
                    <span className="text-[11px] leading-none">{day}</span>
                    <Heart className="w-2 h-2 fill-white text-white leading-none -mt-0.5" />
                  </div>
                );
              }

              return (
                <div
                  key={day}
                  className="h-8 w-8 mx-auto rounded-full flex items-center justify-center text-stone-700"
                >
                  <span className="text-xs">{day}</span>
                </div>
              );
            })}
          </div>

          {/* Calendar Key & Add to Calendar links */}
          <div className="mt-4 pt-3 border-t border-stone-200/70 text-[11px] space-y-2 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#E2C792] border border-[#8C6A28] flex items-center justify-center text-[9px] font-bold">
                  20
                </span>
                <span className="font-medium text-stone-800">Wedding Ceremony (Guruvayur)</span>
              </div>
              <button
                onClick={() => downloadIcs(0)}
                className="text-[11px] text-[#8C6A28] hover:underline font-semibold cursor-pointer"
              >
                + .ics
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-rose-600 border border-rose-800 text-white flex items-center justify-center text-[9px] font-bold">
                  23
                </span>
                <span className="font-medium text-stone-800">Grand Reception (Wayanad)</span>
              </div>
              <button
                onClick={() => downloadIcs(1)}
                className="text-[11px] text-[#8C6A28] hover:underline font-semibold cursor-pointer"
              >
                + .ics
              </button>
            </div>
          </div>
        </div>

        {/* Botanical bottom accent */}
        <BotanicalBranch className="mt-4 -mb-3" flipped />
      </motion.section>

      {/* ============================================================== */}
      {/* CARD 2: VENUES ("Место проведения" in reference style)        */}
      {/* ============================================================== */}
      <motion.section {...cardMotion} className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8DFC8]/70 shadow-lg shadow-stone-900/5 relative overflow-hidden text-center">
        <BotanicalBranch className="-mt-2 mb-2" />

        <div className="text-[11px] tracking-[0.25em] text-[#8C6A28] font-semibold uppercase mb-1">
          Venues · വേദികൾ
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-stone-900 mb-6">
          Location & Muhurtham
        </h2>

        {/* Ceremony Block */}
        <div className="text-left mb-6 pb-6 border-b border-stone-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6A28]">
              Wedding Ceremony · താലികെട്ട്
            </span>
            <span className="text-xs text-stone-400 font-mono">1202 Makaram 6</span>
          </div>
          <h3 className="font-cinzel text-lg font-bold text-stone-900">
            Guruvayur Sree Krishna Temple
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Wednesday, 20 January 2027 · Morning Auspicious Muhurtham
          </p>
          <p className="text-xs text-stone-500">
            Guruvayur, Thrissur District, Kerala
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#8C6A28] hover:underline font-medium mt-2"
          >
            <span>View Guruvayur on Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Reception Block (Primary) */}
        <div className="text-left">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">
              Grand Reception · സൽക്കാരം
            </span>
            <span className="text-xs text-stone-500 font-semibold">4:00 PM – 8:00 PM</span>
          </div>
          <h3 className="font-cinzel text-lg font-bold text-stone-900">
            Groom's Residence (Anchil House)
          </h3>
          <p className="text-xs text-stone-700 font-medium mt-0.5">
            Saturday, 23 January 2027 · Anchil House, Kunjom P.O., Thondernad, Wayanad
          </p>
          <p className="text-[11px] font-mono text-[#8C6A28] mt-1">
            GPS: 11°45'25.5"N 75°50'41.3"E
          </p>

          {/* Embedded Interactive Map Preview */}
          <div className="mt-4 rounded-2xl overflow-hidden border border-stone-200 h-44 relative bg-stone-100">
            <iframe
              title="Anchil House Reception Venue"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=75.834806%2C11.747083%2C75.854806%2C11.767083&layer=mapnik&marker=${GROOM_COORDINATES.lat}%2C${GROOM_COORDINATES.lng}`}
              className="w-full h-full"
            />
          </div>

          {/* Action buttons (matching "Посмотреть на карте" in reference) */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=11.757083,75.844806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#4A6B53] hover:bg-[#3D5A45] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Show on Map →</span>
            </a>

            <button
              onClick={handleCopyCoordinates}
              className="py-2.5 px-3.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-mono font-medium flex items-center gap-1 transition-all cursor-pointer"
              title="Copy GPS coordinates"
            >
              {copiedCoords ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>11°45'25.5"N</span>
                </>
              )}
            </button>
          </div>
        </div>

        <BotanicalBranch className="mt-5 -mb-3" flipped />
      </motion.section>

      {/* ============================================================== */}
      {/* CARD 3: WISHES / REGARDS ("Пожелания" in reference style)      */}
      {/* ============================================================== */}
      <motion.section {...cardMotion} className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8DFC8]/70 shadow-lg shadow-stone-900/5 relative overflow-hidden text-center">
        <BotanicalBranch className="-mt-2 mb-2" />

        <div className="text-[11px] tracking-[0.25em] text-[#8C6A28] font-semibold uppercase mb-1">
          With Warm Regards · ആശംസകൾ
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-stone-900 mb-4">
          Cordial Invitation
        </h2>

        <blockquote className="font-serif-wedding text-base sm:text-lg text-stone-700 italic leading-relaxed max-w-sm mx-auto mb-6">
          "{INVITATION_CORDIAL_TEXT}"
        </blockquote>

        <div className="space-y-4 max-w-sm mx-auto text-left text-xs text-stone-600 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8]/70">
          <div>
            <span className="font-bold uppercase tracking-wider text-[#8C6A28] text-[10px] block mb-0.5">
              With Regards:
            </span>
            <p className="font-cinzel font-bold text-stone-900 text-sm">
              {INVITATION_CREDITS.regards}
            </p>
            <p className="text-stone-500 text-[11px]">Parents of the Groom</p>
          </div>

          <div className="pt-2 border-t border-stone-200/60">
            <span className="font-bold uppercase tracking-wider text-[#8C6A28] text-[10px] block mb-0.5">
              With Best Compliments:
            </span>
            <p className="font-cinzel font-bold text-stone-900 text-sm">
              {INVITATION_CREDITS.compliments}
            </p>
            <p className="text-stone-500 text-[11px]">Anchil & Puthumana Families</p>
          </div>
        </div>

        <BotanicalBranch className="mt-4 -mb-3" flipped />
      </motion.section>

      {/* ============================================================== */}
      {/* CARD 4: DEEP SAGE GREEN COUNTDOWN CARD (Exact reference style) */}
      {/* ============================================================== */}
      <motion.section {...cardMotion} className="bg-[#425E49] text-white rounded-[32px] p-7 sm:p-9 shadow-xl relative overflow-hidden text-center">
        {/* Subtle decorative gold sparkles */}
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E2C792] mb-3">
          We would be happy to share this day with you
        </div>

        <div className="text-xs font-light tracking-[0.3em] uppercase text-emerald-100/80 mb-5">
          Counting down in...
        </div>

        {/* Big clean minimalist numbers matching reference */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
          <div className="py-2">
            <span className="font-cinzel text-3xl sm:text-4xl font-bold block text-white leading-none">
              {countdown.days}
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-100/70 uppercase tracking-widest mt-1 block">
              Days
            </span>
          </div>

          <div className="py-2">
            <span className="font-cinzel text-3xl sm:text-4xl font-bold block text-white leading-none">
              {countdown.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-100/70 uppercase tracking-widest mt-1 block">
              Hours
            </span>
          </div>

          <div className="py-2">
            <span className="font-cinzel text-3xl sm:text-4xl font-bold block text-white leading-none">
              {countdown.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-100/70 uppercase tracking-widest mt-1 block">
              Minutes
            </span>
          </div>

          <div className="py-2">
            <span className="font-cinzel text-3xl sm:text-4xl font-bold block text-[#E2C792] leading-none">
              {countdown.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-100/70 uppercase tracking-widest mt-1 block">
              Seconds
            </span>
          </div>
        </div>

        <p className="text-[11px] text-emerald-100/80 italic mt-6">
          Saturday, 23 January 2027 · Groom's Residence, Wayanad
        </p>
      </motion.section>

      {/* ============================================================== */}
      {/* CARD 5: CONTACTS & DIRECTIONS ("Контакты" in reference style)  */}
      {/* ============================================================== */}
      <motion.section {...cardMotion} className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8DFC8]/70 shadow-lg shadow-stone-900/5 relative overflow-hidden text-center">
        <BotanicalBranch className="-mt-2 mb-2" />

        <div className="text-[11px] tracking-[0.25em] text-[#8C6A28] font-semibold uppercase mb-1">
          Contacts · ബന്ധപ്പെടാൻ
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-stone-900 mb-6">
          Family Contacts
        </h2>

        <div className="space-y-5 max-w-sm mx-auto text-left">
          {/* Groom Contact */}
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8]/70">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6A28] block mb-0.5">
              Groom:
            </span>
            <p className="font-cinzel font-bold text-stone-900 text-sm">
              {GROOM_DETAILS.name}
            </p>
            <p className="text-xs text-stone-600 mt-0.5">
              {GROOM_DETAILS.parents}
            </p>
            <p className="text-xs text-stone-500">
              {GROOM_DETAILS.house}, {GROOM_DETAILS.postOffice}, {GROOM_DETAILS.village}, {GROOM_DETAILS.district}
            </p>
            <a
              href={`tel:${GROOM_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-xs text-[#8C6A28] font-semibold hover:underline mt-2"
            >
              <Phone className="w-3 h-3" />
              <span>{GROOM_DETAILS.phone}</span>
            </a>
          </div>

          {/* Bride Contact */}
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8]/70">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6A28] block mb-0.5">
              Bride:
            </span>
            <p className="font-cinzel font-bold text-stone-900 text-sm">
              {BRIDE_DETAILS.name}
            </p>
            <p className="text-xs text-stone-600 mt-0.5">
              {BRIDE_DETAILS.parents}
            </p>
            <p className="text-xs text-stone-500">
              {BRIDE_DETAILS.house}, {BRIDE_DETAILS.postOffice}, {BRIDE_DETAILS.village}, {BRIDE_DETAILS.district}
            </p>
            <a
              href={`tel:${BRIDE_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-xs text-[#8C6A28] font-semibold hover:underline mt-2"
            >
              <Phone className="w-3 h-3" />
              <span>{BRIDE_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Share buttons */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-center gap-2 max-w-sm mx-auto">
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={handleCopyInvite}
            className="py-2.5 px-3.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            {copiedInvite ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <BotanicalBranch className="mt-5 -mb-3" flipped />
      </motion.section>
    </div>
  );
};
