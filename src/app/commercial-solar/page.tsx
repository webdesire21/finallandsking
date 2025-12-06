"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Footer from "yes/Components/Footer";
import {
  MapPin,
  Wrench,
  FileSpreadsheet,
  CheckCircle,
  Power,
  PlugZap,
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

export default function Commercial() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "Custom System Design ",
      subtitle: "Custom System Design",
      description:
        "We conduct a detailed site assessment and load analysis to design solar systems that are precisely aligned with your operational requirements. Each solution is engineered to maximize energy output, optimize ROI, and ensure long-term operational reliability, reflecting a strategic approach to sustainable energy adoption.",
      image: "/industryimg/",
    },

    {
      id: 1,
      title: "End-to-End Delivery ",
      subtitle: "End-to-End Delivery",
      description:
        "From feasibility assessment and detailed engineering to procurement, installation, and commissioning, we manage the entire project lifecycle as a single accountable entity. This integrated approach guarantees seamless execution, timely delivery, and superior quality performance without requiring you to coordinate multiple vendors.",
      image: "/industryimg/",
    },
    {
      id: 1,
      title: "Regulatory & Net-Metering Support ",
      subtitle: "Regulatory & Net-Metering Support",
      description:
        "We navigate the complexities of regulatory compliance, approvals, and net-metering on your behalf, making it easier for your business to adopt solar energy smoothly and benefit from government incentives.",
      image: "/industryimg/",
    },
    {
      id: 1,
      title: "Flexible Financing ",
      subtitle: "Flexible Financing",
      description:
        "We offer multiple financing options to suit different business models and budgets, including CAPEX (capital investment), OPEX (operating expenditure), and zero-investment RESCO models.we empower organizations to deploy solar infrastructure with minimal financial friction while achieving strategic energy and sustainability goals.",
      image: "/industryimg/",
    },
    {
      id: 1,
      title: "Asset Management & Monitoring ",
      subtitle: "Asset Management & Monitoring",
      description:
        "Through advanced real-time monitoring, predictive maintenance, and proactive performance optimization to safeguard your solar assets. Continuous tracking and proactive management ensure maximum energy yield, minimize downtime, and extend the lifespan of your solar system.",
      image: "/industryimg/",
    },
  ];
  const servicesing = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 1: Site Evaluation",
      desc: "Our experts assess your rooftop space and analyze your energy requirements to determine the most efficient solar setup. We ensure optimal performance through detailed feasibility studies.",
    },
    {
      id: 2,
      icon: (
        <FileSpreadsheet className="w-8 h-8 text-white" aria-hidden="true" />
      ),
      title: "Step 2: Design & Engineering",
      desc: "We design a custom solar solution tailored to your business needs — ensuring maximum efficiency, durability, and seamless integration with your facility’s infrastructure.",
    },
    {
      id: 3,
      icon: <Wrench className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 3: Installation & Commissioning",
      desc: "Our certified engineers carry out precise installation with minimal downtime. We ensure smooth grid integration and perform rigorous system testing before activation.",
    },
    {
      id: 4,
      icon: <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 4: Regulatory Support",
      desc: "We take care of all permits, approvals, and net metering applications — managing subsidies and compliance paperwork so you can focus on your business.",
    },
    {
      id: 5,
      icon: <Power className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 5: Flexible Financing",
      desc: "Choose from CAPEX, OPEX, or zero-investment RESCO models. Our flexible plans are designed to match your financial goals and optimize your returns.",
    },
    {
      id: 6,
      icon: <PlugZap className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 6: Operations & Maintenance",
      desc: "We provide continuous system monitoring and preventive maintenance to ensure long-term performance, reliability, and maximum energy savings.",
    },
  ];

  const possibilities = [
    {
      subtitle: "Energy Savings, Better Business",
      description:
        "Reduce electricity expenses and increase profitability with efficient solar power.",
      image: "/commercial/",
    },
    {
      subtitle: "Utilize Your Rooftop Smartly",
      description:
        "Convert unused rooftop space into a consistent source of clean energy.",
      image: "/commercial/Utilize Your Rooftop Smartly.jpg",
    },
    {
      subtitle: "Stable Energy Costs",
      description:
        "Protect your business from rising electricity tariffs and unpredictable billing.",
      image: "/commercial/Stable Energy Costs.jpg",
    },
    {
      subtitle: "Reliable Performance, Long-Term Value",
      description:
        "High-quality systems built to deliver dependable output for years.",
      image: "/commercial/Reliable Performance.jpg",
    },
    {
      subtitle: "Sustainable Energy, Strong Brand Image",
      description:
        "Show your commitment to the environment and enhance your corporate identity.",
      image: "/commercial/",
    },
    {
      subtitle: "Fast Return on Investment",
      description:
        "Achieve payback in 3–4 years and enjoy long-term savings thereafter.",
      image: "/commercial/",
    },
    {
      subtitle: "Smart Financing Options",
      description:
        "Access flexible, collateral-free financing designed for MSMEs and enterprises.",
      image: "/commercial/",
    },
    {
      subtitle: "Invest Once, Benefit for Decades",
      description:
        "Replace lifetime electricity bills with manageable EMIs and secure lasting financial gains.",
      image: "/commercial/",
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
      image: "/commercial/Stable Energy Costs.jpg",
      title: "Stable Energy Costs",
    },
    {
      image: "/commercial/Reliable Performance.jpg",
      title: "Sustainable Energy",
    },
    {
      image: "/images/step1.jpg",
      title: "Smart Financing Options",
    },
  ];
  const steps = [
    {
      image: "/images/step1.jpg",
      title: "Engineering",
      description:
        "Comprehensive planning and design ensuring efficient, safe, and sustainable solutions.",
    },
    {
      image: "/images/step2.jpg",
      title: "Procurement",
      description:
        "Strategic sourcing and vendor management to guarantee quality materials on time.",
    },
    {
      image: "/images/step3.jpg",
      title: "Construction",
      description:
        "Expert project execution and supervision to deliver projects with precision and safety.",
    },
  ];
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
          <source src="/solarvideo/commercial solar.mp4" type="video/mp4" />{" "}
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
              Commercial Rooftop Solar Solutions
            </h1>
            <p className="text-sm text-justify sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              At Landsking Infra delivers industrial-grade rooftop solar
              solutions designed for India’s commercial and manufacturing
              sectors.
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
      <section className="bg-white py-12 px-4 md:px-20 lg:px-25">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Commercial Solar
            </h2>

            <p className="text-gray-700 text-justify mb-4 leading-relaxed">
              Our commercial solar solutions keep your operations powered and
              your expenses low. With quality, durability, and advanced energy
              management, we ensure long-term savings and seamless solar
              integration for your business. Turn your roof into a
              profit-generating solar asset and start saving today.
            </p>

            <Link href="/solar-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/commercial/Energy Savings, Better Business.jpg"
              alt=" commercial solar"
              className="rounded-md shadow-md w-[700px] h-[450px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:px-18 lg:mx-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Benefits of Commercial Solar with Landsking Infra
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-justify text-black font-semibold mb-2 md:text-xl">
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
      <section className=" mx-auto px-5 py-10 lg:mx-22 md:mx-18">
        <header className="text-center mt-10 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080]">
            How Can we Help Your Industry Benefit from Custom Solar?
          </h2>
          <p className=" text-justify mt-5 md:mt-10 text-sm text-slate-500 mb-9 md:mb-15 ">
            Landsking Infra delivers customized rooftop solar solutions for
            India’s commercial and manufacturing sectors. We manage the complete
            process — surveying, designing, installing, and maintaining — to
            provide long-lasting, efficient, and cost-effective clean energy for
            your business.
          </p>
        </header>

        {/* Mobile: horizontal scroll with snapping */}
        <div className="block sm:hidden">
          <div className=" grid grid-cols-1  gap-6">
            {servicesing.map((s) => (
              <article
                key={s.id}
                className="snap-center min-w-[78%] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-[#000080]"
                role="article"
              >
                <div className="w-16 h-16 text- white rounded-full flex items-center justify-center mx-auto mb-3 bg-[#000080]">
                  {s.icon}
                </div>

                <h3 className="text-lg  text-[#000080] *:font-semibold">
                  {s.title}
                </h3>
                <p className=" text-justify mt-2 text-base text-black">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-7">
          {servicesing.map((s) => (
            <article
              key={s.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow focus:shadow-lg outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-[#000080]">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className=" text-justify mt-2 text-sm text-slate-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Solarcontact />
      <Footer />
    </>
  );
}
