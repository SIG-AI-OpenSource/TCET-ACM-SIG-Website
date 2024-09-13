import React from "react";
import "./home.css";

const Publications = () => {
  return (
    <div className="publications">
      <div style={{ display: "flex" }}>
        <div style={{ color: "white", fontSize: "4rem", paddingLeft: "2rem" }}>
          Publications
        </div>
        <div
          style={{
            color: "rgb(119,0,234)",
            marginLeft: "60%",
            marginTop: "2%",
            fontSize: "1.5rem",
          }}
        >
          2023-24
        </div>
      </div>
      <div style={{ display: "flex", margin: "5%", marginRight: "8%" }}>
        <div className="mag_1">
          <div className="pic_one"></div>
          <div
            style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}
          >
            Tejas Vol 1
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "6%",
            }}
          >
            We start by gaining a deep understanding of your business goals.
          </div>
        </div>
        <div className="mag_2">
          <div className="pic_two"></div>
          <div
            style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}
          >
            Tejas Vol 2
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "6%",
            }}
          >
            Next, our team of experts develops tailored solutions.
          </div>
        </div>
        <div className="mag_3">
          <div className="pic_three"></div>
          <div
            style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}
          >
            Tejas Vol 3.1
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "1.3rem",
              marginTop: "6%",
            }}
          >
            We leverage cutting-edge technology to implement seamlessly.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30%", marginTop: "9%" }}>
        <div
          style={{
            color: "rgb(119,0,234)",
            display: "flex",
            gap: "1.5rem",
            marginLeft: "4%",
            fontSize: "1.2rem",
          }}
        >
          <div>INNOVATE</div>
          <div>CREATE</div>
          <div>INSPIRE</div>
        </div>
        <div style={{ color: "white", width: "45%", fontSize: "2rem" }}>
          <span id="abt">Association for Computing Machinery</span>'s{" "}
          <span id="abt">Special Interest Group</span> on{" "}
          <span id="abt">Artificial Intelligence</span>
          <br />
          <br />
          An interdisciplinary group of academic and industrial researchers,
          practitioners,
          <span id="abt">software developers</span>,
          <span id="abt">end users</span>, and students who work together to
          promote and support the growth and application of AI principles and
          techniques throughout computing.
        </div>
      </div>
    </div>
  );
};

export default Publications;
