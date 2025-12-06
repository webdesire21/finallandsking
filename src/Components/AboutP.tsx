"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { lato } from "../lib/fonts";

export default function AboutP() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full min-h-[500px] flex flex-col md:flex-row">
      {/* Left Column (Text) */}
      <div
        className="flex-1 flex items-center justify-center p-9 md:p-18 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33,71,95,0.90) 0%, rgba(22,46,68,.97) 100%), url('/aboutright.jpeg')`,
        }}
      >
        <div className=" text-white space-y-6 relative z-10">
          <h1 className="text-xl md:text-[25px] font-semibold  text-justify ">
            &quot;Landsking Infra works with clients in diverse industries
            around the world to design, construct and maintain their capital
            projects&quot;
          </h1>

          <p className="text-[15px] md:text-[16px] font-[500px] text-white text-justify">
            Landsking Infra is one of India’s fastest growing companies as an
            Industrial Solution Provider. It works on engineering, procurement,
            construction (EPC) and maintenance companies.
          </p>
        </div>
      </div>

      {/* Right Column (Video) */}
      <div
        className="flex-1 relative flex items-center justify-center p-5 md:p-5 lg:p-17 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33,71,95,0.90) 0%, rgba(22,46,68,0.97) 100%), url('/aboutleft.jpeg')`,
        }}
      >
        <div className="relative w-full max-w-xl aspect-video z-10 flex flex-col items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-[157px] object-cover rounded-md shadow-lg md:h-[360px]"
            src="/video.mp4"
            muted
            loop
            playsInline
            poster="/about2.jpg"
            onPlay={() => setIsPlaying(true)}
            controls={isPlaying}
          ></video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
              onClick={handleVideoClick}
            >
              {/* Play Button */}
              <div className="flex items-center justify-center w-20 h-20 md:w-17 md:h-17 border-7 border-black rounded-full hover:border-[#0000] transition bg-[rgba(255,255,255,0.2)]">
                <FaPlay className="text-3xl md:text-4xl text-black" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
