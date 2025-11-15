// Careers component props
export interface CareersProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  videoSrc?: string;
  onGetStarted?: () => void;
  onPartnershipsClick?: () => void;
  onCareersClick?: () => void;
}

// Action card props (for partnerships and careers cards)
export interface ActionCardProps {
  title: string;
  onClick?: () => void;
  ariaLabel: string;
  testId: string;
}
