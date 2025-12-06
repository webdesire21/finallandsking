"use client";

import Image from "next/image";

const SOLUTIONS = [
  { id: 1, title: "Pre Engineered Buildings", img: "/solutionimages/one.jpg" },
  { id: 2, title: "EPC Solutions", img: "/solutionimages/two.jpg" },
  { id: 3, title: "Structural Engineering", img: "/solutionimages/three.jpg" },
  { id: 4, title: "Renewable Energy", img: "/solutionimages/four.jpg" },
  { id: 5, title: "Construction Management", img: "/solutionimages/five.jpg" },
  { id: 6, title: "Industrial Design", img: "/solutionimages/six.jpg" },
  { id: 7, title: "Infrastructure Planning", img: "/solutionimages/seven.jpg" },
  { id: 8, title: "Other Solutions", img: "/solutionimages/eight.jpg" },
];

export default function OurSolutions() {
  return (
    <section className=" mx-auto px-6 md:px-12 py-12 md:mx-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-10">
        Our Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            className="flex flex-col items-center overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={sol.img}
              alt={sol.title}
              className="w-full h-32 md:h-40 object-cover"
            />
            <h3 className="mt-3 text-center text-[#000080] font-light text-sm md:text-base">
              {sol.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
