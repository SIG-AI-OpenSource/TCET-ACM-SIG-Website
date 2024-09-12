import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Publications from "../components/Publications";

import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
<link
  href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600&display=swap"
  rel="stylesheet"
></link>;

const Home = () => {
  return (
    <>
      <div className="">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1725550158/Designer_20_ap4er8.png"
          alt="Descriptive Alt Text"
          className="w-full h-[100vh] object-cover"
        />

        {/* Container for the text and button */}
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center"
          style={{ marginLeft: "50px", paddingTop: "10%" }}
        >
          {/* Welcome Text */}
          <h1
            style={{
              fontSize: "4rem",
              color: "#000000",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontWeight: "400",
            }}
          >
            Welcome to
          </h1>

          {/* TCET ACM-SIGAI Text */}
          <h2
            style={{
              fontSize: "2rem",
              color: "#000000",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "500",
              marginTop: "2px",
            }}
          >
            TCET ACM-SIGAI
          </h2>

          {/* Student's Chapter Text */}
          <p
            style={{
              fontSize: "1.5rem",
              color: "#000000",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              marginTop: "0px",
            }}
          >
            Student's Chapter
          </p>

          {/* Learn More Button */}
          <a
            href="#"
            className="mt-5 bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-800 transition"
          >
            Learn more →
          </a>
        </div>
      </div>

      <About />
      <Publications />

      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
