import React from 'react';
import { m } from 'framer-motion';

const scrollToSection = () => {
  console.log("WOKRING")
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroScroller = () => {
  return (
    <m.div
      id="scroller"
      className="absolute xs:bottom-10 bottom-40 flex justify-center items-center"
    >
      <m.div
        onClick={scrollToSection}
        className="w-[35px] h-[64px] rounded-3xl border-4 border-primary-400 flex justify-center items-start p-2 hover:scale-105 transition-all hover:border-blue-400 cursor-pointer"
      >
        <m.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="w-3 h-3 rounded-full bg-white mb-1"
        />
      </m.div>
    </m.div>
  );
};

export default HeroScroller;
