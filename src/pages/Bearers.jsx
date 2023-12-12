import React from "react";
import final from "../data/bearers";
import preFinal from "../data/preFinal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bearers = () => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinte: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  function Next() {
    return <div className="w-50"></div>;
  }

  return (
    <div
      className="flex flex-col w-full  items-center z-0 h-screen bg-slate-200"
      id="bearers"
    >
      <h1 className="mt-20 font-extrabold text-4xl">OFFICE BEARERS</h1>

      <div className="w-[100%] flex justify-center items-center h-full">
        <Slider {...settings} className="w-[90%] bg-slate-50 rounded-2xl py-10">
          {final.map((element) => {
            return (
              <div className="text-center rounded-xl   w-full border-none flex flex-col justify-center items-center ">
                <div className="flex justify-center">
                  <img src={element.photo} className="w-[300px] rounded-t-xl" />
                </div>
                <div className="rounded-b-xl w-full flex justify-center">
                  <div className="w-[300px]  bg-gray-400 rounded-b-xl hover:bg-gray-500">
                    <h1 className="font-extrabold text-xl">{element.name}</h1>
                    <h1 className="text-lg font-semibold">{element.role}</h1>
                    <h1 className="text-lg font-medium">{element.year}</h1>
                    <div className="flex justify-evenly my-2 text-2xl">
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
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Bearers;
