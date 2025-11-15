// ===============================
// SHARED TYPE DEFINITIONS
// ===============================

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// ===============================
// COMMON COMPONENT PROPS
// ===============================

/**
 * Base props that most components should extend from
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: string;
}

/**
 * Props for button components with accessibility support
 */
export interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  'aria-label': string; // Required for accessibility
  'data-testid'?: string;
}

/**
 * Props for link components with accessibility support
 */
export interface AccessibleLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  'aria-label'?: string;
  external?: boolean;
  'data-testid'?: string;
}

// ===============================
// NAVIGATION TYPES
// ===============================

/**
 * Navigation link interface
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  'aria-label'?: string;
}

/**
 * Props for navigation components
 */
export interface NavLinkProps extends NavLink {
  onClick?: () => void;
  isActive?: boolean;
}

// ===============================
// CONTENT TYPES
// ===============================

/**
 * News article interface
 */
export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  description: string;
  backgroundImage?: string;
  featured?: boolean;
  category?: ArticleCategory;
  readTime?: string;
  slug?: string;
  author?: string;
  tags?: string[];
}

/**
 * Article categories
 */
export type ArticleCategory = 
  | 'Technology' 
  | 'Research' 
  | 'Innovation' 
  | 'Sustainability'
  | 'Company News';

/**
 * Science card interface for Journey component
 */
export interface ScienceCard {
  id: string;
  title: string;
  description: string;
  additionalInfo?: string;
  backgroundImage: string;
  alt: string; // For accessibility
}

/**
 * Logo/Brand card interface
 */
export interface LogoCard {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  link?: string;
}

// ===============================
// VIDEO COMPONENT TYPES
// ===============================

/**
 * Video background component props with mobile optimization
 */
export interface VideoBackgroundProps {
  src: string;
  className?: string;
  poster?: string;
  'aria-label'?: string;
  onError?: (error: Event) => void;
  onLoad?: () => void;
  // Mobile optimization props
  mobileOptimized?: boolean;
  lowQualitySrc?: string;
  mobilePoster?: string;
  disableOnSlowConnection?: boolean;
}

/**
 * Video error state
 */
export interface VideoError {
  hasError: boolean;
  message?: string;
  source?: string;
}

// ===============================
// FORM AND INTERACTION TYPES
// ===============================

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
}

/**
 * Social media links
 */
export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  url: string;
  'aria-label': string;
}

// ===============================
// RESPONSIVE & ACCESSIBILITY TYPES
// ===============================

/**
 * Responsive breakpoints
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Color themes for consistency
 */
export type ColorTheme = 'light' | 'dark';

/**
 * Screen reader only content
 */
export interface ScreenReaderContent {
  text: string;
  element?: 'span' | 'div' | 'p';
}

// ===============================
// ERROR HANDLING TYPES
// ===============================

/**
 * Generic error state
 */
export interface ErrorState {
  hasError: boolean;
  message?: string;
  code?: string | number;
}

/**
 * Loading state
 */
export interface LoadingState {
  isLoading: boolean;
  message?: string;
}

// ===============================
// UTILITY TYPES
// ===============================

/**
 * Makes all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Omit multiple keys from type
 */
export type OmitMultiple<T, K extends keyof T> = Omit<T, K>;

/**
 * Extract component props type from React component
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;
