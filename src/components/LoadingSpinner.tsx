"use client";

import { memo } from 'react';
import { UI_CONSTANTS } from '@/constants';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'orange' | 'gray';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'md', 
  color = 'white',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    white: 'border-white border-t-transparent',
    orange: 'border-orange-500 border-t-transparent',
    gray: 'border-gray-300 border-t-transparent'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]}
        border-2 border-solid rounded-full animate-spin
        ${className}
      `}
      style={{ 
        animationDuration: `${UI_CONSTANTS.ANIMATION.SLOW}ms` 
      }}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
