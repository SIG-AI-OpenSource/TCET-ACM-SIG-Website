import React,{ useRef } from "react";
import "./home.css";
import { motion, transform, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Publication from "./latestmagazine.jsx"; 

const Publications = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className="publications" id="publication" ref={headerRef}>
      <div className="titleyear w-screen">
        <div className="publicationstitle">Publications</div>
        <div className="publicationyear">2023-24</div>
      </div>
      {/* <div className="magazineblock group">
        <div className="mag_1 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://online.pubhtml5.com/hiwar/abef/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_one"></div>
            <div className="magazinetitle">Tejas Vol 1</div>
            <p className="magazinepara">
              We start by gaining a deep <br />
              understanding of your <br /> business goals.
            </p>
          </a>
        </div>
        <div className="mag_2 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://pubhtml5.com/hiwar/uqpn/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_two"></div>
            <div className="magazinetitle">Tejas Vol 2</div>
            <p className="magazinepara">
              Next, our team of experts <br /> develops tailored solutions.
            </p>
          </a>
        </div>
        <div className="mag_3 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://pubhtml5.com/hiwar/vfrp/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_three"></div>
            <div className="magazinetitle">Tejas Vol 3.1</div>
            <p className="magazinepara">
              We leverage cutting-edge <br /> technology to implement <br />{" "}
              seamlessly.
            </p>
          </a>
        </div>
      </div> */}
        <Publication/>
      <div
      className="info-rotate-right-text"
      ref={headerRef}
      >
        <motion.div className="center-rotate-text"  
        >
          <motion.div className="rotate-text-block" 
          ref={headerRef}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : -150 }}
        transition={{ duration: 0.5 }}>
          <span className="rotate-text">INNOVATE</span>
          <span className="rotate-text">CREATE</span>
          <span className="rotate-text">INSPIRE</span>
          <span className="rotate-text">TRANSFORM</span>
          <span className="rotate-text">COLLABORATE</span>
          </motion.div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 10 }}
         animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : 150 }}
         transition={{ duration: 0.5 }}
         className="right-text-info">
          <span id="abts">Association for Computing Machinery</span>'s{" "}
          <span id="abts">Special Interest Group</span> on{" "}
          <span id="abts">Artificial Intelligence</span>
          <br />
          <br />
          An interdisciplinary group of academic and industrial researchers,
          practitioners,
          <span id="abts"> software developers</span>,
          <span id="abts"> end users</span>, and students who work together to
          promote and support the growth and application of AI principles and
          techniques throughout computing.
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
