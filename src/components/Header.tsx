import React from 'react';

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onOpenPolicy?: (key: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-[#faf8f5] border-b border-[#e9e4dc] sticky top-0 z-40 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
        {/* Center Zone: Logo lockup */}
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2 group py-1"
          aria-label="200 Natural Remedies Home"
        >
          {/* Stylized leaf emblem */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 text-[#4a6b46] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full transform -rotate-12"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5 font-serif-display">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2d3a2b]">
              200
            </span>
            <div className="flex flex-col -space-y-1 font-sans text-left">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#425040]">
                Natural
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.14em] uppercase text-[#5a6a57]">
                Remedies
              </span>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

