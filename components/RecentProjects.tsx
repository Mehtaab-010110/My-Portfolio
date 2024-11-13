"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <motion.h2
          className="text-center text-purple text-sm md:text-md mb-4 opacity-50"
          initial={{ opacity: 0, y: 20 }} // Start off-screen with reduced opacity
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
          transition={{ duration: 0.8, delay: 0.2 }} // Delay animation by 0.2 seconds
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 30% of the element is in view
        >
          A SMALL COLLECTION OF RECENT PROJECTS
        </motion.h2>
        <motion.h1
          className="heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <motion.span className="text-white">
            PROJECTS
          </motion.span>
        </motion.h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item, i) => (
            <motion.div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              initial={{ opacity: 0, y: 50 }} // Start with fade and slide-in from below
              whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
              transition={{
                delay: 0.1 + i * 0.1, // Slight delay for each project
                duration: 0.4,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the item is visible
            >
              <PinContainer
                title={item.alttext} // Use item.link here
                href={item.link} // Pass the link here
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <motion.h1
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                  initial={{ opacity: 0, y: 20 }} // Fade and slide-in effect for the title
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {item.title}
                </motion.h1>

                <motion.p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                  initial={{ opacity: 0, y: 20 }} // Fade and slide-up for description
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {item.des}
                </motion.p>

                <motion.div
                  className="flex items-center justify-between mt-7 mb-3"
                  initial={{ opacity: 0, y: 20 }} // Fade and slide-in effect for the icons and button
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <motion.p
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                      initial={{ opacity: 0, x: 10 }} // Slide from right
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Visit
                    </motion.p>
                    <motion.div
                      className="ms-3"
                      initial={{ opacity: 0, x: 10 }} // Slide from right
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <FaLocationArrow color="#CBACF9" />
                    </motion.div>
                  </div>
                </motion.div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;