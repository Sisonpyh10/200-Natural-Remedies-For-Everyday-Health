import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Tag, ShieldCheck, Sparkles, BookOpen, Smartphone } from 'lucide-react';
import { FAQS } from '../data/content';

interface HeroProductProps {
  onAddToCart: () => void;
  onScrollToLookInside: () => void;
}

export const HeroProduct: React.FC<HeroProductProps> = ({
  onAddToCart,
  onScrollToLookInside,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const images = [
    {
      src: '/images/demonstration_cover_200_remedies_new.png',
      alt: '200 Natural Remedies for Everyday Health 3D Book & Kindle Mockup',
      label: 'Digital Edition',
    },
    {
      src: '/images/benefits_cover.png',
      alt: '200 Natural Remedies Benefits Overview',
      label: 'Benefits',
    },
    {
      src: '/images/woman_kitchen_cover_new.png',
      alt: 'Woman in kitchen with herbal ingredients and 200 Natural Remedies book',
      label: 'In Kitchen',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Gallery & 3D Cover */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[480px] bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#ede7df] flex flex-col items-center">
              {/* Main Product Image with subtle realistic hover perspective */}
              <div className="relative w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-xl bg-[#f5f2eb]">
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-xl transition-all duration-300 hover:scale-[1.02]"
                />

                {/* Digital Version Badge overlay matching screenshot */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-stone-200/80 shadow-md flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center">
                    <Smartphone className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-stone-800">
                    Digital version
                  </span>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-3 gap-3 w-full mt-5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-stone-50 cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-[#55754f] ring-2 ring-[#55754f]/20 scale-102 shadow-xs'
                        : 'border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`View ${img.label}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </button>
                ))}
              </div>

              {/* Quick sample prompt under gallery */}
              <button
                onClick={onScrollToLookInside}
                className="mt-4 text-xs font-medium text-[#4a6b46] hover:text-[#385335] flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <BookOpen className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Click here to preview sample recipes inside (Page 106)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Title, Pricing, Features, CTA, Accordion */}
          <div className="lg:col-span-6 flex flex-col pt-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight tracking-tight text-balance">
              200 Natural Remedies for Everyday Health – Digital Edition
            </h1>

            {/* Price lockup */}
            <div className="flex items-center gap-3 sm:gap-4 mt-4">
              <span className="text-2xl sm:text-3xl font-bold text-[#4a6b46] tabular-nums">
                $14.95
              </span>
              <span className="text-lg sm:text-xl text-stone-400 line-through tabular-nums">
                $37.00
              </span>
              <span className="inline-flex items-center gap-1 bg-[#8c6747] text-white text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wide uppercase shadow-2xs">
                <Tag className="w-3 h-3" />
                SAVE 59%
              </span>
            </div>

            {/* Value bullets */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-stone-700 text-sm sm:text-base font-normal">
                  <strong className="font-semibold text-stone-900">200 remedies</strong> organized by symptom
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-stone-700 text-sm sm:text-base font-normal">
                  Made with ingredients from your <strong className="font-semibold text-stone-900">kitchen</strong>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-stone-700 text-sm sm:text-base font-normal">
                  Clear, easy-to-follow instructions for each remedy
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#e8efe6] text-[#4a6b46] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-stone-700 text-sm sm:text-base font-normal">
                  Written in accessible, everyday English
                </span>
              </div>
            </div>

            {/* BUY NOW CTA */}
            <div className="mt-8">
              <button
                onClick={onAddToCart}
                className="w-full bg-[#5f7d54] hover:bg-[#526e47] active:bg-[#465f3d] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base sm:text-lg tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>BUY NOW - 59% OFF</span>
                <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5f7d54]" /> Instant Digital Download
                </span>
                <span>·</span>
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>

            {/* Accordion FAQ right under CTA */}
            <div className="mt-8 border-t border-stone-200/80 divide-y divide-stone-200/60">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-3.5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left text-sm sm:text-[15px] font-medium text-stone-800 hover:text-[#4a6b46] transition-colors py-1 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base select-none">
                          {index === 3 ? '📘' : '🌿'}
                        </span>
                        <span className="font-semibold">{faq.question}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0 ml-2" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="mt-2.5 pl-7 pr-2 text-xs sm:text-sm text-stone-600 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
