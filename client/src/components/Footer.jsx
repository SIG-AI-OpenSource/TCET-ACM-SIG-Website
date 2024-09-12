import React from "react";
import "./home.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "0%",
          paddingBottom: "5%",
          color: "white",
        }}
      >
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.807415056768!2d72.87278298331742!3d19.20637003525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1725606742168!5m2!1sen!2sin"
            className="w-full h-[340px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div style={{ display: "flex", gap: "25%" }} id="grad1">
        <div
          className="left_bottom"
          style={{ marginLeft: "7%", color: "white", fontSize: "2rem" }}
        >
          <span>ACM SIGAI</span>
          <br />
          <br />
          <br />

          <span id="abt" style={{ fontSize: "2.5rem" }}>
            About
          </span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>Events</span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>Gallery</span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>Contact Us</span>
          <br />
          <br />

          <span style={{ fontSize: "1.2rem" }}>
            {" "}
            &#169; 2024 All rights reserved
          </span>
          <br />
          <br />
        </div>
        <div
          className="right_bottom"
          style={{ marginLeft: "7%", color: "white", fontSize: "2rem" }}
        >
          <span>TCET STUDENT CHAPTER</span>
          <br />
          <br />
          <br />

          <span id="abt" style={{ fontSize: "2.5rem" }}>
            LinkedIn
          </span>
          <br />
          <span id="abt" style={{ fontSize: "2.5rem" }}>
            Instagram
          </span>
          <br />
          <span id="abt" style={{ fontSize: "2.5rem" }}>
            Facebook
          </span>
          <br />
          <span id="abt" style={{ fontSize: "2.5rem" }}>
            Dribble
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
