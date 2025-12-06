// components/VideoSection.tsx
import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full  flex justify-center items-center">
      <div className="w-full ">
        <video
          className="w-full "
          src="/realstate/m.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
