"use client";

import { useState } from "react";

export default function Needtab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Invest, Finance & Value",
      heading: "Invest, Finance & Value",
      subheading: "Core Capabilities",

      paragraph:
        "India’s emerging real estate powerhouse., Landsking Infra is your strategic partner for maximizing investment performance across the entire asset lifecycle. Our advisors leverage proprietary, real-time intelligence to connect you with the right capital and high-growth opportunities in every market and property sector across India, ensuring your portfolio thrives.",
      img: "real/invest.png",
      boxes: [
        {
          title: "Investment & Capital Solutions",
          text: "Drive superior portfolio returns through expert acquisition, strategic disposition, and innovative joint venture structuring. We adeptly link high-potential assets to the optimal capital sources via our specialized finance and real estate investment banking advisory, delivering tailored solutions for your growth.",
        },
        {
          title: "Land Valuation & Market Advisory",
          text: "Gain profoundly accurate, data-backed insights on the true value and future potential of your land and property assets. Our seasoned experts provide clear, objective valuations, appraisals, and strategic advisory specifically tailored to navigate and capitalize on the dynamic Indian real estate market landscape.",
        },
        {
          title: "Proprietary Forecasting & Analytics",
          text: "Make supremely confident, intelligent investment decisions armed with deep, proprietary analysis of key growth drivers. We offer cyclical economic predictions and granular market performance insights, empowering you with an unparalleled forward-looking view specific to India’s evolving real estate sector.",
        },
        {
          title: "Investment Portfolio Management",
          text: "Receive bespoke, strategic analysis and hands-on management designed to help you attract more capital and enhance the overall performance of your diverse real estate holdings. Our integrated approach ensures maximized asset value and sustained, long-term growth for your entire portfolio.",
        },
        {
          title: "Due Diligence & Legal Assurance",
          text: "Minimize risk and ensure absolute transaction security with our rigorous legal clearance, exhaustive title verification, and comprehensive due diligence services. This foundational commitment to legal certainty guarantees transparent, dispute-free transactions and forms the bedrock of our client trust.",
        },
        {
          title: "Strategic Infrastructure Integration",
          text: "Uncover hidden potential and unlock new value through our specialized expertise in integrating adjacent infrastructure solutions. From logistics parks to sustainable solar initiatives, we design and deliver complete, future-ready business outcomes that enhance asset utility and market appeal.",
        },
      ],
    },

    {
      title: "Plan, Lease & Occupy",
      heading: "Maximizing Asset Utility",
      subheading: "Core Capabilities",

      paragraph:
        "Make your real estate strategy a powerful competitive advantage. Our analytical expertise and proprietary local intelligence empower occupiers and owners to anticipate market opportunities and execute strategies that directly drive business results across India's diverse sectors.",
      img: "real/Plan, Lease & Occupy.jpg",
      boxes: [
        {
          title: "Transaction & Risk Services",
          text: "Mitigate transactional risks across commercial and industrial leasing with a well-defined process and cutting-edge local market intelligence. We ensure secure, compliant, and favorable terms.",
        },
        {
          title: "Site & Location Strategy",
          text: "Make superior location decisions with a holistic approach that rigorously weighs factors like supply chain logistics, labor availability, and regional incentive schemes specific to India.",
        },
        {
          title: "Workspace & Retail Solutions",
          text: "Build brand resilience, attract high-caliber talent, and foster essential connection within your office or retail environment. We design spaces that align with your business culture.",
        },
        {
          title: "Occupier Experience Services",
          text: "Create deeper, more productive connections between employees and their physical environment. We integrate local services and technology solutions to enhance daily occupancy and satisfaction.",
        },
        {
          title: "Lease Administration & Data",
          text: "Harness existing portfolio data to dramatically reduce operating costs, efficiently track critical dates, and empower management to make better, informed leasing decisions.",
        },
        {
          title: "Portfolio & Enterprise Strategy",
          text: "Develop cost-effective, adaptable real estate portfolio strategies that are meticulously aligned with your overall enterprise objectives for growth and operational efficiency.",
        },
        {
          title: "Flexible Space Solutions",
          text: "Plan and swiftly execute real estate strategies that are agile and responsive to changing business demands and modern employee work or retail consumer preferences.",
        },
        {
          title: "Local Forecasting & Analytics",
          text: "We forecast the future of Indian real estate markets based on economic cycles, local supply-demand dynamics, and evolving occupier space requirements.",
        },
        {
          title: "Occupancy Management",
          text: "Leverage granular utilization data to anticipate changes, empower teams, and proactively unlock optimization opportunities within your current asset portfolio.",
        },
        {
          title: "Strategic Consulting",
          text: "Receive comprehensive, incisive, and executable guidance on your most complex real estate challenges, ensuring every decision is strategically sound and goal-oriented.",
        },
      ],
    },

    {
      title: "Manage Properties & Portfolios",
      heading: "Properties & Portfolios",
      subheading: "Business Areas",
      paragraph:
        "Landsking Infra Take complete operational control of your real estate assets. Our experts leverage proprietary local supply chain expertise and innovative technology to manage every aspect, from daily operations and accounting to efficiency and energy consumption, ensuring you reduce costs and increase efficiencies. That ensuring your portfolio runs optimally and delivers sustained cost reduction and value.",
      img: "real/properties.jpg",
      boxes: [
        {
          title: "Integrated Asset Management",
          text: "Optimize your property's daily performance and ensure continuous operational success with superior, full-spectrum facilities management and preventative maintenance services across all asset classes. We focus on maximizing uptime and minimizing long-term costs.",
        },
        {
          title: "High-Performance Property Maximization",
          text: "Maximize the financial performance of your individual properties using innovative management solutions driven by local market insight and cutting-edge operational technology. We introduce unique amenities and services to enhance tenant retention and yield.",
        },
        {
          title: "Owner Leasing & Marketing",
          text: "Execute bespoke marketing and dynamic leasing strategies designed specifically to attract blue-chip tenants and achieve premium rates. Our focused approach drives exceptional long-term asset value and reduces vacancy periods.",
        },
        {
          title: "Sustainability & Efficiency Solutions",
          text: "Learn precisely how Landsking Infra can integrate solutions to significantly reduce operational energy consumption and work toward a net-zero framework. We partner with you to create a sustainable and future-proof asset.",
        },
        {
          title: "Fund & Asset Accounting",
          text: "Optimize your financial operating model with strategies designed specifically to maximize investor returns and streamline reporting. We provide clear, accurate fund and property-level accounting that ensures complete compliance and financial clarity.",
        },
        {
          title: "Occupier Experience Services",
          text: "Elevate the utility of your spaces and create deeper connections between occupants and their environment. We integrate local concierge services and smart technology to enhance satisfaction and productivity across your portfolio.",
        },
        {
          title: "Occupancy Data Management",
          text: "Leverage granular, real-time occupancy data to anticipate needs, empower your facility teams, and proactively unlock optimization and growth opportunities within your portfolio. Turn utilization metrics into actionable business intelligence.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between gap-3 border-b border-gray-300 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 rounded-md text-center
              ${
                activeIndex === index
                  ? "bg-[#000080] text-white md:bg-transparent md:text-[#000080] md:border-b-2 md:border-[#000080]"
                  : "bg-gray-100 text-gray-700 hover:bg-[#000080] hover:text-white"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].heading}
        </h2>
        <p className="text-justify  text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          {tabs[activeIndex].paragraph}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].subheading}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tabs[activeIndex].boxes.map((box, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-left border border-gray-200"
            >
              <h4 className="text-lg font-semibold text-[#000080] mb-2">
                {box.title}
              </h4>
              <p className="text-gray-600 text-justify text-sm leading-relaxed">
                {box.text}
              </p>
            </div>
          ))}
        </div>

        <img
          src={tabs[activeIndex].img}
          alt={tabs[activeIndex].heading}
          className="w-full h-auto rounded-lg shadow-md mt-8"
        />
      </div>
    </div>
  );
}
