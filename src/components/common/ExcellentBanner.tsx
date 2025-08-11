import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const ExcellentBanner = () => {
  return (
    <div className="flex items-center justify-between">
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
        <Image src={"/sp.png"} width={500} height={500} alt="Experiance" />
      </div>
    </div>
  );
};

export default ExcellentBanner;
