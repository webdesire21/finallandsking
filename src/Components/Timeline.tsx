"use client";

import { useState } from "react";

interface TimelineItem {
  decade: string;
  title: string;
  description: string;
  video: string; // changed from img to video
  location?: string;
}

const timelineData: TimelineItem[] = [
  {
    decade: "2017s",
    title: "Early Beginnings",
    description:
      "Started small construction projects in Rajasthan, exploring opportunities in emerging cities.",
    video: "/video.mp4",
    location: "MaharajSagar Warehouse, Lohati",
  },
  {
    decade: "2018s",
    title: "Expansion",
    description:
      "Expanded rapidly across Maharashtra, taking on infrastructure and public works projects.",
    video: "/video.mp4",
    location: "Baba Warehouse, Pipariya",
  },
  {
    decade: "2019s",
    title: "Railway Development",
    description:
      "Worked on pioneering railway infrastructure in Delhi, connecting key urban centers.",
    video: "/video.mp4",
    location: "Maa Narmada Ware House, Pipriya",
  },
  {
    decade: "2020s",
    title: "Space & Tech Facilities",
    description:
      "Supported India’s early space and technology initiatives in Karnataka.",
    video: "/video.mp4",
    location: "Devisingh Patel Ware House, Raisen",
  },
  {
    decade: "2021s",
    title: "Hydroelectric Projects",
    description:
      "Constructed major hydroelectric power plants in Himachal Pradesh to boost energy supply.",
    video: "/video.mp4",
    location: "Astik Agro Marketing, Hosangabad",
  },
  {
    decade: "2022s",
    title: "Urban Development",
    description:
      "Participated in urban infrastructure projects in Tamil Nadu, including roads and bridges.",
    video: "/video.mp4",
    location: "ShreeSai Ware House, Tikamgargh",
  },
  {
    decade: "2023s",
    title: "Port & Shipping",
    description:
      "Developed modern port facilities in Gujarat, improving trade and connectivity.",
    video: "/video.mp4",
    location: "Goverdhan WareHouse, Pipriya",
  },
  {
    decade: "2024s",
    title: "IT & Industrial Parks",
    description:
      "Built large-scale IT and industrial parks in Telangana and Andhra Pradesh.",
    video: "/video.mp4",
    location: "100 ft Clear Span Panchotiya Warehouse, Kasrawad",
  },
  {
    decade: "2025s",
    title: "Smart Cities",
    description:
      "Contributed to smart city projects in Karnataka and Maharashtra, focusing on sustainable development.",
    video: "/video.mp4",
    location: "Agrawal Logistic Park, Dewas",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="flex flex-col lg:flex-row gap-12  mx-auto p-8">
      {/* Left Half: Text */}
      <div className="lg:w-1/2 space-y-4">
        <h3 className="text-4xl font-semibold">Our story</h3>
        <p className="text-gray-600 text-lg">
          Our story is one of energy, passion, ambition, people and teamwork. We
          harness the power of our Joint Team experience, stretching back over a
          decade and a half to deliver certainty for our clients.
        </p>
        <p className="text-gray-600 text-lg">
          Since 2017 it was founded, Landsking Infra has expanded into new
          markets and strengthened its project delivery capabilities; pioneering
          modern methods of construction, adopting purposeful technologies,
          delivering certainty for clients and constructing some of the most
          iconic projects in the India.
        </p>
        <p className="text-gray-600 text-lg">
          The growth and success of the business is based on energy, ambition,
          innovation, our people and teamwork. Across our global business (CAE
          Services), we have built a reputation of adapting our business model
          to help our clients achieve their desired outcomes with certainty. It
          is underpinned by a unique operating model which differs from those of
          other major contractors and enables us to deliver certainty to
          clients. At the core of this model, which has been informed by more
          than a decade of Joint Team Designing and construction experience and
          honed over a Half decade, are areas of industry-leading expertise:
          excellence in engineering; use of digital technologies; and the use of
          modern construction methods to deliver projects quicker, greener, more
          safely and to a higher standard.
        </p>
        <p className="text-gray-700 text-lg">
          The company s process of transformation continues at pace, as it seeks
          to become the recognised leader for innovation and excellence in a
          more productive, resilient, sustainable and diverse Design and
          construction sector.
        </p>
      </div>

      {/* Right Half: Timeline */}
      <div className="lg:w-1/2 flex gap-6">
        {/* Decades */}
        <div className="flex flex-col gap-3">
          {timelineData.map((item, index) => (
            <button
              key={item.decade}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeIndex === index
                  ? "bg-[#000080] text-white"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
            >
              {/* Dot */}
              <span
                className={`w-2 h-2 rounded-full mr-3 ${
                  activeIndex === index ? "bg-white" : "bg-[#000080]"
                }`}
              ></span>

              {item.decade}
            </button>
          ))}
        </div>

        <div className="flex-1 rounded-xl overflow-hidden ">
          <div className="flex-1 rounded-xl overflow-hidden">
            <div className="relative w-full h-96 lg:h-[36rem]">
              <video
                src={timelineData[activeIndex].video}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 w-full p-6  text-white">
                {timelineData[activeIndex].location && (
                  <p className="text-yellow-500 font-mono uppercase tracking-wide mb-2">
                    {timelineData[activeIndex].location}
                  </p>
                )}
                <h2 className="text-2xl font-bold mb-2">
                  {timelineData[activeIndex].title}
                </h2>
                <p className="text-gray-200">
                  {timelineData[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
