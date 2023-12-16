import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Shefa } from "../assets";
import { Globe, Globe2, Image1, Wallpaper2, Image3 } from "../assets";

const styling = {
  backgroundImage: `url(${Globe})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "fill",
};

const styling1 = {
  backgroundImage: `url(${Wallpaper2})`,
  backgroundRepeat: "no-repeat",
  height: "300vh",
  backgroundSize: "contain",
};

const Home = () => {
  return (
    <div
      className="flex justify-center items-center flex-col"
      id="home"
      style={styling1}
    >
      <div className="text-center w-full h-screen flex items-center justify-center relative text-white">
        <div className="w-3/5 px-9">
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
          <img src={Image1} width={500} className="drop-shadow-xl" />
        </div>
      </div>
      <div className="text-center w-full h-screen text-black flex ">
        <div className="w-2/5 flex justify-center items-center">
          <img src={Image3} width={400} />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-center">
          <h1 className=" text-5xl font-extrabold text-gray-400">IOE HUB</h1>
          <ul className="text-lg mt-10 font-semibold text-justify leading-8 list-disc">
            <li>
              An IOE Hub serves as a collaborative platform for individuals
              interested in the Internet of Everything (IoE). Functioning as a
              focal point for networking and knowledge exchange, the IOE Hub
              brings together enthusiasts, students, faculty members, and
              professionals keen on exploring the vast landscape of IoE.
            </li>
            <li>
              Within the IOE Hub, members can connect with like-minded peers,
              engage in discussions about IoE technologies, and enhance their
              understanding of the interconnected realms of people, processes,
              data, and devices. Through a variety of activities and events, the
              IOE Hub facilitates the sharing of ideas, insights, and
              experiences related to IoE.
            </li>
            <li>
              Acting as a dynamic entity within the academic environment, an
              active IOE Hub contributes significantly to the growth and
              development of its members. It offers programs and initiatives
              focused on IoE-related fields, fostering an environment conducive
              to learning and skill development in networking, data integration,
              and emerging technologies.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center w-full h-screen flex flex-col items-center justify-center bg-black">
        <h1 className=" text-xl font-extrabold">Advantages:</h1>
        <p className="text-sm">
          Participation in an IOE Hub not only broadens students' perspectives
          on the rapidly evolving IoE landscape but also provides a platform to
          hone both soft and hard skills essential for future careers. Much like
          an IEEE Student Branch in designated fields, an IOE Hub plays a vital
          role in bridging the gap between academia and industry, preparing its
          members for the challenges and opportunities presented by the
          expanding Internet of Everything.
        </p>
      </div>
    </div>
  );
};

export default Home;
