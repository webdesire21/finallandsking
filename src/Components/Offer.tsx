"use client";

import { useState } from "react";

export default function () {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Retail ",
      heading: "Retail : Place, Profit, and People",
      subheading: "What we do",
      subline: "How we work",

      paragraph:
        "Landsking Infra specializes in retail real estate environments, from high-street markets to integrated shopping malls. Given India's dynamic consumer shifts and competitive pressures, optimal location decisions are paramount. Our expert consultants leverage data-driven insights to ensure your retail presence not only achieves business success but also strategically integrates with the local community. We create environments where brands flourish and vibrant communities grow together, driving sustainable value for all stakeholders across India.",
      img: "realstate/Retail hww (3).jpg",
      boxes: [
        {
          title: "Retail Property Leasing",
          text: "Our specialized leasing team, fluent in all types of retail commercial properties, offers tailored consulting services. We guide investors, developers, and occupiers through market knowledge to secure favorable lease terms and long-term asset value.",
        },
        {
          title: "Retail Tenant Representation",
          text: "We possess the experience and resources to craft innovative, flexible strategies for every retail occupier. Our focus is assisting major brands in finding optimal store locations through market analysis, entry strategy, and expert lease negotiation.",
        },
        {
          title: "Developer/Landlord Representation",
          text: "We expertly represent property owners in leasing their prime retail spaces across metros and tier-II/tier-III cities. This includes sophisticated property marketing, identifying ideal tenant mixes, and negotiating terms that maximize asset yield.",
        },
        {
          title: "Market Research & Analysis",
          text: "We conduct in-depth research to provide granular insights into key retail real estate market trends, consumer behavior shifts, and the competitive landscape. This data empowers clients to make the most informed strategic decisions.",
        },
        {
          title: "Retail Consulting & Strategy",
          text: "We offer comprehensive guidance on all aspects of retail property development, from initial site feasibility to project management and sophisticated investment strategies. Our strategic planning enhances asset performance and optimizes market expansion efforts.",
        },
      ],
    },

    {
      title: "Office ",
      heading: " Location, Productivity, and Performance",
      subheading: "What we do",
      subline: "How we work",

      paragraph:
        "Make your real estate strategy a powerful competitive advantage. Our analytical expertise and proprietary local intelligence empower occupiers and owners to anticipate market opportunities and execute strategies that directly drive business results across India's diverse sectors.",
      img: "realstate/Office Space hww (2).jpg",
      boxes: [
        {
          title: "Occupier Advisory & Portfolio Strategy",
          text: "We provide comprehensive advisory for corporate occupiers, including portfolio optimization, business location strategy, and guidance on relocations, expansions, or consolidations. Our goal is to align your real estate directly with your core enterprise objectives.",
        },
        {
          title: "Lease & Purchase Negotiations",
          text: "Our experts develop sophisticated negotiation strategies for both lease and purchase agreements, ensuring the most advantageous terms for your business. We also specialize in lease renegotiations and strategic disposals to optimize your financial portfolio.",
        },
        {
          title: "Strategic Site Selection & Documentation",
          text: "We offer in-depth site selection services, identifying optimal locations based on your specific operational and talent needs. Our team meticulously manages all documentation, ensuring seamless and legally sound transactions.",
        },
        {
          title: "Financial Analysis & Cost Optimization",
          text: "We conduct thorough financial analysis to inform every decision, empowering you with clear insights into costs and potential returns. Our strategies focus sharply on risk mitigation and maximizing cost efficiencies across your entire office portfolio.",
        },
        {
          title: "Workplace & Coworking Consulting",
          text: "Beyond the initial transaction, we provide cutting-edge consulting on modern workplace strategy and flexible co-working solutions. We help you design environments that foster collaboration, attract and retain talent, and adapt to evolving work preferences.",
        },
      ],
    },

    {
      title: "Logistic & industry",
      heading: " Space, Supply Chain, and Profit",
      subheading: "What we do",
      paragraph:
        "Landsking Infra specializes in industrial and logistics real estate solutions, from large-scale warehouses to mission-critical manufacturing units. In India's evolving supply chain landscape, where efficiency and time-to-market define success, choosing the right operational footprint is critical.Our expert advisors combine market intelligence with logistics strategy to help organizations optimize space utilization, secure the supply chain, and elevate operational performance. We create industrial environments that guarantee efficiency, accommodate expansion, and drive long-term profit for enterprises across India.",
      img: "realstate/Logistics & Industrial Facilities hww (2).jpg",

      boxes: [
        {
          title: "Logistics Property Leasing",
          text: "Our specialized team provides tailored consulting for leasing industrial plots, mega-warehouses, and modern logistic parks. We guide investors and occupiers through specific industrial and e-commerce trends to secure favorable terms and long-term asset value.",
        },
        {
          title: "Industrial Occupier Representation",
          text: "We possess the expertise and resources to craft flexible, future-proof strategies for every industrial user. Our focus is assisting manufacturers and logistics firms in finding optimal sites through deep supply chain analysis and expert negotiation.",
        },
        {
          title: "Owner/Developer Representation",
          text: "We expertly represent property owners in leasing or selling their prime industrial and warehousing assets. This includes sophisticated property marketing, identifying ideal anchor tenants, and negotiating terms that maximize asset yield and stability.",
        },
        {
          title: "Manufacturing & Logistics Consulting",
          text: "We conduct in-depth analysis of warehousing, manufacturing, and transportation trends to provide actionable insights. This data empowers clients to make the most informed, strategic investment decisions about their critical operational footprint.",
        },
        {
          title: "Strategic Site Acquisition",
          text: "We offer comprehensive guidance on all aspects of industrial property development, from initial site feasibility and full regulatory compliance to sophisticated investment strategies. Our planning optimizes asset performance and enhances supply chain efficiency.",
        },
      ],
    },
    {
      title: "Residential ",
      heading: "Value, Finance, and Lifestyle",
      subheading: "What we do",
      paragraph:
        "Landsking Infra specializes in the Residential sector, offering comprehensive advisory to investors, developers, and high-net-worth landowners. We are dedicated to maximizing the value of residential assets across India.Whether you are seeking strategic investment opportunities, optimizing development finance, or aiming for a seamless transaction, our expert team is here to guide every step of the way, ensuring maximum residential asset value and long-term security.",
      img: "realstate/Residential hww (2).jpg",
      boxes: [
        {
          title: "Residential Brokering & Acquisition",
          text: "We provide expert brokering services for buying and selling premium residential properties, including luxury apartments, plots, and farmhouses. Our market knowledge ensures you get the right property at the best possible value.",
        },
        {
          title: "Financing & Joint Venture Structuring",
          text: "We advise on optimizing project finance and structuring strategic joint venture (JV) partnerships for large-scale residential developments. We connect developers and landowners with the right capital for expansion and growth.",
        },
        {
          title: "Consultancy & Valuation",
          text: "Our experts deliver clear, objective consultancy on market positioning, pricing strategy, and site feasibility. We provide accurate asset valuation to ensure investment decisions are informed and profitable.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 ">
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-[#000080] mb-10 tracking-tight">
        WHAT WE DO FOR YOU
      </h1>
      {/* ✅ Tabs */}
      {/* ✅ Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 border-b border-gray-300 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 md:px-6 font-medium transition-all duration-200 text-sm sm:text-base rounded-md whitespace-nowrap
        ${
          activeIndex === index
            ? "bg-[#000080] text-white md:bg-transparent md:text-[#000080] md:border-b-2 md:border-[#000080]"
            : "bg-gray-200 text-gray-700 md:bg-white hover:bg-[#000080] hover:text-white"
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
        <p className="text-gray-600 text-justify text-base md:text-lg leading-relaxed">
          {tabs[activeIndex].paragraph}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].subheading}
        </h2>

        {/* ✅ Boxes (unique per tab) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tabs[activeIndex].boxes.map((box, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-left border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-[#000080] mb-2">
                {box.title}
              </h3>
              <p className="text-gray-600 text-justify text-sm leading-relaxed">
                {box.text}
              </p>
            </div>
          ))}
        </div>
        <div className=" lg:pt-10 md:pt-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] ">
            How we work
          </h2>
        </div>
        <img
          src={tabs[activeIndex].img}
          alt={tabs[activeIndex].heading}
          className="w-full h-auto object-cover "
        />
      </div>
    </div>
  );
}
