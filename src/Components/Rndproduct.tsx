// components/ExploreSection.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // 🔗 add Link

const exploreItems = [
  {
    subtitle: "Mechanical Engineering Design",
    description:
      "Custom machinery to piping layouts, we bring concepts to life with cutting-edge CAD/CAM tools. Ever wondered how Indian industries keep scaling with precision? The answer lies in smart engineering like this.",
    image: "/civil/mechenical enginer.jpg",
    link: "/service/mechanical",
  },
  {
    subtitle: "Civil Engineering Design",
    description:
      "Safe, sustainable, and future-ready—our civil designs balance strength with environmental care. From Indore’s growing roads to India's urban skylines, structural integrity is not just a choice, it’s a necessity.",
    image: "/civil/civil engineer.JPG",
    link: "/service/civil-engineering",
  },
  {
    subtitle: "CAE Simulation Services",
    description:
      "Why wait for failures when you can predict them early? With FEA, CFD, and advanced simulations, we help Indian manufacturers optimize products, cut costs, and stay ahead in a competitive market.",
    image: "/civil/Cae service.jpg",
    link: "/service/cae-simulation",
  },
];

export default function ExploreSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Responsive itemsPerPage
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 1025) {
        setItemsPerPage(1); // Mobile + iPads
      } else {
        setItemsPerPage(3); // Desktop only
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0
        ? exploreItems.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= exploreItems.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleItems = exploreItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="py-12 px-6 lg:px-23 relative">
      <h2 className="text-black text-3xl md:text-4xl font-bold mb-10 text-center">
        Explore Services
      </h2>

      {/* Cards row */}
      <div
        className={`grid gap-6 w-full mx-auto mb-6 ${
          itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {visibleItems.map((item, index) => (
          <Link
            key={index}
            href={item.link} // 🔗 dynamic link
            className="relative rounded-xl overflow-hidden group cursor-pointer block"
          >
            <Image
              src={item.image}
              alt={item.subtitle}
              width={500}
              height={600}
              className="object-cover w-full h-[340px] md:h-[360px] transition-transform duration-500 group-hover:scale-105 md:h-[490px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-xl mb-2">
                {item.subtitle}
              </h4>
              <p className="text-gray-300 text-sm md:text-md mb-3">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        <button
          onClick={handleNext}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </section>
  );
}
