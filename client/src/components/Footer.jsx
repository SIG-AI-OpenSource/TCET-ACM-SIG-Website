import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import {HashLink as Hlink} from "react-router-hash-link";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer >
      <div style={{ display: "flex", gap: "25%" }} id="grad1">
        <div
          className="left_bottom"
          style={{ }}
        >
          <span><Hlink smooth to="/#home" style={{fontWeight:"550"}}>
        ACM SIGAI
            </Hlink></span>
          <br />
          <br />

          <span id="abt" style={{ fontSize: "2.5rem" }}>
            <Hlink smooth to="/#aboutus" style={{fontWeight:"550"}}>
            About
            </Hlink>
          </span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>
          <Hlink smooth to="/events/#eventtop" style={{fontWeight:"550"}}>
          Events
          </Hlink>
          </span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>
            <Hlink smooth to="/#gallery" style={{fontWeight:"550"}}>Gallery</Hlink>
            </span>
          <br />
          <span style={{ fontSize: "2.5rem" }}>
          <Hlink smooth to="/#contactus" style={{fontWeight:"550"}}>Contact Us</Hlink>
          </span>
          <br />
          <br />
          <div className="sm:hidden contact-links-footer">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="link-logo-footer" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="link-logo-footer" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="link-logo-footer" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="link-logo-footer" />
            </a>
          </div>

          <span className="rightsReserved">
            {" "}
            &#169; 2024 All rights reserved
          </span>
          <br />
          <br />
        </div>
        <div
          className="right_bottom"
        >
          <span>
          <Hlink to="/team/#meetteam" className="studentchapter">TCET STUDENT CHAPTER
          </Hlink>
          </span>
          <br />
          <br />

          <span id="abt">
            <a href="https://www.linkedin.com/in/tcet-acm-sig-ai-9515072b9">
            LinkedIn</a> 
          </span>
          <br />
          <span id="abt">
            <a href="https://www.instagram.com/tcet_acm.sigai/" >Instagram</a>
          </span>
          <br />
          <span id="abt">
            Facebook
          </span>
          <br />
          <span id="abt">
            Dribble
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
