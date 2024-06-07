import { AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import { wrap } from "popmotion";

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
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
      "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
    ];
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };

      const [isGrabbing, setIsGrabbing] = useState(false);
      const [isMouseDown, setIsMouseDown] = useState(false);
    
      const handleMouseDown = () => {
        setIsGrabbing(true);
        setIsMouseDown(true);
      };
    
      const handleMouseUp = () => {
        setIsGrabbing(false);
        setTimeout(() => setIsMouseDown(false), 100); // Set isMouseDown to false after a small delay
      };
    

  const handleClick = () => {
    if (!isMouseDown) {
      console.log("HELLLO");
    }
  };
    return (
        <div className="img-container">
        <AnimatePresence>
        <motion.img
        onClick={() => handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`draggable ${isGrabbing ? 'grabbing' : 'grab'} project-img`}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
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
        <div className="next" onClick={() => paginate(1)}>
        {">>"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"<<"}
      </div>
        </div>
    )
}
export default ImageSlider