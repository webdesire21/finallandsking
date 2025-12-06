"use client";
import { useState, ReactNode, useEffect } from "react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";

import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaSearch, // Requirement Analysis
  FaMapMarkedAlt, // Strategic Planning
  FaCheckCircle, // Quality Assurance
  FaHandshake, // Delivery & Support
} from "react-icons/fa";
import Rndheader from "yes/Components/Rndheader";
import {
  FaIndustry,
  FaDraftingCompass, // Construction Drawing
  FaSnowflake, // HVAC
  FaWater, // Drainage
  FaBuilding, // Civil Information Modeling (CIM)
} from "react-icons/fa";
import Link from "next/link";
import Rndfooter from "yes/Components/Rndfooter";
import Brand from "yes/Components/ClientP";
import Rndtestimonial from "yes/Components/Rndtestimonial";
import {
  Construction,
  Building2,
  Plug,
  Landmark,
  Cuboid,
  FileText,
  Flame,
} from "lucide-react";
import Rndcivil from "yes/Components/Rndcivil";
import Civilservice from "yes/Components/Civilservice";
type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}
// ✅ Card Component
function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-[#f5f7fb] shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image with centered icon */}
      <div className="relative w-full h-25 sm:h-35 overflow-hidden flex items-center justify-center">
        {/* Centered Icon */}
        <div className="absolute flex items-center justify-center bg-white p-2 sm:p-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Hover underline effect */}
      </div>

      {/* Text */}
      <div className="px-4 sm:px-5 pb-6 flex-1 flex flex-col mt-0">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-justify text-sm sm:text-base tracking-wide mb-5 flex-1 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Civil() {
  interface FAQ {
    question: string;
    answer: string;
  }
  interface Possibility {
    subtitle: string;
    description: string;
    image: string;
  }

  const areas = [
    {
      id: 1,
      title: "  Design & Development Services ",
      subtitle: "Comprehensive Mechanical Design & Development Services",
      description:
        "We offer complete mechanical engineering solutions, including core design, analysis, CAD modeling, and product development services across industries. Our expertise covers machine design, sheet metal, assembly modeling, parametric 3D modeling, and tools, fixtures, and jigs design. Using advanced platforms like SolidWorks, CATIA, and Autodesk Inventor, we deliver Global Standard services and manufacturable designs. From legacy conversion to full product lifecycle support, our services enhance collaboration, accelerate development, ensure compliance, and drive innovation at every stage.",
      image: "/menupageimg/mod15.png",
    },
    {
      id: 2,
      title: "Advanced Simulation Services",
      subtitle: "Advanced Simulation, Analysis & Virtual Testing Services",
      description:
        "We deliver comprehensive simulation, analysis, and virtual testing services to improve engineering accuracy and product reliability. Our expertise spans finite element analysis (FEA), fatigue, crash and impact, CAE modal, structural, stress, thermal, vibration, and computational fluid dynamics simulations. Additionally, we provide failure, tolerance, and load testing analyses along with virtual prototyping services. Leveraging advanced simulation engineering tools, our solutions help validate designs, reduce defects, ensure compliance, and accelerate product development across industries.",
      image: "/menupageimg/mod4.png",
    },
    {
      id: 3,
      title: "Industrial Design  Services",
      subtitle: "Industrial Design & Engineering Automation Services",
      description:
        "We provide end-to-end industrial design and engineering automation services to optimize manufacturing processes and product quality. Our expertise includes casting design, vacuum casting, CNC programming, tooling and die design, assembly line optimization, and tolerance analysis for machining. As well, we support process planning, engineering fabrication, production cost estimation, project management, proposal review, bid management, and engineering change orders. Taking advantage of advanced automation tools and best practices, we help industries improve efficiency, reduce errors, ensure compliance, and accelerate production timelines",
      image: "/menupageimg/mod3.jpg",
    },
    {
      id: 4,
      title: "Plant, Piping & HVAC Design Services",
      subtitle: "Plant, Piping & HVAC Design Services",
      description:
        "We provide complete plant, piping, and HVAC design services to optimize operational efficiency, safety, and compliance. Our offerings include plant design engineering, Plant Design Management System (PDMS), modular plant design, piping design and drafting, HVAC ducting design, plumbing, firefighting, and fire protection engineering services. Leveraging advanced CAD and simulation tools, our expert team ensures accuracy in ISO-compliant designs that streamline construction, reduce errors, and enhance overall system performance across industries.",

      image: "/menupageimg/mod8.jpg",
    },

    {
      id: 6,
      title: "Specialized  Design Services",
      subtitle: "Specialized Sector Design Services",
      description:
        "We offer specialized design services across niche industries to meet unique technical and functional requirements. We are experts in assisting industries with our services. like tower design, ship deck design and drafting, and consumer electronics product design. Using advanced CAD tools and industry best practices, we deliver precise, ISO-compliant, and manufacturable designs that enhance performance, ensure compliance, and accelerate product development for specialized sectors.",
      image: "/menupageimg/mod10.png",
    },
    {
      id: 7,
      title: "Product  Services",
      subtitle: "Product Lifecycle & Documentation Services",
      description:
        "We provide each and every product lifecycle and documentation services to support efficient development, compliance, and operations. We are experts in PLM implementation and customization, technical publications, installation and maintenance manuals, engineering change documentation, CE/UL certification support, and material compliance reports. Leveraging industry best practices and advanced tools, we ensure accurate, ISO-compliant documentation that enhances traceability, reduces errors, and accelerates product launching.",
      image: "/menupageimg/mod11.jpeg",
    },
    {
      id: 8,
      title: " Engineering & Sustainability Services",
      subtitle:
        "We offer Expert engineering and sustainability services to optimize designs and reduce costs. Our solutions include design optimization, lightweighting, material substitution, and energy efficiency improvements.We also ensure compliance with environmental regulations like RoHS and REACH, supporting sustainable and efficient product development.",
      description: "",
      image: "/menupageimg/mod12.jpg",
    },
  ];
  const servicesing = [
    {
      id: 1,
      icon: <Construction className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Civil Engineering Services",
      desc: "Landscapinfra offers reliable and affordable civil engineering support for site layout, infrastructure, and urban projects. We work on roads, bridges, drainage, and land development to ensure strong and lasting results.",
    },
    {
      id: 2,
      icon: <Building2 className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Structural Engineering Services",
      desc: "We design and plan safe, stable, and efficient structures for all kinds of projects. From industrial buildings to heavy foundations, our team ensures strength and performance in every design.",
    },
    {
      id: 3,
      icon: <Plug className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Electrical Engineering Services",
      desc: "Our team provides practical electrical design solutions for power systems, control panels, and automation setups. We help industries keep their operations safe, efficient, and well-connected.",
    },
    {
      id: 4,
      icon: <Landmark className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Infrastructure Engineering Services",
      desc: "We handle complete infrastructure planning and coordination for utilities, transport systems, and plant layouts. Every design is precise, clear, and ready for construction.",
    },
    {
      id: 5,
      icon: <Cuboid className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "BIM Services",
      desc: "Our Building Information Modeling (BIM) helps reduce errors and improve project speed. We use smart 3D models to plan, estimate, and coordinate work more effectively.",
    },
    {
      id: 6,
      icon: <FileText className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Technical Manuals & Engineering Documentation",
      desc: "We create clear and accurate manuals, SOPs, and datasheets to support training, operations, and audits. Each document is simple, useful, and reliable.",
    },
    {
      id: 7,
      icon: <Flame className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Fire Protection Engineering Services",
      desc: "We design effective fire protection systems with accurate planning and safety checks. Our service helps ensure protection for industrial plants, offices, and public buildings.",
    },
  ];

  const services = [
    {
      icon: <FaSearch size={40} className="text-[#000080]" />,
      title: "Requirement Analysis",
      description:
        "We begin by assessing your business goals, technical specifications, and project constraints to tailor our mechanical engineering services. This ensures compliance, addresses engineering challenges, and achieves long-term performance objectives.",
    },
    {
      icon: <FaMapMarkedAlt size={40} className="text-[#000080]" />,
      title: "Strategic Planning",
      description:
        "Our engineers and project leads develop a clear roadmap, selecting the right tools, experts, and delivery methods to optimize efficiency, accuracy, and timely delivery across all mechanical engineering services.",
    },
    {
      icon: <FaDraftingCompass size={40} className="text-[#000080]" />,
      title: "Design & Development",
      description:
        "Strategic plans are translated into action using CAD modeling, simulation, and virtual prototyping. We engineer every component for high performance, durability, and scalability.",
    },
    {
      icon: <FaIndustry size={40} className="text-[#000080]" />,
      title: "Implementation",
      description:
        "Once SLAs are defined, our engineers execute detailed modeling, drafting, analysis, and documentation tasks while maintaining full transparency and alignment with project goals.",
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#000080]" />,
      title: "Quality Assurance",
      description:
        "As an ISO-certified company, we rigorously test and review every deliverable to ensure accuracy, validated simulations, and compliance with GD&T standards for reliable outcomes.",
    },
    {
      icon: <FaHandshake size={40} className="text-[#000080]" />,
      title: "Delivery & Support",
      description:
        "Final deliverables are securely shared in your preferred format. We offer ongoing support, including updates, documentation, and technical guidance for seamless post-project continuity.",
    },
  ];

  const possibilities = [
    {
      subtitle: "100% Data security",
      description:
        "We implement ISO-certified data protection protocols to ensure confidentiality at every stage. A signed NDA backs every project, safeguarding your data against breaches, downtime, or unauthorized access.",
      image: "/choose/choseone.webp",
    },
    {
      subtitle: "Global Standard Infrastructure",
      description:
        "Our team uses advanced CAD workstations, simulation software, secure data centers, and redundant communication networks",
      image: "/choose/global.jpg",
    },
    {
      subtitle: "Precision-Engineered Mechanical Services",
      description:
        "Using industry-standard tools like SolidWorks, AutoCAD, and Creo, we deliver models, assemblies, and components with unmatched accuracy, fidelity, and manufacturability.",
      image: "/choose/precision.jpg",
    },
    {
      subtitle: "Multiple Quality Checks",
      description:
        "Every deliverable undergoes multi-stage quality inspections, guided by Lean Six Sigma principles, to detect and resolve even minor errors, ensuring all mechanical engineering services meet strict technical standards.",
      image: "/choose/quality.jpg",
    },
    {
      subtitle: "Compliance with Industry Standards",
      description:
        "All designs adhere to global protocols such as ASME, ISO, ASTM, SAE, BS, DIN, ANSI, and MIL, guaranteeing designs meet tolerancing, material specifications, and documentation requirements",
      image: "/choose/Data security.jpg",
    },
    {
      subtitle: "Quick Turnaround Time",
      description:
        "Our 10+ global delivery centers offer fast project execution and 24/48-hour response times while maintaining high accuracy, scalability, and service quality.",
      image: "/choose/quick.jpg",
    },
    {
      subtitle: "Flexible Pricing Options",
      description:
        "Pricing models are tailored based on team size, resource hours, shift patterns, location, and service complexity, aligning perfectly with your operational and budgeting goals.",
      image: "/choose/flexible.jpg",
    },
  ];
  const [cardsToShow, setCardsToShow] = useState<Possibility[]>([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const sliced = possibilities
      .slice(startIndex, startIndex + visibleCards)
      .concat(
        startIndex + visibleCards > possibilities.length
          ? possibilities.slice(
              0,
              (startIndex + visibleCards) % possibilities.length
            )
          : []
      );
    // setCardsToShow(sliced);
  }, [startIndex, visibleCards, possibilities]);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };
  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Structure",
      link: "#",
    },

    {
      image: "/expertise/third.png",
      title: "Labor Hutment",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Control Room",
      link: "#",
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
      question:
        "How long does it take to construct a prefabricated factory building?",
      answer:
        "Construction time depends on the size and complexity but is generally much faster than traditional methods.",
    },
  ];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      label: "Years of Expertise",
      value: 20,
      suffix: "+",
      icon: <FaAward className="text-[#000080] text-xl" />,
    },
    {
      label: "Projects Delivered",
      value: 500,
      suffix: "+",
      icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
    },
    {
      label: "Nationwide Presence",
      value: 25,
      suffix: "+ States",
      icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
    },
    {
      label: "Certified Processes",
      value: 100,
      suffix: "%",
      icon: <FaCertificate className="text-[#000080] text-xl" />,
    },
  ];
  const projects: Project[] = [
    {
      id: 1,
      title: "High-Rise Building Design",
      description:
        "At Landsking Infra, we design safe, efficient, and elegant high-rise structures that meet international engineering standards. Our team performs detailed load analysis and material optimization to achieve the perfect balance between strength, cost, and aesthetics, ensuring long-lasting performance and visual appeal.",
      image: "/civil/high-rise building design.jpeg",
    },
    {
      id: 2,
      title: "Structural Design Services",
      description:
        "Our structural design solutions combine precision with creativity. We conduct feasibility studies, load assessments, and risk analysis while working closely with architects to blend safety and beauty seamlessly. Every design we deliver supports efficient construction and long-term durability.",
      image: "/civil/Structural Design Services.jpeg",
    },
    {
      id: 3,
      title: "Industrial Structure Design",
      description:
        "We craft robust designs for warehouses, factories, and manufacturing plants that prioritize safety, efficiency, and space utilization. By understanding each industry’s workflow and environmental challenges, Landsking Infra ensures every structure performs reliably under demanding conditions.",
      image: "/civil/Industrial Structure Design.jpeg",
    },

    {
      id: 4,
      title: "Structural Shop Drawing Services",
      description:
        "We prepare high-precision shop drawings that translate design concepts into fabrication-ready blueprints. These drawings minimize on-site errors, support accurate cost estimation, and improve communication between design, fabrication, and construction teams.",
      image: "/civil/Structural Shop Drawing Services.jpeg",
    },
    {
      id: 5,
      title: "Structural BIM Modeling",
      description:
        "Through advanced BIM modeling, we create intelligent 3D representations that enhance collaboration and accuracy. Landsking Infra’s BIM solutions reduce design conflicts, improve visualization, and streamline the entire construction workflow from planning to execution.",
      image: "/structure bmi moduling.jpg",
    },
    {
      id: 6,
      title: "Fabrication Drawing",
      description:
        "Our fabrication drawings serve as the foundation for accurate manufacturing and assembly. Each detail is crafted with precision to reduce material waste, prevent rework, and ensure smooth fabrication.",
      image: "/civil/Fabrication Drawing.JPG",
    },
    {
      id: 7,
      title: "Facade Engineering",
      description:
        "We combine art and engineering to design facades that are visually striking and environmentally efficient. Our experts choose the right materials, thermal properties, and finishes to enhance durability, insulation, and maintenance ease.",
      image: "/civil/Facade .jpeg",
    },
    {
      id: 8,
      title: "Sustainable Design",
      description:
        "Sustainability is at the heart of our engineering. We design eco-friendly structures that reduce environmental impact, improve energy efficiency, and comply with green building standards. Each project promotes material reuse, water conservation, and carbon-conscious design.",
      image: "/civil/Sustainable Design.jpg",
    },
    {
      id: 9,
      title: "Seismic Design",
      description:
        "Our seismic engineering services ensure that structures withstand earthquakes and ground motion effectively. Using advanced modeling and retrofitting techniques, we enhance building resilience and safeguard lives and investments.",
      image: "/civil/seismic design.jpg",
    },
    {
      id: 10,
      title: "Structural Steel Detailing",
      description:
        "We offer accurate steel detailing services that form the backbone of efficient construction. Each drawing meets global standards, ensuring fabrication accuracy, faster erection, and consistent project flow.",
      image: "/civil/Structural Steel Detailing.jpeg",
    },
    {
      id: 11,
      title: "Construction Documentation",
      description:
        "Our comprehensive construction documentation covers every project detail—from drawings and materials to schedules and cost tracking. This documentation ensures compliance, clarity, and complete coordination between teams and authorities.",
      image: "/civil/Construction Documentation.jpeg",
    },
  ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };

  return (
    <>
      <Rndheader />
      <Rndcivil />
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Civil services
            </h2>

            <p className="text-gray-600  text-justify mb-4 leading-relaxed">
              Innovative Civil Engineering Services for Modern Infrastructure At
              Landscapinfra, we bring innovation, precision, and sustainability
              together to craft the future of infrastructure. Our civil
              engineering services are designed to improve design efficiency,
              optimize construction processes, and ensure every project stands
              the test of time. Our expert engineers have successfully delivered
              projects across highways, bridges, drainage systems, land
              development, and large-scale infrastructure works — all designed
              to meet ISO, IRC, and international standards. From detailed
              structural analysis to real-time project coordination, we ensure
              every design is precise, practical, and ready for construction.
            </p>

            <Link href="/rnd-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/industrial soalr.jpg"
              alt=" civil-engineering"
              className="rounded-md shadow-md w-[700px] h-[430px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      <main className="bg-white px-4 sm:px-6 md:px-6">
        <section className="bg-white py-4 md:py-12 px-2 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center text-center py-1 md:py-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
              MEP Design & Drafting Services
            </h1>
            <p className="text-black mb-5 md:mb-0  text-lg md:text-md">
              At Landsking Infra, we create complete MEP design and drafting
              solutions that bring precision and performance together With deep
              expertise in system integration and load analysis, we make your
              project execution smooth and compliant with global standards. Our
              engineers plan and design mechanical, electrical, and plumbing
              systems tailored to your building’s needs, ensuring comfort,
              efficiency, and safety.
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Construction Drawing Solutions */}
            <Card
              icon={<FaDraftingCompass size={40} className="text-[#8080FF]" />}
              title="Construction Drawing Solutions"
              description="We produce highly detailed construction drawings guiding each phase of a project—from foundation to finishing—ensuring precision, clarity, and coordination with site requirements."
            />

            {/* HVAC Design Services */}
            <Card
              icon={<FaSnowflake size={40} className="text-[#8080FF]" />}
              title="HVAC Design Services"
              description="We deliver efficient, sustainable HVAC system designs with optimized airflow, energy use, and safety—covering load calculations, layouts, and control diagrams."
            />

            {/* Drainage Design Services */}
            <Card
              icon={<FaWater size={40} className="text-[#8080FF]" />}
              title="Drainage Design Services"
              description="Our experts design reliable drainage and stormwater systems that prevent flooding, ensure flow efficiency, and meet environmental compliance standards."
            />

            {/* Construction Scheduling & Tracking */}
            <Card
              icon={<FaProjectDiagram size={40} className="text-[#8080FF]" />}
              title="Construction Scheduling & Tracking"
              description="We offer structured scheduling and tracking solutions that help teams stay on time, minimize delays, and achieve milestones efficiently across project phases."
            />

            {/* Civil Information Modeling (CIM) Services */}
            <Card
              icon={<FaBuilding size={40} className="text-[#8080FF]" />}
              title="Civil Information Modeling (CIM) Services"
              description="Landsking Infra pioneers CIM integration, enabling smarter infrastructure design through data-rich 3D modeling, improved collaboration, and reduced rework."
            />

            {/* Geospatial Solutions */}
            <Card
              icon={<FaMapMarkedAlt size={40} className="text-[#8080FF]" />}
              title="Geospatial Solutions"
              description="We provide GIS mapping, drone surveying, and 3D terrain modeling to empower civil, environmental, and industrial projects with accurate spatial insights."
            />
          </div>

          {/* carddd */}
        </section>
      </main>
      {/* endcapill */}
      <section className=" md:mx-5 lg:mx-5 mx-auto px-5 py-5 md:py-10  ">
        <header className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl text-[#000080] font-extrabold">
            More Engineering Services
          </h2>
          <p className="mt-2 text-sm text-black">
            Expert solutions across every discipline of engineering excellence.
          </p>
        </header>

        {/* Mobile: horizontal scroll with snapping */}
        <div className="block sm:hidden">
          <div className=" grid grid-cols-1  gap-8">
            {servicesing.map((s) => (
              <article
                key={s.id}
                className="snap-center min-w-[78%] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200"
                role="article"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-[#000080]">
                  {s.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#000080]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-justify text-black">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 md:mx-7">
          {servicesing.map((s) => (
            <article
              key={s.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow focus:shadow-lg outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-[#000080]">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#000080]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-justify text-black">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      {/* sectorss */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-1 md:pt-16 bg-white">
        <section className="w-full py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
              Structural Engineering Services
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
                            <h3 className="text-sm md:text-sm font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-[10px] text-justify md:text-[13px] mb-4 ">
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
      {/* explore content */}
      {/* business benifts */}

      {/* our process */}
      <section className=" py-7 md:py-16 ">
        {/* Heading Row */}
        <div className="text-center mb-7 md:mb-12 px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#000080]">
            Our Civil Engineering Service Workflow
          </h1>
          <p className="text-gray-600 text-justify mt-3 max-w-2xl mx-auto">
            At landscapinfra, we utilize a standardized workflow to streamline
            operations, reduce costs, and provide high-quality mechanical
            engineering services. Our process ensures that every step aligns
            with your project goals, technical requirements, and compliance
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-6 md:gap-6 px-1 md:px-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  hover: transition duration-300 flex flex-col items-left text-left p-6 group"
            >
              {/* Icon */}
              <div className="text-[#000080] p-4 rounded-full mb-4 flex items-left justify-left transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Civilservice />
      <Brand />
      <Rndtestimonial />
      <Rndfooter />
    </>
  );
}
