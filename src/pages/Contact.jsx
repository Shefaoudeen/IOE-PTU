import React from "react";
import Footer from "./Footer";
import { Marker } from "../assets";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center xl:h-screen relative  xl:ml-[75px] w-max-[100vw] "
      id="contact"
    >
      <div className="w-full text-center flex justify-center items-center">
        <h1 className="text-center w-fit mt-20  text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400">
          CONTACT US
        </h1>
      </div>

      <div className="h-[60%] flex flex-1 justify-around gap-10 w-[100%] py-2 mt-5 xl:px-10 max-sm:px-5 max-sm:flex-col-reverse">
        <div className="flex flex-col justify-center">
          <div className="py-2">
            <h1 className="font-extrabold text-2xl max-sm:text-xl">
              PRAVEEN R
            </h1>
            <h1 className="font-bold text-xl inline border-r-2 border-black pr-3 max-sm:text-xl">
              President
            </h1>
            <h1 className="text-xl inline ml-2.5 max-sm:text-lg">8438778446</h1>
          </div>
          <div className="py-2">
            <h1 className="font-extrabold text-2xl max-sm:text-xl">
              NIMAL VARDHAN
            </h1>
            <h1 className="font-bold text-xl inline border-r-2 border-black pr-3 max-sm:text-xl">
              Vice-President
            </h1>
            <h1 className="text-xl inline ml-2.5 max-sm:text-lg">
              {" "}
              9385380146
            </h1>
          </div>
          <h1 className="text-xl font-semibold mt-2 max-sm:text-[17px] max-sm:text-center">
            Departemnt of Electronics & Communication Engineering
          </h1>
          <h1 className="text-lg font-semibold max-sm:text-center">
            PUDUCHERRY TECHNOLOGY UNIVERSITY
          </h1>
          <h1 className="text-md font-medium max-sm:text-center">
            Puducherry - 605014, INDIA
          </h1>
          <div className="flex justify-center">
            <a href="mailto:ioe.hub.ptu@gmail.com">
              <button className="border my-3 text-xl p-1.5 bg-orange-300 hover:font-bold hover:bg-orange-400/90 transition-all delay-100 rounded-lg w-full">
                ioe.hub.ptu@gmail.com
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/ioe_hub_ptu/" target="_blank">
              <h1 className="text-2xl font-semibold">
                <i className="fa fa-instagram"></i> Follow us
              </h1>
            </a>
          </div>
        </div>
        <div className="w-[40%] max-sm:w-full flex justify-center flex-col items-center">
          <h1 className="font-extrabold text-xl xl:my-2.5 flex items-center">
            <span className="inline ">
              <img src={Marker} width={30} className="inline" />
            </span>
            LOCATION
          </h1>
          <iframe
            data-aos="fade-left"
            data-aos-delay="300"
            height={400}
            width={400}
            className="shadow-xl shadow-blue-400/70 max-sm:w-[90%]"
            src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Contact;
