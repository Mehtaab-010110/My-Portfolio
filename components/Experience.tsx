import React from "react";
import { workExperience } from "@/data"; // Import work experience data
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section id="work">
      <div className="py-20 w-full px-4">
        {/* Title Section with Fade-In Animation and Delay */}
        <motion.h2
          className="text-center text-purple text-sm md:text-md mb-4 opacity-50"
          initial={{ opacity: 0, y: 20 }} // Start off-screen with reduced opacity
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
          transition={{ duration: 0.8, delay: 0.2 }} // Delay animation by 0.2 seconds
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is in view
        >
          HERE IS WHAT I HAVE DONE SO FAR
        </motion.h2>

        <motion.h1
          className="heading text-3xl md:text-4xl lg:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }} // Same effect as above
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }} // Delay the title animation further
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        >
          <span className="text-white">WORK EXPERIENCE</span>
        </motion.h1>

        {/* Timeline Section with Fade-In Animation and Delay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate when the section comes into view
          transition={{ duration: 1, delay: 0.4 }} // Further delay for the timeline to appear
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        >
          <Timeline data={workExperience} />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;