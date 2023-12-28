import React from "react";
import { DrGunasundari } from "../assets";

const Convenor = () => {
  return (
    <div className="h-screen flex flex-col items-center" id="convenor">
      <h1 className="text-3xl font-bold mt-20 font-title ">CONVENOR</h1>
      <div className="flex h-full justify-around w-[90%] items-center">
        <div>
          <img
            src={DrGunasundari}
            className="rounded-2xl shadow-2xl"
            data-aos="flip-left"
          />
        </div>
        <div>
          <h1 className="font-extrabold text-3xl">Dr. R. Gunasundari</h1>
          <h1 className="font-semibold my-1 text-xl">
            B.Tech.,M.Tech., Ph.D.,MIEEE.,MISTE.
          </h1>
          <h1 className="pt-4 text-xl font-bold">Specialization :</h1>
          <ul className="pl-5 pt-2 text-lg list-disc">
            <li>Wireless Communication & Networks</li>
            <li>Adhoc & Sensor Networks</li>
            <li>Image Processing</li>
          </ul>
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
