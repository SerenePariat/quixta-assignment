"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { NewsArticle, ArticleCategory } from '@/types';

// Enhanced BrandNews component props
interface BrandNewsProps {
  articles?: NewsArticle[];
  maxArticles?: number;
  showFilters?: boolean;
  onArticleClick?: (article: NewsArticle) => void;
}

// Sample data - can be moved to external file or fetched from API
const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    backgroundImage: "/assets/png/brand_news.png",
    featured: true,
    category: "Technology",
    readTime: "5 min read",
    slug: "breakthrough-authentication-technology"
  },
  {
    id: 2,
    title: "LumiLab – Exploring the science and innovation behind luminescent materials",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    category: "Research",
    readTime: "7 min read",
    slug: "lumilab-luminescent-materials"
  },
  {
    id: 3,
    title: "The Glow Factor – Trends, discoveries, and applications in photonic materials",
    date: "March 08, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
    category: "Innovation",
    readTime: "6 min read",
    slug: "glow-factor-photonic-materials"
  },
  {
    id: 4,
    title: "Sustainable Manufacturing: Our Journey Towards Carbon Neutrality",
    date: "March 05, 2025",
    description: "Discover how we're revolutionizing our manufacturing processes to achieve carbon neutrality by 2030.",
    category: "Sustainability",
    readTime: "8 min read",
    slug: "sustainable-manufacturing-carbon-neutrality"
  }
];

// Enhanced NewsCard props interface
interface NewsCardProps {
  article: NewsArticle;
  index: number;
  onReadMore: (article: NewsArticle) => void;
  isFeatured?: boolean;
}

