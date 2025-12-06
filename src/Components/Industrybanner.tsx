"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Option {
  label: string;
  image: string;
  link: string;
}

const options: Option[] = [
  { label: "Industrial", image: "/industry/ir.jpg", link: "/industrycontact" },
  { label: "Warehouse", image: "/industry/w-4.webp", link: "/industrycontact" },
  {
    label: "Commercial ",
    image: "/industry/Commercial-Pharma (3) (1).jpg",
    link: "/industrycontact",
  },
  {
    label: "Institutional",
    image: "/industry/Institutional.jpg",
    link: "/industrycontact",
  },
  { label: "Hotels ", image: "/industry/", link: "/industrycontact" },
  {
    label: "Pharma Projects",
    image: "/industry/pharma.jpg",
    link: "/industrycontact",
  },
  {
    label: "Hospital",
    image: "/industry/hpspital.jpeg",
    link: "/industrycontact",
  },
  {
    label: "Marriage Halls",
    image: "/industry/marrige hals.jpg",
    link: "/industrycontact",
  },
  {
    label: "Resorts & Solar Project",
    image: "/industry/resort.jpg",
    link: "/industrycontact",
  },
];

export default function Industrybanner() {
  const [selected, setSelected] = useState<Option>(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (options.indexOf(selected) + 1) % options.length;
      setSelected(options[nextIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, [selected]);

  const handleSelect = (opt: Option) => {
    setSelected(opt);
    setShowDropdown(false);
    router.push(opt.link);
  };

  return (
    <section className="relative h-[60vh] md:h-[45vh] lg:h-[100vh] w-full overflow-hidden flex items-center text-white md:px-3">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${selected.image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 md:px-16 lg:px-28 lg:max-w-6xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-6xl font-light leading-tight mb-6"
        >
          End-to-End Industrial Installation &
          <span className="font-semibold"> Construction Solutions</span>
        </motion.h1>

        {/* Dropdown */}
        <div className="inline-block text-left relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg md:text-xl mb-1 font-light flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            I’m interested in{" "}
            <span className="font-semibold">{selected.label}</span>
            <motion.span
              initial={false}
              animate={{ rotate: showDropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-1"
            >
              {showDropdown ? (
                <ChevronUp size={22} className="text-white" />
              ) : (
                <ChevronDown size={22} className="text-white" />
              )}
            </motion.span>
          </button>

          {/* Dropdown Box */}
          <AnimatePresence>
            {showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="
                  absolute left-0 mt-2 w-64 
                  bg-white text-black rounded-lg shadow-lg 
                  overflow-y-auto 
                  h-28           
                  md:h-40         
                  lg:h-33 "
              >
                {options.map((opt) => (
                  <li
                    key={opt.label}
                    onClick={() => handleSelect(opt)}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {opt.label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
