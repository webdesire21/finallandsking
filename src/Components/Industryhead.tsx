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

export default function IndustryHead() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            { name: " Fire Safety ", href: "/businessAreas/fire-safety " },
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
      className={`fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg w-full" : "bg-transparent w-full"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 md:px-20 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={scrolled ? "/finallogo.png" : "/whitelogo.png"}
            alt="Landsking Infra "
            width={150}
            height={50}
            priority
            className={`transition-all duration-300 ${
              scrolled ? "w-32 h-14" : "w-38 h-16"
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
                  <div
                    className={`absolute -left-13 mt-2 w-56 rounded-lg shadow-lg opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
  backdrop-blur-md z-50 ${scrolled ? "bg-white" : "bg-white/90"}`}
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
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMobileMenu}
            className={`text-3xl ${scrolled ? "text-black" : "text-white"}`}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000080] px-4 py-6 shadow-md absolute w-full z-40 max-h-[80vh] overflow-auto">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name} className="list-none">
                {/* First-level menu */}
                {link.subItems ? (
                  <button
                    className="w-full text-left font-light text-lg text-white flex justify-between items-center py-2"
                    onClick={() =>
                      setOpenMobileSubMenu(
                        openMobileSubMenu === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}
                    <span className="ml-2">
                      {openMobileSubMenu === link.name ? "▲" : "▼"}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-light text-lg text-white py-2"
                  >
                    {link.name}
                  </Link>
                )}

                {/* First-level submenu */}
                {link.subItems && openMobileSubMenu === link.name && (
                  <ul className="ml-2 mt-1 space-y-1">
                    {/* MegaMenu (Business Areas) */}
                    {link.name === "Business Areas"
                      ? (link as MegaMenu).subItems?.map((col) => (
                          <li key={col.title} className="list-none">
                            {/* Second-level submenu */}
                            {col.subMenu ? (
                              <>
                                <button
                                  className="w-full text-left text-black font-medium flex justify-between items-center py-1"
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
                                    {openMobileSubSubMenu === col.title
                                      ? "▲"
                                      : "▼"}
                                  </span>
                                </button>
                                {/* Third-level submenu */}
                                {openMobileSubSubMenu === col.title && (
                                  <ul className="ml-4 mt-1 space-y-1">
                                    {col.subMenu.map((sub) => (
                                      <li key={sub.name} className="list-none">
                                        <Link
                                          href={sub.href}
                                          onClick={() =>
                                            setMobileMenuOpen(false)
                                          }
                                          className="text-sm text-black block py-0.5"
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
                                className="text-black font-medium block py-1"
                              >
                                {col.title}
                              </Link>
                            )}
                          </li>
                        ))
                      : /* NormalMenu subItems */
                        (link as NormalMenu).subItems?.map((item) => (
                          <li key={item.name} className="list-none">
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-black text-sm block py-1"
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
      )}
    </header>
  );
}
