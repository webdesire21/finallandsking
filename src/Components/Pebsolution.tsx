import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function Pebsolution() {
  const items = [
    {
      title: "System",
      description:
        "We provide solutions for Pre-Engineered Steel Buildings and Structural Steel.",
      img: "/system.jpg",
      link: "/system",
    },
    {
      title: "Service",
      description:
        "We stand by our customers at every stage of the building project process.",
      img: "/service.jpg",
      link: "/solutionservice",
    },
    {
      title: "Product",
      description: "Designed for sustainability and world-class quality.",
      img: "/product.jpg",
      link: "/system#products-section",
    },
  ];

  return (
    <section className="w-full py-12 mt-15 bg-[#f2f2f2] ">
      <div className=" mx-auto px-4 py-5 md:mx-10 lg:mx-20 md:py-8">
        {/* Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 ">
          <h2 className="text-2xl font-bold md:text-3xl text-[#000080]">
            A total solution provider
          </h2>
          <p className="text-gray-600 font-bold">
            We are a solution-driven company that handles all aspects of a
            project from concept to erection, employing optimized solutions and
            value engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f2f2f2] rounded-lg overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative w-full h-68">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-2xl mb-2 md:text-2xl text-[#000080]">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex-1">{item.description}</p>

                {/* Explore more with inline arrows */}
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-[#000080] font-bold text-[18px] group"
                >
                  Explore more
                  <span className="ml-2 relative flex items-center w-5 h-5">
                    {/* Default arrow */}
                    <ArrowUpRight className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" />

                    {/* <ChevronRight className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" /> */}
                    {/* Hover arrow */}
                    <ChevronRight className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
