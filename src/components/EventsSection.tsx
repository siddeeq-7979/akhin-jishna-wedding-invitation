import React from 'react';
import { WEDDING_EVENTS, INVITATION_CORDIAL_TEXT } from '../data/weddingData';
import { CalendarCard } from './CalendarCard';
import { generateGoogleCalendarUrl } from '../utils/calendar';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Navigation } from 'lucide-react';

interface EventsSectionProps {
  onSelectVenueOnMap?: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectVenueOnMap }) => {
  return (
    <section id="events" className="py-16 px-4 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ceremony & Reception</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Schedule of Auspicious Events
          </h2>
          <p className="font-serif-wedding text-stone-600 text-lg max-w-xl mx-auto italic mt-2">
            "{INVITATION_CORDIAL_TEXT}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The 2 Event Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Event 1: Wedding Ceremony at Guruvayur */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-md relative overflow-hidden transition-all hover:shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6A28] bg-[#F6F1E7] px-3 py-1 rounded-full">
                  Wedding Ceremony · വിവാഹം
                </span>
                <span className="text-xs text-stone-500 font-medium">1202 Makaram 6</span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-stone-900 mb-1">
                {WEDDING_EVENTS[0].title}
              </h3>

              <p className="text-sm text-stone-600 mb-5 italic">
                {WEDDING_EVENTS[0].subTitle}
              </p>

              <div className="space-y-2.5 text-sm text-stone-700 mb-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8]/60">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#8C6A28] shrink-0" />
                  <span className="font-semibold text-stone-900">{WEDDING_EVENTS[0].dateStr}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8C6A28] shrink-0" />
                  <span>{WEDDING_EVENTS[0].timeStr}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">{WEDDING_EVENTS[0].venue}</span>
                    <p className="text-xs text-stone-500">{WEDDING_EVENTS[0].venueAddress}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={generateGoogleCalendarUrl(
                    WEDDING_EVENTS[0].title,
                    WEDDING_EVENTS[0].description,
                    WEDDING_EVENTS[0].venueAddress,
                    WEDDING_EVENTS[0].startDate,
                    WEDDING_EVENTS[0].endDate
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  Add to Google Calendar
                </a>

                <a
                  href={WEDDING_EVENTS[0].googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Guruvayur Temple Map
                </a>
              </div>
            </div>

            {/* Event 2: Grand Reception at Groom's Residence, Wayanad (Highlighted Primary Invitation) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C5A059] shadow-xl relative overflow-hidden transition-all hover:border-[#8C6A28]">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#996515] via-[#E2C792] to-[#8C6A28]" />

              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#8C6A28] px-3.5 py-1 rounded-full shadow-sm">
                  Grand Reception · സൽക്കാരം
                </span>
                <span className="text-xs font-semibold text-[#8C6A28]">
                  cordially invited with family
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
                {WEDDING_EVENTS[1].title}
              </h3>

              <p className="text-sm text-stone-600 mb-5 italic">
                {WEDDING_EVENTS[1].subTitle}
              </p>

              <div className="space-y-3 text-sm text-stone-700 mb-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8]">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#8C6A28] shrink-0" />
                  <span className="font-semibold text-stone-900 text-base">{WEDDING_EVENTS[1].dateStr}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8C6A28] shrink-0" />
                  <span className="font-semibold text-stone-800">{WEDDING_EVENTS[1].timeStr}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-base">{WEDDING_EVENTS[1].venue}</span>
                    <p className="text-xs text-stone-600 mt-0.5">{WEDDING_EVENTS[1].venueAddress}</p>
                    <p className="text-[11px] font-mono text-[#8C6A28] mt-1">
                      GPS: 11°45'25.5"N 75°50'41.3"E
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={generateGoogleCalendarUrl(
                    WEDDING_EVENTS[1].title,
                    WEDDING_EVENTS[1].description,
                    WEDDING_EVENTS[1].venueAddress,
                    WEDDING_EVENTS[1].startDate,
                    WEDDING_EVENTS[1].endDate
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  Add to Google Calendar
                </a>

                {onSelectVenueOnMap ? (
                  <button
                    onClick={onSelectVenueOnMap}
                    className="px-4 py-2 rounded-full bg-[#C5A059] hover:bg-[#b08b47] text-stone-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    View Map & Route
                  </button>
                ) : (
                  <a
                    href={WEDDING_EVENTS[1].googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#C5A059] hover:bg-[#b08b47] text-stone-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Calendar Card & Save Date Highlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <CalendarCard />

            <div className="bg-gradient-to-br from-[#F5EEDC] to-[#EFE3C8] rounded-3xl p-6 border border-[#C5A059]/40 text-stone-800 text-center">
              <span className="text-2xl" role="img" aria-label="Auspicious garland">🌸</span>
              <h4 className="font-cinzel text-lg font-bold text-stone-900 mt-2 mb-1">
                Your Presence is Our Blessing
              </h4>
              <p className="font-serif-wedding text-stone-600 text-sm italic">
                Join us to celebrate the joy, traditions, and unforgettable moments of Akhin & Jishna's new beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
