// components/YosemiteFeatures.tsx
import React from "react";
import { Heart, MapPin, Car, Users } from "lucide-react";
import HalfTemplate from "@/templates/HalfTemplate";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const YosemiteFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Personalized Itineraries",
      description: "Custom tours designed around your interests and schedule.",
      icon: <Heart className="w-12 h-12 text-gray-400" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Expert Local Guides",
      description:
        "Friendly guides with deep knowledge of Yosemite's hidden gems.",
      icon: <MapPin className="w-12 h-12 text-gray-400" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Luxury & Comfort",
      description:
        "Private transport and premium service for a relaxed experience.",
      icon: <Car className="w-12 h-12 text-gray-400" strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Skip the Crowds",
      description: "Enjoy top sights with more freedom and fewer people.",
      icon: <Users className="w-12 h-12 text-gray-400" strokeWidth={1.5} />,
    },
  ];

  return (
    <HalfTemplate>
      <section className="py-16 my-1  bg-white">
        <div className=" mx-auto">
          {/* Section Header */}
          <div className=" mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-wide">
              Why Choose Yosemite Private Tours
            </h2>
          </div>

          {/* Features Grid */}
          <div className="flex items-center justify-between">
            {features.map((feature) => (
              <div key={feature.id} className="text-start group">
                {/* Icon */}
                <div className="flex justify-start mb-2">
                  <div className="p-3 rounded-full   transition-colors duration-200">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base w-72">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HalfTemplate>
  );
};

export default YosemiteFeatures;
