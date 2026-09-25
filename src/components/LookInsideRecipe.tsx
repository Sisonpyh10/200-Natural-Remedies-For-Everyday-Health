import React, { useState } from 'react';
import { RECIPE_SAMPLES } from '../data/content';
import { RecipeSample } from '../types';
import { BookOpen, Sparkles } from 'lucide-react';

export const LookInsideRecipe: React.FC = () => {
  const [activeRecipeId, setActiveRecipeId] = useState<string>('deep-cleanse');

  const currentRecipe: RecipeSample =
    RECIPE_SAMPLES.find((r) => r.id === activeRecipeId) || RECIPE_SAMPLES[0];

  return (
    <section id="look-inside" className="py-14 sm:py-20 bg-[#f7f5f0] border-b border-[#ede7df]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display tracking-tight">
            A look inside
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every remedy comes with real images, clear ingredients, and the complete step-by-step.
            You'll see exactly what to prepare, how to do it, and what it should look like at each stage — no guessing.
          </p>

          {/* Interactive Page Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {RECIPE_SAMPLES.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeId(recipe.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  activeRecipeId === recipe.id
                    ? 'bg-[#4a6b46] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Page {recipe.pageNumber}: {recipe.title}
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Book Page Surface */}
        <div className="relative bg-[#fffdfa] rounded-2xl shadow-xl border border-stone-200/90 p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300">
          {/* Botanical Decorative Header Border */}
          <div className="border-b border-[#2d502d]/30 pb-3 mb-8 flex items-center justify-between">
            <span className="text-stone-400 font-serif-display text-sm tracking-widest uppercase">
              200 Natural Remedies for Everyday Health
            </span>
            <span className="text-xs font-semibold text-[#4a6b46] bg-[#edf3eb] px-3 py-1 rounded-full">
              {currentRecipe.category}
            </span>
          </div>

          {/* Recipe Title with green leaf */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl sm:text-3xl">🌿</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f482d] font-serif-display tracking-tight">
              {currentRecipe.title}
            </h3>
          </div>

          {/* Main 2-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Photo, What You'll Need, Preparation/Tea Photo */}
            <div className="lg:col-span-6 space-y-6">
              {/* Photo 1: Preparation / Lifestyle */}
              <div className="rounded-xl overflow-hidden shadow-xs border border-stone-200 bg-stone-100 aspect-3/4">
                <img
                  src={currentRecipe.imageHero}
                  alt={currentRecipe.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ingredients Card: What You'll Need */}
              <div className="bg-[#fcf8f0] border border-[#ecd9b5] rounded-xl p-5 shadow-2xs">
                <div className="inline-block bg-[#f3e5c9] text-[#7d5622] px-3 py-1 rounded text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                  🌿 What You'll Need
                </div>
                <ul className="space-y-2 text-stone-800 text-sm sm:text-base font-medium">
                  {currentRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="text-[#a46d2a] text-sm">◇</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image below WHAT YOU'LL NEED */}
              <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs aspect-16/9 bg-stone-50">
                <img
                  src={currentRecipe.imageIngredients}
                  alt="Herbal tea preparation and ingredients"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Intro Body Prose, How to prepare, Amount/Frequency, Warnings */}
            <div className="lg:col-span-6 space-y-6">
              {/* Intro prose / body text with drop-cap styling */}
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed bg-[#fbf9f5] border border-[#ede6db] rounded-xl p-5 shadow-2xs">
                <p>
                  <span className="float-left text-4xl sm:text-5xl font-serif-display font-bold text-[#4a6b46] leading-none pr-3 pt-0.5 select-none">
                    {currentRecipe.intro.charAt(0)}
                  </span>
                  {currentRecipe.intro.slice(1)}
                </p>
              </div>

              {/* How to Prepare It Card */}
              <div className="bg-[#faf7f2] border border-[#e4dcce] rounded-xl p-5 shadow-2xs">
                <div className="inline-block bg-[#ebd9c1] text-[#6d4617] px-3 py-1 rounded text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                  🔧 How to Prepare It
                </div>
                <ol className="space-y-3.5 text-stone-800 text-sm sm:text-[15px]">
                  {currentRecipe.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-bold text-[#4a6b46] text-base w-5 shrink-0 tabular-nums">
                        {i + 1}.
                      </span>
                      <div>
                        <strong className="font-bold text-stone-900">{st.title}: </strong>
                        <span className="text-stone-700">{st.instruction}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Amount / Frequency Card */}
              <div className="bg-[#fcf8f0] border border-[#ebd9b5] rounded-xl p-5 shadow-2xs">
                <div className="inline-block bg-[#f3e5c9] text-[#7d5622] px-3 py-1 rounded text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                  ⏱ Amount / Frequency
                </div>
                <ul className="space-y-2 text-stone-800 text-sm sm:text-base">
                  {currentRecipe.amountFrequency.map((item, i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="text-[#a46d2a]">◇</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warnings and Precautions Card */}
              <div className="bg-[#fdf3f0] border border-[#f5cfc5] rounded-xl p-5 shadow-2xs">
                <div className="inline-block bg-[#fadacf] text-[#8c3520] px-3 py-1 rounded text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                  ⚠️ Warnings and Precautions
                </div>
                <ul className="space-y-2 text-stone-800 text-xs sm:text-sm">
                  {currentRecipe.warnings.map((w, i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="text-[#a8442c]">◇</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Page Number Center Pill & Botanical Flourish at bottom */}
          <div className="mt-12 pt-6 border-t border-stone-200/80 flex flex-col items-center justify-center">
            <div className="px-5 py-1.5 rounded-full bg-stone-100 text-stone-700 font-mono text-sm font-semibold border border-stone-300 shadow-2xs">
              {currentRecipe.pageNumber}
            </div>
            <span className="text-[11px] text-stone-400 mt-2 font-serif-display italic">
              Digital Book Excerpt · 200 Natural Remedies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
