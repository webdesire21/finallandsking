import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const leaders = [
  {
    name: "Samson Khaou",
    role: "Executive Vice President, Asia-Pacific",
    image: "/company/user.webp",
  },
  {
    name: "Florence Verzelenn",
    role: "Executive Vice President, Europe, Middle East, Africa (EMEA)",
    image: "/company/user.webp",
  },
  {
    name: "Erik Swedberg",
    role: "Executive Vice President, Americas",
    image: "/company/user.webp",
  },
  {
    name: "Elisa Prisner",
    role: "Executive Vice President Industry, Marketing & Sustainability, Corporate Strategy & Platform Transformation",
    image: "/company/user.webp",
  },
  {
    name: "Leader 5",
    role: "Executive Vice President, Department 5",
    image: "/company/user.webp",
  },
  {
    name: "Leader 6",
    role: "Executive Vice President, Department 6",
    image: "/company/user.webp",
  },
  {
    name: "Leader 7",
    role: "Executive Vice President, Department 7",
    image: "/company/user.webp",
  },
  {
    name: "Leader 8",
    role: "Executive Vice President, Department 8",
    image: "/company/user.webp",
  },
  {
    name: "Leader 9",
    role: "Executive Vice President, Department 9",
    image: "/company/user.webp",
  },
  {
    name: "Leader 10",
    role: "Executive Vice President, Department 10",
    image: "/company/user.webp",
  },
  {
    name: "Leader 11",
    role: "Executive Vice President, Department 11",
    image: "/company/user.webp",
  },
  {
    name: "Leader 12",
    role: "Executive Vice President, Department 12",
    image: "/company/user.webp",
  },
];

export default function LeadershipCards() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-[#F4F6F8] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <Image
              src={leader.image}
              alt={leader.name}
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-[#000080]">
              {leader.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{leader.role}</p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href="#"
                className="flex items-center gap-2 text-[#000080]font-medium"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#000080]">
                  <MdKeyboardArrowRight className="text-[#000080] text-lg" />
                </span>
                View profile
              </a>
              <a href="#" className="text-[#000080]text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
