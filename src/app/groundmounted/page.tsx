"use client";

import React, { useState } from "react";
import Footer from "yes/Components/Footer";
import Renewableheader from "yes/Components/Renewableheader";
import Epc from "yes/Components/Epc";
import Applications from "yes/Components/Applications";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaSolarPanel,
  FaRupeeSign,
  FaHandsHelping,
  FaChartLine,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

export default function Groundmounted() {
  interface FAQ {
    question: string;
    answer: string;
  }

  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ===== Hero Slider =====
  const slides = [
    {
      image: "/groundmounted/Open Access for Solar Parks.png",
      title: "Open Access for Solar Parks",
    },
    {
      image: "/groundmounted/Open Access for Solar Parks.jpg",
      title: "Turnkey Projects",
    },
    {
      image: "/groundmounted/Large-scale solar farms.jpg",
      title: "Large-scale Solar Farms",
    },
  ];

  // ===== Card Section (with images) =====
  const featured = [
    {
      image: "/groundmounted/Traditional Ground-Mounted Solar Systems.png",
      title: "Traditional Ground-Mounted Solar Systems",
      content:
        "Ground-mounted solar panels have stood the test of time as a reliable way to harness clean energy.Ground-mounted solar panels make this possible, starting with a careful look at the land itself—its soil, climate, and available space—to pick the right foundation, whether steel beams, ground screws, helical piles, or concrete blocks for challenging sites like brownfields. With precision installation by our experienced team, these systems deliver long-term durability, efficiency, and sustainability for any scale of project.",
    },
    {
      image: "/groundmounted/Ground-Mounted Solar Tracking Systems.png",
      title: "Ground-Mounted Solar Tracking Systems",
      content:
        "We provide expert installation of tracking systems for ground-mounted solar panels that maximize energy production throughout the day. Using motorized mounts, panels follow the sun, while secure racking tables ensure stability and precise alignment. Choose single-axis or dual-axis trackers for optimal energy capture. Expertly installed for efficiency, reliability, and long-term performance, our solutions turn sunlight into power—consistently and confidently.",
    },
    {
      image: "/groundmounted/Carports and canopies.png",
      title: "Carports and canopies",
      content:
        "Our solar carports and canopies are designed to do more than just shelter vehicles—they turn your parking spaces into clean energy sources. With strong steel frames and reinforced foundations, they’re built to last. Choose from different sizes and configurations, and even Add EV charging stations for maximum functionality. Expertly designed and installed, these carports deliver efficient, reliable solar energy right where you need it.",
    },
  ];

  const features = [
    {
      title: "Beyond Rooftop Limits",
      description:
        "Unlock greater solar potential by installing large-scale ground-mounted systems that deliver higher energy output than traditional rooftop setups.",
      icon: <FaSolarPanel className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Enjoy Low, Fixed-Cost Power",
      description:
        "Lock in affordable solar energy rates at ₹3–₹4 per unit for up to 25 years, ensuring long-term savings and cost stability.",
      icon: <FaRupeeSign className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Hassle-Free Turnkey Execution",
      description:
        "Experience a smooth, end-to-end project journey — from design and installation to commissioning — managed entirely by our expert team.",
      icon: <FaHandsHelping className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Maximize Financial Returns",
      description:
        "Leverage a 40% accelerated depreciation benefit to boost ROI and optimize your solar investment.",
      icon: <FaChartLine className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Reliable Maintenance & Support",
      description:
        "Gain peace of mind with dedicated O&M and after-sales service, ensuring consistent performance year after year.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Preserve Valuable Land for Growth",
      description:
        "Install solar systems on underutilized areas while keeping your main property free for business expansion or future development.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  // ===== FAQs =====
  const faqs: FAQ[] = [
    {
      question: "What is a ground-mounted solar system?",
      answer:
        "A ground-mounted solar system is a solar power setup installed directly on the ground instead of rooftops. It uses strong mounting structures to hold solar panels at the ideal tilt and direction, ensuring maximum sunlight capture and higher power generation. These systems are ideal for industries, commercial sites, and utility-scale projects with open land availability.",
    },
    {
      question:
        "How long does Landsking Infra  take to install a ground-mounted solar system?",
      answer:
        "Depending on size and site, we complete projects within 3–6 months from concept to commissioning. Our turnkey EPC model ensures smooth execution — from civil works to grid synchronization.",
    },
    {
      question:
        "What are the government incentives for ground-mounted solar in India?",
      answer:
        "Landsking Infra  helps clients leverage Accelerated Depreciation (40%), GST benefits, and net metering advantages. We also guide businesses in claiming Renewable Energy Certificates (RECs) to maximize financial returns.",
    },
    {
      question:
        "What is the difference between ground-mounted solar and rooftop solar?",
      answer:
        "The key difference lies in installation and scalability. Rooftop solar systems are mounted on building roofs, making them suitable for homes or small businesses with limited space. Ground-mounted solar systems, on the other hand, are installed on open land, allowing for optimal orientation, better cooling, easier maintenance, and higher power output — perfect for large-scale energy needs.",
    },
    {
      question:
        "How can Landsking Infra’s ground-mounted solar systems reduce grid energy use?",
      answer:
        "By generating clean, on-site electricity, Landsking Infra systems significantly cut grid dependency and energy costs. They ensure stable, renewable power for 25+ years — supporting both savings and sustainability.",
    },
    {
      question:
        "Which businesses can benefit most from ground-mounted solar installations?",
      answer:
        "Manufacturing plants, warehouses, schools, hospitals, and commercial complexes with open land benefit the most. These setups help reduce long-term electricity costs and meet green energy goals efficiently.",
    },
    {
      question:
        "How can we increase solar energy generation with a ground-mounted solar system?",
      answer:
        "You can enhance output by using single or dual-axis tracking systems, optimal tilt angles, and high-efficiency panels. Proper site analysis and minimal shading are key to consistent, high-yield performance.",
    },
  ];

  return (
    <>
      <Renewableheader />

      {/* ===== Hero Section ===== */}
      {/* <section className="relative min-h-screen flex items-center text-white overflow-hidden"> */}
      <section className="relative h-[100vh] md:h-[60vh] lg:h-[100vh] flex items-center text-white overflow-hidden">
        {/* Content goes here */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solarvideo/industrial solar.mp4" type="video/mp4" />{" "}
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl  md:text-4xl font-bold leading-snug mb-4 sm:mb-6 lg:max-w-lg mx-auto md:mx-0">
              GroundMounted Solar Solutions{" "}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Transforming Open Land into a Source of Reliable, Clean Energy.
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
                      className="w-full h-46 sm:h-60 md:h-58 object-cover"
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

      {/* ===== Overview Section ===== */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h2 className=" text-2xl md:text-3xl text-[#000080] font-bold">
              Ground-Mounted Solar Solutions
            </h2>
          </div>
          <p className="text-gray-700 mb-12 text-justify text-sm sm:text-base text-center max-w-3xl mx-auto">
            At Landsking Infra , we help you make the best use of your unused
            land by turning it into a beneficial source of solar energy. Our
            systems are designed to save on electricity costs, reduce
            environmental impact, and give you long-term energy independence.
          </p>

          {/* ✅ 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#000080]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-justify text-sm">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            Key Features of{" "}
            <span className="text-[#000080]">
              Landsking Infra Pvt. Ltd. Ground Mounted
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our Ground-Mounted Solar Systems are built for unmatched strength,
            efficiency, and long-term performance under every condition.
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

      <Applications />

      {/* ===== FAQs Section ===== */}
      <section className="mx-auto px-4 py-12 md:mx-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
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
              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-base md:text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
