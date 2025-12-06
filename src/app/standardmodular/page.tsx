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

import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Standardmodular() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "Liftable Cabin",
      subtitle: "Liftable Cabin",
      description:
        "Ladsking Infra’s liftable cabins offer a versatile and convenient solution for a wide range of temporary or portable space requirements. Featuring an innovative design and easy lifting mechanism, these cabins provide mobility and flexibility without sacrificing comfort or functionality.",
      image: "/modular/Liftable Cabin.jpg",
    },
    {
      id: 2,
      title: "Mi Homes",
      subtitle: "Mi Homes",
      description:
        "Ladsking Infra’s MI Homes are innovative, sustainable, and budget-friendly modular homes crafted for rapid installation and lasting durability. Perfect for residential, commercial, and emergency use, these homes provide comfortable living spaces equipped with modern amenities.",
      image: "/modular/Mi Homes.jpg",
    },
    {
      id: 3,
      title: "K-House",
      subtitle: "K-House",
      description:
        "K-House is a state-of-the-art solution for contemporary living, blending sustainability and innovation in its design. Featuring modular construction and energy-efficient elements, K-House provides a comfortable and eco-friendly lifestyle for individuals and families committed to a greener future.",
      image: "/final/special building.jpg",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is a standard modular solution?",
      answer:
        "Standard modular solutions consist of prefabricated, customizable units designed for a wide range of applications, enabling fast, efficient, and flexible construction.",
    },
    {
      question: "What types of structures can be built with modular solutions?",
      answer:
        "These solutions cover a variety of uses, including site offices, portable cabins, classrooms, worker accommodations, and modular retail spaces.",
    },
    {
      question: "How are modular structures constructed?",
      answer:
        "Modular structures are constructed off-site using prefabricated components and then assembled on-site, allowing for rapid installation and minimal disruption.",
    },
    {
      question: "What materials are used in modular structures?",
      answer:
        "They are generally constructed using steel frameworks combined with insulated panels for the walls and roofing, ensuring strength and energy efficiency.",
    },
    {
      question: "Can modular structures be customized?",
      answer:
        "Yes, modular structures can be customized to meet specific dimensions, layouts, and functional requirements.",
    },
    {
      question:
        "Are modular structures suitable for extreme weather conditions?",
      answer:
        "Yes, these structures are built to withstand tough climates, including high winds and heavy rain.",
    },
    {
      question: "How long does it take to construct a modular building?",
      answer:
        "Modular structures can be completed within weeks, depending on their size and complexity, offering a much faster alternative to traditional construction methods.",
    },
    {
      question: "Who can benefit from modular solutions?",
      answer:
        "Industries like construction, education, healthcare, and retail often rely on modular solutions for both temporary and permanent infrastructure needs.",
    },
    {
      question: "What is the lifespan of a modular building?",
      answer:
        "With regular maintenance, modular buildings can have a lifespan of 20 to 30 years or longer.",
    },
    {
      question: "Can modular solutions be relocated?",
      answer:
        "Yes, these structures are portable and can be quickly dismantled and moved to new locations as required.",
    },
    {
      question: "Are modular solutions compliant with building codes?",
      answer:
        "Yes, Ladsking Infra ensures that all modular solutions comply with industry standards and regulatory requirements..",
    },
    {
      question: "What is the installation process for modular buildings?",
      answer:
        "Modules are prefabricated off-site, delivered to the site, and assembled using straightforward joining methods.",
    },
  ];

  const possibilities = [
    {
      subtitle: "On-site Project Offices",
      description:
        "Quick-to-install office spaces at construction or industrial sites, providing a functional and comfortable working environment for project teams.",
      image: "/standard/On-site Project Offices.jpg",
    },
    {
      subtitle: "Employee Housing Units",
      description:
        "Durable and secure accommodation units for workers, designed to ensure comfort and privacy during long-term site deployments.",
      image: "/standard/Employee Housing Units.jpg",
    },
    {
      subtitle: "Portable Restrooms & Washrooms",
      description:
        "Hygienic, ready-to-use sanitation units that can be quickly installed at remote locations or project sites with limited infrastructure.",
      image: "/standard/Portable Restrooms & Washrooms.jpg",
    },
    {
      subtitle: "Modular Educational Classrooms",
      description:
        "Flexible and scalable classrooms ideal for schools, training centers, or temporary learning spaces, built for quick deployment and durability.",
      image: "/standard/Modular Educational Classrooms.jpg",
    },
    {
      subtitle: "Security Booths",
      description:
        "Compact and sturdy cabins for security personnel, strategically placed at entry points or perimeters to monitor and control access.",
      image: "/standard/Security Booths.jpg",
    },
    {
      subtitle: "Model Apartments & Villas",
      description:
        "Fully functional sample flats and villas used for real estate demos, built with speed and precision to showcase final project layouts.",
      image: "/standard/modern Apartments & Villas india.jpg",
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
      image: "/modular/Mi Homes.jpg",

      title: "Mi-Homes",
      link: "mi-homes",
    },

    {
      image: "/modular/Liftable Cabin.jpg",
      title: " Liftable Cabins",
      link: "/porta-cabins",
    },
    {
      image: "/modular/K-House (1).png",

      title: "K-House",
      link: "k-house",
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
          aria-label=" Standard Modular Solutions Video: Build your project offsite with fast accuracy and quality. Enjoy
              faster completion and effortless on-site assembly for seamless
              results."
        >
          <source src="/video/modular.mp4" type="video/mp4" />
          Your browser does not support the video tag. This video showcases
          Prefabricated structures are buildings or components manufactured in a
          factory and then transported to the site for quick assemblly.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Standard Modular Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Prefabricated structures are buildings or components manufactured
              in a factory and then transported to the site for quick assemblly.
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
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="l mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080]  ">
              Flexible, Expandable, and Quick-to-Deploy Modular Solutions
            </h2>

            <p className="text-gray-600 text-justify mb-4 leading-relaxed">
              At Ladsking Infra, we recognize the demand for fast, flexible, and
              premium-quality infrastructure in today’s ever-changing
              environment. Our Standard Modular Solutions are factory-built,
              pre-designed structures engineered to cater to a wide variety of
              applications—delivering exceptional speed, quality, and cost
              savings.{" "}
            </p>

            <p className="text-gray-600 text-justify mb-4 leading-relaxed">
              Whether you need site offices, accommodation units, toilets, guard
              cabins, or modular classrooms, our solutions are designed for
              quick deployment, minimal site disturbance, and lasting
              performance.{" "}
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/modular/Modular Solutions (2).jpg"
              alt="Landsking Infra Pvt Ltd  Quick-to-Deploy Modular Solutions"
              className="rounded-md shadow-md   transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-13 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/modular/Modular Solutions.jpg"
              alt=" Why Choose Ladsking Infra’s Modular Solutions?"
              width={700}
              height={450}
              className="rounded-md shadow-md   transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Why Choose Ladsking Infra’s Modular Solutions?
              </h2>
            </div>

            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong> Quick Installation:</strong> Delivered in
              ready-to-assemble modules, reducing construction time by up to
              60%..
            </p>
            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong> Superior Build Quality:</strong> Manufactured in our
              controlled facility using high-grade materials and precision
              processes.
            </p>
            <p className="text-gray-600  text-justify leading-relaxed mb-4">
              <strong> Cost-Effective: </strong> Saves time, labor, and overhead
              costs while ensuring consistent quality.
            </p>
            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong> Portable & Relocatable: </strong> Easily dismantled and
              reassembled at new locations.
            </p>
            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong> Durable & Weather-Resistant : </strong> Built to
              withstand diverse environmental conditions and heavy usage.
            </p>
            <p className="text-gray-600 text-justify leading-relaxed mb-4">
              <strong> Custom Configurations: </strong> While standard in
              design, they can be tweaked as per your operational needs.
            </p>
          </div>
        </div>
      </section>
      {/* endcapill */}
      <section className="mx-auto px-4 py-10 md:px-13 lg:px-28">
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

            <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg pt-19 pb-19">
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
                <p className="text-gray-600  text-justify mb-5">
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
            Applications of Our Modular Solutions
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
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronRight className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-2">
        <div className="md:mx-8 mx-auto px-6 md:px-10">
          {/* Title */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <Image
                src="/modular/Modular Solutions.png"
                alt="standard modular"
                width={700}
                height={450}
                className="rounded-md     "
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]  mb-3">
                Engineered to Support Your Fast-Paced Projects
              </h2>
              <p className="text-gray-600  text-justify leading-relaxed">
                Ladsking Infra brings years of expertise in prefab construction,
                delivering modular solutions that extend far beyond just
                temporary setups. Our standard modular units are built with the
                same precision and quality as permanent structures — supported
                by a dedicated team that manages everything from design to
                delivery and installation.
              </p>
              <p className="text-gray-600  text-justify leading-relaxed mt-4">
                From leading infrastructure companies to real estate developers,
                Ladsking Infra has earned trust as a reliable modular
                construction partner for numerous projects nationwide. Our
                extensive manufacturing and logistics network across India
                ensures quick turnaround times and seamless execution — even in
                the most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      {/* why choose us */}
      <section className="w-full bg-white py-8 md:py-10 lg:py-16 px-6 md:px-15 lg:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p className="text-gray-600  text-justify">
              25+ years of expertise in prefabricated and steel building
              solutions. Nationwide presence with a strong logistics and project
              execution network. In-house design & engineering powered by 3D
              modeling and load optimization. Certified manufacturing standards
              ensuring compliance with IS codes and quality benchmarks. Timely
              project delivery backed by structured planning and skilled
              professionals. End-to-end turnkey solutions covering design,
              fabrication, delivery, and installation.
            </p>

            {/* Animated Counters */}
          </div>

          {/* Right Image */}
          <div className="relative mb-5 md:mb-0 lg:mb-0">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
            <Image
              src="/industry.jpg" // replace with your image
              alt="Why Choose Landsking Infra Pvt. Ltd for PEBs "
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
