import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Soundbar from './Sound/Soundbar';
// import '../styles/index.css'
const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-around items-center py-3 px-30 bg-[#00000020] text-white "
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
          <div className="flex space-x-1 justify-center">
      <img src='https://assets-global.website-files.com/63caf77557e1cb278689bce3/63caf77557e1cb476889bd06_LOGO.svg' width="100px"/>
    </div>
      </motion.div>
      <motion.ul
        className="flex space-x-4 text-[1.5rem]"
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
