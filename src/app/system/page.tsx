"use client";
import { useState } from "react";
import Footer from "../../Components/Footer";
import PebheaderW from "yes/Components/PebheaderW";

import { ArrowUpRight } from "lucide-react";

interface Product {
  title: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  setActiveProductIndex: (index: number) => void;
  activeProductIndex: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  setActiveProductIndex,
  activeProductIndex,
}) => (
  <div
    key={index}
    className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
  >
    <img
      src={product.img}
      alt={product.title}
      className="w-full h-56 object-contain bg-white"
    />
    <div
      onClick={() => setActiveProductIndex(index)}
      className={`p-4 cursor-pointer transition ${
        activeProductIndex === index ? "bg-[#ccc]" : ""
      } group-hover:bg-[#ccc]`}
    >
      <h4 className="text-lg font-semibold">{product.title}</h4>
    </div>
  </div>
);

export default function System() {
  const [activeTabProducts, setActiveTabProducts] = useState<
    "standard" | "substructural"
  >("standard");
  const [activeTabSheeting, setActiveTabSheeting] = useState<
    "profile" | "color" | "materials"
  >("profile");

  const [activeProductIndex, setActiveProductIndex] = useState<number | null>(
    null
  );

  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllSheeting, setShowAllSheeting] = useState(false);
  const [showAllAccessories, setShowAllAccessories] = useState(false);

  const standardProducts: Product[] = [
    { title: "Single Slope", img: "/Singleslope.jpg" },
    { title: "Roof System", img: "/RoofSystem.jpg" },
    { title: "Multi-Span", img: "/MultiSpan.jpg" },
    { title: "Tapered Column", img: "/multi.jpg" },
    { title: "Extra Product 1", img: "/extra1.jpg" },
    { title: "Extra Product 2", img: "/extra2.jpg" },
  ];

  const substructuralProducts: Product[] = [
    { title: "Ridge", img: "/Ridge.png" },
    { title: "Canopy", img: "/canopy.jpg" },
    { title: "Crane", img: "/crane.jpg" },
  ];

  const profileSheeting: Product[] = [
    { title: "PebSeam128", img: "/Profiles/PebSeam128.jpg" },
    { title: "PebWall", img: "/Profiles/PebWall.png" },
    { title: "LokSeam", img: "/Profiles/LokSeam.jpg" },
    { title: "PebDek", img: "/Profiles/PebDek.jpg" },
    { title: "PebLiner", img: "/Profiles/PebLiner.jpg" },
  ];

  const color: Product[] = [
    { title: "White Cream", img: "/colour/White Cream.jpg" },
    { title: "Blue Tooth", img: "/colour/Blue-Tooth.jpg" },
    { title: "Green Tea", img: "/colour/Green-Tea.jpg" },
    { title: "Alumin ", img: "/colour/Alumin.jpg" },
    { title: "PEB-Blue", img: "/colour/PEB-Blue.jpg" },
    { title: "Opal Green", img: "/colour/Opal-Green.jpg" },
  ];

  const materials: Product[] = [
    { title: "Alupeb-Pebsteel", img: "/material/Alupeb-Pebsteel.jpg" },
    { title: "Hyper180®", img: "/material/Hyper180.jpg" },
    { title: "PebLeed™", img: "/material/PebLeed.jpg" },
    { title: "GalvaPeb™", img: "/material/GalvaPeb.jpg" },
  ];

  const accessories: Product[] = [
    {
      title: "Bolts & Sheeting fasteners",
      img: "/Accessories/Bolts & Sheeting fasteners.jpg",
    },
    {
      title: "VentilatorGable trim & Corner trim",
      img: "/Accessories/Gable trim & Corner trim.jpg",
    },
    { title: "Gutter & Downspout", img: "/Accessories/Gutter & Downspout.jpg" },
    { title: "Louver", img: "/Accessories/Louver.jpg" },
  ];

  const productList =
    activeTabProducts === "standard" ? standardProducts : substructuralProducts;
  const sheetingList =
    activeTabSheeting === "profile"
      ? profileSheeting
      : activeTabSheeting === "color"
      ? color
      : materials;

  return (
    <>
      <PebheaderW />
      <section>
        {/* Hero */}

        {/* HERO SECTION with heading + description above banner */}
        <div className="w-full mb-6 py-8 pt-32">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Heading */}
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black">
                Our Complete
              </h1>
              <h1 className="text-2xl sm:text-4xl mt-3 md:text-5xl font-bold text-black">
                Solutions
              </h1>
            </div>
            {/* Right Description */}
            <div>
              <p className="text-gray-600 text-justify text-sm sm:text-base md:text-lg">
                We provide complete solutions for structural steel,
                pre-engineered buildings, sheeting, and accessories. Our
                products are designed to meet the highest standards of
                durability and performance, helping you build with confidence
                and efficiency.
              </p>
              <a
                href="/solutionservice"
                className="mt-4 inline-flex items-center text-[#000080] font-bold text-[18px] hover:underline"
              >
                Explore more <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Banner  img
         */}
        <div className="w-full ">
          <img
            src="/solutionsBannerPebsteel.jpg"
            alt="complete solutions
