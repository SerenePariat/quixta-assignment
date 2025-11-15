import { LogoCard as LogoCardType } from './index';

// LogoCard component props
export interface LogoCardProps {
  src: string;
  alt: string;
  title?: string;
  onClick?: () => void;
}

// Solution item interface
export interface SolutionItemType {
  id: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
}

// Technology/About component props
export interface AboutProps {
  logos?: LogoCardType[];
  title?: string;
  subtitle?: string;
  onLogoClick?: (logo: LogoCardType) => void;
}
