import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  // 8-minute countdown timer (480 seconds) - always resets to 8 minutes on page reload
  const [timeLeft, setTimeLeft] = useState<number>(480);

  useEffect(() => {
    // Clear any previous stored timer so page reloads always begin fresh at 8:00
    sessionStorage.removeItem('promo_timer_target_8m');

    const durationMs = 8 * 60 * 1000;
    let targetTime = Date.now() + durationMs;

    const updateTimer = () => {
      const diffSeconds = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000));
      if (diffSeconds <= 0) {
        setTimeLeft(0);
        // Automatically reload the page when timer reaches zero
        window.location.reload();
      } else {
        setTimeLeft(diffSeconds);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  const clockDisplay = `${minutes}:${seconds}`;

  return (
    <div className="bg-[#4a6b46] text-white text-xs sm:text-sm font-medium py-2.5 overflow-hidden border-b border-[#3d5a3a] select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee space-x-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 tracking-wide font-normal">
              <span className="text-white/60">|</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-[#faecc5]">
                <Timer className="w-3.5 h-3.5 text-[#eed99f] animate-pulse shrink-0" />
                <span className="font-mono tracking-wider">{clockDisplay}</span>
              </span>
              <span className="text-white/60">|</span>
              <span className="font-bold text-white tracking-wide">
                +59% OFF For 8 Min Only!
              </span>
              <span className="text-white/60">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

