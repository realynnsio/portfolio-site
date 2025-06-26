import React from 'react';
import { Riple } from 'react-loading-indicators';

const SplineLoaderOverlay = () => {
  return (
    <div style={{
      position: 'absolute', // Or 'fixed' if you want it over everything
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Make sure it's above your content
      pointerEvents: 'auto', // Allow interaction with the loader
    }}>
      <Riple color={`var(--color-aqua-100)`} size="medium" text="" textColor="" />
    </div>
  );
};

export default SplineLoaderOverlay;