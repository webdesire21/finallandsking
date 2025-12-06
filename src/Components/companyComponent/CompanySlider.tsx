"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types"; // Import from 'swiper/types'
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

type TimelineItem = {
  year: string;
  subtitle: string;
  title: string;
  description: string;
  img?: string;
};

type TimelineSliderProps = {
  heading?: string;
  subheading?: string;
  items?: TimelineItem[];
};

export default function CompanySlider({
  heading = "40+ Years of Innovation and Success",
  subheading = "Since 1981, we have revolutionized industries, healthcare and the physical world by redefining development and production methods. Our mission is to advance virtual worlds to empower innovators to create sustainable solutions that address the most pressing global challenges and unlock the full potential of human ingenuity.",
  items = [
    {
      year: "1999",
      subtitle: "THE AGE OF 3D PLM (PRODUCT LIFECYCLE MANAGEMENT)",
      title: "Innovation at every stage of the value chain",
      description:
        "3D Product Lifecycle Management (PLM) across the development lifecycle.",
      img: "/company/legacy.jpeg",
    },
    {
      year: "2012",
      subtitle: "THE AGE OF 3DEXPERIENCE PLATFORM",
      title: "Innovation through experience",
      description: "Creating value through product usage.",
      img: "/company/legacy.jpeg",
    },
    {
      year: "2020",
      subtitle: "THE AGE OF THE VIRTUAL TWIN EXPERIENCE OF HUMANS",
      title: "Innovation in the organic world",
      description:
        "Applying our experience transforming industry to revolutionize human experience.",
      img: "/company/legacy.jpeg",
    },
    {
      year: "2020",
      subtitle: "THE AGE OF THE VIRTUAL TWIN EXPERIENCE OF HUMANS",
      title: "Innovation in the organic world",
      description:
        "Applying our experience transforming industry to revolutionize human experience.",
      img: "/company/legacy.jpeg",
    },
    {
      year: "2020",
      subtitle: "THE AGE OF THE VIRTUAL TWIN EXPERIENCE OF HUMANS",
      title: "Innovation in the organic world",
      description:
        "Applying our experience transforming industry to revolutionize human experience.",
      img: "/company/legacy.jpeg",
    },
  ],
}: TimelineSliderProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-12 relative bg-white mt-20 md:mt-30 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#000080] mb-8">
        {heading}
      </h2>
      <h2 className="text-center text-sm md:text-lg text-gray-500 mb-8">
        {subheading}
      </h2>

      <div className="relative max-w-8xl mx-auto px-4">
        {isMounted && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              (swiper.params.navigation as NavigationOptions).prevEl =
                prevRef.current;
              (swiper.params.navigation as NavigationOptions).nextEl =
                nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
            className="relative"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="h-full flex">
                <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col h-120 w-full">
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-700 mb-4">
                      {item.year}
                    </h2>

                    <p className="uppercase text-xs font-semibold text-[#000080] mb-3 tracking-wide">
                      {item.subtitle}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>

                  {item.img && (
                    <div className="mt-6 flex justify-center md:justify-start opacity-80">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={260}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}

            <div
              ref={prevRef}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-[#000080] w-12 h-12 flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition z-10 rounded-full"
            >
              ←
            </div>
            <div
              ref={nextRef}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-[#000080] w-12 h-12 flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition z-10 rounded-full"
            >
              →
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
