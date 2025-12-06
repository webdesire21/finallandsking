"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    img: "/industry.jpg",
    text: `"Our warehouse project was delivered on time with excellent quality. Truly satisfied with the service!"`,
    name: "Ravi Kumar",
    location: "MaharajSagar Warehouse, Lohati",
  },
  {
    id: 2,
    img: "/realstate.png",
    text: `"Professional work and timely delivery. Highly recommended for industrial solutions."`,
    name: "Pooja Sharma",
    location: "Baba Warehouse, Pipariya",
  },
  {
    id: 3,
    img: "/new1.png",
    text: `"They understood our requirements perfectly and executed the warehouse project smoothly."`,
    name: "Vikas Singh",
    location: "Maa Narmada Ware House, Pipriya",
  },
  {
    id: 4,
    img: "/industry.jpg",
    text: `"Very reliable and customer-focused. The team completed the warehouse setup efficiently."`,
    name: "Devisingh Patel",
    location: "Devisingh Patel Ware House, Raisen",
  },
  {
    id: 5,
    img: "/industry.jpg",
    text: `"Affordable pricing with great execution quality. Will work with them again."`,
    name: "Anita Verma",
    location: "Astik Agro Marketing, Hosangabad",
  },
  {
    id: 6,
    img: "/industry.jpg",
    text: `"Excellent construction and on-time completion of our warehouse project."`,
    name: "Sandeep Joshi",
    location: "ShreeSai Ware House, Tikamgargh",
  },
  {
    id: 7,
    img: "/industry.jpg",
    text: `"We are impressed with the high-quality materials and smooth delivery."`,
    name: "Rohit Mehra",
    location: "Goverdhan WareHouse, Pipriya",
  },
  {
    id: 8,
    img: "/industry.jpg",
    text: `"Great coordination and professional execution. Highly satisfied."`,
    name: "Priya Mishra",
    location: "100 ft Clear Span Panchotiya Warehouse, Kasrawad",
  },
  {
    id: 9,
    img: "/industry.jpg",
    text: `"A trustworthy team that delivered beyond expectations."`,
    name: "Amit Tiwari",
    location: "Agrawal Logistic Park, Dewas",
  },
  {
    id: 10,
    img: "/industry.jpg",
    text: `"From planning to execution, everything was handled seamlessly."`,
    name: "Sneha Kulkarni",
    location: "Trivani Crop Science Pvt Ltd, Factory Shed, Bhopal MP",
  },
  {
    id: 11,
    img: "/industry.jpg",
    text: `"They ensured the project was completed with precision and quality."`,
    name: "Rajesh Gupta",
    location: "Reva Rice Mill Warehouse, Udaipura MP",
  },
  {
    id: 12,
    img: "/industry.jpg",
    text: `"Very cooperative and professional team. Delivered exactly what we wanted."`,
    name: "Neha Yadav",
    location: "Mekal Food Products Pvt Ltd (Rice Mill, 120MT), Udaipura MP",
  },
  {
    id: 13,
    img: "/industry.jpg",
    text: `"We appreciate the commitment and professionalism throughout the project."`,
    name: "Vivek Jain",
    location: "TATA Steel Plant, Kaling Nagar, Odisha",
  },
  {
    id: 14,
    img: "/industry.jpg",
    text: `"Strongly recommend them for industrial and warehouse projects."`,
    name: "Sunita Dubey",
    location: "Praj Industries Ltd, Kandala Port, Gujarat",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white text-white py-16 px-2 sm:px-4 relative">
      {/* Blue Top Section */}
      <div className="bg-[#0B1444] text-white min-h-[550px] px-2 sm:px-4 relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-2">
            See why we’re rated{" "}
            <span className="italic text-blue-500">(almost)</span> 5-stars!
          </h2>

          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <p className="mt-2 text-[#000080] text-xl sm:text-2xl font-semibold">
                7,462+ customers
              </p>
              <p className="text-white mt-1 text-sm sm:text-base">
                across India have trusted us with their projects!
              </p>
            </div>

            {/* Middle: Stars & Rating */}
            <div className="flex flex-col items-center mt-4 lg:mt-0">
              <div className="flex space-x-1 mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400"
                    />
                  ))}
              </div>
              <p className="font-bold text-xl sm:text-2xl">4.9 out of 5</p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col items-center mt-4 lg:mt-0 space-y-2 w-full sm:w-auto">
              <button className="border border-white text-white w-full sm:w-auto px-6 sm:px-20 py-3 sm:py-4 rounded-full hover:bg-white hover:text-[#0B1444] transition text-sm sm:text-base">
                Read our reviews
              </button>
              <a href="#" className="text-white text-xs sm:text-sm">
                Browse Customer Stories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="max-w-8xl mx-auto relative -mt-44 sm:-mt-64 z-20 px-2 sm:px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white text-gray-800 shadow-lg overflow-hidden rounded-xl">
                <div className="h-40 sm:h-48 relative">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                        />
                      ))}
                  </div>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4">
                    {review.text}
                  </p>
                  <p className="font-semibold text-sm sm:text-base">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                  <span className="mt-2 inline-block bg-[#000080] text-white px-2 py-1 rounded text-[10px] sm:text-xs">
                    Verified Customer
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
