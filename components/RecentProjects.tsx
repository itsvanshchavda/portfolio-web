"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4  gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] hover:scale-105 duration-300 h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
            
              title={item.pinlink}
              href="#"
            >
              <div className="relative rounded-2xl flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] mb-2">
               
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute !rounded-2xl object-contain bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        marginLeft: index === 0 ? "0" : "-5px",
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Live Site
                    </a>
                    <FaLocationArrow className="ml-2" color="#CBACF9" />
                  </div>

                 
                </div>
              </div>
            </PinContainer>
          </div>
        ))}

        <div className="h-auto sm:pt-0 pt-10 hover:scale-105 duration-300  flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer
          className="h-auto"
            
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <img
                src={"/b5.svg"}
                alt="cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              Upcoming Projects
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              Exicting projects are on the way. Stay tuned for updates!
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center"></div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
