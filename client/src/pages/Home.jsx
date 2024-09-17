import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Publications from "../components/Publications";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Map from "../components/map";
import "./home.css"

<link
  href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600&display=swap"
  rel="stylesheet"
></link>;

const Home = () => {
  return (
    <>
      <div id="home">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726159046/download_4_tvrrce.png"
          alt="Descriptive Alt Text"
          className="w-screen h-[100vh] object-cover sm:object-cover"
        />

        {/* Container for the text and button */}
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center herotextandbutton"
          
        >
          {/* Welcome Text */}
          <h1
            className="homeheroh1"
          >
            Welcome to
          </h1>

          {/* TCET ACM-SIGAI Text */}
          <h2
          
            className="homeheroh2"
          >
            TCET ACM<br className="sm:hidden"/>SIGAI
          </h2>

          {/* Student's Chapter Text */}
          <p
          
            className="homeherop"
          >
            Student's Chapter
          </p>

          {/* Learn More Button */}
          <a
            href="#"
            className="mt-5 bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-800 transition homeheroatag"
          >
            Learn more →
          </a>
        </div>
      </div>
      <About />
      <Publications />
      <Gallery />
      <Contact />
      <Map/>
    </>
  );
};

export default Home;
