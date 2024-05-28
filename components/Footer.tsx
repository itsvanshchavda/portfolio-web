import React, { useState } from "react";

import MagicButton from "./MagicButton";
import { FaLinkedinIn } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { VortexTheme } from "@/components/ui/VortexTheme";


function Footer() {


  return (

    <>
      <div className="w-full mx-auto rounded-md  h-96 mb-10 overflow-hidden" id="contact">
        <VortexTheme
          rangeY={800}
          particleCount={700}
          baseHue={120}
          className="flex items-center  flex-col justify-center px-2 md:px-10 bg-transparent  py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Any idea in your <span className="text-[#cbacf9]">mind</span> ?
          </h2>
          <p className="text-slate-300 text-sm md:text-xl max-w-xl mt-6 text-center">
            Let&apos;s Make It Happens Together!!
          </p>
          <div className="flex flex-col  sm:flex-row items-center gap-4 mt-2">
            <a target="_blank" href="https://www.linkedin.com/in/vanshchavda07/" rel="noreferrer" >
              <MagicButton
                title="Let's Connect"
                icon={<FaLinkedinIn/>}
                position="right"

              />
            </a>

          </div>


        </VortexTheme>

      </div>


      <div className="flex items-center  justify-center mb-10 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a target="_blank" href={info.link} rel="noreferrer"
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}

       
      </div>


      <div className="mt-5 mb-5">
          <p className="md:text-base text-center text-sm md:font-normal font-light">
            Copyright © 2024 Vansh Chavda
          </p>
        </div>




    </>






  );
}


export default Footer;
