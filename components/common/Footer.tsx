// components/Footer.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Badge from "../common/Badge";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
export default function Footer() {
  return (
    <footer className="dark:bg-[#111214] bg-white dark:text-white px-6 py-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 relative pb-5 mb-5 items-center justify-center lg:justify-between">
        {/* Left Content */}
        <div>
          <h2 className="text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium dark:text-[#E0E3E5] leading-14">
            The Deep <br /> Work Blueprint
          </h2>
          <p className="dark:text-[#AAAEB2] mt-3 text-[1.063rem]">Master Focus & Get More Done in Less Time</p>
        </div>

        {/* Right CTA Card */}
        <div className="bg-[#2466F2] rounded-2xl p-5 w-full md:w-[320px] relative overflow-hidden relative h-[11.25rem]">
          {/* Avatars */}
          <div className="flex md:items-center items-start justify-between flex-col md:flex-row gap-8 md:gap-0 bg-transparent">
            <AvatarGroup>
              <Avatar className="border-0 ring-0 shadow-none">
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
          </div>

          {/* Arrow Button */}
          <button className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:scale-105 transition">
            <ArrowRight size={16} color="#2466F2" />
          </button>
          <span className="text-[0.938rem] text-[#F9F9F9 ] text-[#D0D5D9] mt-2 absolute bottom-3">Join with 5K other students</span>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-[1px]"
          style={{
            background: "linear-gradient(to right, transparent, #2466F2 , transparent)",
          }}
        />
      </div>

        {/* Bottom Row */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-4 text-[0.938rem] dark:text-[#D0D5D9]">
          <p>© Copyright 2024, All Rights Reserved</p>

          <div className="flex gap-6 flex-wrap items-center justify-center">
            <a href="#" className="hover:text-white transition">
              Terms & conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Refund policy
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              Support
            </a>
          </div>
        </div>
    </footer>
  );
}
