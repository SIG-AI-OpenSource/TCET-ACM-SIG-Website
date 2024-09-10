import React from "react";
import "./Contact.css"; // Separate CSS file for styling
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="text-5xl">Contact Us</h1>
        <p className="pt-10 text-[1.9rem]">
          For any inquiries regarding events and <br />
          activities, please feel free to contact us.
        </p>
        <div className="contact-details">
          <div className="detail-item">
            <FaLocationDot className="detail-logo" />
            <span>
              Thakur Village, Kandivali East,
              <br /> Mumbai - 400101
            </span>
          </div>
          <div className="detail-item">
            <IoMail className="detail-logo" />
            <span>acmsigai10@gmail.com</span>
          </div>
          <div className="detail-item">
            <FaPhoneAlt className="detail-logo" />
            <span>022-28461891</span>
          </div>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="link-logo" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="link-logo" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="link-logo" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="link-logo" />
            </a>
          </div>
        </div>
        <div className="social-links">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>

      <div className="contact-right">
        <h2>Contact</h2>
        <form className="contact-form">
          <div className="form-field">
            <div className="field-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="field-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="jane@framer.com"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="field-item">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                placeholder="XXXXX-XXXXX"
                name="phone"
                id="phone"
              />
            </div>
          </div>
          <div className="field-item">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Your message..."
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
