"use client";

import { useRouter } from "next/navigation";

const STORIES = [
  {
    id: 1,
    title: "End-to-End Engineering and Electrification Solution for IHM",
    Subtitle:
      "Our comprehensive engineering and electrification services—from concept design to off-road deployment—enable Industrial Heavy Machinery (IHM) manufacturers to develop and bring competitive electric vehicles to market more quickly.",
    img: "/successStory/product.jpg",
    url: "/success/plug-in-safety",
  },
  {
    id: 2,
    title: "Product Benchmarking Solutions",
    Subtitle:
      "Our product benchmarking services help manufacturers reduce input costs throughout the product development cycle and improve product competitiveness to succeed in the market.",
    img: "/rndimages/Product Engineering main slider.jpeg",
    url: "/success/connected-vehicle",
  },
  {
    id: 3,
    title: "Embedded Engineering Solutions",
    Subtitle:
      "Our embedded engineering solutions span the full V-cycle of product software development, encompassing application-level development—including MBD, SIL, MIL, and HIL—and platform software such as AUTOSAR, SDV, and custom platforms all reinforced by our strong mechatronics expertise.",
    img: "/rndimages/Design and Engineering.jpg",
    url: "/success/fast-turnaround",
  },
  {
    id: 4,
    title: "Model-based Systems ",
    Subtitle:
      "Our Model-based Systems & Engineering (MBSE) solution helps organizations connect physical and digital product designs, delivering enhanced visibility, connectivity, and traceability throughout the entire system lifecycle",
    img: "/successStory/modelbased.jpg",
    url: "/success/cabin-design",
  },
];

export default function Rndstories() {
  const router = useRouter();

  return (
    <section className=" mx-auto px-6 md:px-12 py-5 md:py-12 md:mx-11">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORIES.map((story) => (
          <div
            key={story.id}
            className="flex flex-col bg-white hover:shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between ">
              <h3 className="text-[#000080] font-medium text-sm md:text-lg mb-3">
                {story.title}
              </h3>
              <p className=" text-[#545353] text-justify mb-3">
                {story.Subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
