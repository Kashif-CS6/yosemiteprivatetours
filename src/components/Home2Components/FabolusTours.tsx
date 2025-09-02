"use client";

import React from "react";
import { FaClock, FaStar, FaThumbsUp, FaShoppingCart } from "react-icons/fa";
import HalfTemplate from "@/templates/HalfTemplate";
import { FaLocationDot } from "react-icons/fa6";

interface Tour {
  id: number;
  location: string;
  badge1?: { text: string; icon?: React.ReactNode; color: string };
  badge2?: { text: string; icon?: React.ReactNode; color: string };
  image: string;
  title: string;
  description: string;
}

const tours: Tour[] = [
  {
    id: 1,
    location: "Lahore pakistan",
    badge1: {
      text: "12 Hour Day Trip",
      icon: <FaClock />,
      color: "text-green-500",
    },
    image: "/tour-1.jpg",
    title: "Yosemite National Park private 1-day custom tour",
    description:
      "Join us now to experience Yosemite’s Majesty on our Private 1-Day tour! Yosemite Private Tours presents an exclusive 12-hour...",
  },
  {
    id: 2,
    location: "Chicago, USA",
    badge1: {
      text: "Rated Best Private Tour of Yosemite",
      color: "text-green-600",
    },
    image: "/tour-2.jpg",
    title:
      "Unwind and Explore: Your Stress-Free 2-Day Yosemite Private Tour with Hotel Stay",
    description:
      "Immerse yourself in our hassle-free Exclusive 2-Day Yosemite Private Tour. Enjoy a complimentary hotel pick up in San Francisco...",
  },
  {
    id: 3,
    location: "Istanbol, Turkey",
    badge1: { text: "Recommended", color: "text-green-600" },
    badge2: { text: "Top 5", icon: <FaStar />, color: "text-green-600" },
    image: "/tour-3.jpg",
    title:
      "Yosemite's Majesty Unleashed: Discover the Grandeur in Your 3-Day Adventure",
    description:
      "Embark on our seamless Exclusive 3-Day Yosemite Private Tour and immerse yourself in the spirit of outdoor adventure...",
  },
  // ...additional items can be added later
];

const FabolusTours: React.FC = () => {
  return (
    <HalfTemplate>
      <div className="px-4 py-8">
        <h2 className="text-[32px] text-center font-[600] mb-6 text-[#193E1A]">
          Top Trending 3 National Parks
        </h2>

        {/* Card container with flex or grid */}
        <div className="flex items-center gap-8 flex-wrap justify-center  ">
          {tours.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              className="h-[411px] w-[320px] rounded-2xl  border border-gray-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              <div className="p-4 flex flex-col h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2 h-[32px] bg-[#FFC10733] px-2 rounded-[6px] text-[12px] font-[600] leading-[100%] items-center">
                    <FaLocationDot />
                    {tour.location}
                  </div>

                  <h3 className="text-[16px] font-[700] line-clamp-2 leading-[22px]">
                    {tour.title}
                  </h3>
                </div>

                <div>
                  <p className="text-[12px] text-gray-500 font-[400] mt-2 line-clamp-2">
                    {tour.description}
                  </p>

                  <button className="mt-4 h-[38px] w-full flex items-center bg-[#F7C121] justify-center gap-2 border border-gray-300 rounded-lg py-2 text-[12px] leading-[20px] font-[600] hover:bg-[#F7C121]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HalfTemplate>
  );
};

export default FabolusTours;
