// components/QuickLinks.tsx
"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type QuickLink = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  url?: string;
};

type QuickLinksProps = {
  heading: string;
  links: QuickLink[];
};

export default function Links({ heading, links }: QuickLinksProps) {
  return (
    <section className=" py-5 md:py-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#000080] mb-10 relative">
        {heading}
      </h2>

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:mx-22">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url || "#"}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition group"
          >
            <h3 className="text-lg font-semibold text-[#000080] mb-4">
              {link.title}
            </h3>
            <div className="flex items-center text-[#8080FF] font-medium text-sm  space-x-2">
              {link.icon}
              <span>{link.subtitle}</span>
            </div>
            <div className="mt-4 flex items-center text-[#8080FF] font-semibold group-hover:translate-x-1 transition">
              <ArrowRight size={25} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
