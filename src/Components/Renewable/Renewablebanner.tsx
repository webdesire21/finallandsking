"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Renewablebanner() {
  const router = useRouter();

  const slides = [
    {
      titling: " Power Your Home—Before Prices Go Up Again!",
      title: "Residential Solar",
      desc: " Empowering homeowners with affordable, high-efficiency solar systems built for long-term savings and sustainability.",
      video: "/solarvideo/residential solar.mp4",
      link: "/contact",
    },
    {
      title: "Commercial Solar",
      titling: "Join the Solar Revolution—Before Incentives Run Out.",

      desc: "Your trusted partner in transforming commercial spaces into energy-efficient, cost-saving, and eco-smart power hubs.",
      video: "/solarvideo/commercial solar.mp4",
      link: "/contact",
    },
    {
      title: "Industrial Solar",
      titling: "Fuel Your Industry with the Sun—Before Costs Skyrocket.",

      desc: "Delivering robust solar solutions designed for large-scale industries seeking reliability, performance, and maximum ROI.",
      video: "/solarvideo/industrial solar.mp4",
      link: "/contact",
    },
    {
      title: "Infrastructure & Maintenance",
      titling: "Secure Solar Supply for Your Next Project.",

      desc: "Your trusted EPC partner for high-performance, utility-scale, and large industrial solar power projects.",
      video: "/solarvideo/.mp4",
      link: "/contact",
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
        className="absolute top-0 left-0 w-full md:h-full object-cover"
        aria-label=" Your trusted EPC partner for high-performance, utility-scale, and
              large industrial solar power projects."
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6 text-left md:mx-22">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-xl  max-w-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
              {slides[active].titling}
            </h1>

            <p className=" hidden text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {slides[active].desc}
            </p>
            <p className="  text-base md:text-xl text-gray-200 mb-8 max-w-4xl leading-relaxed">
              Your trusted EPC partner for high-performance, utility-scale, and
              large industrial solar power projects.
            </p>
            <button
              onClick={() => router.push(slides[active].link)}
              className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-md shadow-lg hover:bg-[#000080]  hover:text-white transition flex items-center gap-2"
            >
              <span>Get a Free Solar Audit Today!</span>
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
