import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const highlightedQuotes = [
    {
      author: 'María Laura R.',
      text: "I bought it pretty skeptical because I'd never made home remedies before and I thought it would be complicated or unclear. Honestly, it surprised me in a good way. Everything is explained step by step with ingredients that are easy to find. I started using it for digestion issues and to sleep better, and now I always keep it in the kitchen.",
    },
    {
      author: 'Julia S.',
      text: "Since I started following the recipes in the book, I don't feel as bloated anymore and I sleep a lot better.",
    },
    {
      author: 'Jorge L.',
      text: "I work in construction and my back is my worst enemy. I can't go to the doctor every time — that's $300 I don't have. The arnica and rosemary balm from the book changed my life. My coworkers ask me for the remedy too.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#ede7df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display tracking-tight">
            What people who already use it are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {highlightedQuotes.map((q, idx) => (
            <div
              key={idx}
              className="relative bg-stone-50/80 hover:bg-stone-50 border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
            >
              {/* Quote icon bubble matching screenshot */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#8c6747]/90 text-white flex items-center justify-center shadow-xs">
                <Quote className="w-4 h-4 fill-white" />
              </div>

              <div>
                {/* 5 gold stars */}
                <div className="flex items-center gap-1 text-[#f59e0b] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                  ))}
                </div>

                <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed italic">
                  "{q.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 text-center">
                <span className="text-sm font-bold text-stone-900 tracking-wide font-serif-display">
                  {q.author}
                </span>
                <span className="block text-[11px] text-[#4a6b46] font-medium mt-0.5">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
