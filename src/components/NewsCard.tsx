"use client";

import { memo } from "react";
import { NewsCardProps } from '@/types/brandNews';

// NewsCard component for displaying individual news articles
const NewsCard = memo<NewsCardProps>(({ article, index, onReadMore, isFeatured: propIsFeatured }) => {
  const isFeatured = propIsFeatured ?? (article.featured || index === 0);
  
  return (
    <article
      className={`
        border border-gray-800 rounded-4xl w-[90%] h-full 
        p-5 sm:p-6 md:p-8 lg:p-10
        flex flex-col transition-all duration-300 
        hover:border-gray-600 hover:transform hover:scale-[1.02]
        focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-500/50
        min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]
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
          <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60" aria-hidden="true" />
        </>
      )}
      
      {/* Content Section */}
      <div className="flex-1 relative z-10 flex flex-col">
        <header className="mb-5 sm:mb-6 md:mb-7">
          <h3 
            id={`article-title-${article.id}`}
            className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white leading-tight mb-3 sm:mb-4"
          >
            {article.title}
          </h3>
          
          <div 
            className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm opacity-80"
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
        
        {/* Description with proper spacing */}
        <div className="flex-1 mb-6 sm:mb-7 md:mb-8">
          <p 
            id={`article-description-${article.id}`}
            className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-90"
          >
            {article.description}
          </p>
        </div>
      </div>
      
      {/* Button Section - Always at bottom */}
      <footer className="relative z-10">
        <button 
          onClick={() => onReadMore(article)}
          className={`
            px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-4 
            rounded-xl font-medium transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
            text-sm sm:text-base
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
