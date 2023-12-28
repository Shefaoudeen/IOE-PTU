import React from "react";
import { Logo } from "../assets";

const highlight = {
  fontWeight: "bold",
  textDecoration: "underline",
};

const Navbar = () => {
  return (
    <div className="flex justify-center w-full z-50 fixed">
      <nav className="flex w-full justify-around bg-slate-300 px-1 py-1 rounded-lg text-lg h-[75px] items-center">
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg "
          href="#home"
        >
          <img src={Logo} className="w-[85px] pr-5 border-r-2 border-r-black" />
        </a>
        <a
          className="p-1  hover:rounded-lg hover:font-semibold hover:underline"
          href="#home"
        >
          Home
        </a>
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg"
          href="#past"
        >
          Past Events
        </a>
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg"
          href="#upcoming"
        >
          Upcoming Events
        </a>
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg"
          href="#convenor"
        >
          Convenor
        </a>
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg"
          href="#bearers"
        >
          Office Bearers
        </a>
        <a
          className="p-1 hover:font-semibold hover:underline hover:rounded-lg"
          href="#contact"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
