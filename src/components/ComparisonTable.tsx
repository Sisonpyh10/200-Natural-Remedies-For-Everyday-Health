import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const criteria = [
    'Simple, actionable recipes',
    'Easy-to-find ingredients',
    'Full-color images',
    'Clear for beginners, useful for experts',
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#e7efe5] border-b border-[#cde0ca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Section Header */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight tracking-tight">
              Why This Book and Not Just Any Remedy Book
            </h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              This isn't just another "natural tips" book.
            </p>
            <p className="text-stone-800 text-base sm:text-lg font-semibold">
              It's a practical guide made to actually be used, in real life.
            </p>
          </div>

          {/* Right: Comparison Matrix Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-md border border-[#c4d8bf] overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-12 items-center border-b border-stone-200">
                <div className="col-span-6 bg-[#628157] text-white py-3.5 sm:py-4 px-3.5 sm:px-5 flex items-center gap-3">
                  <div className="w-11 h-16 sm:w-13 sm:h-19 rounded-md shadow-sm overflow-hidden shrink-0 border border-white/30 bg-stone-900/10">
                    <img
                      src="/src/assets/images/natural_remedies_cover.png"
                      alt="200 Natural Remedies Book Cover"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-sm sm:text-base font-serif-display leading-snug tracking-tight">
                    200 Natural Remedies
                  </span>
                </div>

                <div className="col-span-6 bg-stone-50 py-3.5 sm:py-4 px-4 text-center font-bold text-stone-600 text-xs sm:text-sm uppercase tracking-wider">
                  Others
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-stone-100">
                {criteria.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center">
                    {/* Left: Criteria label + Checkmark */}
                    <div className="col-span-6 bg-[#6b8b5f] text-white py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold flex items-center justify-between">
                      <span className="leading-snug pr-2">{item}</span>
                    </div>

                    {/* Right 2 columns: Checkmark vs X */}
                    <div className="col-span-3 py-3.5 flex justify-center items-center bg-white border-r border-stone-100">
                      <div className="w-6 h-6 rounded-full bg-[#e8f3e5] text-[#3d6735] flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>

                    <div className="col-span-3 py-3.5 flex justify-center items-center bg-stone-50/50">
                      <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center">
                        <X className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
