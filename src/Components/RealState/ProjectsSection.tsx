"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Rejuve 360",
    status: "Ongoing",

    image: "/realstate/three.webp",
    location: "Mulund, Mumbai",
  },
  {
    id: 2,
    title: "West Square",
    status: "Ongoing",
    image: "/realhome/two.jpg",
    location: "Seawoods, Navi Mumbai",
  },
  {
    id: 3,
    title: "Veridian",
    status: "Completed",
    image: "/realstate/one.webp",
    location: "Powai, Mumbai",
  },
  {
    id: 4,
    title: "Veridian",
    status: "Completed",
    image: "/realstate/one.webp",
    location: "Powai, Mumbai",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#000080] mb-8 md:mb-10">
        DISCOVER OUR PROJECTS
      </h2>

      <div className=" mx-auto sm:px-4 px-2 relative lg:mx-25 md:mx-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-10" // ⬅️ niche dots ke liye jagah
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="text-center">
                <h3 className="text-base md:text-lg font-semibold text-[#000080]">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4">
                  ({project.status})
                </p>

                {/* Image + Button */}
                <div className="relative w-full h-52 sm:h-60 md:h-64 flex justify-center">
                  <div className="relative w-[85%] sm:w-[90%] md:w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#000080] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-blue-900 hover:bg-black hover:text-white transition">
                      KNOW MORE
                    </button>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
                  {project.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-prev absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
            fill="#000080"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="custom-next absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
            fill="#000080"
            viewBox="0 0 24 24"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
