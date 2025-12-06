"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight } from "lucide-react";

type Slide = {
  id: number;
  location?: string;
  title: string;
  desc: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Pre Engineered Buildings",
    desc: "Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial Decade.",
    image: "/expertise/firstexpertise.png",
  },
  {
    id: 2,
    title: "Prefabricated Structures",
    desc: "Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities.",
    image: "/expertise/second.png",
  },
  {
    id: 3,
    title: "Light Gauge Steel Framing",
    desc: "Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction.",
    image: "/expertise/third.png",
  },
  {
    id: 4,
    title: "Sandwich Panels",
    desc: "Insulated panels used for walls and roofs, providing thermal efficiency and structural strength.",
    image: "/expertise/fourth.png",
  },
  {
    id: 5,
    title: "Standard Modular Solutions",
    desc: "Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment.",
    image: "/expertise/fifth.png",
  },
];

export default function PebExpertiseP() {
  return (
    <div className="max-w-[1400px] mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000080] leading-snug">
          Explore Our Comprehensive <br className="hidden sm:block" />
          Prefabricated Building Solutions
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={16}
        slidesPerView={1}
        autoHeight={true} // Dynamically adjust slide height
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
              <div className="relative w-full h-[250px] sm:h-[350px]">
                {" "}
                {/* Increased height for mobile and desktop */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content below image */}
              <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
                <div>
                  {slide.location && (
                    <span className="text-yellow-500 text-xs font-semibold tracking-wide block mb-1">
                      {slide.location}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#000080] mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{slide.desc}</p>
                </div>

                {/* Arrow button */}
                <div className="mt-4 self-end w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-45">
                  <ArrowUpRight size={18} color="white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 sm:gap-6 mt-8">
        <button className="custom-prev bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ‹
        </button>
        <button className="custom-next bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ›
        </button>
      </div>
    </div>
  );
}
