"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Commercial Construction",
    image: "/realhome/commercial construction.jpg",
    description:
      "Commercial construction include industrial construction, warehouse, water treatment plant and intake well construction.",
  },
  {
    title: "Project Consultancy",
    image: "/realhome/project concutancy.jpg",
    description:
      "Project Consultancy includes Architectural and structural design, Interior, Supervision, Project management consultancy.",
  },
  {
    title: "Real Estate",
    image: "/realhome/real estate.jpg",
    description:
      "Real estate includes Sales, Purchase, Consultancy for Residential, commercial, industrial and agriculture land.",
  },
  {
    title: "Residential Construction",
    image: "/realhome/residentail construction.jpg",
    description:
      "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
  },
];

export default function LandmarkProjects() {
  return (
    <section className="bg-gray-100 py-12 lg:pl-20 md:pl-15">
      <div className="ml-auto pr-6 pl-6 md:pr-0 md:pl-0">
        {/* ✅ Header (Stacked Layout) */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-center text-3xl font-bold text-[#000080] mb-10">
            Our Segements{" "}
          </h2>
        </div>

        {/* ✅ Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="pb-10"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="relative group overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="w-full h-[370px] object-cover"
                  />

                  {/* ✅ Hover Overlay */}
                  <div
                    className=" hover:absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-4    flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
                      }}
                    >
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Navigation Buttons */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowLeft className="text-[#000080]" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowRight className="text-[#000080]" />
          </button>
        </div>

        {/* ✅ Mobile Explore Button */}
        <div className="flex justify-center mt-6 md:hidden">
          <a
            href="#"
            className="text-[#000080] font-medium flex items-center gap-2 hover:underline"
          >
            Explore Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
