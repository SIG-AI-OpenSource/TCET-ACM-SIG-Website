import React from "react";
import "./Team.css"; // Make sure you have your CSS in place
import {FaLinkedin} from "react-icons/fa";

const Core = () => {
  return (
    <div className="pb-0 sm:pb-10 pt-4" style={{backgroundColor:"#1C0773"}}>
      <div className="core">
        <h1 className="title2">Meet the Team</h1>
        <h1 className="title">Core</h1>
        

        {/* First Row */}
        <div className="team-row group">
          <div className="container3 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 relative">
            <div className="image3 member-border group/linkedin">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725948863/core/diya_chairperson.png"
                alt="Diya Binoy"
                width="240px"
                height="250px"
              />
              <a href="" className="absolute top-0 left-0 text-4xl hidden group-hover/linkedin:inline" > 
                <FaLinkedin />
              </a>
            </div>
            <h1 className="role">CHAIRPERSON</h1>
            <h2 className="diya">Diya Binoy</h2>
           
          </div>

          <div className="container4 relative container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:right-8 z-40">
            <div className="image4 member-border group/linkedin">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725951014/core/iiimwqfj047tvopy6uug.png"
                alt="Satish Gupta"
                width="215px"
                height="250px"
              />
               <a href="" className="absolute top-0 left-0 text-4xl hidden group-hover/linkedin:inline " > 
                <FaLinkedin />
              </a>
              <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block group-hover/linkedin:translate-x-[80%] bg-white text-black rounded-lg group-hover/linkedin:-z-10 group-hover/linkedin:duration-1000 duration-1000 transition-transform">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quae dicta consequuntur assumenda, aspernatur in culpa fugiat sint asperiores cum perferendis pariatur id maxime iste reprehenderit et, suscipit ex distinctio.</div>
            </div>
            <h1 className="role z-10">VICE-CHAIRPERSON</h1>
            <h2 className="diya">Satish Gupta</h2>
          </div>

          <div className="container5 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image5 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725949344/core/ywumqilwpvzt512vy6ip.png"
                alt="Sagar Kanekar"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">SECRETARY</h1>
            <h2 className="diya">Sagar Kanekar</h2>
          </div>
        </div>

        {/* Second Row */}
        <div className="team-row group">
          <div className="container6 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image6 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725950556/core/gjwvkeqwbno75mkdsikt.png"
                alt="Saloni Parab"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">TREASURER</h1>
            <h2 className="diya">Saloni Parab</h2>
          </div>

          <div className="container7 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image7 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725948851/core/Akshita.png"
                alt="Akshita Chunchu"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">EVENT-MANAGER</h1>
            <h2 className="diya">Akshita Chunchu</h2>
          </div>

          <div className="container8 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image8 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725949777/core/jehsab12iettdkrkudal.png"
                alt="Rahul George"
                width="243px"
                height="250px"
              />
            </div>
            <h1 className="role">SPONSORSHIP<br />HEAD</h1>
            <h2 className="diya">Rahul George</h2>
          </div>
        </div>

        {/* Third Row */}
        <div className="team-row group">
          <div className="container9 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image9 member-border ">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725949365/core/zpiihbos0mjcro1edmjo.png"
                alt="Saurabh Shukla"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">PUBLIC RELATIONS<br />HEAD</h1>
            <h2 className="diya">Saurabh Shukla</h2>
          </div>

          <div className="container10 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image10 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725950522/core/kbjplqfwnxrfonjntgxh.png"
                alt="Priyanshu Shah"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">TECHNICAL HEAD</h1>
            <h2 className="diya">Priyanshu Shah</h2>
          </div>

          <div className="container11 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image11 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725948851/core/Khushi.png"
                alt="Khushi Sharma"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">WEBMASTER</h1>
            <h2 className="diya">Khushi Sharma</h2>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="team-row group">
          <div className="container12 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image12 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725950785/core/ptel6ita0jxneebsqzr3.png"
                alt="Shrutika Konduri"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">CREATIVE HEAD</h1>
            <h2 className="diya">Shrutika Konduri</h2>
          </div>

          <div className="container13 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image13 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725950442/core/w5hms3dbptjzzukjc2ox.png"
                alt="Gayatri Poojari"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">PUBLICATION HEAD</h1>
            <h2 className="diya">Gayatri Poojari</h2>
          </div>
        </div>

        {/* Junior Core */}
        <h1 className="Jtitle">Junior Core</h1>
        {/* Junior Core First Row */}
        <div className="team-row group">
          <div className="container3 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image3 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135270/8b4912bb-807e-4344-9203-a4569b5c824b_pnxwtw.png"
                alt="Tarun Shetty"
                width="240px"
                height="250px"
              />
            </div>
            <h1 className="role">INHOUSE HEAD</h1>
            <h2 className="diya">Ishan Dubey</h2>
          </div>

          <div className="container4 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image4 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135268/1723211881639_hy0vnl.png"
                alt="Satish Gupta"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">JOINT EVENT<br />MANAGER</h1>
            <h2 className="diya">Taran Shetty</h2>
          </div>

          <div className="container5 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image5 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135268/IMG_9811_t0hakf.png"
                alt="Sagar Kanekar"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">JOINT SECRETARY</h1>
            <h2 className="diya">MUDASSIR SHAIKH</h2>
          </div>
        </div>

        {/* Junior Core Second Row */}
        <div className="team-row group">
          <div className="container6 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image6 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135858/DSC_9117-min_khii7w.png"
                alt="Saloni Parab"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">JOINT CREATIVE<br />HEAD</h1>
            <h2 className="diya">Rishikesh Saroj</h2>
          </div>

          <div className="container7 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image7 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135283/DSCN6340_xlwuzr.png"
                alt="Akshita Chunchu"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">JOINT PR HEAD</h1>
            <h2 className="diya">Sujit Thakur</h2>
          </div>

          <div className="container8 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
            <div className="image8 member-border">
              <img
                src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726135280/DSCN6333_jieg0l.png"
                alt="Rahul George"
                width="243px"
                height="250px"
              />
            </div>
            <h1 className="role">JOINT TECHNICAL<br />HEAD</h1>
            <h2 className="diya">Kartik Bankar</h2>
          </div>
          
        </div>
        <div className="particles">
      <span style={{"--j":11}}></span>
      <span style={{"--j":12}}></span>
      <span style={{"--j":24}}></span>
      <span style={{"--j":10}}></span>
      <span style={{"--j":14}}></span>
      <span style={{"--j":23}}></span>
      <span style={{"--j":18}}></span>
      <span style={{"--j":16}}></span>
      <span style={{"--j":19}}></span>
      <span style={{"--j":20}}></span>
      <span style={{"--j":22}}></span>
      <span style={{"--j":25}}></span>
      <span style={{"--j":18}}></span>
      <span style={{"--j":21}}></span>
      <span style={{"--j":13}}></span>
      <span style={{"--j":15}}></span>
      <span style={{"--j":26}}></span>
      <span style={{"--j":17}}></span>
      <span style={{"--j":13}}></span>
      <span style={{"--j":28}}></span>
      <span style={{"--j":11}}></span>
      <span style={{"--j":12}}></span>
      <span style={{"--j":24}}></span>
      <span style={{"--j":10}}></span>
      <span style={{"--j":14}}></span>
      <span style={{"--j":23}}></span>
      <span style={{"--j":18}}></span>
      <span style={{"--j":16}}></span>
      <span style={{"--j":19}}></span>
      <span style={{"--j":20}}></span>
      <span style={{"--j":22}}></span>
      <span style={{"--j":25}}></span>
      <span style={{"--j":18}}></span>
      <span style={{"--j":21}}></span>
      <span style={{"--j":13}}></span>
      <span style={{"--j":15}}></span>
      <span style={{"--j":26}}></span>
      <span style={{"--j":17}}></span>
      <span style={{"--j":13}}></span>
      <span style={{"--j":28}}></span>
    </div>
      </div>
    </div>
  );
};

export default Core;
