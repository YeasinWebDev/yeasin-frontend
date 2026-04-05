"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { gsap } from "gsap";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      x: theme === "dark" ? 0 : 40,
      backgroundColor: theme === "dark" ? "#282d33" : "#f5f5f5",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className={`flex items-center relative justify-between px-2 z-50 rounded-full h-12 w-fit cursor-pointer ${theme === "dark" ? "bg-[#171B21]!" : "bg-gray-200!"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div ref={circleRef} className="w-10 h-10 rounded-full absolute left-2 top-1"></div>

      <div className={`flex justify-center items-center p-2 z-2`}>
        <FaMoon className="size-6" />
      </div>
      <div className={` flex justify-center items-center p-2 z-2`}>
        <IoIosSunny className="size-6" />
      </div>
    </Button>
  );
}
