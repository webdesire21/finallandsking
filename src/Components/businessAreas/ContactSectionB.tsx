"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  name: string;
  location: string;
  img: string;
  text: string;
  quoteLink?: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
  testimonials?: Testimonial[];
}

export default function ContactSectionB({
  title = "Landsking Infra Pvt Ltd",
  subtitle = "Get in touch with us – we are always ready to help with your project.",
  description = "Whether you need a basic or elaborate steel building, we will ensure your project is designed, manufactured, and delivered on time.",
  buttonText = "Contact Us",
  buttonLink = "/industrycontact",
  bgImage = "/product/s3.jpg",
  testimonials = [],
}: ContactSectionProps) {
  return (
    <div className="relative text-white pt-9 lg:pt-14 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:mx-15 lg:mx-22 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg font-semibold text-white mb-3">{subtitle}</p>
          <p className="mb-6 text-gray-200">{description}</p>

          <a href={buttonLink}>
            <button className="bg-[#000080] text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-yellow-400 transition">
              {buttonText}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#000080]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
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

        <div className="relative hidden md:hidden lg:block">
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
                      href={item.quoteLink || "/quote"}
                      className="text-sm font-semibold text-[#8080FF] hover:underline"
                    >
                      Get A Quote →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
