"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Pebheader from "yes/Components/Pebheader";
import Image from "next/image";
import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";
// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string; // <-- new prop
};

// ✅ Card Component
function Card({ image, icon, title, description, link }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold tracking-wide mb-3">{title}</h3>
        <p className=" text-justify text-gray-600 text-base md:text-[17px] tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Construction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(false);

  return (
    <>
      <Pebheader />

      {/* Hero Section */}
      <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/cons.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Construction Sector
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  PEB Building for Construction Sector
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-justify md:text-lg">
                Landsking Infra has successfully delivered numerous
                infrastructure solutions for the construction sector, including
                worker accommodations, canteens, site offices, and more. Over
                the years, we have supported construction companies of all sizes
                with reliable and efficient prefab solutions.
              </p>
              <p className="text-gray-700 mb-4 text-justify  md:text-lg">
                With over 7 years of expertise in the prefabricated building
                industry, Landsking Infra specializes not only in site
                infrastructure but also in custom-designed warehouses, factory
                buildings, industrial sheds, poultry farms, cold storage units,
                clean rooms, and a wide range of other prefab structures. All
                our solutions are built to international quality standards and
                are widely recognized for their durability and performance.
              </p>

              <div className="flex items-center gap-4">
                <Link href="/peb-contact">
                  <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/sectorimg/cons.jpg"
                alt="construction"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-8 lg:px-12 md:px-1">
        <section className="bg-white py-12 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/prefab.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Prefab Site Office"
              link="/prefabSiteOffice"
              description="Landsking Infra offers a wide range of modular prefabricated site office solutions, featuring options like PUF-insulated panels, EPS-insulated panels, and Light Gauge Steel Framing (LGSF). These office units are engineered for quick installation and built to last, making them perfectly suited for use on construction sites and industrial projects."
            />
            <Card
              image="/sectorimg/lg.jpeg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Light Gauge Steel Framing"
              link="/lightguage"
              description="Light steel structures ideal for both residential and commercial projects, providing flexible design options and fast construction timelines."
            />
            <Card
              image="/imagesall/lh.jpeg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Labor Hutment"
              link="/laborHutment"
              description="Landsking Infra delivers affordable and long-lasting prefabricated labour accommodations, ideal for rapid deployment at construction sites and industrial locations. Built using insulated panels, these modular units ensure a safe and comfortable environment for workers, while also being easy to transport and assemble."
            />
            <Card
              image="/sectorimg/pt.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Prefabricated Toilet"
              link="/"
              description="Landsking Infra offers premium prefabricated toilet units that are sturdy, easy to set up, and suitable for a wide range of environments such as construction sites, industrial areas, and remote locations. These toilets provide a hygienic and budget-friendly solution for both temporary and permanent use."
            />
            <Card
              image="/sectorimg/por.jpg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Prefab Porta Cabins Manufacturer"
              link="/"
              description="Landsking Infra produces top-quality, customizable porta cabins tailored to suit different space and functional needs. These portable units are perfect for construction sites, office setups, and other temporary applications, offering strength, ease of installation, and reliable performance."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50  py-10 md:py-16 px-6 md:px-16 ">
        <h2 className="text-2xl text-center md:text-3xl font-extrabold tracking-wide text-[#000080] uppercase">
          Our Products Serve Prestigious Corporate Leaders
        </h2>
        <div className="w-12 h-[2px]  mx-auto mt-3 mb-6 relative"></div>
        <p className="text-gray-700   text-left md:text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          The{" "}
          <span className="text-[#000080] font-semibold">
            pre engineered building
          </span>{" "}
          has gained widespread recognition globally. Over time, a growing
          number of industries in India are adopting this innovative approach,
          which is transforming the entire construction sector in the country.
          This is important because pre-engineered structures offer some of the
          most advanced and efficient methods for completing construction
          projects. They are cost-effective and can speed up the building
          process by up to 50% compared to traditional methods. Like any other
          industry, construction has strict deadlines, which is why
          pre-engineered buildings are becoming increasingly popular.
        </p>
      </section>

      <Pebfooter />
    </>
  );
}
