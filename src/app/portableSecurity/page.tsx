import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const PortableSecurity = () => {
  return (
    <>
      <div>
        <Pebheader />
        {/* Hero Section */}
        <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
          {/* Left Column */}
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/guard-room-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Portable Security Guard Cabins
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/guard-room-2.webp"
                alt="Portable Security Guard Cabins"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Portable Security Guard Cabins – Strong, Reliable, and Built for
                Safety
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Landsking Infra is a trusted manufacturer of prefabricated
                security cabins and guard rooms. Built with durable PUF or EPS
                panels, our cabins ensure reliable protection and are among the
                finest available nationwide. <br />
                <br />
                As a leading name in the industry, we specialize in portable
                guard cabins designed to provide a safe and comfortable space
                for security personnel at factories, warehouses, offices, and
                other facilities. <br />
                <br />
                With innovative manufacturing and a wide range of ready-made
                solutions, we help businesses enhance both security and
                operational efficiency.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Why Choose Portable Security ?
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Robust Construction:</strong> Built with premium
                  materials to ensure strength and long-term durability.
                </li>
                <li>
                  <strong>Thermal Insulation:</strong> Maintains a comfortable
                  interior temperature in all weather conditions.
                </li>
                <li>
                  <strong>Weather Resistance:</strong> Withstands extreme heat,
                  cold, and moisture effectively.
                </li>
                <li>
                  <strong>Quick Installation:</strong> Delivered ready-to-use,
                  requiring minimal on-site setup.
                </li>
                <li>
                  <strong>Low Maintenance:</strong> Designed for long-lasting
                  performance with little upkeep.
                </li>
                <li>
                  <strong>Custom Design:</strong> Offered in multiple sizes and
                  layouts to match specific security needs.
                </li>
                <li>
                  <strong>Portable:</strong> Easy to transport and relocate when
                  required.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/guard-room-3.jpg"
                alt="Why Choose Portable Security "
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/guard-room-4.webp"
                alt="  Advanced Manufacturing Technology at EPACK Prefab"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Advanced Manufacturing Technology at EPACK Prefab
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                At Landsking Infra, our manufacturing process allows us to
                customize the design and structure of each portable security
                cabin to meet our clients’ specific requirements. This ensures
                every cabin is tailored and unique for individual needs. <br />
                <br />
                Our cabins are built on a strong steel framework for durability
                and stability. The walls use composite insulated panels,
                offering excellent thermal insulation and an ergonomic design
                for a comfortable working environment.
                <br />
                <br />
                We provide guard cabins in various standard sizes, including
                4’x4′, 4’x6′, 4’x8′, 6’x8′, and 8’x10′, along with custom
                dimensions. Door and window placements are also flexible to fit
                the specific requirements of each site.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Uses of Portable Security Guard Cabins
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Construction Sites:</strong> Efficiently monitors
                  workers and visitors at entrances.
                </li>
                <li>
                  <strong>Corporate Offices:</strong> Provides a secure station
                  for office security staff.
                </li>
                <li>
                  <strong>Factories & Warehouses:</strong> Oversees movement of
                  goods and personnel in industrial facilities.
                </li>
                <li>
                  <strong>Parking Lots & Toll Plazas:</strong> Controls vehicle
                  access and ensures smooth traffic flow.
                </li>
                <li>
                  <strong>Residential Complexes:</strong> Strengthens security
                  for gated communities and apartments.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/guard-room-5.avif"
                alt="Uses of Portable Security Guard Cabins"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/guard-room-6.webp"
                alt="   Why Choose Portable Security Guard Cabins"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Why Choose Portable Security Guard Cabins from Landsking Infra
                Prefab?
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Durable Construction:</strong> Made with strong
                  materials to withstand harsh weather and continuous use for
                  long-lasting performance.
                </li>
                <li>
                  <strong>Easy Installation:</strong> Prefabricated and
                  ready-to-install, reducing on-site work and speeding up
                  deployment.
                </li>
                <li>
                  <strong>Portable:</strong> Can be easily moved and relocated
                  to meet changing site requirements.
                </li>
                <li>
                  <strong>Customizable:</strong> Size, layout, and features can
                  be tailored to your specific needs.
                </li>
                <li>
                  <strong>Comfort & Safety:</strong> Designed to provide a
                  comfortable workspace with proper ventilation, lighting, and
                  essential utilities for security personnel.
                </li>
                <li>
                  <strong>Cost-Effective:</strong> Prefabrication lowers
                  construction costs and reduces setup time, offering a quick,
                  budget-friendly solution.
                </li>
              </ul>
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Why Landsking Infra Prefab?
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              With years of experience in prefabricated solutions, Landsking
              Infra provides portable guard cabins that meet high standards of
              quality, safety, and efficiency. Our products are designed to
              deliver long-lasting performance and excellent value, reflecting
              our expertise and innovation in the prefab industry.
              <br />
              <br />
              For more information about our Portable Security Guard Cabins,
              contact us today!
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "What is a portable cabin?",
                  answer:
                    "Portable cabins are modular structures that can be used for offices on construction sites, security stations, temporary lodging, storage solutions, and sanitary facilities.",
                },
                {
                  question: "What is a security hut?",
                  answer:
                    "Security huts act as the primary barrier to prevent unauthorized entry, intrusions, or theft at industrial, commercial, and high-security locations.",
                },
                {
                  question: "How are porta cabins used?",
                  answer:
                    "Porta cabins are ideal for on-site offices, small office setups, or staff accommodation, with the flexibility to move them whenever required.",
                },
                {
                  question: "What is the standard size of a security hut?",
                  answer: (
                    <div>
                      <p>
                        Portable security cabins generally come in the following
                        dimensions:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>4ft x 4ft</li>
                        <li>4ft x 6ft</li>
                        <li>6ft x 6ft</li>
                        <li>8ft x 8ft</li>
                      </ul>
                      <p>
                        Custom heights are available according to your needs.
                      </p>
                    </div>
                  ),
                },
                {
                  question: "What is a portable security booth used for?",
                  answer:
                    "A portable security booth serves as a movable shelter for security personnel, allowing it to be positioned wherever needed. Its robust construction ensures it withstands diverse weather and remains durable over time.",
                },
                {
                  question: "What are the ways to secure a remote cabin?",
                  answer: (
                    <div>
                      <p>To ensure the safety of your remote cabin:</p>
                      <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>Strengthen all doors and windows.</li>
                        <li>Do not store valuables inside.</li>
                        <li>Keep the cabin looking lived-in.</li>
                        <li>Get help or advice from local people</li>
                        <li>Set up a dependable security system.</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: "Who manufactures the best acoustic enclosures?",
                  answer:
                    "Landsking Infra has earned a reputation as a trusted acoustic enclosure manufacturer, supplying reliable and effective noise control and soundproofing solutions for multiple applications.",
                },
                {
                  question: "What makes prefabricated security cabins useful?",
                  answer:
                    "These pre-built cabins offer speedy installation, reliable durability, and customizable features for security purposes. Their mobility ensures they can be relocated easily, making them a flexible option for boosting security arrangements.",
                },
                {
                  question: "Who are the top security cabin manufacturers?",
                  answer:
                    "Landsking Infra is a leading PEB security cabin manufacturer in India. The company has partnered with numerous well-known industry brands, providing them with durable and customizable security cabins for a range of applications, ensuring both safety and long-lasting performance.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer group"
                >
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">
                    {faq.question}
                    <span className="transition-transform duration-300 group-open:rotate-90">
                      ▶
                    </span>
                  </summary>
                  <p className="mt-2 text-justify text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
      <PedFooter />
    </>
  );
};

export default PortableSecurity;
