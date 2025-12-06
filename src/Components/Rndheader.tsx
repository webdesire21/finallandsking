"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  sub?: string;
  href?: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownSection[];
}

const Rndheader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleLinkClick = () => {
    requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
    });
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/rnd" },
    {
      label: "Services",
      href: "#",
      dropdown: [
        {
          title: "",
          items: [
            { label: "Mechanical Engineering", href: "/service/mechanical" },
            { label: "Civil Engineering", href: "/service/civil-engineering" },
            {
              label: "CAE Simulation Services",
              href: "/service/cae-simulation",
            },
          ],
        },
        {
          title: "",
          items: [
            { label: "CAD / CAM / CAE Services", href: "/cadservices" },
            { label: "Product Engineering", href: "/productengineering" },
            {
              label: "Simulation Design for Manufacturing",
              href: "/rndsimulation",
            },
          ],
        },
      ],
    },
    { label: "Solution", href: "/rnd-solutions" },
    { label: "Projects", href: "/rndprojects" },
    {
      label: "Insights",
      href: "/rnd-insights",
      dropdown: [
        {
          title: "Resources",
          items: [
            { label: "Blogs", href: "/rnd-blog" },
            { label: "Brouchers", href: "/rnd-broucher" },
            { label: "Whitepaper", href: "/rnd-whitepaper" },
            { label: "Case Study", href: "/rnd-case-studies" },
          ],
        },
      ],
    },
    { label: "Media", href: "/media" },
    {
      label: "About",
      href: "/rndaboutus/about",
      dropdown: [
        {
          title: "Resources",
          items: [
            { label: "Our History", href: "/rndaboutus/history" },
            { label: "Leadership", href: "/rndaboutus/leadership" },
            { label: "Our Mission", href: "/rndaboutus/mission" },
            { label: "Innovation", href: "/rndaboutus/innovation" },
          ],
        },
      ],
    },
    { label: "Contact", href: "/rnd-contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 font-[Lato] font-normal">
      <div className="mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center"
          >
            <img
              src="/finallogo.png"
              alt=" Rnd Logo"
              className="h-18 w-auto p-3"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium text-black md:text-lg">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative group">
                <div className="flex items-center space-x-1">
                  {/* Main link is clickable */}
                  <Link
                    href={item.href || "#"}
                    onClick={handleLinkClick}
                    className="hover:text-[#000080] transition"
                  >
                    {item.label}
                  </Link>

                  {/* Chevron toggle for dropdown */}
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="hover:text-[#000080] transition"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>

                {/* Dropdown menu */}
                {openDropdown === idx && (
                  <div className="fixed left-0 top-16 w-screen bg-white shadow-xl z-50">
                    <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-3 gap-12">
                      {item.dropdown.map((section, i) => (
                        <div key={i}>
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wide mb-4 uppercase">
                            {section.title}
                          </h4>
                          <ul className="space-y-4">
                            {section.items.map((link, j) => (
                              <li key={j}>
                                <Link
                                  href={link.href || "#"}
                                  onClick={handleLinkClick}
                                  className="block hover:text-[#000080] transition text-base font-medium"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href || "#"}
                onClick={handleLinkClick}
                className="hover:text-[#000080] transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setOpenDropdown(null);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href || "#"}
                    onClick={handleLinkClick}
                    className="font-medium hover:text-[#000080]"
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>

                {openDropdown === idx && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((section, i) =>
                      section.items.map((link, j) => (
                        <Link
                          key={j}
                          href={link.href || "#"}
                          onClick={handleLinkClick}
                          className="block text-gray-700 hover:text-[#000080] text-sm"
                        >
                          {link.label}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href || "#"}
                onClick={handleLinkClick}
                className="block hover:text-[#000080]"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Rndheader;
