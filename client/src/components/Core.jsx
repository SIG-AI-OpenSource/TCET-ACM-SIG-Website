import React from "react";
import "./Team.css"; // Make sure you have your CSS in place
import { FaLinkedin } from "react-icons/fa";

const Core = () => {
  return (
    <div className="pb-0 sm:pb-10 pt-4" style={{ backgroundColor: "#1C0773" }}>
      <div className="core">
        <h1 className="title2">Meet the Team</h1>
        <h1 className="title">Core</h1>

        {/* First Row */}
        <div className="team-row group">
          <div className="container3 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] 
          hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:right-12 group/linkedin 
          hover:z-10">
            <div className="image3 member-border ">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725948863/core/diya_chairperson.png"
                alt="Diya Binoy"
                width="240px"
                height="250px"
              />
            </div>
            <h1 className="role">CHAIRPERSON</h1>
            <h2 className="diya">Diya Manapetty</h2>
            <a href="https://www.linkedin.com/in/diya-manapetty/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info core-info2">Meet our exceptional Chairperson, Diya Manapetty! Diya’s beauty is matched by her inner grace, with kindness that deeply enriches every aspect of her work. Her dedication, resilience, and unwavering commitment not only drive our team forward but also creates a harmonious and motivated environment. Diya’s adept management and inspiring leadership ensure we achieve our best. We are thrilled to have such a visionary and compassionate leader guiding us. Here’s to an extraordinary journey with you, Diya!
            </div>
          
          </div>

          <div className="container4 relative container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 sm:hover:right-10 group/linkedin 
          hover:z-10" >
            <div className="image4 member-border ">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725951014/core/iiimwqfj047tvopy6uug.png"
                alt="Satish Gupta"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role z-10">VICE-CHAIRPERSON</h1>
            <h2 className="diya">Satish Gupta</h2>
            <a href="https://www.linkedin.com/in/satish-gupta-5a0374259/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-40" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:z-50 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info core-info2">Meet our exceptional Vice Chairperson, Satish Gupta! Satish combines sharp intelligence, unwavering confidence, and remarkable talent to elevate our team. His exceptional problem-solving and decision-making skills ensure that challenges are met with innovative solutions and clear direction. Efficiently managing our team with both insight and authority, Satish inspires excellence and fosters a collaborative environment. Here’s to achieving great heights together, Satish!
            </div>
          </div>

          <div className="container5 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:left-12 group/linkedin 
          hover:z-10">
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
            {/* absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50 */}
            <a href="https://www.linkedin.com/in/sagar-kanekar-966060260/" className="absolute top-0 right-full sm:right-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className=" absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[-100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info core-info2">Meet our exceptional Secretary, Sagar Kanekar! Sagar’s unwavering commitment, tireless work ethic, and remarkable resilience make him an invaluable asset to our team. He handles every task with unmatched efficiency, ensuring everything runs smoothly. His savage wit and sharp personality bring a unique energy to the team, balancing professionalism with a refreshing edge. We’re excited to welcome such a dedicated and dynamic individual. Here’s to the incredible contributions you’ll bring, Sagar!
            </div>
          </div>

        </div>

        {/* Second Row */}
        <div className="team-row group">
          <div className="container6 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:right-12 group/linkedin
          hover:z-10">
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
            <a href="https://www.linkedin.com/in/saloni-parab-2a9bb6249/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Meet our incredible Treasurer, Saloni Parab! Saloni’s blend of beauty, intelligence, and confidence is matched only by her sharp wit and humor. She skillfully manages our finances with remarkable efficiency, ensuring every detail is handled with precision. We’re thrilled to welcome such a talented and charismatic individual to our team. Here’s to your fantastic contributions, Saloni!
            </div>
          </div>

          <div className="container7 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:right-10 group/linkedin 
          hover:z-10">
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
            <a href="https://www.linkedin.com/in/akshitha-chunchu-951a3325b/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Meet our exceptional Event Manager Akshitha Chunchu <br />
            Say hello to our Event Manager, a master of calm and preparation! With a soft heart but a firm hand, she ensures every event is flawlessly executed. A true perfectionist, she leaves no stone unturned, always staying one step ahead. Ready to handle anything that comes her way, she’s the backbone of our event success.
            </div>
            
          </div>

          <div className="container8 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:left-12 group/linkedin 
          hover:z-10">
            <div className="image8 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725949777/core/jehsab12iettdkrkudal.png"
                alt="Rahul George"
                width="243px"
                height="250px"
              />
            </div>
            <h1 className="role">
              SPONSORSHIP
              <br />
              HEAD
            </h1>
            <h2 className="diya">Rahul George</h2>
            <a href="https://www.linkedin.com/in/r4hvl/" className="absolute top-0 right-full sm:right-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className=" absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[-100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Meet our incredible Sponsorship Head Rahul George!! <br />
            The absolute charmer of ACM SIG AI! With his friendly demeanor and approachable nature, he turns every conversation into a new friendship. His eloquence and persuasive skills make him a natural at securing sponsors. If you need someone to seal the deal, he's your guy! Here’s to an incredible and successful tenure ahead!!
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="team-row group">
          <div className="container9 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:right-12 group/linkedin 
          hover:z-10">
            <div className="image9 member-border ">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725949365/core/zpiihbos0mjcro1edmjo.png"
                alt="Saurabh Shukla"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">
              PUBLIC RELATIONS
              <br />
              HEAD
            </h1>
            <h2 className="diya">Saurabh Shukla</h2>
            <a href="https://www.linkedin.com/in/saurabh-shukla-3507991bb/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Introducing our exceptional Public Relations Head Saurabh Shukla! <br />
            He's a dynamic blend of charisma and skill! With his captivating presence and natural ability to connect with anyone, he’s the ultimate relationship builder. He brings a playful energy to the team, but when it’s time to deliver, his work speaks for itself. We couldn’t ask for a better leader in PR! Here’s to an incredible and successful tenure ahead!!
            </div>
          </div>

          <div className="container10 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:right-12 group/linkedin 
          hover:z-10">
            <div className="image10 member-border">
              <img
                src="https://res.cloudinary.com/dwd7tzjo0/image/upload/v1725950522/core/kbjplqfwnxrfonjntgxh.png"
                alt="Priyanshu Sah"
                width="215px"
                height="250px"
              />
            </div>
            <h1 className="role">TECHNICAL HEAD</h1>
            <h2 className="diya">Priyanshu Sah</h2>
            <a href="https://www.linkedin.com/in/priyanshu123sah/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Introducing our incredible Technical Head, Priyanshu Sah!💻 Priyanshu brings unmatched expertise and confidence to our team, managing all our tech needs with precision and skill. His sharp intelligence and quick wit make him not just a tech genius but a fantastic team player. We’re thrilled to welcome such a dynamic and brilliant leader aboard!
            </div>
          </div>

          <div className="container11 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative sm:hover:left-12 group/linkedin 
          hover:z-10">
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
            <a href="https://www.linkedin.com/in/khushi-sharma-264b9825b/" className="absolute top-0 right-full sm:right-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className=" absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[-100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Meet Khushi Sharma, our brilliant webmaster! With her sharp intellect and boundless creativity, Khushi effortlessly brings our web pages to life. Her stunning beauty and impeccable sense of humor light up our team, while her efficient management keeps everything running smoothly. We’re thrilled to have such a talented and vibrant addition to our team! Welcome, Khushi!
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="team-row group">
          <div className="container12 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative group/linkedin 
          hover:z-10">
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
            <a href="https://www.linkedin.com/in/shruthika-k-81977a25a/" className="absolute top-0 right-full sm:left-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className="absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Introducing the creative powerhouse of ACM SIG AI! Shruthika konduri, Whether she’s persuading others to see her vision or patiently guiding the team, she pours her heart into every task. Her approachable nature makes her a go-to for advice and inspiration. With unwavering dedication and a knack for getting everyone on board, she’s the leader who brings our ideas to life.
            </div>
          </div>

          <div className="container13 container-memeber-border duration-500  group-hover:blur-none hover:!blur-none group-hover:scale-[0.85] hover:!scale-95
          sm:hover:!scale-100 relative group/linkedin 
          hover:z-10">
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
            <a href="https://www.linkedin.com/in/gayathri-poojary-6249321a8/" className="absolute top-0 right-full sm:right-0 text-4xl hidden group-hover/linkedin:inline linked-in z-50" > 
            <FaLinkedin />
            </a>
            <div className=" absolute h-full w-full top-0 left-0 hidden group-hover/linkedin:block sm:group-hover/linkedin:block group-hover/linkedin:translate-x-[0%] sm:group-hover/linkedin:translate-x-[-100%] backdrop-blur-md bg-opacity-5 sm:bg-white text-white sm:text-black rounded-lg sm:group-hover/linkedin:-z-10 sm:group-hover/linkedin:duration-1000 duration-1000 transition-transform p-4 core-info">Introducing our exceptional Publication Head! Gayathri poojary, Who exemplifies both kindness and professionalism. With a warm and respectful approach, she treats everyone with genuine care. As she leads our publications, we're confident that her talent and dedication will be reflected in every piece of work.Here’s to the incredible contributions you’ll bring, and a successful tenure ahead Gayathri!🎀
            </div>
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
            <h1 className="role">
              JOINT EVENT
              <br />
              MANAGER
            </h1>
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
            <h1 className="role">
              JOINT CREATIVE
              <br />
              HEAD
            </h1>
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
            <h1 className="role">
              JOINT TECHNICAL
              <br />
              HEAD
            </h1>
            <h2 className="diya">Kartik Bankar</h2>
          </div>
        </div>
        <div className="particles">
          <span style={{ "--j": 11 }}></span>
          <span style={{ "--j": 12 }}></span>
          <span style={{ "--j": 24 }}></span>
          <span style={{ "--j": 10 }}></span>
          <span style={{ "--j": 14 }}></span>
          <span style={{ "--j": 23 }}></span>
          <span style={{ "--j": 18 }}></span>
          <span style={{ "--j": 16 }}></span>
          <span style={{ "--j": 19 }}></span>
          <span style={{ "--j": 20 }}></span>
          <span style={{ "--j": 22 }}></span>
          <span style={{ "--j": 25 }}></span>
          <span style={{ "--j": 18 }}></span>
          <span style={{ "--j": 21 }}></span>
          <span style={{ "--j": 13 }}></span>
          <span style={{ "--j": 15 }}></span>
          <span style={{ "--j": 26 }}></span>
          <span style={{ "--j": 17 }}></span>
          <span style={{ "--j": 13 }}></span>
          <span style={{ "--j": 28 }}></span>
          <span style={{ "--j": 11 }}></span>
          <span style={{ "--j": 12 }}></span>
          <span style={{ "--j": 24 }}></span>
          <span style={{ "--j": 10 }}></span>
          <span style={{ "--j": 14 }}></span>
          <span style={{ "--j": 23 }}></span>
          <span style={{ "--j": 18 }}></span>
          <span style={{ "--j": 16 }}></span>
          <span style={{ "--j": 19 }}></span>
          <span style={{ "--j": 20 }}></span>
          <span style={{ "--j": 22 }}></span>
          <span style={{ "--j": 25 }}></span>
          <span style={{ "--j": 18 }}></span>
          <span style={{ "--j": 21 }}></span>
          <span style={{ "--j": 13 }}></span>
          <span style={{ "--j": 15 }}></span>
          <span style={{ "--j": 26 }}></span>
          <span style={{ "--j": 17 }}></span>
          <span style={{ "--j": 13 }}></span>
          <span style={{ "--j": 28 }}></span>
        </div>
      </div>
    </div>
  );
};

export default Core;
