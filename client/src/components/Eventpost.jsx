import React from "react";
import useFetch from "../services/useFetch"; // Adjust the import path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Eventpost = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/events"); // Adjust the URL if needed

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="bg-black pt-14">
        <h1 className="text-white text-center text-6xl font-semibold">
          Events
        </h1>
      </div>
      <div className="py-20 pl-20 space-y-8 bg-black">
        {data &&
          data.map((event) => (
            <Link to={`/events/${event._id}#top`} key={event._id}>
              <motion.div
                className="flex items-center bg-black rounded-lg p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={itemVariants}
              >
                {/* Event Image */}
                <div className="w-2/5">
                  <img
                    src={event.image.url}
                    alt={event.image.fileName}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                {/* Event Details */}
                <div className="w-3/5 pl-20 text-white font-thin">
                  <motion.h2
                    className="text-[3rem] font-bold mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={titleVariants}
                  >
                    {event.title}
                  </motion.h2>
                  <motion.p
                    className="font-bold text-gray-400 text-lg pt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={titleVariants}
                  >
                    {event.date}
                  </motion.p>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Eventpost;
