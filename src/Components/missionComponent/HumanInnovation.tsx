import Image from "next/image";

export default function HumanInnovation() {
  return (
    <section className="w-full bg-white py-8 md:py-5 lg:py-16">
      <div className="text-center mx-auto px-4 sm:px-6 mb-10 md:mx-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#000080]">
          Innovation & Design: by Humans for Humans
        </h2>
        <p className="text-[#000080] font-semibold mb-3 text-sm sm:text-base">
          Technology does not replace human creativity and ideas. Having a
          diverse team of creative thinkers is essential.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Try things out. Make mistakes. Learn. Then try again. What if we could
          experiment infinitely? Today, this is possible thanks to the virtual
          worlds that enable us to push the boundaries of our own imagination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-4 items-stretch">
        <div className="relative md:col-span-2 rounded-lg overflow-hidden flex min-h-[350px] sm:min-h-[420px] md:min-h-[500px]">
          <Image
            src="/company/about.webp"
            alt="Inspire People"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
            <div className="pt-8 sm:pt-10 pb-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-snug">
                If We Show the Dream Is Possible, We Can Inspire People to
                Create It
              </h3>
              <p className="text-gray-200 tracking-wide text-sm sm:text-base mb-4">
                Innovation and creativity are continuous processes. Humans are
                inspired by other humans and we make it a point to share our
                projects, knowledge, and achievements.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center border border-white text-white font-bold px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-md w-fit"
            >
              Discover more
            </a>
          </div>
        </div>

        <div className="relative md:col-span-4 rounded-lg overflow-hidden flex min-h-[350px] sm:min-h-[420px] md:min-h-[500px]">
          <Image
            src="/company/about.webp"
            alt="Community Together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
            <div className="pt-8 sm:pt-10 pb-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-snug">
                If We Bring Our Community Together, We Can Build Harmony to
                Achieve Our Goals
              </h3>
              <p className="text-gray-200 tracking-wide text-sm sm:text-base">
                Great ideas cannot be brought to life without the collective
                energy and expertise of a great team. We believe that diversity
                is a strength and make it a priority to hire people with unique
                skill sets and backgrounds.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center border border-white text-white font-bold px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-md w-fit"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>

      {/* Cards Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-4 items-stretch mt-8">
        <div className="relative md:col-span-4 rounded-lg overflow-hidden flex min-h-[350px] sm:min-h-[420px] md:min-h-[500px]">
          <Image
            src="/company/about.webp"
            alt="Community Together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
            <div className="pt-8 sm:pt-10 pb-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-snug">
                If We Bring Our Community Together, We Can Build Harmony to
                Achieve Our Goals
              </h3>
              <p className="text-gray-200 tracking-wide text-sm sm:text-base">
                Great ideas cannot be brought to life without the collective
                energy and expertise of a great team. We believe that diversity
                is a strength and make it a priority to hire people with unique
                skill sets and backgrounds.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center border border-white text-white font-bold px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-md w-fit"
            >
              Discover more
            </a>
          </div>
        </div>

        <div className="relative md:col-span-2 rounded-lg overflow-hidden flex min-h-[350px] sm:min-h-[420px] md:min-h-[500px]">
          <Image
            src="/company/about.webp"
            alt="Inspire People"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
            <div className="pt-8 sm:pt-10 pb-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-snug">
                If We Show the Dream Is Possible, We Can Inspire People to
                Create It
              </h3>
              <p className="text-gray-200 tracking-wide text-sm sm:text-base mb-4">
                Innovation and creativity are continuous processes. Humans are
                inspired by other humans and we make it a point to share our
                projects, knowledge, and achievements.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center border border-white text-white font-bold px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-md w-fit"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center max-w-4xl mx-auto px-4 my-10 sm:my-12">
        <p className="text-gray-800 font-semibold mb-3 text-sm sm:text-base">
          Our values create the core conditions to create sustainable innovation
          and drive everything we do as a company.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          By sharing our values and knowledge within our community of creative
          and passionate people worldwide, we can propel society forward and
          create disruptive innovations.
        </p>
      </div>

      {/* Final Section */}
      <section className="w-full py-12 sm:py-14 md:py-16 bg-white">
        <div className="mx-auto px-6 md:px-6 lg:mx-20">
          <div className="bg-[#F4F6F8] rounded-lg shadow-sm p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#000080]">
                The Only Progress is Human
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                Through a multi-year initiative, Dassault Systèmes is shedding
                light on{" "}
                <strong>10 major challenges the world is facing</strong> and can
                begin to be solved with{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  virtual twins
                </a>{" "}
                and solutions. For each challenge, we respond with an act and a
                commitment to create solutions that{" "}
                <strong>build a better world</strong>.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Because innovation is nothing without human imagination.
              </p>
              <a
                href="#"
                className="inline-block border border-[#000080] text-[#000080] font-semibold px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition text-sm sm:text-base"
              >
                Discover the 10 acts
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full">
              <Image
                src="/company/about.webp"
                alt="Human Progress"
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <div className="bg-[#000080] py-8 sm:py-10 mt-8 lg:mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Ready to Start Your Career with Us?
          </h3>
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Go to careers
          </a>
        </div>
      </div> */}
    </section>
  );
}
