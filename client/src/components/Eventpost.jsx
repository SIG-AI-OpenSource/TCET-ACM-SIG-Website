import React from "react";
import useFetch from "../services/useFetch"; // Adjust the import path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Eventpost = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch("http://localhost:8080/events"); // Adjust the URL if needed

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto bg-blue-800 py-12 ">
      <h1 className="text-white text-center text-7xl font-semibold mb-10 pb-10">
        Events
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {events &&
          events.map((event) => (
            <Link to={`/events/${event._id}#top`} key={event._id}>
              <motion.div
                className="text-white shadow-md rounded-2xl overflow-hidden relative group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={event.image.url}
                  alt={event.image.fileName}
                  className="w-full max-w-[400px] h-[410px] rounded-lg object-cover"
                  loading="lazy"
                />
                {/* overlay section */}
                <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                  <div className="space-y-7 pt-20">
                    <motion.h2
                      className="text-3xl font-bold text-center pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {event.title}
                    </motion.h2>
                    <motion.p
                      className="text-lg text-center "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {event.date}
                    </motion.p>
                    <motion.div
                      className="pl-36 ml-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Eventpost;