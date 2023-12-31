import { Fade } from "react-slideshow-image";
import "react-vertical-timeline-component/style.min.css";
import "react-slideshow-image/dist/styles.css";
import pastSession from "../data/pastEvent";
import workshop from "../data/workshop";
import beginning from "../data/beginning";

const Past = () => {
  return (
    <div className=" z-0 w-[100%]  xl:pl-[75px]" id="past">
      <div className="flex justify-center">
        <h1 className="text-center w-fit font-extrabold text-black text-5xl pt-[50px] text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-400">
          PAST EVENTS
        </h1>
      </div>
      <div className="w-full h-[80vh]  flex flex-col justify-center mb-10">
        <div className="slide-container relative py-10 max-sm:py-0 max-sm:w-full">
          <Fade duration={2000} className="overflow-hidden max-sm:w-full">
            {beginning.map((images, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center rounded-2xl overflow-hidden relative"
                >
                  <div className=" relative flex items-center justify-center h-[400px] w-1/2 rounded-2xl max-sm:w-full max-sm:px-5">
                    <img
                      src={images.photo}
                      className="rounded-2xl object-fill shadow-2xl"
                    />
                    <h1 className="absolute text-2xl font-bold text-black bottom-2 bg-slate-400 px-2 py-1">
                      INAUGURATION OF IOE HUB
                    </h1>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-black text-center mt-4 text-xl font-medium xl:w-3/5 max-sm:text-sm max-sm:px-4">
            Course Inauguration: IoE Innovation Hub inaugurated formally by our
            <span className="block">
              Guest of Honour{" "}
              <span className="text-2xl max-sm:text-xl font-bold">
                Prof. S.Shanmugavel
              </span>
            </span>
            Principal, NEC, Kovilpatti as a part of STC program.
          </p>
        </div>
      </div>
      <div className="pt-4 h-screen flex flex-col justify-center">
        <div className="flex flex-row-reverse max-sm:flex-col justify-center">
          <div className="flex flex-col justify-center items-center relative xl:w-1/2 max-sm:w-full text-center">
            <h1 className="text-2xl font-bold text-black xl:ml-20 google-font1 ">
              INSIGHTFUL TALKS
            </h1>
            <h1 className="text-black  text-lg font-medium w-4/5 max-sm:w-11/12 max-sm:text-sm text-justify">
              Since our inception, our club has diligently organized a series of
              enlightening talks centred around the transformative realm of the
              Internet of Everything (IoE). These engaging sessions have delved
              into the multifaceted aspects of IoE, exploring its profound
              impact on various sectors, from technology and innovation to
              societal dynamics. Our commitment to fostering knowledge and
              insight has been evident in each carefully curated event,
              providing our members with a comprehensive understanding of the
              interconnected world of devices, data, and people.
            </h1>
          </div>
          <div
            className="slide-container relative xl:w-1/2 xl:ml-5 px-2"
            data-aos="fade-right"
          >
            <Fade duration={2000}>
              {pastSession.map((element, index) => {
                return (
                  <div key={index} className="flex justify-center ">
                    <div className="flex items-center justify-center h-[400px]  max-sm:w-full relative">
                      <div>
                        <img
                          src={element.image}
                          className="rounded-2xl object-fill shadow-2xl"
                        />
                        <div className="absolute bottom-2 max-sm:bottom-[30px] left-2 bg-gray-500 px-2 py-1 w-1/2 max-sm:w-3/4">
                          <span className=" text-white text-[20px] max-sm:text-[15px] font-extrabold block">
                            {element.Title}
                          </span>
                          <span className=" text-white text-[20px] max-sm:text-[15px] font-extrabold">
                            {element.Speaker}
                          </span>
                          <span className=" text-white text-[15px] max-sm:text-[10px] font-semibold block">
                            {element.Position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  max-sm:flex-col w-max-[100vw]">
        <div className="flex flex-col items-center justify-center my-3 w-4/5 max-sm:w-full w-max-[100vw]">
          <h1 className="text-2xl font-bold text-black ml-10 google-font1 ">
            HANDS-ON WORKSHOPS
          </h1>
          <h1 className="text-black text-justify mt-4 text-lg font-medium w-4/5 max-sm:text-sm max-sm:w-11/12">
            Our club has proudly orchestrated a series of hands-on workshops,
            providing our members with immersive experiences in the dynamic
            realm of the Internet of Everything (IoE). These workshops have been
            meticulously designed to foster a practical understanding of IoE
            concepts, allowing participants to actively engage with the
            technologies and methodologies shaping this transformative
            landscape. From navigating IoT devices to deciphering data
            interconnectivity, our hands-on workshops have equipped members with
            tangible skills and insights. By combining theory with practical
            application, these sessions serve as a testament to our commitment
            to empowering individuals with the proficiency to navigate and
            contribute meaningfully to the expansive and interconnected world of
            Internet of Everything.
          </h1>
        </div>
        <div
          className="slide-container relative xl:w-1/2 max-sm:w-full max-sm:hidden"
          data-aos="fade-right"
        >
          <Fade duration={2000}>
            {workshop.map((element, index) => {
              return (
                <div key={index} className="flex justify-center px-2">
                  <div className="flex items-center justify-center h-[400px] max-sm:w-full relative">
                    <img
                      src={element.image}
                      className="rounded-2xl object-fill shadow-2xl"
                    />
                    <div className="absolute bottom-2 left-2 bg-gray-500 px-2 py-1 w-3/4 max-sm:bottom-10">
                      <span className=" text-white text-[20px] font-bold block max-sm:text-[15px]">
                        {element.Title}
                      </span>
                      <span className=" text-white text-[20px] font-bold max-sm:text-[15px]">
                        {element.Speaker}
                      </span>
                      <span className=" text-white text-[15px] font-semibold block max-sm:text-[10px]">
                        {element.Position}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <div
          className="slide-container relative xl:w-1/2 max-sm:w-full sm:hidden"
          data-aos="fade-down"
        >
          <Fade duration={2000}>
            {workshop.map((element, index) => {
              return (
                <div key={index} className="flex justify-center px-2">
                  <div className="flex items-center justify-center h-[400px] max-sm:w-full relative">
                    <img
                      src={element.image}
                      className="rounded-2xl object-fill shadow-2xl"
                    />
                    <div className="absolute bottom-2 left-2 bg-gray-500 px-2 py-1 w-3/4 max-sm:bottom-10">
                      <span className=" text-white text-[20px] font-bold block max-sm:text-[15px]">
                        {element.Title}
                      </span>
                      <span className=" text-white text-[20px] font-bold max-sm:text-[15px]">
                        {element.Speaker}
                      </span>
                      <span className=" text-white text-[15px] font-semibold block max-sm:text-[10px]">
                        {element.Position}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Past;
