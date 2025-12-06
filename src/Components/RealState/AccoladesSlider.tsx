"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function AccoladesSlider() {
  const awards = [
    {
      title: "Due Diligence Assured",
      description:
        "Every single listing we present is backed by a fully completed and reviewed due-diligence package. This rigorous process eliminates guesswork, ensuring the asset's complete integrity and reliability from your initial viewing.",
    },
    {
      title: "Financial Clarity Commitment",
      description:
        "We ensure upfront disclosure of all known statutory matters and financial encumbrances. You see the complete financial picture first, because transparency is not a luxury—it's the foundation of our service, leaving nothing hidden in fine print.",
    },
    {
      title: "Legal Certainty Standard",
      description:
        "For every complex transaction, a respected lawyer’s formal title opinion is integrated and provided before deal closure. This acts as our gold standard for legal security, giving you total peace of mind in the transfer of ownership.",
    },
    {
      title: "Transaction Transparency Seal",
      description:
        "A clear, itemized breakdown of all fees and brokerage charges is provided and agreed upon before you sign any document. We believe in clear communication over confusion, guaranteeing no financial surprises throughout the process.",
    },
    {
      title: "Seamless Handoff Support",
      description:
        "Our commitment extends well beyond the signing table. We proactively assist with final registration follow-up and all necessary handover formalities, ensuring a smooth transition until complete possession is achieved.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 relative md:py-15">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#000080] mb-12">
        Our Client Guarantees: Commitment to Certainty
      </h2>

      <div className="relative pb-12">
        <Swiper
          modules={[Autoplay, FreeMode, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          freeMode={{ enabled: false }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="px-4"
        >
          {awards.map((award, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-100 p-7 sm:h-[320px] md:h-[440px] lg:h-[450px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-start mb-4">
                  <div className="rounded-full p-2 mb-4 w-16 h-16 flex items-center justify-center">
                    <img
                      src="/realstate/accolades.svg"
                      alt="Award Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-md md:text-lg font-semibold text-[#2c2c2c]">
                    {award.title}
                  </h3>
                  <p className="text-md text-[#4d4d4d] leading-relaxed mt-4">
                    {award.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination {
            bottom: -5px !important; /* dots bilkul niche */
          }
        `}</style>
      </div>
    </section>
  );
}
