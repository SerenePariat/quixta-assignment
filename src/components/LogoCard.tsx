"use client";

import { memo, useCallback } from "react";
import Image from "next/image";
import { LogoCardProps } from '@/types/technology';

// Shared Tailwind classes for logo cards
const CARD_SIZE_CLASSES = "w-[60px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[130px] 2xl:w-[140px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[130px] 2xl:h-[140px]";
const CARD_STYLE_CLASSES = "rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-[#0B0B0B] bg-opacity-30 flex items-center justify-center mx-auto hover:bg-opacity-40 transition-colors duration-200";

// Logo Card Component for displaying partner company logos
const LogoCard = memo<LogoCardProps>(({ src, alt, title, onClick }) => {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] object-contain"
      priority={false}
    />
  );

  const ariaLabel = title ? `${title} logo` : alt;
  const commonClasses = `${CARD_SIZE_CLASSES} ${CARD_STYLE_CLASSES}`;

  if (onClick) {
    return (
      <button
        onClick={handleClick}
        className={`${commonClasses} focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black`}
        aria-label={ariaLabel}
        data-testid={`logo-${alt.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {imageElement}
        {title && <span className="sr-only">{title}</span>}
      </button>
    );
  }

  return (
    <div className={commonClasses} role="img" aria-label={ariaLabel}>
      {imageElement}
    </div>
  );
});

LogoCard.displayName = 'LogoCard';

export default LogoCard;
