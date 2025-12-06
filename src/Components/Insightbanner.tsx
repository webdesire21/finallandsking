"use client";

import Image from "next/image";

export default function Insightbanner() {
  return (
    <section className="w-full h-[300px] md:h-[400px] relative flex items-center justify-center">
      <Image
        src="/realstate.png"
        alt="Insights "
        fill
        priority
        className="object-cover brightness-75"
      />

      <h1 className="text-white text-3xl md:text-5xl font-bold z-10">
        Insights
      </h1>

      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  );
}
