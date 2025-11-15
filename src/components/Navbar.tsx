"use client";

import { useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Inria_Sans } from "next/font/google";
import NavItem from './NavItem';
import CTAButton from './CTAButton';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/data/navigation';
import { useAppContext, appActions } from '@/context/AppContext';
import { useKeyboardNavigation } from '@/hooks';

//  Load Inria Sans for the logo
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Main Navbar Component
const Navbar: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { mobileMenuOpen } = state;

  // Handle menu toggle with proper accessibility
  const handleMenuToggle = useCallback(() => {
    dispatch(appActions.setMobileMenu(!mobileMenuOpen));
  }, [dispatch, mobileMenuOpen]);

  // Handle menu close on link click
  const handleLinkClick = useCallback(() => {
    dispatch(appActions.setMobileMenu(false));
  }, [dispatch]);

  // Handle keyboard navigation
  useKeyboardNavigation({
    onEscape: () => {
      if (mobileMenuOpen) {
        dispatch(appActions.setMobileMenu(false));
      }
    }
  }, mobileMenuOpen);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);


  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg px-4 sm:px-6 py-4 flex items-center justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo with proper semantic structure */}
      <div className="flex items-center">
        <a 
          href="#who-we-are" 
          className={`
            ${inriaSans.className} text-2xl sm:text-3xl font-bold
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
            rounded-sm px-2 py-1 transition-colors duration-300
            hover:text-gray-300
          `}
          aria-label="Go to homepage"
          data-testid="navbar-logo"
        >
          LOGO
        </a>
      </div>

      {/* Desktop Navigation */}
      <div 
        className="hidden lg:flex items-center gap-6 xl:gap-8"
        role="menubar"
        aria-label="Main menu"
      >
        {navLinks.map((link, index) => (
          <NavItem 
            key={link.href} 
            {...link} 
            data-testid={`nav-link-${index + 1}`}
          />
        ))}
      </div>

      {/* Desktop CTA Button */}
      <CTAButton
        ariaLabel="Get started with our services"
        testId="desktop-cta-button"
      />

      {/* Mobile Menu Toggle */}
              <button
                onClick={handleMenuToggle}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="
                  lg:hidden p-2 hover:bg-gray-800 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                  transition-colors duration-200
                "
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>

              {/* Mobile Menu */}
              <MobileMenu
                isOpen={mobileMenuOpen}
                navLinks={navLinks}
                onLinkClick={handleLinkClick}
              />
    </nav>
  );
};

export default Navbar;
