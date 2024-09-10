import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";

const Eventdetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:8000/events/${id}`
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Assuming the data structure matches what we discussed earlier
  const { title, image, smallDescription, detailInfo } = data;

  return (
    <div id="top" className="text-white bg-neutral-950 px-4 py-16">
      <div className="flex justify-between bg-white">
        <div className="text-center pl-[140px]">
          <h1 className="text-6xl text-gray-800 font-bold  pt-24">{title}</h1>
          <p className="text-xl font-semibold text-center text-gray-500 mb-8 pt-7 pl-2  ">
            {smallDescription}
          </p>{" "}
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg"
            alt={title}
            className="h-[640px] w-[720px] object-cover"
            loading="lazy"
          />
        </div>

        {/* <div className="w-3/4 mx-auto border-t-2 border-yellow-400 mb-8" /> */}
      </div>
      <div className="pb-60 pt-32 bg-indigo-500">
        <div className="w-full max-w-3xl text-white pl-40">
          {detailInfo.map((info, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-5xl font-bold mb-2">{info.title}</h3>
              <p className="text-xl">{info.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventdetail;
