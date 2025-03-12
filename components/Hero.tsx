import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BorderBeam } from "./magicui/border-beam";

const Hero = () => {
  return (
    <div className="lg:pb-20 md:pb-10 sm:pb-5 pb-0 lg:pt-20 md:pt-10 sm:pt-5 pt-0">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Carrot Pixel
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Bringing Innovative Web Solutions to Life with Expertise and Passion"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Mickaël, a French Full-Stack Developer.
          </p>

          {/* Liens sociaux */}
          <div className="relative mt-10 mb-8 w-auto">
            <div className="relative flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 px-8 py-3">
              <BorderBeam
                duration={10}
                delay={1}
                size={80}
                colorFrom="#3b82f6"
              />
              <BorderBeam
                duration={10}
                delay={6}
                size={80}
                colorFrom="#8b5cf6"
              />
              <div className="flex gap-12 items-center justify-center z-10">
                <a
                  href="https://cv.carrotpixel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full transition-all duration-300 hover:bg-blue-500/40"
                  aria-label="CV"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaFileAlt
                    className="text-white group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 z-10"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mickaël-warin-4b0275a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full transition-all duration-300 hover:bg-purple-500/40"
                  aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaLinkedin
                    className="text-white group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 z-10"
                    size={24}
                  />
                </a>
                <a
                  href="https://github.com/Mikkode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-full transition-all duration-300 hover:bg-indigo-500/40"
                  aria-label="GitHub"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaGithub
                    className="text-white group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 z-10"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>

          <a href="#about" className="mt-4">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
