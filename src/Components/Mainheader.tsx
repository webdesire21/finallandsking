"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface IndustryItem {
  title: string;
  excerpt: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    title: "Automotive",
    excerpt: "Software-defined mobility & electrification",
  },
  {
    title: "Rail Transportation",
    excerpt: "Efficiency, reliability and safety",
  },
  {
    title: "Aerospace Engineering",
    excerpt: "Digital engineering for aerospace OEMs",
  },
  {
    title: "Trucks & Off-Highway Vehicles",
    excerpt: "Performance for heavy vehicles",
  },
  { title: "NexGen Comms", excerpt: "Next-gen connectivity for telcos" },
  { title: "Consumer Electronics", excerpt: "Device & platform engineering" },
  { title: "MedTech", excerpt: "Regulatory-safe medical device engineering" },
  { title: "Semiconductors", excerpt: "Chip to cloud engineering" },
  { title: "Oil & Gas", excerpt: "Field-proven industrial engineering" },
  {
    title: "Public Infrastructure & Smart Cities",
    excerpt: "Large-scale smart deployments",
  },
];

export default function LttsHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    function clickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", handler);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white font-sans">
      {/* Top utility bar */}
      <div className="bg-gray-100 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a href="#main" className="sr-only focus:not-sr-only">
              Skip to main content
            </a>
            <span className="hidden sm:inline">
              Resolve service issues and enhance operational visibility
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-2 py-1 hover:text-[#005BAB]">Search</button>
            <div className="hidden sm:flex items-center gap-2">
              <select
                aria-label="Language"
                className="text-sm bg-transparent focus:outline-none"
              >
                <option>EN</option>
                <option>DE</option>
                <option>JP</option>
                <option>HE</option>
              </select>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#005BAB] text-white flex items-center justify-center font-bold rounded">
                LT
              </div>
              <span className="font-semibold text-lg text-gray-900">
                L&T Technology
              </span>
            </Link>
          </div>

          {/* Nav */}
          <nav
            className="hidden lg:flex lg:items-center lg:space-x-6"
            aria-label="Primary"
          >
            <div className="relative" ref={megaRef}>
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                onFocus={() => setMegaOpen(true)}
                onBlur={() => setMegaOpen(false)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-[#005BAB] focus:outline-none"
              >
                Industry
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {megaOpen && (
                <div
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  className="absolute left-0 mt-3 w-[860px] bg-white border rounded shadow-lg p-6 z-40"
                  role="region"
                  aria-label="Industry menu"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {INDUSTRIES.slice(0, 6).map((it) => (
                      <Link
                        key={it.title}
                        href={`/#${it.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex gap-4 items-start p-3 rounded hover:bg-gray-50"
                      >
                        <div className="w-20 h-12 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-600">
                          Img
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {it.title}
                          </h4>
                          <p className="text-sm text-gray-600">{it.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 border-t pt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Explore all industries
                    </div>
                    <Link
                      href="/industry"
                      className="text-[#005BAB] font-medium"
                    >
                      View all
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-gray-800 hover:text-[#005BAB]"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-gray-800 hover:text-[#005BAB]"
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="text-gray-800 hover:text-[#005BAB]"
            >
              Resources
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#005BAB]">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/careers"
              className="hidden md:inline-block px-4 py-2 bg-[#005BAB] text-white rounded-md"
            >
              Careers
            </Link>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-4 overflow-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#005BAB] text-white flex items-center justify-center rounded">
                  LT
                </div>
                <div className="font-semibold text-gray-900">
                  L&T Technology
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 space-y-4" aria-label="Mobile menu">
              <details className="rounded">
                <summary className="font-medium">Industry</summary>
                <ul className="mt-2 pl-4 space-y-2">
                  {INDUSTRIES.map((it) => (
                    <li key={it.title}>
                      <Link
                        href={`/#${it.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block py-1"
                      >
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <Link href="/services" className="block">
                Services
              </Link>
              <Link href="/solutions" className="block">
                Solutions
              </Link>
              <Link href="/resources" className="block">
                Resources
              </Link>
              <Link href="/about" className="block">
                About Us
              </Link>

              <div className="mt-4">
                <Link
                  href="/careers"
                  className="block w-full text-center bg-[#005BAB] text-white py-2 rounded"
                >
                  Careers
                </Link>
              </div>
            </nav>

            <div className="mt-6 text-sm text-gray-600">Language</div>
            <div className="mt-2">
              <select className="w-full border px-2 py-1">
                <option>EN</option>
                <option>DE</option>
                <option>JP</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
