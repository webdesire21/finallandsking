"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("EN");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff] shadow-md text-[#000080] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center space-x-3 md:hidden">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button>
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
          >
            {language}
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden capitalize md:flex items-center space-x-6 font-medium relative">
          <Link href="/" className="hover:opacity-80">
            HOME
          </Link>

          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("industries")}
              className="hover:opacity-80"
            >
              INDUSTRIES
            </button>
            {openDropdown === "industries" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link
                  href="industryinstallation"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Industry Installation
                </Link>

                <Link
                  href="/preEngineeredBuildings"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Pre Engineered Building
                </Link>

                {/* <Link
                  href="/buildingandinfrastructure"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Building and Infrastructure
                </Link> */}

                <Link
                  href="/rnd"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Engineering R&D
                </Link>

                <Link
                  href="renewableenergy"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Renewable Energy
                </Link>
                <Link
                  href="realStateDevlopment"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Real EState Development
                </Link>
              </div>
            )}
          </div>

          {/* Expertise */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("expertise")}
              className="hover:opacity-80"
            >
              EXPERTISE
            </button>
            {openDropdown === "expertise" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link
                  href="/heavyengineering"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Heavy Engineering
                </Link>
                <Link
                  href="/officespace"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Office Space
                </Link>
                <Link
                  href="/publicoffice"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Public Office
                </Link>
                <Link
                  href="/waterinfrastructure"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Water Infrastructure
                </Link>
                <Link
                  href="structuralsteel"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Industry Building Solutions
                </Link>
                <Link
                  href="otherindustries"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Other Industries
                </Link>
                <Link
                  href="/simulationservice"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Simulation Service
                </Link>
                <Link
                  href="https://staging.Landsking Infra.com/fabrication/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Factories Installation
                </Link>
                <Link
                  href="/coldstorageandwarehouse"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Cold Storage &amp; Warehouse
                </Link>
                <Link
                  href="/solar"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Solar Services
                </Link>
                <Link
                  href="/hvac"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  HVAC Services
                </Link>
                <Link
                  href="/fabrication"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Fabrication
                </Link>{" "}
                <Link
                  href="/fire-safety"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Fire Saftey
                </Link>
                <Link
                  href="/greenbuilding"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Green Building
                </Link>
                <Link
                  href="/miningandmetals"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mining and Metals
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="hover:opacity-80">
            PROJECTS
          </Link>
          {/* insights */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("insights")}
              className="hover:opacity-80"
            >
              INSIGHTS
            </button>
            {openDropdown === "insights" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link
                  href="/blogs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blogs{" "}
                </Link>
                <Link
                  href="/brouchers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Brouchers
                </Link>
                <Link
                  href="/whitepaper"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Whitepaper
                </Link>
                <Link
                  href="/carrers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Carrers
                </Link>
              </div>
            )}
          </div>
          {/* end insights */}
          {/* <Link href="/sectors" className="hover:opacity-80">
            INSIGHTS
          </Link> */}
          <Link href="/media" className="hover:opacity-80">
            MEDIA
          </Link>
          {/* About */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="hover:opacity-80"
            >
              ABOUT
            </button>
            {openDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link
                  href="/company"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our History
                </Link>
                <Link
                  href="/leadership"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Leadership
                </Link>
                <Link
                  href="/mission"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Mission
                </Link>
                <Link
                  href="/innovation"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Innovation
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button>
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
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

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#000080] text-white px-4 py-4 shadow-lg max-h-screen overflow-auto">
          <Link href="/" className="block py-2 border-b border-gray-200">
            HOME
          </Link>

          {/* Industries collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("industries")}
              className="w-full text-left font-semibold flex justify-between items-center"
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
                    href="industryinstallation"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Industry Installation and Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preEngineeredBuildings"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Pre Engineered Building
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="#"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Infrastructure & Energy
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/rnd"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Engineering R&D
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="renewableenergy"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="realStateDevlopment"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
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
              className="w-full text-left font-semibold flex justify-between items-center"
            >
              EXPERTISE
              <span>
                {openDropdown === "industries" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>{" "}
            </button>

            {openDropdown === "expertise" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/heavyengineering"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Heavy Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/officespace"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Office Space
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publicoffice"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Public Office
                  </Link>
                </li>
                <li>
                  <Link
                    href="/waterinfrastructure"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Water Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/structuralsteel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Industry Building Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/otherindustries"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Other Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/simulation"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Simulation Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fabrication"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fabrication
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fire-safety"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fire Safety
                  </Link>
                </li>
                <li>
                  <Link
                    href="/greenbuilding"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Green Building
                  </Link>
                </li>
                <li>
                  <Link
                    href="/miningandmetals"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mining and Metals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coldstorageandwarehouse"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cold Storage &amp; Warehouse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solar"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Solar Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hvac"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    HVAC Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/factoriesinstallation"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Factories Installation
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/projects"
            className="block py-2 border-b border-gray-200"
          >
            PROJECTS
          </Link>
          <Link href="/sectors" className="block py-2 border-b border-gray-200">
            INSIGHTS
          </Link>
          <Link href="/media" className="block py-2 border-b border-gray-200">
            MEDIA
          </Link>
          {/* About collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left font-semibold flex justify-between items-center"
            >
              ABOUT
              <span>
                {openDropdown === "industries" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>{" "}
            </button>

            {openDropdown === "about" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/company"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leadership"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/innovation"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Innovation
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/contact" className="block py-2 border-b border-gray-200">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
