import React, { useState } from 'react';
import { SYMPTOMS_LIST } from '../data/content';

interface GrandmotherStoryProps {
  onGetCopy: () => void;
}

export const GrandmotherStory: React.FC<GrandmotherStoryProps> = ({ onGetCopy }) => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#ede7df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight">
              What do you do when you want a natural option and don't know where to start?
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                You search online and get 10 answers that all contradict each other.
                Nobody gives you a straight answer.
              </p>
              <p>
                Your grandmother never would have had that problem. She knew exactly what to do with what she had in the kitchen, no complications.
              </p>
              <p>
                This book is that knowledge. Organized by problem. With clear instructions for each remedy: quantities, preparation, and how to use it.
              </p>
              <p className="font-semibold text-stone-900">
                The 200 most-needed solutions for everyday life — ready when you need them.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onGetCopy}
                className="bg-[#5f7d54] hover:bg-[#506c46] active:bg-[#435c3b] text-white font-bold py-3.5 px-8 rounded-lg shadow-sm hover:shadow-md transition-all text-base tracking-wide cursor-pointer"
              >
                Get Your Copy
              </button>
            </div>
          </div>

          {/* Right Image & Symptoms Column */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Woman reading photo */}
            <div className="relative w-full sm:w-3/5 rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <img
                src="/images/natural_option_cover.png"
                alt="Woman with 200 Natural Remedies book in kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-3/4"
              />
            </div>

            {/* Symptoms list matching screenshot */}
            <div className="w-full sm:w-2/5 flex flex-col space-y-3 sm:space-y-4 pt-2">
              {SYMPTOMS_LIST.map((item) => {
                const isSelected = activeSymptom === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveSymptom(isSelected ? null : item.id)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#f1f6ef] border-[#4a6b46] shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl select-none">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-bold text-stone-800 leading-tight">
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="text-xs text-[#3d5a39] font-medium mt-1 leading-snug">
                            {item.remedyPreview}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center gap-2 pl-2 pt-1 text-stone-600 font-medium text-sm">
                <span className="text-lg">✨</span>
                <span>and much more...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
