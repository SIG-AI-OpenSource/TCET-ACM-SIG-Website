import React from "react";
import { motion } from "framer-motion";
import Eventpost from "../components/Eventpost";

const fadeDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const EventsComponent = () => {
  return (
    <div className="relative" id="eventtop">
      {/* Hero Image and Text */}
      <div className="relative z-0">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1725736694/WhatsApp_Image_2024-09-05_at_07.49.56_kbscmo.jpg"
          alt="Descriptive Alt Text"
          className="w-full h-screen object-cover"
        />
        <motion.div
          className="absolute top-[390px] left-[64px] w-[1390px] h-[250px] bg-black/5 backdrop-blur-md rounded-[40px] flex justify-left flex-col items-start pt-10"
          initial="hidden"
          animate="visible"
          variants={fadeDownVariants}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="text-gray-200 text-7xl font-inter pl-10 pb-4"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Hands-on workshops,
          </motion.h1>
          <motion.h1
            className="text-gray-200 text-7xl font-inter pl-10"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            competitions, and seminars.
          </motion.h1>
        </motion.div>
      </div>

      <div className="relative z-10 bg-black min-h-screen">
        <Eventpost />
      </div>
    </div>
  );
};

export default EventsComponent;
