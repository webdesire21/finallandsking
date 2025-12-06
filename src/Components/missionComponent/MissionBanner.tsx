import Image from "next/image";
import { FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MissionBanner() {
  return (
    <section className="relative w-full">
      {/* Background Section */}
      <div className="relative min-h-[300px] md:min-h-[450px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/company/about.webp"
            alt="Our Mission Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Our Mission
          </h2>
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-200">
            Our goal at Dassault Systèmes is to create a loop between the real
            and virtual worlds to improve understanding and outcomes to benefit
            humankind.
          </p>
        </motion.div>
      </div>

      {/* Mission Card Section */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="relative z-30 -mt-16 sm:-mt-20 max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-[#F4F6F8] p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#000080] text-white text-3xl sm:text-4xl mb-4 shadow-md">
            <FaBullseye />
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Our mission is to make dreams possible through collaborative
            innovation and a mindset of constantly challenging the status quo.
          </p>
        </div>

        <div className="col-span-2 bg-[#F4F6F8] p-6 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#000080]">
            We Are Purpose Driven
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Since 2012, our company’s purpose is to provide businesses and
            people with virtual universes to imagine{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              sustainable innovations
            </a>{" "}
            capable of harmonizing product, nature, and life.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our purpose is driven by <strong>our people</strong> and the{" "}
            <strong>passion</strong> they demonstrate. It drives our mindset and
            fuels our progress.
          </p>
        </div>
      </motion.div>

      {/* Vision 2040 Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
              Our Horizon for 2040
            </h2>
            <p className="font-semibold text-sm sm:text-base">
              Inspired by nature, guided by science, driven by technology.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our vision for 2040 is grounded in a generative economy: a model
              inspired by the organic world to drive sustainability.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-bold">3D UNIV+RSES</span> enables secure,
              industry-specific innovation and experimentation.
            </p>
          </div>

          {/* Image/Video */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about.png"
                alt="Ambition 2040"
                fill
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  ▶
                </span>
              </button>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-center text-gray-600">
              Ambition 2040: Shaping the generative economy
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Innovation Section */}
      <section className="w-full bg-white pb-16">
        <div className="text-center max-w-4xl mx-auto px-4 space-y-4 pb-12">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#000080]">
            Sustainable Innovation is a Core Practice
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Dassault Systèmes is built on continuous innovation. We believe{" "}
            <span className="text-blue-600">science</span> and technology drive
            sustainable progress.
          </p>
        </div>

        {/* Image Banner */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-xl">
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
            <Image
              src="/company/about.webp"
              alt="Culture of Innovation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                A Culture of Innovation
              </h2>
              <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
                We’re led by visionaries who inspire global transformation and
                sustainable innovation.
              </p>
              <a
                href="#"
                className="bg-white text-[#000080] font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-100 transition"
              >
                Innovation at Dassault Systèmes
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              title: "Open Innovation Laboratory",
              desc: "The 3DEXPERIENCE Lab merges collective intelligence and collaboration to foster entrepreneurship.",
              link: "Discover the 3DEXPERIENCE Lab",
            },
            {
              title: "Continuous Learning",
              desc: "Through 3DEXPERIENCE Edu, we foster a culture of continuous learning and professional growth.",
              link: "Discover 3DEXPERIENCE Edu",
            },
            {
              title: "Innovation through Design",
              desc: "Our DESIGNStudio helps companies bring ideas to life through Experience Thinking.",
              link: "Discover our DESIGNStudio",
            },
          ].map((card, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {card.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#000080] font-medium group"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080] group-hover:bg-blue-600 transition">
                  <MdKeyboardArrowRight className="text-lg group-hover:text-white" />
                </span>
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
