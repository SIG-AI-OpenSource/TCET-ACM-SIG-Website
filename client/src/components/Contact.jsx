import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Swal from "sweetalert2";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
// const port = process.env;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms access key
    const web3FormsAccessKey = "Paste_Your_api_Key";

    // Google Apps Script web app URL
    const googleScriptURL = "Paste_Your_Google_API";

    try {
      // Submit to Web3Forms (for email)
      const web3FormsResponse = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            ...formData,
          }),
        }
      );

      const web3FormsResult = await web3FormsResponse.json();
      if (!web3FormsResult.success) {
        throw new Error("Web3Forms submission failed");
      }

      // Submit to Google Apps Script (for Excel sheet)
      const googleScriptResponse = await fetch(googleScriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      // Since mode is "no-cors", we can't check the response status
      // We'll assume it's successful if no error is thrown

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully and data recorded!",
        icon: "success",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div id="contactus" className="contact-container">

      <div className="contact-left">
        <h1 className="text-2xl sm:text-5xl">Contact Us</h1>
        <p className="pt-2 sm:pt-10 text-[1.1rem] sm:text-[1.9rem] mb-2">
          For any inquiries regarding events and <br />
          activities, please feel free to contact us.
        </p>
        <div className="contact-details">
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-logo" />
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
            <FaPhone className="detail-logo" />
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
      </div>

      <div className="contact-right">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <div className="field-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="field-item">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                placeholder="XXXXX-XXXXX"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field-item grow">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your message..."
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
            {/* {console.log(port)} */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
