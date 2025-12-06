"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const sectors = [
  {
    id: 1,
    title: "Buildings and Infrastructure",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We deliver cutting-edge buildings and infrastructure solutions. From design to execution, we ensure safety, sustainability, and efficiency. Our projects redefine skylines and enable modern living.",
  },
  {
    id: 2,
    title: "Warehouses",
    image: "/industry.jpg",
    url: "/urban",
    description:
      "We construct modern warehouses optimized for logistics. Our designs maximize space, reduce costs, and improve supply chain efficiency. Durable structures for today and tomorrow’s needs.",
  },
  {
    id: 3,
    title: "Building Information Modeling",
    image: "/industry.jpg",
    url: "/advanced",
    description:
      "We leverage BIM to transform construction workflows. Digital twins enhance planning, reduce errors, and streamline operations. Smarter, faster, and more cost-effective builds.",
  },
  {
    id: 4,
    title: "PLANT & PRODUCT ENGINEERING SERVICES",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "Our engineering services cover every aspect of plant and product development. We deliver tailored solutions for oil, gas, and industrial sectors. Innovation meets precision engineering.",
  },
  {
    id: 5,
    title: "Water",
    image: "/industry.jpg",
    url: "/water",
    description:
      "We provide advanced water management solutions. From treatment to distribution, our expertise ensures sustainability. Protecting resources for future generations.",
  },
];

export default function Solarsector() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 640) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % sectors.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Sectors</h2>
          <button className="text-blue-600 font-semibold hover:underline">
            Explore Sectors →
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {itemsPerView > 1 ? (
            <motion.div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {sectors.map((sector, idx) => {
                const centerIndex = (current + 1) % sectors.length;
                const isCenter = idx === centerIndex;

                return (
                  <div
                    key={sector.id}
                    className="px-2"
                    style={{ minWidth: `${100 / itemsPerView}%` }}
                  >
                    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        className={`w-full h-60 object-cover transition-opacity ${
                          isCenter ? "opacity-100" : "opacity-50"
                        }`}
                      />

                      <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                        {sector.title}
                      </div>

                      {isCenter && (
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {sector.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                            {sector.description}
                          </p>
                          <a
                            href={sector.url}
                            className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
                          >
                            Know More
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <div className="flex justify-center">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer w-full">
                <Image
                  src={sectors[current].image}
                  alt={sectors[current].title}
                  className="w-full h-60 object-cover"
                />

                <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                  {sectors[current].title}
                </div>
              </div>
            </div>
          )}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {sectors.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
