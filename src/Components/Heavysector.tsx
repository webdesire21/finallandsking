"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface Projectsector {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Projectsector[] = [
  {
    id: 1,
    title: "Power",
    description:
      "Tata Projects provides customized turnkey solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP), and Flue-gas desulfurization (FGD) solutions. With rich experience in coal and gas-based plants, super and subcritical technologies, we have executed several large and complex projects.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Water",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Advanced Technology Facilities",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Oil, Gas and Hydrocarbon",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fiveS.webp",
  },
];

export default function Heavysector() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };

  return (
    <section className="text-center px-4 sm:px-6 md:px-12 pt-1 md:pt-16 bg-white">
      <section className="w-full py-8 md:pt-16 bg-white relative">
        <div className="mx-auto px-2 sm:px-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
            Services
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            centeredSlides={false}
            // breakpoints={{
            //   0: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false },
            //   640: {
            //     slidesPerView: 1.5,
            //     spaceBetween: 20,
            //     centeredSlides: true,
            //   },
            //   768: {
            //     slidesPerView: 2.2,
            //     spaceBetween: 24,
            //     centeredSlides: true,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 30,
            //     centeredSlides: true,
            //   },
            // }}
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
                          <h3 className="text-sm md:text-sm font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-[10px] md:text-xs mb-4 ">
                            {project.description}
                          </p>
                          <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                            Know More
                          </button>
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
