import React from 'react';

interface PeaceOfMindSectionProps {
  onClaimOffer: () => void;
}

export const PeaceOfMindSection: React.FC<PeaceOfMindSectionProps> = ({ onClaimOffer }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#faf8f5] border-b border-[#ede7df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Split Photography Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-3/4">
              <img
                src="/src/assets/images/demonstration_2.png"
                alt="200 Natural Solutions book demonstration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-3/4">
              <img
                src="/src/assets/images/natural_cover.png"
                alt="Natural remedies and everyday home care"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Message and CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight tracking-tight">
              More Natural Options. More Knowledge. More Peace of Mind at Home.
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                When you listen to your body and give it what it needs, everything starts to fall into place.
              </p>
              <p className="font-medium text-stone-800">
                Natural solutions to support you day to day.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onClaimOffer}
                className="bg-[#5f7d54] hover:bg-[#506c46] active:bg-[#435c3b] text-white font-bold py-3.5 px-8 rounded-lg shadow-sm hover:shadow-md transition-all text-base tracking-wide cursor-pointer"
              >
                Claim Your Offer!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
