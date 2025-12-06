"use client";

import React, { useState } from "react";
import Footer from "yes/Components/Footer";
import Renewableheader from "yes/Components/Renewableheader";
import Epc from "yes/Components/Epc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  PencilRuler,
  Building2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";
import Link from "next/link";

export default function Epcsolutions() {
  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();

  // ✅ FIXED: close function properly
  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };

  // ✅ Moved slides & features outside of handleClick
  const slides = [
    {
      image: "/solar epc.jpeg",
      title: "Solar Epc",
    },
    {
      image: "/product/s3.jpg",
      title: "Analysis Service",
    },
  ];

  const features = [
    {
      title: "Custom-Built Design",
      description:
        "Fully tailored to your operational and architectural requirements, ensuring precision and efficiency.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Quick Installation",
      description:
        "Factory-engineered components allow rapid onsite assembly, saving both time and labor costs.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Cost-Efficient Construction",
      description:
        "Optimized designs reduce material waste and overall construction expenses.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Durable and Low Maintenance",
      description:
        "Built to withstand harsh weather and seismic conditions with minimal upkeep.",
      icon: <FaShieldAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Efficient",
      description:
        "Insulated wall and roof panels provide excellent temperature control and energy savings.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Expandable & Flexible",
      description:
        "Easily scalable and adaptable to meet future growth and business requirements.",
      icon: <FaExpand className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  return (
    <>
      <Renewableheader />

      <section className="relative h-[100vh] md:h-[60vh] lg:h-[100vh] flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solarvideo/commercial solar.mp4" type="video/mp4" />{" "}
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
              Commercial Rooftop Solar Solutions
            </h1>
            <p className="text-sm text-justify sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              At Landsking Infra delivers industrial-grade rooftop solar
              solutions designed for India’s commercial and manufacturing
              sectors.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative order-2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[260px] sm:max-w-sm md:max-w-md"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[240px] sm:w-[280px] md:w-[320px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        // href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline text-sm sm:text-base md:text-lg"
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
      <section className="w-full bg-white py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-25 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl mb-3 text-[#000080] sm:text-2xl md:text-3xl font-bold  max-w-4xl mx-auto">
                Landsking Infra Epc Solutions
              </h2>
              <p className="text-base md:text-lg font-medium text-justify text-gray-600  mb-6">
                At Landsking Infra, we offer complete Solar EPC (Engineering,
                Procurement & Construction) solutions designed to transform
                clean energy vision into high-performing reality. Our
                experienced team handles every stage — from detailed site
                evaluation and system engineering to material sourcing,
                installation, and commissioning. We focus on precision,
                efficiency, and seamless project execution. Each solar plant is
                engineered to deliver maximum energy output with minimal
                maintenance, ensuring reliability and long-term operational
                value. With strong quality standards, technical excellence, and
                on-time delivery, we build solar systems that work smarter, last
                longer, and perform stronger — year after year.
              </p>

              <div className="flex  md:justify-start gap-4">
                <Link
                  href="/renewable-contact"
                  className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors inline-block"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <img
                src="/preimages/person.jpg"
                alt="Landsking Infra Epc Solutions Solar"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Epc />

      <div className="text-center mx-auto  mb-6 md:mb-8 md:mt-7">
        <h2 className="text-2xl text-[#000080] md:text-3xl font-bold ">
          Steps of EPC Approach
        </h2>
      </div>

      {/* ===== Example Step Section ===== */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-5 md:py-8 md:px-29 lg:px-19">
        <div className="grid md:grid-cols-2 md:gap-12 w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className=" text-5xl md:text-6xl font-bold text-[#000080]">
              {activeTab.toString().padStart(2, "0")}
            </h1>
            <h2 className="mt-2  mb-6 md:mb-0 text-2xl  md:text-4xl font-semibold text-[#000080]">
              Solar Project
              <br /> Analysis Services
            </h2>
          </div>
          <div>
            <p className="text-[#737373] mb-6 text-[19px]">
              At Landsking Infra, every successful solar project begins with
              precision planning. Our expert business development team
              thoroughly assesses your energy requirements, identifies the most
              efficient site locations, and evaluates multiple performance
              scenarios. We then create a detailed preliminary site plan,
              propose optimal capital investment options, and assist you in
              drafting clear, result-driven contracts for a seamless project
              kickoff.
            </p>

            <img
              src="/realstate/solar project analysis service.jpg"
              alt=" Solar Project"
              className="w-full h-52 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-5 md:py-8  md:px-29 lg:px-19">
        <div className="grid md:grid-cols-2  md:gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className=" text-5xl md:text-6xl font-bold text-[#000080]">
              02
            </h1>

            <span className="mt-2  mb-6 md:mb-0 font-semibold text-[#000080] text-2xl  md:text-4xl">
              System Designs
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-[#000000] text-[19px]">
                We transform insights into intelligent solar design. Using
                advanced simulation software, our engineers optimize every
                system parameter to ensure maximum energy output and long-term
                reliability. From selecting premium modules and inverters to
                finalizing cables and components, our design process is built
                for efficiency, precision, and performance before moving into
                procurement.
              </p>
            </div>

            <div className="mt-6 mb-3">
              <img
                src="/product/s1.jpg"
                alt="system design"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 03 - Contract Awarded */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-5 md:py-8  md:px-29 lg:px-19">
        <div className="grid md:grid-cols-2 md:gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className=" text-5xl md:text-6xl font-bold text-[#000080]">
              03
            </h1>
            <span className="mt-2 md:mb-0 mb-6 text-[#000080] font-semibold text-2xl  md:text-4xl">
              Construct
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-[#000000] text-[19px] text-justify">
              Built with precision, powered by expertise. Once the layout is
              finalized, our construction team prepares the site, installs
              mounting structures, and integrates all system components
              according to the engineered design. Each stage of
              installation—right from groundwork to final wiring—is executed
              under strict quality and safety standards to ensure flawless
              delivery.
            </p>
            <div className="mt-1 mb-3">
              <img
                src="/service.jpg"
                alt=" Construct"
                className="w-full h-69 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 04 - Detail Drawings */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-5 md:py-8  md:px-29 lg:px-19">
        <div className="grid md:grid-cols-2 md:gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className=" text-5xl md:text-6xl font-bold text-[#000080]">
              04
            </h1>
            <span className="mt-2 mb-6 md:mb-0 font-semibold text-[#000080] text-2xl  md:text-4xl">
              Testing
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6 md:mt-8 mt-0">
            <p className="text-[#000000] text-[19px] text-justify">
              We ensure every system performs at its peak from day one.After
              installation, our specialists conduct thorough mechanical and
              electrical testing, including checks on structural integrity,
              grounding, and connectivity. Once verified, the system is
              seamlessly integrated with the grid (or off-grid network),
              ensuring stable, safe, and optimized energy flow for years to
              come.
            </p>
          </div>
        </div>
      </div>
      {/* ===== CTA Section ===== */}

      {/* ===== Key Features ===== */}
      <section className="w-full bg-white py-6 lg:py-12 px-4 sm:px-6 md:px-25 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className=" text-[#000080] text-2xl md:mb-5  md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
                Why Choose Landsking Infra for Solar EPC?
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Building Tomorrows Energy Infrastructure — Today. We specialize
                in complete design-to-delivery solutions backed by engineering
                precision, project management excellence, and sustainable
                innovation. With over 50+ MW of installed capacity, 120+
                completed projects, and a 98% client retention rate, we deliver
                reliability and performance you can trust
              </p>
            </div>

            <div className="relative w-full h-34   md:h-[380px] lg:h-[450px] md:mb-3 mb-14 ">
              <img
                src="/solar epc.jpeg"
                alt="  Why Choose Landsking Infra for Solar EPC?"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
