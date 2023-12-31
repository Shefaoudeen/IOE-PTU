import React from "react";
import upcoming from "../data/upcoming";

const Upcoming = () => {
  return (
    <div
      className="flex flex-col items-center -z-10 h-screen  ml-[75px] bg-slate-100"
      id="upcoming"
    >
      <div className="w-fit">
        <h1
          data-aos-delay="300"
          data-aos="zoom-out-up"
          className="py-[30px] font-extrabold text-4xl w-fit text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400"
        >
          UPCOMING EVENTS
        </h1>
      </div>
      <div className="flex px-4 justify-center gap-[100px]">
        {upcoming.map((element) => {
          return (
            <div className="border-2 w-[500px] flex flex-col items-center m-2 p-1 rounded-3xl shadow-black shadow-2xl bg-slate-50">
              <div className="flex justify-center h-[55px] items-center ">
                <h1 className="font-bold text-xl text-center text-md">
                  {element.Title}
                </h1>
              </div>
              <img
                data-aos-delay="300"
                data-aos="flip-left"
                src={element.photo}
                className="w-[250px] shadow-2xl shadow-black/40 h-[400px] object-fill rounded-xl"
              />
              <h1 className="text-lg mt-2 font-medium">Date: {element.Date}</h1>
              <a href={element.Link} target="_blank">
                <button className="px-4 py-2 bg-blue-400 rounded-lg mt-4 text-white font-bold mb-2">
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
