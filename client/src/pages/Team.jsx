import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Faculty from "../components/Faculty";

// Lazy load Core and Jcore components
const Core = lazy(() => import("../components/Core"));

// Animation Variants
const fadeDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <>
      {/* Hero Image and Text */}
      <div className="relative z-0">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1725605100/WhatsApp_Image_2024-09-05_at_07.50.06_ugokm4.jpg"
          alt="Descriptive Alt Text"
          className="w-screen h-screen object-cover"
          id="meetteam"
        />
        <motion.div
          className="absolute top-[58%] sm:top-[390px] left-[5%] sm:left-[64px] w-[90%] h-[12rem] sm:h-[250px] bg-white/10 backdrop-blur-md rounded-[40px] flex justify-left flex-col items-start pt-8"
          initial="hidden"
          animate="visible"
          variants={fadeDownVariants}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="text-gray-200 text-2xl sm:text-7xl font-inter pl-10 pb-4"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Our Team
          </motion.h1>
          <motion.h1
            className="text-gray-200 text-2xl sm:text-7xl font-inter pl-10"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            The Hard-workers behind the Scene
          </motion.h1>
        </motion.div>
      </div>

      {/* Team Components */}
      <Faculty />

      {/* Lazy load Core and Jcore components */}
      <Suspense fallback={<div>Loading Core Team...</div>}>
        <Core />
      </Suspense>
    </>
  );
};

export default Team;
