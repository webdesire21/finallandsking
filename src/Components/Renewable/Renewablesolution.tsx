import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function Renewablesolution() {
  const items = [
    {
      title: "Residential Solar",
      description:
        "Helps homeowners reduce electricity bills and embrace a sustainable, self-powered lifestyle.",
      img: "/solar/resd.JPG",
      link: "/residential-solar",
    },

    {
      title: "Industrial Solar",
      description:
        " Supports industries in cutting operational costs while ensuring stable, eco-friendly energy supply.",
      img: "/solar/industrial solar (2).jpg",
      link: "/industrial-solar",
    },
    {
      title: "Commercial Solar",
      description:
        "Enables businesses to achieve long-term savings and sustainability through reliable solar power.",
      img: "/solar/commercial solar (2).jpg",
      link: "/commercial-solar",
    },
  ];

  return (
    <section className="w-full py-15 mt-15 bg-[#f2f2f2] ">
      <div className=" mx-auto px-4 py-5 md:mx-10 lg:mx-25 md:py-8">
        {/* Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 ">
          <h2 className="text-3xl font-bold md:text-4xl text-[#000080]">
            A total solution provider
          </h2>
          <p className="text-gray-600">
            From blueprint to execution, we make solar simple — get your custom
            solution today.
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
                <p className="text-gray-600 flex-1 text-justify">
                  {item.description}
                </p>

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
