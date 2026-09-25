import React from 'react';
import { BookOpen, ShieldCheck } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#d9e6d5]/80 via-[#e2ede0]/90 to-[#d9e6d5]/80 border border-[#c4d8bf] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#bad2b4]">
            {/* Pillar 1: 200+ Natural Remedies */}
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-16 h-16 text-[#385534] flex items-center justify-center mb-2">
                {/* Botanical leaves icon */}
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#385534] stroke-2">
                  <path d="M12 40C12 40 18 28 32 20C32 20 22 18 16 28C14 31.33 13 36 12 40Z" fill="#a4c49d" fillOpacity="0.4" />
                  <path d="M26 23C32 17 40 8 40 8C40 8 31 16 26 23Z" />
                  <path d="M22 27C17 21 8 16 8 16C8 16 17 21 22 27Z" />
                  <path d="M14 42C18 36 28 26 40 8" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#273a25] font-serif-display">
                200+ Natural<br />Remedies
              </h3>
            </div>

            {/* Pillar 2: Clear, Practical Recipes */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
              <div className="w-16 h-16 text-[#385534] flex items-center justify-center mb-2">
                {/* Open book with pestle */}
                <div className="relative">
                  <BookOpen className="w-12 h-12 stroke-[1.75] text-[#385534]" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#385534] text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#273a25] font-serif-display">
                Clear, Practical<br />Recipes
              </h3>
            </div>

            {/* Pillar 3: 60-Day Guarantee */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
              <div className="w-16 h-16 text-[#385534] flex items-center justify-center mb-2">
                <ShieldCheck className="w-12 h-12 stroke-[1.75] text-[#385534]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#273a25] font-serif-display">
                60-Day<br />Guarantee
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
