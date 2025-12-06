"use client";
import { useState, useEffect } from "react";

import Navbar from "yes/Components/Navbar";
import Renewableslider from "yes/Components/Renewable/Renewableslider";

import Aboutbrand from "yes/Components/Aboutbrand";
import Aboutplatform from "yes/Components/Aboutplatform";
import Aboutproduct from "yes/Components/Aboutproduct";
import Aboutslider from "yes/Components/Aboutslider";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";
import AboutPebP from "yes/Components/AboutPebP";
import TripleBottomAccordion from "yes/Components/TripleBottomAccordion";
import ReviewsSection from "yes/Components/ReviewsSection";
import BuildHistory from "yes/Components/BuildHistory";
import Timeline from "yes/Components/Timeline";
import ServicesSlider from "yes/Components/ServicesSlider";
import Accolades from "yes/Components/Accolades";

const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    description: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
  },
  {
    title: "EPC Solutions",
    description:
      "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
    video: "/video.mp4",
  },
  {
    title: "Project Management Consultancy",
    description:
      "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
    video: "/video.mp4",
  },
  {
    title: "Structural Engineering Services",
    description:
      "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
    video: "/homeslider.mp4",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(slideTimer);
    };
  }, [active]);

  return (
    <>
      <Pebheader />
      <div className="w-full min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              About Us
            </h1>
          </div>
        </div>
      </div>
      <AboutPebP />
      <TripleBottomAccordion />
      <Renewableslider />
      <ReviewsSection />
      <BuildHistory />
      <Timeline />
      <ServicesSlider />
      <Aboutplatform />
      <Aboutproduct />
      <Aboutslider />
      <Accolades />

      <Aboutbrand />
      <Pebfooter />
    </>
  );
}
