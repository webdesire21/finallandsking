"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Import Lucide icon

import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const expertiseData: {
  [key: string]: { items: { name: string; image: string; url: string }[] };
} = {
  "Industry Installation": {
    items: [
      {
        name: "EPC Turnkey Solutions",
        image: "/cadservice/turb.jpeg",
        url: "/Industrialtrunckyprojects",
      },
      {
        name: "Manufacturing & Process Plants",
        image: "/industryhome/Manufacturing & Process.jpg",
        url: "/businessAreas/manufacturingProcessPlants",
      },

      {
        name: "Commercial & Institutional",
        image: "/industryhome/water.jpeg",
        url: "/businessAreas/commercialInstitutional",
      },
      {
        name: "Construction Works",
        image: "/expertiseimages/industry/machine.jpg",
        url: "/industryinstallation-construction",
      },

      {
        name: "Fire & Saftey",
        image: "/industry/fire safety.jpg",
        url: "/businessAreas/fire-saftey",
      },
    ],
  },

  "Engineering R&D": {
    items: [
      {
        name: "CFD & CAE Services",
        image: "/simulation/CFD.png",
        url: "/cadservices",
      },
      {
        name: "Product Engineering",
        image: "/expertiseimages/renewable/wind.jpg",
        url: "/productengineering",
      },
      {
        name: "CAE Simulation Services",
        image: "/rnd/simulation.jpg",
        url: "/service/cae-simulation",
      },
      {
        name: "Mechanical Engineering",
        image: "/rndServices/mechanicalEngineeringServices.jpg",
        url: "/service/mechanical",
      },
      {
        name: "Civil Engineering",
        image: "/rndServices/cadConversationServices.jpg",
        url: "/service/civil-engineering",
      },
    ],
  },

  "Pre Engineered Building": {
    items: [
      {
        name: "Pre Engineered Building",
        image: "/expertiseimages/renewable/solar.jpg",
        url: "/peb",
      },
      {
        name: "Modular Buildings",
        image: "/menupageimg/mod3.jpg",
        url: "/modular",
      },
      {
        name: "PEB EPC Solutions",
        image: "/imagesall/Prefab Construction of Specialized Buildings.jpg",
        url: "/epcsolutions",
      },
      {
        name: "Structural Engineering Services",
        image: "/menupageimg/sp1.jpg",
        url: "/structuralsteel",
      },
    ],
  },
  " Solar Renewable Energy": {
    items: [
      {
        name: "EPC Solar  Solutions",
        image: "/solar/epc solution.jpg",
        url: "/epc-solutions",
      },
      {
        name: "Industrial Solar Solutions",
        image: "/solar/industrial solar.jpg",
        url: "/industrial-solar",
      },
      {
        name: "Commercial Solar Solutions",
        image: "/industry/Commercial (3).jpg",
        url: "/commercial-solar",
      },
      {
        name: "Solar  Services",
        image: "/solar/solar design.jpg",
        url: "/solar",
      },
      {
        name: "Ground-Mounted Solar Solutions",
        image: "/groundmounted/Captive power generation.jpg",
        url: "/groundmounted",
      },
    ],
  },
  "Real Estate Development": {
    items: [
      {
        name: "Invest, Finance & Value",
        image: "/realhome/Invest (3).jpg",
        url: "/needs",
      },
      {
        name: "Properties for Sale",
        image: "/real/propetie for sale.jpg",
        url: "/properties",
      },
      {
        name: "Logistic & Industry",
        image: "/realmanage properties (2).jpg",
        url: "/property-types",
      },

      {
        name: "Properties for Lease",
        image: "/real/properties for lease.jpg",
        url: "/properties",
      },
    ],
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState("/service.jpg"); // default img
  const [language, setLanguage] = useState("EN");

  // Set default selected category
  const firstCategory = Object.keys(expertiseData)[0];
  const [selectedLeftCategory, setSelectedLeftCategory] =
    useState<string>(firstCategory);

  // Set default right image when dropdown opens
  const handleDropdownClick = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);

    if (name === "expertise") {
      // Set default image to first item of the selected category
      setRightImage(
        expertiseData[firstCategory].items[0]?.image || "/service.jpg"
      );
      setSelectedLeftCategory(firstCategory);
    } else {
      setRightImage("/service.jpg"); // reset for other dropdowns
    }
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // update preview image
  const handleImageChange = (imgPath: string) => {
    setRightImage(imgPath);
  };

  return (
    <header className="fixed font-[Lato] font-normal top-0 w-full z-50 bg-white shadow-md text-black transition-all duration-300">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-19">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/finallogo.png"
            alt="Landsking Infralogo"
            // className="h-15 w-auto"
            className="w-33 h-auto md:w-43 lg:w-45"
          />
        </Link>
        {/* Mobile Icons */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button> */}
          <div className="relative">
            {/* Search Icon */}
            <button
              onClick={() => toggleDropdown("search")}
              aria-label="Open search"
              className="relative flex items-center justify-center p-0 rounded-md hover:bg-gray-100 transition"
            >
              <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
            </button>

            {/* Dropdown Menu */}
            {openDropdown === "search" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute right-0 mt-2 w-72 sm:w-80 bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 z-50 animate-fadeIn"
              >
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2 px-2">
                    Industries
                  </h3>
                  <div className="flex flex-col divide-y divide-gray-100">
                    <Link
                      href="/industryinstallation"
                      className="px-4 py-2 hover:bg-[#f3f4f6]  rounded-md transition"
                    >
                      Industry Installation
                    </Link>
                    <Link
                      href="/rnd"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Engineering R&D
                    </Link>
                    <Link
                      href="/renewableenergy"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Renewable Energy
                    </Link>
                    <Link
                      href="/preEngineeredBuildings"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Pre Engineered Building
                    </Link>
                    <Link
                      href="/realStateDevlopment"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Real Estate Development
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="mailto:info@Landsking Infra.com">
            <EnvelopeIcon
              className="h-6 w-6 hover:opacity-80"
              aria-label="mail"
            />
          </a>

          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "")}
            aria-label={`Switch language to ${
              language === "EN" ? "Arabic" : "English"
            }`}
            className="px-2 py-1 border rounded text-sm "
          >
            {language}
          </button>
        </div>
        <nav className="hidden capitalize xl:flex items-center space-x-6 font-medium text-lg xl:text-xl relative">
          <Link href="/" className="hover:opacity-80">
            Home
          </Link>

          {/* Industry Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("industry")}
              className="flex items-center hover:opacity-80"
            >
              Industry
              {openDropdown === "industry" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "industry" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-1/2 top-[85px] mb-10 transform -translate-x-1/2 bg-[#000080] shadow-lg rounded-lg w-[1300px] flex z-50"
              >
                {/* Left Section */}
                <div className="w-1/3 text-white p-6 space-y-4">
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/home/industry installation.jpeg")
                    }
                    onClick={() =>
                      (window.location.href = "/industryinstallation")
                    }
                    className="hover:text-[#23dce1] block text-left w-full"
                  >
                    Industry Installation
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/engineer.jpg")}
                    onClick={() => (window.location.href = "/rnd")}
                    className="hover:text-[#23dce1] block text-left w-full"
                  >
                    Engineering R&amp;D
                  </button>
                </div>

                {/* Middle Section */}
                <div className="w-1/3 bg-[#0a2351] text-white p-6 space-y-4 rounded-md">
                  <button
                    onMouseEnter={() => handleImageChange("/renewable.jpg")}
                    onClick={() => (window.location.href = "/renewableenergy")}
                    className="hover:text-[#23dce1] block text-left w-full"
                  >
                    Renewable Energy
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/pebone.jpeg")}
                    onClick={() =>
                      (window.location.href = "/preEngineeredBuildings")
                    }
                    className="hover:text-[#23dce1] block text-left w-full"
                  >
                    Pre Engineered Building
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/home/real estate.jpeg")
                    }
                    onClick={() =>
                      (window.location.href = "/realStateDevlopment")
                    }
                    className="hover:text-[#23dce1] block text-left w-full"
                  >
                    Real Estate Development
                  </button>
                </div>

                {/* Right Image Section */}
                <div className="w-1/3 bg-[#000080] p-4 pt-5 pr-8 flex flex-col justify-between text-white">
                  <img
                    src={rightImage}
                    alt="Industry"
                    className="rounded-md object-cover h-54 w-full mb-4"
                  />
                  <div></div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleDropdownClick("expertise")}
              className="flex items-center hover:opacity-80"
            >
              Our Solutions
              {openDropdown === "expertise" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>

            {openDropdown === "expertise" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-1/2 top-[85px] mb-20 pb-10 transform -translate-x-1/2 bg-[#000080] text-white shadow-lg rounded-lg w-[1300px] flex z-50"
              >
                {/* LEFT COLUMN */}
                <div className="w-1/3 text-white p-10 space-y-3">
                  {Object.keys(expertiseData).map((category) => (
                    <button
                      key={category}
                      onMouseEnter={() => {
                        setSelectedLeftCategory(category);
                        setRightImage(
                          expertiseData[category].items[0]?.image ||
                            "/service.jpg"
                        );
                      }}
                      className={`group flex items-center w-full text-left space-x-2 ${
                        selectedLeftCategory === category
                          ? "text-[#23dce1]"
                          : "text-white"
                      } hover:text-[#23dce1]`}
                    >
                      <span>{category}</span>
                      <ChevronRight className="w-5 h-5 text-white group-hover:text-[#23dce1] transition-colors" />
                    </button>
                  ))}
                </div>

                <div className="w-1/3 bg-[#0a2351] text-white p-8 space-y-3 rounded-md">
                  {selectedLeftCategory &&
                    expertiseData[selectedLeftCategory].items.map(
                      (item, idx) => (
                        <button
                          key={idx}
                          onMouseEnter={() => handleImageChange(item.image)}
                          onClick={() => (window.location.href = item.url)}
                          className="hover:text-[#23dce1] block text-left w-full"
                        >
                          {item.name}
                        </button>
                      )
                    )}
                </div>

                {/* RIGHT IMAGE COLUMN */}
                <div className="w-1/3 bg-[#000080] p-4 flex flex-col justify-center text-white">
                  <img
                    src={rightImage}
                    alt="Expertise Preview"
                    className="rounded-md object-cover h-60 w-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Projects */}
          <Link href="/projects" className="hover:opacity-80">
            Projects
          </Link>

          {/* Insights */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("insights")}
              className="flex items-center hover:opacity-80"
            >
              Insights
              {openDropdown === "insights" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "insights" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-0 top-[85px] w-full py-10 bg-[#000080] text-white shadow-lg rounded-none z-50 border-t border-gray-100"
              >
                <div className="grid grid-cols-4 gap-6 text-center">
                  <Link
                    href="/home/case-studies"
                    className="hover:text-[#23dce1]"
                  >
                    Case Study
                  </Link>
                  <Link href="/home/blogs" className="hover:text-[#23dce1]">
                    Blogs
                  </Link>
                  <Link
                    href="/home/whitepaper"
                    className="hover:text-[#23dce1]"
                  >
                    Whitepapers
                  </Link>
                  <Link href="/home/brouchers" className="hover:text-[#23dce1]">
                    Brochures
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About */}
        </nav>
        {/* Desktop Right Icons */}
        {/* <div className="hidden md:flex items-center space-x-4"> */}
        <div className="hidden xl:flex items-center space-x-4">
          <div className="relative">
            {/* Search Icon */}
            <button
              onClick={() => toggleDropdown("search")}
              aria-label="Open search"
              className="relative flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition"
            >
              <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
            </button>

            {/* Dropdown Menu */}
            {openDropdown === "search" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute right-0 mt-2 w-72 sm:w-80 bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 z-50 animate-fadeIn"
              >
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2 px-2">
                    Explore Industries
                  </h3>
                  <div className="flex flex-col divide-y divide-gray-100">
                    <Link
                      href="/industryinstallation"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Industry Installation
                    </Link>
                    <Link
                      href="/rnd"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Engineering R&D
                    </Link>
                    <Link
                      href="/renewableenergy"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Renewable Energy
                    </Link>
                    <Link
                      href="/preEngineeredBuildings"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Pre Engineered Building
                    </Link>
                    <Link
                      href="/realStateDevlopment"
                      className="px-4 py-2 hover:bg-[#f3f4f6] rounded-md transition"
                    >
                      Real Estate Development
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="mailto:info@Landsking Infra.com">
            <EnvelopeIcon
              className="h-6 w-6 hover:opacity-80"
              aria-label="mail"
            />
          </a>

          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            aria-label={`Switch language to ${
              language === "EN" ? "Arabic" : "English"
            }`}
            className="px-2 py-1 border rounded text-sm "
          >
            {language}
          </button>
          <Link
            href="/contact"
            className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-black font-semibold"
          >
            CONTACT US
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-black"
          aria-label="Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="xl:hidden bg-[#000080] text-white px-4 py-4 shadow-lg max-h-screen overflow-auto">
          <Link
            href="/"
            className="block py-2 border-b border-gray-200 hover:text-[#23dce1]"
          >
            HOME
          </Link>

          {/* Industries collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("industries")}
              className="w-full text-left  flex justify-between items-center"
            >
              INDUSTRIES
              <span>
                {openDropdown === "industries" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>{" "}
            </button>

            {openDropdown === "industries" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/industryinstallation"
                    className="block  hover:text-[#23dce1] px-2 py-1 rounded"
                  >
                    Industry Installation and Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preEngineeredBuildings"
                    className="block   hover:text-[#23dce1] px-2 py-1 rounded"
                  >
                    Pre Engineered Building
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/rnd"
                    className="block  hover:text-[#23dce1] px-2 py-1 rounded"
                  >
                    Engineering R&D
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/renewableenergy"
                    className="block  hover:text-[#23dce1] px-2 py-1 rounded"
                  >
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/realStateDevlopment"
                    className="block   hover:text-[#23dce1] px-2 py-1 rounded"
                  >
                    Real EState Development
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Expertise collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("expertise")}
              className="w-full text-left  flex justify-between items-center"
            >
              OUR SOLUTIONS
              <span>
                {openDropdown === "expertise" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </button>

            {openDropdown === "expertise" && (
              <div className="pl-4 mt-2 space-y-2">
                {Object.keys(expertiseData).map((category) => (
                  <div key={category}>
                    <button
                      onClick={() =>
                        setSelectedLeftCategory(
                          selectedLeftCategory === category ? "" : category
                        )
                      }
                      className="w-full text-left font-medium flex justify-between items-center py-1 hover:text-[#23dce1]"
                    >
                      {category}
                      <span>
                        {selectedLeftCategory === category ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </button>

                    {/* Subitems */}
                    {selectedLeftCategory === category && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {expertiseData[category].items.map((item, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => (window.location.href = item.url)}
                              className="block w-full text-left px-2 py-1 hover:text-[#23dce1]"
                            >
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="block py-2 border-b border-gray-200 hover:text-[#23dce1]"
          >
            PROJECTS
          </Link>
          <Link
            href="/insights"
            className="block py-2 border-b border-gray-200 hover:text-[#23dce1]"
          >
            INSIGHTS
          </Link>
          <Link
            href="#"
            className="block py-2 border-b border-gray-200 hover:text-[#23dce1]"
          >
            MEDIA
          </Link>
          {/* About collapsible */}

          <Link
            href="/contact"
            className="block py-2 border-b border-gray-200 hover:text-[#23dce1]"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
