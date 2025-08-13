import FullTemplate from "@/templates/FullTemplate";
import HalfTemplate from "@/templates/HalfTemplate";
import React from "react";

const FooterTopBanner = () => {
  return (
    <FullTemplate shd="shadow-none" color="bg-green-900">
      <HalfTemplate>
        <div className="h-80 w-full  flex items-center flex-wrap lg:flex-nowrap  px-4 2xl:px-0 justify-between">
          {/* left side */}
          <div className="text-white font-bold space-y-4">
            <h1 className="text-xl md:text-3xl lg:text-4xl -mt-2 tracking-wide">
              Yosemite Private Tours
            </h1>
            <p className="text-[17px] font-[400] tracking-wider lg:w-[400px] xl:w-[500px] text-gray-300">
              Get the latest offers, travel tips, and exclusive tour updates
              straight to your inbox
            </p>
          </div>
          {/* right side */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="border-white text-white border-1 md:w-96 p-3 rounded-xl">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email..."
                  className="outline-none border-white text-white"
                />
              </div>
              <button className="font-bold text-[17px] text-green-800 bg-white px-8 py-3 rounded-3xl">
                Subscribe
              </button>
            </div>
            <p className="w-96  tracking-wider text-gray-300">
              By submitting this form, i agree to Yosemite private tours{" "}
              <span className="font-bold text-white">T&Cs</span> and{" "}
              <span className="font-bold text-white">Privacy Policy</span>
            </p>
          </div>
        </div>
      </HalfTemplate>
    </FullTemplate>
  );
};

export default FooterTopBanner;
