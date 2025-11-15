"use client";

import { memo } from "react";
import { NewsCardProps } from '@/types/brandNews';

// NewsCard component for displaying individual news articles
const NewsCard = memo<NewsCardProps>(({ article, index, onReadMore, isFeatured: propIsFeatured }) => {
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
});

NewsCard.displayName = 'NewsCard';

export default NewsCard;
