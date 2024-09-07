import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Publications from "../components/Publications";
import Group from "../components/Group";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1725550158/Designer_20_ap4er8.png"
          alt="Descriptive Alt Text"
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <About />
      <Publications />
      <Group />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
