"use client";

import { memo } from "react";
import { EnhancedNavLinkProps } from '@/types/navbar';

// Navigation item component with enhanced accessibility
const NavItem = memo<EnhancedNavLinkProps>(({ 
  href, 
  label, 
  onClick, 
  isActive = false,
  'aria-label': ariaLabel,
  'data-testid': testId
}) => (
  <a
    href={href}
    onClick={onClick}
    aria-label={ariaLabel || label}
    data-testid={testId}
    className={`
      text-base transition-colors duration-200 
      hover:text-gray-300 focus:text-gray-300
      focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
      rounded-sm px-2 py-1
      ${isActive ? 'text-white font-semibold' : 'text-gray-200'}
    `}
  >
    {label}
  </a>
));

NavItem.displayName = 'NavItem';

export default NavItem;
