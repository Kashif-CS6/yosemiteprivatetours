"use client";

import Image from "next/image";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
}

export default function CollectionCard({
  image,
  title,
  description,
  badge,
}: CollectionCardProps) {
  return (
    <div className="relative w-[394px] h-[350px] rounded-xl overflow-hidden shadow-lg  cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="top-6 absolute text-white left-6">
        {badge && (
          <span className="bg-[#193E1A80] text-[14px] font-[600] text-xs px-3 py-1 rounded-full mb-2 flex items-center justify-center w-[113px] h-[33px]">
            {badge}
          </span>
        )}
      </div>
      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4rounded-[34px] text-white">
        <h3 className="font-semibold text-[20px]">{title}</h3>
        <p className=" mt-1 text-[16px] font-[400]">
          {description}{" "}
          <span className="font-semibold underline cursor-pointer">
            Read More
          </span>
        </p>
      </div>
    </div>
  );
}
