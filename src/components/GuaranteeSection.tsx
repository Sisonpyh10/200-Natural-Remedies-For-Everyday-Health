import React from 'react';
import { Lock, Award, ShieldCheck } from 'lucide-react';

interface GuaranteeSectionProps {
  onBuyWithGuarantee: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  onBuyWithGuarantee,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-[#faf8f5] border-b border-[#ede7df]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Graphic Seal + Mockup + Trust Badges */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#f9f7f0] to-[#f2ede4] border border-[#e2d8c9] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col items-center">
              <div className="flex items-center justify-center gap-6 w-full">
                {/* 60 Day Guarantee Gold Seal */}
                <div className="w-28 sm:w-32 aspect-square rounded-full border-4 border-[#c5a059] bg-[#fbf9f2] flex flex-col items-center justify-center text-center p-2 shadow-sm shrink-0">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#70501f] leading-none font-serif-display">
                    60
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8a682f]">
                    Day
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#a8823b]">
                    Guarantee
                  </span>
                </div>

                {/* Book cover mockup */}
                <div className="w-32 sm:w-36 aspect-3/4 rounded-lg overflow-hidden shadow-lg border border-stone-200">
                  <img
                    src="/images/free_cover.png"
                    alt="200 Natural Remedies Book Guarantee Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Secure Checkout & Satisfaction Guaranteed Badges */}
              <div className="flex items-center justify-center gap-8 mt-6 pt-5 border-t border-[#dfd3c0] w-full text-stone-700">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold">
                    Secure<br />Checkout
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-[#fbf2dd] text-[#936d28] flex items-center justify-center mb-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold">
                    Satisfaction<br />Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Guarantee Description & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight tracking-tight">
              Risk-Free Purchase
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Try the book for 60 days.
              </p>
              <p>
                If it's not what you expected, just email us and we'll refund your money. That simple.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBuyWithGuarantee}
                className="bg-[#5f7d54] hover:bg-[#506c46] active:bg-[#435c3b] text-white font-bold py-3.5 px-8 rounded-lg shadow-sm hover:shadow-md transition-all text-base tracking-wide cursor-pointer uppercase"
              >
                Buy With Guarantee
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
