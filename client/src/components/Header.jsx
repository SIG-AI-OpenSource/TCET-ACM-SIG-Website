import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import "./home.css";
import {HashLink as Hlink} from "react-router-hash-link";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const [click,setClick] = useState(false);

  const handleClick =()=>{
    setClick(!click);
  }

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down & past the 100px mark
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(updateHeader);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  const content = <>
  <div className="sm:hidden transition block absolute top-14 w-screen right-0 bg-slate-900 ">
    <ul className="text-center text-xl">
      <li className="mt-2 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
        <Link to="/" smooth>
          Home
        </Link>
      </li>
      <li className="mt-2 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
      <Hlink smooth to="/events/#eventtop" >
          Events
        </Hlink>
      </li>
      <li className="mt-2 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
      <Hlink to="/team/#meetteam" smooth>
          Meet the Team
        </Hlink> 
      </li>
      <li className="mt-2 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
      <Hlink to="/#publication" smooth>
          Publications
        </Hlink>
      </li>
      <li className="mt-2 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
      <Hlink to="/#contactus" smooth>
          Contact us
      </Hlink>
      </li>
    </ul>
  </div>
  </>

  return (
    <motion.header
      className="fixed top-0 left-0 w-screen bg-black backdrop-blur-md bg-opacity-5 text-white p-2 flex justify-between items-center z-50"
      style={{ backdropFilter: "blur(8px) brightness(55%)" }}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-2xl pl-16 logodiv sm:text-sm">
      <Link to="/">
        <div className="logo">
        </div>
      </Link>
        <div className="circle">
          <span style={{"--i":1}}>T</span>
          <span style={{"--i":2}}>C</span>
          <span style={{"--i":3}}>E</span>
          <span style={{"--i":5}}>-</span>
          <span style={{"--i":6}}>A</span>
          <span style={{"--i":4}}>T</span>
          <span style={{"--i":7}}>C</span>
          <span style={{"--i":8}}>M</span>
          <span style={{"--i":9}}>-</span>
          <span style={{"--i":10}}>S</span>
          <span style={{"--i":11}}>I</span>
          <span style={{"--i":12}}>G</span>
          <span style={{"--i":13}}>A</span>
          <span style={{"--i":14}}>I</span>
          <span style={{"--i":15}}>-</span>
          <span style={{"--i":16}}>S</span>
          <span style={{"--i":17}}>T</span>
          <span style={{"--i":18}}>U</span>
          <span style={{"--i":19}}>D</span>
          <span style={{"--i":20}}>E</span>
          <span style={{"--i":21}}>N</span>
          <span style={{"--i":22}}>T</span>
          <span style={{"--i":23}}>-</span>
          <span style={{"--i":24}}>C</span>
          <span style={{"--i":25}}>H</span>
          <span style={{"--i":26}}>A</span>
          <span style={{"--i":27}}>P</span>
          <span style={{"--i":28}}>T</span>
          <span style={{"--i":29}}>E</span>
          <span style={{"--i":30}}>R</span>
        </div>
      </div>
      {/* <div class="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 sm:hidden">
      <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden md:w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
    </div> */}
      <div className="sm:hidden transition" onClick={handleClick}>
        {click && content}
      </div>
        
      <button onClick={handleClick} className="sm:hidden">
        {click ? <FaTimes/>:<CiMenuFries/>}
      </button>

      <nav className="space-x-10 font-bold flex-grow flex justify-center text-base hidden sm:flex" >
        <Hlink to="/" smooth className="hover:underline navlinks">
          Home
        </Hlink>
        <Hlink smooth to="/events/#eventtop" className="hover:underline navlinks">
          Events
        </Hlink>
        <Hlink to="/team/#meetteam" className="hover:underline navlinks">
          Meet the Team
        </Hlink>
        <Hlink to="/#publication" className="hover:underline navlinks" smooth>
          Publications
        </Hlink>
        <Hlink to="/#contactus" className="hover:underline navlinks" smooth>
          Contact us
        </Hlink>
        {/* <hr /> */}
        {/* <div className="animation start-home"></div> */}
      </nav>
    </motion.header>
  );
};

export default Header;
