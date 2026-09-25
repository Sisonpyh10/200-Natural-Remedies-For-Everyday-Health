import React from 'react';

interface GrandmotherWisdomProps {
  onBuyNow: () => void;
}

export const GrandmotherWisdom: React.FC<GrandmotherWisdomProps> = ({ onBuyNow }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#ede7df]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display tracking-tight leading-tight">
          There's a difference between knowing and searching.
        </h2>

        <div className="mt-8 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Your grandmother didn't search on Google. She didn't send messages at 11pm asking for help. She didn't wait for the clinic to open.
          </p>

          <p>
            She knew which plant. She knew how much. She knew how to prepare it. And when someone in her house felt sick, she didn't waste time — she acted.
          </p>

          <p>
            That knowledge existed for generations. And it slowly faded away, without anyone ever writing it down.
          </p>

          <p className="font-semibold text-stone-900 text-lg sm:text-xl font-serif-display pt-2">
            This book has all of that.
          </p>

          <p>
            200 solutions organized by problem. Exact dosages. Ingredients you already have in your kitchen. In plain English.
          </p>

          <p className="font-medium text-stone-900">
            So that next time your family needs you, you know too.
          </p>
        </div>

        <div className="mt-10">
          <button
            onClick={onBuyNow}
            className="bg-[#5f7d54] hover:bg-[#506c46] active:bg-[#435c3b] text-white font-bold py-3.5 px-10 rounded-lg shadow-sm hover:shadow-md transition-all text-base tracking-wide cursor-pointer uppercase"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};
