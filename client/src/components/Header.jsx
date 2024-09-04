import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-black backdrop-blur-md bg-opacity-5 text-white p-4 flex justify-between items-center z-50"
      style={{ backdropFilter: "blur(8px) brightness(55%)" }}
    >
      <div className="text-2xl font-medium pl-10">ACM SIGAI</div>
      <nav className="space-x-10 font-semibold flex-grow flex justify-center text-base">
        <Link to="/">
          {" "}
          <a className="hover:underline">Home</a>{" "}
        </Link>
        <Link to="/events">
          <a className="hover:underline">Events</a>
        </Link>
        <Link to="/team">
          <a className="hover:underline">Meet the Team</a>
        </Link>
        <a className="hover:underline">Publications</a>
        <a className="hover:underline">Contact us</a>
      </nav>
    </header>
  );
};

export default Header;
