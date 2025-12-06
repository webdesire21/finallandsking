"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Brand from "../../Components/Brand";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Link from "next/link";

export default function Sandwichpanels() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "PUF Panels",
      subtitle: "PUF Panels",
      description:
        "PUF panels offer excellent thermal insulation, energy efficiency, and durability, ideal for cold storage and prefabricated constructions.",
      image: "/menupageimg/sap-pub.jpg",
    },
    {
      id: 2,
      title: "Rockwool Panel",
      subtitle: "Rockwool Panel",
      description:
        "Rockwool panels provide thermal and acoustic insulation with strong fire resistance, perfect for factories and studios.",
      image: "/menupageimg/sp-Rockwool-Panel.jpg",
    },
    {
      id: 3,
      title: "Glass Wool Panels",
      subtitle: "Glass Wool Panels",
      description:
        "Glass Wool Panels are lightweight, fire-resistant, and offer great thermal and noise insulation for homes and offices.",
      image: "/menupageimg/sandwich-glasswool-panel.png",
    },
    {
      id: 4,
      title: "EPS Panels",
      subtitle: "EPS Panels",
      description:
        "EPS panels are lightweight, affordable, and thermally efficient, suitable for warehouses and commercial buildings.",
      image: "/menupageimg/sp-eps.png",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is an Insulated Sandwich Panel (ISP)?",
      answer:
        "It is a lightweight, factory-engineered composite that uses a high-density insulating material, such as PIR or PUF, securely bonded between two rigid, corrosion-resistant steel facings",
    },
    {
      question: "What is the main structural advantage of using ISPs?",
      answer:
        "ISPs offer an exceptional weight-to-span capability, requiring fewer foundational supports and allowing for rapid deployment while preserving high rigidity against lateral forces.",
    },
    {
      question: "How effective are ISPs at thermal insulation?",
      answer:
        "Due to the cores low Lambda value, ISPs establish a continuous thermal barrier, guaranteeing peak energy efficiency and drastically reducing the operational load on HVAC systems.",
    },
    {
      question: "Which types of insulation cores are considered high-grade?",
      answer:
        "Industry leaders prioritize PIR (Polyisocyanurate) cores due to their molecular structure, which provides a significantly enhanced fire resistance rating over standard PUF alternatives.",
    },
    {
      question:
        "Are sandwich panels effective for soundproofing industrial facilities?",
      answer:
        "Yes. The dense, multi-layered assembly contributes to superior Sound Reduction Index performance, making them essential for mitigating machinery noise and improving worker welfare.",
    },
    {
      question:
        "How does an ISP contribute to a buildings fire safety profile?",
      answer:
        "The use of a PIR core is critical for risk mitigation; these panels are rigorously tested to ensure low smoke emission and controlled burn characteristics compliant with safety codes.",
    },
    {
      question:
        "What makes ISPs ideal for specialized applications like cold storage?",
      answer:
        "Their engineered precision sealing systems prevent moisture migration and temperature fluctuation, making them the most reliable solution for maintaining critical environmental setpoints.",
    },
  ];

  const possibilities = [
    {
      subtitle: "Industrial & Commercial Use",
      description:
        "Ideal for prefabricated industrial buildings, warehouses, and commercial setups—sandwich panels offer strong structural integrity and excellent insulation for long-term use.",
      image: "/menupagetwo/ind-2.jpeg",
    },
    {
      subtitle: "Cold Storage & Clean Rooms",
      description:
        "Perfect for cold storage units, clean rooms, and temperature-sensitive environments, thanks to their superior thermal performance and airtight sealing.",
      image: "/new-images/cold-room-2.jpg",
    },
    {
      subtitle: "Site & Workforce Facilities",
      description:
        "Used extensively in site offices, worker accommodations, and modular cabins for their quick installation, durability, and low-maintenance design.",
      image: "/preimages/low.jpg",
    },
    {
      subtitle: "Institutional & Temporary Structures",
      description:
        "Well-suited for healthcare units, schools, and both temporary and permanent setups—combining speed, safety, and energy efficiency in one solution.",
      image: "/sectorimg/h.jpg",
    },
    {
      subtitle: "Residential & Modular Housing",
      description:
        "Sandwich panels are a smart choice for modular homes, prefab villas, and residential extensions, offering energy efficiency, speed of construction, and lasting comfort.",
      image: "/menupageimg/mod13.jpg",
    },
    {
      subtitle: "Agricultural & Livestock Facilities",
      description:
        "Widely used in agro-based structures, including storage sheds, dairy units, and poultry farms, due to their insulation performance and resistance to harsh conditions.",
      image: "/industry.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCards(1); // mobile
      else if (width < 1024) setVisibleCards(2); // tablet
      else setVisibleCards(4); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 >= possibilities.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? possibilities.length - 1 : prev - 1));
  };

  // slice visible cards dynamically
  const cardsToShow = possibilities.slice(
    startIndex,
    startIndex + visibleCards
  );
  if (cardsToShow.length < visibleCards) {
    cardsToShow.push(
      ...possibilities.slice(0, visibleCards - cardsToShow.length)
    );
  }

  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false); // for mobile dropdown

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/menupageimg/sap-pub.jpg",
      title: "PUF Panels",
    },

    {
      image: "/menupageimg/sp-eps.png",
      title: "EPC Panels",
    },
    {
      image: "/menupageimg/sp-Rockwool-Panel.jpg",
      title: "Rockwool Panel",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
          aria-label="Sandwich panels video:Sandwich panels are high-performance construction materials
              comprising two outer metal sheets and an inner insulating core
              made of PUR/PIR, EPS, Rockwool, or Glasswool"
        >
          <source src="/video/sandwich.mp4" type="video/mp4" />
          Your browser does not support the video tag. This video showcases
          Sandwich panels are high-performance construction materials comprising
          two outer metal sheets and an inner insulating core made of PUR/PIR,
          EPS, Rockwool, or Glasswool.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Sandwich Panels
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Sandwich panels are high-performance construction materials
              comprising two outer metal sheets and an inner insulating core
              made of PUR/PIR, EPS, Rockwool, or Glasswool.
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
      <section className="bg-white  py-8 md:py-12 px-4  md:px-12 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug mb-4   ">
              Premium Insulation Panels Designed for Modern Construction{" "}
            </h2>

            <p className="text-gray-600 text-justify mb-4 leading-relaxed ">
              Landsking Infra stands as one of India's top manufacturers of
              sandwich panels, providing a diverse selection of insulated panels
              designed for superior thermal performance, robust structural
              strength, and fast installation. Equipped with both continuous and
              discontinuous production lines, we deliver consistent quality,
              precision, and adaptability for projects of all sizes—from
              large-scale developments to custom builds.{" "}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Our sandwich panels are widely trusted across various sectors,
              including warehouses, cold storage facilities, agricultural
              buildings, pharmaceutical structures, industrial complexes, and
              commercial spaces.
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/sp1.jpg"
              width={700}
              height={450}
              alt=" Insulation Panels Designed for Modern Construction"
              className="rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-6 md:py-12 px-6 md:px-12 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <img
              src="/menupageimg/sp2.png" // replace with your real factory image
              alt=" Advanced Insulating Capabilities of Sandwich Panels"
              width={700}
              height={450}
              className="rounded-md shadow-md  object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] ">
                Advanced Insulating Capabilities of Sandwich Panels
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Sandwich panels gain their structural integrity from a core
              insulating layer bonded between two rigid metal sheets. This
              advanced design enhances load-bearing strength while offering
              excellent thermal insulation, moisture protection, and
              soundproofing performance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Sandwich panels reduce heat transfer, helping to maintain stable
              indoor temperatures while lowering energy usage and
              air-conditioning expenses—making them ideal for buildings with
              constant occupancy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              With fast installation, extended durability, and low maintenance
              requirements, they serve as a highly efficient alternative to
              conventional masonry in contemporary construction.
            </p>
          </div>
        </div>
      </section>
      {/* endcapill */}
      {/* explore conettt */}
      <section className="mx-auto px-4 py-10 md:px-15 lg:px-28">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8">
          Our Products
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

            <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg pt-15 pb-15">
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
                <p className="text-gray-600 text-justify mb-5">
                  {selectedArea.description}
                </p>
                <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                  <a
                    href="/peb-contact"
                    className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                  >
                    Contact{" "}
                    <span className="p-1 rounded-full text-[#000080]">→</span>
                  </a>
                </button>
              </div>

              {/* <div className="w-full md:w-1/2 relative">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="w-full md:w-1/2 relative">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-[345px] object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:mx-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Applications of Sandwich Panels
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500">
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
                  <p className="text-sm text-justify text-black">
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
      {/* special section */}
      <section className="bg-white py-12">
        <div className="md:mx-8 mx-auto px-6 md:px-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Why Choose Landsking Infra Sandwich Panels?
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <img
                src="/menupageimg/sp3.jpg"
                alt=" Sandwich Panels"
                width={700}
                height={450}
                className="rounded-md shadow-md  object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-600 text-justify leading-relaxed">
                Landsking Infra offers advanced sandwich panels manufactured
                using both continuous and discontinuous production lines to
                ensure precision and quality. These panels deliver high
                insulation performance, offering excellent thermal and acoustic
                efficiency with low thermal conductivity, resulting in
                significant energy savings. Lightweight yet highly durable, they
                are quick to install and built to resist flame, corrosion, and
                termites. Ideal for applications such as roofing, wall cladding,
                and cold storage, our panels are backed by over 25 years of
                prefabrication expertise. We also provide PAN-India project
                execution and delivery, with products fully compliant with
                safety and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white sm:py-5 md:py-10 lg:py-16 px-6 md:px-15 lg:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p className="text-gray-600 text-justify">
              25+ Years of Expertise in prefabricated and steel building
              solutions Nationwide Presence with a strong logistics and project
              execution network In-House Design & Engineering powered by 3D
              modeling and load optimization Certified Manufacturing Standards
              ensuring compliance with IS codes and quality benchmarks Timely
              Project Delivery backed by structured planning and skilled
              professionals End-to-End Turnkey Solutions covering design,
              fabrication, delivery, and installation.
            </p>

            {/* Animated Counters */}
          </div>

          {/* Right Image */}
          <div className="relative mb-5 md:mb-0 lg:mb-0">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
            <img
              src="/industry.jpg" // replace with your image
              alt="Why Choose Us  Sandwich Panels"
              width={700}
              height={450}
              className="relative rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}
      <Brand /> {/* faqs */}
      <section className=" mx-auto px-4 py-12 md:mx-10 ">
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className=" ">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <span
                  className={`text-left font-semibold md:text-xl text-md transition-colors duration-200 ${
                    openIndex === index ? "text-[#000000]" : "text-black"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-black text-lg font-bold">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-gray-600  text-base md:text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* end faqs */}
      <Footer />
    </>
  );
}
