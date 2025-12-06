import Image from "next/image";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LeadershipBanner() {
  return (
    <section className="relative w-full">
      <div className="relative h-[350px] w-full">
        <Image
          src="/company/about.webp"
          alt="Leadership Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left text-white px-8 md:px-16">
          <h2 className="text-4xl font-bold">Leadership</h2>
          <p className="mt-2 max-w-2xl text-lg tracking-wide">
            Our management team is inspired by a long-term vision to prove how
            the virtual world improves and extends the real world.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-24 relative z-30 grid md:grid-cols-2 gap-6 px-4">
        <div className="bg-[#F4F6F8] shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/company/user.webp"
            alt="Bernard Charlès"
            width={120}
            height={120}
            className="rounded-full flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#000080]">
              Bernard Charlès
            </h3>
            <p className="text-sm text-gray-500 mb-3">Executive Chairman</p>
            <p className="text-gray-600 text-sm leading-relaxed tracking-widest">
              Bernard Charlès has positioned Dassault Systèmes, world leader in
              virtual universes, as the preferred partner for innovation. The
              inspiration behind digital mock-up, product lifecycle management
              and <strong>3DEXPERIENCE</strong>, Charlès firmly believes that
              virtual technology is about connecting imagination and science.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <a
                href="#"
                className="text-[#000080] font-semibold flex items-center gap-2"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080]">
                  <MdKeyboardArrowRight className="text-[#000080] text-lg" />
                </span>
                View profile
              </a>
              <a href="#" className="text-[#000080] text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-[#000080] text-xl">
                <FaTimes />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F6F8] shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/company/user.webp"
            alt="Pascal Daloz"
            width={120}
            height={120}
            className="rounded-full flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#000080]">
              Pascal Daloz
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Chief Executive Officer
            </p>
            <p className="text-gray-600 text-sm leading-relaxed tracking-widest">
              With his ability to embrace future trends and bring together the
              most original talents, Pascal Daloz has made a key contribution to
              Dassault Systèmes’ policy of pioneering new sectors, especially
              life sciences and healthcare.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <a
                href="#"
                className="text-[#000080] font-semibold flex items-center gap-2"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080]">
                  <MdKeyboardArrowRight className="text-[#000080] text-lg" />
                </span>
                View profile
              </a>
              <a href="#" className="text-[#000080] text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-[#000080] text-xl">
                <FaTimes />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
