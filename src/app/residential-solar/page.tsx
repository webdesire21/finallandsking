"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Footer from "yes/Components/Footer";
import {
  MapPin,
  FileSpreadsheet,
  Users,
  CheckCircle,
  FileText,
  FileSignature,
  ClipboardCheck,
  Wrench,
  Banknote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Brand from "../../Components/Brand";

import Pebheader from "yes/Components/Pebheader";

import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";
import Renewableheader from "yes/Components/Renewableheader";
import Solarcontact from "yes/Components/Solarcontact";

export default function Residential() {
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
  const servicesing = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Site Assessment",
      desc: "Our experts visit your location to evaluate the roof’s strength, sunlight exposure, and solar suitability.",
    },
    {
      id: 2,
      icon: (
        <FileSpreadsheet className="w-8 h-8 text-white" aria-hidden="true" />
      ),
      title: "Proposal & Design",
      desc: "We share a customized quotation and detailed solar layout designed for maximum performance.",
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Community Approval",
      desc: "A meeting with your society or building members ensures smooth approval for installation.",
    },
    {
      id: 4,
      icon: <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Final Confirmation",
      desc: "Once approved, our team finalizes all technical and structural details before installation begins.",
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Document Submission",
      desc: "Submit basic documents like ID proof, tax bill, and bank details to initiate the process.",
    },
    {
      id: 6,
      icon: <FileSignature className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Rooftop Agreement",
      desc: "A formal agreement is signed with all owners to authorize solar setup on the terrace.",
    },
    {
      id: 7,
      icon: (
        <ClipboardCheck className="w-8 h-8 text-white" aria-hidden="true" />
      ),
      title: "DISCOM Inspection",
      desc: "The DISCOM representative reviews and approves the site before grid connection.",
    },
    {
      id: 8,
      icon: <Wrench className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Installation Day",
      desc: "Our skilled team installs the solar system with precision and ensures safety compliance.",
    },
    {
      id: 9,
      icon: <Banknote className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Government Subsidy",
      desc: "After activation, eligible subsidies are directly credited to the homeowner’s bank account.",
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
      image: "/preimages/quick.png",
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
      image: "/preimages/",
    },
    {
      subtitle: "Robust Construction",
      description:
        "Strong and sturdy construction ensures long service life, structural stability, and reliable performance.",
      image: "/preimages/",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive visible card logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(4);
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
      image: "/resi/ongrid.png",
      title: "On grid",
    },
    {
      image: "/resi/hybrid.png",
      title: "Hybrid Rooftops",
    },
    {
      image: "/resi/off.png",
      title: "Off-grid rooftops",
    },
  ];
  const faqs: FAQ[] = [
    {
      question: "How does rooftop solar help the environment?",
      answer:
        "Switching to solar power means reducing your carbon footprint and cutting down on fossil fuel use. Every rooftop system helps prevent tons of CO₂ emissions annually—making your business greener and more sustainable.",
    },
    {
      question: "How can solar power lower business expenses?",
      answer:
        "With rooftop solar, your business can generate its own electricity, reducing monthly power bills and dependence on the grid. Over time, the savings easily outweigh the initial investment, turning solar into a smart financial decision.",
    },
    {
      question:
        "How does Landsking Infra support large industrial solar projects?",
      answer:
        "At Landsking Infra, we handle everything—from detailed site studies and engineering design to installation and maintenance. Our team ensures each system is tailored to your site, maximizing output while maintaining safety and compliance.",
    },
    {
      question:
        "Are there any government incentives for industrial rooftop solar in India?",
      answer:
        "Yes, industries can benefit from net metering, accelerated depreciation, and various state-level subsidy programs. These incentives help reduce upfront costs and improve the overall return on investment for solar adoption.",
    },
    {
      question: "What kind of warranty and after-sales service do I get?",
      answer:
        "Solar panels usually come with a 25-year performance warranty, while inverters are covered for 5–10 years. At Landsking Infra, we go beyond installation with maintenance support, regular system check-ups, and performance monitoring.",
    },
    {
      question: "Can solar panels be installed on any type of roof?",
      answer:
        "Absolutely. Whether your roof is RCC, metal, or tiled, our mounting systems are designed to fit perfectly. Each setup is customized for strength, safety, and the best possible sunlight exposure for higher energy generation.",
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
          <source src="/solarvideo/residential solar.mp4" type="video/mp4" />{" "}
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Residential solar
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Get up to ₹1 Lakh in total savings — including exclusive Landsking
              Infra Infra benefits and government subsidies. Power your home
              with clean energy while reducing costs from day one.
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
                      className="w-full h-48 sm:h-60 md:h-68 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        // href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover: text-sm sm:text-base md:text-lg"
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

      {/* newss */}
      <section className="bg-white py-5 lg:py-12 px-4 md:px-26">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-1  items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl mb-5 text-center md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Residential Solar
            </h2>

            <p className="text-gray-700   mb-4 leading-relaxed text-center">
              We Are One of India’s Most Reliable Rooftop Solar Solution
              Providers Landsking Infra stands among India’s leading rooftop
              solar companies, trusted by thousands of homeowners and businesses
              for dependable, high-quality solar installations. With years of
              expertise and a nationwide presence, we deliver end-to-end solar
              solutions — from design and installation to support and
              maintenance. Backed by MNRE empanelment and flexible financing
              options, Landsking Infra is committed to making clean, affordable
              energy accessible to every rooftop.
            </p>
          </div>
        </div>
      </section>
      {/* description */}
      <section className="bg-white py-6  lg:py-12 px-4 md:px-26 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl mb-5  md:text-3xl font-bold text-[#000080] leading-snug  ">
              Grid-connected rooftop solar system
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              A grid-connected rooftop solar system lets you enjoy the best of
              both worlds — clean solar energy and reliable grid support.With
              net metering, any extra power you generate is sent back to the
              grid, earning you credits or reducing your electricity bill. A
              bi-directional meter tracks both the energy you consume and the
              energy you export, ensuring accurate billing.At Landsking Infra
              Infra, we make this process simple by offering customized rooftop
              solar solutions that suit your energy needs and give you the best
              value for your investment.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/resi/ongrid.png"
              alt="residential-solar"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="bg-white py-6  lg:py-12 px-4 md:px-26 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <Image
              src="/resi/hybrid.png" // replace with your real factory image
              alt="Hybrid Rooftop Solar System"
              width={700}
              height={450}
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Hybrid Rooftop Solar System{" "}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              A hybrid rooftop solar system gives you the best of both— clean
              solar power and reliable battery backup. During the day, it powers
              your home directly from the sun and stores surplus energy in
              advanced lithium batteries for use at night or during power cuts.
              Even on cloudy days or during high energy demand, the system
              automatically draws power from the grid, ensuring a smooth and
              uninterrupted electricity supply. With a bi-directional meter,
              your power usage and savings are accurately tracked — so you only
              pay for what you truly consume.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-3  lg:py-12 px-4 md:px-26 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl mb-5 md:text-3xl font-bold text-[#000080] leading-snug  ">
              Off-grid rooftop solar system
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              An off-grid rooftop solar system is perfect for those homes or
              businesses who are located in remote areas with limited or no
              access to the main power grid. It provides total energy
              independence, allowing you to generate and store your own
              electricity through high-efficiency lithium battery systems.
              Designed to work completely offline, it ensures a reliable power
              supply day and night — even in areas with frequent outages or no
              grid connection at all.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/resi/off.png"
              alt=" Off-grid rooftop solar system"
              className="rounded-md shadow-md w-[600px] h-[430px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* endcapill */}

      {/* explore content */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:px-18 lg:mx-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Benefits of Residential Solar
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 transition-all duration-500">
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
                  <p className="text-sm text-black  text-justify">
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
      <section className=" mx-auto px-4 py-12 md:mx-22 ">
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
      <Solarcontact />
      <Footer />
    </>
  );
}
