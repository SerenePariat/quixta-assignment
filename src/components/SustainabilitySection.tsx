"use client";

import { memo } from "react";
import VideoBackground from "./VideoBackground";

interface SustainabilitySectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  videoSrc?: string;
  onButtonClick?: () => void;
}

// Sustainability section with video background and call-to-action
const SustainabilitySection = memo<SustainabilitySectionProps>(({
  title = "Sustainability at the heart of Innovation",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  buttonText = "Get Into Details",
  videoSrc = "/assets/videos/glass_effect .mp4",
  onButtonClick
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* TEXT SIDE */}
      <div className="
        w-full lg:w-1/2 
        flex flex-col justify-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
        py-10 lg:py-20 
        text-white 
        order-2 lg:order-1
      ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          {title.split(' ').map((word, index, array) => {
            const isBreakPoint = word === 'heart';
            return (
              <span key={index}>
                {word}
                {index < array.length - 1 && !isBreakPoint && ' '}
                {isBreakPoint && <br />}
                {isBreakPoint && index < array.length - 1 && ' '}
              </span>
            );
          })}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-[520px] mb-8 leading-relaxed">
          {description}
        </p>

        <button 
          onClick={onButtonClick}
          className="bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-200 transition-all w-fit focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>

      {/* VIDEO SIDE */}
      <div className="
        w-full lg:w-1/2 
        min-h-[300px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-screen
        relative 
        overflow-hidden 
        order-1 lg:order-2
      ">
        <VideoBackground 
          src={videoSrc}
          className="
            absolute inset-0 w-full h-full 
            object-cover 
            object-center 
            lg:object-right
          "
        />
      </div>
    </div>
  );
});

SustainabilitySection.displayName = 'SustainabilitySection';

export default SustainabilitySection;
