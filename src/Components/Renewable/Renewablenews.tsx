export default function Renewablenews() {
  return (
    <div className="bg-white py-10 px-6 md:mx-12 lg:mx-22">
      <h2 className="text-3xl  md:mb-20 text-center md:text-4xl font-bold text-[#000080] mb-8">
        News Corner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - NEWS LIST (scrollable, 5 items visible) */}
        <div className="h-85 overflow-y-auto pl-4 pr-2 scrollbar-left-blue">
          <ul className="space-y-6">
            <li className="pb-2 border-b border-[#ccc]">
              Prominent Rock Band Indian Ocean preludes Musicians in the Museum
              series at the Azaadi Music Festival!
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Azadi Music Festival from Today
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Music Festival From Today
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Brigade REAP Inducts Five Startups into 18th UrbanTech Cohort
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Brigade Launches Rs 95 Billion Lakefront Project in Bengaluru
            </li>
            <li className="pb-2 border-b border-[#ccc]">Extra News Item 1</li>
            <li className="pb-2 border-b border-[#ccc]">Extra News Item 2</li>
            <li className="pb-2 border-b border-[#ccc]">Extra News Item 3</li>
            <li className="pb-2 border-b border-[#ccc]">
              Azadi Music Festival from Today
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Music Festival From Today
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Brigade REAP Inducts Five Startups into 18th UrbanTech Cohort
            </li>
            <li className="pb-2 border-b border-[#ccc]">
              Brigade Launches Rs 95 Billion Lakefront Project in Bengaluru
            </li>
            <li className="pb-2 border-b border-[#ccc]">Extra News Item 1</li>
            <li className="pb-2 border- border-[#ccc]">Extra News Item 2</li>
            <li className="pb-2 border-b border-[#ccc]">Extra News Item 3</li>
          </ul>
        </div>

        {/* RIGHT SIDE - TWO VIDEOS IN A ROW */}
        <div className="grid grid-cols-1 ">
          <iframe
            className="w-full h-85 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/7pmaSWoP3A4"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* BUTTON CENTERED BELOW BOTH SECTIONS */}
      <div className="mt-10 flex justify-center">
        <button className="border border-[#000080] text-black px-6 py-2 font-bold hover:bg-black hover:text-white transition hover:border-black">
          Explore Media Center
        </button>
      </div>

      {/* Custom CSS for left-side blue scrollbar */}
      <style jsx>{`
        /* Chrome, Edge, Safari */
        .scrollbar-left-blue::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-left-blue::-webkit-scrollbar-thumb {
          background-color: #1d4ed8; /* blue */
          border-radius: 4px;
        }
        .scrollbar-left-blue::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Firefox */
        .scrollbar-left-blue {
          scrollbar-width: thin;
          scrollbar-color: #1d4ed8 transparent;
          direction: rtl; /* Moves scrollbar to left */
        }
        .scrollbar-left-blue > ul {
          direction: ltr; /* Keep text normal */
        }
      `}</style>
    </div>
  );
}
