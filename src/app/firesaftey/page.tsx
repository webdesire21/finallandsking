"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaCube,
  FaChartLine,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";

export default function Firesafety() {
  // ===== Pre-engineered product possibilities =====
  const possibilities = [
    {
      subtitle: "Manufacturing and Warehouses",
      description:
        " We provide tailored solutions for efficient, safe, and durable manufacturing and warehouse facilities.",
      image: "/saftey/Manufacturing and Warehouses.jpg",
    },
    {
      subtitle: "Commercial Complexes & Malls",
      description:
        " Our services enhance safety, functionality, and comfort in commercial complexes and shopping malls.",
      image: "/saftey/Commercial Complexes & Malls.jpg",
    },
    {
      subtitle: "Educational Institutions & Hospitals",
      description:
        " We deliver reliable systems ensuring safety, compliance, and efficiency for schools, colleges, and hospitals.",
      image: "/saftey/Educational Institutions & Hospitals.jpg",
    },
    {
      subtitle: "Data Centers & Server Rooms",
      description:
        " Specialized solutions maintain optimal conditions, security, and uninterrupted operations for data centers.",
      image: "/saftey/Data Centers & Server Rooms.jpg",
    },
    {
      subtitle: "High-Rise Residential & Hotels",
      description:
        " We implement systems that ensure safety, comfort, and efficiency in high-rise residences and hotels.",
      image: "/saftey/High-Rise Residential & Hotels.png",
    },
  ];

  // ===== Features =====
  const features = [
    {
      title: "NBC Compliance",
      description:
        " Projects adhere to National Building Code (NBC) standards for safety and design compliance",
      icon: <FaUsers className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "NFPA Standards",
      description:
        " All fire systems follow National Fire Protection Association (NFPA) codes for optimal safety.",
      icon: <FaSearch className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "IS & BIS Certifications",
      description:
        "We use IS and BIS-certified materials and equipment for reliable performance.",
      icon: <FaLightbulb className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Local Fire Clearances",
      description:
        " Obtain clearances from local fire authorities to ensure regulatory compliance.",
      icon: <FaProjectDiagram className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "UL & CE Certifications",
      description:
        " We implement UL and CE-certified products for international safety and quality standards.",
      icon: <FaCube className="text-[#000080] text-3xl mb-4" />,
    },

    {
      title: "ISO Fire Safety Compliance",
      description:
        " All processes follow ISO standards for consistent quality and risk management.",
      icon: <FaChartLine className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  // ===== Slides for Swiper =====
  const slides = [
    {
      image: "/saftey/Hydrant & Sprinkler Systems.jpg",

      title: "Hydrant & Sprinkler Systems",
      link: "#",
    },
    {
      image: "/saftey/fire-alarm-switch.jpg",

      title: "Fire Alarm & Sensors",
      link: "#",
    },
    {
      image: "/saftey/Turnkey Fire Systems.jpg",
      title: "Turnkey Fire Systems",
      link: "#",
    },
  ];

  // ===== Areas for dropdown =====
  const areas = [
    {
      id: 1,
      title: "Turnkey Fire Systems",
      subtitle: "Turnkey Fire Systems",
      description:
        "We provide end-to-end fire detection and suppression installation, ensuring safety, compliance, and rapid response for industrial and commercial spaces.",
      image: "/saftey/Turnkey Fire Systems.jpg",
    },
    {
      id: 2,
      title: "Fire Alarm & Sensors",
      subtitle: "Fire Alarm & Sensors",
      description:
        " Advanced fire alarm panels, smoke and heat detectors, and gas leak sensors for reliable early warning and risk mitigation.",
      image: "/saftey/fire-alarm-switch.jpg",
    },
    {
      id: 3,
      title: "Hydrant & Sprinkler Systems",
      subtitle: "Hydrant & Sprinkler Systems",
      description:
        "Installation of fire hydrants, sprinklers, and mist systems to protect property, assets, and personnel efficiently.",
      image: "/saftey/Hydrant & Sprinkler Systems.jpg",
    },
    {
      id: 4,
      title: "Emergency Lighting & Evacuation",
      subtitle: "Emergency Lighting & Evacuation",
      description:
        " Emergency lighting, exit signage, and evacuation solutions designed to guide occupants safely during fire incidents.",
      image: "/saftey/Emergency Lighting & Evacuation.jpg",
    },
    {
      id: 5,
      title: "Fire Audit & Training",
      subtitle: "Fire Audit & Training",
      description:
        "Comprehensive fire audits, risk assessments, and safety training programs to ensure preparedness, regulatory compliance, and minimized hazards.",
      image: "/saftey/Fire Audit & Training.jpg",
    },
  ];

  // ===== States =====
  const [selectedId, setSelectedId] = useState(areas[0].id);
  const selectedArea = areas.find((a) => a.id === selectedId);
  const [open, setOpen] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  // const visibleCards = 4;
  const visibleCards =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 4;

  const prevSlide = () =>
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  const nextSlide = () =>
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );

  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );

  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Fire Saftey
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Landsking Infra delivers comprehensive fire protection and safety
              solutions for industrial, commercial, and institutional facilities
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
                        href={slide.link}
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
      <section className="bg-white py-12 px-4 md:px-21">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Fire Safety{" "}
            </h2>

            <p className="text-gray-700 mb-4  text-justify leading-relaxed mt-3">
              Landsking Infra delivers comprehensive fire protection and safety
              solutions for industrial, commercial, and institutional
              facilities. Our systems are designed to mitigate risks, safeguard
              lives, and protect critical assets through intelligent design and
              rapid response mechanisms. We provide end-to-end services,
              including fire detection, alarm systems, sprinkler installation,
              emergency lighting, and suppression systems, all compliant with
              national safety codes and standards. Our team of certified
              engineers and technicians ensures precise installation,
              maintenance, and monitoring for optimal performance. By combining
              advanced technology, expert engineering, and a client-focused
              approach, Landsking Infra ensures safe, reliable, and
              code-compliant fire protection solutions tailored to every
              facility’s unique requirements.
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/saftey/"
              alt=" fire-saftey"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-20">
        <div className=" mx-auto text-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Key Features of{" "}
            <span className="text-[#000080]">
              Landsking Infra Pvt. Ltd. Fire Saftey
            </span>
          </h2>

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
      {/* explore conettt */}
      <section className="mx-auto px-4 py-10 md:px-20 lg:px-28">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4">
            <div className="lg:hidden mb-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-[#8080FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {open && (
                <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[#8080FF] ${
                        selectedId === area.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg pt-6 pb-6">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id ? "font-bold" : "hover:text-gray-300"
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {selectedArea && (
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full border border-gray-300">
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2 border-t md:border-t-0 md:border-r border-gray-300">
                <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 text-justify mb-5">
                  {selectedArea.description}
                </p>
                <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                  Contact{" "}
                  <span className="p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              <div className="w-full md:w-1/2 relative">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* benefits end */}

      {/* end why choose us */}

      <ContactSection />

      <Footer />
    </>
  );
}
