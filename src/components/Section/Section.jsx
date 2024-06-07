import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const Section = ({ children }) => {
 
    const [ref, isInView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        console.log("isInView:", isInView);
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);



    return (
        <section >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
