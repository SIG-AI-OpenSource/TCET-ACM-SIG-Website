import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Publications from "../components/Publications";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Map from "../components/map";
import "./home.css";
import { motion, useInView, useAnimation } from "framer-motion";

<link
  href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600&display=swap"
  rel="stylesheet"
></link>;

const Home = () => {

  const [time,setTime] = useState(new Date().toLocaleTimeString());

  const [heroLink,setHeroLink] = useState("");

  const heroImageLink = ["https://res.cloudinary.com/df9us90ur/image/upload/v1727143046/heroimagenight.png"," https://www.kasradesign.com/wp-content/uploads/2023/06/AI-generated-image-abstract-feel-1.jpg","https://res.cloudinary.com/df9us90ur/image/upload/v1727143054/heroimageworkinghours.png"]
  useEffect(
    ()=>{
      if((time.slice(8)=='AM')&&((time.slice(0,1)>=6) && (time.slice(0,1)<10))){
        setHeroLink(heroImageLink[1]);
        console.log(time.slice(8));
      }
      else if(((time.slice(9)=='AM')&&(time.slice(0,2)>=10 && time.slice(0,2)<12))||
      ((time.slice(9)=='PM')&&(time.slice(0,2)==12))||
      ((time.slice(8)=='PM')&&(time.slice(0,1)<5))){
        setHeroLink(heroImageLink[2]);
      }
      else if((time.slice(8)=='PM')&&(time.slice(0,1)>=5 && time.slice(0,1)<7)){
        setHeroLink(heroImageLink[1]);
      }
      else if(((time.slice(8)=='PM')&&(time.slice(0,1)>7 && time.slice(0,1)<10)) || 
      ((time.slice(9)=='AM')&&(time.slice(0,2)>=10 )) || 
      ((time.slice(8)=='AM')&&(time.slice(0,1)<6))){
        setHeroLink(heroImageLink[0]);
      }
    }
    ,[]);


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  // https://res.cloudinary.com/ds8oawwu2/image/upload/v1726159046/download_4_tvrrce.png

  // https://www.kasradesign.com/wp-content/uploads/2023/06/AI-generated-image-abstract-feel-1.jpg
  return (
    <div ref={ref}>
      <div id="home">
        <img

          src={heroLink}

          alt="Descriptive Alt Text"
          className="w-screen h-[100vh] object-cover sm:object-cover "
        />

        {/* Container for the text and button */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center herotextandbutton"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Welcome Text */}
          <h1 className="homeheroh1">Welcome to</h1>

          {/* TCET ACM-SIGAI Text */}

          <h2
          
            className="homeheroh2"
          >
            TCET ACM<br className="sm:hidden"/><span className="hidden sm:inline">-</span>SIGAI

          </h2>

          {/* Student's Chapter Text */}
          <p className="homeherop">Student's Chapter</p>

          {/* Learn More Button */}
          <a
            href="#"
            className="mt-5 bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-800 transition homeheroatag"
          >
            Learn more →
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <About />
      </motion.div>
      <Publications />
      <Gallery />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
