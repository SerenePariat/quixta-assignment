"use client";

import { memo } from "react";
import Image from "next/image";
import { SolutionItemType } from '@/types/technology';

// Solution Item Component for displaying individual solutions
const SolutionItem = memo<{ solution: SolutionItemType }>(({ solution }) => {
  const isBiomedical = solution.title.includes('biomedical');
  
  return (
    <div className="flex flex-row items-start gap-8 lg:gap-35">
      <div className="flex justify-start shrink-0">
        <Image
          src={solution.logoSrc}
          alt={solution.logoAlt}
          width={120}
          height={120}
          className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] object-contain"
        />
      </div>
      <div className="space-y-4 text-left">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
          {isBiomedical ? (
            <>
              Accelerating biomedical research <br className="hidden sm:block" /> 
              with next-generation bio-probes
            </>
          ) : (
            <>
              Securing every physical product <br /> 
              for counterfeit protection
            </>
          )}
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
          {solution.description}
        </p>
        <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
});

SolutionItem.displayName = 'SolutionItem';

export default SolutionItem;
