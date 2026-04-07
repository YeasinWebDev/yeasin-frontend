"use client";

import { useRef } from "react";
import Badge from "../common/Badge";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaPlay } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFillPatchPlusFill, BsPatchPlus } from "react-icons/bs";

function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    {
      name: "Alex Carter",
      role: "Freelance Designer",
      text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      image: "/images/home/image-1.png",
    },
    {
      name: "Daniel Foster",
      role: "Content creator",
      text: "I never realized how much distractions were holding me back... This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      image: "/images/home/image-2.png",
    },
    {
      name: "Mark Davidson",
      role: "Software Developer",
      text: "I never realized how much distractions were holding me back... This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      image: "/images/home/image-3.png",
    },
    {
      name: "Tom David",
      role: "Entrepreneur",
      text: "I never realized how much distractions were holding me back... This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      image: "/images/home/image-5.png",
    },
  ];

  const list = ["Bonus: 1:1 coaching session to boost focus.", "Discount: Save 30% when you enroll now!"];

  const list2 = [
    "6h of videos – Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others.",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Badge text="Testimonials" />

      <h2 className="text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium dark:text-[#E0E3E5] my-8 w-[78%] md:w-[50%] 2xl:w-[45%] text-center leading-14">
        Real Results from <br /> Real People
      </h2>

      <div className="w-full max-w-6xl px-4 mb-10">
        <div className="flex items-center justify-between my-6">
          <h2 className="font-medium text-[1.25rem] dark:text-[#D0D5D9] text-black w-[50%] md:w-full">Join with 5K other students</h2>

          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-[#171B21] flex items-center justify-center dark:text-white text-black hover:bg-[#2466F2] hover:text-white transition"
            >
              <IoIosArrowBack />
            </button>

            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full bg-[#171B21] flex items-center justify-center dark:text-white text-black hover:bg-[#2466F2] hover:text-white transition"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3.5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#2466F2] via-transparent to-[#2466F2] w-[19.25rem] group relative overflow-hidden cursor-pointer">
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 dark:bg-[#111214] bg-white dark:group-hover:bg-transparent group-hover:bg-transparent p-4 flex flex-col justify-between h-[25rem] rounded-xl transition-all duration-300">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />

                  <div className="hidden group-hover:block">
                    <FaPlay className="w-14 h-14 text-[#2466F2] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4" />
                  </div>

                  <p className="text-[1.063rem] dark:text-[#AAAEB2] group-hover:hidden transition duration-500">{item.text}</p>

                  <div>
                    <p className="font-medium text-[1.25rem] dark:text-[#D0D5D9] group-hover:text-white transition duration-500">{item.name}</p>
                    <p className="text-[0.938rem] dark:text-[#AAAEB2] group-hover:text-gray-200 transition duration-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* pricing */}
      <div className="flex items-start justify-center gap-5 flex-col xl:flex-row my-28">
        <div className=" dark:bg-[#111214] bg-white w-[90%] mx-auto md:w-[27.625rem] h-[35.625rem] rounded-xl flex flex-col items-start justify-center py-4 px-15">
          <Badge text="Introducing" />
          <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] dark:text-[#E0E3E5] font-medium leading-14 pb-2">
            The Deep Work <br /> Blueprint
          </h2>
          <p className="text-[1.063rem] dark:text-[#D0D5D9]">What extra you will get if you enroll now</p>

          <div className="mt-10">
            {list.map((item, index) => (
              <div key={index} className="flex gap-2 items-center mb-5">
                <div
                  className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center 
                            dark:bg-white/5 border dark:border-white/10 backdrop-blur-md shadow-[0_0_5px_#3b82f6]"
                >
                  <BsFillPatchPlusFill size={15} />
                </div>
                <h3 className="text-[0.938rem] dark:text-[#AAAEB2]">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="dark:bg-[#111214] bg-white w-[90%] mx-auto md:w-[27.625rem] h-[35.625rem] rounded-xl p-6  flex flex-col items-start justify-between">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-end gap-3 relative">
                <h2 className="text-4xl font-semibold dark:text-[#D0D5D9]">$349</h2>
                <span className="dark:text-[#AAAEB2] text-lg">$500</span>
                <div className="w-0.5 h-12 bg-red-500 rotate-[100deg] absolute right-5 top-0" />
              </div>

              <span className="bg-blue-600 text-sm px-3 py-1 rounded-2xl text-white">30% off</span>
            </div>

            {/* Timer */}
            <p className="dark:text-[#D0D5D9] text-sm mt-3">30% off until 4d: 2h: 41m: 17s</p>
          </div>

          <div>
            {list2.map((item, index) => (
              <div key={index} className="flex gap-2 items-center mb-5">
                <div
                  className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center 
                            dark:bg-white/5 border dark:border-white/10 backdrop-blur-md shadow-[0_0_5px_#3b82f6]"
                >
                  <BsFillPatchPlusFill size={15} />
                </div>
                <h3 className="text-[0.938rem] dark:text-[#AAAEB2]">{item}</h3>
              </div>
            ))}
          </div>

          <div className="pt-2 w-full">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[1.063rem] w-full">Enroll now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
