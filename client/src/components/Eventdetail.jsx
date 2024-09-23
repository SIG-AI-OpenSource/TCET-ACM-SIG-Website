import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";


const Eventdetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:8080/events/${id}`
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Assuming the data structure matches what we discussed earlier
  const { title, largeImage, smallDescription, detailInfo } = data;

  return (
    <div id="top" className="text-white bg-[#015B97] px-4 py-16">
      <div className="flex justify-between bg-white">
        <div className="text-center">
          <h1 className="text-5xl text-gray-800 font-bold  pt-24">{title}</h1>
          <p className="text-xl font-semibold  text-gray-500 mb-8 pt-20 text-justify  px-40 ">
            {smallDescription}
          </p>{" "}
        </div>
        <div>
          <img
            src={largeImage.url}
            alt={title}
            className="h-[640px] w-[3000px] object-cover"
            loading="lazy"
          />
        </div>

        {/* <div className="w-3/4 mx-auto border-t-2 border-yellow-400 mb-8" /> */}
      </div>
      <div className="pb-60 pt-20 bg-[#015B97]">
        <div className="w-full max-w-3xl mx-auto text-white">
          {detailInfo.map((info, index) => (
            <div key={index} className="mb-10 text-center space-y-2">
              <h3 className="text-5xl font-bold pb-4">{info.title}</h3>
              <p className="text-2xl pt-2 text-justify pb-4 ">
                {info.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventdetail;
