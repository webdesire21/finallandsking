"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Brand from "yes/Components/Brand";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Structuralsteel() {
  const features = [
    {
      title: "Structural Detailing",
      description:
        "Landsking Infra Pvt. Ltd. delivers accurate, error-free detailing services using Tekla, AutoCAD, and custom in-house tools. Our shop and GA drawings are optimized for fabrication, ensuring projects finish on time and within scope.",
      image: "/industry.jpg",
    },
    {
      title: "PEMB Design",
      description:
        "We design Pre-Engineered Metal Buildings as per AISC, MBMA, AISI, AWS, ASD, and LRFD standards, using STAAD Pro, MBS, ETABS, and in-house programs. Our engineers ensure precise, scalable, and cost-effective design solutions.",
      image: "/industry.jpg",
    },
    {
      title: "PEMB Detailing",
      description:
        "We specialize in detailing of PEMB projects, including main and secondary framing, connections, and miscellaneous elements like stairs and ladders, following international standards for high-quality deliverables.",
      image: "/industry.jpg",
    },
    {
      title: "Connection Design",
      description:
        "Our structural engineers deliver safe and optimized steel connection designs with precise detail drawings, supporting complex and large-scale steel structures worldwide.",
      image: "/industry.jpg",
    },
    {
      title: "PE Stamping Services",
      description:
        "We offer licensed P.E. stamping and sealing for engineering documents including reports, calculations, and construction drawings across various jurisdictions.",
      image: "/industry.jpg",
    },
    {
      title: "Estimation Services",
      description:
        "Landsking Infra Pvt. Ltd. provides accurate material take-offs and BOMs for PEMB and structural steel projects, helping clients manage project budgeting and planning efficiently.",
      image: "/industry.jpg",
    },
  ];

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Multi-Storey Building Manufacturer",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Industrial Enclosures",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Cold Storage & Cold Room Manufacturer",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Factory Building",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Warehouse",
      link: "#",
    },
  ];

  return (
    <>
      <Pebheader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Pre Engineered Buildings
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
            </p>
          </div>

          <div className="w-full relative order-2 mt-6 lg:mt-0 flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[260px] sm:max-w-sm"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[220px] sm:w-[280px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline text-sm sm:text-base"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Structural Engineering Services Include
          </h2>
          <p className="text-gray-600  max-w-2xl mx-auto mb-12">
            Our Pre-Engineered Buildings are designed with innovation,
            durability, and efficiency at the core—providing solutions that meet
            modern industrial and commercial needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-justify text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Project Gallery
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Image
              src="/industry.jpg"
              alt="Project 1"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <Image
              src="/industry.jpg"
              alt="Project 2"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <Image
              src="/industry.jpg"
              alt="Project 3"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <Image
              src="/industry.jpg"
              alt="Project 4"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <Image
              src="/industry.jpg"
              alt="Project 5"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <Image
              src="/industry.jpg"
              alt="Project 6"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <Image
              src="/menupageimg/peb8.jpg"
              alt="Manufacturing Facility of structural steel"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Manufacturing Capabilities
              </h2>
            </div>

            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong>
                Landsking Infra Pvt. Ltd. LEADING THE WAY TO THE FUTURE
              </strong>{" "}
              is your one-stop solution for all structural and building
              requirements. Our pre-engineered steel buildings are thoughtfully
              designed and precisely fabricated to meet your specific needs.
              Built in strict compliance with international standards, every
              structure is composed of meticulously engineered components that
              seamlessly integrate with each other. With a focus on durability,
              efficiency, and innovation, Landsking Infra delivers modern
              infrastructure solutions that are built to last.
            </p>
          </div>
        </div>
      </section>

      <Brand />
      <Footer />
    </>
  );
}
