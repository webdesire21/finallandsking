"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Card = {
  id: number;
  title: string;
  desc: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Excellence in Cold Storage Infrastructure 2024",
    desc: "Recognized for delivering high-performance cold storage and refrigeration facilities across India, ensuring superior efficiency and product safety.",
  },
  {
    id: 2,
    title: "Innovative Prefabrication Solutions Award",
    desc: "Honored for innovation in pre-engineered building systems that reduce construction time and enhance long-term durability.",
  },
  {
    id: 3,
    title: "Sustainable Construction Excellence",
    desc: "Awarded for integrating energy-efficient and eco-friendly practices in industrial and cold room manufacturing projects.",
  },
  {
    id: 4,
    title: "Trusted Infrastructure Partner of the Year",
    desc: "Recognized for consistent project delivery, engineering precision, and building long-term partnerships in the industrial and construction sectors.",
  },
  {
    id: 5,
    title: "Customer Satisfaction & Quality Assurance Award",
    desc: "Acknowledged for maintaining the highest standards of quality, safety, and customer satisfaction in every project delivered.",
  },
];

export default function Accolades() {
  return (
    <div className="max-w-[1400px] mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Accolades
        </p>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        autoHeight={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-xl shadow-lg p-8 h-[250px] sm:h-[300px] flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-4">
                <span className="inline-block text-yellow-500 text-3xl">
                  ⭐
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm  text-justify">{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 sm:gap-6 mt-8">
        <button className="custom-prev bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ‹
        </button>
        <button className="custom-next bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ›
        </button>
      </div>
    </div>
  );
}
