"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
type Item =
  | string
  | {
      name: string;
      href?: string;
      subItems?: { name: string; href?: string }[];
    };

type Section = {
  title: string;
  link?: string;
  external?: boolean;
  items: Item[];
};

export default function Industryfooter() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null); // NEW for mobile sections

  const sections: Section[] = [
    {
      title: "Industries",
      external: true,
      items: [
        {
          name: "Industry Installation ",
          subItems: [
            {
              name: "EPC Turnkey Solutions",
              href: "/businessAreas/hydropower",
            },
            {
              name: "Construction Works",
              href: "/industryinstallation-construction",
            },
            { name: "HVAC", href: "/hvac" },
            { name: "  Other Industries", href: "/otherindustries" },
            { name: " Fire Saftey", href: "/firesaftey" },
          ],
        },
        {
          name: "Water",
          subItems: [
            {
              name: "Water Supply & Sanitation",
              href: "/businessAreas/waterSupplySanitation",
            },
            { name: "Irrigation", href: "/businessAreas/irrigation" },
          ],
        },
        {
          name: "Transportation",
          subItems: [
            {
              name: "Highways, Roads & Bridges",
              href: "/businessAreas/highwaysroads",
            },
            { name: "Railways", href: "/businessAreas/railways" },
            {
              name: "Mass Rapid Transit Systems",
              href: "/businessAreas/massRapidTransitSystems",
            },
            { name: "Ports & Harbours", href: "/businessAreas/portsharbours" },
          ],
        },
        {
          name: "Industrial & Buildings",
          subItems: [
            {
              name: "Manufacturing & Process Plants",
              href: "/businessAreas/manufacturingProcessPlants",
            },
            {
              name: "Commercial & Institutional",
              href: "/businessAreas/commercialInstitutional",
            },
            {
              name: "Smart Cities & Townships",
              href: "/businessAreas/smartCitiesTownships",
            },
          ],
        },
      ],
    },
    {
      title: "Building Solutions",
      external: true,
      items: [
        { name: "Industrial buildings" },
        { name: "Commercial buildings" },
        { name: "Housing projects" },
        { name: "IT parks" },
        { name: "Institutional buildings" },
        { name: "Sports complexes" },
        { name: "Hospitals Buildings" },
        {
          name: "Stadiums Ground",
        },
      ],
    },
    {
      title: "Insights",
      external: true,
      items: [
        { name: "Blogs", href: "/insights/reports" },
        { name: "Brochures", href: "/insights/articles" },
        { name: "Whitepaper", href: "/insights/case-studies" },
        { name: "Career", href: "/insights/research" },
      ],
    },
    {
      title: "About Us",
      external: true,
      items: [
        { name: "Our History", href: "/company" },
        { name: "Leadership", href: "/leadership" },
        { name: "Our Mission", href: "/mission" },
        { name: "Innovation", href: "/innovation" },
      ],
    },
  ];

  const toggleItem = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer
      className="py-12 px-6 md:px-17 text-[14px] text-white"
      style={{
        backgroundColor: "#000080",
        // fontFamily: `"DM Sans", Arial, sans-serif !important`,
      }}
    >
      <div className="hidden md:grid grid-cols-4 gap-10  mx-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="flex items-center text-lg font-semibold border-b border-gray-500 pb-3">
              <span>{section.title}</span>
              {section.external && (
                <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
              )}
            </h3>

            <div className="mt-5 space-y-3">
              {section.items.map((item) => {
                if (typeof item === "string") {
                  return (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer block leading-relaxed px-1"
                      >
                        {item}
                      </a>
                    </li>
                  );
                } else {
                  const hasSub = item.subItems && item.subItems.length > 0;
                  return (
                    <div
                      key={item.name}
                      className={`${
                        hasSub ? "border-b border-gray-700" : ""
                      } rounded-md`}
                    >
                      <div
                        className={`flex items-center justify-between cursor-pointer ${
                          hasSub ? "text-[#8080FF]" : "text-[#c1cbd1]"
                        } hover:text-[#8080FF] px-1 py-1`}
                        onClick={() => hasSub && toggleItem(item.name)}
                      >
                        {item.href ? (
                          <a href={item.href} className="block w-full">
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}

                        {hasSub && (
                          <span>
                            {openItem === item.name ? (
                              <FaChevronUp className="ml-2 text-xs" />
                            ) : (
                              <FaChevronDown className="ml-2 text-xs" />
                            )}
                          </span>
                        )}
                      </div>

                      {hasSub && (
                        <ul
                          className={`pl-6 space-y-2 transition-all duration-300 overflow-hidden ${
                            openItem === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          {item.subItems!.map((sub) => (
                            <li key={sub.name}>
                              <a
                                href={sub.href || "#"}
                                className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block py-1 pl-1"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden space-y-6 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.title} className="border-b border-gray-600 pb-3">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
              onClick={() => toggleSection(section.title)}
            >
              <span>{section.title}</span>
              {openSection === section.title ? (
                <FaChevronUp className="text-xs" />
              ) : (
                <FaChevronDown className="text-xs" />
              )}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSection === section.title ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-3 space-y-3 pl-2">
                {section.items.map((item) => {
                  if (typeof item === "string") {
                    return (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block leading-relaxed px-1"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  } else {
                    const hasSub = item.subItems && item.subItems.length > 0;
                    return (
                      <div key={item.name} className="rounded-md">
                        <div
                          className={`flex items-center justify-between cursor-pointer ${
                            hasSub ? "text-[#8080FF]" : "text-[#c1cbd1]"
                          } hover:text-[#8080FF] px-1 py-1`}
                          onClick={() => hasSub && toggleItem(item.name)}
                        >
                          {item.href ? (
                            <a href={item.href} className="block w-full">
                              {item.name}
                            </a>
                          ) : (
                            item.name
                          )}

                          {hasSub && (
                            <span>
                              {openItem === item.name ? (
                                <FaChevronUp className="ml-2 text-xs" />
                              ) : (
                                <FaChevronDown className="ml-2 text-xs" />
                              )}
                            </span>
                          )}
                        </div>

                        {hasSub && (
                          <ul
                            className={`pl-6 space-y-2 transition-all duration-300 overflow-hidden ${
                              openItem === item.name ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            {item.subItems!.map((sub) => (
                              <li key={sub.name}>
                                <a
                                  href={sub.href || "#"}
                                  className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block py-1 pl-1"
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/20 pb-6 mb-6">
          <div className="flex items-center space-x-3  mt-5 mb-4 md:mb-0">
            {/* <Link href="/" className="flex items-center">
              <img src="/blank.jpg" alt="Logo" className="h-15 w-auto" />
            </Link> */}
            <span className="font-bold text-lg">Landsking Infra </span>
          </div>

          <div className="flex space-x-4">
            <Link href="#" aria-label="X">
              <FaXTwitter className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#8080FF]" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:underline">
              Copyright & Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>

            <Link
              href="landskinginfra@gmail.com
"
              className="hover:underline"
            >
              landskinginfra@gmail.com
            </Link>
          </div>

          <div className="text-gray-300">
            © 2025 Landsking Infra Pvt. Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
