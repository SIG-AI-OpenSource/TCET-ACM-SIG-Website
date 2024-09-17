import React from "react";
import "./home.css";

const AboutUs = () => {
  return (
    <div className="about_us" id="aboutus">
      <p id="head_of_about_us" className="appearanimation">About us</p>
      <div className="content_about_us appearanimation">
        <div className="content_about_us_left appearanimation">
          TCET ACM SIGAI is a professional body that was established in January
          2023. It aims to bring together and inculcate research ideologies in
          people from all over India with a passion in the field of Artificial
          Intelligence and Machine Learning by means of conducting seminars,
          debates, Kaggle competitions, etc.
        </div>
        <div className="content_about_us_right appearanimation">
          <div style={{ display: "flex" }}>
            <p id="content_about_us_right_h1">50+</p>
            <p id="events">Number of events</p>
          </div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
          <div style={{ display: "flex" }}>
            <p id="content_about_us_right_h1">100+</p>
            <p id="events">Members</p>
          </div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
          <div style={{ display: "flex" }}>
            <p id="content_about_us_right_h1">30%</p>
            <p id="events">Growth per year</p>
          </div>
          <hr style={{ border: "1px solid #232270", marginTop: "0" }} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
