import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id = "home">
    <div className="pb-20 pt-36">
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
      <div>
        <BackgroundBeams />
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
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Starts faded and slightly moved down
            whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up to original position
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut", // Smooth easing for the transition
            }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            INTUITIVE DESIGN AND DEVELOPMENT
          </motion.p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-semibold opacity-70">
            Hi! I&apos;m Mehtab, a Full-Stack Developer based in Canada.
          </p>

          <div className="flex gap-x-4">
            {" "}
            <a href="https://www.linkedin.com/in/mehtab-s/">
              <MagicButton
                title="Linkedin"
                icon={<FaLinkedin />}
                position="left"
              />
            </a>
            <a href="https://github.com/Mehtaab-010110">
              <MagicButton title="Github" icon={<FaGithub />} position="left" />
            </a>
            <a href="/Mehtab_Resume.pdf" download="Mehtab_Resume.pdf">
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
