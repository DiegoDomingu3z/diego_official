import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Soundbar from './Sound/Soundbar';
import { useState } from 'react';
// import '../styles/index.css'
const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }
  return (
    <motion.nav
      className="flex justify-between md:justify-around items-center py-3 px-30  bg-[#00000020] text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
          <div className="flex space-x-1 md:justify-center ms-12 md:ms-0">
            <img src='https://media.istockphoto.com/id/1303269536/vector/d-style-logo-icon-shape.jpg?s=612x612&w=0&k=20&c=TEmq8HzDGokNqTRIHSbLyiCD5zk_15lZZuGfBATiIlk=' w className='rounded-full w-[55px] md:w-[70px]'/>
          </div>
      </motion.div>
      <motion.div className='md:hidden me-8 md:me-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
        variants={hideNavItemsVariant}
        onClick={() => setMobileNavOpen(true)}>
          Menu
        </motion.div>
      </motion.div>
      <motion.ul
        className="space-x-4 text-[1.5rem] hidden md:flex lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <li className=' items-center '>
          <a href="#" className="hover:text-gray-300 uppercase custom2 main-text highlight">Projects</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 uppercase custom2 highlight-blue">Experience</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 uppercase custom2 highlight-purple">About me</a>
        </li>
  
        <li>
          <a href="#" className="hover:text-gray-300 flex items-center "><Soundbar/></a>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
