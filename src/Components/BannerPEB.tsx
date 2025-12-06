"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function BannerPEB() {
  const router = useRouter();

  const slides = [
    {
      title: "Pre Engineered Buildings",
      desc: "We Deliver High Performance Pre Engineered Steel Buildings",
      video: "/video/home.mp4",
      link: "/preEngineeredBuildings",
    },
    {
      title: "Structural Steel",
      desc: "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
      video: "/video/steel.mp4",
      link: "/structuralsteel",
    },
    {
      title: " EPC Solutions ",
      desc: "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
      video: "/video/epc.mp4",
      link: "/epcsolutions",
    },
    {
      title: "Project Management ",
      desc: "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
      video: "/video/structure.mp4",
      link: "/projectmanagementconsultancy",
    },
  ];

  const [active, setActive] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[99vh] overflow-hidden">
      <video
        src={slides[active].video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6  text-left md:px-26">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-snug">
              {slides[active].title}
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {slides[active].desc}
            </p>

            <button
              onClick={() => router.push(slides[active].link)}
              className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-md shadow-lg hover:bg-[#000080]  hover:text-white transition flex items-center gap-2"
            >
              <span> More Info</span>
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full">
        <div className="px-6 py-4 w-full">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex w-full">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 text-center pb-1 text-sm sm:text-base font-medium border-b-2 transition ${
                  active === i
                    ? "text-[#8080FF] border-[#8080FF]"
                    : "text-gray-300 border-transparent hover:text-white"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex sm:hidden justify-center w-full gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  active === i ? "bg-#8080FF" : "bg-[#fff]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
