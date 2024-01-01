import React from "react";
import Marquee from "react-fast-marquee";

const Updates = () => {
  return (
    <div className="fixed z-[200] bg-sky-50 ">
      <div className="relative">
        <span className=" absolute inline w-fit z-[300] bg-sky-500 p-1 text-white font-bold">
          Recent Updates:{" "}
        </span>
      </div>
      <div className="py-1">
        <Marquee speed={50}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo
          recusandae explicabo et vel, alias provident omnis expedita id,
          aperiam in nihil maiores ipsum culpa, eum eos sequi ipsa porro!
        </Marquee>
      </div>
    </div>
  );
};

export default Updates;
