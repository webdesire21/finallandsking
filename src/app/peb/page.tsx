"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Brand from "yes/Components/Brand";

import Link from "next/link";
import Image from "next/image";
import Pebfooter from "yes/Components/Pebfooter";
export default function Peb() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "Prefabricated",
      subtitle: "Prefabricated Multi-Storey Building Manufacturer",
      description:
        "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
      image: "/preimages/build.jpg",
    },
    {
      id: 2,
      title: "Warehouse",
      subtitle: "Warehouse",
      description:
        "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions to meet industrial and commercial demands.",
      image: "/preimages/ware.jpg",
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
      image: "/preiamges/en.png",
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

  const faqs: FAQ[] = [
    {
      question: "Is a Pre-Engineered Building a permanent structure?",
      answer:
        "Yes, modern PEBs are classified as capital-grade, permanent structures with a service life of 50–75 years or more, matching conventional longevity.",
    },
    {
      question:
        "What is the typical maintenance cost difference between a PEB and a conventional building? ",
      answer:
        "The durable, coated steel and specialized roofing inherently resist pests and weather. This results in an estimated 30–40% lower long-term maintenance cost compared to masonry or wood alternatives, securing your operational budget.",
    },
    {
      question:
        "Beyond durability, how does the PEBs material choice impact its environmental footprint?",
      answer:
        "The primary material, steel, contains a high percentage of recycled content and is fully recyclable. Choosing a PEB is a commitment to a resource-efficient, lower-impact construction lifecycle.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from traditional buildings?",
      answer:
        "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost.",
    },
    {
      question:
        "Can I easily install a bridge or overhead crane system in a Pre-Engineered Metal Building?",
      answer:
        "Yes, PEBs are holistically engineered for heavy operational requirements. Columns and rafters are custom-designed during fabrication to safely bear the dynamic loads of overhead equipment.",
    },
    {
      question:
        "Do PEBs typically require a lighter or shallower foundation than traditional construction? ",
      answer:
        " Due to optimized design and lighter material weight, PEBs generally require a simpler and more economical foundation, accelerating the project’s earliest phase.",
    },
  ];
  const possibilities = [
    {
      subtitle: "Quick Installation & Lightweight Construction",
      description:
        "Pre-engineered buildings (PEBs) allow for fast installation and easy erection due to their lightweight construction, reducing both time and labor costs.",
      image: "/preimages/quick.jpg",
    },
    {
      subtitle: "Low Maintenance",
      description:
        "With superior materials and a meticulous manufacturing process, PEB structures are low-maintenance and built to last, offering durability with minimal upkeep.",
      image: "/preimages/low.jpg",
    },
    {
      subtitle: "Resistance to Corrosive Elements",
      description:
        "PEBs are resistant to corrosive elements and can withstand severe weather conditions, including high winds, ensuring longevity and structural integrity.",
      image: "/preimages/corrosion.jpg",
    },
    {
      subtitle: "Energy Efficiency & Weatherproofing",
      description:
        "Insulated walls and facades make these buildings energy-efficient and weather-resistant, providing comfortable living or working environments in adverse weather conditions.",
      image: "/preimages/energy.jpg",
    },
    {
      subtitle: "Aesthetic Flexibility",
      description:
        "PEBs offer a variety of finishing options that enhance their aesthetic appeal, making them suitable for diverse applications and architectural preferences.",
      image: "/preimages/aesthetic.jpg",
    },
    {
      subtitle: "Customizable Design & Layouts",
      description:
        "The flexibility of design and construction enables a wide range of layout possibilities, catering to specific client requirements, whether for industrial or commercial use.",
      image: "/design.jpeg",
    },
    {
      subtitle: "Safety Features",
      description:
        "Pre-engineered buildings can easily accommodate safety and comfort features such as smoke detectors, firefighting equipment, and air conditioning units.",
      image: "/preimages/factory.jpg",
    },
    {
      subtitle: "Ideal for Off-Site & Site Construction",
      description:
        "These buildings are widely used for construction sites and off-site projects, providing a quick, durable solution for setting up accommodation or infrastructure.",
      image: "/preimages/wood.jpg",
    },
    {
      subtitle: "Expertise & Innovation",
      description:
        "With decades of expertise, Landsking Infra Pvt. Ltd. has delivered innovative, high-performance prefabricated solutions across India, combining reliability with modern design.",
      image: "/preimages/construction Phase.jpeg",
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
      icon: <FaExpand className="text-[#000080]text-3xl mb-4" />,
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
      image: "/preimages/ware.jpg",
      title: "Warehouse",
      link: "/warehouse",
    },

    {
      image: "/expertise/fourth.png",
      title: "Industrial Shed",
      link: "/industrialShed",
    },
    {
      image: "/preimages/factory.jpg",
      title: "Factory Building",
      link: "/factoryBuilding",
    },
    {
      image: "/expertiseimages/Cold Storage and warehouse.jpg",
      title: "Coldstorage",
      link: "/coldStorage",
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
          aria-label="Peb video: Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction."
        >
          <source src="/video/peb.mp4" type="video/mp4" />
          Your browser does not support the video tag. This video showcases:
          Pre-Engineered Buildings (PEBs) are modern steel structures designed,
          fabricated, and assembled using standardized components for faster
          construction.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Pre Engineered Buildings
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
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
      <section className="bg-white py-12 px-4 md:px-12">
        <div className=" mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl  mb-4 md:mb-6 md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Smart Construction. Faster Delivery. Reliable Performance{" "}
            </h2>

            <p className="text-gray-700 text-justify mb-4 leading-relaxed">
              Landsking Infra Pvt. Ltd. is one of India’s leading manufacturers
              of Pre-Engineered Buildings (PEBs), delivering complete solutions
              for industrial, commercial, and institutional structures. Our
              buildings are designed with advanced engineering and
              prefabrication technology, ensuring faster project delivery, cost
              efficiency, and customized designs for diverse applications.
            </p>

            <p className="text-gray-700  text-justify mb-4 leading-relaxed">
              What is a Pre-Engineered Building?{" "}
              <span className="font-bold">Landsking Infra pvt.ltd</span> A
              Pre-Engineered Building (PEB) is a steel structure based on a
              structural framework of primary framing (columns and rafters),
              secondary framing (purlins and girts), along with roof and wall
              sheeting, and other components. All parts are pre-fabricated in
              factories and assembled on-site, drastically reducing construction
              time compared to conventional methods.
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>

            <img
              src="/menupageimg/peb2.jpg"
              alt=" Buildings"
              className="rounded-md shadow-md  object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-7 md:py-12 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto text-center ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
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
                <p className="text-gray-600  text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*neww  explore conettt */}
      <section className="mx-auto px-4 py-10 md:px-13 lg:px-24">
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
                  <a
                    href="/peb-contact"
                    className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                  >
                    Contact{" "}
                    <span className="p-1 rounded-full text-[#000080]">→</span>
                  </a>
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
      {/*  end new explore content */}

      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-15">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full  rounded-2xl"></div>
            <Image
              src="/menupageimg/peb8.jpg" // replace with your real factory image
              alt="Manufacturing Facility"
              width={700}
              height={450}
              className="relative rounded-md shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Our Manufacturing Capabilities
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
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

            <p className="text-gray-600 leading-relaxedtext-justify ">
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
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10 md:px-8 lg-px-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Benefits of Pre-Engineered Buildings
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.subtitle}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-black transition"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-black transition"
            >
              <ChevronRight className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* end business benifts */}

      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            SPECIFICATIONS OF INDUSTRIAL SHED COMPONENTS
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ul className=" list-disc space-y-4 text-gray-700 text-base leading-relaxed">
              <li>
                <span className="font-bold">Wall:</span> PUF / EPS insulated
                sandwich panels of 50 / 60mm with PPGI sheet on both sides.
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
                  Electrical fittings, sanitary fittings, beds, etc.,
                </span>{" "}
                will be provided as per client requirements and fitted as per
                the contract.
              </li>
            </ul>

            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
              <img
                src="/menupageimg/peb9.jpeg"
                alt="Why Choose Us"
                width={700}
                height={450}
                className="relative  rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white sm:py-5 md:py-10 lg:py-16  px-6 md:px-12 lg:px-12">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080]  mb-4 md:mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p className="text-gray-600 text-justify">
              25+ years of expertise in prefabricated and steel building
              solutions. Nationwide presence with a strong logistics and project
              execution network. In-house design & engineering powered by 3D
              modeling and load optimization. Certified manufacturing standards
              ensuring compliance with IS codes and quality benchmarks. Timely
              project delivery backed by structured planning and skilled
              professionals. End-to-end turnkey solutions covering design,
              fabrication, delivery, and installation.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mb-5 md:mb-0 lg:mb-0">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
            <img
              src="/industry.jpg" // replace with your image
              alt="Why Choose Us"
              width={700}
              height={450}
              className="relative rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}
      <Brand />

      {/* faqs */}
      <section className=" mx-auto px-4 py-12 md:mx-10 ">
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-200 ">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b border-gray-200">
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

      <Pebfooter />
    </>
  );
}
