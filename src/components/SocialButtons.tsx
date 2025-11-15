"use client";

import { memo } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SocialButtonsProps } from '@/types/footer';

// Social buttons component for footer social media section
const SocialButtons = memo<SocialButtonsProps>(({ description, onSocialClick }) => {
  return (
    <div className="lg:w-1/3 xl:w-2/5">
      <p className="
        text-gray-300 leading-relaxed 
        mb-4 sm:mb-6 max-w-sm
        text-sm sm:text-base md:text-lg
      ">
        {description}
      </p>
      <div 
        className="flex gap-3 sm:gap-4"
        role="list"
        aria-label="Social media links"
      >
        <button
          onClick={() => onSocialClick?.('facebook', '#')}
          className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
            flex items-center justify-center 
            bg-gray-800 rounded-lg 
            hover:bg-gray-600 focus:bg-gray-600
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
            transition-colors
          "
          aria-label="Visit our Facebook page"
          data-testid="facebook-link"
        >
          <FaFacebookF className="text-sm sm:text-base md:text-lg" aria-hidden="true" />
        </button>
        <button
          onClick={() => onSocialClick?.('twitter', '#')}
          className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
            flex items-center justify-center 
            bg-gray-800 rounded-lg 
            hover:bg-gray-600 focus:bg-gray-600
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
            transition-colors
          "
          aria-label="Visit our Twitter page"
          data-testid="twitter-link"
        >
          <FaTwitter className="text-sm sm:text-base md:text-lg" aria-hidden="true" />
        </button>
        <button
          onClick={() => onSocialClick?.('instagram', '#')}
          className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
            flex items-center justify-center 
            bg-gray-800 rounded-lg 
            hover:bg-gray-600 focus:bg-gray-600
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
            transition-colors
          "
          aria-label="Visit our Instagram page"
          data-testid="instagram-link"
        >
          <FaInstagram className="text-sm sm:text-base md:text-lg" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
});

SocialButtons.displayName = 'SocialButtons';

export default SocialButtons;
