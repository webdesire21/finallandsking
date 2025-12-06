import Image from "next/image";

export default function Sustainability() {
  return (
    <section className="w-full bg-white md:py-16">
      <div className="max-w-5xl mx-auto text-center px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">
          We Help Businesses and People Innovate Sustainably to Address the
          Worlds Challenges
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Since our inception, sustainable business practices have been a
          priority for our company. As the world continues to face new
          challenges, our organization promises to maintain a high level of
          accountability for the much needed acceleration of sustainability.
        </p>
      </div>

      <div className="md:mx-20 mx-auto px-4 space-y-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/company/about.webp"
              alt="Sustainability"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#000080]">
              Our Sustainability Commitments
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sustainability is at the heart of Dassault Systèmes core values.
              Our culture is driven by{" "}
              <strong>our commitment to innovation</strong> and to having a{" "}
              <strong>positive impact</strong> on society. Everything we do is
              geared to improve the future for people and our planet. We
              constantly ask ourselves: what will life be like 10 years from
              now? How will we produce goods? How will we travel? This is why we
              work with so many customers who are pioneers in their field:
              robotics, energy, mobility and more.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We strongly believe that <strong>virtual universes</strong> are a
              key enabler to imagine, design and test new products, materials
              and manufacturing processes needed for{" "}
              <strong>social progress</strong> and{" "}
              <strong>tomorrows more sustainable economy</strong>.
            </p>
            <a
              href="#"
              className="inline-block bg-[#000080] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Read our commitments
            </a>
          </div>
        </div>

        {/* Row 2 - Text Left + Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#000080]">
              Our Impact
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Were in the business of innovation. Our aim is to build a new
              development model to address the major challenges facing the world
              today. Whether its manufacturers virtualizing their operations to
              improve data sharing and collaboration across their organization
              or the healthcare industry using virtualization to create more
              precise experiences for people as part of prevention, treatment
              and follow up, virtual twins help our clients experiment in
              real-time and improve their products and processes. We are proud
              to support all those who imagine and innovate and have been
              proudly watching our customers transform the world for the past
              40+ years.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/company/about.webp"
              alt="Our Impact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
