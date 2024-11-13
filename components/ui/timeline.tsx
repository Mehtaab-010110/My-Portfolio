"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CardSpotlight } from "./card-spotlight";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  position: string;
  company?: string; // company is optional
  images: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Hide the dot on small screens */}
              <div className="hidden md:flex h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:text-3xl md:left-3 lg:text-4xl xl:text-4xl md:pl-10 lg:pl-20 font-extrabold text-white opacity-80 tracking-wider relative">
                {item.title.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Animated underline aligned with title */}
                <motion.span
                  className="absolute -bottom-2 h-1 bg-white opacity-90 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                  style={{ width: "50%", left: "48%" }}
                />
              </h3>
            </div>

            {/* Right side container with adjusted padding */}
            <div className="relative pl-4 md:pl-20 pr-4 w-full max-w-2xl">
              {/* Content */}
              <h3 className="md:hidden block text-2xl mb-4 text-center font-bold text-white opacity-70 tracking-wider">
                {item.title}
              </h3>

              <CardSpotlight className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 font-semibold md:-mt-5 md:-ml-40">
                {/* Position styled */}
                <p className="text-2xl font-bold text-left -mb-0 text-white/90 opacity-80">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
                    {item.position}
                  </motion.span>
                </p>

                {/* Conditionally render company */}
                {item.company && (
                  <motion.p
                    className="text-l font-semibold text-left mb-4 text-neutral-500 dark:text-neutral-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {item.company}
                  </motion.p>
                )}

                {/* Display content as bulleted points */}
                <motion.ul
                  className="list-disc pl-4 space-y-3 text-white opacity-90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {String(item.content)
                    .split(".")
                    .map((contentItem, idx) =>
                      contentItem.trim() ? (
                        <li key={idx}>{contentItem.trim()}.</li>
                      ) : null
                    )}
                </motion.ul>
              </CardSpotlight>

              {/* Images in responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {item.images.map((image, idx) => (
                  <div key={idx} className="w-full h-auto">
                    <img
                      src={image}
                      alt={`image-${idx}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Hide the timeline bar on small screens */}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute left-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
