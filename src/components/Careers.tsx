"use client";

import { useCallback } from "react";
import ActionCard from './ActionCard';
import MainCard from './MainCard';
import VideoBackground from './VideoBackground';
import { CareersProps } from '@/types/careers';

const Careers: React.FC<CareersProps> = ({
  title = "Have Questions? Let's Talk!",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
  ctaText = "Get Started",
  videoSrc = "/assets/videos/Liquid_Iridescent.mp4",
  onGetStarted,
  onPartnershipsClick,
  onCareersClick
}) => {
  return (
    <section
      id="careers"
      className="w-full min-h-screen flex items-center justify-center bg-black overflow-hidden relative py-8 sm:py-12 md:py-16 lg:py-20"
      role="region"
      aria-label="Careers and partnerships section"
    >
      {/* Video Background */}
      <VideoBackground 
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Background video for careers section"
      />
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="
          w-full max-w-7xl 
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          flex flex-col lg:flex-row 
          gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12
        ">
          {/* Main Card */}
          <MainCard
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            onCtaClick={onGetStarted}
          />

          {/* Action Cards */}
          <div className="
            flex-1 flex flex-col 
            gap-3 sm:gap-4 md:gap-6 lg:gap-8
          ">
            <ActionCard
              title="Partnerships"
              onClick={onPartnershipsClick}
              ariaLabel="Learn more about partnerships"
              testId="partnerships-button"
            />
            <ActionCard
              title="Careers"
              onClick={onCareersClick}
              ariaLabel="Explore career opportunities"
              testId="careers-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
