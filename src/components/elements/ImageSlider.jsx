import { AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import { wrap } from "popmotion";
import { useEffect } from "react";

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImageSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const images = [
      "https://jacobpixler.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F50saytoz%2Fproduction%2F83c43cbb904e9111c07e76937c4b391d6fa37ede-2500x1250.jpg&w=1920&q=75",
      "https://jacobpixler.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F50saytoz%2Fproduction%2F3e7c8638874af50bfac419ea85bb16b64700fe1e-2500x1250.jpg&w=1920&q=75",
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
    ];
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newDirection) => {
      setPage(([prevPage, prevDirection]) => [prevPage + newDirection, newDirection]);
      };

      const [isGrabbing, setIsGrabbing] = useState(false);
      const [isUserScrolling, setUserScrolling] = useState(false);
    
      const handleMouseDown = () => {
        setIsGrabbing(true);
        setIsMouseDown(true);
      };
    
      const handleMouseUp = () => {
        setIsGrabbing(false);
      };

      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     if (!isUserScrolling) {
      //       paginate(1);
      //     }
      //   }, 5000);
    
      //   return () => clearInterval(interval);
      // }, [isUserScrolling]);
    

 
    return (
        <div >
        <AnimatePresence>
        <motion.img
        onHoverStart={() => setUserScrolling(true)}
        onHoverEnd={() => setUserScrolling(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`draggable ${isGrabbing ? 'grabbing' : 'grab'} absolute rounded-lg sm:max-w-[400px] md:max-w-[300px] lg:max-w-[600px]`}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 30 },
            opacity: { duration: 0.8 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        </AnimatePresence>
        <motion.div className="next" onClick={() => paginate(1)} onHoverStart={() => setUserScrolling(true)}
        onHoverEnd={() => setUserScrolling(false)}>
        {">>"}
      </motion.div>
      <motion.div className="prev" onClick={() => paginate(-1)} onHoverStart={() => setUserScrolling(true)}
        onHoverEnd={() => setUserScrolling(false)}>
        {"<<"}
      </motion.div>
        </div>
    )
}
export default ImageSlider