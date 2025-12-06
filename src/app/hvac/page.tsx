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
} from "react-icons/fa";
// import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";

export default function Hvac() {
  interface FAQ {
    question: string;
    answer: string;
  }

  // ===== FAQ =====

  // ===== Pre-engineered product possibilities =====
  const possibilities = [
    {
      subtitle: "Centralized HVAC Systems",
      description:
        "Efficient centralized HVAC systems provide consistent climate control across large commercial and industrial facilities.",
      image: "/hvac/HVAC three.jpg",
    },
    {
      subtitle: "VRF/VRV Technology",
      description:
        " Advanced VRF/VRV systems offer flexible, energy-efficient heating and cooling for varied spaces",
      image: "/hvac/VRFVRV Technology.png",
    },
    {
      subtitle: "Chillers and Cooling Towers",
      description:
        "High-performance chillers and cooling towers ensure reliable temperature regulation and optimized energy usage.",
      image: "/hvac/Chillers and Cooling Towers.jpg",
    },
    {
      subtitle: "AHUs and Ventilation Systems",
      description:
        " Air handling units and ventilation systems maintain air quality and comfortable indoor environments.",
      image: "/hvac/AHUs and Ventilation Systems.jpg",
    },
  ];

  // ===== Features =====
  const features = [
    {
      title: "Customized, Scalable HVAC Solutions",
      description:
        " Tailored HVAC systems designed to meet diverse facility and operational needs.",
      icon: <FaUsers className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Advanced BIM Support for Seamless Integration",
      description:
        "BIM-driven design ensures precise planning, integration, and project coordination.",
      icon: <FaSearch className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Certified Engineers and Technicians",
      description:
        "Skilled professionals manage installation, commissioning, and maintenance for reliable performance.",
      icon: <FaLightbulb className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Audits & Retrofit Recommendations",
      description:
        " Optimize existing HVAC systems to save energy, costs, and enhance efficiency.",
      icon: <FaProjectDiagram className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  // ===== Slides for Swiper =====
  const slides = [
    {
      image: "/hvac/System Design & 3D Modeling.jpg",
      title: "System Design & 3D Modelingr",
      link: "#",
    },
    {
      image: "/hvac/Energy-Efficient System Integration (1).jpg",
      title: "Energy-Efficient System Integration",
      link: "#",
    },
    {
      image: "/hvac/Installation & Commissioning.jpg",
      title: "Installation & Commissioning",
      link: "#",
    },
    {
      image: "/hvac/AMC & Performance Monitoring.jpg",
      title: "AMC & Performance Monitoring",
      link: "#",
    },
  ];

  // ===== Areas for dropdown =====
  const areas = [
    {
      id: 1,
      title: "System Design & 3D Modeling",
      subtitle: "System Design & 3D Modeling",
      description:
        "We create precise HVAC system designs using 3D modeling, enabling accurate visualization, seamless integration, and efficient planning for diverse commercial and industrial projects.",
      image: "/hvac/System Design & 3D Modeling.jpg",
    },
    {
      id: 2,
      title: "Energy-Efficient System Integration",
      subtitle: "Energy-Efficient System Integration",
      description:
        " Our solutions integrate high-performance, energy-efficient HVAC systems that reduce operational costs, improve climate control, and optimize indoor air quality across facilities",
      image: "/hvac/Energy-Efficient System Integration.jpg",
    },
    {
      id: 3,
      title: "Installation & Commissioning",
      subtitle: "Installation & Commissioning",
      description:
        "Certified engineers handle professional installation and commissioning of HVAC systems, ensuring reliability, compliance with standards, and smooth, hassle-free project execution",
      image: "/hvac/Installation & Commissioning.jpg",
    },
    {
      id: 4,
      title: "AMC & Performance Monitoring",
      subtitle: "AMC & Performance Monitoring",
      description:
        " We provide annual maintenance contracts (AMC) and continuous performance monitoring to maintain efficiency, prevent downtime, and extend the lifespan of HVAC systems",
      image: "/hvac/AMC & Performance Monitoring.jpg",
    },
  ];

  // ===== States =====
  const [selectedId, setSelectedId] = useState(areas[0].id);
  const selectedArea = areas.find((a) => a.id === selectedId);
  const [open, setOpen] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-20">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              EPC Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              EPC (Engineering, Procurement, and Construction) solutions,
              ensuring a seamless journey from concept to completion.
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

      {/* description */}
      <section className="bg-white py-12 px-4 md:px-22">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              HVAC SERVICES{" "}
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed mt-3 text-justify">
              Landsking Infra provides advanced HVAC (Heating, Ventilation, and
              Air Conditioning) solutions for commercial, industrial, and
              institutional spaces, delivering precise climate control, improved
              air quality, and energy efficiency. Our customized, scalable
              systems cater to diverse facilities, including offices, industrial
              plants, educational institutions, and healthcare centers. Using
              BIM (Building Information Modeling), we ensure accurate planning,
              seamless integration, and efficient execution. Our certified
              engineers and skilled technicians manage installation,
              commissioning, and maintenance to guarantee reliable, safe, and
              long-lasting performance. We also offer energy audits and
              retrofits to optimize existing systems, reduce costs, and enhance
              sustainability. At Landsking Infra, we combine technology,
              expertise, and client-focused solutions to create HVAC systems
              that are efficient, compliant, and future-ready, providing
              comfortable and productive environments across industries
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/hvac/HVAC one.JPG"
              alt=" hvac"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-18">
        <div className=" mx-auto text-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why Choose{" "}
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
                <p className="text-gray-600 text-sm leading-relaxed">
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
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
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
      {/* special section */}

      {/* end special section */}

      {/* why choose us */}
      <section className="w-full bg-white py-5 lg:py-16 px-6  lg:px-20 md:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Become a Customer
            </h2>

            <p className="text-justify text-gray-700">
              Landsking Infra Pvt. Ltd. is your one-stop solution for all
              building and infrastructure requirements. Our pre-engineered steel
              buildings are carefully designed and fabricated to match your
              specific needs. Each structure is built in strict adherence to
              international standards, with components meticulously engineered
              for seamless compatibility. This ensures durability, efficiency,
              and performance across every project we deliver.
            </p>
            <Link href="/contact">
              <button className="border border-[#000080] mt-4 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/hvac/HVAC two.jpg"
              alt="Why Choose hvac"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}

      <ContactSection />

      <Footer />
    </>
  );
}
