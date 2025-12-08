"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ExpertiseP() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const router = useRouter();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "R&D Engineering & Simulation",
      image: "/imagesall/sim.jpeg",
      link: "/rnd",
    },
    // {
    //   title: "Architecture & Design services",
    //   image: "/expertiseimages/Architecture & Design services.png",
    //   link: "/architecture",
    // },
    {
      title: "Cold Storage and warehouse",
      image: "/expertiseimages/Cold Storage and warehouse.jpg",
      link: "/coldstorageandwarehouse",
    },
    {
      title: "Solar Plant Installation",
      image: "/expertiseimages/Solar Plant Installation.jpg",
      link: "/renewableenergy",
    },
    { title: "HVAC", image: "/expertiseimages/HVAC.jpg", link: "/hvac" },
    {
      title: "Fire and Safety",
      image: "/expertiseimages/f.jpeg",
      link: "/businessAreas/fire-saftey",
    },
    {
      title: "STRUCTURAL ENGINEERING SERVICES",
      image: "/expertiseimages/STRUCTURAL ENGINEERING SERVICES.jpg",
      link: "/structuralsteel",
    },
    {
      title: "Infrastructure, Energy & Materials Civil Services",
      image: "/infrastructure.png",
      link: "/energyandnaturalresource",
    },
    {
      title: "Heavy Engineering",
      image: "/heavy engineering.png",
      link: "/heavyengineering",
    },
    {
      title: "Mining Metals",
      image: "/expertiseimages/Mining Metals.jpg",
      link: "/miningandmetals",
    },
    {
      title: "Factories Installation",
      image: "/factory installation.png",
      link: "/factoriesinstallation",
    },
    {
      title: "Green buildings",
      image: "/expertiseimages/Green buildings.png",
      link: "/greenbuilding",
    },
    {
      title: "PEB Erection and fabrication",
      image: "/expertiseimages/PEB Erection and fabrication.jpg",
      link: "/fabrication",
    },
    // {
    //   title: "Advisory & Auditing",
    //   image: "/expertiseimages/Advisory & Auditing.jpg",
    //   link: "/advisory-auditing",
    // },
  ];

  return (
    <section className="pt-5 pb-10  md:py-12 px-6 bg-white mx-0 md:mx-1 lg:mx-1 md:px-17">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center">
          Our Expertise
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
          <button
            ref={prevRef}
            className="bg-[#000080] text-white p-2 rounded-full hover:bg-black transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#000080] text-white p-2 rounded-full hover:bg-black transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slideNext()}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={setSwiper}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative bg-[#000080] rounded-xl overflow-hidden shadow-md cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => {
                  setActiveIndex(i);
                }}
              >
                <div className="w-full h-90 md:h-110 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-[#] flex items-center justify-between px-4 py-3 relative z-10">
                  <p className="text-white font-semibold text-sm line-clamp-1">
                    {service.title}
                  </p>
                  <div className="bg-white rounded-full p-1">
                    <motion.div
                      key={
                        hoverIndex === i || activeIndex === i
                          ? "chevron"
                          : "arrow"
                      }
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {hoverIndex === i || activeIndex === i ? (
                        <ChevronRight className="w-4 h-4 text-[#000080]" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-[#000080]" />
                      )}
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoverIndex === i && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-white text-lg font-semibold">
                        {service.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Hide bullets on desktop */
        .swiper-pagination {
          @apply md:hidden; /* Tailwind responsive utility */
        }
        .swiper-pagination-bullet {
          background: grey;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background: #000080;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
