import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full z-50 fixed">
      <nav className="flex w-11/12 justify-around bg-slate-300 mx-1 mt-2 py-1 rounded-lg text-sm ">
        <a className="p-1 hover:bg-slate-400 hover:rounded-lg" href="#home">
          Home
        </a>
        <a className="p-1 hover:bg-slate-400 hover:rounded-lg" href="#past">
          Past Events
        </a>
        <a className="p-1 hover:bg-slate-400 hover:rounded-lg" href="#upcoming">
          Upcoming Events
        </a>
        <a className="p-1 hover:bg-slate-400 hover:rounded-lg" href="#bearers">
          Office Bearers
        </a>
        <a className="p-1 hover:bg-slate-400 hover:rounded-lg" href="#contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
