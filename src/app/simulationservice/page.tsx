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
    title: "Structural Simulation (Stress, Strain & Load Distribution)",
    description:
      " We deliver innovative structural simulations to analyze stress, strain, and load distribution. This ensures safer, stronger, and more trustworthy designs for complex engineering projects.",

    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "HVAC and Thermal Flow Analysis",
    description:
      " Our HVAC simulations maximize airflow, temperature control, and energy efficiency. We design sustainable systems that improve comfort while reducing in operation costs.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Solar Radiation & Energy Modeling",
    description:
      " Using precise solar radiation and energy modeling, we help increase renewable energy output. Our simulations guide smarter solar integration for cost-effective sustainability.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Building Performance Simulations (BPS)",
    description:
      " We provide building performance simulations to assess energy use, daylight, ventilation, and overall efficiency. This enables data-driven decisions for powerful green buildings.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Fire and Safety Evacuation Modeling",
    description:
      " Our fire and safety simulations predict evacuation routes and emergency responses. This reduce risks, ensuring compliance and protecting people and assets.",
    image: "/realstate/fiveS.webp",
  },
];

const sectors = [
  {
    id: 1,
    title: "Industrial Facility Layout & Safety Design",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We handle all space planning, interior finishes, and seamless integration of all mechanical, electrical, and plumbing systems.",
  },
  {
    id: 2,
    title: "HVAC System Optimization for Large Buildings",
    image: "/industry.jpg",
    url: "/urban",
    description:
      "We install smart systems for lighting, HVAC, and access control to create efficient and automated offices.",
  },
  {
    id: 3,
    title: "Green Building Certification Support",
    image: "/industry.jpg",
    url: "/advanced",
    description:
      "We provide modular partitions, acoustic designs, and energy-efficient solutions for a functional and comfortable workspace.",
  },
  {
    id: 4,
    title: "Fire Modeling & Emergency Planning",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "We develop green offices that are certified by LEED and IGBC, focusing on eco-friendly and healthy environments.",
  },
  {
    id: 4,
    title: "  Structural Testing for Complex Architectural Design",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "We develop green offices that are certified by LEED and IGBC, focusing on eco-friendly and healthy environments.",
  },
];
const areas = [
  {
    id: 1,
    title: "Industrial Facility Layout & Safety Design",
    subtitle: "Industrial Facility Layout & Safety Design",
    description:
      "We design layouts for industrial plants that enhance workflow efficiency while meeting strict safety standards.Our simulation-driven procedure reduces risks and ensures compliance with international guidelines.",
    image: "/green.png",
  },

  {
    id: 3,
    title: "HVAC System Optimization for Large Buildings",
    subtitle: "HVAC System Optimization for Large Buildings",
    description:
      " Modern simulations help improve HVAC system efficiency, lower energy costs, and maintain indoor comfort. We deliver sustainable solutions tailored for huge commercial, residential, and industrial spaces.",
    image: "/green.png",
  },
  {
    id: 4,
    title: "Green Building Certification Support",
    subtitle: "Green Building Certification Support",
    description:
      "Our services support projects best for LEED, IGBC, and other green building certifications. Through fire and smoke simulations, we predict dangers and design effective evacuation strategies. This ensures maximum safety, compliance, and preparedness for emergencies.",
    image: "/green.png",
  },
  {
    id: 5,
    title: "Structural Testing for Complex Architectural Design",
    subtitle: "Structural Testing for Complex Architectural Design",
    description:
      " We provide digital testing of complex structures to evaluate strength, stability, and durability Our solutions minimize design errors and support innovative architectural projects.",
    image: "/green.png",
  },
  {
    id: 6,
    title: "Fire Modeling & Emergency Planning",
    subtitle: "Fire Modeling & Emergency Planning",
    description:
      " Through fire and smoke simulations, we predict dangers and design effective evacuation strategies.This ensures maximum safety, compliance, and preparedness for emergencies.",
    image: "/green.png",
  },
];
export default function Simulationservice() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);
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
          src="/about.png"
          alt="simulation service"
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
            SIMULATION SERVICE{" "}
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
      <section className=" mx-auto px-6 py-7  md:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-cente md:px-20">
        <div>
          <h2 className="text-3xl md:text-3xl font-bold  text-[#000080] ">
            SIMULATION SERVICE{" "}
          </h2>

          <p className="text-gray-600 leading-relaxed text-justify mb-6 mt-5">
            Landsking Infra provides advanced simulation services for complex
            engineering and infrastructure projects. Our solutions optimize
            designs, improve efficiency, and lower operational risks with
            precision. Through digital modeling, we help clients validate ideas
            before real-world implementation. Simulation tools predict
            performance, durability, and long-term reliability of systems. This
            approach ensures cost-effective execution with fewer delays or
            design errors. With Landsking Infra, innovation meets accuracy for
            smarter project delivery.
          </p>

          {/* <button className="mt-6 px-6 py-3 bg-[#000080] text-white font-medium rounded-lg shadow hover:bg-[#000060] transition">
            Read more
          </button> */}
          <button
            className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Get a Quote
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full ">
            <Image
              src="/industry.jpg"
              alt="SIMULATION"
              width={700}
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
              Our Services{" "}
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
                      <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
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
                            <p className="text-[10px] text-justify md:text-sm mb-4 ">
                              {project.description}
                            </p>
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
      {/* esplore */}
      <section className="mx-auto px-4 py-10 md:px-20 lg:px-28">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8">
          Sectors
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
                <p className="text-gray-600 text-justify mb-5">
                  {selectedArea.description}
                </p>
                <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                  Contact{" "}
                  <span className="p-1 rounded-full text-[#000080]">→</span>
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
      <ContactSection />
      <Footer />
    </>
  );
}
