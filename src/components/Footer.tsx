import React from 'react';

interface FooterProps {
  onOpenPolicy: (key: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-[#59784e] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-serif-display tracking-wide mb-6">
          Links Importantes
        </h3>

        {/* Links row */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-white/90 max-w-2xl mx-auto">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-white hover:underline transition-all cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onOpenPolicy('refund')}
            className="hover:text-white hover:underline transition-all cursor-pointer"
          >
            Refund Policy
          </button>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-white hover:underline transition-all cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => onOpenPolicy('contact')}
            className="hover:text-white hover:underline transition-all cursor-pointer"
          >
            Contact Information
          </button>
          <button
            onClick={() => onOpenPolicy('shipping')}
            className="hover:text-white hover:underline transition-all cursor-pointer"
          >
            Shipping Policy
          </button>
        </nav>

        {/* Payment Processors Row */}
        <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {/* Amex */}
          <span className="bg-[#007bbf] text-white font-bold text-[10px] px-2.5 py-1.5 rounded shadow-2xs tracking-tighter">
            AMEX
          </span>

          {/* Apple Pay */}
          <span className="bg-black text-white font-medium text-[10px] px-2.5 py-1.5 rounded shadow-2xs flex items-center gap-1">
            Pay
          </span>

          {/* Diners Club */}
          <span className="bg-[#004a97] text-white font-bold text-[10px] px-2 py-1.5 rounded shadow-2xs">
            Diners
          </span>

          {/* Discover */}
          <span className="bg-[#f58220] text-white font-bold text-[10px] px-2 py-1.5 rounded shadow-2xs">
            DISCOVER
          </span>

          {/* Google Pay */}
          <span className="bg-white text-stone-800 font-medium text-[10px] px-2.5 py-1.5 rounded shadow-2xs flex items-center gap-0.5">
            <span className="font-bold text-[#4285f4]">G</span>
            <span>Pay</span>
          </span>

          {/* JCB */}
          <span className="bg-[#0e489c] text-white font-bold text-[10px] px-2 py-1.5 rounded shadow-2xs">
            JCB
          </span>

          {/* Mastercard */}
          <span className="bg-[#222] text-white font-bold text-[10px] px-2 py-1.5 rounded shadow-2xs flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] inline-block -mr-1.5 opacity-90" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] inline-block opacity-90" />
            <span>Mastercard</span>
          </span>

          {/* PayPal */}
          <span className="bg-[#003087] text-white font-bold text-[10px] px-2.5 py-1.5 rounded shadow-2xs">
            PayPal
          </span>

          {/* Venmo */}
          <span className="bg-[#008cff] text-white font-bold text-[10px] px-2.5 py-1.5 rounded shadow-2xs">
            venmo
          </span>

          {/* VISA */}
          <span className="bg-[#1a1f71] text-white font-bold italic text-[11px] px-2.5 py-1 rounded shadow-2xs">
            VISA
          </span>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-white/75 font-sans tracking-wide">
          © 2026, Natural Wellness Books
        </p>
      </div>
    </footer>
  );
};
