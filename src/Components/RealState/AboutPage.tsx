

import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden shadow-lg aspect-video">
            <video
          className="w-full "
          src="video.mp4" 
        //   autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
           
           
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl md:text-2xl font-black tracking-wide text-blue-700 text-center">ABOUT US</h2>
            <p className="text-gray-500 leading-relaxed">
              Established in 2011, L&T Realty is the real estate arm of Larsen and Toubro and is one of the top real estate developers in India. With an extensive
              portfolio spanning 6.50 mn. square metres (i.e. 70 mn sq ft) across Residential, Commercial and Retail developments, the company is currently
              present in Mumbai, Navi Mumbai, NCR, Bengaluru, Hyderabad and Chennai. Every real estate property envisioned by L&T Realty serves as a landmark
              of excellence and provides customer delight at every touch point, through design innovation and operational excellence. Counted among prominent real
              estate developers in Mumbai, India, the business has built a reputation of standing by its promises and embracing the power of digitization and new
              technologies into its core strategy for growth.
            </p>
          </div>
        </div>

       

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-1 ">
        
          <div className="grid grid-cols-2 gap-1">
            <div className="relative aspect-[3/4]  overflow-hidden shadow-lg">
              <Image
                src="/realstate/about1.webp"
                alt="Building 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden shadow-lg">
              <Image
                src="/realstate/about2.webp"
                alt="Building 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Bottom Right: Data Boxes */}
          <div className="bg-white rounded-lg  max-w-2xl mx-auto">
      {/* 2x2 Grid of Data Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 rounded-lg overflow-hidden">
        {/* Box 1 */}
        <div className="bg-white p-6 md:p-10 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-yellow-500">4.4 mn</span>
          <span className="text-sm md:text-base text-gray-600 mt-2">
            square metres residential development
          </span>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-6 md:p-10 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-yellow-500">3.1 mn</span>
          <span className="text-sm md:text-base text-gray-600 mt-2">
            square metres commercial & retail development
          </span>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-6 md:p-10 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-yellow-500">10 k+</span>
          <span className="text-sm md:text-base text-gray-600 mt-2">
            Happy families
          </span>
        </div>

        {/* Box 4 */}
        <div className="bg-white p-6 md:p-10 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-bold text-yellow-500">13 +</span>
          <span className="text-sm md:text-base text-gray-600 mt-2">
            Mixed use & gated communities
          </span>
        </div>
      </div>

      {/* "Know More" Button */}
      <div className="mt-8 flex justify-center">
        <a href="#" className="flex items-center space-x-2 py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-md transition-colors hover:bg-blue-600 hover:text-white group">
          <span className="font-semibold text-sm">Know More</span>
          <svg className="w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}