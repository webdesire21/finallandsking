import Image from "next/image";

const cards = [
  {
    id: 1,
    src: "/realstate/three.webp",
    alt: "Making a positive social impact",
    title: "Making a positive social impact",
    buttonText: "CSR",
  },
  {
    id: 2,
    src: "/realstate/three.webp",
    alt: "Celebrating Diwali at L&T Realty Raintree Boulevard",
    title: "Celebrating Diwali at L&T Realty Raintree Boulevard",
    buttonText: "Community celebrations",
  },
  {
    id: 3,
    src: "/realstate/three.webp",
    alt: "Promoting the cultural and musical heritage of India",
    title: "Promoting the cultural and musical heritage of India",
    buttonText: "Events",
  },
];

const BeyondBoundaries = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-2xl font-black tracking-wide text-[#000080] uppercase mb-12">
        Beyond Boundaries
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {cards.map(({ id, src, alt, title, buttonText }) => (
          <div key={id} className="flex flex-col items-center">
            <div className="w-full h-56 md:h-48 relative mb-4 rounded overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "cover" }}
                priority={id === 1} // Priority loading first image
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-[#000080] font-semibold mb-6 max-w-xs">
              {title}
            </p>
            <button className="relative inline-flex items-center border-2 border-blue-700 text-blue-700 font-semibold px-6 py-2 hover:bg-blue-700 hover:text-white transition-colors duration-300">
              {buttonText}
              <span className="ml-2 text-yellow-500 text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeyondBoundaries;
