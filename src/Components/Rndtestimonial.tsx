"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: " CAD Conversion| Pune, Maharashtra",
    img: "/product/s1.jpg",
    text: "The process was smooth and professional. I could easily plan and execute my project with their support.",
  },
  {
    name: "Anita Sharma",
    location: "Reverse Engineering | Ahmedabad, Gujarat",
    img: "/product/s1.jpg",
    text: "Great experience! The delivery was on time, and the team guided me throughout the project.",
  },
  {
    name: "Vikram Singh",
    location: "CAD Design | Lucknow, Uttar Pradesh",
    img: "/product/s1.jpg",
    text: "They made everything simple and stress-free. I am very satisfied with the quality and service.",
  },
];

export default function Rndtestimonial() {
  return (
    <div className="relative text-white md:mt-7 lg:mt-17">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/product/s3.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-15 lg:px-7 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landsking Infra Pvt Ltd
          </h1>
          <p className="text-lg font-semibold text-white mb-3">
            Get in touch with us – we are always ready to help with your
            project.
          </p>
          <div className="h-1 w-[100%] bg-[#8080FF] mb-4"></div>
          <p className="mb-6 text-gray-200">
            Whether you need a basic or elaborate steel building, Landsking
            Infra Infra will ensure your project is designed, manufactured, and
            delivered on time.
          </p>
          <a href="/rnd-contact">
            <button className="bg-[#000080] text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#000] transition">
              Contact Us
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#000080"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>

        <div className="relative hidden md:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-2xl overflow-hidden"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-black/50 text-white rounded-2xl overflow-hidden relative h-[320px]">
                  <div className="relative h-full">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-center h-full">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {item.location}
                    </p>
                    <span className="text-[#8080FF] text-sm font-semibold mb-3">
                      ★ Verified Customer
                    </span>
                    <p className="italic text-justify text-gray-100 mb-4 line-clamp-4">
                      “{item.text}”
                    </p>
                    <a
                      href="/quote"
                      className="text-sm font-semibold text-[#8080FF] hover:underline"
                    >
                      Get A Quote →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Styling */}
          <style jsx global>{`
            .swiper-button-prev,
            .swiper-button-next {
              top: 50% !important;
              transform: translateY(-50%);
              width: 32px;
              height: 32px;
              background: rgba(0, 0, 0, 0.5); /* Black transparent */
              border-radius: 50%;
              color: #fff !important;
              font-size: 14px !important;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px !important;
              font-weight: bold;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
