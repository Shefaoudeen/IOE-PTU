import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pastSession from "../data/pastEvent";
import workshop from "../data/workshop";

const iconStyling = {
  background: "#808080",
};

const Past = () => {
  return (
    <div className="bg-blue-200  z-0 w-[100%]" id="past">
      <h1 className="text-center font-extrabold text-white text-2xl pt-20">
        PAST EVENTS
      </h1>
      <h1 className="text-xl font-bold text-white ml-2">INSIGHTFUL TALKS</h1>
      <div className="flex justify-center my-3 relative">
        <h1 className="text-white text-sm w-4/5">
          Since our inception, our club has diligently organized a series of
          enlightening talks centred around the transformative realm of the
          Internet of Everything (IoE). These engaging sessions have delved into
          the multifaceted aspects of IoE, exploring its profound impact on
          various sectors, from technology and innovation to societal dynamics.
          Our commitment to fostering knowledge and insight has been evident in
          each carefully curated event, providing our members with a
          comprehensive understanding of the interconnected world of devices,
          data, and people. As we continue to champion intellectual exploration,
          we look forward to further discussions that unravel the endless
          possibilities within the fascinating landscape of the Internet of
          Everything.
        </h1>
      </div>
      <VerticalTimeline className="w-1/2 z-0" layout="2-columns">
        {pastSession.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={iconStyling}
              className="drop-shadow-xl w-full rounded-3xl"
              contentStyle={{ borderRadius: "20px" }}
            >
              <h1 className="vertical-timeline-element-title font-bold text-sm">
                {element.Title}
              </h1>
              <img
                src={element.image}
                className="w-full h-[200px] object-cover my-1 rounded-xl"
              />
              <h1 className="vertical-timeline-element-subtitle text-xs mt-2">
                <a target="_blank" href={element.ProfessorLink}>
                  <span className="font-bold text-sm">{element.Speaker}</span>
                </a>{" "}
                {element.Position}
              </h1>
              <h1 className="text-xs mt-2">{element.Action}</h1>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <h1 className="text-xl font-bold text-white ml-2">HANDS-ON WORKSHOPS</h1>
      <div className="flex justify-center my-3">
        <h1 className="text-white text-sm w-4/5">
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
      <VerticalTimeline className="w-1/2" layout="2-columns">
        {workshop.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.image}
              dateClassName="date"
              iconStyle={iconStyling}
              className="drop-shadow-xl w-full"
              contentStyle={{ borderRadius: "20px" }}
            >
              <h1 className="vertical-timeline-element-title font-bold text-sm">
                {element.Title}
              </h1>
              <img
                src={element.image}
                className="w-full h-[200px] object-cover my-1 rounded-xl"
              />
              <h1 className="vertical-timeline-element-subtitle text-xs mt-2">
                <a target="_blank" href={element.ProfessorLink}>
                  <span className="font-bold text-sm">{element.Speaker}</span>
                </a>{" "}
                {element.Position}
              </h1>
              <h1 className="text-xs mt-2">{element.Action}</h1>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Past;
