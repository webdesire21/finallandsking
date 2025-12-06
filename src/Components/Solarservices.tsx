"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const exploreItems = [
  {
    subtitle: "Industrial Solar",
    description:
      "Powering industries with large-scale solar installations designed for efficiency and reliability.Reduce your operational costs while achieving sustainability goals.Built to deliver uninterrupted energy for heavy-duty performance.",
    image: "/solar/industrial solar.jpg",
  },
  {
    subtitle: "Commercial Solar",
    description:
      "Engineered for maximum sunlight capture and long-term stability.Perfect for large open areas that demand high-output energy systems.A smart investment for sustainable, large-scale power generation.",
    image: "/solar/commercial solar.jpg",
  },
  {
    subtitle: " Ground-Mounted Solar",
    description:
      "Engineered for maximum sunlight capture and long-term stability.Perfect for large open areas that demand high-output energy systems.A smart investment for sustainable, large-scale power generation.",
    image: "/solar/ground mounted solar.jpg",
  },
  {
    subtitle: "  Rooftop Solar",
    description:
      "Turn idle roof space into a powerhouse of clean, renewable energy.Slash your electricity bills and boost your property’s value.Custom-designed systems for homes, offices, and factories alike.",
    image: "/solar/rooftop solar.jpg",
  },
  {
    subtitle: " Residential Solar",
    description:
      "Empower your home with cost-effective solar technology.Enjoy energy independence and long-term savings effortlessly.Sleek, durable panels designed to blend with your modern lifestyle.",
    image: "/solar/residential solar.jpg",
  },
  {
    subtitle: " Carport Solar ",
    description:
      "Transform your parking space into a productive energy source.Provide shade while generating clean, renewable power.Ideal for homes, businesses, and commercial complexes.",
    image: "/solar/carport solar.jpg",
  },
  {
    subtitle: "Parks Solar",
    description:
      "Power public spaces sustainably with environment-friendly solar systems.Blend clean energy with aesthetics to support community initiatives.Perfect for green zones, recreational areas, and eco-parks.",
    image: "/solar/park soalr.jpg",
  },
];

export default function Solarservices() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ RESPONSIVE FIX (iPads now behave like Mobile)
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
    <section className="py-12 px-6 md:px-20 relative">
      <h2 className="text-[#000080] text-2xl md:text-3xl font-bold mb-10 text-center">
        Solar Solutions Services
      </h2>

      <div
        className={`grid gap-6 w-full mx-auto mb-6 ${
          itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.subtitle}
              width={500}
              height={600}
              className="object-cover w-full h-[350px] md:h-[400px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-xl mb-2">
                {item.subtitle}
              </h4>
              <p className=" text-gray-200 text-justify text-md mb-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border border-white/30 shadow-lg transition"
        >
          <ChevronLeft className="text-white" size={26} />
        </button>

        <button
          onClick={handleNext}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border border-white/30 shadow-lg transition"
        >
          <ChevronRight className="text-white" size={26} />
        </button>
      </div>
    </section>
  );
}
