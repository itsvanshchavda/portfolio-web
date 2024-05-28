import React, { useState } from "react";
import { Vortex } from "../components/ui/vortex";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

function Footer() {

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsContactFormOpen(false);
  };
  return (

    <>
      <div className="w-full mx-auto rounded-md  h-96 mb-10 overflow-hidden">
        <Vortex
          rangeY={800}
          particleCount={700}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 bg-transparent  py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Any idea in your <span className="text-[#cbacf9]">mind</span> ?
          </h2>
          <p className="text-slate-300 text-sm md:text-xl max-w-xl mt-6 text-center">
            Let&apos;s Make It Happens Together!!
          </p>
          <div className="flex flex-col  sm:flex-row items-center gap-4 mt-2">
            <a onClick={handleButtonClick} href="#about">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              
              />
            </a>
          
          </div>


        </Vortex>

      </div>
      <div className="mt-20">
        <p className="md:text-base text-sm md:font-normal max-sm:text-[10px] font-light">
          Copyright © 2024 Vansh Chavda
        </p>
      </div>

      <div className="flex items-center -mt-8 justify-end mb-10 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a target="_blank" href={info.link} rel="noreferrer"
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </div>


      
      
    </>






  );
}


export default Footer;