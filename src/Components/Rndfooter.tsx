"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

interface Contact {
  title: string;
  phone: string;
  email: string;
  img: string;
}

interface Column {
  heading: string;
  links: string[];
}

const contacts: Contact[] = [
  {
    title: "Customer Support",
    phone: "877-017-9094",
    email: "landskinginfra@gmail.com",
    img: "/footer/cust.png",
  },
  {
    title: "Technical Support",
    phone: "9981813922",
    email: "info@Landsking Infra.com",
    img: "/footer/tech.png",
  },
  {
    title: "Our Support",
    phone: "9981813922",
    email: "Landsking Infrainfra@gmail.com",
    img: "/footer/support.png",
  },
];

const columns: Column[] = [
  {
    heading: "Services",
    links: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Cloud Services",
      "CAE Simulation Services",
      "CAD / CAM / CAE Services",
      "Product Engineering",
      "Simulation Design for Manufacturing",
    ],
  },
  {
    heading: "Insights",
    links: ["Blog", "Brochures", "Whitepapers", "Careers"],
  },
  {
    heading: "About Us",
    links: ["Our History", "Innovation", "Our Mission", "Leadership"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const Rndfooter: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className="bg-[#000080] text-white text-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-13 py-12">
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="flex items-center bg-transparent text-white p-4 rounded-lg transition-all"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
              />

              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-white text-base mb-1">
                  {c.title}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <FaPhoneAlt className="text-[#fff]" />
                  <span>{c.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <FaEnvelope className="text-[#fff]" />
                  <span className="break-all">{c.email}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg">
            <p className="mb-3 font-medium text-white">
              Landsking Infra Infr Pvt Limited
            </p>
            <button className="px-6 py-2 bg-white text-[#000080] rounded-xl shadow hover:bg-[#5c78b8] hover:text-white transition">
              Landsking Infra Infr
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {columns.map((col, i) => (
            <div key={i} className="w-full">
              <h4
                onClick={() => toggleDropdown(i)}
                className="flex justify-between items-center text-white font-semibold text-base cursor-pointer md:cursor-default mb-2"
              >
                {col.heading}
                <FaChevronDown
                  className={`ml-2 transition-transform md:hidden ${
                    openDropdown === i ? "rotate-180" : ""
                  }`}
                />
              </h4>

              <ul
                className={`transition-all duration-300 overflow-hidden md:overflow-visible md:max-h-full md:block ${
                  openDropdown === i ? "max-h-64" : "max-h-0 md:max-h-full"
                }`}
              >
                {col.links.map((link, j) => (
                  <li key={j} className="py-1 text-center md:text-left">
                    <a
                      href="#"
                      className="hover:underline hover:text-[#8080FF] transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Landsking Infra Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Rndfooter;
