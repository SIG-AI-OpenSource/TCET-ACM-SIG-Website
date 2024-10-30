import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Faculty = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef1, inView: textInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef2, inView: imageInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef2, inView: textInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-black" style={{ backgroundColor: "#015B97" }}>
      <div className="pt-10">
        <motion.h1
          className="text-700 text-lg pl-10 sm:pl-60 pb-3 font-inter"
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#A076F9" }}
        >
          PEOPLE
        </motion.h1>
        <motion.h1
          className=" pb-6 sm:pb-14 font-inter text-3xl sm:text-5xl text-white pl-10 sm:pl-60"
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          transition={{ duration: 0.7 }}
        >
          Faculty In-charges
        </motion.h1>
      </div>

      {/* Faculty card 1 */}
      <div className="text-white max-w-5xl mx-auto rounded-lg overflow-hidden py-5 pl-10 sm:pl-[0%]">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/3 h-64 md:h-auto relative pr-10"
            ref={imageRef1}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: imageInView1 ? 0 : -100,
              opacity: imageInView1 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/df9us90ur/image/upload/v1729422372/ShiwaniGupta.jpg"
              alt="Profile picture"
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>
          {/* https://res.cloudinary.com/ds8oawwu2/image/upload/v1726138307/WhatsApp_Image_2024-09-06_at_19.32.08_guwfma.jpg
           
           https://shorturl.at/05KIo
           */}
          <motion.div
            className="w-full md:w-2/3 pl-0 p-6 sm:p-6 md:p-8 flex flex-col justify-between"
            ref={textRef1}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: textInView1 ? 0 : 100, opacity: textInView1 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1">
                Dr. Shiwani Gupta
              </h2>
              <p className="text-sm text-gray-400 mb-4">Head of Department</p>
              <p className="text-xl mb-6">
              Dr. Shiwani Gupta, the HOD of the Department of Artificial Intelligence and Machine Learning (AIML), is a dedicated educator with over 20 years of experience in academia. She holds a Ph.D. in Technology from Mumbai University, where her doctorate research includes significant contributions in Machine Learning and AI applications. Her work has been widely published, including studies on online signature recognition, healthcare optimization using machine learning, and advanced feature selection algorithms for heart disease datasets in prestigious journals and IEEE conferences. Dr. Gupta's commitment to accessible learning and research excellence has made her a driving force in fostering institutional growth and innovation through roles like Infosys Campus Connect Trainer and R&D Coordinator.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href=""
                target="blank"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53/?originalSubdomain=in"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Faculty card 2 */}
      <div className="text-white max-w-5xl mx-auto rounded-lg overflow-hidden  py-5 pb-8 pl-10 sm:pl-[0%]">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/3 h-64 md:h-auto relative pr-10 "
            ref={imageRef2}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: imageInView2 ? 0 : -100,
              opacity: imageInView2 ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="https://res.cloudinary.com/df9us90ur/image/upload/v1729422373/PranjaliSankhe.jpg"
              alt="Profile picture"
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-2/3 pl-0 p-6 sm:p-6 md:p-8 flex flex-col justify-between"
            ref={textRef2}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: textInView2 ? 0 : 100, opacity: textInView2 ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1">
                Pranjali Sankhe
              </h2>
              <p className="text-sm text-gray-400 mb-4">Faculty Incharge</p>
              <p className="text-xl mb-6">
              Mrs. Pranjali Sankhe, the faculty in charge of the TCET ACM SIGAI Committee, specializes in Machine Learning, Computer Networking, and Security. With experience as a trainer at the Central Bank of India for Computer Networking and Cybersecurity, she has also completed certifications from Infosys Springboard and Microsoft. Her research contributions include publications on chronic disease prediction, image cryptography, and motion capture visualization in prominent conferences such as IEEE and IC-ICN. Passionate about advancing intelligent computing, Mrs. Sankhe actively engages in academic research and professional development in emerging technologies.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjali-sankhe-5421aa160/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
