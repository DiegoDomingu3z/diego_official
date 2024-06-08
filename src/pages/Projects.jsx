import { m, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import ImageSlider from '../components/elements/ImageSlider';

const Projects = () => {
  const t = "PROJECTS _";

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

  const cards = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 10,
        mass: 1,
        bounce: 1.5,

        delay: 1
      },
    },
  };

  const [ref1, isInView1] = useInView({ triggerOnce: true });
  const controls1 = useAnimation();

  const [ref2, isInView2] = useInView({ triggerOnce: true });
  const controls2 = useAnimation();

  const [ref3, isInView3] = useInView({ triggerOnce: true });
  const controls3 = useAnimation();
  const [ref4, isInView4] = useInView({ triggerOnce: true });
  const controls4 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [isInView1, controls1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [isInView2, controls2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [isInView3, controls3]);
  useEffect(() => {
    if (isInView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [isInView4, controls4]);

  return (
    <m.div>
      <m.div id="projects" className='pt-20 ml-auto mr-auto w-[90%] max-w-[1400px] md:w-[80%] h-auto'>
        <motion.div
          ref={ref1}
          initial="hidden"
          exit="hidden"
          animate={controls1}
          variants={variants}
          className='font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2 highlight flex space-x-1 italic'
        >
          {t.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate={controls1}
              exit="hidden"
              variants={gradual}
              transition={{ duration: 0.5, delay: i * 0.18 }}
              className={`font-display text-3xl font-bold drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2 ${char === '_' ? 'flashing-underscore' : ''}`}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
        </motion.div>
        <m.div className='mt-16'>
          <motion.div
            ref={ref2}
            className='bg-gradient-to-r from-green-50 to-green-200 w-full rounded-lg h-[70vh]'
            initial="hidden"
            exit="hidden"
            animate={controls2}
            variants={cards}
          >
            <h1 className='text-black custom-font text-4xl m-6 pt-7 font-semibold '>Gena</h1>
            <div className='flex justify-between'>
              <div className='w-1/3'>
                <div className='text-black custom-font m-6 text-lg'>
                  This is Gena. Firstly, An order management system for customers to order manufacturing labels from <a href="https://inventive-group.com/" target="_blank" rel="noopener noreferrer" className='underline'>Inventive Group's</a> printing facility. Secondly, an order flow management system for our printing facility to process orders.
                </div>
              </div>
              <div>asd</div>
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            className='bg-gradient-to-r from-blue-200 to-green-50 w-full rounded-lg h-[70vh]'
            initial="hidden"
            exit="hidden"
            animate={controls3}
            variants={cards}
          >
            <h1 className='text-black custom-font text-4xl m-6 pt-7 font-semibold '>Biscuit</h1>
            <div className='flex justify-between'>
              <div>asd</div>
              <div className='w-1/3'>
                <div className='text-black custom-font m-6 text-lg'>
                  This is Biscuit. A desktop application for document control, building and using folder structure templates, and auditing document control changes.
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref4}
            className='bg-gradient-to-r from-purple-200 to-green-50 w-full rounded-lg h-[70vh] mt-6'
            initial="hidden"
            exit="hidden"
            animate={controls4}
            variants={cards}
          >
                <div className='flex flex-wrap items-center h-full p-6'>
            <h1 className='text-black custom-font text-4xl  font-semibold w-full'>Yap</h1>
                  <div className='relative w-full md:w-full lg:w-1/2 h-1/2 md:h-full order-2 md:order-1'>
                <ImageSlider />
                  </div>
              <div className='w-full md:w-full lg:w-1/2 h-1/2 md:h-full order-1 md:order-2'>
                <div className='text-black custom-font m-6 text-lg'>
                  This is Yap. An IOS mobile app designed for users to engage with people around them anonymously.
                </div>
              </div>
                </div>
          </motion.div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Projects;
