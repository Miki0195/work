'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoUrl?: string;
}

export function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default video URL - a professional business/tech video
  const defaultVideoUrl = 'https://cdn.coverr.co/videos/coverr-modern-office-space-with-people-working-4285/1080p.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });

    // Play video with error handling
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-30' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230ea5e9' width='100' height='100'/%3E%3C/svg%3E"
      >
        <source src={videoUrl || defaultVideoUrl} type="video/mp4" />
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-600/60" />
    </div>
  );
}
