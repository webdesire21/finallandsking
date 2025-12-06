// components/AlternatingSections.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // for red check icons

interface Section {
  id: number;
  title: string;
  description: string;
  points: string[];
  image: string;
}

const sections: Section[] = [
  {
    id: 1,
    title: "Industrial, Warehouse & PEB Projects",
    description:
      "We deliver comprehensive infrastructure solutions for industrial and warehouse projects. Our approach integrates advanced design, engineering precision, and full project transparency to ensure world-class results.",
    points: [
      "Industrial and warehouse infrastructure expertise",
      "Pre-Engineered Building (PEB) systems",
      "CAD-based modeling and automation",
      "ISO-compliant construction standards",
      "Timely and reliable project execution",
    ],
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Commercial, Pharma & Hotel Projects",
    description:
      "Our commercial division delivers innovative and reliable infrastructure across office, pharma, and hospitality sectors, ensuring the highest construction and operational standards.",
    points: [
      "Commercial and hospitality facility construction",
      "Pharma-grade infrastructure expertise",
      "Efficient project planning and management",
      "Two decades of execution excellence",
    ],
    image: "/industry.jpg",
  },
  {
    id: 3,
    title: "MEP (Mechanical, Electrical & Plumbing) Projects",
    description:
      "We provide end-to-end MEP services covering design, planning, and installation of efficient mechanical, electrical, and plumbing systems integrated seamlessly into all project types.",
    points: [
      "Expert MEP design and implementation",
      "Sustainable and energy-efficient systems",
      "Precision installation with quality control",
    ],
    image: "/about.png",
  },
];

export default function Planttabs() {
  return (
    <div className="flex flex-col gap-20 mx-5 md:mx-16 my-10">
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={section.id}
            className={`relative flex flex-col md:flex-row ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } items-center overflow-hidden rounded-2xl `}
          >
            <div className="w-full md:w-2/3 h-[300px] md:h-[450px] relative">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>

            {/* White Card Overlay */}
            <div
              className={`absolute md:static bg-white/95 backdrop-blur-sm md:bg-white md:backdrop-blur-none p-6 md:p-10 md:w-2/3  ${
                isEven ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <h2 className="text-[#000080] text-2xl md:text-3xl font-bold mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 [#000080] mb-5 leading-relaxed">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-black text-base"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#000080] mt-1 flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
