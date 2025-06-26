import React from 'react';
import { SplineScene } from './SplineScene';

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-screen relative'>
      {/* Spline Scene - Background*/}
      <div className="absolute inset-0 w-full h-full z-5 pt-20 md:pt-0">
          <SplineScene
            scene="https://prod.spline.design/1qzbGOKNnwTjrKod/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      {/* Overlay */}
      <div className="container h-full w-full mx-auto relative flex justify-start">
        {/* Text content */}
        <div className="p-8 relative z-10 content-start flex flex-col min-w-fit pt-20 md:pt-28">
          <h1 className="text-5xl md:text-7xl font-jersey text-dive-100">
            Hi, I'm Alma!
          </h1>
          <p className="mt-2 md:mt-2 text-dive-200 max-w-lg">
            I'll put something here later, but for now, this is a placeholder text.
            I'll put something here later, but for now, this is a placeholder text.
            I'll put something here later, but for now, this is a placeholder text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;