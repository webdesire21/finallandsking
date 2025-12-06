"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoCallOutline } from "react-icons/io5";
import ClientP from "../Components/ClientP";

import "swiper/css";
import "swiper/css/autoplay";
import Client from "yes/app/client/page";

export default function Brand() {
  const images: string[] = [
    "/praj.png",
    "/dee vee projects.jpeg",
    "/mega.jpeg",
    "/healthcare.jpeg",
    "/adani foundation.jpeg",
    "/dilip buildcon.jpeg",
    "/Muncipal corporation.jpeg",
  ];

  const renderRow = (reverse: boolean) => (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={4000}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border-2 border-gray-300 shadow-md rounded flex items-center justify-center p-4 h-24">
            <img
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
    <>
      <section className="section-footer-cta mb-7 pt-10 pb-10 md:pt-16 md:pb-16 md:mb-0 md:px-6 lg:pt-20 lg:pb-20 lg:px-18">
        <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between text-white px-4 md:px-5 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left md:text-center mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          <div className="flex items-start md:items-center gap-4 text-[#FFF] px-2 py-2 md:px-2 lg:px-4">
            <div className="text-black p-3 rounded-full bg-white">
              <IoCallOutline size={26} className="shadow-lg rounded-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold md:text-base">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-xl font-bold md:text-[1.6rem] lg:text-2xl"
              >
                +91 9981 813 922
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientP />

      <style jsx>{`
        .section-footer-cta {
          background-color: #272727;
          background-image: repeating-linear-gradient(
            -45deg,
            #ffffff,
            #ffffff 10px,
            rgb(230, 230, 230) 10px,
            rgb(230, 230, 230) 20px
          );
          background-blend-mode: overlay;
          background-size: 200% 200%;
          animation: barberpole 50s linear infinite;
        }

        @keyframes barberpole {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </>
  );
}
