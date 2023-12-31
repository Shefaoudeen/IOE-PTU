import React from "react";
import { Logo, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../assets";

const highlight = {
  fontWeight: "bold",
  textDecoration: "underline",
};

const Navbar = () => {
  return (
    <div className="flex justify-center h-screen z-50 fixed top-0 bottom-0 left-0 bg-slate-50 w-[75px] text-center custom max-sm:hidden">
      <nav className="flex flex-col w-full font-bold justify-evenly bg-transparent  rounded-lg text-lg h-scree items-center">
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#home"
          >
            <img src={Icon1} className="w-[30px]  " />
          </a>
        </div>
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#past"
          >
            <img src={Icon2} className="w-[30px]  " />
          </a>
        </div>
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#upcoming"
          >
            <img src={Icon3} className="w-[30px]  " />
          </a>
        </div>
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#convenor"
          >
            <img src={Icon4} className="w-[30px]  " />
          </a>
        </div>
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#bearers"
          >
            <img src={Icon5} className="w-[30px]  " />
          </a>
        </div>
        <div className="hover:bg-slate-300 w-full flex justify-center items-center h-full">
          <a
            className="p-1  hover:rounded-lg hover:font-semibold hover:underline "
            href="#contact"
          >
            <img src={Icon6} className="w-[30px]  " />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
