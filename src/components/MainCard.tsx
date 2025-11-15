"use client";

import { memo } from "react";

interface MainCardProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

// Main Card component for the primary content area
const MainCard = memo<MainCardProps>(({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <div className="
      w-full lg:w-[45%] xl:w-[48%] 
      flex flex-col justify-center 
      bg-white/15 backdrop-blur-lg 
      px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-8 lg:py-12 xl:px-10 xl:py-16
      text-white rounded-2xl sm:rounded-3xl 
      shadow-2xl border border-white/20
      min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
    ">
      <header className="mb-6 sm:mb-8 md:mb-10">
        <h1 className="
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
          font-bold text-left mb-4 sm:mb-6 md:mb-8 leading-tight
        ">
          {title.split('?').map((part, index, array) => (
            <span key={index}>
              {part}{index < array.length - 1 && '?'}
              {index === 0 && <br />}
            </span>
          ))}
        </h1>

        <p className="
          text-sm sm:text-base md:text-lg lg:text-xl 
          text-left leading-relaxed opacity-90
          max-w-lg
        ">
          {subtitle}
        </p>
      </header>

      <button 
        onClick={onCtaClick}
        className="
          bg-white/90 text-gray-900 font-semibold 
          px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
          rounded-xl sm:rounded-2xl shadow-lg 
          hover:bg-white hover:shadow-xl 
          focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900
          transition-all duration-300 w-fit
          text-sm sm:text-base md:text-lg
        "
        aria-label={`${ctaText} - Contact us for more information`}
        data-testid="careers-cta-button"
      >
        {ctaText}
      </button>
    </div>
  );
});

MainCard.displayName = 'MainCard';

export default MainCard;
