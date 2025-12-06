"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

import { FaFileAlt, FaClipboardList } from "react-icons/fa";

export default function Pebbuildingservice() {
  interface FAQ {
    question: string;
    answer: string;
  }

  const tools = [
    "Tekla",
    "SDS/2",
    "Autodesk Revit Suite (MEP, Architecture, Structure)",
    "Metal Building Software (MBS)",
    "AutoCAD",
    "X-Steel",
    "STAAD Pro",
    "3D Max Studio",
    "Microstation",
    "Naviswork",
    "Rebar CAD",
  ];
  const features = [
    {
      title: "Design & Detailed Engineering",
      description:
        "Innovative and precise engineering solutions from concept to execution, ensuring safety, sustainability, and durability.",
      icon: <FaDraftingCompass className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Permit & Shop Drawings",
      description:
        "Meticulously prepared permit drawings for smooth approvals and accurate shop drawings for flawless fabrication and installation.",
      icon: <FaFileAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "BOM / MTO",
      description:
        "Comprehensive Bill of Materials and Material Take-Off services that streamline procurement and ensure cost-effective, timely delivery.",
      icon: <FaClipboardList className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  const possibilities = [
    {
      subtitle: "Building Components",
      description:
        "High-quality primary and secondary members including rigid frames, columns, beams, purlins, girts, cladding, and trusses – the backbone of every structure.",
      image: "/pebone.jpeg",
    },
    {
      subtitle: "Building Accessories",
      description:
        "Enhance building performance with skylights, ventilators, gutters, insulation, doors, louvers, and fasteners – designed for seamless integration.",
      image: "/pebtwo.jpeg",
    },
    {
      subtitle: "Building Additions",
      description:
        "Flexible expansion options like additional bays, mezzanine floors, and end-wall/side-wall extensions to match your business growth.",
      image: "/PEB.jpg",
    },
    {
      subtitle: "Building Systems",
      description:
        "Complete pre-engineered systems for industrial, commercial, and institutional projects including warehouses, showrooms, schools, hospitals, and more.",
      image: "/peb4.jpeg",
    },
    {
      subtitle: "Design Services",
      description:
        "End-to-end design support with 3D modeling, structural analysis, and international standard compliance, ensuring functionality and aesthetics.",
      image: "/pebfive.jpeg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

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
  const [selectedId, setSelectedId] = useState(3);

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

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      label: "Years of Expertise",
      value: 20,
      suffix: "+",
      icon: <FaAward className="text-[#000080] text-xl" />,
    },
    {
      label: "Projects Delivered",
      value: 500,
      suffix: "+",
      icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
    },
    {
      label: "Nationwide Presence",
      value: 25,
      suffix: "+ States",
      icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
    },
    {
      label: "Certified Processes",
      value: 100,
      suffix: "%",
      icon: <FaCertificate className="text-[#000080] text-xl" />,
    },
  ];

  return (
    <>
      <Pebheader />
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
              PRE ENGINEERED BUILDINGS{" "}
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
                    <img
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

      {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              PRE ENGINEERED BUILDINGS{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              Landsking Infra is your one-stop destination for all building
              requirements, catering to diverse customer needs. Our
              pre-engineered steel buildings are uniquely designed and precisely
              fabricated to suit your specifications. Built in strict adherence
              to international standards, these buildings consist of
              meticulously engineered components that are fully compatible with
              each other. The fabrication process takes place in
              state-of-the-art factories under stringent quality control based
              on detailed shop drawings. Each component is carefully marked,
              transported to the project site, and assembled as per erection
              drawings to ensure flawless execution. We serve industrial,
              commercial, and institutional sectors with a focus on speed,
              quality, and reliability. Our buildings are designed for rapid
              delivery and erection, while offering flexibility for future
              expansion. Engineered to withstand the harshest weather
              conditions, Landsking Infra ensures long-lasting, pre-engineered
              solutions.
            </p>

            <p className="text-gray-700 mb-4  text-justify leading-relaxed">
              What is a Pre-Engineered Building?{" "}
              <span className="font-bold">Landsking Infra pvt.ltd</span> A
              Pre-Engineered Building (PEB) is a steel structure based on a
              structural framework of primary framing (columns and rafters),
              secondary framing (purlins and girts), along with roof and wall
              sheeting, and other components. All parts are pre-fabricated in
              factories and assembled on-site, drastically reducing construction
              time compared to conventional methods.
            </p>

            <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/pebsix.jpeg"
              alt=" Buildings"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Comprehensive Building Solutions{" "}
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black text-justify">
                    {item.description}
                  </p>
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
              <ChevronLeft className="w-6 h-6 text-[#000080]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-[#000080]" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}

      {/* capiablites */}

      {/* endcapill */}

      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Services of{" "}
            <span className="text-[#000080]">
              PRE ENGINEERED STEEL BUILDINGS{" "}
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
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Our Approach to Service
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className=" list-disc space-y-4 text-gray-700 text-base leading-relaxed">
              {/* <ul className="list-disc pl-6 space-y-2"> */}
              <li>
                <span className="font-bold">
                  Systematic Use of Building Families:
                </span>{" "}
                Ensuring consistency and compatibility across all project
                components.
              </li>
              <li>
                <span className="font-bold">Comprehensive Detailing:</span>{" "}
                Covering all critical aspects of pre-engineered buildings, from
                structural elements to cladding and roofing.
              </li>
              <li>
                <span className="font-bold">Geometry Definitions:</span>{" "}
                Highlighting essential structural geometries for accurate
                fabrication and assembly.
              </li>
              <li>
                <span className="font-bold">Element Visualization:</span>{" "}
                Clearly defining which components need to be displayed for
                review and construction purposes.
              </li>
              <li>
                <span className="font-bold">Best Practices for Nesting:</span>{" "}
                Optimizing component nesting to reduce material waste and
                improve manufacturing efficiency.
              </li>
              <li>
                <span className="font-bold">Roof:</span> PUF / EPS insulated
                sandwich panels of 30 / 40 mm or PPGI roofing sheets.
              </li>
              <li>
                <span className="font-bold">Doors:</span> Insulated doors with
                all accessories will be provided from our manufacturing setup.
              </li>
              <li>
                <span className="font-bold">Windows:</span> Aluminum anodized
                sliding windows will be provided from our manufacturing setup.
              </li>
              <li>
                <span className="font-bold">Structure and Accessories:</span>{" "}
                All required supporting accessories and structures will be
                provided before project delivery.
              </li>
              <li>
                <span className="font-bold">
                  Electrical & Sanitary Fittings:
                </span>{" "}
                Electrical fittings, sanitary fittings, beds, etc., will be
                provided as per client requirements and fitted according to the
                contract.
              </li>
            </ul>

            {/* Image Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <Image
                src="/pebseven.jpeg"
                alt=" Our Approach to Service"
                width={600}
                height={400}
                className="rounded-md shadow-md relative z-20"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/cadtool.png" alt=" Tools" className="rounded-2xl" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              CAD TOOLS:
            </h2>
            <ul className="space-y-3 text-gray-700">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="w-2 h-2 mt-2 bg-[#000080] rounded-full"></span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
              Become a Customer
            </h2>

            <p>
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
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <Image
              src="/peb4.jpeg" // replace with your image
              alt="Why Choose Us as peb"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}

      <Footer />
    </>
  );
}
