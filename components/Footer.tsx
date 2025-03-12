import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative z-10" id="contact">
      {/* Arrière-plan de la grille */}
      <div className="w-full absolute inset-0 -z-10 lg:-translate-y-64 md:-translate-y-48 sm:-translate-y-24 -translate-y-12">
        <Image
          src="/footer-grid.svg" // Remplacez par votre image d'arrière-plan
          alt="grid"
          className="w-full h-auto opacity-100"
          width={1800}
          height={1200}
        />
      </div>

      <div className="flex flex-col items-center z-20">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Transforming <span className="text-purple">your </span>digital
          <span className="text-purple"> ideas</span> into reality
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today to explore how I can help you achieve your goals.
        </p>
        <a href="mailto:mic.warin@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-20">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
