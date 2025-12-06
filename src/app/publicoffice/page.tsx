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
    title: "Power",
    description:
      "Tata Projects provides customized turnkey solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP), and Flue-gas desulfurization (FGD) solutions. With rich experience in coal and gas-based plants, super and subcritical technologies, we have executed several large and complex projects.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Water",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Advanced Technology Facilities",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Oil, Gas and Hydrocarbon",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fiveS.webp",
  },
];

export default function Publicoffice() {
  const [, setCurrent] = useState(0); // Ignore first item to avoid ESLint warning
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

  // Auto-slide for desktop
  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % projects.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/banner.jpg"
          alt="public office"
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
            Office Space
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
      <section className="mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center md:px-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
            CREATING MODERN OFFICE SPACES
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Building your dream office shouldn&apos;t be a nightmare. At
            Landsking Infra, we turn the complex process of creating a modern
            workspace into a simple, stress-free journey. We design and build
            flexible offices that not only reflect your brand&apos;s unique
            identity but also boost your team&apos;s productivity and
            well-being. <br />
            We manage the entire process, from BIM-based visualization and 3D
            walkthroughs to the final handover. This &quot;design to handover
            under one roof&quot; approach ensures timely delivery and cost
            transparency. Our dedicated in-house team handles every detail,
            ensuring your project complies with all major codes like NBC and
            ASHRAE. By focusing on employee wellness and sustainable operations,
            we create inspiring spaces where your people can thrive.
          </p>

          <button
            className="border mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Get a Quote
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
            <Image
              src="/industry.jpg"
              alt="  CREATING MODERN OFFICE SPACES"
              width={500}
              height={450}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sectors Carousel */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-5 md:pt-10 bg-white">
        <section className="w-full py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
              Services
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              centeredSlides={false}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
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
                            className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                              rounded-lg transition-opacity duration-500 cursor-pointer
                              ${
                                activeOverlay === project.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              }
                              md:opacity-0 md:group-hover:opacity-100 md:cursor-default`}
                          >
                            <h3 className="text-sm md:text-lg font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-[10px] md:text-[17px] mb-4  text-justify">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
