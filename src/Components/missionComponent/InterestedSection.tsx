// app/components/InterestedSection.tsx
export default function InterestedSection() {
  const items = [
    {
      id: 1,
      title: "About our company",
      desc: "We’re in the business of innovation. Through our unique solutions, we bring virtual twin experiences to everyone – including you!",
      btn: "What is Dassault Systèmes?",
      link: "#",
    },
    {
      id: 2,
      title: "Frequently asked questions",
      desc: "Learn answers to commonly asked questions about Dassault Systèmes like what we do and who our customers are.",
      btn: "View FAQs",
      link: "#",
    },
    {
      id: 3,
      title: "Corporate responsibility",
      desc: "We believe that by providing virtual experiences to businesses and organizations we can empower humans to create solutions that create a new era of sustainable innovation.",
      btn: "Go to corporate responsibility",
      link: "#",
    },
    {
      id: 4,
      title: "Our vision for sustainable innovation",
      desc: "Discover how Virtual Twin technologies can help you rethink your products, processes and even business models to realize radically new sustainable innovations.",
      btn: "Go to sustainability",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#000080] mb-8 sm:mb-10">
          You Might Also Be Interested In…
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg shadow-sm p-5 sm:p-6 flex flex-col hover:shadow-md transition duration-300"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 flex-1 leading-relaxed">
                {item.desc}
              </p>

              {/* Responsive Button */}
              <a
                href={item.link}
                className="inline-block text-center border border-[#000080] text-[#000080] 
                  px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 
                  text-sm sm:text-base font-semibold rounded-full 
                  hover:bg-[#000080] hover:text-white transition duration-300 
                  w-full sm:w-auto"
              >
                {item.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
