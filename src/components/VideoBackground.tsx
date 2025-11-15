"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { VideoBackgroundProps, VideoError } from '@/types';

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  className = "", 
  poster,
  "aria-label": ariaLabel,
  onError,
  onLoad,
}) => {
  const [videoError, setVideoError] = useState<VideoError>({ hasError: false });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        setIsLoading(true);

        //  iOS Safari autoplay fix
        video.muted = true;
        video.playsInline = true;

        await video.play();

        setIsLoading(false);
        onLoad?.();
      } catch (error: unknown) {
        const errorMessage = 
          error instanceof Error ? error.message : "Unknown video error";

        setVideoError({
          hasError: true,
          message: errorMessage,
          source: src,
        });

        setIsLoading(false);
        onError?.(error as Event);
      }
    };

    playVideo();
  }, [src, onError, onLoad]);

  // ---- Error handler ----
  const handleVideoError = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      setVideoError({
        hasError: true,
        message: "Video failed to load or play.",
        source: src,
      });
      setIsLoading(false);
      onError?.(e.nativeEvent);
    },
    [src, onError]
  );

  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [src, onLoad]);

  // ---- Mobile-responsive fallback ----
  if (videoError.hasError) {
    return (
      <div
        className={`
          ${className}
          absolute inset-0 w-full h-full
          bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900
        `}
        role="img"
        aria-label={ariaLabel || "Video unavailable"}
      />
    );
  }

  return (
    <>
      {/* Smooth loading (no flicker on mobile) */}
      {isLoading && (
        <div
          className={`
            ${className}
            absolute inset-0 w-full h-full
            bg-black flex items-center justify-center
          `}
          role="status"
        >
          <span className="sr-only">Loading video...</span>
        </div>
      )}

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        //  Mobile + desktop complete responsive behavior
        className={`
          absolute inset-0
          w-full h-full
          object-cover object-center     /* full responsive fit */
          touch-none                      /* prevent pinch zoom on iOS */
          pointer-events-none             /* prevent accidental interactions */
          select-none                     /* prevent text selection flash */
          ${className}
          transition-opacity duration-500 
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
        onError={handleVideoError}
        onLoadedData={handleVideoLoad}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
