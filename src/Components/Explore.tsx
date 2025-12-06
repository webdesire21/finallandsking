"use client";

import {
  Layers,
  Grid,
  Columns,
  Home,
  Building2,
  Activity,
  PlusCircle,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: <Layers size={30} strokeWidth={1.5} />,
    title: "Industrial ",
    highlight: "buildings",
  },
  {
    icon: <Grid size={30} strokeWidth={1.5} />,
    title: "Commercial ",
    highlight: "buildings",
  },
  {
    icon: <Columns size={30} strokeWidth={1.5} />,
    title: "Housing ",
    highlight: "projects",
  },
  {
    icon: <Home size={30} strokeWidth={1.5} />,
    title: "IT     ",
    highlight: "parks",
  },
  {
    icon: <Building2 size={30} strokeWidth={1.5} />,
    title: "Institutional ",
    highlight: "buildings",
  },
  {
    icon: <Activity size={30} strokeWidth={1.5} />,
    title: "Sports ",
    highlight: "complexes",
  },
  {
    icon: <PlusCircle size={30} strokeWidth={1.5} />,
    title: "Hospitals",
    highlight: "Buildings",
  },
  {
    icon: <Users size={30} strokeWidth={1.5} />,
    title: "Stadiums",
    highlight: "Ground",
  },
];

export default function Explore() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-1">
      <div className=" mx-auto text-center md:mx-8 ">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Explore{" "}
          <span className="text-[#000080] font-bold">Building Solutions</span>
        </h2>

        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8   pt-12  ">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className=" group flex flex-col items-center text-center space-y-3
         md:border-r md:last:border-r-0 border-gray-300
       
        p-4  transition-colors duration-300 hover:bg-[#000080]"
            >
              {/* Icon */}
              <div className="text-gray-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-gray-700 group-hover:text-white font-light text-base">
                {item.title}{" "}
                <span className="text-[#000080] group-hover:text-white font-light">
                  {item.highlight}
                </span>
              </p>

              <a
                href="#"
                className="text-sm text-gray-800 group-hover:text-white underline transition font-light"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
