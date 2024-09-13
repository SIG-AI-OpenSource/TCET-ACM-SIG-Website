import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

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

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black backdrop-blur-md bg-opacity-5 text-white p-4 flex justify-between items-center z-50"
      style={{ backdropFilter: "blur(8px) brightness(55%)" }}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-2xl font-medium pl-10">ACM SIGAI</div>
      <nav className="space-x-10 font-bold flex-grow flex justify-center text-base">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/team" className="hover:underline">
          Meet the Team
        </Link>
        <Link to="/publications" className="hover:underline">
          Publications
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact us
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
