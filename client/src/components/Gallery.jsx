import React, { useState } from "react";
import "./home.css";
import images from "./images.js";

import CustomSlider from "./customslider.jsx";

// // Import images directly
// import img1 from "../components/asset/1-hover.jpg";
// import img2 from "../components/asset/2-hover.avif";
// import img3 from "../components/asset/3-hover.avif";

const Gallery = () => {
  // State to keep track of the current image index
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Images array
  // const images = [
  //   { src: img1, alt: "Image 1" },
  //   { src: img2, alt: "Image 2" },
  //   { src: img3, alt: "Image 3" },
  // ];

  // // Handlers for image navigation
  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // // Handle hover event
  // const handleHover = () => {
  //   // Set interval to change image every 2 seconds
  //   const interval = setInterval(() => {
  //     nextImage();
  //   }, 2000);

  //   // Clear the interval when the user stops hovering
  //   const stopHover = () => clearInterval(interval);
  //   document.querySelector("div").addEventListener("mouseleave", stopHover);
  // };

  return (
    <div
      style={{
        backgroundColor: "#C7E8FF",
        height: "20%",
        width: "100%",
        paddingBottom: "6%",
      }}
      id="gallery"
      // onMouseEnter={handleHover} // Trigger image change on hover
    >
      <h1
        style={{
          fontSize: "6rem",
          textAlign: "center",
          color: "black",
          marginTop: "0",
          fontFamily:"inter",
        }}
      >
        Gallery
      </h1>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      {/* <div className="image-container" style={{ textAlign: "center" }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="image"
          style={{
            width: "800px",
            height: "500px",
            borderRadius: "5%",
            marginBottom: "20px",
          }}
        />
      </div> */}
    </div>
  );
};

export default Gallery;
