import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const Publications = () => {
  return (
    <div className="bg-neutral-800 text-white px-10 space-y-10">
      <h1 className="pt-10">Publication</h1>
      <LoremIpsum p={2} />
    </div>
  );
};

export default Publications;
