import React from "react";
import "./home.css";

const Publications = () => {
  return (
    <div className="publications" id="publication">
      <div className="titleyear w-screen">
        <div  className="publicationstitle">
          Publications
        </div>
        <div
          className="publicationyear"
        >
          2023-24
        </div>
      </div>
      <div className="magazineblock group">
        <div className="mag_1 cursor-pointer duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <div className="pic_one"></div>
          <div
           
             className="magazinetitle"
          >
            Tejas Vol 1
          </div>
          <p className="magazinepara"
          >
            We start by gaining a deep <br />
             understanding of your <br /> business goals.
          </p>
        </div>
        <div className="mag_2 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <div className="pic_two" ></div>
          <div
            
             className="magazinetitle"
          >
            Tejas Vol 2
          </div>
          <p
          className="magazinepara"
          >
            Next, our team of experts <br /> develops tailored solutions.
          </p>
        </div>
        <div className="mag_3 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <div className="pic_three"></div>
          <div
            
             className="magazinetitle"
          >
            Tejas Vol 3.1
          </div>
          <p
          className="magazinepara"
          >
            We leverage cutting-edge <br /> technology to implement 
            <br />seamlessly.
          </p>
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
