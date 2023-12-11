import React from "react";
import contact_detail from "../data/contact";
import { Shefa } from "../assets";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center" id="contact">
      <h1 className="text-center mt-16 text-xl font-bold">CONTACT</h1>
      <div className="flex flex-1 gap-5 mt-5 h-[50px] px-10">
        {contact_detail.map((detail) => {
          return (
            <div
              className="bg-gradient-to-tr from-white to-slate-100 border-2 drop-shadow-lg flex-1 items-center flex w-[400px] 
            transition hover:scale-90 delay-[50] cursor-pointer
            h-[125px] rounded-br-3xl rounded-tl-3xl"
            >
              <div className="w-[30%] items-center bg-gray-200 flex justify-center h-[100%] rounded-tl-3xl">
                <img src={detail.icon} width={50} />
              </div>
              <div className="pl-3 flex justify-start flex-col w-[70%]">
                <h1 className="font-bold text-lg">{detail.title}</h1>
                <h1 className="font-medium text-sm">{detail.Description}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[60%] flex flex-1 gap-10 w-[100%] py-2 mt-5 px-10">
        <div className="w-[40%] flex justify-center ">
          <iframe
            height={400}
            width={400}
            src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <div className="w-[60%]">
          <h1>Any Queries ?</h1>
          <input type="text" placeholder="Enter your Comments" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
