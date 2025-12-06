"use client";
import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Complete <br /> Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Professionalism and customer satisfaction are the core of our
            business. From design to fabrication, erection, and post-sales
            assistance, we are always by your side.
          </p>
          <a
            href="#"
            className="text-blue-700 font-semibold hover:underline inline-flex items-center"
          >
            Explore our solutions <span className="ml-1">↗</span>
          </a>
        </div>

        <div className="relative w-full h-72 md:h-96 lg:h-[420px] rounded-lg overflow-hidden">
          <Image
            src="/warehouse.jpg"
            alt="solution"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
