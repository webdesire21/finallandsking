"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CoreBusiness() {
  const swiperRef = useRef<SwiperType | null>(null);

  const prevMobileRef = useRef<HTMLDivElement | null>(null);
  const nextMobileRef = useRef<HTMLDivElement | null>(null);
  const prevDesktopRef = useRef<HTMLDivElement | null>(null);
  const nextDesktopRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const coreBusinessData = [
    {
      title: "Industry Installation and Construction",
      image: "/home/industry installation.jpeg",
      link: "/industryinstallation",
    },
    {
      title: "Engineering and R&D Services",
      image: "/engineer.jpg",
      link: "/rnd",
    },
    {
      title: "Solar Renewable Energy Solution",
      image: "/renewable.jpg",
      link: "/renewableenergy",
    },
    {
      title: "Real Estate Development",
      image: "/home/real estate.jpeg",
      link: "/realStateDevlopment",
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
      <h2 className="text-2xl font-bold text-center text-[#000080] mb-5 md:mb-12 md:text-3xl">
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
                {/* IMAGE */}
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

                {/* TITLE + ICON WITH LINK */}
                <Link
                  href={item.link}
                  className="flex items-center justify-center gap-3 mt-3 group cursor-pointer"
                >
                  <h3 className="text-[15px] font-bold text-black text-center transition-colors duration-500 group-hover:text-[#000080]">
                    {item.title}
                  </h3>

                  {/* Circle Icon */}
                  <div className="hidden md:flex bg-[#000080] rounded-full p-1.5 items-center justify-center transition-colors duration-300 group-hover:bg-[#1a1aff] w-8 h-8">
                    {/* Default icon */}
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:hidden" />
                    {/* Hover icon */}
                    <ChevronRight className="w-4 h-4 text-white hidden group-hover:block" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE ARROWS */}
        <div className="md:hidden">
          <div
            ref={prevMobileRef}
            className="absolute top-1/2 left-2 transform -translate-y-3/2 bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg z-20"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </div>

          <div
            ref={nextMobileRef}
            className="absolute top-1/2 right-2 transform -translate-y-3/2 bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg z-20"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </div>
        </div>

        {/* DESKTOP ARROWS */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-4">
          {/* Previous Arrow */}
          <div
            ref={prevDesktopRef}
            className="cursor-pointer bg-[#000080] p-3 rounded-full hover:bg-[#1a1aff] transition"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </div>

          {/* Next Arrow */}
          <div
            ref={nextDesktopRef}
            className="cursor-pointer bg-[#000080] p-3 rounded-full hover:bg-[#1a1aff] transition"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
