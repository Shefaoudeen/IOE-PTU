import React from "react";
import final from "../data/bearers";
import preFinal from "../data/preFinal";

const Bearers = () => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center z-0"
      id="bearers"
    >
      <h1 className="mt-16 font-bold text-3xl">OFFICE BEARERS</h1>
      <div className="flex flex-row justify-around w-3/4 mb-4">
        {final.map((element) => {
          return (
            <div className="border-none text-center rounded-xl h-[300px] drop-shadow-2xl">
              <img src={element.photo} className="w-[200px] rounded-t-xl" />
              <div className="p-1 bg-gray-400 rounded-b-xl">
                <h1 className="font-bold text-md">{element.name}</h1>
                <h1 className="text-xs font-semibold">{element.role}</h1>
                <h1 className="text-xs font-medium">{element.year}</h1>
                <div className="flex justify-evenly my-2">
                  <a href={element.linkedin}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href={element.email}>
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a href={element.phoneNo}>
                    <i className="fa fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-around w-3/4">
        {preFinal.map((element) => {
          return (
            <div className="border-none text-center rounded-xl h-[300px] drop-shadow-2xl">
              <img src={element.photo} className="w-[200px] rounded-t-xl" />
              <div className="p-1 bg-gray-400 rounded-b-xl">
                <h1 className="font-bold text-md">{element.name}</h1>
                <h1 className="text-xs font-semibold">{element.role}</h1>
                <h1 className="text-xs font-medium">{element.year}</h1>
                <div className="flex justify-evenly my-2">
                  <a href={element.linkedin}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href={element.email}>
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a href={element.phoneNo}>
                    <i className="fa fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bearers;
