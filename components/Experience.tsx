import React from "react";
import Image from "next/image";

import { Button } from "./ui/MovingBorders";

const workExperience = [
  {
    id: 1,
    title: "8 years Software Engineer",
    desc: "Software engineer specialized in developing software for controlling measurement instruments and automating electronic product testing.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    width: 95,
    height: 87,
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Specializing in web development with Next.js through personal freelance projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    width: 98,
    height: 97,
  },
];

const Experience = () => {
  return (
    <div className="w-full lg:pt-20 md:pt-16 sm:pt-16 pt-16">
      <h1 className="heading lg:pb-6 md:pb-3 sm:pb-5 pb-5">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                height={card.height}
                width={card.width}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
