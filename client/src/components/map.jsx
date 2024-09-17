import React from "react";
import "./home.css";

const map = ()=>{
  return(
    <div  
    className="mapcontainer"
  >
    <div 
    className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.807415056768!2d72.87278298331742!3d19.20637003525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1725606742168!5m2!1sen!2sin"
        className="w-full sm:h-[350px] h-[450px] border-0"
        // allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  );
};

export default map;