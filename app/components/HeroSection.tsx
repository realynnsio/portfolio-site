import React from 'react';
import NavButton from './NavButton';
import { CVIcon } from './Icons';
import Typewriter from './Typewriter';

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-screen relative'>
      {/* Changed spline scene background to looping webm */}
      <div className="absolute inset-0 w-full h-full z-5 pt-20 md:pt-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/placeholder.png"
          preload="auto"
        >
          <source src="/videos/output_pingpong2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="container h-full w-full mx-auto relative flex justify-start">
        {/* Text content */}
        <div className="p-8 relative z-10 content-start flex flex-col min-w-fit pt-20 md:pt-28">
          <h1 className="text-5xl md:text-7xl font-jersey text-dive-100">
            Hi, I&apos;m Alma!
          </h1>
          <Typewriter
            text={[
              "Frontend Developer",
              "UI/UX Designer",
              "Game Developer",
              "Spline 3D Artist"
            ]}
            speed={70}
            className="text-aqua-100 font-jersey text-5xl md:text-7xl -mt-2 md:-mt-4"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
          <p className="mt-2 text-dive-200 max-w-lg">
            I&apos;ll put something here later, but for now, this is a placeholder text.
            I&apos;ll put something here later, but for now, this is a placeholder text.
            I&apos;ll put something here later, but for now, this is a placeholder text.
          </p>

          <div className='flex flex-col md:flex-row items-start mt-6 space-y-2 md:space-y-0 md:space-x-4 rtl:space-x-reverse'>
            <NavButton left={false} icon={<CVIcon />} className="outline-2 -outline-offset-1 outline-aqua-100 shadow-md w-fit hover:bg-aqua-100 hover:text-white" externalUrl="https://drive.google.com/file/d/1Dm2YUOt_L2f7HThGMECAZlXLTs8g4cf2/view?usp=sharing">View CV</NavButton>
            <NavButton className="mt-2 md:mt-0 bg-aqua-100 text-white hover:bg-dive-100 md:hover:bg-dive-100 shadow-md hover:text-white w-fit" href="#contact">Contact Me</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;