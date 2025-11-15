// Enhanced TypeScript types for better type safety

import { ReactNode } from 'react';

// Strict component props with required children
export interface StrictComponentProps {
  children: ReactNode;
  className?: string;
}

// Generic API response with strict typing
export interface StrictApiResponse<TData = unknown, TError = string> {
  data?: TData;
  error?: TError;
  success: boolean;
  timestamp: string;
  statusCode: number;
}

// Strict form validation with generic field types
export interface StrictFormValidation<TFields extends string = string> {
  isValid: boolean;
  errors: Partial<Record<TFields, string[]>>;
  touched: Partial<Record<TFields, boolean>>;
}

// Enhanced event handlers with specific element types
export interface EnhancedEventHandlers<TElement extends HTMLElement = HTMLElement> {
  onClick?: (event: React.MouseEvent<TElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<TElement>) => void;
  onFocus?: (event: React.FocusEvent<TElement>) => void;
  onBlur?: (event: React.FocusEvent<TElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<TElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<TElement>) => void;
}

// Strict theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
    error: string;
    warning: string;
    success: string;
  };
  typography: {
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
    fontSize: Record<string, [string, { lineHeight: string; letterSpacing?: string }]>;
    fontWeight: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  breakpoints: Record<string, string>;
  zIndex: Record<string, number>;
}

// Enhanced component state with loading and error handling
export interface ComponentState<TData = unknown, TError = string> {
  data: TData | null;
  loading: boolean;
  error: TError | null;
  lastUpdated: Date | null;
}

// Strict accessibility props
export interface StrictAccessibilityProps {
  'aria-label': string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean;
  role?: 'button' | 'link' | 'img' | 'presentation' | 'region' | 'banner' | 'main' | 'navigation' | 'contentinfo';
  tabIndex?: -1 | 0;
}

// Enhanced form field props
export interface FormFieldProps<TValue = string> {
  name: string;
  value: TValue;
  onChange: (value: TValue) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  label?: string;
  helpText?: string;
}

// Strict media query hooks return type
export interface MediaQueryState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  currentBreakpoint: 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
}

// Enhanced async operation state
export interface AsyncOperationState<TData = unknown, TError = Error> {
  data: TData | null;
  loading: boolean;
  error: TError | null;
  success: boolean;
  lastFetch: Date | null;
  refetch: () => Promise<void>;
  reset: () => void;
}

// Strict navigation item with required properties
export interface StrictNavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string | number;
  disabled: boolean;
  external: boolean;
  onClick?: () => void;
}

// Enhanced performance metrics
export interface PerformanceMetrics {
  renderTime: number;
  loadTime: number;
  interactionTime: number;
  memoryUsage: number;
  errorCount: number;
}

// Strict SEO metadata
export interface StrictSEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article' | 'product';
  twitterCard: 'summary' | 'summary_large_image';
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  structuredData?: Record<string, unknown>;
}
