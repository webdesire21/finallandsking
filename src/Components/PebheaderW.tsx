"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function PebheaderW() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
    string | null
  >(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMobileSubMenu(null);
    setOpenMobileSubSubMenu(null);
  };

  const navLinks: MenuItem[] = [
    { name: "Home", href: "/preEngineeredBuildings" },
    {
      name: "Solutions",
      href: "/system",
      subItems: [
        { name: "System", href: "/system" },
        { name: "Service", href: "/solutionservice" },

        { name: "Products", href: "/system#products-section" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      subItems: [
        {
          title: "Pre Engineered Buildings",
          href: "/peb",
          subMenu: [
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
            // { name: "Multi-Storey Building", href: "/multiStoryBuilding" },

            { name: "Prefab Site Office", href: "/prefabSiteOffice" },
            { name: "Industrial Enclosures", href: "/industrialEnclosures" },

            // { name: "Cold Room", href: "/coldRoom" },
            { name: "Control Room", href: "/controlRoom" },
            { name: "Clean Room", href: "/cleanRoom" },
            { name: "Railway Shelters", href: "/railwayShelters" },
            // { name: "Labor Hutment", href: "/laborHutment" },
            {
              name: "Prefabricated Site Infrastructure Solutions",
              href: "/prefabricatedSite",
            },
            // { name: "Low Cost Housing", href: "/lowCostHousing" },
            { name: "Acoustic Enclosures", href: "/acousticEnclosures" },
          ],
        },
        {
          title: "Light Gauge Steel Framing",
          href: "/lightguage",
          subMenu: [
            { name: "Prefab School", href: "/prefabschool" },
            { name: "Multi-Storey Building", href: "/multiStoryBuilding" },
          ],
        },
        {
          title: "Sandwich Panels",
          href: "/sandwichpanels",
          subMenu: [
            { name: "PUF Panels", href: "/puf-panels" },
            { name: "EPS Panels", href: "/epc-panels" },
            { name: "Rockwool Panel", href: "/rockwoolpanel" },
            { name: "Glass Wool Panels", href: "/glass-wool-panels" },
          ],
        },
        {
          title: "Standard Modular Solutions",
          href: "/standardmodular",
          // subMenu: [
          //   { name: "Porta Cabins", href: "/porta-cabins" },
          //   { name: "Security Guard Cabin", href: "/security-guard-cabins" },
          //   { name: "Mi Homes", href: "/mi-homes" },
          //   { name: "K-House", href: "/k-house" },
          // ],
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
    {
      name: "Insights",
      href: "/peb-insights",
      subItems: [
        { name: "Blogs", href: "/peb-blogs" },
        { name: "Brouchers", href: "/peb-brouchers" },
        { name: "Whitepaper", href: "/peb-whitepaper" },
        { name: "Case Study", href: "/peb-case-studies" },
      ],
    },
    // {
    //   name: "About",
    //   href: "/pebabout/about",
    //   subItems: [
    //     { name: "Our Leadership", href: "/pebabout/leadership" },
    //     { name: "Our History", href: "/pebabout/history" },
    //     { name: "Our Mission", href: "/pebabout/mission" },
    //     { name: "Innovation", href: "/pebabout/innovation" },
    //   ],
    // },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg font-[Lato] font-normal">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/finallogo.png"
            alt="peblogo"
            width={90}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="font-semibold text-lg text-black hover:text-[#000080]"
              >
                {link.name}
              </Link>
              {"subItems" in link &&
                link.subItems &&
                link.subItems.length > 0 && (
                  <div
                    className="absolute left-0 mt-2 w-56 rounded-b-3xl opacity-0 invisible 
                                group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                                bg-white backdrop-blur-md z-50"
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
                )}
            </div>
          ))}
        </nav>

        {/* Hamburger menu */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMobileMenu} className="text-3xl text-black">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#000080] text-white shadow-lg hover:text-[#8080FF]`}
      >
        <ul className="mt-20 px-6 space-y-4">
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
