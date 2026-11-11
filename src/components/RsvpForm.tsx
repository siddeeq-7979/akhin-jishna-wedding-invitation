import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, CheckCircle2, Send, Users, Utensils, MessageSquare, Phone, User } from 'lucide-react';
import { RsvpSubmission } from '../types/wedding';

export const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState<RsvpSubmission>({
    name: '',
    phone: '',
    attendance: 'attending',
    guestCount: 2,
    dietPreference: 'traditional-sadya',
    wishes: '',
    submittedAt: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#E2C792', '#8C6A28', '#264E36', '#FAF7F2'],
      });
    } catch {
      // Fallback if canvas confetti fails
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      setErrorMsg('Please enter a valid contact phone number');
      return;
    }

    const submission: RsvpSubmission = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push(submission);
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    } catch {
      // safe fallback
    }

    setSubmitted(true);
    triggerCelebration();
  };

  return (
    <section id="rsvp" className="py-16 px-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-xl relative overflow-hidden">
        {/* Top gold kasavu border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#996515] via-[#C5A059] to-[#8C6A28]" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>RSVP · സദയം അറിയിക്കുക</span>
          </div>
          <h2 className="font-cinzel text-3xl font-bold text-stone-900 tracking-tight">
            Confirm Your Attendance
          </h2>
          <p className="font-serif-wedding text-stone-600 text-base italic mt-1">
            Kindly let us know if you will be joining us so we can arrange a warm Kerala Sadya and welcome for you and your family.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 px-4 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-cinzel text-2xl font-bold text-stone-900 mb-1">
              Thank You, {formData.name}!
            </h3>
            <p className="font-serif-wedding text-stone-700 text-base max-w-md mx-auto italic mb-4">
              Your response has been received with joy. The Anchil family warmly awaits welcoming you to Kunjom, Wayanad on Saturday, 23 January 2027!
            </p>
            <div className="inline-block text-xs bg-white px-4 py-2 rounded-xl border border-stone-200 text-stone-600 mb-6">
              Status: <span className="font-semibold text-stone-900 capitalize">{formData.attendance.replace('-', ' ')}</span> · Guests: {formData.guestCount}
            </div>
            <div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#8C6A28] hover:underline font-semibold cursor-pointer"
              >
                Change or Update Response
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl">
                {errorMsg}
              </div>
            )}

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhakrishnan Nair & Family"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none text-sm transition-all bg-[#FAF7F2]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none text-sm transition-all bg-[#FAF7F2]/50"
                  />
                </div>
              </div>
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                Will you be attending the reception? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all text-xs font-medium ${
                    formData.attendance === 'attending'
                      ? 'border-[#8C6A28] bg-[#F6F1E7] text-stone-900 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="attending"
                    checked={formData.attendance === 'attending'}
                    onChange={() => setFormData({ ...formData, attendance: 'attending' })}
                    className="text-[#8C6A28] focus:ring-[#8C6A28]"
                  />
                  <span>Yes, with Family!</span>
                </label>

                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all text-xs font-medium ${
                    formData.attendance === 'tentative'
                      ? 'border-[#8C6A28] bg-[#F6F1E7] text-stone-900 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="tentative"
                    checked={formData.attendance === 'tentative'}
                    onChange={() => setFormData({ ...formData, attendance: 'tentative' })}
                    className="text-[#8C6A28] focus:ring-[#8C6A28]"
                  />
                  <span>Will confirm closer</span>
                </label>

                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all text-xs font-medium ${
                    formData.attendance === 'not-attending'
                      ? 'border-stone-500 bg-stone-100 text-stone-900 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="not-attending"
                    checked={formData.attendance === 'not-attending'}
                    onChange={() => setFormData({ ...formData, attendance: 'not-attending' })}
                    className="text-stone-700 focus:ring-stone-700"
                  />
                  <span>Regretfully unable</span>
                </label>
              </div>
            </div>

            {/* Guest Count & Feast Preference */}
            {formData.attendance !== 'not-attending' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Number of Attendees
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: parseInt(e.target.value, 10) })
                      }
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none text-sm transition-all bg-[#FAF7F2]/50"
                    >
                      <option value={1}>1 Guest (Just me)</option>
                      <option value={2}>2 Guests (Couple)</option>
                      <option value={3}>3 Guests (Family)</option>
                      <option value={4}>4 Guests (Family)</option>
                      <option value={5}>5+ Guests (Large Family)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Feast Preference
                  </label>
                  <div className="relative">
                    <Utensils className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.dietPreference}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dietPreference: e.target.value as RsvpSubmission['dietPreference'],
                        })
                      }
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none text-sm transition-all bg-[#FAF7F2]/50"
                    >
                      <option value="traditional-sadya">Traditional Kerala Sadya</option>
                      <option value="vegetarian">Pure Vegetarian Feast</option>
                      <option value="non-veg-feast">Festive Banquet Buffet</option>
                      <option value="any">Any / Delighted with everything</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Blessings message */}
            <div>
              <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                Blessings or Wishes for Akhin & Jishna (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <textarea
                  rows={2}
                  placeholder="Share a heartfelt blessing or message for the couple..."
                  value={formData.wishes}
                  onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none text-sm transition-all bg-[#FAF7F2]/50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8C6A28] to-[#C5A059] hover:from-[#7A5A1F] hover:to-[#B58F48] text-stone-950 font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-stone-950" />
              <span>Submit RSVP Confirmation</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
