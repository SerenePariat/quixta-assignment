import { useEffect } from 'react';
import { handleKeyNavigation } from '@/utils';

interface KeyboardHandlers {
  onEnter?: () => void;
  onSpace?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
}

/**
 * Custom hook for keyboard navigation
 */
const useKeyboardNavigation = (handlers: KeyboardHandlers, enabled: boolean = true): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyNavigation(event.key, handlers);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers, enabled]);
};

export default useKeyboardNavigation;
