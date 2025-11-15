"use client";

import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { CTAButtonProps } from '@/types/navbar';

// CTA Button component for call-to-action buttons
const CTAButton = memo<CTAButtonProps>(({ 
  text = "Get Started",
  onClick,
  className = "",
  ariaLabel,
  testId,
  isMobile = false
}) => {
  const baseClasses = `
    flex items-center justify-center gap-2 
    border border-white text-white px-5 py-3 rounded-2xl 
    hover:bg-white hover:text-black 
    focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
    transition-all duration-300 font-medium
  `;

  const desktopClasses = "hidden lg:flex";
  const mobileClasses = "mt-4";

  return (
    <button 
      onClick={onClick}
      className={`
        ${baseClasses}
        ${isMobile ? mobileClasses : desktopClasses}
        ${className}
      `}
      aria-label={ariaLabel || `${text} - Contact us for more information`}
      data-testid={testId}
    >
      <span>{text}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </button>
  );
});

CTAButton.displayName = 'CTAButton';

export default CTAButton;
