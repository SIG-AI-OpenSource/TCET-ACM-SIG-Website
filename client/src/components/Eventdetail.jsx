import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";

const Eventdetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:8080/events/${id}`
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
    <div
      id="top"
      className="text-white bg-[#015B97] pt-6 sm:pt-12 md:pt-14 lg:pt-16"
    >
      <div className="flex flex-col md:flex-row bg-white">
        <div className="text-center p-4 md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold pt-6 sm:pt-10 md:pt-16 lg:pt-24">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-justify px-2 sm:px-4 md:px-8 lg:px-12">
            {smallDescription}
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={largeImage.url}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-[640px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#015B97]">
        <div className="w-full max-w-3xl mx-auto text-white px-4">
          {detailInfo.map((info, index) => (
            <div
              key={index}
              className="mb-8 sm:mb-10 md:mb-12 text-center space-y-3"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-3 sm:pb-4 md:pb-5">
                {info.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl pt-2 text-justify">
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
