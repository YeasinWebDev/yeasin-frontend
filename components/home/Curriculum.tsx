"use client";

import Badge from "../common/Badge";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Badge as BadgeS } from "@/components/ui/badge";
import { FaPlay } from "react-icons/fa6";
import { BsPatchCheckFill } from "react-icons/bs";

import { motion } from "framer-motion";

function Curriculum() {
  const modules = [
    {
      title: "Module 1: Foundations of Deep Work",
      duration: "1.7h of video",
      lessons: [
        {
          title: "Understanding Focus & Distraction",
          duration: "14:23",
          preview: true,
          active: true,
        },
        {
          title: "The Science Behind Deep Work",
          duration: "22:51",
          preview: false,
          active: false,
        },
        {
          title: "Identifying Your Productivity Killers",
          duration: "34:42",
          preview: false,
          active: false,
        },
        {
          title: "How to Strengthen Your Attention Span",
          duration: "27:08",
          preview: false,
          active: false,
        },
      ],
    },
    {
      title: "Module 2: Building Your Deep Work Routine",
      duration: "1.3h of video",
      lessons: [],
    },
    {
      title: "Module 3: Eliminating Procrastination",
      duration: "1.5h of video",
      lessons: [],
    },
    {
      title: "Module 4: Advanced Focus & Productivity Hacks",
      duration: "1.5h of video",
      lessons: [],
    },
  ];

  const list = [
    "6h of videos - Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others.",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center flex-col mt-40">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Badge text="Course Curriculum" />

        <h2 className="text-[1.75rem] lg:text-[2.5rem] font-medium dark:text-[#E0E3E5] my-8 w-[78%] md:w-[50%] 2xl:w-[45%] text-center">
          Mastering Deep Work: A Structured Path to Peak Productivity
        </h2>
      </motion.div>

      <div className="flex items-start justify-center gap-10 my-20">
        {/*  left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-[28.75rem] mx-auto p-4"
        >
          <Accordion type="single" collapsible defaultValue="module-0">
            {modules.map((module, index) => (
              <AccordionItem key={index} value={`module-${index}`} className="border-none">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex flex-col items-start text-left gap-2 relative">
                    <h3 className="text-[1.25rem] font-medium dark:text-[#D0D5D9] w-[80%] lg:w-[90%] xl:w-full">{module.title}</h3>
                    <p className="text-[0.938rem] dark:text-[#AAAEB2] pb-4">{module.duration}</p>
                    <div
                      className="absolute bottom-0 left-0 w-full h-[1px]"
                      style={{
                        background: "linear-gradient(to right, transparent, #2466F2 , transparent)",
                      }}
                    />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-2">
                  <div className="flex flex-col gap-3 overflow-y-scroll h-[20rem] py-5">
                    {module.lessons.length === 0 ? (
                      <p className="text-sm dark:text-white/40 pb-4">No lessons available yet.</p>
                    ) : (
                      module.lessons.map((lesson, idx) => (
                        <div key={idx} className="relative flex items-center justify-between px-3 py-3 h-[10rem] transition">
                          <div
                            className="absolute bottom-0 left-0 w-full h-[1px]"
                            style={{
                              background: "linear-gradient(to right, transparent, #2466F2 , transparent)",
                            }}
                          />
                          <div className="flex items-center gap-3 w-full">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center
                            ${lesson.active ? "dark:bg-white bg-[#2466F2] text-black" : "dark:bg-white/10 bg-blue-200"}`}
                            >
                              <FaPlay size={14} className={lesson.active ? "dark:text-[#2466F2] text-white" : "dark:text-black text-white"} />
                            </div>

                            <div className="flex items-center justify-between w-full">
                              <p className="text-[1.063rem] leading-5 dark:text-[#AAAEB2]">{lesson.title}</p>

                              <div className="flex items-center justify-center gap-3">
                                {lesson.preview && (
                                  <BadgeS className="mt-1 w-fit bg-[#d9d9d9] dark:bg-[#171B21] text-[#669EFF] text-[0.938rem] px-3 py-3 rounded-full">Preview</BadgeS>
                                )}
                                <p className="text-[0.938rem] text-[#AAAEB2]">{lesson.duration}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/*  right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="rounded-xl p-px bg-gradient-to-br from-[#2466F2] via-transparent to-[#2466F2] w-fit"
        >
          <div className="bg-[#ffffff] dark:bg-[#111214] w-[26.25rem] h-[29.938rem] p-6 rounded-xl relative flex flex-col items-start justify-between">
            <h3 className="text-[1.5rem] md:text-[1.75rem] font-medium dark:text-[#D0D5D9]">Not only video lessons!</h3>

            <div>
              {list.map((item, index) => (
                <div key={index} className="flex gap-2 items-center mb-5">
                  <div
                    className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center 
                dark:bg-white/5 border dark:border-white/10 backdrop-blur-md shadow-[0_0_5px_#3b82f6]"
                  >
                    <BsPatchCheckFill size={15} />
                  </div>
                  <h3 className="text-[0.938rem] dark:text-[#AAAEB2]">{item}</h3>
                </div>
              ))}
            </div>

            <div className="pt-2 w-full">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[1.063rem] w-full">Enroll now</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Curriculum;
