"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type InsightItem = {
  _id: string;
  title: string;
  description: string;
  type: string;
  image: string;
  link: string;
};

export default function Insights() {
  const [items, setItems] = useState<InsightItem[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Fetch data dynamically from API
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const res = await fetch("/api/insights", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch insights");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching insights:", err);
      }
    };
    fetchInsights();
  }, []);

  // Setup Swiper navigation after mount
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      const navigation = swiperRef.current.params.navigation;
      if (typeof navigation !== "boolean") {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;

        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, [items]);

  return (
    <div className="relative px-6 lg:px-25 pb-6 md:py-10 md:px-15">
      <h1 className="text-center text-3xl font-bold my-10 text-[#000080]">
        Our Latest Insights
      </h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex-shrink-0 bg-[#f3f6f4] relative w-full rounded-md overflow-hidden cursor-pointer group">
              {/* Mobile */}
              <div className="block sm:hidden p-4 bg-[#f3f6f4] rounded-md mb-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-md text-white mb-2"
                  style={{ backgroundColor: "#000080" }}
                >
                  {item.type}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-widest">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 tracking-widest mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  aria-label={`Know more about ${item.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      marginBottom: "16px",
                      backgroundColor: "#000080",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Know More
                  </button>
                </a>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </div>

              {/* Desktop */}
              <div className="hidden sm:block h-[540px] relative">
                <div
                  className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md text-white"
                  style={{ backgroundColor: "#000080" }}
                >
                  {item.type}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-md"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold tracking-widest transition-opacity duration-500 group-hover:opacity-0">
                  {item.title}
                </div>

                <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left rounded-md">
                  <div>
                    <h3 className="text-xl font-bold mt-17 mb-4 text-[#112868]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-black mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href={item.link}
                      aria-label={`Know more about ${item.title}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        style={{
                          backgroundColor: "#000080",
                          color: "white",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontWeight: 500,
                          border: "none",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        Know More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation */}
      <div className="flex justify-end gap-3 md:mt-6">
        <button
          ref={prevRef}
          className="bg-white font-light border border-[#000080] text-[#000080] p-2 rounded-[3px]"
          aria-label="Previous slide"
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          ref={nextRef}
          className="bg-white border border-[#000080] text-[#000080] p-2 rounded-[3px]"
          aria-label="Next slide"
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
