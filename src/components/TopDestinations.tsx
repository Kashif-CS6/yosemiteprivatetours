"use client";

import React from "react";

interface Destination {
  id: number;
  name: string;
  image: string;
}

const destinations: Destination[] = [
  { id: 1, name: "Las Vegas", image: "/las-vegas.jpg" },
  { id: 2, name: "Rome", image: "/rome.jpg" },
  { id: 3, name: "Paris", image: "/paris.jpg" },
  { id: 4, name: "London", image: "/london.jpg" },
  { id: 5, name: "New York", image: "/new-york.jpg" },
  { id: 6, name: "Washington DC", image: "/washington-dc.jpg" },
  { id: 7, name: "Cancun", image: "/cancun.jpg" },
  { id: 8, name: "Florence", image: "/florence.jpg" },
  { id: 9, name: "Barcelona", image: "/barcelona.jpg" },
  { id: 10, name: "Oahu", image: "/oaho.jpg" },
];

const TopDestinations: React.FC = () => {
  return (
    <div className="px-4 py-10 text-center">
      <h2 className="text-2xl font-bold mb-8">Top Destinations</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="relative rounded-lg overflow-hidden shadow group cursor-pointer"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
              {dest.name}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="mt-8 px-18 font-bold py-2 border border-gray-800 rounded-full   transition">
          See all
        </button>
      </div>
    </div>
  );
};

export default TopDestinations;
