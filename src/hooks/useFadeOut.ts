import { useState, useEffect } from 'react';
import { UI_CONSTANTS } from '@/constants';

/**
 * Custom hook for fade out effect (used in WhoWeAre component)
 */
const useFadeOut = (delay: number = UI_CONSTANTS.TIMING.FADE_OUT_DELAY): boolean => {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return fadeOut;
};

export default useFadeOut;
