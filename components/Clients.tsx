"use client";
import { motion } from "framer-motion";
import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="clients" className="py-20 flex flex-col items-center w-full">
      {/* Divide companies array into groups of 7 */}
      {Array.from({ length: Math.ceil(companies.length / 7) }).map(
        (_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap justify-center mb-8"
          >
            {companies
              .slice(groupIndex * 7, groupIndex * 7 + 7)
              .map((company) => (
                <motion.img
                  key={company.id}
                  src={company.img}
                  alt={`Logo ${company.id}`}
                  className="w-10 sm:w-12 md:w-16 lg:w-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
          </div>
        )
      )}
    </section>
  );
};

export default Clients;