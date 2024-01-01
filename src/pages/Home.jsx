import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Shefa } from "../assets";
import {
  Globe,
  Globe2,
  Image1,
  Wallpaper2,
  Image3,
  VR,
  IOT1,
  IOT2,
  Photo1,
  Logo,
  IOT3,
} from "../assets";

const styling = {
  backgroundImage: `url(${Wallpaper2})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  width: "100vw",
};

const styling1 = {
  backgroundImage: `url(${Wallpaper2})`,
  backgroundRepeat: "no-repeat",
  height: "50vh",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Home = () => {
  return (
    <div
      className="flex justify-center items-center flex-col max-sm:bg-contain xl:ml-[75px] "
      id="home"
    >
      <div className="text-center relative w-full h-screen flex flex-col  text-black max-sm:h-[150dvh]">
        <div className=" top-0 left-0 right-0 w-full h-[50dvh] max-sm:h-[25%] z-10 ">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full top-0 bottom-0 bg-gradient-to-tr max-sm:bg-white from-black via-gray-900 to-gray-300"></div>
            <img
              src={Wallpaper2}
              className="w-full h-[50dvh] object-cover  shadow-inner-[100px] absolute opacity-70 max-sm:h-[100%]"
            />
            <div className="absolute bottom-10 max-sm:bottom-20 z-[100] left-10">
              <div
                className="bg-gradient-to-r bg-clip-text from-sky-600 to-blue-200"
                data-aos-delay="300"
                data-aos="zoom-out"
              >
                <h1 className=" text-7xl font-extrabold bg-clip-text text-transparent z-[100] shadow-xl max-sm:text-5xl">
                  INTERNET OF EVERYTHINGS
                </h1>
              </div>
              <h1
                className="text-xl tracking-[5px] font-bold text-white max-sm:text-sm"
                data-aos-delay="300"
                data-aos="zoom-out"
              >
                Puducherry Technology University
              </h1>
            </div>
            <div className="absolute right-10 z-50 max-sm:hidden">
              <img
                src={Image1}
                data-aos-easing="linear"
                className="drop-shadow-2xl "
                data-aos-delay="500"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
        <div className="z-0 flex justify-center items-center w-full h-[50dvh] max-sm:flex-col-reverse max-sm:h-[50%] ">
          <div className="w-2/5 flex justify-center items-center max-sm:w-full max-sm:h-[50%]">
            <img
              src={Photo1}
              className="w-[500px] rounded-3xl shadow-xl max-sm:w-[75%]"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos="fade-right"
            />
          </div>
          <div className="w-3/5 max-sm:w-5/6 text-start ">
            <div className=" w-fit">
              <h1
                data-aos="fade-left"
                data-aos-delay="300"
                className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400 max-sm:text-2xl"
              >
                What is IOE?
              </h1>
            </div>
            <p
              className="text-lg  xl:py-4 max-sm:py-2 xl:pr-10  max-sm:text-sm max-sm:text-justify"
              data-aos-delay="300"
              data-aos="fade-left"
            >
              The Internet of Everything (IoE) is a concept that extends the
              idea of the Internet of Things (IoT) by emphasizing the
              interconnectedness of not just devices, but also people,
              processes, and data. IoE represents a comprehensive and dynamic
              connection of objects, data, and processes to enhance and automate
              various aspects of daily life and business operations.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center w-full h-screen  max-sm:h-full text-black flex flex-col  ">
        <div className="flex flex-col xl:justify-center items-center z-10  h-full">
          <div className="w-fit pb-10">
            <h1
              data-aos-delay="300"
              data-aos="zoom-out"
              className="font-extrabold text-5xl max-sm:2xl  text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-200"
            >
              What is IOE Hub ?
            </h1>
          </div>
          <div className="sm:grid sm:grid-cols-3  px-4 gap-10 h-3/5 max-sm:flex max-sm:flex-col max-sm:mx-4">
            <div
              className="border-none rounded-3xl bg-white  shadow-black/50 shadow-xl"
              data-aos-delay="300"
              data-aos="flip-left"
            >
              <div className="overflow-hidden rounded-t-3xl ">
                <img
                  src={IOT1}
                  className="w-full h-[250px] object-cover rounded-t-3xl hover:scale-[1.2] ease-linear transition-all"
                />
              </div>
              <div className="flex justify-center items-center text-justify h-2/5 px-6 my-5 text-md font-medium">
                <div>
                  <p className="max-sm:text-sm">
                    An IOE Hub serves as a collaborative platform for
                    individuals interested in the Internet of Everything (IoE).
                    Functioning as a focal point for networking and knowledge
                    exchange, the IOE Hub brings together enthusiasts, students,
                    faculty members, and professionals keen on exploring the
                    vast landscape of IoE.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-delay="300"
              data-aos="flip-left"
              className="border-none rounded-3xl bg-white drop-shadow-2xl shadow-black/50 shadow-xl"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={IOT2}
                  className="w-full h-[250px] object-cover rounded-t-3xl hover:scale-[1.2] ease-linear transition-all"
                />
              </div>
              <div className="flex justify-center items-center text-justify h-2/5 px-6 my-5 text-md font-medium">
                <div>
                  <p className="max-sm:text-sm">
                    Within the IOE Hub, members can connect with like-minded
                    peers, engage in discussions about IoE technologies, and
                    enhance their understanding of the interconnected realms of
                    people, processes, data, and devices. Through a variety of
                    activities and events, the IOE Hub facilitates the sharing
                    of ideas, insights, and
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-delay="300"
              data-aos="flip-left"
              className="border-none rounded-3xl bg-white drop-shadow-2xl shadow-black/50 shadow-xl"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={IOT3}
                  className="w-full h-[250px] object-fill rounded-t-3xl hover:scale-[1.2] ease-linear transition-all"
                />
              </div>
              <div className="flex justify-center items-center text-justify h-2/5 px-6 my-5 text-md font-medium">
                <div>
                  <p className="max-sm:text-sm">
                    Acting as a dynamic entity within the academic environment,
                    an active IOE Hub contributes significantly to the growth
                    and development of its members. It offers programs and
                    initiatives focused on IoE-related fields, fostering an
                    environment conducive to learning and skill development in
                    networking, data integration, and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
