"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import { ArticleCategory, NewsArticle } from '@/types';
import NewsCard from './NewsCard';
import CategoryFilter from './CategoryFilter';
import { newsData } from '@/data/news';
import { BrandNewsProps } from '@/types/brandNews';
import { useAppContext, appActions } from '@/context/AppContext';
import { APP_CONSTANTS } from '@/constants';

// Main BrandNews Component
const BrandNews: React.FC<BrandNewsProps> = ({
  articles = newsData,
  maxArticles = APP_CONSTANTS.DEFAULTS.MAX_ARTICLES,
  showFilters = false,
  onArticleClick
}) => {
  const { state, dispatch } = useAppContext();
  const { selectedCategory } = state;

  // Memoize filtered articles for performance
  const filteredArticles = useMemo(() => {
    return selectedCategory === "All" 
      ? articles 
      : articles.filter(article => article.category === selectedCategory);
  }, [articles, selectedCategory]);

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

  // Memoize available categories for performance
  const availableCategories = useMemo(() => {
    return Array.from(
      new Set(articles.map(article => article.category).filter(Boolean))
    ) as ArticleCategory[];
  }, [articles]);

  // Handle category change with proper typing
  const handleCategoryChange = useCallback((category: string) => {
    dispatch(appActions.setSelectedCategory(category));
  }, [dispatch]);


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
            {showFilters && (
              <CategoryFilter
                selectedCategory={selectedCategory}
                availableCategories={availableCategories}
                onCategoryChange={handleCategoryChange}
              />
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
