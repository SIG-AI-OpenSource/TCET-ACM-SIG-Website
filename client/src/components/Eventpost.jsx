import React from "react";
import useFetch from "../services/useFetch"; // Adjust the import path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Eventpost = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch("https://tcet-acm-sig-website-h6er.vercel.app/events"); // Adjust the URL if needed

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message}
      </div>
    );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
// hi hello
  return (
    <div className="container mx-auto bg-blue-800 py-8 sm:py-12 px-4">
      <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 sm:mb-10 pb-6 sm:pb-10">
        Events
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {events &&
          events.map((event) => (
            <Link
              to={`/events/${event._id}#top`}
              key={event._id}
              className="flex justify-center"
            >
              <motion.div
                className="text-white rounded-2xl overflow-hidden relative group shadow-2xl w-full max-w-[400px]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={event.image.url}
                  alt={event.image.fileName}
                  className="w-full h-[300px] sm:h-[350px] md:h-[410px] rounded-lg object-cover"
                  loading="lazy"
                />
                {/* overlay section */}
                <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 p-4 w-full h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-center items-center">
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {event.title}
                  </motion.h2>
                  <motion.p
                    className="text-base sm:text-lg text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {event.date}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-300">
                      View
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Eventpost;
