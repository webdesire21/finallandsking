import Image from "next/image";

export default function BusinessPractices() {
  const policies = [
    {
      id: 1,
      image: "/company/about.webp",
      title: "Ethics and Compliance",
      desc: "Pursuing ethical and sustainable growth is a fundamental value and one of the pillars of our corporate social responsibility policy.",
      btn: "Read about ethics",
      link: "#",
    },
    {
      id: 2,
      image: "/company/about.webp",
      title: "Privacy Policy",
      desc: "Our privacy policy describes the practices of our company and our affiliates related to personal data collected, used stored and processed.",
      btn: "Read about privacy",
      link: "#",
    },
    {
      id: 3,
      image: "/company/about.webp",
      title: "Anti-Piracy",
      desc: "We proactively protect our assets through anti-piracy and compliance programs to deter incidents of piracy and ensure users are in compliance.",
      btn: "Read about anti-piracy",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4 items-start">
          <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#000080] mb-4">
              Our Principles Guide Our <br className="hidden md:block" />{" "}
              Business Practices
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We have policies in place to ensure that our business practices
              and values are aligned.
            </p>
            <a
              href="#"
              className="inline-block w-full sm:w-auto border border-[#000080] text-[#000080] 
                px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold 
                hover:bg-[#000080] hover:text-white transition duration-300"
            >
              Read our policies
            </a>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition"
              >
                <div className="relative w-full h-44 sm:h-40">
                  <Image
                    src={policy.image}
                    alt={policy.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    {policy.desc}
                  </p>

                  <a
                    href={policy.link}
                    className="inline-block w-full sm:w-auto border border-[#000080] text-[#000080] 
                      px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold 
                      hover:bg-[#000080] hover:text-white transition duration-300"
                  >
                    {policy.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
