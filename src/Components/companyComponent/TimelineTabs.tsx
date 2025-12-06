"use client";

import { useState } from "react";
import Image from "next/image";

export default function TimelineTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:w-full px-6  mx-auto  py-12 md:px-25">
      <div className="flex justify-center border-b mb-8 flex-wrap">
        {[
          "1981-1988",
          "1989-1998",
          "1999-2011",
          "2012-2019",
          "2020-present",
        ].map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm md:text-base font-medium transition ${
              activeTab === index
                ? "text-gray-600 border-b-2 border-[#000080]"
                : "text-[#000080] hover:text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="space-y-16">
        {activeTab === 0 && (
          <>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981 –
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>
            <section className="w-full mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-6 items-stretch">
                <div className="bg-gray-100 rounded-lg p-8 shadow-sm md:col-span-1 h-full flex flex-col">
                  <p className="text-gray-500 font-semibold uppercase mb-2">
                    Year 1994
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                    Expanded Industry Focus
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Increased industry focus to include Fabrication and
                    Assembly, Consumer Goods, High-Tech, Shipbuilding and
                    Energy.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-8 shadow-sm md:col-span-3 h-full flex flex-col">
                  <p className="text-gray-500 font-semibold uppercase mb-2">
                    Year 1995
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                    Bernard Charlès Becomes President & CEO of Dassault Systèmes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Charlès is elevated to head Dassault Systèmes, where he will
                    remain for nearly 30 years, leading the company to introduce
                    to the world the power of science-based virtual universes to
                    drive value and progress for all stakeholders, including
                    companies, patients, consumers and citizens.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA Vlkn3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>
          </>
        )}

        {/* Tab 3 */}
        {activeTab === 2 && (
          <>
            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>

            {/*new section box row */}

            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>
          </>
        )}

        {/* Tab 4 */}
        {activeTab === 3 && (
          <>
            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>

            {/*new section box row */}

            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>
          </>
        )}

        {/* Tab 5 */}
        {activeTab === 4 && (
          <>
            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>

            {/*new section box row */}

            {/* 1 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*2 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*3 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/company/about.webp"
                  alt="CATIA V3"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1986
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  CATIA V3
                </h3>
                <p className="text-gray-600">
                  Launch of CATIA Version 3, with CAE functionality on UNIX and
                  mainframe platforms.
                </p>
              </div>
            </div>

            {/*4 row */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 font-semibold uppercase mb-2">
                  Year 1981
                </p>
                <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                  Creation of Dassault Systèmes
                </h3>
                <p className="text-gray-600">
                  Dassault Systèmes is established to design products in three
                  dimensions...
                </p>
              </div>
              <div>
                <Image
                  src="/company/about.webp"
                  alt="Creation of Dassault Systèmes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/*full box row */}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold uppercase mb-2">
                Year 1981
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Agreement with IBM
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Signed worldwide marketing, sales and support agreement with
                IBM; the beginning of a long-standing partnership.
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
