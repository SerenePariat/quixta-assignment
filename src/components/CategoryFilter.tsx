"use client";

import { memo } from "react";
import { CategoryFilterProps } from '@/types/brandNews';

// Category Filter component for filtering news articles by category
const CategoryFilter = memo<CategoryFilterProps>(({ selectedCategory, availableCategories, onCategoryChange }) => {
  if (availableCategories.length === 0) {
    return null;
  }

  return (
    <div 
      className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start"
      role="tablist"
      aria-label="Article category filters"
    >
      <button
        onClick={() => onCategoryChange("All")}
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
          onClick={() => onCategoryChange(category)}
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
  );
});

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;
