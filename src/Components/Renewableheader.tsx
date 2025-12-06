"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Renewableheader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState("/service.jpg"); // default img
  const [language, setLanguage] = useState("EN");

  // toggle dropdown
  const handleDropdownClick = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setRightImage("/service.jpg");
  };
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // update preview image
  const handleImageChange = (imgPath: string) => {
    setRightImage(imgPath);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md text-black transition-all duration-300 font-[Lato] font-normal">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-27">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/finallogo.png"
            alt=" Landsking Infrainfra Logo"
            className="h-15 w-auto"
          />
        </Link>

        {/* Mobile Icons */}

        {/* Desktop Navigation */}
        <nav className="hidden capitalize xl:flex items-center space-x-6 font-medium text-lg xl:text-xl relative">
          {/* <nav className="hidden capitalize md:flex items-center space-x-6 font-medium text-lg  md:text-xl relative"> */}
          <Link href="/renewableenergy" className="hover:opacity-80">
            Home
          </Link>

          {/* Industry Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("industry")}
              className="flex items-center hover:opacity-80"
            >
              Our Solutions
              {openDropdown === "industry" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "industry" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-1/2 top-[85px] mb-10 transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50"
              >
                {/* Left Section */}
                <div className="w-1/3 text-white p-6 space-y-4">
                  <button
                    onMouseEnter={() => handleImageChange("/industry.jpg")}
                    onClick={() => (window.location.href = "/groundmounted")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Ground Mounted Solutions
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/engineer.jpg")}
                    onClick={() =>
                      (window.location.href = "/residential-solar")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Residential & Housing Society Solutions
                  </button>
                </div>

                {/* Middle Section */}
                <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-4 rounded-md">
                  <button
                    onMouseEnter={() => handleImageChange("/renewable.jpg")}
                    onClick={() => (window.location.href = "/industrial-solar")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Industrial Solutions
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/pebone.jpeg")}
                    onClick={() => (window.location.href = "/commercial-solar")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Commercial Solutions{" "}
                  </button>
                </div>

                {/* Right Image Section */}
                <div className="w-1/3 bg-[#2e69c2] p-4 pt-5 pr-8 flex flex-col justify-between text-white">
                  <img
                    src={rightImage}
                    alt="renewableservice"
                    className="rounded-md object-cover h-54 w-full mb-4"
                  />
                  <div></div>
                </div>
              </div>
            )}
          </div>

          <Link href="/epc-solutions" className="hover:opacity-80">
            epc solar{" "}
          </Link>

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
                className="fixed left-0 top-[85px] w-full py-10 bg-[#0a2351] text-white shadow-lg rounded-none z-50 border-t border-gray-100"
              >
                <div className="grid grid-cols-4 gap-6 text-center">
                  <Link
                    href="/renewableenergy-blogs"
                    className="hover:text-[#8080FF]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/renewableenergy-brouchers"
                    className="hover:text-[#8080FF]"
                  >
                    Brouchers
                  </Link>
                  <Link
                    href="/renewableenergy-case-studies"
                    className="hover:text-[#8080FF]"
                  >
                    Case Study
                  </Link>
                  <Link
                    href="/renewableenergy-whitepaper"
                    className="hover:text-[#8080FF]"
                  >
                    Whitepaper
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <Link href="" className="hover:opacity-80">
            Downloads
          </Link>
          {/* <Link href="" className="hover:opacity-80">
            Solar Calculator{" "}
          </Link> */}
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden xl:flex items-center space-x-4">
          <Link
            href="/renewable-contact"
            className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-black font-semibold"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        > */}
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
            href="/renewableenergy"
            className="block py-2 border-b border-gray-200"
          >
            HOME
          </Link>

          {/* Industries collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("industries")}
              className="w-full text-left  flex justify-between items-center"
            >
              SOLUTIONS
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
                    href="/groundmounted"
                    className="block  px-2 py-1 rounded"
                  >
                    Ground Mounted Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/residential-solar"
                    className="block  px-2 py-1 rounded"
                  >
                    Residential & Housing Society Solutions
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/industrial-solar"
                    className="block hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Industrial Solutions{" "}
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/commercial-solar"
                    className="block  px-2 py-1 rounded"
                  >
                    Commercial Solutions{" "}
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Expertise collapsible */}
          <Link
            href="/epc-solutions"
            className="block py-2 border-b border-gray-200"
          >
            EPC SOLAR
          </Link>
          <Link href="#" className="block py-2 border-b border-gray-200">
            PROJECTS
          </Link>
          <Link href="#" className="block py-2 border-b border-gray-200">
            INSIGHTS
          </Link>
          <Link href="#" className="block py-2 border-b border-gray-200">
            DOWNLOADS
          </Link>
          {/* About collapsible */}

          <Link
            href="/renewable-contact"
            className="block py-2 border-b border-gray-200"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
