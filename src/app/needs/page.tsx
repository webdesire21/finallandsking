"use client";
import React from "react";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Caeaccordion from "yes/Components/Caeaccordion";
import Caesector from "yes/Components/Caesector";
import Caetabs from "yes/Components/Caetabs";
import Rndtestimonial from "yes/Components/Rndtestimonial";
import Caeaccordionone from "yes/Components/Caeaccordionone";
import Caetabtwo from "yes/Components/Caetabtwo";
import Image from "next/image";
import FooterReal from "yes/Components/RealState/FooterReal";
import Realstateheader from "yes/Components/Realstateheader";
import Needtab from "yes/Components/Needtab";
import { desc } from "framer-motion/client";
import Contact from "yes/Components/RealState/Contact";
import PropertySearch from "yes/Components/RealState/PropertySearch";

const Needs = () => {
  const router = useRouter();

  const slides = [
    {
      title: "Invest, Finance & Value",
      desc: "We leverage your investments thrive from acquisition to exit with our real-time market intelligence",
      image: "/realhome/invest (2).jpg",
    },
    {
      title: "Plan, Lease & Occupy",
      desc: "Secure the optimal location and strategic terms for your business before a competitor defines the future of that zone.",
      image: "/realhome/manage properties.jpg",
    },

    {
      title: "Manage Properties & Portfolios ",
      desc: "Secure the optimal location and strategic terms for your business before a competitor defines the future of that zone.",
      image: "/realhome/mange properties new.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
      <Realstateheader />
      {/* rnd banner */}
      <section className="relative w-full   h-[60vh] md:h-[50vh] lg:h-[100vh] overflow-hidden">
        <img
          src={slides[active].image}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* Slide Content */}
        <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6  text-left md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-snug">
                {slides[active].title}
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {slides[active].desc}
              </p>
              <Link href="/realestate-contact">
                <button className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-md shadow-lg hover:bg-[#000080]  hover:text-white transition flex items-center gap-2">
                  <span>Contact</span>
                  <IoIosArrowForward className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full ">
          <div className="max-w-7xl mx-auto flex justify-center sm:justify-start gap-6 px-6 py-4 overflow-x-auto">
            {/* Desktop Tabs */}
            <div className="hidden sm:flex gap-6">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`pb-1 text-sm sm:text-base font-medium border-b-2 transition ${
                    active === i
                      ? "text-[#8080FF] border-[#8080FF]"
                      : "text-gray-300 border-transparent hover:text-white"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Mobile Dots */}
            <div className="flex sm:hidden justify-center w-full gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition ${
                    active === i ? "bg-#8080FF" : "bg-[#fff]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* end rnd banner */}
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Needs Addressing Your Real Estate Needs. To Maximizing Your
              Returns
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 text-justify mb-4 leading-relaxed">
              Landsking Infra manages the complete asset lifecycle, offering
              unparalleled authority across Residential, Commercial, and
              Industrial sectors. Your specific property needs—whether they
              involve complex acquisition, strategic disposition, or optimizing
              operational efficiency—are met by our integrated expert team. As
              India's market evolves, we equip you to not just respond, but to
              lead. Whether your immediate need involves strategic Leasing &
              Occupancy or proactive Property Management, we translate market
              complexity into simple, profitable results, solidifying our
              partnership in your success across the Indian subcontinent.
            </p>

            <Link href="/realestate-contact">
              <button className="border border-[#000080]  mt-9 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/realhome/need.png"
              alt=" real estate needs"
              className="rounded-md shadow-md  h-[400px] w-full md:w-[700px] md:h-[450px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Needtab />
      <PropertySearch />
      <Contact />
      <FooterReal />
    </>
  );
};

export default Needs;
