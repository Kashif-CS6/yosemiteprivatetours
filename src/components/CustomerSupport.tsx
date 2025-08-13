// components/CustomerSupport.tsx
import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import HalfTemplate from "@/templates/HalfTemplate";
import ImageHandler from "./custom/ImageHandler";

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

const CustomerSupport: React.FC = () => {
  // Sample team member data - replace with your actual team photos
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Sarah Johnson", image: "/logo.jpg" },
    { id: 2, name: "Mike Chen", image: "/logo.jpg" },
    { id: 3, name: "Emma Rodriguez", image: "/logo.jpg" },
    { id: 4, name: "David Thompson", image: "/logo.jpg" },
  ];

  return (
    <div className="bg-gray-50/50 mb-4">
      <HalfTemplate>
        <section className=" py-16 px-4 2xl:px-0 ">
          <div className=" mx-auto">
            <div className=" rounded-2xl  overflow-hidden">
              <div className="flex flex-col gap-4 md:gap-10 lg:gap-0 lg:flex-row items-center">
                {/* Content Side */}
                <div className="flex-1 ">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    24/7 Customer Support
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
                    Our team of experienced adventure specialists have travelled
                    to hundreds of countries around the globe and have decades
                    of first-hand travel experience to share. Contact us now to
                    have all of your adventure-related questions answered!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center px-10 py-2 border-1 border-black rounded-full text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contact Us
                    </button>

                    <button className="inline-flex items-center justify-center px-10 py-2 border-1 border-yellow-600 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-700 transition-colors duration-200">
                      <Phone className="w-5 h-5 mr-2" />
                      (209) 888-1141
                    </button>
                  </div>
                </div>

                {/* Team Photos Side */}
                <div className="flex-shrink-0 ">
                  <div className="flex items-center justify-center lg:justify-end space-x-2">
                    {teamMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className="relative"
                        style={{
                          zIndex: teamMembers.length - index,
                          marginLeft: index > 0 ? "-16px" : "0",
                        }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <ImageHandler
                            srcImage={member.image}
                            altImg={member.name}
                            ImageWidth={80}
                            ImageHeight={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HalfTemplate>
    </div>
  );
};

export default CustomerSupport;
