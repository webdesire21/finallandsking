"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;

  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PETROL PUMPS",
    image: "/preimages/pump.png",
  },
  {
    id: 2,
    title: "INSTITUTIONAL",
    image: "/preimages/inst.png",
  },
  {
    id: 3,
    title: "INDUSTRIAL",
    image: "/preimages/industry.png",
  },
  {
    id: 4,
    title: "RURAL ELECTRIFICATION",
    image: "/preimages/person.jpg",
  },
  {
    id: 5,
    title: "Turnkey Solar PV Solutions",
    image: "/preimages/trunky.png",
  },
  {
    id: 5,
    title: "Solar Solutions for Essential Needs",
    image: "/preimages/solutions.png",
  },
];

export default function RenewableSector() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };

  return (
    <section className="text-center px-4 sm:px-6 md:px-15 lg:px-28 pt-0 lg:pt-16 bg-white">
      <section className="w-full py-8 lg:pt-16 bg-white relative">
        <div className="mx-auto px-2 sm:px-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
            Features We Have Which Enhance Us{" "}
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <div
                    className={`relative text-center transition-all duration-500 group ${
                      isActive ? "scale-105" : "scale-90 opacity-70"
                    }`}
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover w-full h-full rounded-lg"
                        />

                        <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 px-4 md:px-0 text-center text-sm font-semibold">
                          {project.title}
                        </div>

                        <div
                          onClick={() => handleOverlayToggle(project.id)}
                          className={`
                            absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                            rounded-lg transition-opacity duration-500 cursor-pointer
                            ${
                              activeOverlay === project.id
                                ? "opacity-100"
                                : "opacity-0"
                            }
                            md:opacity-0 md:group-hover:opacity-100 md:cursor-default
                          `}
                        >
                          <h3 className="text-sm md:text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                        </div>

                        <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#000080"
                            strokeWidth="1.5"
                          >
                            <line x1="20" y1="12" x2="4" y2="12" />
                            <polyline points="12 4 4 12 12 20" />
                          </svg>
                        </div>

                        <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#1c398e"
                            strokeWidth="1.5"
                          >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <polyline points="12 4 20 12 12 20" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 md:-left-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000080"
              strokeWidth="1.5"
            >
              <line x1="20" y1="12" x2="4" y2="12" />
              <polyline points="12 4 4 12 12 20" />
            </svg>
          </div>

          <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 md:-right-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1c398e"
              strokeWidth="1.5"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="12 4 20 12 12 20" />
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
}
