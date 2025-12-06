// components/AlternatingSections.tsx
import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // <- import chevrons

interface Section {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "Industrial, Warehouse & PEB Projects",
    description:
      "Landsking Infra Pvt. Ltd. is a leading industrial construction company in Chennai, specializing in delivering top-notch industrial and warehouse projects.We offer far more than conventional construction; we act as your dedicated partner for integrated infrastructure solutions. Our firm seamlessly merges decades of mechanical engineering services expertise with advanced automation and innovative construction models. We incorporate expert practices like CAD modeling early in the development lifecycle to ensure every structure, particularly our PEB (Pre-Engineered Building) systems, delivers optimized performance and adheres to strict ISO compliance. With our proven approach, you receive world-class standards and guaranteed timely project delivery across India, supported by verified authority and expertise.",
    images: [
      "/industry/Industrial.jpg",
      "/industry/warehouse (1).jpg",
      "/industry/Industrial (2).jpg",
    ],
  },
  {
    id: 2,
    title: "Commercial, Pharma & Hotel Projects",
    description:
      "Landsking Infra Pvt. Ltd. has extensive experience in executing commercial projects, including office complexes, restaurants, pharma facilities, and hotels.We offer specialized expertise for every commercial endeavor, acting as your dedicated partner for integrated infrastructure planning. Our professional team ensures high-quality construction and effective project management. With over two decades of experience, we consistently deliver projects—from sensitive pharma facilities to premium hotels—that meet global standards, providing clients with reliable, timely, and and efficient solutions for all commercial infrastructure needs.",
    images: [
      "/industry/Commercial (2).jpg",
      "/industry/Commercial.jpg",
      "/industry/Commercial (3).jpg",
    ],
  },
  {
    id: 3,
    title: "Institutional & Educational Projects",
    description:
      "We provide comprehensive engineering, procurement, and construction (EPC) solutions for both specialized healthcare and educational facilities. Our expertise encompasses advanced medical campuses, specialized academic blocks, and allied residential complexes, ensuring resilient platforms for future health and learning. We partner with clients across diverse global industries to design, build, and maintain their vital capital projects.",
    images: [
      "/industry/educational institute.jpg",
      "/industry/educational institute (2).png",
      "/industry/educational institute.png",
    ],
  },
  {
    id: 4,
    title: "Residential, Resorts & Villas",
    description:
      "We provide complete solutions for residential and community infrastructure. This includes large-scale integrated township development, multi-storied housing, and essential allied facilities like hospital augmentation and environmental parks. We also handle specialized design-build contracts for sensitive sites such as naval bases.Integrated Township Development,Specialized Housing & Allied Facilities,Naval Base Infrastructure",
    images: [
      "/industry/residential (2).png",
      "/industry/residential.jpg",
      "/industry/residential.png",
    ],
  },
  {
    id: 5,
    title: "MEP (Mechanical, Electrical & Plumbing) Projects",
    description:
      "Landsking Infra Pvt. Ltd. also offers expert MEP services, including design, planning, and installation of mechanical, electrical, and plumbing networks. Our in-house MEP engineers deliver high-quality, efficient solutions that transform client ideas into sustainable, fully functional infrastructure systems. We focus on precision, reliability, and adherence to world-class standards, ensuring seamless integration of MEP systems in all types of construction projects.",
    images: [
      "/industry/MEP services (2).jpg",
      "/industry/MEP services (3).JPG",
      "/industry/MEP services.jpg",
    ],
  },
];

export default function Industryplatformtab() {
  const [currentSlides, setCurrentSlides] = useState<number[]>(
    sections.map(() => 0)
  );

  const handleNext = (index: number) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === index ? (slide + 1) % sections[i].images.length : slide
      )
    );
  };

  const handlePrev = (index: number) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === index
          ? (slide - 1 + sections[i].images.length) % sections[i].images.length
          : slide
      )
    );
  };

  return (
    <>
      <div className="mx-5  md:mx-20 lg:mx-30">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
          Leading with Expertise: Our Turnkey Industrial Model
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed  ">
          At Landsking Infrarem Pvt. Ltd., we view every new structure as an
          investment in our clients’ future success. Our strategy goes beyond
          construction — it’s about combining impactful innovation with solid
          execution, placing our clients’ unique needs at the forefront.
        </p>
      </div>

      <div className="flex flex-col gap-7 md:gap-10 lg:gap-16 mx-5 md:mx-17 lg:mx-30">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Slider with Fade Animation */}
              <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[300px] md:h-[400px]">
                  {section.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={section.title}
                      fill
                      className={`object-cover transition-opacity duration-700 ease-in-out ${
                        i === currentSlides[idx] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => handlePrev(idx)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white "
                >
                  <HiChevronLeft size={34} />
                </button>
                <button
                  onClick={() => handleNext(idx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white "
                >
                  <HiChevronRight size={34} />
                </button>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#000080]">
                  {section.title}
                </h2>
                <p className="text-black text-base md:text-medium">
                  {section.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
