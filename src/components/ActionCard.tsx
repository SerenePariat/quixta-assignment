"use client";

import { memo } from "react";
import { ActionCardProps } from '@/types/careers';

// Action Card component for partnership and career cards
const ActionCard = memo<ActionCardProps>(({ title, onClick, ariaLabel, testId }) => {
  return (
    <div className="
      flex-1 flex items-center justify-between 
      bg-white/15 backdrop-blur-lg rounded-2xl sm:rounded-3xl 
      px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12
      shadow-2xl border border-white/20 
      min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]
    ">
      <h2 className="
        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
        font-bold text-white leading-tight
      ">
        {title}
      </h2>

      <button 
        onClick={onClick}
        className="
          flex items-center justify-center 
          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
          border-2 border-white/60 rounded-full 
          hover:bg-white/20 hover:border-white 
          focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900
          transition-all duration-300 shrink-0
        "
        aria-label={ariaLabel}
        data-testid={testId}
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
  );
});

ActionCard.displayName = 'ActionCard';

export default ActionCard;
