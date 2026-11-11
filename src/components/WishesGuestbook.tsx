import React, { useState } from 'react';
import { INITIAL_WISHES } from '../data/weddingData';
import { WishMessage } from '../types/wedding';
import { Heart, MessageCircle, Send, Sparkles } from 'lucide-react';

export const WishesGuestbook: React.FC = () => {
  const [wishes, setWishes] = useState<WishMessage[]>(() => {
    try {
      const stored = localStorage.getItem('wedding_wishes');
      return stored ? JSON.parse(stored) : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [author, setAuthor] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [message, setMessage] = useState('');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newWish: WishMessage = {
      id: `wish-${Date.now()}`,
      name: author.trim(),
      relation: relation.trim() || 'Well-wisher',
      message: message.trim(),
      timestamp: 'Just now',
      likes: 1,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes', JSON.stringify(updated));
    } catch {
      // safe fallback
    }

    setAuthor('');
    setMessage('');
  };

  const handleLike = (id: string) => {
    const isLiked = likedMap[id];
    setLikedMap((prev) => ({ ...prev, [id]: !isLiked }));

    setWishes((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            likes: isLiked ? w.likes - 1 : w.likes + 1,
          };
        }
        return w;
      })
    );
  };

  return (
    <section id="wishes" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-1">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Warm Blessings</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-3xl font-bold text-stone-900 tracking-tight">
          Guestbook & Blessings
        </h2>
        <p className="font-serif-wedding text-stone-600 text-base italic mt-1">
          Shower Akhin & Jishna with your heartfelt wishes and prayers for their blessed married life
        </p>
      </div>

      {/* Add a Wish Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFC8] shadow-md mb-8">
        <form onSubmit={handleAddWish} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vineeth & Family"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none text-xs sm:text-sm bg-[#FAF7F2]/40"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Relationship
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none text-xs sm:text-sm bg-[#FAF7F2]/40"
              >
                <option value="Friend">Friend</option>
                <option value="Relative">Relative</option>
                <option value="Family Friend">Family Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Well-wisher">Well-wisher</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Your Message or Blessing
            </label>
            <textarea
              required
              rows={2}
              placeholder="May your life together be blessed with endless happiness and good health..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none text-xs sm:text-sm bg-[#FAF7F2]/40"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-[#C5A059] hover:bg-[#b08b47] text-stone-950 font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 fill-stone-950" />
              <span>Post Blessing</span>
            </button>
          </div>
        </form>
      </div>

      {/* Wishes stream */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishes.map((w) => {
          const isLiked = !!likedMap[w.id];
          return (
            <div
              key={w.id}
              className="bg-white rounded-2xl p-5 border border-[#E8DFC8] shadow-sm hover:border-[#C5A059] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-stone-900 leading-tight">
                      {w.name}
                    </h4>
                    <span className="text-[11px] text-[#8C6A28] font-medium">
                      {w.relation} · <span className="text-stone-400">{w.timestamp}</span>
                    </span>
                  </div>
                </div>
                <p className="font-serif-wedding text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{w.message}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="text-[10px]">Akhin & Jishna Wedding</span>
                <button
                  onClick={() => handleLike(w.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                    isLiked
                      ? 'bg-rose-50 text-rose-600 font-semibold'
                      : 'hover:bg-stone-100 text-stone-600'
                  }`}
                  aria-label="Like this blessing"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      isLiked ? 'fill-rose-600 text-rose-600' : 'text-stone-400'
                    }`}
                  />
                  <span>{w.likes}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
