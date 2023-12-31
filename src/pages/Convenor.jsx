import React from "react";
import { DrGunasundari, Head } from "../assets";

const Convenor = () => {
  return (
    <div
      className="h-screen flex flex-col items-center  ml-[75px]"
      id="convenor"
    >
      <h1
        data-aos-delay="300"
        data-aos="zoom-out-up"
        className="text-4xl font-extrabold pt-[100px] text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400 "
      >
        CONVENOR
      </h1>
      <div className="flex h-full justify-around w-[90%] items-center max-sm:flex-col">
        <div>
          <img
            src={DrGunasundari}
            className="rounded-2xl shadow-2xl max-sm:w-[300px] shadow-black"
            data-aos="flip-left"
            data-aos-delay="500"
          />
        </div>
        <div className="items-start  w-1/2">
          <div className="flex items-center">
            <div className="z-10">
              <div className="w-fit">
                <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400">
                  Dr. R. Gunasundari
                </h1>
              </div>
              <h1 className="font-semibold my-1 text-xl text-gray-500">
                B.Tech.,M.Tech., Ph.D.,MIEEE.,MISTE.
              </h1>
              <div>
                <h1 className="pt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400">
                  Specialization :
                </h1>
              </div>
              <ul className="pl-5 pt-2 text-lg list-disc font-medium">
                <li className="ml-10">Wireless Communication & Networks</li>
                <li className="ml-10">Adhoc & Sensor Networks</li>
                <li className="ml-10">Image Processing</li>
              </ul>
            </div>
            <div>
              <img
                src={Head}
                className="w-[300px] -ml-[50px] z-0"
                data-aos-delay="500"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.ptuniv.edu.in/ece/faculty?id=61"
              target="_blank"
            >
              <button className="border border-none py-2 px-2 text-lg font-bold bg-orange-400 rounded-lg ">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convenor;
