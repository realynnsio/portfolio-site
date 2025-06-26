'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import SplineLoaderOverlay from './SplineLoaderOverlay';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Spline is client-side only
  loading: () => <SplineLoaderOverlay />,
});
interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: Readonly<SplineSceneProps>) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSplineLoad = () => {
    // Start the 3-second delay ONLY AFTER Spline has loaded.
    delayTimerRef.current = setTimeout(() => {
      setIsContentLoaded(true);
    }, 3000); // 3 seconds delay
  };

  // Cleanup effect for the timer
  useEffect(() => {
    return () => {
      // Clear the timeout if the component unmounts before the delay finishes
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, []); // Run once on mount for cleanup setup

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {!isContentLoaded && (
        <SplineLoaderOverlay /> // Show the loader until Spline's onLoad fires
      )}
      <Spline
        scene={scene}
        className={className}
        onLoad={handleSplineLoad}
        style={{ opacity: isContentLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
      />
    </div>
  );
}