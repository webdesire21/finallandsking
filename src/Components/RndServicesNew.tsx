"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RndServicesNew() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const router = useRouter();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Civil Engineering Services",
      description:
        "Providing expert civil engineering solutions for infrastructure design and construction, enhancing connectivity, public safety, and sustainable economic growth.",
      image: "/rndServices/mepServices.jpg",
    },
    {
      title: "Architectural Engineering Services",
      description:
        "Combining architectural design and engineering expertise to create functional, visually appealing, and regulation-compliant structures with optimized performance.",
      image: "/rndServices/mechanicalEngineeringServices.jpg",
    },
    {
      title: "HVAC Engineering Services",
      description:
        "Designing efficient HVAC systems that ensure comfortable, healthy indoor environments while minimizing energy use and operational costs.",
      image: "/final/HVAC Design.jpg",
    },
    {
      title: "Architectural 3D Modeling, Drafting, and Rendering Services",
      description:
        "We create LOD 100 to 500 models with photorealistic renderings and meticulous detailing for both commercial and residential projects. Our designs guarantee zoning compliance and accurate layouts. Immersive visualizations enhance communication and streamline design approvals. Speed up your project timelines with our expert architectural modeling services.",
      image: "/final/3d cvil design.jpg",
    },
    {
      title: "Civil 3D Modeling, Drafting, and Rendering Services",
      description:
        "We deliver grading plans, terrain models, and utility layouts fully compliant with local regulations. Accurate visualizations support roads, drainage, and infrastructure planning. Our detailed, data-rich models minimize costly revisions and streamline approvals. Achieve regulatory compliance with our high-precision civil workflows.",
      image: "/final/3d structural design.jpg",
      link: "/coldstorageandwarehouse",
    },
    {
      title: "Structural 3D Modeling, Drafting, and Rendering Services",
      description:
        "We develop LOD-based steel and concrete models with integrated structural logic and global code compliance. Our detailed models include connection points, load-bearing elements, and clash-free layouts. Improve site coordination and fabrication accuracy while ensuring quality outcomes with our expert structural modeling solutions.",
      image: "/rndServices/3dStructuralModeling.webp",
      link: "/solar",
    },
    {
      title: "Mechanical Engineering Services",
      description:
        "We provide CAD-based mechanical design solutions for high-performance, precision-driven systems. From detailed drafts to 3D models, our services ensure engineering accuracy, minimize design errors, and enhance manufacturability—accelerating efficiency, reliability, and time to market.",
      image: "/rndServices/mechanicalEngineeringServices.jpg",
      link: "/hvac",
    },
    {
      title: "BIM Services",
      description:
        "Our BIM solutions integrate all project elements into a single, coherent model, enhancing stakeholder collaboration and transparency. Reduce errors, optimize resource management, and improve efficiency from concept to completion. Streamline your project lifecycle with our expert BIM consulting and engineering services.",
      image: "/final/bim service.jpg",
      link: "/fire-saftey",
    },
    {
      title: "Revit Services",
      description:
        "Leverage Revits parametric features for accurate and flexible design solutions. Our workflows enhance coordination and consistency across all disciplines, reducing rework and improving outcomes. As experienced engineering consultants, we customize Revit processes to meet your project-specific requirements.",
      image: "/rndServices/reviteBring.jpg",
      link: "/fire-saftey",
    },
    {
      title: "CAD Services",
      description:
        "Harness our advanced CAD capabilities to deliver precise and innovative design solutions across industries. We produce detailed, accurate drawings to ensure every aspect aligns with your project goals. Enhance efficiency and innovation with our expert engineering services.",
      image: "/final/cad service.jpg",
      link: "/fire-saftey",
    },
    {
      title: "CAD Conversion Services",
      description:
        "Transform legacy documents into digital formats while maintaining full data integrity. Our conversion solutions preserve design accuracy and improve accessibility for seamless collaboration. Stay ahead with efficient and reliable CAD modernization services.",
      image: "/rndServices/cadConversationServices.jpg",
      link: "/fire-saftey",
    },
    {
      title: "2D Drafting Services",
      description:
        "Deliver clear and accurate 2D technical drawings to form a solid foundation for your projects. Our high-quality plans ensure stakeholders remain aligned and informed. Streamline workflows and enhance project efficiency with our expert drafting services.",
      image: "/rndServices/2ddraftin.webp",
      link: "/fire-saftey",
    },
    {
      title: "MEP Services",
      description:
        "Deliver precise MEP designs that meet all regulatory standards while optimizing building performance. Our solutions enhance efficiency, sustainability, and system reliability. Achieve seamless infrastructure management with our expert MEP services.",
      image: "/rndServices/mepServices.jpg",
      link: "/fire-saftey",
    },
    {
      title: "3D Modeling Services for OEM Manufacturers",
      description:
        "Leverage our detailed 3D models to accelerate development and production while ensuring every part meets industry standards. We combine accuracy and creativity to keep you competitive in the market. Enhance your manufacturing processes with our expert outsourced engineering services.",
      image: "/rndServices/3dStructuralModeling.webp",
      link: "/fire-saftey",
    },
    {
      title: "3D Modeling Services for Visual Merchandising Manufacturers",
      description:
        "Design compelling 3D displays that enhance product presentation and captivate customers. Our visually accurate models drive engagement and increase sales potential. Maximize retail impact with our trusted 3D modeling services.",
      image: "/rndServices/Architectural3DModeling,.jpg",
      link: "/fire-saftey",
    },
    {
      title: "AutoCAD Drafting Services",
      description:
        "Produce detailed technical drawings with our precise AutoCAD drafting processes, ensuring accurate project execution. Our solutions enhance efficiency, reduce errors, and minimize delays. Achieve successful outcomes with our professional outsourced engineering and dedicated support services.",
      image: "/rndServices/AutoCADDrafting.jpg",
      link: "/fire-saftey",
    },
    {
      title: "CAD Design Services",
      description:
        "Drive innovation with our advanced CAD design solutions, tailored to your project requirements. Each design is optimized for practicality and performance, ensuring project success. Bring your design visions to life with our expert CAD services.",
      image: "/rndServices/cadDesignNDrafting.webp",
      link: "/fire-saftey",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white mx-0  md:px-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center">
          Cost-Effective Engineering Services
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
          <button
            ref={prevRef}
            className="bg-[#000080] text-white p-2 rounded-full hover:bg-black transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#000080] text-white p-2 rounded-full hover:bg-black transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slideNext()}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={setSwiper}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative bg-[#000080] rounded-xl overflow-hidden shadow-md cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => {
                  setActiveIndex(i);
                  service.link && router.push(service.link);
                }}
              >
                <div className="w-full h-90 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-[#000080] flex items-center justify-between px-4 py-3 relative z-10">
                  <p className="text-white font-semibold text-sm line-clamp-1">
                    {service.title}
                  </p>
                  <div className="bg-white rounded-full p-1">
                    <motion.div
                      key={
                        hoverIndex === i || activeIndex === i
                          ? "chevron"
                          : "arrow"
                      }
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {hoverIndex === i || activeIndex === i ? (
                        <ChevronRight className="w-4 h-4 text-[#000080]" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-[#000080]" />
                      )}
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoverIndex === i && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(33, 71, 95, 0.85) 0%, rgba(22, 46, 68, 0.85) 100%)",
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white text-sm">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
