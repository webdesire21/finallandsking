"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Wrench,
  Lightbulb,
  Puzzle,
  Network,
  Link,
} from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

import Rndheader from "yes/Components/Rndheader";
import Rndproduct from "yes/Components/Rndproduct";
import Rndplatform from "yes/Components/Rndplatform";
import Rndexplore from "yes/Components/Rndexplore";
import QuickLinks from "../../Components/businessAreas/QuickLinks";
import PebBrandP from "yes/Components/PebBrandP";
import Rndstories from "yes/Components/Rndstories";
import Rndfooter from "yes/Components/Rndfooter";
import Rndaboutus from "yes/Components/Rndaboutus";
import RndServicesNew from "yes/Components/RndServicesNew";

export default function Rnd() {
  const router = useRouter();

  const links = [
    {
      title: "CASE STUDY",
      subtitle: "Engineering in Action",
      icon: <Wrench size={20} />,
    },
    {
      title: "TRENDS & INSIGHTS",
      subtitle: "Future. Innovation. Now.",
      icon: <Lightbulb size={20} />,
    },
    {
      title: "OUR SOLUTIONS",
      subtitle: "Smart. Simple. Effective.",
      icon: <Puzzle size={20} />,
    },
    {
      title: "STRONG NETWORK",
      subtitle: "Global. Connected. Strong.",
      icon: <Network size={20} />,
    },
  ];

  const slides = [
    {
      title: "Engineering Services",
      desc: "Providing innovative and sustainable engineering solutions tailored to modern real estate and infrastructure challenges.",
      video: "/video/engineer.mp4",
      link: "/service/civil-engineering",
    },
    {
      title: "Mechanical Service",
      desc: "Empowering industries with precision-driven mechanical design, fabrication, and automation solutions using cutting-edge technologies.",
      video: "/video/mechenical.mp4",
      link: "/service/mechanical",
    },
    {
      title: "CAE Simulation",
      desc: "Enhancing product performance and reliability through advanced computer-aided engineering simulations and virtual testing.",
      video: "/video/cae.mp4",
      link: "/service/cae-simulation",
    },
    {
      title: "Product Engineering",
      desc: "Transforming ideas into market-ready products through innovative design, analysis, and manufacturing excellence.",
      video: "/video/product.mp4",
      link: "/productengineering",
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
    <>
      <Rndheader />
      {/* Banner Section */}
      <section className="relative w-full h-[450px] sm:h-[380px] md:h-[50vh] lg:h-[100vh] overflow-hidden">
        <video
          src={activeSlide.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-label={`Video: ${activeSlide.title}. ${activeSlide.desc}`}
        >
          <track
            kind="captions"
            srcLang="en"
            label="English captions"
            default
          />
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
              <h2 className="text-3xl max-w-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-4 sm:mb-6 drop-shadow-lg ">
                {activeSlide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl leading-relaxed">
                {activeSlide.desc}
              </p>
              <button
                onClick={() => router.push(activeSlide.link)}
                className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center gap-2 text-sm sm:text-base"
              >
                <span>More Info</span>
                <IoIosArrowForward className="w-5 h-5 text-[#000080]" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
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
      {/* Other Sections */}
      <Rndproduct />
      <Rndaboutus />
      <RndServicesNew />
      <Rndexplore />
      <Rndplatform />
      <Rndstories />
      <QuickLinks heading="Quick Links" links={links} />;
      <PebBrandP />
      <Rndfooter />
    </>
  );
}
