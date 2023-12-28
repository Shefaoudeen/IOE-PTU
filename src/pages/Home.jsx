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
  height: "300vh",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Home = () => {
  return (
    <div
      className="flex justify-center items-center flex-col max-sm:bg-contain"
      id="home"
    >
      <div className="text-center w-full h-screen flex items-center justify-center relative text-black bg-slate-200">
        <div className="w-3/5 px-9 ">
          <h1 className=" text-5xl font-extrabold text-gray-400">
            INTERNET OF EVERYTHINGS
          </h1>
          <h1 className="text-xl tracking-[5px] text-gray-500">
            Puducherry Technology University
          </h1>
          <p className="text-xl mt-10 font-semibold text-justify leading-8">
            The Internet of Everything (IoE) is a concept that extends the idea
            of the Internet of Things (IoT) by emphasizing the
            interconnectedness of not just devices, but also people, processes,
            and data. IoE represents a comprehensive and dynamic connection of
            objects, data, and processes to enhance and automate various aspects
            of daily life and business operations.
          </p>
        </div>
        <div className="w-2/5 flex justify-center drop-shadow-2xl">
          <img
            src={Image1}
            width={500}
            data-aos="fade-left"
            data-aos-delay="100"
            className="drop-shadow-xl"
          />
        </div>
      </div>
      <div className="text-center w-full h-screen max-sm:h-full text-black flex flex-col  bg-slate-200">
        <div className="flex justify-center items-center z-10  h-full">
          <div className="flex px-4 gap-10 h-3/5 max-sm:flex-col max-sm:mx-4">
            <div className="border-none rounded-3xl bg-white drop-shadow-2xl">
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
            <div className="border-none rounded-3xl bg-white drop-shadow-2xl">
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
            <div className="border-none rounded-3xl bg-white drop-shadow-2xl">
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
