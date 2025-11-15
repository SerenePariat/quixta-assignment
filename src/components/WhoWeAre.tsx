"use client";

import { useCallback, useMemo } from "react";
import VideoBackground from "./VideoBackground";
import { WhoWeAreProps } from '@/types/whoWeAre';
import { useFadeOut } from '@/hooks';
import { scrollToElement } from '@/utils';

// Hero component with proper typing and accessibility
const WhoWeAre: React.FC<WhoWeAreProps> = ({
  title = "Future of Advanced Materials",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ctaText = "Get Started",
  videoSrc = "/assets/videos/GettyImages-1372004493.mp4",
  onCtaClick
}) => {
  // Use custom hook for fade out effect
  const fadeOut = useFadeOut();


  // Handle CTA button click
  const handleCtaClick = useCallback(() => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to next section
      scrollToElement('technology', 80); // 80px offset for navbar
    }
  }, [onCtaClick]);

  // Memoize title split for performance
  const titleParts = useMemo(() => {
    const words = title.split(' ');
    const midPoint = Math.ceil(words.length / 2) - 1;
    return words.map((word, index, array) => ({
      word,
      isBreakPoint: index === midPoint,
      isLast: index === array.length - 1,
    }));
  }, [title]);

  return (
    <section
      id="who-we-are"
      className="
        relative w-full bg-black overflow-hidden text-white 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
        flex items-center justify-center
        mt-16 sm:mt-20 min-h-[calc(100vh-4rem)]
      "
      role="banner"
      aria-label="Hero section"
    >
      {/* VideoBackground Component with same styling approach */}
      <VideoBackground 
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Background video showcasing advanced materials"
      />

      {/* Dark Radial Gradient Overlay */}
      <div
        className={`
          absolute inset-0 transition-opacity duration-2000 
          ${fadeOut ? "opacity-0" : "opacity-100"} 
          bg-gradient-radial from-transparent via-black/50 to-black z-10
        `}
        aria-hidden="true"
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" aria-hidden="true" />

      
      {/* Main Content */}
      <header className="
        relative z-20 flex flex-col items-center justify-center text-center 
        max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
        w-full
      ">
                <h1 className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                  font-bold
                  mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
                  leading-tight
                  px-2 sm:px-4 md:px-0
                ">
                  {titleParts.map(({ word, isBreakPoint, isLast }, index) => (
                    <span key={index}>
                      {word}
                      {!isLast && !isBreakPoint && ' '}
                      {isBreakPoint && <br className="hidden sm:block" />}
                      {isBreakPoint && !isLast && ' '}
                    </span>
                  ))}
                </h1>

        <p className="
          text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
          max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl
          mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 
          px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0
          text-gray-200 leading-relaxed
        ">
          {subtitle}
        </p>

        <button 
          onClick={handleCtaClick}
          className="
            bg-white text-gray-900 font-semibold 
            px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5
            rounded-xl sm:rounded-2xl 
            shadow-lg hover:bg-gray-100 hover:shadow-xl 
            focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
            transition-all duration-300
            text-sm sm:text-base md:text-lg lg:text-xl
            min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]
          "
          aria-label={`${ctaText} - Learn more about our advanced materials`}
          data-testid="hero-cta-button"
        >
          {ctaText}
        </button>
      </header>
    </section>
  );
};

export default WhoWeAre;