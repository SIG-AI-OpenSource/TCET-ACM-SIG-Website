import React, { useRef } from "react";
import "./home.css";
import { useInView } from "react-intersection-observer";

const Pubs = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className="publications" id="publications" ref={headerRef}>
      <div className="magazineblock group">
        <div className="mag_1 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://online.pubhtml5.com/hiwar/abef/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_one"></div>
            <div className="magazinetitle">Tejas Vol 1</div>
            <p className="magazinepara">
              We start by gaining a deep <br />
              understanding of your <br /> business goals.
            </p>
          </a>
        </div>
        <div className="mag_2 cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://pubhtml5.com/hiwar/uqpn/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_two"></div>
            <div className="magazinetitle">Tejas Vol 2</div>
            <p className="magazinepara">
              Next, our team of experts <br /> develops tailored solutions.
            </p>
          </a>
        </div>
        <div className="mag_3 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <a
            href="https://pubhtml5.com/hiwar/vfrp/"
            target="_blank"
            rel="noopener noreferrer"
            className="center-magazine-content"
          >
            <div className="pic_three"></div>
            <div className="magazinetitle">Tejas Vol 3.1</div>
            <p className="magazinepara">
              We leverage cutting-edge <br /> technology to implement <br />{" "}
              seamlessly.
            </p>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-white">
          MORE COMING SOON....
        </h1>
      </div>
    </div>
  );
};

export default Pubs;
