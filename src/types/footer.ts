import { SocialLink } from './index';

// Footer component props
export interface FooterProps {
  companyName?: string;
  email?: string;
  phone?: string;
  description?: string;
  socialLinks?: SocialLink[];
  onSocialClick?: (platform: string, url: string) => void;
}

// Social buttons component props
export interface SocialButtonsProps {
  description: string;
  onSocialClick?: (platform: string, url: string) => void;
}

// Footer navigation section props
export interface FooterSectionProps {
  title: string;
  links: FooterLinkItem[];
  ariaLabel?: string;
}

// Footer link item
export interface FooterLinkItem {
  label: string;
  href: string;
  textColor?: string;
}
