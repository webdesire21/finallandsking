"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const slides = [
    {
      title: "Industry Installation and Construction",
      desc: "Quality construction project delivery — on time, with complete client satisfaction",
      video: "/rndvideo/industry instalation.mp4",
      link: "/industryinstallation",
    },
    {
      title: "Engineering & R&D Services",
      desc: "Committed to advancing innovation, fairness, equity, and quality in assessment",
      video: "/video/engineer.mp4",
      link: "/rnd",
    },
    {
      title: "Renewable Energy Solution Provider",
      desc: "Explore innovation in industrial equipment with green technologies",
      video: "/solarvideo/design.mp4",
      link: "/renewableenergy",
    },
    {
      title: "Pre-Engineered Buildings",
      desc: "Modular and pre-engineered structures tailored for efficiency and scalability",
      video: "/video/peb.mp4",
      link: "/preEngineeredBuildings",
    },
    {
      title: "Real Estate Development",
      desc: "Innovative real estate solutions designed for modern needs and sustainable growth.",
      video: "/rndvideo/real  estate.mp4",
      link: "/realStateDevlopment",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Mobile tabs grouping
  const groupSize = 1;
  const startIndex = isMobile ? Math.floor(active / groupSize) * groupSize : 0;
  const visibleTabs = isMobile
    ? slides.slice(startIndex, startIndex + groupSize)
    : slides;

  const activeSlide = slides[active];

  return (
    <section className="relative w-full h-[500px] sm:h-[380px] md:h-[85vh] lg:h-[100vh] overflow-hidden">
      <video
        src={activeSlide.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label={`Video: ${activeSlide.title}. ${activeSlide.desc}`}
      >
        <track kind="captions" srcLang="en" label="English captions" default />
        Your browser does not support the video. {activeSlide.title}:{" "}
        {activeSlide.desc}
      </video>
      <div className="absolute inset-0 bg-black/70" />
      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full mx-auto px-6 sm:px-20 text-left ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl max-w-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-4 sm:mb-3 drop-shadow-lg ">
              {activeSlide.title}
            </h2>
            <span className="text-sm md:text-xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
              {activeSlide.desc}
            </span>
            <button
              onClick={() => router.push(activeSlide.link)}
              className=" py-1  mt-2 md:mt-4 px-3 md:px-6 md:py-3 bg-white text-[#000080] font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center gap-2 text-[18px]"
            >
              {" "}
              <span className=" text-md md:text-lg">More Info</span>
              <IoIosArrowForward className=" w-4 h-4 md:w-5 md:h-5 text-[#000080]" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Bottom Navigation */}
      <div className="absolute bottom-10 sm:bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full px-6 z-10">
        {/* <div className="absolute bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full px-6 z-10"> */}
        <div
          className={`flex gap-4 sm:gap-8 justify-start sm:justify-center items-center ${
            !isMobile ? "flex-nowrap" : ""
          }`}
        >
          {visibleTabs.map((s, idx) => {
            const realIndex = isMobile ? startIndex + idx : idx;
            return (
              <div
                key={realIndex}
                onClick={() => {
                  setActive(realIndex);
                  router.push(slides[realIndex].link);
                }}
                className={`cursor-pointer ${
                  isMobile ? "flex-1" : "flex-1 sm:w-auto"
                }`}
              >
                {/* Progress Bar */}
                <div className="h-[3px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
                  <motion.div
                    key={`progress-${realIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: active === realIndex ? "100%" : "0%" }}
                    transition={{
                      duration: active === realIndex ? 6 : 0,
                      ease: "linear",
                    }}
                    className="h-full bg-[#8080FF] absolute left-0 top-0"
                  />
                </div>

                {/* Tab Title */}
                <p
                  className={`text-[17px] sm:text-md font-medium text-center min-h-[24px] leading-snug truncate ${
                    active === realIndex ? "text-white" : "text-gray-300"
                  }`}
                  title={s.title}
                >
                  {s.title}
                </p>
              </div>
            );
          })}

          {/* Play/Pause */}
          <div className="absolute -top-12 right-0 sm:right-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" aria-hidden="true" />
              ) : (
                <Play className="w-5 h-5 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
