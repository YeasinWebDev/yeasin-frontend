"use client";

import { useEffect, useState } from "react";
import Badge from "../common/Badge";
import { useTheme } from "next-themes";

function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const bgStyle = {
    backgroundImage: isDark
      ? `
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.05) 0px,
          rgba(255,255,255,0.05) 1px,
          transparent 1px,
          transparent 7px
        ),
        linear-gradient(to bottom, #0b0f19 0%, #0f172a 55%, #1d4ed8 100%)
      `
      : `
        repeating-linear-gradient(
          to bottom,
          rgba(0,0,0,0.06) 0px,
          rgba(0,0,0,0.06) 1px,
          transparent 1px,
          transparent 7px
        ),
        linear-gradient(to bottom, #e0edff 0%, #e0edff 55%, #2563eb 100%)
      `,
  };

  const bgStyle2 = { backgroundColor: isDark ? "#000000" : "#f7f8fc" };

  return (
    <div className="relative flex flex-col items-center mt-56 overflow-hidden">
      <Badge text="30% off until 4d : 2h : 41m : 17s" />

      <h1 className="mt-5 flex flex-col items-center justify-center font-medium leading-10 md:leading-12 lg:leading-16 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] z-20">
        <span>Master Focus & Get</span>
        <span>More Done in Less Time</span>
      </h1>

      <p className="dark:text-[#AAAEB2] text-[1.063rem] w-[90%] md:w-[55%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] text-center my-4 z-20">
        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
      </p>

      <div className="flex items-center justify-center gap-5 z-20">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[1.063rem]">Enroll now</button>
        <button className="bg-[#171B21] text-white px-6 py-2 rounded-lg font-medium text-[1.063rem]">Curriculum</button>
      </div>

      <div
        className="absolute -top-[15rem] left-[-25rem] w-[55rem] h-[45rem] 
  rotate-[-38deg] rounded-md blur-2xl -Z-1"
        style={bgStyle2}
      />

      <div
        className="absolute -top-[15rem] right-[-25rem] w-[55rem] h-[45rem] 
  rotate-[38deg] rounded-md blur-2xl -Z-1"
        style={bgStyle2}
      />

      {/* Background Section */}
      <div className="w-full min-h-screen -mt-20" style={bgStyle}>
        {/* video content */}
        <div className="w-[90%] h-[400px] xl:w-[60%] md:h-[600px] relative mt-50 md:mt-45 z-10 mx-auto rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/w6oolezXjeY?mute=1&loop=1&playlist=w6oolezXjeY"
            title="Hero Video"
            allow="fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
