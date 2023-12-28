import React from "react";
import contact_detail from "../data/contact";
import { Shefa } from "../assets";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center h-screen relative"
      id="contact"
    >
      <h1 className="text-center mt-20 text-4xl font-extrabold font-title">
        CONTACT US
      </h1>

      <div className="h-[60%] flex flex-1 justify-around gap-10 w-[100%] py-2 mt-5 px-10">
        <div className="flex flex-col justify-center">
          <div className="py-2">
            <h1 className="font-extrabold text-2xl">PRAVEEN R</h1>
            <h1 className="font-bold text-xl">President</h1>
            <h1 className="text-xl">8438778446</h1>
          </div>
          <div className="py-2">
            <h1 className="font-extrabold text-2xl">NIMAL VARDHAN</h1>
            <h1 className="font-bold text-xl">Vice-President</h1>
            <h1 className="text-xl"> 9385380146</h1>
          </div>
          <h1 className="text-xl font-semibold mt-2">
            Departemnt of Electronics & Communication Engineering
          </h1>
          <h1 className="text-lg font-semibold">
            PUDUCHERRY TECHNOLOGY UNIVERSITY
          </h1>
          <h1 className="text-md font-medium">Puducherry - 605014, INDIA</h1>
          <div className="flex justify-center">
            <button className="border my-3 text-xl p-1.5 bg-orange-300 rounded-lg w-1/2">
              ioe.hub.ptu@gmail.com
            </button>
          </div>
          <div className="flex justify-center">
            <a>
              <h1 className="text-2xl font-semibold">
                <i className="fa fa-instagram"></i> Follow us
              </h1>
            </a>
          </div>
        </div>
        <div className="w-[40%] flex justify-center flex-col items-center">
          <h1>LOCATION</h1>
          <iframe
            height={400}
            width={400}
            src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Contact;
