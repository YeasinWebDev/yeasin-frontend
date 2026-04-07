
"use client";

import React from "react";
import Badge from "../common/Badge";
import { FaBrain, FaLightbulb } from "react-icons/fa6";
import { BsPatchCheckFill } from "react-icons/bs";
import { LineSquiggle } from "lucide-react";
import { motion } from "framer-motion";

function Blueprint() {
  const timelineData = [
    {
      icon: <FaLightbulb size={18} className="dark:text-white text-black" />,
      text: "Develop laser-sharp focus & eliminate distractions.",
    },
    {
      icon: <FaBrain size={18} className="dark:text-white text-black" />,
      text: "Master deep work techniques for smarter productivity.",
    },
    {
      icon: (
        <BsPatchCheckFill size={18} className="dark:text-white text-black" />
      ),
      text: "Overcome procrastination & get more done.",
    },
    {
      icon: <LineSquiggle size={18} className="dark:text-white text-black" />,
      text: "Build lasting habits for long-term success.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Badge text="The Deep Work Blueprint" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-[1.75rem] lg:text-[2.5rem] font-medium md:w-[50%] xl:w-[40%] 2xl:w-[35%] text-center my-8 leading-10"
      >
        A self-paced, results-driven course designed to help you
      </motion.h2>

      <div className="mt-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex gap-6 h-[12rem] ml-40"
          >
            {/* Line */}
            <div
              className="absolute bottom-0 -left-15 w-[9rem] h-[2px] rotate-90 mb-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, #2466F2 , transparent)",
              }}
            />

            {/* Dot */}
            <div className="absolute left-[3px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_22px_#3b82f6]" />

            <div className="flex flex-col items-start justify-center gap-5 ml-8">
              {/* Icon */}
              <div
                className="ml-10 w-14 h-14 rounded-full flex items-center justify-center 
                dark:bg-white/5 border dark:border-white/10 backdrop-blur-md shadow-[0_0_10px_#3b82f6]"
              >
                {item.icon}
              </div>

              {/* Text */}
              <p className="dark:text-[#D0D5D9] text-[1.5rem] leading-8 w-[55%] ml-10">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blueprint;