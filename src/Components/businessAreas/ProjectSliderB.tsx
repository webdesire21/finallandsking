// components/ProjectSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  img: string;
  location: string;
  buttonText?: string;
  url?: string;
};

type ProjectSliderProps = {
  heading: string;
  projects: Project[];
};

export default function ProjectSliderB({
  heading,
  projects,
}: ProjectSliderProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="  py-2 md:py-12 relative lg:px-10 md:px-5">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#000080] mb-8">
        {heading}
      </h2>

      <div className="relative  mx-auto px-4 md:px-12 ">
        {isMounted && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error: Swiper types don't expose navigation refs directly
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper types don't expose navigation refs directly
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 4, slidesPerGroup: 1 },
            }}
            className="relative"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full h-[300px] overflow-hidden rounded shadow">
                    <Image
                      src={project.img}
                      alt="projects"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Left Arrow (inside swiper area) */}
            <div
              ref={prevRef}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-[#000080] w-12 h-12 flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition z-10"
            >
              ←
            </div>

            {/* Right Arrow (inside swiper area) */}
            <div
              ref={nextRef}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-[#000080] w-12 h-12 flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition z-10"
            >
              →
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
