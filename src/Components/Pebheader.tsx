"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";

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

export default function Pebheader() {
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
            { name: "Prefab Site Office", href: "/prefabSiteOffice" },
            { name: "Industrial Enclosures", href: "/industrialEnclosures" },
            { name: "Control Room", href: "/controlRoom" },
            { name: "Clean Room", href: "/cleanRoom" },
            { name: "Railway Shelters", href: "/railwayShelters" },
            {
              name: "Prefabricated Site Infrastructure Solutions",
              href: "/prefabricatedSite",
            },
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
    // { name: "Contact", href: "/peb-contact" },
  ];

  return (
    <header className="font-[Lato] font-normal">
      {/* Desktop Header */}
      <div
        className={`hidden font-[Lato] font-normal lg:block fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg w-[90%] left-1/2 -translate-x-1/2 rounded-b-2xl"
            : "bg-transparent w-full left-0"
        }`}
      >
        <div
          className={` font-[Lato] font-normal mx-auto flex items-center justify-between px-6 transition-all duration-300 md:mx-22 ${
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
                    backdrop-blur-md z-50 bg-white`}
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
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 z-50 w-full bg-white shadow-md px-6 py-1 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/finallogo.png" alt="Logo" width={150} height={50} />
        </Link>
        <button onClick={toggleMobileMenu} className="text-3xl text-black">
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#000080] text-white shadow-lg`}
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

                {"subItems" in link && link.subItems?.length ? (
                  <button
                    onClick={() =>
                      setOpenMobileSubMenu(
                        openMobileSubMenu === link.name ? null : link.name
                      )
                    }
                    className="text-white"
                  >
                    {openMobileSubMenu === link.name ? (
                      <HiChevronUp className="h-5 w-5" />
                    ) : (
                      <HiChevronDown className="h-5 w-5" />
                    )}
                  </button>
                ) : null}
              </div>

              {"subItems" in link &&
                openMobileSubMenu === link.name &&
                link.subItems && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {link.name === "Products"
                      ? (link as ProductMenu).subItems?.map((item) => (
                          <MobileProductCategory key={item.title} item={item} />
                        ))
                      : (link as NormalMenu).subItems?.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-white hover:text-[#8080FF]"
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

/* ---------------- MOBILE PRODUCT CATEGORY FIXED ---------------- */

function MobileProductCategory({
  item,
}: {
  item: {
    title: string;
    href: string;
    subMenu?: { name: string; href: string }[];
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex flex-col">
      <div className="flex justify-between items-center">
        {/* PAGE SHOULD OPEN NORMALLY */}
        <Link
          href={item.href}
          className="font-medium text-white hover:text-[#8080FF]"
        >
          {item.title}
        </Link>

        {/* SUBMENU TOGGLE ONLY ON ARROW CLICK */}
        {item.subMenu && (
          <button onClick={() => setOpen(!open)} className="text-white ml-2">
            {open ? (
              <HiChevronUp className="h-5 w-5" />
            ) : (
              <HiChevronDown className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {item.subMenu && open && (
        <ul className="ml-4 mt-1 space-y-1">
          {item.subMenu.map((sub) => (
            <li key={sub.name}>
              <Link
                href={sub.href}
                className="text-sm text-white hover:text-[#8080FF]"
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
