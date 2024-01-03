import React from "react";
import Marquee from "react-fast-marquee";

const Updates = () => {
  return (
    <div className="fixed z-[200] bg-sky-50 w-full">
      <div className="relative">
        <span className=" absolute inline w-fit z-[300] bg-sky-500 p-1 text-white font-bold">
          Recent Updates:{" "}
        </span>
      </div>
      <div className="py-1">
        <Marquee speed={50}>
          IoE hub has something phenomenal in store for us on January 9th, 2024
          – not one, but two incredible competitions that promise to be an
          absolute game-changer!
        </Marquee>
      </div>
    </div>
  );
};

export default Updates;
