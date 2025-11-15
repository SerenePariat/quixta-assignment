"use client";

import { Inria_Sans } from "next/font/google";
import SocialButtons from './SocialButtons';
import FooterSection from './FooterSection';
import WhoWeAreSection from './WhoWeAreSection';
import { FooterProps } from '@/types/footer';
import { solutionsLinks, quickLinks } from '@/data/footerLinks';
import { APP_CONSTANTS } from '@/constants';

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer({
  companyName = APP_CONSTANTS.COMPANY.NAME,
  email = APP_CONSTANTS.COMPANY.EMAIL,
  phone = APP_CONSTANTS.COMPANY.PHONE,
  description = APP_CONSTANTS.COMPANY.DESCRIPTION,
  socialLinks,
  onSocialClick
}: FooterProps = {}) {
  return (
    <footer 
      className="
        bg-black text-white 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 
        py-6 sm:py-8 md:py-10 lg:py-12
      "
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="
          flex flex-col sm:flex-row justify-between items-start sm:items-center 
          border-b border-gray-600 
          pb-6 sm:pb-8 md:pb-10 
          mb-6 sm:mb-8 md:mb-10
        ">
          {/* Left - Logo */}
          <div className="flex items-center">
            <h2 className={`
              ${inriaSans.className} 
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              font-bold tracking-wider 
              mb-4 sm:mb-0
            `}>
              {companyName}
            </h2>
          </div>

          {/* Right - Contact Info */}
          <address className="
            flex flex-col sm:flex-row 
            gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 
            text-sm sm:text-base md:text-lg lg:text-xl
            not-italic
          ">
            <a 
              href={`mailto:${email}`}
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1 transition-colors"
              aria-label={`Send email to ${email}`}
            >
              {email}
            </a>
            <a 
              href={`tel:${phone}`}
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1 transition-colors"
              aria-label={`Call ${phone}`}
            >
              {phone}
            </a>
          </address>
        </div>

        {/* Middle Row */}
        <div className="
          flex flex-col lg:flex-row 
          gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 
          border-b border-gray-700 
          pb-6 sm:pb-8 md:pb-10 
          mb-6 sm:mb-8
        ">
          {/* Social Media Section */}
          <SocialButtons 
            description={description}
            onSocialClick={onSocialClick}
          />

          {/* Right - Navigation Columns */}
          <div className="
            lg:w-2/3 xl:w-3/5 
            flex flex-col sm:flex-row 
            gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16
          ">
            <FooterSection
              title="Solutions"
              links={solutionsLinks}
              ariaLabel="Solutions"
            />

            <FooterSection
              title="Quick links"
              links={quickLinks}
              ariaLabel="Quick links"
            />

            <WhoWeAreSection />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="
          flex flex-col sm:flex-row justify-between items-start sm:items-center 
          gap-3 sm:gap-4 md:gap-6 
          text-xs sm:text-sm md:text-base 
          text-gray-400
        ">
          {/* Left */}
          <div className="order-2 sm:order-1">
            <p>© 2025 Brand. All rights reserved.</p>
          </div>

          {/* Right */}
          <div className="
            order-1 sm:order-2
            flex flex-col sm:flex-row 
            gap-2 sm:gap-3 md:gap-6 lg:gap-8
          ">
            <a 
              href="#" 
              className="
                hover:text-gray-300 focus:text-gray-300
                focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1
                transition-colors
              "
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="
                hover:text-gray-300 focus:text-gray-300
                focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1
                transition-colors
              "
            >
              Cookies
            </a>
            <p className="hover:text-gray-300 transition-colors">
              Designed and Powered by <span className="font-semibold text-white">Quixta.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
