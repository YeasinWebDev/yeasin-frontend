"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/public/icons/logo";
import ModeToggle from "../mode-toggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [color, setColor] = useState("black");

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    if (theme === "dark") {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div
        className="absolute bottom-0 left-0 w-full h-[1px]"
        style={{
          background: "linear-gradient(to right, transparent, #6366f1, transparent)",
        }}
      />

      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="">
            <Logo color={color} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="dark:text-[#D0D5D9] text-[0.938rem]">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-center gap-5 lg:flex">
            <ModeToggle />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[1.063rem]">Enroll now</button>
          </div>
          {/* Mobile Menu Button */}
          <div className=" flex items-center justify-center gap-5 lg:hidden ">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 z-[9999] dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden ml-4 mt-2">
            <div className="relative z-50 space-y-1 rounded-lg h-screen">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-md transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[1.063rem]">Enroll now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
