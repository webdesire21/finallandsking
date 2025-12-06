"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Industry Installation and Construction",
    description:
      "Quality Construction Project Delivery on time with customer satisfaction.",
    video: "/homeslider.mp4",
    link: "/industryinstallation",
  },
  {
    title: "Real Estate",
    description:
      "Innovative real estate solutions designed for modern needs and sustainable growth.",
    video: "/homeslider.mp4",
    link: "/real-estate",
  },
  {
    title: "Engineering & RND Services",
    description:
      "Committed to advancing innovation, fairness, equity, and quality in assessment.",
    video: "/homeslider.mp4",
    link: "/preEngineeredBuildings",
  },
  {
    title: "Renewable Energy Solution Provider",
    description:
      "Explore innovation in industrial equipment with green technologies.",
    video: "/homeslider.mp4",
    link: "/renewable-energy",
  },
];

export default function BannerPOld() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [active]);

  const handleTabClick = (index: number) => {
    setActive(index);
    router.push(slides[index].link);
  };

  return (
    <div className="relative w-full h-[70vh] sm:h-[90vh] md:h-[100vh] overflow-hidden">
      <video
        key={slides[active].video}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        autoPlay
        loop
        muted
      >
        <source src={slides[active].video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-20 text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-full md:max-w-3xl">
          {slides[active].title}
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg max-w-full md:max-w-2xl">
          {slides[active].description}
        </p>

        <button
          className="mt-4 sm:mt-6 mb-6 sm:mb-10 w-fit max-w-full px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-100 transition"
          onClick={() => router.push(slides[active].link)}
        >
          Learn more
        </button>

        {/* Tabs (Grid: 2 on mobile, 4 on larger screens) */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-20 pb-4 sm:pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                {active === index && (
                  <div
                    className="absolute -top-1 left-0 h-1 bg-blue-500 rounded"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  ></div>
                )}
                <button
                  onClick={() => handleTabClick(index)}
                  className={`pt-3 sm:pt-6 text-left sm:text-center text-xs sm:text-sm md:text-base transition-all duration-300 break-words w-full
                    ${
                      active === index
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {slide.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
