"use client";

import { motion } from "framer-motion";
import Badge from "../common/Badge";

import image2 from "../../public/images/home/image-2.png";
import image4 from "../../public/images/home/image-4.png";
import image8 from "../../public/images/home/image-8.png";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";

function WhyUs() {
  const text = "If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you’re not alone.";

  return (
    <div className="flex items-center flex-col justify-center my-20">
      <Badge text="Are Distractions Holding You Back?" />

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[1.75rem] lg:text-[2.5rem] xl:text-[3.313rem] flex flex-wrap justify-center w-[90%] md:w-[70%] 2xl:w-[65%] text-center xl:leading-16 my-4 text-black dark:text-white"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.03, delayChildren: 0.2 },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0.4 },
              show: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div className="flex items-center justify-center gap-2 md:gap-5">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          src={image8.src}
          alt="image-8"
          className="w-[6.875rem] md:w-[7.375rem] h-[7rem] object-cover rounded-xl"
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          src={image2.src}
          alt="image-2"
          className="w-[6.875rem] md:w-[7.375rem] h-[7rem] object-cover rounded-xl"
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          src={image4.src}
          alt="image-4"
          className="w-[6.875rem] md:w-[7.375rem] h-[7rem] object-cover rounded-xl"
        />
      </motion.div>

      <div className="flex items-center justify-center gap-4 mt-40 w-full h-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          src="/images/home/image-7.png"
          alt="image-9"
          className="hidden xl:block w-[22.813rem] h-[40.125rem] object-cover rounded-xl"
        />

        <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[90%] xl:w-[32.5rem] h-[40.125rem] relative bg-[#ffffff] dark:bg-[#111214] rounded-xl p-6">
          <div className="flex md:items-center items-start justify-between flex-col md:flex-row gap-8 md:gap-0">
            <Badge text="No worries" />

            <div className="flex flex-col justify-end items-start md:items-end">
              <AvatarGroup>
                <Avatar>
                  <AvatarImage src="/images/home/image-1.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/images/home/image-2.png" alt="@maxleiter" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/images/home/image-3.png" alt="@evilrabbit" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </AvatarGroup>
              <span className="text-[0.938rem] text-[#F9F9F9 ] dark:text-[#D0D5D9]">Join with 5K other students</span>
            </div>
          </div>

          <div className="absolute flex items-center justify-between bottom-5 w-full left-0 px-6">
            <div className="w-[50%] flex-col flex gap-2">
              <span className="text-[1.063rem] text-gray-700 dark:text-[#AAAEB2]">
                The ability to concentrate <br /> deeply is the ultimate productivity hack
              </span>{" "}
              <br />
              <span className="text-[1.75rem] dark:text-[#D0D5D9] leading-8">
                And fortunately it’s <br /> a skill you can train <br /> & develop.
              </span>
            </div>

            <div>
              <img src="/images/home/image-5.png" alt="image-6" className="w-[7.375rem] h-[7.5rem] object-cover rounded-xl mt-6" />
              <img src="/images/home/image-3.png" alt="image-6" className="w-[7.375rem] h-[7.5rem] object-cover rounded-xl mt-6" />
              <img src="/images/home/image-1.png" alt="image-6" className="w-[7.375rem] h-[7.5rem] object-cover rounded-xl mt-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyUs;
