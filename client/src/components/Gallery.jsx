import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "#C7E8FF",
        width: "100%",
        paddingBottom: "2%", // Reduced bottom padding to decrease gap
      }}
      id="gallery"
    >
      <h1
        style={{
          fontSize: "6rem",
          textAlign: "center",
          color: "black",
          marginTop: "0",
          marginBottom: "4%",
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
          marginBottom: "40px", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727235778/Snapinsta.app_455258553_1182048372844404_714243077550783267_n_1080_pfqony.jpg"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727235973/Image-112_qfxj3n.jpg"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727236094/458500496_1283737986403480_7205706068279908403_n_i6oekv.jpg"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727235827/Snapinsta.app_459445065_1969798283468953_5532306796207543031_n_1080_aimfbe.jpg"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727235646/Snapinsta.app_432009237_965437265010313_4996229004866469143_n_1080_tyqp0l.jpg"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727235697/Snapinsta.app_431984976_1133355587799129_2694162930070335005_n_1080_yd0f6c.jpg"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727236518/6_otyvti.jpg"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727236668/6_1_ukyq6t.jpg"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727236903/We_recently_had_an_electrifying_session_with_Harshit_Samdani_founder_of_Smallpie_and_a_leading_expert_in_algorithmic_trading_and_financial_markets._His_talk_on_Maximizing_Your_Money-_The_Power_of_Personal_Financ_lsdc38.jpg"
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
          marginBottom: "30px", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234506/zephyr_1_nanppd.jpg"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/zephyr_2_l6jiln.jpg"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234506/zephyr_upxcfx.jpg"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/zephyr_4_yiw3vb.jpg"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/zephyr_3_wnhapu.jpg"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234506/zephyr_upxcfx.jpg"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/Snapinsta.app_431393270_929567045147157_4802571853081325278_n_1080_z5sy2t.jpg"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/zephyr_4_yiw3vb.jpg"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1727234505/zephyr_3_wnhapu.jpg"
              alt="Gallery Image 9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
