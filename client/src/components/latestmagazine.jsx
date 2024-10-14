import React, { useRef} from "react";
import "./home.css";
import { useInView } from "react-intersection-observer";
import useFetch from "../services/useFetch.js"; // Adjust the import path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Pubs = () => {
  const {
    data: magazines,
    loading,
    error,
  } = useFetch("http://localhost:8080/latestpublication"); // Adjust the URL if needed

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // const { title, image, smallDescription, views, bookLink } = data;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  // const { ref: headerRef, inView: headerInView } = useInView({
  //   triggerOnce: false,
  //   threshold: 0.2,
  // });

  const viewsUpdater =(magazineid)=>{
    // console.log("Viewsupdated");
    // console.log(magazineid)
    let id = {id:magazineid,}
    axios.post(`http://localhost:8080/magazine`,id).then((response)=>{
      console.log(response.status, response.data.token);
    })
  };
  // let view = 0;
  // const  [views,setViews] = useState(view);

  return (
    // <div className="publications" id="publications">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
      <div className="magazineblock group">       
      {magazines &&
          magazines.map((magazine) => (
            <div className="mag_1 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100" key={magazine._id}>
            
            <a href={magazine.bookLink} key={magazine._id}
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
            onClick={()=>{
              console.log(magazine._id);
              viewsUpdater(magazine);
              // setViews(view+1);
            }}
            >
              
              <div className="pic_div">
              <img
                  src={magazine.image.url}
                  alt={magazine.image.fileName}
                  className="imageborder"
                  loading="lazy"
                />
              </div>
              <div className="magazinetitle">{magazine.title}</div>
              <p className="magazineparagraph">
                {magazine.smallDescription}
              </p>
              <div className="views"><div>{magazine.views}</div></div>
            </a>
            {/* </motion.div> */}
            </div>
          ))}
    </div>
       </motion.div>
    // </div>


    // <div className="publications" id="publications" ref={headerRef}>
    //   <div className="magazineblock group">
    //     <div className="mag_1 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
    //       <a
    //         href="https://online.pubhtml5.com/hiwar/abef/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="center-magazine-content"
    //       >
    //         <div className="pic_one"></div>
    //         <div className="magazinetitle">Tejas Vol 1</div>
    //         <p className="magazinepara">
    //           We start by gaining a deep <br />
    //           understanding of your <br /> business goals.
    //         </p>
    //       </a>
    //     </div>
    //     <div className="mag_2 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
    //       <a
    //         href="https://pubhtml5.com/hiwar/uqpn/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="center-magazine-content"
    //       >
    //         <div className="pic_two"></div>
    //         <div className="magazinetitle">Tejas Vol 2</div>
    //         <p className="magazinepara">
    //           Next, our team of experts <br /> develops tailored solutions.
    //         </p>
    //       </a>
    //     </div>
    //     <div className="mag_3 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
    //       <a
    //         href="https://pubhtml5.com/hiwar/vfrp/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="center-magazine-content"
    //       >
    //         <div className="pic_three"></div>
    //         <div className="magazinetitle">Tejas Vol 3.1</div>
    //         <p className="magazinepara">
    //           We leverage cutting-edge <br /> technology to implement <br />{" "}
    //           seamlessly.
    //         </p>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="text-center">
    //     <h1 className="text-6xl font-semibold text-white">
    //       MORE COMING SOON....
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Pubs;
