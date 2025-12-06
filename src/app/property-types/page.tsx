"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Wrench, Lightbulb, Puzzle, Network } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Realstateheader from "yes/Components/Realstateheader";
import FooterReal from "yes/Components/RealState/FooterReal";
import Link from "next/link";
import Offer from "yes/Components/Offer";
import Contact from "yes/Components/RealState/Contact";
import PropertySearch from "yes/Components/RealState/PropertySearch";

export default function Propertytypes() {
  const router = useRouter();

  const slides = [
    {
      title: "Logistic & Industry",
      desc: "We leverage real-time intelligence to track optimal infrastructure and land acquisition. Secure your next operational hub now, before the next cycle locks you out of profit.",
      image: "/realstate/industrial .mp4",
    },
    {
      title: "Residential Strategy",
      desc: "Value, Finance, and LifestyleSecure your family’s financial and legal legacy by acquiring a lawyer-certified property",
      image: "/realstate/residence.mp4",
    },
    {
      title: " Office",
      desc: "Make the non-negotiable decision to secure the flexible, performance-driven space that will retain talent and solidify your brand dominance.",
      image: "/realstate/offce.mp4",
    },
    {
      title: " Retail Strategy",
      desc: "Transform your market presence into a competitive advantage before a competitor defines the future of that zone.",
      image: "/realstate/r.mp4",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <>
      <Realstateheader />

      {/* Banner Section */}
      <section className="relative w-full h-[55vh] md:h-[96vh] overflow-hidden md:px-17">
        {/* Background (video or image) */}
        <AnimatePresence mode="wait">
          {slides[active].image.endsWith(".mp4") ||
          slides[active].image.endsWith(".mov") ? (
            <motion.video
              key={slides[active].image + active}
              src={slides[active].image}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ) : (
            <motion.img
              key={slides[active].image}
              src={slides[active].image}
              alt={slides[active].title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60" />

        {/* Slide Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6 drop-shadow-lg">
                {slides[active].title}
              </h1>

              <p className="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-200 mb-4 md:mb-6 leading-relaxed md:max-w-4xl">
                {slides[active].desc}
              </p>

              <div className="flex justify-start">
                <Link href="/realestate-contact">
                  <button
                    // onClick={() => router.push(slides[active].link)}
                    className="flex items-center gap-3 text-white font-semibold text-xs sm:text-base md:text-lg group"
                  >
                    <span>Contact Us</span>
                    <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-white">
                      <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation + Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full md:px-20 z-10 px-3">
          <div className="flex gap-2 md:gap-8 relative">
            {slides.map((s, i) => (
              <div
                key={i}
                onClick={() => i !== active && setActive(i)}
                className="cursor-pointer w-24 md:w-62 flex flex-col items-center"
              >
                <div className="h-[2px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
                  <motion.div
                    key={active === i ? `active-${i}` : `inactive-${i}`}
                    initial={{ width: 0 }}
                    animate={{ width: active === i ? "100%" : "0%" }}
                    transition={{
                      duration: active === i ? 6 : 0,
                      ease: "linear",
                    }}
                    className="h-full bg-[#8080FF] absolute left-0 top-0"
                  />
                </div>
                <p
                  className={`text-[10px] sm:text-xs md:text-sm font-medium leading-snug ${
                    active === i ? "text-white" : "text-gray-300"
                  } text-center`}
                >
                  {s.title}
                </p>
              </div>
            ))}

            {/* Play / Pause Button */}
            <div className="absolute -top-10 right-0">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Property-Types
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 text-justify mb-4 leading-relaxed">
              CAE is where every great product begins—not with physical tests,
              but with a fundamental question: Can this be designed better,
              faster, and smarter? As one of the worlds foremost technical
              simulation companies, we leverage advanced Computer-Aided
              Engineering (CAE) to answer that question before any material is
              sourced. By utilizing the power of simulation, we eliminate the
              reliance on expensive, slow physical testing and development. This
              insight-first philosophy translates directly into tangible
              benefits for our clients: reduced costs, shorter lead times, and
              demonstrably superior results compared to traditional engineering
              practices. .
            </p>

            <Link href="/realestate-contact">
              <button className="border border-[#000080]  mt-9 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/realhome/property.jpg"
              alt=" real estate  Property-Types"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Offer />
      <PropertySearch />
      <Contact />
      <FooterReal />
      {/* Other Sections */}
    </>
  );
}
