"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

export default function Pebbrand() {
  const image: string[] = [
    "/clientlogo1.png",
    "/client2.jpeg",
    "/client3.jpeg",
    "/client4.jpeg",
    "/client5.jpeg",
    "/client6.jpeg",
    "/client7.jpeg",
    "/client8.jpeg",
    "/client9.jpeg",
    "/client10.jpeg",
    "/client11.jpeg",
  ];

  const renderRow = (reverse: boolean) => (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 0, // continuous scrolling
        disableOnInteraction: false,
        reverseDirection: reverse, // change direction for second row
      }}
      speed={4000} // slow, smooth slide
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {image.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border-2 border-gray-300 shadow-md rounded flex items-center justify-center p-4 h-24">
            <Image
              src={src}
              alt={`Brand ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="py-10 bg-white">
      <h2 className="text-4xl font-bold text-center text-[#000080] mb-6">
        Meet Our Clients
      </h2>
      <div className="space-y-1">
        {renderRow(false)}
        {renderRow(true)}
      </div>
    </section>
  );
}
