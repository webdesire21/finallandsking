"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Conceptual Design",
    status: "Ongoing",
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
  },
  {
    title: "The Gateway",
    status: "Ongoing",
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
  },
  {
    title: "77 Crossroads",
    status: "Ongoing",
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
  },
  {
    title: "Emerald Heights",
    status: "Ongoing",
    img: "/slider/p4.jpg",
    location: "Andheri, Mumbai",
  },
  {
    title: "Sunrise Towers",
    status: "Ongoing",
    img: "/slider/p5.webp",
    location: "Thane, Mumbai",
  },
  {
    title: "Sunrise Towers",
    status: "Ongoing",
    img: "/slider/p7.png",
    location: "Thane, Mumbai",
  },
];

export default function Rndservice() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-12 relative">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#000080] mb-8">
        Important Elements of PLMs Design Services{" "}
      </h2>

      <div className="relative   mx-auto  px-12 md:mx-23">
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
              // @ts-expect-error: Swiper types don’t include navigation refs directly
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper types don’t include navigation refs directly
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-[#000080]">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    ({project.status})
                  </p>
                  <div className="relative w-full h-[300px] overflow-hidden rounded shadow">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white border border-blue-700 text-blue-700 font-semibold px-4 py-1 text-sm hover:bg-blue-700 hover:text-white transition">
                      KNOW MORE
                    </button>
                  </div>
                  <p className="mt-3 text-gray-700">{project.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div
          ref={prevRef}
          className="
    absolute top-1/2 
    left-4 md:-left-2   /* mobile = left-4, desktop = -left-2 */
    -translate-y-1/2 
    text-[#000080] w-10 h-10 flex items-center justify-center 
    rounded-full cursor-pointer hover:transition z-10
  "
        >
          ◀
        </div>

        <div
          ref={nextRef}
          className="
    absolute top-1/2 
    right-4 md:-right-2  /* mobile = right-4, desktop = -right-2 */
    -translate-y-1/2 
    text-[#000080] w-10 h-10 flex items-center justify-center 
    rounded-full cursor-pointer hover: transition z-10
  "
        >
          ▶
        </div>
      </div>
    </section>
  );
}
