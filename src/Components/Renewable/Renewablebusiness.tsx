"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function Renewablebusiness() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Separate refs for mobile and desktop arrows
  const prevMobileRef = useRef<HTMLDivElement | null>(null);
  const nextMobileRef = useRef<HTMLDivElement | null>(null);
  const prevDesktopRef = useRef<HTMLDivElement | null>(null);
  const nextDesktopRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const coreBusinessData = [
    {
      title: "Residential Solar",
      image: "/realstate/three.webp",
    },
    {
      title: "Commercial Solar",
      image: "/realstate/two.jpg",
    },
    {
      title: "Industrial Solar",
      image: "/realstate/one.webp",
    },
    {
      title: "Infrastructure & Maintenance",
      image: "/realstate/one.webp",
    },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const navigation = swiper.params.navigation as NavigationOptions;

    const isMobile = window.innerWidth < 768;
    navigation.prevEl = isMobile
      ? prevMobileRef.current
      : prevDesktopRef.current;
    navigation.nextEl = isMobile
      ? nextMobileRef.current
      : nextDesktopRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      navigation.prevEl = mobile
        ? prevMobileRef.current
        : prevDesktopRef.current;
      navigation.nextEl = mobile
        ? nextMobileRef.current
        : nextDesktopRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-4 md:py-16 bg-white md:px-15">
      <h2 className="text-2xl font-bold mt-5 text-center text-[#000080] mb-2 md:mb-12 md:text-3xl">
        Core Business
      </h2>

      <div className="mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {coreBusinessData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-start group cursor-pointer">
                {/* ✅ Image */}
                <div
                  className="relative w-full h-[200px] md:h-[180px] overflow-hidden rounded-lg"
                  onClick={() =>
                    setActiveIndex(activeIndex === idx ? null : idx)
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${
                      activeIndex === idx ? "scale-90" : "scale-100"
                    } group-hover:scale-90`}
                  />
                </div>

                {/* ✅ Title + Circular Arrow below image */}
                <div className="flex items-center justify-center gap-3 mt-3">
                  <h3
                    className="text-[15px] font-bold text-black text-center transition-colors duration-500 group-hover:text-[#000080]"
                    style={{
                      fontFamily:
                        "'NewPanam Skyline', 'DM Sans', Arial, sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* 🔵 Blue circular background arrow */}
                  {/* <div className=" hidden bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#1a1aff]">
                       <ArrowRight className="w-4 h-4 text-white" />
                     </div> */}

                  <div className=" hidden md:block bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1a1aff] w-8 h-8">
                    {/* Default icon */}
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:hidden" />
                    {/* Hover icon */}
                    <ChevronRight className="w-4 h-4 text-white hidden group-hover:block" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Mobile arrows overlay */}
        <div className="mx-3 absolute inset-0 flex items-center justify-between px-2 md:hidden z-20">
          <div
            ref={prevMobileRef}
            className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </div>
          <div
            ref={nextMobileRef}
            className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </div>
        </div>

        {/* ✅ Desktop arrows below */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-4">
          <div ref={prevDesktopRef} className="cursor-pointer">
            <Image src="/leftArrow.png" alt="Previous" width={40} height={40} />
          </div>
          <div ref={nextDesktopRef} className="cursor-pointer">
            <Image src="/rightArrow.png" alt="Next" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
