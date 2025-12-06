// src/pages/ProductPage.tsx
"use client";
import { useState } from "react";
import Footer from "../Components/Footer";
import PebCallP from "../Components/PebCallP";
import IndustryHeader from "./Industryheader";

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

export default function ProductPage() {
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
    { title: "PebSeam128", img: "/profiles/PebSeam128.jpg" },
    { title: "PebWall", img: "/profiles/PebWall.png" },
    { title: "LokSeam", img: "/profiles/LokSeam.jpg" },
    { title: "PebDek", img: "/profiles/PebDek.jpg" },
    { title: "PebLiner", img: "/profiles/PebLiner.jpg" },
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
      <IndustryHeader />
      <section className="py-12 bg-gray-50">
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
      </section>

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
      <PebCallP />
      <Footer />
    </>
  );
}
