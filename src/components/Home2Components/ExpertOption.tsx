import React, { FC } from "react";
import Image from "next/image";
import { WatchIcon } from "lucide-react";

interface ExpertOptionsTypes {
  item: number;
}

const ExpertOption: FC<ExpertOptionsTypes> = ({ item }) => {
  return (
    <div className={`h-[414px] flex items-center justify-center`}>
      <div
        className={`h-[350px] flex items-center gap-32  ${
          item % 2 == 0 ? "flex flex-row-reverse" : "flex-row flex"
        }  `}
      >
        {/* left side  */}
        <div className="w-[538px] h-[350px] mx-auto">
          <Image src={"/pt-1.svg"} width={538} height={350} alt="PT-1" />
        </div>
        {/* right side */}
        <div className="w-[550px] flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-[28px] font-[700] leading-[37px]">
              Yosemite National Park private 1-day custom tour
            </h1>
            <p className="text-[16px] font-[400]">
              Join us now to experience Yosemite's Majesty on our Private 1-Day
              tour! Yosemite Private Tours presents an exclusive 12-hour journey
              from the San Francisco to Yosemite National Park. Explore
              California's cherished gems, delving into its natural marvels and
              iconic attractions...{" "}
              <span className="font-bold cursor-pointer">read more</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center border-b-2 border-gray-200 py-1">
              <WatchIcon color="#04A7B6" />
              <h1>12 hours Trip</h1>
            </div>
            <button className="w-[135.36px] h-[48px] rounded-[48px] font-[500] leading-[20px] text-[16px] text-[#FFFFFF] bg-[#04A7B6] cursor-pointer">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertOption;
