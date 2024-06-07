import NameCompenent from "../components/Name/NameComponent"
import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroScroller from "../components/elements/HeroScroller";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "../components/Section/Section";
const MainName = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    return (
     
        <m.div id="hero" className=" ml-auto mr-auto w-[95%] flex justify-center overflow-hidden-web relative h-full" ref={ref}>
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-around  items-center  min-h-[800px]"
        >
        <NameCompenent />
        <AnimatePresence>

      <m.div className="">
       <m.img
        key="image"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileInView="visible"
        transition={{ duration: 1 }}
        style={{ display: 'block' }}
        className="relative responsive-img" src="https://www.maniconcepteur.com/assets/images/main-img.svg"/>
      </m.div>
    
        </AnimatePresence>

      </m.div>
     
      <HeroScroller />
    </LazyMotion>
    </m.div>
    
    )
}

export default MainName