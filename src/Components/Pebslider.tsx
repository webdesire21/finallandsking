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
    title: "Infrastructure Sector",
    images: [
      "/pebslider/infra.jpg",
      "/pebslider/infrao.jpg",
      "/pebslider/infrat.jpg",
    ],
    description:
      "Landsking InfraInfra Pvt.Ltd offers durable, custom-designed Pre-Engineered Buildings (PEBs) to protect and enhance your organization. We design, manufacture, and build infrastructure solutions that support long-term business growth and deliver strong returns on investment.",
  },
  {
    title: "Sports & Leisure",
    images: [
      "/pebslider/sone.jpg",
      "/pebslider/stwo.jpg",
      "/pebslider/sthree.jpg",
    ],
    description:
      "We design and deliver high-quality sports complexes, stadiums, and recreational facilities. Our prefabricated solutions ensure modern aesthetics, fast construction, and durability, creating spaces that encourage active and healthy lifestyles.",
  },
  {
    title: "Institutional Sector",
    images: ["/pebslider/sto.jpg", "/pebslider/sth.jpg", "/pebslider/sth.jpg"],
    description:
      "We specialize in large institutional buildings such as schools, hospitals, and offices. Prefabrication is increasingly recognized as a reliable alternative to traditional construction, offering faster delivery, cost efficiency, and enhanced sustainability.",
  },
  {
    title: "Special Buildings",
    images: [
      "/pebslider/bild.jpg",
      "/pebslider/bildo.jpg",
      "/pebslider/bildt.jpg",
    ],
    description:
      "From landmark structures to custom-designed special-purpose buildings, our solutions combine modern engineering with sustainability. We deliver unique projects that stand out for their design, durability, and environmental responsibility.",
  },
  {
    title: "Industrial Buildings ",
    images: [
      "/pebslider/i.jpg",
      "/pebslider/ione.jpg",
      "/pebslider/ithree.jpg",
    ],
    description:
      "We deliver robust industrial buildings and factories designed for efficiency and long-term performance. With advanced prefabrication technology and landscaping integration, our solutions ensure operational excellence and sustainable growth.",
  },
];

export default function Pebslider() {
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
    <div className="px-auto py-5 mt-6 mb-5 bg-[#f0f1f5] md:mb-0">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-xl font-bold text-[#000080] md:text-3xl">
          Shaping the Future of Multiple Sectors
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3" />
      </div>

      <div className="mx-auto my-8 px-4 lg:px-20 md:px-15">
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => {
            const [mobIndex, setMobIndex] = useState(0);

            const nextMob = () =>
              setMobIndex((p) => (p === cat.images.length - 1 ? 0 : p + 1));
            const prevMob = () =>
              setMobIndex((p) => (p === 0 ? cat.images.length - 1 : p - 1));

            return (
              <div key={idx} className="shadow-md overflow-hidden relative">
                <div className="relative w-full h-45 md:h-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${cat.images[mobIndex]})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/60"></div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h3 className="text-lg font-bold text-white text-center px-2">
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
                className={`flex-1 text-lg p-4 text-left md:text-[19px] font-medium transition-all duration-300
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
                transition={{ duration: 0.0 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${activeCategory.images[currentIndex]})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                  <div className="p-8 text-white  ">
                    <h4 className="text-2xl font-bold mb-3 text-center">
                      {activeCategory.title}
                    </h4>
                    <p className="text-sm mb-3 text-center ">
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
