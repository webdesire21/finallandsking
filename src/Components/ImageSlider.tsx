"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  {
    src: "/product/s1.jpg",
    title: "Pre Engineered Building System",
    desc: "A wide wave of technological development over the years has been contributing greatly to the enhancement of quality life through various new products and services. One such invention is the pre–engineer buildings (PEB).",
  },
  {
    src: "/product/s2.jpg",
    title: "Shed",
    desc: "Landsking Infra  offers a variety of quality sheds to its clients. All our sheds are perfect for comprehensive storage solution. Being one of the leading shed manufacturers in the industry, we are able to build industrial sheds in different sizes to meet clients’ varied requirements.",
  },
  {
    src: "/product/s3.jpg",
    title: "Pre Engineered Building",
    desc: "Pre Engineered Building is a structure of metallic constituents which is designed and fabricated within the premises of a factory and then all the components are shipped to the site where everything gets assembled and finally erected with the nut bolts, anchor bolts, etc.",
  },
  {
    src: "/product/s4.jpg",
    title: "Roofing Systems",
    desc: "The RBS roof system consists of ribbed steel panels and allow the application of a built-up roof system. The profiled steel panel is fixed to the secondary framing by self-drilling screws.",
  },
  {
    src: "/product/s5.jpg",
    title: "Mezzanine Building",
    desc: "A mezzanine building / floor is a raised platform that is independent of a building structure and is supported by steel columns. Mezzanine flooring can create additional floors of space for a variety of different uses such including storage or extra office space.",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center bg-black py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        <span className="text-blue-800">Our</span> Products
      </h2>

      <div className="block md:hidden w-[90%] max-w-lg space-y-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.src}
              alt={`mobile-${index}`}
              className="w-full h-56 object-cover"
            />
            <h3 className="text-lg font-bold text-center text-black py-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="hidden md:block w-[90%] max-w-6xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[600px] !h-[500px] relative group cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <img
                src={item.src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover shadow-lg"
              />

              <div
                className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white px-6 
                transition-opacity duration-300
                ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg mb-4">{item.desc}</p>
                <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition">
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
