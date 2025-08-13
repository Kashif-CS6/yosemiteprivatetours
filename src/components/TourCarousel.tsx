"use client";

import React from "react";
//@ts-ignore
import Slider from "react-slick";
import { FaClock, FaStar, FaThumbsUp, FaShoppingCart } from "react-icons/fa";
import HalfTemplate from "@/templates/HalfTemplate";

interface Tour {
  id: number;
  badge1?: { text: string; icon?: React.ReactNode; color: string };
  badge2?: { text: string; icon?: React.ReactNode; color: string };
  image: string;
  title: string;
  description: string;
}

const tours: Tour[] = [
  {
    id: 1,
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
    badge1: { text: "Recommended", color: "text-green-600" },
    badge2: { text: "Top 5", icon: <FaStar />, color: "text-green-600" },
    image: "/tour-3.jpg",
    title:
      "Yosemite's Majesty Unleashed: Discover the Grandeur in Your 3-Day Adventure",
    description:
      "Embark on our seamless Exclusive 3-Day Yosemite Private Tour and immerse yourself in the spirit of outdoor adventure...",
  },
  {
    id: 4,
    badge1: { text: "Recommended", color: "text-green-600" },
    badge2: {
      text: "Best Choice",
      icon: <FaThumbsUp />,
      color: "text-green-600",
    },
    image: "/tour-4.jpg",
    title:
      "Embrace Nature's Symphony: 4-Day Yosemite National Park Wonders Await",
    description:
      "Experience our Exclusive 4-Day Yosemite Private Tour Package—an ultimate celebration of nature's majesty! This immersive...",
  },
  {
    id: 6,
    badge1: { text: "Recommended", color: "text-green-600" },
    badge2: { text: "Top 5", icon: <FaStar />, color: "text-green-600" },
    image: "/tour-3.jpg",
    title:
      "Yosemite's Majesty Unleashed: Discover the Grandeur in Your 3-Day Adventure",
    description:
      "Embark on our seamless Exclusive 3-Day Yosemite Private Tour and immerse yourself in the spirit of outdoor adventure...",
  },
  {
    id: 6,
    badge1: { text: "Recommended", color: "text-green-600" },
    badge2: {
      text: "Best Choice",
      icon: <FaThumbsUp />,
      color: "text-green-600",
    },
    image: "/tour-4.jpg",
    title:
      "Embrace Nature's Symphony: 4-Day Yosemite National Park Wonders Await",
    description:
      "Experience our Exclusive 4-Day Yosemite Private Tour Package—an ultimate celebration of nature's majesty! This immersive...",
  },
];

const TourCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <HalfTemplate>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Fabulous Top 10 Private Tours
        </h2>
        <Slider {...settings}>
          {tours.map((tour) => (
            <div key={tour.id} className="px-2  ">
              <div className="w-80 mx-auto rounded-2xl h-[405px]  border border-gray-300 ">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                <div className="p-4 flex flex-col  h-full">
                  <div className="">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tour.badge1 && (
                        <span
                          className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded bg-gray-100 ${tour.badge1.color}`}
                        >
                          {tour.badge1.icon}
                          {tour.badge1.text}
                        </span>
                      )}
                      {tour.badge2 && (
                        <span
                          className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded bg-gray-100 ${tour.badge2.color}`}
                        >
                          {tour.badge2.icon}
                          {tour.badge2.text}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-semibold line-clamp-2">
                      {tour.title}
                    </h3>
                  </div>
                  <div className="">
                    <p className="text-xs text-gray-500 mt-1 line-clamp-3">
                      {tour.description}
                    </p>

                    <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
                      <FaShoppingCart />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-6">
          <button className="mt-8 px-18 font-bold py-2 border border-gray-800 rounded-full   transition">
            See more
          </button>
        </div>
      </div>
    </HalfTemplate>
  );
};

export default TourCarousel;
