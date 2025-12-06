"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  title: string;
  images: string[];
  description: string;
}

const categories: Category[] = [
  {
    title: "Solar EPC Solutions",
    images: ["/rehome/epcone.jpg", "/rehome/epct.jpg", "/rehome/epcth.jpg"],
    description:
      " We provide complete turnkey Solar EPC services, managing everything from design and procurement to construction, testing, and commissioning for projects ranging between 10 kW and multi-megawatt scale. Backed by optimized engineering, top-tier components, and a focus on long-term performance, our solar systems are designed for reliability and sustainability.",
  },
  {
    title: "Residential Solar",
    images: ["/rehome/rone.jpg", "/rehome/rth.png", "/rehome/rtwo.jpg"],
    description:
      "Bring clean energy home with our smart rooftop solar systems, designed for efficiency, affordability, and ease of use. With flexible financing, remote tracking, and smart metering, we make switching to solar effortless and cost-effective.",
  },
  {
    title: "Commercial Solar Installation",
    images: ["/rehome/cone.jpg", "/rehome/ctwo.jpg", "/rehome/cth.jpg"],
    description:
      " Enhance your businesss energy efficiency with tailor-made solar setups for factories, offices, hospitals, and logistics centers. Offering net metering, zero-down payment options, and 24×7 monitoring, our solutions make solar adoption simple, profitable, and future-focused.",
  },
  {
    title: "Industrial Turnkey Solar Projects",
    images: ["/rehome/itt.jpg", "/rehome/itth.jpg", "/rehome/itone.jpg"],
    description:
      " Fuel industrial growth with large-scale, fully integrated solar installations covering civil, mechanical, and electrical works. Whether grid-tied or off-grid, our projects deliver seamless execution, high performance, and long-term operational savings.",
  },

  {
    title: "Infrastructure & Maintenance",
    images: ["/rehome/it.jpg", "/rehome/ith.jpg"],
    description:
      " We handle every aspect of solar site infrastructure — from civil and electrical works to landscaping — along with annual maintenance, cleaning, and monitoring. Our team ensures your EPC and industrial projects run smoothly, safely, and efficiently all year round.",
  },
];

export default function Renewableslider() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === activeCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeCategory.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  return (
    <div className="px-auto py-5 mt-6 mb-5 bg-[#f0f1f5] md:mb-0 md:px-15 lg:px-9">
      <div className="text-center mb-6"></div>

      <div className="mx-auto my-8 px-4 lg:px-20">
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => {
            const [mobIndex, setMobIndex] = useState(0);

            const nextMob = () =>
              setMobIndex((p) => (p === cat.images.length - 1 ? 0 : p + 1));
            const prevMob = () =>
              setMobIndex((p) => (p === 0 ? cat.images.length - 1 : p - 1));

            return (
              <div key={idx} className="shadow-md overflow-hidden relative">
                <div className="relative w-full  h-45 md:h-50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${cat.images[mobIndex]})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/60"></div>
                    </motion.div>{" "}
                  </AnimatePresence>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h3 className="text-sm md:text-xl font-bold text-white text-center px-2">
                      {cat.title}
                    </h3>
                  </div>

                  <button
                    onClick={prevMob}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform"
                  >
                    <ChevronLeft size={36} strokeWidth={2.2} />
                  </button>
                  <button
                    onClick={nextMob}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform"
                  >
                    <ChevronRight size={36} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex w-full h-[450px] overflow-hidden">
          <div className="w-1/4 bg-white flex flex-col border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 text-lg p-5 text-left md:text-[19px] font-medium transition-all duration-300
                  ${
                    activeCategory.title === cat.title
                      ? "bg-white text-black shadow-inner"
                      : "text-gray-700 hover:bg-[#000080] hover:text-white"
                  }
                  ${
                    index !== categories.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="w-3/4 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${activeCategory.images[currentIndex]})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                  <div className="p-8 text-white shadow-lg ">
                    <h4 className="text-2xl font-bold mb-3 text-center">
                      {activeCategory.title}
                    </h4>
                    <p className="text-sm mb-3 text-center">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 text-white hover:scale-110 transition-transform"
            >
              <ChevronLeft size={46} strokeWidth={2.3} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 text-white hover:scale-110 transition-transform"
            >
              <ChevronRight size={46} strokeWidth={2.3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
