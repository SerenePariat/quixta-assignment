"use client";

import { memo } from "react";
import { ScienceCard as ScienceCardType } from '@/data/scienceCards';

interface ScienceCardProps {
  card: ScienceCardType;
  index: number;
}

// Science Card component for displaying individual science/innovation cards
const ScienceCard = memo<ScienceCardProps>(({ card, index }) => {
  return (
    <div
      className="
        relative 
        p-6 sm:p-10 md:p-12 lg:p-12 xl:p-14
        rounded-2xl sm:rounded-3xl lg:rounded-[3rem]
        border border-gray-300/30 
        backdrop-blur-sm 
        overflow-hidden 
        flex items-center
        w-full 
        sm:w-full 
        lg:w-[80%]
        xl:w-[90%]
        2xl:w-[80%]
        aspect-square
      "
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${card.bgImage}')` }}
        role="img"
        aria-label={`Background image for ${card.title}`}
      />
      
      {/* Content */}
      <div className="relative z-10 text-left w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
          {card.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
          {card.desc1}
        </p>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {card.desc2}
        </p>
      </div>
    </div>
  );
});

ScienceCard.displayName = 'ScienceCard';

export default ScienceCard;
