"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NormalMenu = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

type ProductSubMenu = {
  title: string;
  href: string;
  subMenu?: { name: string; href: string }[];
};

type ProductMenu = {
  name: "Products";
  href: string;
  subItems?: ProductSubMenu[];
};

type MenuItem = NormalMenu | ProductMenu;

export default function Newheader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenMobileSubMenu(null);
  };

  const navLinks: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/system" },
    {
      name: "Products",
      href: "",
      subItems: [
        {
          title: "Pre Engineered Buildings",
          href: "/menupage",
          subMenu: [
            { name: "Multi-Storey Building", href: "/multiStoryBuilding" },
            { name: "Warehouse", href: "/warehouse" },
            { name: "Industrial Shed", href: "/industrialShed" },
            { name: "Factory Building", href: "/factoryBuilding" },
            { name: "Cold Storage", href: "/coldStorage" },
            { name: "Industrial Enclosures", href: "/industrialEnclosures" },
          ],
        },
        {
          title: "Modular Buildings",
          href: "/modular",
          subMenu: [
            { name: "Prefab Site Office", href: "/prefabSiteOffice" },
            { name: "Cold Room", href: "/coldRoom" },
            { name: "Control Room", href: "/controlRoom" },
            { name: "Clean Room", href: "/cleanRoom" },
            { name: "Railway Shelters", href: "/railwayShelters" },
            { name: "Labor Hutment", href: "/laborHutment" },
            {
              name: "Prefabricated Site Infrastructure Solutions",
              href: "/prefabricatedSite",
            },
            { name: "Low Cost Housing", href: "/lowCostHousing" },
            { name: "Acoustic Enclosures", href: "/acousticEnclosures" },
            {
              name: "Portable Security Guard Cabins",
              href: "/security-cabins",
            },
          ],
        },
        {
          title: "Light Gauge Steel Framing",
          href: "/lightguage",
          subMenu: [{ name: "Prefab School", href: "/prefabSiteOffice" }],
        },
        {
          title: "Sandwich Panels",
          href: "/sandwichpanels",
          subMenu: [
            { name: "PUF Panels", href: "/puf" },
            { name: "EPS Panels", href: "/eps" },
            { name: "Rockwool Panel", href: "/rockwool" },
            { name: "Glass Wool Panels", href: "/glasswool" },
          ],
        },
        {
          title: "Standard Modular Solutions",
          href: "/standardmodular",
          subMenu: [
            { name: "Porta Cabins", href: "/portacabins" },
            { name: "Liftable Cabin", href: "/liftablecabin" },
            { name: "Mi Homes", href: "/mihomes" },
            { name: "K-House", href: "/khouse" },
          ],
        },
        { title: "EPC Solutions", href: "/epcsolutions" },
      ],
    },
    {
      name: "Sectors",
      href: "",
      subItems: [
        { name: "Construction Sector", href: "/construction" },
        { name: "Infrastructure Sector", href: "/InfrastructureSector" },
        { name: "Institutional Sector", href: "/InstitutionalSector" },
        { name: "Sports & Leisure", href: "/sportsLeisureBuilding" },
        { name: "Special Buildings", href: "/specialBuilding" },
      ],
    },
    { name: "Projects", href: "/preengineredbuildingsprojects" },
    { name: "Insights", href: "/insight" },
    {
      name: "About",
      href: "/about",
      subItems: [
        { name: "Our Leadership", href: "/pebabout/leadership" },
        { name: "Our History", href: "/pebabout/history" },
        { name: "Our Mission", href: "/pebabout/mission" },
        { name: "Innovation", href: "/pebabout/innovation" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      {/* Desktop Header (unchanged) */}
      <div
        className={`hidden lg:block fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg w-[90%] left-1/2 -translate-x-1/2 rounded-b-2xl"
            : "bg-transparent w-full left-0"
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-4" : "md:py-6"
          }`}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/finallogo.png" : "/whitelogo.png"}
              alt="Logo"
              width={150}
              height={50}
              priority
              className={`transition-all duration-300 ${
                scrolled ? "w-32 h-14" : "w-38 h-16"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="flex items-center space-x-8">
 {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href || "#"}
                className={`font-semibold text-lg ${
                  scrolled ? "text-black" : "text-white"
                } hover:text-[#000080]`}
              >
                {link.name}
              </Link>

              {"subItems" in link && link.subItems?.length ? (
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-b-3xl opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                    backdrop-blur-md z-50 ${
                      scrolled ? "bg-white" : "bg-white/20"
                    }`}
                >
                  <ul className="py-2">
                    {link.name === "Products"
                      ? (link as ProductMenu).subItems?.map((item) => (
                          <li key={item.title} className="relative group/sub">
                            <Link
                              href={item.href}
                              className="px-4 py-2 block hover:text-[#000080] text-black"
                            >
                              {item.title}
                            </Link>
                            {item.subMenu && (
                              <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-b-3xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                <ul className="py-2">
                                  {item.subMenu.map((sub) => (
                                    <li key={sub.name}>
                                      <Link
                                        href={sub.href}
                                        className="block px-4 py-2 hover:text-[#000080] text-black"
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))
                      : (link as NormalMenu).subItems?.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 hover:text-[#000080] text-black"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}          </nav>
        </div>
      </div>

      {/* Mobile Header (static, white, shadow) */}
      {/* Mobile Header (static, white, shadow) */}
<div className="lg:hidden fixed top-0 z-50 w-full bg-white shadow-md px-4 py-1 flex items-center justify-between">
  <Link href="/" className="flex-shrink-0">
    <Image src="/finallogo.png" alt="Logo" width={150} height={50} />
  </Link>
  <button onClick={toggleMobileMenu} className="text-3xl text-black">
    {mobileMenuOpen ? <HiX /> : <HiMenu />}
  </button>
</div>

{/* Mobile Sliding Menu */}
<div
  className={`fixed top-0 left-0 h-full w-full z-40 transform transition-transform duration-300 ${
    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  } bg-[#000080] text-white shadow-lg hover:text-[#8080FF]`}
>
  <ul className="mt-20 px-4 space-y-4">
    {navLinks.map((link) => (
      <li key={link.name} className="flex flex-col">
        <div className="flex justify-between items-center">
          <Link
            href={link.href || "#"}
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-lg hover:text-[#8080FF]"
          >
            {link.name}
          </Link>

          {["Products", "Sectors"].includes(link.name) && (
            <button
              onClick={() =>
                setOpenMobileSubMenu(
                  openMobileSubMenu === link.name ? null : link.name
                )
              }
              className="text-white"
            >
              {openMobileSubMenu === link.name ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.06 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.25a.75.75 0 011.08 0l4.25 4.25a.75.75 0 01.02 1.04z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Submenu */}
        {"subItems" in link &&
          openMobileSubMenu === link.name &&
          link.subItems && (
            <ul className="ml-4 mt-2 space-y-2">
              {link.name === "Products"
                ? (link as ProductMenu).subItems?.map((item) => (
                    <li key={item.title} className="flex flex-col">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-medium text-white hover:text-[#8080FF]"
                      >
                        {item.title}
                      </Link>
                      {item.subMenu && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.subMenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-white hover:text-[#8080FF]"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                : (link as NormalMenu).subItems?.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
            </ul>
          )}
      </li>
    ))}
  </ul>
</div>

    </header>
  );
}
