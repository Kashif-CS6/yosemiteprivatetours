import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  review: string;
}

export default function TestimonialCard({
  name,
  location,
  image,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-xs p-5 relative">
      {/* Quote Icon */}
      <ImQuotesRight className="absolute top-4 right-4 text-gray-300 text-xl" />

      {/* User Info */}
      <div className="flex items-center gap-3 mb-2">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="rounded-full object-cover w-12 h-12"
        />
        <div>
          <h4 className="font-semibold text-left text-sm">{name}</h4>
          <p className="text-xs text-left text-gray-500 font-[500]">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
            size={14}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-sm text-gray-700 font-[500] text-left">{review}</p>
    </div>
  );
}
