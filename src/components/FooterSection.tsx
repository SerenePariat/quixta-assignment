"use client";

import { memo } from "react";
import { FooterSectionProps } from '@/types/footer';

// Footer navigation section component
const FooterSection = memo<FooterSectionProps>(({ title, links, ariaLabel }) => {
  return (
    <div className="flex-1">
      <h3 className="
        text-white font-semibold 
        text-base sm:text-lg md:text-xl 
        mb-3 sm:mb-4
      ">
        {title}
      </h3>
      <nav aria-label={ariaLabel || title}>
        <ul className="space-y-2 sm:space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className={`
                  ${link.textColor || 'text-white'} hover:text-gray-300 focus:text-gray-300
                  focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1
                  transition-colors text-sm sm:text-base md:text-lg
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

FooterSection.displayName = 'FooterSection';

export default FooterSection;
