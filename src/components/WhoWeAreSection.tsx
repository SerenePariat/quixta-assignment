"use client";

import { memo } from "react";

interface WhoWeAreSectionProps {
  title?: string;
  items?: Array<{
    label: string;
    textColor: string;
    onClick?: () => void;
  }>;
}

// Who We Are section with clickable items (different from regular links)
const WhoWeAreSection = memo<WhoWeAreSectionProps>(({ 
  title = "Who are We",
  items = [
    { label: "Brand at a Glance", textColor: "text-white" },
    { label: "Mission & Vision", textColor: "text-gray-300" },
    { label: "Our Team", textColor: "text-gray-400" },
    { label: "Partnerships", textColor: "text-gray-500" },
    { label: "Sustainability & Social Impact", textColor: "text-gray-500" },
  ]
}) => {
  return (
    <div className="flex-1">
      <h3 className="
        text-white font-semibold 
        text-base sm:text-lg md:text-xl 
        mb-3 sm:mb-4
      ">
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <p 
            key={index}
            className={`
              ${item.textColor} hover:text-gray-300 cursor-pointer transition-colors
              text-sm sm:text-base md:text-lg
            `}
            onClick={item.onClick}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
});

WhoWeAreSection.displayName = 'WhoWeAreSection';

export default WhoWeAreSection;
