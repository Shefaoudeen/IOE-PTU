import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-vertical-timeline-component/style.min.css";
import "react-slideshow-image/dist/styles.css";
import pastSession from "../data/pastEvent";
import workshop from "../data/workshop";
import { slides, workshopSlides } from "../assets/pastEvent";
import beginning from "../data/beginning";
import { Blue, mic } from "../assets";

const iconStyling = {
  background: "#808080",
  backgroundImage: `url(${mic})`,
};

const styling1 = {
  backgroundImage: `url(${Blue})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Past = () => {
  function Mic() {
    return <img src={mic} width={75} />;
  }

  return (
    <div className="bg-black  z-0 w-[100%]" id="past" style={styling1}>
      <h1 className="text-center font-extrabold text-white text-5xl pt-[100px] google-font2 ">
        PAST EVENTS
      </h1>
      <div className="w-full h-[80vh]  flex flex-col justify-center mb-10">
        <h1 className="text-2xl font-bold text-white ml-20 google-font1 ">
          INAUGURATION OF IOE HUB
        </h1>
        <div className="slide-container relative py-10">
          <Fade duration={2000}>
            {beginning.map((images, index) => {
              return (
                <div key={index} className="flex justify-center rounded-2xl">
                  <div className="flex items-center justify-center h-[400px] w-1/2 rounded-2xl">
                    <img
                      src={images.photo}
                      className="rounded-2xl object-fill shadow-2xl"
                    />
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-white text-center mt-4 text-xl font-medium w-4/5">
            Course Inauguration: IoE Innovation Hub inaugurated formally by our
            Guest of Honour Prof. S.Shanmugavel, Principal, NEC, Kovilpatti as a
            part of STC program.
          </p>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-white ml-20 google-font1 ">
          INSIGHTFUL TALKS
        </h1>
        <div className="flex justify-center my-3 relative">
          <h1 className="text-white text-center mt-4 text-lg font-medium w-4/5 p-5">
            Since our inception, our club has diligently organized a series of
            enlightening talks centred around the transformative realm of the
            Internet of Everything (IoE). These engaging sessions have delved
            into the multifaceted aspects of IoE, exploring its profound impact
            on various sectors, from technology and innovation to societal
            dynamics. Our commitment to fostering knowledge and insight has been
            evident in each carefully curated event, providing our members with
            a comprehensive understanding of the interconnected world of
            devices, data, and people. As we continue to champion intellectual
            exploration, we look forward to further discussions that unravel the
            endless possibilities within the fascinating landscape of the
            Internet of Everything.
          </h1>
        </div>
        <div className="slide-container relative">
          <Fade duration={2000}>
            {slides.map((images, index) => {
              return (
                <div key={index} className="flex justify-center">
                  <div className="flex items-center justify-center h-[400px] w-1/2">
                    <img
                      src={images.image}
                      className="rounded-2xl object-fill shadow-2xl"
                    />
                    <span className="absolute bottom-5 text-white text-[20px]">
                      {images.caption}
                    </span>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <VerticalTimeline className="w-1/2 z-0" layout="2-columns">
          {pastSession.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={iconStyling}
                icon={<Mic />}
                className="drop-shadow-xl w-full rounded-3xl text-white"
                contentStyle={{
                  borderRadius: "20px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 className="vertical-timeline-element-title font-bold text-lg text-black">
                  {element.Title}
                </h1>
                <h1 className="vertical-timeline-element-subtitle text-md mt-2 text-black">
                  <a target="_blank" href={element.ProfessorLink}>
                    <span className="font-bold text-lg hover:text-yellow-400 text-black">
                      {element.Speaker}
                    </span>
                  </a>{" "}
                  {element.Position}
                </h1>
                <h1 className="text-md mt-2 text-black">{element.Action}</h1>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <h1 className="text-2xl font-bold text-white ml-20 google-font1 ">
        HANDS-ON WORKSHOPS
      </h1>
      <div className="flex justify-center my-3">
        <h1 className="text-white text-justify mt-4 text-lg font-medium w-4/5">
          Our club has proudly orchestrated a series of hands-on workshops,
          providing our members with immersive experiences in the dynamic realm
          of the Internet of Everything (IoE). These workshops have been
          meticulously designed to foster a practical understanding of IoE
          concepts, allowing participants to actively engage with the
          technologies and methodologies shaping this transformative landscape.
          From navigating IoT devices to deciphering data interconnectivity, our
          hands-on workshops have equipped members with tangible skills and
          insights. By combining theory with practical application, these
          sessions serve as a testament to our commitment to empowering
          individuals with the proficiency to navigate and contribute
          meaningfully to the expansive and interconnected world of Internet of
          Everything.
        </h1>
      </div>
      <div className="slide-container relative">
        <Fade duration={2000}>
          {workshopSlides.map((images, index) => {
            return (
              <div key={index} className="flex justify-center">
                <div className="flex items-center justify-center h-[400px] w-1/2">
                  <img
                    src={images.photo}
                    className="rounded-2xl object-fill shadow-2xl"
                  />
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
      <VerticalTimeline className="w-1/2" layout="2-columns">
        {workshop.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={iconStyling}
              className="drop-shadow-xl w-full text-white"
              contentStyle={{
                borderRadius: "20px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 className="vertical-timeline-element-title font-bold text-lg text-black">
                {element.Title}
              </h1>
              <h1 className="vertical-timeline-element-subtitle text-md mt-2 text-black">
                <a target="_blank" href={element.ProfessorLink}>
                  <span className="font-bold text-lg hover:text-yellow-400 text-black">
                    {element.Speaker}
                  </span>
                </a>{" "}
                {element.Position}
              </h1>
              <h1 className="text-md mt-2 text-black">{element.Action}</h1>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Past;
