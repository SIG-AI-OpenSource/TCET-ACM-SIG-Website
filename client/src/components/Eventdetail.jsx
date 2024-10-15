import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";


const Eventdetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `https://tcet-acm-sig-website-h6er.vercel.app/events/${id}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error)
    return (
      <p className="text-center p-4 text-red-500">Error: {error.message}</p>
    );

  const { title, largeImage, smallDescription, detailInfo } = data;

  return (

    <div id="top" className="text-white bg-[#015B97] pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row bg-white">
        <div className="text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl text-gray-800 font-bold pt-8 md:pt-24">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-500 mt-4 md:mt-8 text-justify px-4 md:px-12">

            {smallDescription}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={largeImage.url}
            alt={title}
            className="w-full h-64 md:h-[640px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="py-12 md:py-20 bg-[#015B97]">
        <div className="w-full max-w-3xl mx-auto text-white px-4">
          {detailInfo.map((info, index) => (
            <div key={index} className="mb-8 md:mb-10 text-center space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold pb-2 md:pb-4">
                {info.title}
              </h3>
              <p className="text-lg md:text-2xl pt-2 text-justify">
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
