import React from 'react';
import { TIMELINE_PROGRAM } from '../data/weddingData';
import { Clock, Wine, Sparkles, Camera, Utensils, Music, Award } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'welcome':
        return <Award className="w-4 h-4 text-[#C5A059]" />;
      case 'lamp':
        return <Sparkles className="w-4 h-4 text-[#C5A059]" />;
      case 'camera':
        return <Camera className="w-4 h-4 text-[#C5A059]" />;
      case 'feast':
        return <Utensils className="w-4 h-4 text-[#C5A059]" />;
      case 'music':
        return <Music className="w-4 h-4 text-[#C5A059]" />;
      default:
        return <Clock className="w-4 h-4 text-[#C5A059]" />;
    }
  };

  return (
    <section id="program" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-2">
          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Reception Itinerary</span>
          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Celebration Timeline
        </h2>
        <p className="font-serif-wedding text-stone-600 text-lg italic mt-1">
          Saturday, 23 January 2027 · 4:00 PM – 8:00 PM
        </p>
      </div>

      <div className="relative border-l-2 border-[#E8DFC8] ml-4 sm:ml-32 space-y-8 sm:space-y-10 pl-6 sm:pl-8">
        {TIMELINE_PROGRAM.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#8C6A28] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#8C6A28]" />
            </div>

            {/* Time label for desktop on the left */}
            <div className="sm:absolute sm:-left-36 sm:top-1.5 sm:text-right sm:w-28 text-xs font-bold font-mono text-[#8C6A28]">
              {item.time}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E8DFC8] shadow-sm hover:border-[#C5A059] transition-all">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8]">
                  {getIcon(item.icon)}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-9">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
