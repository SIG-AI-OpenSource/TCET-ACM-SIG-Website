import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <div className="bg-black text-white px-10 space-y-10">
      <h1 className="pt-10">About</h1>
      <LoremIpsum p={2} />
    </div>
  );
};

export default About;
