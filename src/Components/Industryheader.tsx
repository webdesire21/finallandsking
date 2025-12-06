"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type NormalMenu = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

type MegaSubMenu = {
  title: string;
  href: string;
  subMenu?: { name: string; href: string }[];
};

type MegaMenu = {
  name: "Business Areas";
  href: string;
  subItems?: MegaSubMenu[];
};

type MenuItem = NormalMenu | MegaMenu;

export default function Industryheader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
    string | null
  >(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // scroll listener only for desktop
  useEffect(() => {
    if (!isDesktop) return; // skip on mobile
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMobileSubMenu(null);
    setOpenMobileSubSubMenu(null);
  };

  const navLinks: MenuItem[] = [
    { name: "Home", href: "/industryinstallation" },
    {
      name: "Business Areas",
      href: "#",
      subItems: [
        {
          title: "Industryinstallation",
          href: "/businessAreas/industrialinstallation",
          subMenu: [
            {
              name: "EPC Turnkey Solutions",
              href: "/Industrialtrunckyprojects",
            },
            {
              name: "Construction Works",
              href: "/industryinstallation-construction",
            },
            // { name: "HVAC", href: "/hvac" },
            { name: "  Other Industries", href: "/industry-otherindustries" },
            { name: " Fire Saftey", href: "/businessAreas/fire-saftey" },
          ],
        },
        {
          title: "Transportation",
          href: "/businessAreas/transport-mobility",
          subMenu: [
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
          title: "Water",
          href: "/businessAreas/water-technology",
          subMenu: [
            {
              name: "Water Supply & Sanitation",
              href: "/businessAreas/waterSupplySanitation",
            },
            { name: "Irrigation", href: "/businessAreas/irrigation" },
          ],
        },
        {
          title: "Industrial & Buildings",
          href: "/businessAreas/industry-building",
          subMenu: [
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
    { name: "Projects", href: "/industryinstallationprojects" },
    {
      name: "Insights",
      href: "#",
      subItems: [
        { name: "Blogs", href: "/industry-blogs" },
        { name: "Brouchers", href: "/industry-brouchers" },
        { name: "Whitepaper", href: "/industry-whitepaper" },
        { name: "Case Study", href: "/industry-case-studies" },
      ],
    },
    // {
    //   name: "Media",
    //   href: "#",
    //   subItems: [
    //     { name: "Latest News", href: "/projects/pre-engineered" },
    //     { name: "Gallery", href: "/projects/prefab" },
    //   ],
    // },
    // {
    //   name: "About us",
    //   href: "/about",
    //   subItems: [
    //     {
    //       name: "Our Leadership",
    //       href: "/industryinstallationaboutus/leadership",
    //     },
    //     { name: "Our History", href: "/industryinstallationaboutus/company" },
    //     { name: "Our Mission", href: "/industryinstallationaboutus/mission" },
    //     { name: "Innovation", href: "/industryinstallationaboutus/innovation" },
    //   ],
    // },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isDesktop
          ? scrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-6 md:px-30 ${
          isDesktop ? (scrolled ? "py-3" : "py-5") : "py-3"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isDesktop && !scrolled ? "/whitelogo.png" : "/finallogo.png"}
            alt="Logo"
            width={150}
            height={50}
            priority
            className={`transition-all duration-300 ${
              isDesktop && !scrolled ? "w-38 h-16" : "w-32 h-14"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`font-light text-lg tracking-wide ${
                  scrolled ? "text-black" : "text-white"
                } hover:text-[#000080]`}
              >
                {link.name}
              </Link>

              {"subItems" in link &&
                link.subItems &&
                link.subItems.length > 0 && (
                  <>
                    {link.name === "Business Areas" ? (
                      <div
                        className={`absolute left-0/2 -translate-x-1/2 mt-2 w-[800px] grid grid-cols-4 gap-5 p-5 rounded-lg shadow-lg opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                        backdrop-blur-md z-50 ${
                          scrolled ? "bg-white" : "bg-white/95"
                        }`}
                      >
                        {(link as MegaMenu).subItems?.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-semibold text-blue-700 mb-2">
                              {col.title}
                            </h4>
                            <ul className="space-y-1">
                              {col.subMenu?.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block text-sm font-light text-gray-700 hover:text-[#000080]"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`absolute -left-13 mt-2 w-56 rounded-lg shadow-lg opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                        backdrop-blur-md z-50 ${
                          scrolled ? "bg-white" : "bg-white/90"
                        }`}
                      >
                        <ul className="py-2">
                          {(link as NormalMenu).subItems?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-sm font-light text-gray-700 hover:text-[#000080]"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMobileMenu} className="text-3xl text-black">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000080] px-4 py-6 shadow-md absolute w-full z-40 max-h-[80vh] overflow-auto">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <div>
                  {/* First-level menu */}
                  {link.subItems ? (
                    <button
                      className="w-full text-left font-light text-lg text-white flex justify-between items-center"
                      onClick={() =>
                        setOpenMobileSubMenu(
                          openMobileSubMenu === link.name ? null : link.name
                        )
                      }
                    >
                      {link.name}
                      <span className="ml-2">
                        {openMobileSubMenu === link.name ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-light text-lg text-white hover:text-[#8080FF]"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* First-level submenu */}
                  {link.subItems && openMobileSubMenu === link.name && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {/* MegaMenu (Business Areas) */}
                      {link.name === "Business Areas"
                        ? (link as MegaMenu).subItems?.map((col) => (
                            <li key={col.title}>
                              {/* Second-level submenu */}
                              {col.subMenu ? (
                                <>
                                  <button
                                    className="w-full text-left font-light text-lg text-white flex justify-between items-center"
                                    onClick={() =>
                                      setOpenMobileSubSubMenu(
                                        openMobileSubSubMenu === col.title
                                          ? null
                                          : col.title
                                      )
                                    }
                                  >
                                    {col.title}
                                    <span className="ml-2">
                                      {openMobileSubSubMenu === col.title ? (
                                        <FaChevronUp />
                                      ) : (
                                        <FaChevronDown />
                                      )}
                                    </span>
                                  </button>
                                  {/* Third-level submenu */}
                                  {openMobileSubSubMenu === col.title && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                      {col.subMenu.map((sub) => (
                                        <li key={sub.name}>
                                          <Link
                                            href={sub.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="text-sm text-white block hover:text-[#8080FF]"
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={col.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-white font-medium block hover:text-[#8080FF]"
                                >
                                  {col.title}
                                </Link>
                              )}
                            </li>
                          ))
                        : /* NormalMenu subItems */
                          (link as NormalMenu).subItems?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white text-sm block hover:text-[#8080FF]"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
