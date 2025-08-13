import HalfTemplate from "@/templates/HalfTemplate";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import FullTemplate from "@/templates/FullTemplate";
import ImageHandler from "../custom/ImageHandler";

const ExcellentBanner = () => {
  return (
    <FullTemplate color="white" shd="shadow-xs">
      <HalfTemplate>
        <div className="flex items-center flex-wrap gap-3 md:gap-0  md:flex-nowrap px-4 2xl:px-0 justify-between">
          {/* left side */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="font-bold tracking-wide">Excellent</h1>
              <div className="flex items-center gap-[2px]">
                <div className="bg-green-600 w-fit p-[1px]">
                  <IoStarSharp color="white" />
                </div>
                <div className="bg-green-600 w-fit p-[1px]">
                  <IoStarSharp color="white" />
                </div>
                <div className="bg-green-600 w-fit p-[1px]">
                  <IoStarSharp color="white" />
                </div>
                <div className="bg-green-600 w-fit p-[1px]">
                  <IoStarSharp color="white" />
                </div>
                <div className="bg-green-600 w-fit p-[1px]">
                  <IoStarSharp color="white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold">8,733</h1>
              <p className="text-gray-400">reviews on</p>
              <div className="flex items-center gap-1">
                <IoStarSharp className="text-green-600" />
                <p className="text-sm font-semibold">Truspilor</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div>
            <ImageHandler
              srcImage={"/sp.png"}
              ImageWidth={500}
              ImageHeight={500}
              altImg="Experiance"
              className=""
            />
          </div>
        </div>
      </HalfTemplate>
    </FullTemplate>
  );
};

export default ExcellentBanner;
