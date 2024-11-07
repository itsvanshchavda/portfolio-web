import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

function Experience() {

 
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[17px] font-normal mb-8">
            Enrolled into the Diploma in Information Technology program at Sir Bhavsinhji Polytechnic Institute in Bhavnagar, Gujarat.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px] font-normal mb-8">
            Getting some hands dirty with web development & Python programming.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px] font-normal mb-8">
            1st year of clg is all about having fun, making new friends, and networking with people that are similar to you.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/clg-1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/clg-2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/clg-3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/clg-4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[17px] font-normal mb-8">
            2nd year of clg, I'm improving my frontend programming skills and studying new technologies such as React, Next.js, Tailwind CSS, and more.          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[17px]  font-normal mb-8">
            All of my friends are chilling and enjoying and i know that my sleepless night & hard work gonna be worth it in future.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px]  font-normal mb-8">
            End of the 2023 find my buddy  <a target="_blank" href="https://www.burninghat.tech/" className="relative rounded bg-muted px-[0.6rem] py-[0.2rem] font-mono text-[14px] font-semibold">
              @Yash Gohel
            </a> who is also a developer, and we turning ideas into reality and working on several projects together.
          </p>
          <div className="grid grid-cols-2 gap-4">

            <Image
              src="/setup.jpeg"
              alt="feature"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-44 lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />


            <Image
              src="/me-and-yash.jpeg"
              alt="feature"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px] font-normal mb-8">
            The best year of my life : ) Clg has finished the three-year of diploma in IT.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px]  font-normal mb-8">
            Got offer from USA Based startup to working as a full stack developer and i accepted it its been 6 months working with them 🎉
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-[17px]  font-normal mb-8">
           
           Tech Stack: React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Typescript and more.

          </p>

          <Image
            src="/intern.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-sm object-contain h-28 md:h-auto lg:h-auto w-2/3 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />

        </div>
      ),
    },

  ];
  return (
    <div className="w-full md:mb-[10.7rem] pt-10">
      <h1 className="heading">
        My Journey<span className="text-purple"> & Experience</span>
      </h1>
      <Timeline data={data} />
    </div>
  );
}

export default Experience;