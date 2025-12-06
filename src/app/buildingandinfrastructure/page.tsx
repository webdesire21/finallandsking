"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaTools, FaShieldAlt, FaCogs } from "react-icons/fa";
import {
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
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";

import Pebheader from "yes/Components/Pebheader";
import ContactSection from "yes/Components/ContactSection";

export default function Buildingandinfrastructure() {
  interface FAQ {
    question: string;
    answer: string;
  }

  // ===== FAQ =====
  const faqs: FAQ[] = [
    {
      question: "What is a factory building?",
      answer:
        "A factory building is a structure designed to house manufacturing or production operations.",
    },
    {
      question: "What materials are used in factory building construction?",
      answer:
        "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency.",
    },
    {
      question: "What are the benefits of prefabricated factory buildings?",
      answer:
        "They are faster to build, cost-effective, customizable, and more sustainable.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from traditional buildings?",
      answer:
        "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost.",
    },
    {
      question: "Can factory buildings be customized?",
      answer:
        "Yes, they can be tailored to specific design, size, and operational requirements.",
    },
    {
      question:
        "How long does it take to construct a prefabricated factory building?",
      answer:
        "Construction time depends on the size and complexity but is generally much faster than traditional methods.",
    },
  ];

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

  const features = [
    {
      title: "Collaborative Analysis",
      description:
        "Detailed study of the building design with open discussions alongside your in-house team to align goals.",
      icon: <FaUsers className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Opportunity Discovery",
      description:
        "Careful research to uncover new opportunities that add measurable value to your project.",
      icon: <FaSearch className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Concept Development",
      description:
        "Generating findings to create a customized concept tailored to your operational needs.",
      icon: <FaLightbulb className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "BIM Prototyping",
      description:
        "Presenting a BIM prototype that addresses all critical project parameters in detail.",
      icon: <FaProjectDiagram className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "3D Visualization",
      description:
        "Crafting high-precision 3D models to support global marketing and streamlined construction execution.",
      icon: <FaCube className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Risk Mitigation & Support",
      description:
        "Continuous product analysis to minimize risks, avoid potential failures, and ensure smooth delivery.",
      icon: <FaShieldAlt className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Onsite Troubleshooting",
      description:
        "Expert support for troubleshooting and adjustments after the project goes live, ensuring long-term reliability.",
      icon: <FaTools className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Integrated Collaboration",
      description:
        "Seamless work with architects, engineers, contractors, and manufacturers— all components unified in a single BIM model.",
      icon: <FaCogs className="text-[#000080] text-[28px] mb-4" />,
    },
    {
      title: "Progress Tracking",
      description:
        "Clients can access REVIT libraries to monitor progress, marking completion of each phase efficiently.",
      icon: <FaChartLine className="text-[#000080] text-[28px] mb-4" />,
    },
  ];

  // ===== Slides for Swiper =====
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
    { image: "/expertise/third.png", title: "Factory Building", link: "#" },
    { image: "/expertise/third.png", title: "Warehouse", link: "#" },
  ];

  // ===== Areas for dropdown =====
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

  // ===== States =====
  const [selectedId, setSelectedId] = useState(areas[0].id);
  const selectedArea = areas.find((a) => a.id === selectedId);
  const [isOpen, setIsOpen] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

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
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      <Pebheader />
      <section className="relative  flex items-center text-white overflow-hidden md:h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left px-4 sm:px-6 lg:px-0 pt-20 sm:pt-24 lg:pt-32">
            <h1 className="text-[28px] sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6">
              Pre Engineered Buildings
            </h1>
            <p className="text-base  text-justify sm:text-lg md:text-xl max-w-full sm:max-w-lg mx-auto lg:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
            </p>
          </div>

          <div className="w-full relative mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="pb-10"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[250px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        href={slide.link}
                        className="mt-3 inline-block text-[#000080] hover:underline"
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
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl  md:text-[28px] font-extrabold text-[#000080] leading-snug  ">
              Buildings{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 text-justify mb-4 leading-relaxed">
              It is extremely important for CAD architects to understand the
              concept of building design for public infrastructure. Equally
              necessary is the alignment of such professionals with service
              providers possessing extensive knowledge in construction design.
              We at Landsking Infra Pvt. Ltd. offer a suite of Virtual and
              Design Construction expertise to clients. Our company collaborates
              and works across a wide range of construction projects, including
            </p>

            <p className="text-gray-700  text-justify mb-4 leading-relaxed">
              <span className="font-bold">Landsking Infra pvt.ltd</span> A
              Commercial and High-Rise Buildings,Production Facilities,Data
              Centres,Health and Educational Constructions,Industrial and
              Distribution Facilities.When our specialists are entrusted with
              designing a new facility, they focus on intricate details and
              specifications according to construction plans. Our engineers are
              adept at classifying critical processes, raw materials, resources,
              and value supply chains to create appropriate digital models of
              proposed buildings. As digitization is essential, we leverage the
              latest CAD software to generate multifaceted BIM (Building
              Information Modeling) apparatus. Our experience across industries
              assists clients in visualizing the final structure through
              automated 2D and 3D CAD drawings.
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/menupageimg/peb2.jpg"
              alt=" Buildings"
              loading="lazy"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl  md:text-[28px] font-bold text-gray-800 mb-6">
            Key Features of{" "}
            <span className="text-[#000080]">
              Landsking Infra Pvt. Ltd. PEB Structures
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
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
      {/* explore conettt */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl  md:text-[28px] font-bold text-[#000080] mb-8">
          Pre Engineered Products
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left menu / Dropdown */}
          <div className="bg-[#000080] text-white rounded-lg w-full md:w-1/4">
            {/* Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-5 py-4 text-left w-full transition bg-blue-800 font-bold"
              >
                <span className="text-sm opacity-70">
                  {String(
                    areas.findIndex((a) => a.id === selectedId) + 1
                  ).padStart(2, "0")}
                </span>
                <span>{selectedArea?.title}</span>
              </button>

              {isOpen &&
                areas.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                      selectedId === area.id
                        ? "bg-[#000080]  font-bold"
                        : "hover:bg-[#000080]  text-gray-300"
                    }`}
                  >
                    <span className="text-sm opacity-70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{area.title}</span>
                  </button>
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex flex-col">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? "bg-[#000080]  font-bold"
                      : "hover:bg-[#000080]  text-gray-300"
                  }`}
                >
                  <span className="text-sm opacity-70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{area.title}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedArea && (
            <div className="bg-white rounded-lg shadow overflow-hidden w-full md:w-3/4 mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row">
                {/* Text */}
                <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                    {selectedArea.subtitle}
                  </h3>
                  <p className="text-gray-700 mb-5 text-justify">
                    {selectedArea.description}
                  </p>
                  <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                    GET A QUOTE
                  </button>
                </div>

                <div className="w-full md:w-1/2">
                  <Image
                    src={selectedArea.image}
                    alt={selectedArea.subtitle}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* explore content */}

      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <Image
              src="/menupageimg/peb8.jpg" // replace with your real factory image
              alt="Manufacturing Facility"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl  md:text-[28px] font-bold text-gray-800">
                Our Manufacturing Capabilities
              </h2>
            </div>

            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong>Landsking Infra Pvt. Ltd.</strong> operates a modern,
              fully-integrated PEB manufacturing facility where every stage—
              from design and fabrication to finishing and dispatch—takes place
              under one roof. This seamless process ensures superior quality,
              faster delivery, and reliable performance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Our infrastructure is powered by a highly skilled team of
              engineers, supported with state-of-the-art CNC machinery, robotic
              welding systems, and high-capacity fabrication tools. These
              advanced resources enable us to deliver large-scale{" "}
              <span className="font-semibold">steel structures</span> with
              precision and efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              With strict quality checks at every stage—from automated
              fabrication to final assembly—we ensure that all components meet
              global industry standards. Whether it s a standard warehouse,
              factory building, or a customized industrial project,{" "}
              <strong>Landsking Infra Pvt. Ltd.</strong> provides dependable,
              cost-effective, and timely{" "}
              <span className="font-semibold">PEB solutions across India.</span>
            </p>
          </div>
        </div>
      </section>
      {/* endcapill */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl  md:text-[28px] font-bold text-center mb-6">
            Inclusive Services{" "}
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-justify text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Below */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl  md:text-[28px] font-bold text-[#000080] text-center mb-8">
            Steel Tubes for Building and Infrastructure
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Text Section */}
            <div>
              <p className="text-gray-700  text-justify text-base leading-relaxed mb-4">
                With the growing adoption of virtual technologies in
                construction, the role of lean Building Information Models (BIM)
                and pre-engineering has become vital. Globally, infrastructure
                upgrades are being driven by robotics, automation, drone-based
                surveys, and even 3D printing solutions.
              </p>

              <p className="text-gray-700 text-justify text-base leading-relaxed mb-4">
                Key infrastructure sectors where{" "}
                <span className="font-bold">Landsking Infra Pvt. Ltd.</span>{" "}
                provides support include:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-base leading-relaxed mb-4">
                <li>Power and Energy</li>
                <li>
                  Transportation Hubs (Rail & Metro Stations, Bus Terminals,
                  Tunnels, Airports)
                </li>
                <li>Stadiums and Leisure Centres</li>
              </ul>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                This technological disruption is reshaping the way
                infrastructure is designed, built, and maintained—ensuring
                sustainability, efficiency, and safety. Construction firms that
                embrace these advancements can overcome challenges in delivering
                modern infrastructure projects.
              </p>

              <p className="text-gray-700 text-base leading-relaxed text-justify">
                As urban areas continue to transform,{" "}
                <span className="font-bold">Landsking Infra Pvt. Ltd.</span> has
                earned the trust of clients by offering expertise that minimizes
                risks, enhances public safety, and integrates automated systems
                for long-term reliability.
              </p>
            </div>

            {/* Right: Image Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <Image
                src="/menupageimg/peb9.jpeg"
                alt="Steel Tubes for Building and Infrastructure"
                width={600}
                height={400}
                className="rounded-md shadow-md relative z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* end special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-[28px] font-bold text-[#000080] text-center mb-12">
            Our Support
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          {/* Support Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-base leading-relaxed">
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Research & Surveys
              </h3>
              <p>
                Surveys are conducted through testing, research, site
                inspections, and studying existing infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Compliance & Policies
              </h3>
              <p>
                All planning and designing considers compliance standards,
                including adherence to environmental policies where required.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Collaborative Solutions
              </h3>
              <p>
                Solutions are developed after detailed discussions with internal
                teams to ensure practical and efficient outcomes.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Safety Standards
              </h3>
              <p>
                Designs are developed to meet safety standards, ensuring
                properties perform optimally and securely.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">Certifications</h3>
              <p>
                Environmental and project-specific certifications are provided
                to ensure approvals and green signals for commencement.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Energy Sector Support
              </h3>
              <p>
                Evaluations, lifecycle studies, inspections, and regulatory
                checks are carried out for optimal energy asset performance.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">Virtual Models</h3>
              <p>
                Virtual models guide the project seamlessly from the initial
                stages through to final completion.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                Feasibility Studies
              </h3>
              <p>
                Detailed feasibility studies are conducted for ambitious
                projects, including large-scale highway developments.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-[#000080] mb-2">
                3D Data & Analysis
              </h3>
              <p>
                We provide advanced 3D geometric designs and data analytics to
                support successful project execution.
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 text-center text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Over the last 40 years,{" "}
              <span className="font-bold">Landsking Infra Pvt. Ltd.</span> has
              fulfilled its promise to numerous clients across the AEC industry
              — from contractors and architects to fabricators, consultants, MEP
              contractors, PEB companies, EPCs, OEMs, solution providers, and
              system integrators. By partnering with us, you can avoid
              unnecessary overheads and ensure smooth progress in urban planning
              and infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-6 flex items-center">
              Become a Customer
            </h2>

            <p className="text-justify text-gray-600">
              Landsking Infra Pvt. Ltd. is your one-stop solution for all
              building and infrastructure requirements. Our pre-engineered steel
              buildings are carefully designed and fabricated to match your
              specific needs. Each structure is built in strict adherence to
              international standards, with components meticulously engineered
              for seamless compatibility. This ensures durability, efficiency,
              and performance across every project we deliver.
            </p>
            <Link href="/peb-contact">
              <button className="border border-[#000080] mt-4 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <Image
              src="/industry.jpg" // replace with your image
              alt="building and infrastructure requirements "
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
