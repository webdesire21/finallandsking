import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function CustomerStories() {
  const stories = [
    {
      id: 1,
      image: "/company/about.webp",
      tag: "CUSTOMER STORY",
      title: "Francine Acher: Université de Paris",
      desc: "Helping to revolutionize treatments for neurological diseases.",
      link: "#",
    },
    {
      id: 2,
      image: "/company/about.webp",
      tag: "CUSTOMER STORY",
      title: "Mirco Maschio: Maschio Gaspardo",
      desc: "Improving the lives of his employees & of the local community and preserving the environment.",
      link: "#",
    },
    {
      id: 3,
      image: "/company/about.webp",
      tag: "CUSTOMER STORY",
      title: "Martin Edlund: Minesto",
      desc: "Harnessing the constant and powerful energy source of Nature.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000080]">
          We Help Our Customers Create a Positive Impact
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          We help people to make a difference!{" "}
          <br className="hidden sm:block" />
          Discover inspiring stories of our customers, in their own words, who
          are creating a positive impact in their communities and the world at
          large.
        </p>
        <a
          href="#"
          className="inline-block bg-[#000080] text-white 
          px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 rounded-full 
          font-semibold hover:bg-blue-700 transition 
          text-sm sm:text-base md:text-lg"
        >
          Explore more stories
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1 sm:mb-2">
                {story.tag}
              </span>
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold leading-snug mb-1 sm:mb-2">
                {story.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-snug">
                {story.desc}
              </p>

              {/* Watch video */}
              <a
                href={story.link}
                className="flex items-center gap-2 text-white font-semibold hover:underline text-xs sm:text-sm md:text-base"
              >
                <FaPlayCircle className="text-sm sm:text-base md:text-lg" />
                Watch the video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
