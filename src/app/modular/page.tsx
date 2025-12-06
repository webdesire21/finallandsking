"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Brand from "../../Components/Brand";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";

export default function Modular() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "Prefab Site Infrastructure ",
      subtitle: "Prefab Site Infrastructure Solutions",
      description:
        "At Landsking Infra Pvt. Ltd, we provide comprehensive Prefab Site Infrastructure Solutions designed to meet the evolving needs of modern industries and organizations. Our solutions are engineered to deliver efficiency, durability, and sustainability, ensuring that infrastructure development is completed in significantly reduced timelines without compromising on quality.",
      image: "/menupageimg/mod15.png",
    },
    {
      id: 2,
      title: "Prefab Site Office",
      subtitle: "Prefab Site Office",
      description:
        "At Landsking Infra Pvt. Ltd, we design and deliver durable and functional Labor Hutments that provide safe, comfortable, and cost-effective accommodation for workforce requirements across construction sites, industrial projects, and remote locations.",
      image: "/menupageimg/mod4.png",
    },
    {
      id: 3,
      title: "Labor Hutments",
      subtitle: "Prefabricated Industrial Shed Manufacturers",
      description:
        "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
      image: "/preimages/shed.jpg",
    },
    {
      id: 4,
      title: "Portable Security Guard Cabins",
      subtitle: "Portable Security Guard Cabins",
      description:
        "Portable Security Guard Cabins are compact, movable structures designed to provide a safe, comfortable, and functional workspace for security personnel. Built with durable materials such as steel, aluminum, or high-quality insulated panels, these cabins are weather-resistant and sturdy, ensuring long-lasting use in both indoor and outdoor environments.",
      image: "/menupageimg/mod8.jpg",
    },
    {
      id: 5,
      title: "Clean Room",
      subtitle: "Clean Room",
      description:
        "offers advanced cleanroom solutions for controlled environments in industries like pharmaceuticals, electronics, and biotechnology. Our cleanrooms are designed with precision to meet stringent hygiene, airflow, and temperature control standards, ensuring optimal conditions for sensitive operations.",
      image: "/preimages/cleanroomk.jpg",
    },
    {
      id: 6,
      title: "Prefabricated Toilet",
      subtitle: "Prefabricated Toilet",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/preimages/toilet.jpg",
    },
    {
      id: 7,
      title: "Prefab Porta Cabins",
      subtitle: "Prefab Porta Cabins Manufacturer",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/preimages/porta.jpg",
    },
    {
      id: 8,
      title: "Railway Shelters",
      subtitle: "Railway Shelters",
      description:
        "Landsking Infra Pvt. Ltd. delivers robust and reliable railway and telecom shelters, specially designed to perform in harsh outdoor conditions. Manufactured using premium-grade materials, these shelters ensure maximum safety, durability, and functionality for critical applications",
      image: "/menupageimg/mod12.jpg",
    },
    {
      id: 9,
      title: "Cold Storage & Cold Room Manufacturer",
      subtitle: "Railway Shelters",
      description:
        "Our cold storage facilities are designed using high-performance insulated panels and modern refrigeration technology to deliver superior energy efficiency. Suitable for a wide range of applications — from perishable goods to pharmaceuticals —  Landsking Infra Pvt. Ltd. ensures reliable preservation, consistent temperature control, and compliance with industry standards.",
      image: "/menupageimg/cold4.png",
    },
  ];

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
      question: "What are Pre-Engineered Buildings (PEBs)?",
      answer:
        "Pre-Engineered Buildings are factory-fabricated steel structures that are shipped in parts and assembled on-site, offering speed, durability, and cost savings.",
    },
    {
      question:
        "Why choose Pre-Engineered Buildings over conventional construction?",
      answer:
        "PEBs reduce construction time by up to 60%, offer flexibility in design, and ensure long-term strength with minimal maintenance compared to traditional methods.",
    },
    {
      question: "What are Prefabricated Structures?",
      answer:
        "Prefabricated structures are modular buildings manufactured in factories and assembled at site, ensuring faster delivery, reduced labor, and consistent quality.",
    },
    {
      question: "What is Light Gauge Steel Framing (LGSF)?",
      answer:
        "LGSF is an advanced construction method using cold-formed steel sections for walls, roofs, and floors, making structures lightweight, durable, and sustainable.",
    },
    {
      question: "Where is Light Gauge Steel Framing used?",
      answer:
        "LGSF is commonly used in residential buildings, commercial complexes, schools, hospitals, and temporary housing solutions.",
    },
    {
      question: "What are Sandwich Panels in construction?",
      answer:
        "Sandwich Panels are prefabricated wall and roof panels with an insulating core between two metal sheets, offering excellent thermal efficiency and durability.",
    },
    {
      question: "What are the benefits of Sandwich Panels?",
      answer:
        "They provide superior insulation, reduce energy costs, are lightweight, easy to install, and suitable for cold storage, industrial sheds, and modular units.",
    },
    {
      question: "What are Standard Modular Solutions?",
      answer:
        "Standard Modular Solutions are ready-to-use prefabricated units designed for quick installation, flexibility, and cost-effectiveness across industries.",
    },
    {
      question: "What are Ready-to-Use Modular Units?",
      answer:
        "Ready-to-use modular units are pre-built cabins or structures delivered directly to the site, requiring minimal setup and providing instant usability.",
    },
    {
      question: "Where can Ready-to-Use Modular Units be applied?",
      answer:
        "They are ideal for site offices, security cabins, classrooms, healthcare units, toilets, and temporary accommodations.",
    },
  ];

  const possibilities = [
    {
      subtitle: "High Tolerance & Durability",
      description:
        "Engineered with high tolerance, corrosion resistance, and exceptional durability to ensure reliable long-term performance.",
      image: "/preimages/benone.jpg",
    },
    {
      subtitle: "Dimensional Accuracy",
      description:
        "Precision manufacturing guarantees exact dimensional accuracy, ensuring the final product meets and exceeds client expectations.",
      image: "/preimages/bentwo.jpg",
    },
    {
      subtitle: "Quick Erection & Installation",
      description:
        "Designed for rapid erection, enabling swift installation even in complex or challenging site conditions.",
      image: "/imagesall/rf.jpg",
    },
    {
      subtitle: "Thermal Efficiency",
      description:
        "Insulated panels maintain a 5–7°C temperature difference, significantly enhancing energy efficiency and comfort.",
      image: "/preimages/benthree.jpg",
    },
    {
      subtitle: "Accelerated Project Timelines",
      description:
        "Optimized production and installation processes ensure timely delivery, meeting tight project schedules.",
      image: "/imagesall/ert.jpeg",
    },
    {
      subtitle: "Robust Construction",
      description:
        "Strong and sturdy construction ensures long service life, structural stability, and reliable performance.",
      image: "/imagesall/Robust Construction.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive visible card logic
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
      image: "/menupagetwo/pso-7.png",
      title: "Pre-fab Office",
      link: "/prefabricatedSite",
    },
    {
      image: "/menupagetwo/ind-1.jpg",
      title: "Industrial Enclousers",
      link: "/industrialEnclousers",
    },
    {
      image: "/new-images/railway-shelters-1.jpg",
      title: "Railway Shelters",
      link: "/railwayShelters",
    },

    {
      image: "/preimages/cleanroomk.jpg",
      title: "Clean Room",
      link: "/cleanRoom",
    },
  ];

  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
          aria-label=" Modular Video: Build your project offsite with fast accuracy and quality. Enjoy
              faster completion and effortless on-site assembly for seamless
              results."
        >
          <source src="/video/modular.mp4" type="video/mp4" />
          Your browser does not support the video tag. This video showcases
          Modular Build your project offsite with fast accuracy and quality.
          Enjoy faster completion and effortless on-site assembly for seamless
          results.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Modular Building Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Build your project offsite with fast accuracy and quality. Enjoy
              faster completion and effortless on-site assembly for seamless
              results.
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
      <section className="bg-white py-12 px-4  md:px-15 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug mb-4 ">
              Smart and Flexible Solutions for Modern Building{" "}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Lightweight, durable, relocatable, economical, and
              energy-efficient, prefabricated structures are increasingly
              recognized as a modern and sustainable alternative to conventional
              construction methods. These innovative solutions meet all the
              functional requirements of traditional buildings while offering
              added advantages such as faster execution, cost savings, and
              design flexibility.{" "}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              At Landsking Infra Pvt. Ltd, we specialize in delivering
              high-quality prefabricated structures tailored to diverse
              applications. Our dry construction process enables quicker project
              timelines and greater efficiency. Manufactured with premium-grade
              steel frames and insulated panels, our modular solutions are
              engineered for long-lasting durability and ease of installation.{" "}
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
              src="/menupageimg/mod13.jpg"
              alt="  Modular Buildings"
              className="rounded-md shadow-md  object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-4 md:py-12 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
            <Image
              src="/preimages/define.png" // replace with your real factory image
              alt=" Modular Manufacturing Facility"
              width={700}
              height={450}
              className="rounded-md shadow-md  object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Redefining Modern Infrastructure with Prefabricated Buildings
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              <strong>Landsking Infra Pvt. Ltd.</strong> we believe that the
              true value of prefabricated buildings lies in their innovative
              design, structural integrity, and flawless execution. Each project
              begins with a carefully engineered design, which is then
              integrated into advanced automated production systems to ensure
              precision, uniformity, and uncompromised quality.
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
              Our prefabricated structures are pre-engineered and pre-assembled
              at the factory, reducing on-site work and ensuring quick, seamless
              installation. This approach delivers not only efficiency and
              durability, but also an elegant balance of aesthetics and
              functionality, making them ideal for a wide range of residential,
              commercial, and industrial applications
            </p>
            <button className="border border-[#000080] px-6 py-2 mt-3 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
      {/* endcapill */}
      <section className="mx-auto px-4 py-10 md:px-20 lg:px-28">
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
                <p className="text-gray-600 mb-5 text-justify">
                  {selectedArea.description}
                </p>
                <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                  <a
                    href="/peb-contact"
                    className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                  >
                    Contact{" "}
                    <span className="p-1 rounded-full text-[#000080]">→</span>
                  </a>{" "}
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
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:mx-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Benefits of Prefabricated Modular
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
        <div className="md:mx-16 mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
              <img
                src="/menupageimg/mod16.jpg"
                alt=" Modular benfits"
                width={700}
                height={450}
                className="rounded-md shadow-md  object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  Accelerate Construction with Prefabrication – Save Up to 60%
                  Time{" "}
                </h2>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed">
                With advanced prefabrication technology, Landsking Infra Pvt.
                Ltd. helps you build smarter and faster. Our modern, fully
                automated production systems ensure precision, consistency, and
                reduced dependency on manual labor, making prefabrication up to
                60% quicker than conventional construction methods.
              </p>
              <p className="text-gray-600 text-justify leading-relaxed mt-4">
                By cutting down construction timelines, our prefabricated
                solutions not only speed up project deliverybut also guarantee
                strength, durability, and long-term reliability . This makes
                them the preferred choice for a wide range of projects,
                including commercial spaces, industrial facilities, residential
                complexes, and institutional buildings .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white sm:py-5 md:py-10 lg:py-16 px-6 md:px-16 ">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
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
              alt="Why Choose Us as  Modular Building"
              width={700}
              height={450}
              className="relative rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}
      <Brand /> {/* faqs */}
      <section className=" mx-auto px-4 py-12 md:mx-13 ">
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="  ">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className=" ">
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
      <Pebfooter />
    </>
  );
}
