"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Infrastructure Sector",
    images: ["/about.png", "/about.png", "/about.png"],
    description:
      "Landsking InfraInfra Pvt.Ltd offers durable, custom-designed Pre-Engineered Buildings (PEBs) to protect and enhance your organization. We design, manufacture, and build infrastructure solutions that support long-term business growth and deliver strong returns on investment.",
  },
  {
    title: "Sports & Leisure",
    images: ["/about.png", "/about.png", "/about.png"],
    description:
      "We design and deliver high-quality sports complexes, stadiums, and recreational facilities. Our prefabricated solutions ensure modern aesthetics, fast construction, and durability, creating spaces that encourage active and healthy lifestyles.",
  },
  {
    title: "Institutional Sector",
    images: ["/about.png", "/about.png"],
    description:
      "We specialize in large institutional buildings such as schools, hospitals, and offices. Prefabrication is increasingly recognized as a reliable alternative to traditional construction, offering faster delivery, cost efficiency, and enhanced sustainability.",
  },
  {
    title: "Special Buildings",
    images: ["/about.png", "/about.png"],
    description:
      "From landmark structures to custom-designed special-purpose buildings, our solutions combine modern engineering with sustainability. We deliver unique projects that stand out for their design, durability, and environmental responsibility.",
  },
  {
    title: "Construction Sector",
    images: ["/about.png", "/about.png"],
    description:
      "We offer a wide range of prefabricated products tailored to the construction sector, collaborating with leading names in the industry. Our efficient project execution and quality assurance make us a trusted partner in modern construction.",
  },
  {
    title: "Industrial Buildings Construction",
    images: ["/about.png", "/about.png"],
    description:
      "We deliver robust industrial buildings and factories designed for efficiency and long-term performance. With advanced prefabrication technology and landscaping integration, our solutions ensure operational excellence and sustainable growth.",
  },
];

export default function Slider() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="px-auto py-8 mt-6 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-xl font-bold text-[#000080] leading-snug md:text-4xl">
          Shaping the Future of Multiple Sectors
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto my-8 px-4">
        {/* ✅ Mobile: Each category row with overlay title */}
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-lg shadow-md overflow-hidden">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={0} // ✅ gap hata diya
                className="w-full h-64 rounded-md overflow-hidden"
              >
                {cat.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-64 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      {/* Overlay title */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-lg font-bold text-white text-center px-2">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        {/* ✅ Desktop: Tabs left + Slider right (unchanged) */}
        <div className="hidden lg:flex w-full h-[500px] rounded-sm overflow-hidden">
          <div className="w-1/4 bg-white flex flex-col rounded-tl-xl rounded-bl-xl border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 p-6 text-left transition-all duration-300 hover:bg-gray-100 ${
                  activeCategory.title === cat.title
                    ? "bg-white font-semibold shadow-inner"
                    : ""
                } ${
                  index !== categories.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="w-3/4 relative">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full h-full"
            >
              {activeCategory.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Overlay with title + description */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                      <div className="bg-black/40 p-8 rounded-lg text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-3 text-center">
                          {activeCategory.title}
                        </h3>
                        <p className="text-sm mb-3 text-center">
                          {activeCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
