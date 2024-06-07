import { m, LazyMotion, domAnimation, useMotionValue, useTransform} from "framer-motion";
import Text from "./Text";
import { AnimatePresence } from "framer-motion";
import FormField from "../FormFields/FormFields";
import { useState } from "react";
const NameCompenent = () => {
    const firstName = "Diego"
    const [status, setStatus] = useState("unsubmitted");
    const lastName = "Dominguez"
    const profession = "Software Developer _"
    const gradual = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };

    const downloadResume = (e) => {
      e.preventDefault();
      setStatus("submitting")
      setTimeout(() => {
      setStatus("submitted");
    }, 2000);
    }
   
    return(
      <m.div>
        <m.div
      className=" flex  space-x-1"
      id="repulse-div"
      >
     <AnimatePresence>
        {firstName.split("").map((char, i) => (
          <m.h1
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={gradual}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className=" font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </m.h1>
        ))}
      </AnimatePresence>
    </m.div>
    <m.div
      className="flex justify-center mt-3 space-x-1"
      id="repulse-div"
      >
     <AnimatePresence>
        {lastName.split("").map((char, i) => (
          <m.h1
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={gradual}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`text-center font-display text-3xl font-bold drop-shadow-sm md:text-7xl md:leading-[4rem] uppercase custom2 ${char === '_' ? 'flashing-underscore' : ''}`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </m.h1>
        ))}
      </AnimatePresence>
    </m.div>
    <m.div
      className="flex  mt-3 space-x-1"
      id="repulse-div"
      >
     <AnimatePresence>
        {profession.split("").map((char, i) => (
          <m.h1
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={gradual}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`font-display text-3xl text-gray-300 font-bold drop-shadow-sm md:text-2xl md:leading-[4rem] uppercase custom2 ${char === '_' ? 'flashing-underscore' : ''}`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </m.h1>
        ))}
      </AnimatePresence>
    </m.div>
    <m.div className=" mt-8">
      <m.div className="flex gap-3">
            <FormField status={status} type="Contact"/>
            <form onSubmit={downloadResume}>

            <FormField status={status} type="Resume"/>
            </form>
            {/* <button className="bg-white text-gray-400 px-5 custom2">Contact Me</button> */}
      </m.div>
          </m.div>
        </m.div>
    )
}

export default NameCompenent;