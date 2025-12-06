"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Construct() {
  const slides = [
    {
      title: "Building Spaces That Last",
      desc: "We transform your ideas into high-quality built environments with precision, planning, and timely execution. Landsking Infra utilizes modern construction technologies, precision equipment, and structured methodologies to deliver reliable civil infrastructure.",
      image: "/civil/Fabrication Drawing.JPG",
    },
  ];

  const [active, setActive] = useState(0);
  const activeSlide = slides[active];

  return (
    <section className="relative w-full h-[450px] lg:h-[100vh] md:h-[40vh] overflow-hidden flex items-center justify-center text-center">
      <img
        src={activeSlide.image}
        alt={activeSlide.title}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px] z-10" />

      {/* Text Content */}
      <div className="relative z-20 px-6 sm:px-10 md:px-20 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-snug">
              {activeSlide.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-lg text-gray-200  leading-relaxed drop-shadow-md">
              {activeSlide.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
