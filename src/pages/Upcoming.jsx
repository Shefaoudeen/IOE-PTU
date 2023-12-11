import React from "react";
import upcoming from "../data/upcoming";

const Upcoming = () => {
  return (
    <div
      className="flex flex-col items-center  bg-blue-100 -z-10"
      id="upcoming"
    >
      <h1 className="pt-[60px] font-bold">UPCOMING EVENTS</h1>
      <div className="flex px-4 justify-center">
        {upcoming.map((element) => {
          return (
            <div className="border-2 w-[400px] flex flex-col items-center m-2 p-1 rounded-3xl drop-shadow-2xl bg-slate-50">
              <div className="flex justify-center h-[75px] items-center ">
                <h1 className="font-bold text-center text-sm">
                  {element.Title}
                </h1>
              </div>
              <img
                src={element.photo}
                className="w-[250px] drop-shadow-2xl h-[300px] object-fill"
              />
              <h1>Date: {element.Date}</h1>
              <a href={element.Link} target="_blank">
                <button className="px-2 py-1 bg-blue-400 rounded-lg mt-4">
                  Register
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
