"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    id: 1,
    tag: "Whitepaper",
    title: "How AI is Driving the Next Era of Mobility",
    description:
      "The mobility industry experts at LTTS engaged in an extensive analysis of these trends, across three domains – Product Development Life Cycle, Software Development Life Cycle and User Experience.",
    image: "/news2.jpeg",
  },
  {
    id: 2,
    tag: "Whitepaper",
    title: "EU AI Act is Critical for Innovation",
    description:
      "The integration of Artificial Intelligence is transforming the medical device industry, facilitating smarter diagnosis, physiological monitoring, and treatment decisions",
    image: "/engineer.jpg",
  },
  {
    id: 3,
    tag: "Blog",
    title: "Agentic AI Meets ER&D: Engineering the Next Leap in Autonomy",
    description:
      "Agentic AI is redefining autonomy—LTTS fuses AI with engineering to build intelligent, adaptive systems across mobility, manufacturing, and healthcare.",
    image: "/new4.jpg",
  },
  {
    id: 4,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/industry.jpg",
  },
  {
    id: 5,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/new2.png",
  },
  {
    id: 6,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/news2.jpeg",
  },
];

export default function Pebinsight() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // update navigation refs after mount
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative px-6 md:px-10 pb-6  md:py-10 md:mx-20">
      <h1 className="text-center text-3xl font-bold my-10 text-[#000080]">
        Our Latest Insights
      </h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex-shrink-0 bg-[#f3f6f4] relative w-full  rounded-md overflow-hidden cursor-pointer group">
              {/* Mobile version */}
              <div className="block sm:hidden p-4 bg-[#f3f6f4] rounded-md mb-6">
                <div className="inline-block px-3 py-1 rounded-full text-md bg-[#000080] text-[#fff] mb-2">
                  {card.tag}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-widest">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 tracking-widest mb-4">
                  {card.description}
                </p>
                <button className="mb-4 bg-[#000080] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                  Know More
                </button>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </div>

              {/* Desktop version with hover */}
              <div className="hidden sm:block h-[450px]">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md bg-[#000080] text-[#fff]">
                  {card.tag}
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-md"
                />

                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold transition-opacity duration-500 group-hover:opacity-0 tracking-widest">
                  {card.title}
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left rounded-md">
                  <div>
                    <h3 className="text-xl font-bold mt-17 mb-4 text-[#112868] ">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-black mb-6 ">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <button
                        className="bg-[#000080] text-sm text-[#fff] px-4 py-2 rounded-lg font-medium 
                        hover:bg-[#] hover:text-[#000080] 
                        transition"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="flex justify-end gap-3 md:mt-6">
        <button
          ref={prevRef}
          className="bg-white font-light border border-[#000080] text-[#000080] p-2 rounded-[3px] hover:bg-[#8080FF] "
        >
          <FaArrowLeft size={16} className="font-light" />
        </button>
        <button
          ref={nextRef}
          className="bg-white border border-[#000080] text-[#000080] p-2 rounded-[3px] hover:bg-[#8080FF]"
        >
          <FaArrowRight size={16} className="font-light" />
        </button>
      </div>
    </div>
  );
}
