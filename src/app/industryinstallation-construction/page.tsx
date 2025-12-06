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
import Industrybrand from "yes/Components/Industrybrand";
import Industryservice from "yes/Components/Industryservice";
import Construct from "yes/Components/Construct";
import Industryheader from "yes/Components/Industryheader";
import Industryfooter from "yes/Components/Industryfooter";

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
        <p className="text-black  text-sm sm:text-base tracking-wide mb-5 flex-1 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Industryinstallationconstruction() {
  interface FAQ {
    question: string;
    answer: string;
  }
  interface Possibility {
    subtitle: string;
    description: string;
    image: string;
  }

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
        setVisibleCards(1); // 📱 mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // 💻 tablet
      } else {
        setVisibleCards(4); // 🖥 desktop
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
      title: "Steel & Cement Plants",
      description:
        "We undertake the construction of heavy-duty industrial plants designed to support large-scale and continuous operations. Our expertise includes structural steel fabrication, equipment foundations, material handling infrastructure, and utility systems. With precise planning and on-site coordination, we deliver robust, safe, and workflow-optimized production environments.",
      image: "/civil/high-rise building design.jpeg",
    },
    {
      id: 2,
      title: "Food & Beverages",
      description:
        "We build hygiene-compliant production facilities for food and beverage processing, ensuring sterile layouts, contamination-free material flow, and temperature-controlled environments. Our construction approach aligns with FSSAI and industry quality norms, enabling efficient operations and long-term facility sustainability.",
      image: "/civil/Structural Design Services.jpeg",
    },
    {
      id: 3,
      title: "Pharma & Chemical Units",
      description:
        "We construct high-standard manufacturing units, cleanrooms, laboratories, and utility blocks that adhere to GMP, ISO, and regulated safety protocols. Our systems ensure controlled environments, chemical handling safety, waste management, and seamless integration with production equipment for reliable operational performance.",
      image: "/civil/Industrial Structure Design.jpeg",
    },

    {
      id: 4,
      title: "Oil & Gas",
      description:
        "Landsking Infra undertakes construction for refineries, terminals, storage tanks, and pipeline support infrastructure. With strict compliance to HSE (Health, Safety & Environment) standards, we ensure secure execution under high-risk conditions. Our approach focuses on structural stability, fire protection systems, and operational safety integrity.",
      image: "/civil/Structural Shop Drawing Services.jpeg",
    },
    {
      id: 5,
      title: "Power Plants (Thermal / Solar / Hydro)",
      description:
        "We execute the civil, structural, and equipment installation works required for power generation facilities. Our capabilities include foundation works, turbine & boiler structures, cooling systems, PV panel infrastructure, and hydro support structures. We ensure high reliability and performance efficiency throughout the plant lifecycle.",
      image: "/civil/Industrial Structure Design.jpeg",
    },
    {
      id: 6,
      title: "Warehouses & Logistic Parksg",
      description:
        "We develop large-scale logistics infrastructure with optimized internal layouts, high load-bearing structures, dock levels, internal roads, stormwater systems, and racking compatibility. Our warehouses are built for efficient movement, safety compliance, and future expansion, meeting modern supply chain demands.",
      image: "/civil/Fabrication Drawing.JPG",
    },
    {
      id: 7,
      title: "Real Estate & Industrial Parksg",
      description:
        "We plan and construct residential, commercial, and multi-industry development zones with integrated infrastructure facilities including roads, drainage, utilities, landscaping, and building structures. Our execution ensures sustainable development, organized layouts, and long-term asset value for developers and end users.",
      image: "/civil/Facade .jpeg",
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
      <Industryheader />
      <Construct />
      {/* description */}
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Building Spaces That Last
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Our teams follow a centralized planning and monitoring system to
              ensure efficiency, quality, and transparency at every stage. We
              maintain strong coordination among clients, architects, and
              project teams. Strict safety standards and trained supervisors
              ensure a safe and organized jobsite.
            </p>

            <Link href="/industrycontact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/mod13.jpg"
              alt=" industyry construction"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}

      {/* mechanical services */}
      <main className="bg-white px-4 sm:px-6 md:px-6">
        <section className="bg-white py-10 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center text-center py-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
              Why is Landsking Infra Best Contractor for construction Projects?
            </h1>
            <p className="text-black  text-lg md:text-md text-justify">
              Landsking Infra understands the unique requirements of each
              industrial sector and delivers customized, end-to-end construction
              solutions. Our approach ensures efficient, safe, and
              high-performance facilities that maximize operational value and
              long-term reliability.
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* Construction Drawing Solutions */}
            <Card
              icon={<FaDraftingCompass size={40} className="text-[#8080FF]" />}
              title="Proven Industrial Expertise"
              description=" Over 10 years delivering 280+ successful projects across industrial and commercial sectors."
            />

            {/* HVAC Design Services */}
            <Card
              icon={<FaSnowflake size={40} className="text-[#8080FF]" />}
              title="Modern Construction Technology
"
              description=" Leverages advanced machinery, precision tools, and turnkey EPC solutions for efficient execution."
            />
            <Card
              icon={<FaDraftingCompass size={40} className="text-[#8080FF]" />}
              title="ISO-Certified Quality Assurance"
              description="Ensures top-quality delivery with ISO 9001:2015 standards and strict safety protocols."
            />

            {/* HVAC Design Services */}
            <Card
              icon={<FaSnowflake size={40} className="text-[#8080FF]" />}
              title="On-Time Project Delivery"
              description=" Projects are completed within schedule and budget without compromising quality.
"
            />
            <Card
              icon={<FaDraftingCompass size={40} className="text-[#8080FF]" />}
              title="Seamless Turnkey Management
"
              description=" Provides end-to-end project coordination, flexible execution, and hassle-free client experience.
"
            />

            <Card
              icon={<FaSnowflake size={40} className="text-[#8080FF]" />}
              title="Global Client Satisfaction"
              description="Trusted by 55+ clients worldwide for reliable, high-performance construction solutions.
"
            />
          </div>
        </section>
      </main>

      {/* <Industryservice /> */}
      <Industrybrand />

      <Rndtestimonial />
      <Industryfooter />
    </>
  );
}
