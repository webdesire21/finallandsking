"use client";
import { useState } from "react";

import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaCube,
} from "react-icons/fa";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";

export default function Greenbuilding() {
  interface FAQ {
    question: string;
    answer: string;
  }

  // ===== FAQ =====

  const possibilities = [
    {
      subtitle: "Concept & Detailed Engineering",
      description:
        "We provide complete engineering support from concept designs to detailed engineering, ensuring accuracy and reliability across the entire design cycle.",
      image: "/industry.jpg",
    },
    {
      subtitle: "2D Drawings",
      description:
        "Creation of precise 2D drawings using AutoCAD to establish the foundation for engineering and construction workflows.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Assembly Drawings",
      description:
        "Development of assembly drawings for walls, columns, and beams using REVIT for clarity and construction accuracy.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Fabrication & Piping Layouts",
      description:
        "Generation of fabrication drawings in 2D and piping layouts for HVAC using AutoCAD and other advanced software.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Family Creation",
      description:
        "REVIT-based family creation to streamline design elements, making models reusable and efficient.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Design Automation Sheets",
      description:
        "Automating repetitive design tasks with iLOGIC sheets to enhance efficiency and reduce turnaround time.",
      image: "/industry.jpg",
    },
    {
      subtitle: "3D CAD Models",
      description:
        "Creation of highly detailed 3D CAD models using miscellaneous advanced software for visualization and precision.",
      image: "/industry.jpg",
    },
    {
      subtitle: "BIM Content Development",
      description:
        "Building rich BIM content to support project collaboration and ensure accurate digital representation.",
      image: "/industry.jpg",
    },
    {
      subtitle: "BIM Coordination",
      description:
        "Using NAVISWORKS for BIM coordination, enabling smooth integration between multidisciplinary teams.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Advanced BIM Dimensions",
      description:
        "Providing 4D, 5D, 6D, and 7D BIM capabilities using miscellaneous platforms for comprehensive project lifecycle management.",
      image: "/industry.jpg",
    },
    {
      subtitle: "As-Built Designs & Technical Publications",
      description:
        "Delivering accurate as-built designs and supporting documentation through technical publications for long-term project reliability.",
      image: "/industry.jpg",
    },
  ];

  // ===== Features =====
  const features = [
    {
      title: "Sustainable Site Planning",
      description:
        "We design eco-friendly sites and green architecture that maximize space utilization, energy efficiency, and environmental sustainability for modern buildings.",
      icon: <FaUsers className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Modeling & Daylight Analysis",
      description:
        " Advanced energy modeling and daylight analysis optimize building performance, reduce energy consumption, and enhance occupant comfort and productivity.",
      icon: <FaSearch className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Rainwater Harvesting & Water Reuse",
      description:
        " We implement rainwater harvesting and water reuse systems to conserve resources, minimize wastage, and support sustainable building operations.",
      icon: <FaLightbulb className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Solar PV & Renewable Energy Integration",
      description:
        " Integration of solar PV and renewable energy solutions ensures clean, cost-efficient, and environmentally responsible power generation.",
      icon: <FaProjectDiagram className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Green HVAC, Lighting & Materials",
      description:
        " We deploy energy-efficient HVAC systems, sustainable lighting solutions, and eco-friendly building materials to reduce carbon footprint.",
      icon: <FaCube className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Eco-resorts",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Smart Buildings",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Hospitals & Public Buildings",
      link: "#",
    },
  ];
  const areas = [
    {
      id: 1,
      title: "Prefabricated",
      subtitle: "Prefabricated Multi-Storey Building Manufacturer",
      description:
        "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
      image: "/menupageimg/peb3.jpg",
    },
    {
      id: 2,
      title: "Warehouse",
      subtitle: "Warehouse",
      description:
        "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions to meet industrial and commercial demands.",
      image: "/menupageimg/peb4.png",
    },
    {
      id: 3,
      title: "Industrial Shed",
      subtitle: "Prefabricated Industrial Shed Manufacturers",
      description:
        "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
      image: "/menupageimg/peb5.png",
    },
    {
      id: 4,
      title: "Factory Building",
      subtitle: "Factory Building Solutions",
      description:
        "Our factory buildings are designed to provide a safe, efficient, and scalable infrastructure for manufacturing operations across multiple sectors.",
      image: "/menupageimg/peb8.jpg",
    },
    {
      id: 5,
      title: "Industrial Enclosures",
      subtitle: "Industrial Enclosures",
      description:
        "We deliver customized industrial enclosures that ensure safety, reliability, and protection of equipment while optimizing operational performance.",
      image: "/menupageimg/peb6.jpg",
    },
    {
      id: 6,
      title: "Cold Storage",
      subtitle: "Cold Storage & Cold Room Manufacturer",
      description:
        "Our advanced cold storage and cold room solutions are engineered to maintain precise temperatures, ensuring freshness and quality for perishable goods.",
      image: "/menupageimg/peb7.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/peb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Green Buildings
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Landsking Infra is dedicated to delivering eco-friendly,
              energy-efficient, and sustainable infrastructure that minimizes
              environmental impact.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative order-2 mt-10 md:mt-20 flex justify-center md:justify-end">
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

      {/* description */}
      <section className="bg-white py-12 px-4 md:px-18">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Landsking Infra – Green Building Solutions
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed mt-3 text-justify">
              Landsking Infra is dedicated to delivering eco-friendly,
              energy-efficient, and sustainable infrastructure that minimizes
              environmental impact. Our green building solutions focus on
              reducing carbon footprint, lowering operational costs, and
              enhancing occupant well-being by adhering to IGBC, GRIHA, and LEED
              standards. We employ certified green building consultants and
              architects to implement an integrated design approach with
              performance validation, ensuring each project meets sustainability
              goals. Our team also specializes in retrofitting existing
              buildings into high-performance green structures. By prioritizing
              long-term energy savings and health-focused environments,
              Landsking Infra creates future-ready, environmentally responsible
              buildings that benefit both people and the planet.
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/water/Green Building Solutions.jpg"
              alt=" green building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-3  md:py-12 px-6 md:px-12 lg:px-15">
        <div className=" mx-auto text-center md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Services of{" "}
            <span className="text-[#000080]">Landsking Infra Pvt. Ltd.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-justify">
            Our certified green building experts design and retrofit projects to
            meet IGBC, GRIHA, and LEED standards, ensuring long-term energy
            savings and healthier spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600  text-justify text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
}
