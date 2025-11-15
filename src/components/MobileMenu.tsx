"use client";

import { memo, useRef } from "react";
import NavItem from './NavItem';
import CTAButton from './CTAButton';
import { MobileMenuProps } from '@/types/navbar';

// Mobile menu component
const MobileMenu = memo<MobileMenuProps>(({ isOpen, navLinks, onLinkClick, onCtaClick }) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div 
      ref={mobileMenuRef}
      id="mobile-menu"
      className="
        absolute top-full left-0 w-full bg-black 
        flex flex-col items-center py-6 space-y-6 lg:hidden 
        shadow-xl border-t border-gray-800
      "
      role="menu"
      aria-label="Mobile navigation menu"
      data-testid="mobile-menu"
    >
      {navLinks.map((link, index) => (
        <NavItem 
          key={link.href} 
          {...link} 
          onClick={onLinkClick}
          data-testid={`mobile-nav-link-${index + 1}`}
        />
      ))}

      <CTAButton
        onClick={onCtaClick || onLinkClick}
        isMobile={true}
        ariaLabel="Get started with our services"
        testId="mobile-cta-button"
      />
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
