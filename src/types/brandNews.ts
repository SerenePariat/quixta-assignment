import { NewsArticle } from './index';

// BrandNews component props
export interface BrandNewsProps {
  articles?: NewsArticle[];
  maxArticles?: number;
  showFilters?: boolean;
  onArticleClick?: (article: NewsArticle) => void;
}

// NewsCard component props
export interface NewsCardProps {
  article: NewsArticle;
  index: number;
  onReadMore: (article: NewsArticle) => void;
  isFeatured?: boolean;
}

// Category filter component props
export interface CategoryFilterProps {
  selectedCategory: string;
  availableCategories: string[];
  onCategoryChange: (category: string) => void;
}
