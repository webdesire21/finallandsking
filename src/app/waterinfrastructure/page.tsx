"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";
interface Projectsector {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Projectsector[] = [
  {
    id: 1,
    title: "Water & Sewage Plants",
    description:
      " Design and implement WTP and STP systems ensuring safe water supply, effective wastewater treatment, and regulatory compliance.",
    image:
      "/water/Soluciones integrales en la gestión de aguas y efluentes.jpeg",
  },
  {
    id: 2,
    title: "Rainwater Harvesting Systems",
    description:
      "Develop rainwater harvesting and recharge solutions to conserve water, reduce runoff, and support sustainable urban water management.",
    image: "/water/rain water harvesting.jpg",
  },
  {
    id: 3,
    title: "Stormwater & Drainage",
    description:
      " Plan and construct stormwater and drainage infrastructure to prevent flooding, ensure efficient runoff, and maintain urban safety.",
    image: "/water/strom water.jpg",
  },
  {
    id: 4,
    title: "Pumping Stations & Reservoirs",
    description:
      " Design pumping stations and underground reservoirs to provide reliable water storage, pressure, and distribution for communities and industries.",
    image: "/water/plumbing stain and reservarious.jpg",
  },
  {
    id: 5,
    title: "Pipeline Networks & Distribution",
    description:
      "Implement pipeline networks and distribution systems ensuring seamless water delivery, minimal leakage, and optimized operational efficiency.",
    image: "/water/py.jpg",
  },
];

const sectors = [
  {
    id: 1,
    title: "Integrated Design & Fit-outs",
    image: "/water/",
    url: "/manufacturing",
    description:
      "We handle all space planning, interior finishes, and seamless integration of all mechanical, electrical, and plumbing systems.",
  },
  {
    id: 2,
    title: "Smart Automation",
    image: "/water/",
    url: "/urban",
    description:
      "We install smart systems for lighting, HVAC, and access control to create efficient and automated offices.",
  },
  {
    id: 3,
    title: "Specialized Interiors",
    image: "/water/",
    url: "/advanced",
    description:
      "We provide modular partitions, acoustic designs, and energy-efficient solutions for a functional and comfortable workspace.",
  },
  {
    id: 4,
    title: "Sustainable Green Offices",
    image: "/water/",
    url: "/oil",
    description:
      "We develop green offices that are certified by LEED and IGBC, focusing on eco-friendly and healthy environments.",
  },
];

export default function Waterinfrastructure() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % sectors.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/banner.jpg"
          alt=" Water Infrastructure"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Water Infrastructure
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl"
          >
            Building a sustainable future with clean energy solutions
          </motion.p>
        </div>
      </div>

      {/* Image + Text Section */}

      <section className="mx-auto px-6 py-5 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center md:px-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
            Landsking Infra – Water Infrastructure Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed mb-2 text-justify">
            Landsking Infra specializes in designing and executing advanced
            water infrastructure systems that promote sustainable urban and
            industrial development. Our turnkey solutions cover water supply,
            treatment, and distribution, ensuring efficiency, quality, and
            long-term environmental compliance. With extensive expertise in both
            greenfield and brownfield projects, we deliver tailored solutions
            that meet unique site requirements. Our end-to-end in-house design
            and execution capabilities allow precise planning and seamless
            implementation. We emphasize sustainability and water reuse,
            incorporating innovative technologies to optimize resources. All
            projects strictly adhere to CPCB, MoEF, and WHO water quality
            standards, guaranteeing safe, reliable, and future-ready water
            infrastructure solutions.
          </p>

          <button
            className="border mt-2 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Get a Quote
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
            <Image
              src="/industry.jpg"
              alt=" Water Infrastructure s services"
              width={500}
              height={450}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Sectors Carousel */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-5 md:pt-10 bg-white">
        <section className="w-full md:py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
              Our services
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              centeredSlides={false}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  {({ isActive }) => (
                    <div
                      className={`relative text-center transition-all duration-500 group ${
                        isActive ? "scale-105" : "scale-90 opacity-70"
                      }`}
                    >
                      <div className="relative w-full h-48 sm:h-56 md:h-70 flex justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full rounded-lg"
                          />

                          <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 px-4 md:px-0 text-center text-sm font-semibold">
                            {project.title}
                          </div>

                          <div
                            onClick={() => handleOverlayToggle(project.id)}
                            className={`
                                 absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                                 rounded-lg transition-opacity duration-500 cursor-pointer
                                 ${
                                   activeOverlay === project.id
                                     ? "opacity-100"
                                     : "opacity-0"
                                 }
                                 md:opacity-0 md:group-hover:opacity-100 md:cursor-default
                               `}
                          >
                            <h3 className="text-sm md:text-lg font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-[10px] md:text-[17px] mb-4 ">
                              {project.description}
                            </p>
                            {/* <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                              Know More
                            </button> */}
                          </div>

                          <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#000080"
                              strokeWidth="1.5"
                            >
                              <line x1="20" y1="12" x2="4" y2="12" />
                              <polyline points="12 4 4 12 12 20" />
                            </svg>
                          </div>

                          <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#1c398e"
                              strokeWidth="1.5"
                            >
                              <line x1="4" y1="12" x2="20" y2="12" />
                              <polyline points="12 4 20 12 12 20" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 md:-left-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000080"
                strokeWidth="1.5"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="12 4 4 12 12 20" />
              </svg>
            </div>

            <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 md:-right-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1c398e"
                strokeWidth="1.5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="12 4 20 12 12 20" />
              </svg>
            </div>
          </div>
        </section>
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}
