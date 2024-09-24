import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "#5FA8D3",
        width: "100%",
        paddingBottom: "2%", // Reduced bottom padding to decrease gap
      }}
      id="gallery"
    >
      <h1
        style={{
          fontSize: "6rem",
          textAlign: "center",
          color: "white",
          marginTop: "0",
          marginBottom: "2%",
          fontWeight: "450", // Reduced margin bottom to decrease gap
        }}
      >
        Gallery
      </h1>

      {/* First Gallery (default direction) */}
      <div
        className="slider"
        style={{
          "--width": "300px", // Width of images
          "--height": "250px", // Height of images
          "--quantity": "9",
          marginBottom: "0", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727115919/Screenshot_2024-09-23_235507_zldgyr.png"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726990713/AI_L_gnabq1.jpg"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726990712/FIN_S_zfzoqm.jpg"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727115857/Screenshot_2024-09-23_235359_psphju.png"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727116211/Screenshot_2024-09-23_235937_ysy0lt.png"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727116210/Screenshot_2024-09-23_235818_lmv1xy.png"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 9"
            />
          </div>
        </div>
      </div>

      {/* Second Gallery (reverse direction) */}
      <div
        className="slider"
        reverse="true" /* This will reverse the animation direction */
        style={{
          "--width": "300px", // Width of images
          "--height": "300px", // Height of images
          "--quantity": "9",
          marginTop: "0", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
