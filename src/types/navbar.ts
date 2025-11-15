import { NavLinkProps } from './index';

// Enhanced NavLink props with accessibility
export interface EnhancedNavLinkProps extends NavLinkProps {
  isActive?: boolean;
  'data-testid'?: string;
}

// CTA Button props
export interface CTAButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  testId?: string;
  isMobile?: boolean;
}

// Mobile menu props
export interface MobileMenuProps {
  isOpen: boolean;
  navLinks: any[];
  onLinkClick: () => void;
  onCtaClick?: () => void;
}