"
            className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover "
          />
        </div>

        <div className="w-full bg-[#d9d9d9]">
          <div className="flex justify-center gap-12 py-6">
            <a
              href="#system-section"
              className="text-xl font-bold text-[#000000]  cursor-pointer"
            >
              System
            </a>
            <a
              href="#products-section"
              className="text-xl font-bold text-[#000000]  cursor-pointer"
            >
              Products
            </a>
          </div>
        </div>

        {/* Intro */}
        <div
          className=" px- 5  mt-5 md:mt-10 md:px-5 lg:px-0 lg:mt-10 "
          id="system-section"
        >
          <h2 className="text-5xl font-bold   mb-6 text-center">System</h2>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6   mb-12 mx-4 lg:mx-15 md:mx-10">
          <div className="bg-white  shadow text-start  flex flex-col">
            <img
              src="/Square1.png"
              alt="Structural Steel"
              className="mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 p-2 text-lg sm:text-3xl font-semibold">
              Structural Steel
            </h2>
            <p className="mt-2  text-justify  p-2 text-sm sm:text-lg text-gray-600 flex-grow">
              Landsking Infra utilizes Structural Steel (S.T.S) for complex and
              large-scale projects, including skyscrapers, airport terminals,
              and oil and gas facilities, among others.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex text-lg items-center p-6 gap-2 text-[#000080] font-bold hover:underline"
            >
              Explore more
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white shadow  text-start  flex flex-col">
            <img
              src="/Square2.jpg"
              alt="Pre-Engineered Buildings"
              className="mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 p-2 text-lg sm:text-3xl font-semibold">
              Pre-Engineered Buildings
            </h2>
            <p className="mt-2 p-2 text-justify text-sm sm:text-lg text-gray-600 flex-grow">
              Pre-engineered Buildings (PEB), also known as Prefabricated Steel
              Buildings, are widely used for factories, warehouses, hangars, and
              more.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex text-lg items-center p-6 gap-2 text-[#000080] font-bold hover:underline"
            >
              Explore more
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="py-12 bg-gray-50" id="products-section">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 text-center">Products</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTabProducts("standard")}
                className={`${
                  activeTabProducts === "standard"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Standard Framing System
              </button>
              <button
                onClick={() => setActiveTabProducts("substructural")}
                className={`${
                  activeTabProducts === "substructural"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Sub-structural Framing System
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productList
                .slice(0, showAllProducts ? productList.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {productList.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllProducts ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SHEETING COMPONENTS */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Sheeting Components</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTabSheeting("profile")}
                className={`${
                  activeTabSheeting === "profile"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTabSheeting("color")}
                className={`${
                  activeTabSheeting === "color"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Colors
              </button>
              <button
                onClick={() => setActiveTabSheeting("materials")}
                className={`${
                  activeTabSheeting === "materials"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Materials
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sheetingList
                .slice(0, showAllSheeting ? sheetingList.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {sheetingList.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllSheeting(!showAllSheeting)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllSheeting ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Accessories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessories
                .slice(0, showAllAccessories ? accessories.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {accessories.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllAccessories(!showAllAccessories)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllAccessories ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