const BrandNews: React.FC<BrandNewsProps> = ({
  articles = newsData,
  maxArticles = 4,
  showFilters = false,
  onArticleClick
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | "All">("All");

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Handle article click with proper callback
  const handleReadMore = useCallback((article: NewsArticle) => {
    if (onArticleClick) {
      onArticleClick(article);
    } else if (article.slug) {
      // Default behavior - could navigate to article page
      console.log(`Navigate to article: ${article.slug}`);
      // You can implement navigation logic here
    }
  }, [onArticleClick]);

  // Get available categories for filter
  const availableCategories = Array.from(
    new Set(articles.map(article => article.category).filter(Boolean))
  ) as ArticleCategory[];

  const NewsCard: React.FC<NewsCardProps> = ({ article, index, onReadMore, isFeatured: propIsFeatured }) => {
    const isFeatured = propIsFeatured ?? (article.featured || index === 0);
    
    return (
      <article
        className={`
          border border-gray-800 rounded-4xl w-full h-full 
          p-4 sm:p-6 md:p-8 
          flex flex-col justify-between transition-all duration-300 
          hover:border-gray-600 hover:transform hover:scale-[1.02]
          focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-500/50
          min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px]
          relative overflow-hidden
          ${isFeatured ? 'bg-black' : 'bg-[#0a0a0a]'}
        `}
        role="article"
        aria-labelledby={`article-title-${article.id}`}
        aria-describedby={`article-description-${article.id}`}
        data-testid={`news-card-${article.id}`}
      >
        {/* Background Image with Gradient Overlay for Featured Articles */}
        {isFeatured && article.backgroundImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${article.backgroundImage}')` }}
              role="img"
              aria-label={`Background image for ${article.title}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" aria-hidden="true" />
          </>
        )}
        
        <div className="flex-1 relative z-10">
          <header className="mb-3 sm:mb-4">
            <h3 
              id={`article-title-${article.id}`}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug"
            >
              {article.title}
            </h3>
            
            <div 
              className="flex items-center gap-2 mt-2 text-gray-400 text-xs sm:text-sm"
              aria-label="Article metadata"
            >
              <time dateTime={new Date(article.date).toISOString().split('T')[0]}>
                {article.date}
              </time>
              {article.readTime && (
                <>
                  <span aria-hidden="true">•</span>
                  <span aria-label={`Estimated reading time: ${article.readTime}`}>
                    {article.readTime}
                  </span>
                </>
              )}
              {article.category && (
                <>
                  <span aria-hidden="true">•</span>
                  <span 
                    className="px-2 py-1 bg-gray-700 text-gray-200 rounded-full text-xs"
                    aria-label={`Category: ${article.category}`}
                  >
                    {article.category}
                  </span>
                </>
              )}
            </div>
          </header>
          
          <p 
            id={`article-description-${article.id}`}
            className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6"
          >
            {article.description}
          </p>
        </div>
        
        <footer className="mt-auto relative z-10">
          <button 
            onClick={() => onReadMore(article)}
            className={`
              px-4 py-2 sm:px-6 sm:py-2 md:px-6 md:py-3 
              rounded-lg font-semibold transition-all duration-300 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
              text-xs sm:text-sm md:text-base
              ${isFeatured 
                ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
                : 'bg-transparent text-white border border-gray-700 hover:bg-gray-900 hover:border-gray-600 focus:ring-gray-400'
              }
            `}
            aria-label={`Read more about ${article.title}`}
            data-testid={`read-more-${article.id}`}
          >
            Read More
          </button>
        </footer>
      </article>
    );
  };

  return (
    <section
      id="newsroom"
      className="relative w-full min-h-screen bg-black overflow-hidden py-20"
      aria-label="Latest news and updates"
    >
      {/* BACKGROUND GRADIENT LINES - Hidden on screens smaller than lg and marked as decorative */}
      <div className="hidden lg:block pointer-events-none" aria-hidden="true">
        <img
          src="/assets/png/gradientline_bcg_2.png"
          alt=""
          className="
            absolute top-0 left-0 
            lg:w-[130%] xl:w-[120%] 2xl:w-[110%]
            object-contain z-10
          "
          role="presentation"
        />
      </div>
  
      {/* CONTENT WRAPPER - Positioned towards the right */}
      <div className="
        relative z-20 
        w-full
        px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12
        pt-10 sm:pt-16 md:pt-20 lg:pt-32 xl:pt-60
      ">
        
        {/* Content Container - Right aligned on larger screens */}
        <div className="
          max-w-5xl mx-auto
          lg:ml-auto lg:mr-4 xl:mr-12 2xl:mr-16
          lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl
        ">
          
          {/* HEADER */}
          <header className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1 className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              text-white
              text-center md:text-left
            ">
              What's New at Brand
            </h1>
            
            {/* Category filters - if enabled */}
            {showFilters && availableCategories.length > 0 && (
              <div 
                className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start"
                role="tablist"
                aria-label="Article category filters"
              >
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                    ${selectedCategory === "All" 
                      ? 'bg-white text-black' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }
                  `}
                  role="tab"
                  aria-selected={selectedCategory === "All"}
                  aria-controls="articles-grid"
                  data-testid="filter-all"
                >
                  All
                </button>
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                      ${selectedCategory === category 
                        ? 'bg-white text-black' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }
                    `}
                    role="tab"
                    aria-selected={selectedCategory === category}
                    aria-controls="articles-grid"
                    data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </header>
    
          {/* ARTICLES GRID */}
          <div 
            id="articles-grid"
            className="
              grid 
              grid-cols-1 sm:grid-cols-2 
              gap-4 sm:gap-6 md:gap-8 lg:gap-10
            "
            role="tabpanel"
            aria-label={`Articles ${selectedCategory !== 'All' ? `in ${selectedCategory} category` : ''}`}
          >
            {filteredArticles.slice(0, maxArticles).map((article, index) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                index={index} 
                onReadMore={handleReadMore}
                isFeatured={article.featured || index === 0}
              />
            ))}
          </div>

          {/* No articles message */}
          {filteredArticles.length === 0 && (
            <div 
              className="text-center py-12"
              role="status"
              aria-live="polite"
            >
              <p className="text-gray-400 text-lg">
                No articles found for the selected category.
              </p>
            </div>
          )}

          {/* Load more button - if there are more articles */}
          {filteredArticles.length > maxArticles && (
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button
                className="
                  bg-transparent border border-gray-600 text-white 
                  px-6 py-3 rounded-lg font-medium
                  hover:bg-gray-800 hover:border-gray-500
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                  transition-all duration-300
                "
                aria-label="Load more articles"
                data-testid="load-more-button"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
  
};

export default BrandNews;
