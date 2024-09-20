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
    <div className="bg-black" style={{backgroundColor:"#015B97"}}>
      <div className="pt-10">
        <motion.h1
          className="text-700 text-lg pl-10 sm:pl-60 pb-3 font-inter"
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          style={{color:"#A076F9"}}
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
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726138307/WhatsApp_Image_2024-09-06_at_19.32.08_guwfma.jpg"
              alt="Profile picture"
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut massa in mauris suscipit ultrices quis eu tellus.
                Pellentesque metus magna, ultricies non hendrerit at, rutrum
                quis ante. In porttitor ex ac ligula convallis, at vulputate
                enim consequat.
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
                target="blank"
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
              src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1726141654/WhatsApp_Image_2024-09-06_at_19.32.08_1_jqct9d.jpg"
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
                Shilpa Mathur
              </h2>
              <p className="text-sm text-gray-400 mb-4">Faculty Incharge</p>
              <p className="text-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut massa in mauris suscipit ultrices quis eu tellus.
                Pellentesque metus magna, ultricies non hendrerit at, rutrum
                quis ante.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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
