import {m, motion} from 'framer-motion'
import Section from '../components/Section/Section';
import { useRef } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import CardStack from '../components/Projects';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
const About = () => {
    const t = "ABOUT _"
    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
      };
      const variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 0.5,
                damping: 8,
                delay: 0.5,
                stiffness: 100,
            },
        },
      };
      const [ref, isInView] = useInView({triggerOnce: true});
      const controls = useAnimation();
  
      useEffect(() => {
          console.log("isInView:", isInView);
          if (isInView) {
              controls.start("visible");
          } else {
              controls.start("hidden");
          }
      }, [isInView, controls]);


    return(
        <m.div>
        <m.div id="projects" className='pt-20 ml-auto mr-auto w-[90%] max-w-[1400px] md:w-[80%] h-[100vh]'>
    <motion.div ref={ref}
    initial="hidden"
    exit="hidden"
    animate={controls}
    variants={variants}
    className='font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2 highlight-purple flex space-x-1'>
        {t.split("").map((char, i) => (
      <motion.h1
      key={i}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={gradual}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className={` font-display text-3xl font-bold drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2 italic ${char === '_' ? 'flashing-underscore' : ''}`}
      >
        {char === " " ? <span>&nbsp;</span> : char}
      </motion.h1>
    ))} </motion.div>
        <m.div className=''>

  


        </m.div>
        </m.div>
    </m.div>

    )
}

export default About;