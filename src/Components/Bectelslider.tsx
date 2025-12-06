"use client";

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const cards = [
  {
    img: "/cards/nuclear.jpg",
    title: "Rebuilding Americas Leadership In Nuclear Power",
    link: "#",
  },
  {
    img: "/cards/bridge.jpg",
    title: "Transforming Urban Mobility",
    link: "#",
  },
  {
    img: "/cards/green.jpg",
    title: "Innovating Green Energy",
    link: "#",
  },
];

export default function Bectelslider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % cards.length);
  const prev = () => setIndex((index - 1 + cards.length) % cards.length);

  return (
    <section className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
      <video
        src="/hero/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start h-full px-6 md:px-12 lg:px-20">
        <div className="text-left text-white max-w-xl mt-28 md:mt-48">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            We Live for a Challenge
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6">
            At Bechtel, we partner with our customers to bring their ambitions
            to life, delivering projects that make a lasting, meaningful
            difference for people and communities around the world.
          </p>
        </div>

        <div className="mt-10 md:mt-48">
          <div className="relative w-[260px] sm:w-[300px] bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src={cards[index].img}
              alt={cards[index].title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-700 font-medium">
                {cards[index].title}
              </p>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 pb-3">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === index ? "bg-red-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <IoIosArrowBack size={18} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <IoIosArrowForward size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
