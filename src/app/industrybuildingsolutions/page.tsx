"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaIndustry,
  FaBuilding,
  FaHospital,
  FaRoad,
  FaStamp,
} from "react-icons/fa"; // ✅ Added relevant icons
import { motion } from "framer-motion";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";
import Brand from "yes/Components/Brand";
import Navbar from "yes/Components/Navbar";
import Industrybrand from "yes/Components/Industrybrand";

export default function Industrybuildingsolutions() {
  const features = [
    {
      title: "Industrial Building Construction",
      description:
        "We construct factories, warehouses, and logistics hubs with robust structures, efficient layouts, and compliance with industrial standards for smooth operations.",
      icon: <FaIndustry className="text-[#000080] text-6xl mb-4" />, // 🏭
    },
    {
      title: "Commercial Complexes",
      description:
        "Design and build multi-storey offices and commercial complexes, ensuring functional layouts, aesthetic appeal, and operational efficiency for businesses.",
      icon: <FaBuilding className="text-[#000080] text-6xl mb-4" />, // 🏢
    },
    {
      title: "Institutional Infrastructure",
      description:
        "Develop schools, hospitals, and R&D centers with safe, sustainable, and fully compliant infrastructure supporting education, healthcare, and research activities.",
      icon: <FaHospital className="text-[#000080] text-6xl mb-4" />, // 🏥
    },
    {
      title: "Public Infrastructure",
      description:
        "Plan and execute roads, bridges, drains, and utilities, enhancing urban connectivity, safety, and long-term public service efficiency.",
      icon: <FaRoad className="text-[#000080] text-6xl mb-4" />, // 🛣️
    },
    {
      title: "PE Stamping Services",
      description:
        "We offer licensed P.E. stamping and sealing for engineering documents including reports, calculations, and construction drawings across various jurisdictions.",
      icon: <FaStamp className="text-[#000080] text-6xl mb-4" />, // 🧾
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
      <Navbar />
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/banner.jpg"
          alt="public office"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Industrial Building Solutions{" "}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl"
          >
            Building a sustainable future with clean energy solutions
          </motion.p>
        </div>
      </div>

      {/* Features Section with Icons */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
            Building & Infrastructure / Industry Building Solutions
          </h2>
          <p className="text-gray-600  max-w-2xl mx-auto mb-12">
            Landsking Infra provides end-to-end construction and infrastructure
            solutions across industrial, commercial, institutional, and public
            sectors, delivering precise engineering, structural integrity, and
            timely execution while tailoring multidisciplinary solutions to meet
            each project’s unique requirements.
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
                <p className="text-gray-600 text-justify text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Industrybrand />
      <Footer />
    </>
  );
}
