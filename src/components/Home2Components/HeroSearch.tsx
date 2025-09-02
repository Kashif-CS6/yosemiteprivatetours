import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BottleWine, Calendar } from "lucide-react";
FaMagnifyingGlass;

const HeroSearch = () => {
  return (
    <div className="w-[1140px] h-[131px] bg-[#04A7B6E5] rounded-[20px] mx-auto flex items-center justify-center absolute -bottom-[66px] shadow-lg ">
      <div className="flex items-end gap-5">
        {/* Destination search */}
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[14px] text-white font-[600]">
            Find your Next Adventure
          </h1>
          <div className="bg-white h-[52px] rounded-[10px] flex items-center px-3 gap-2 w-[429px]">
            <FaMagnifyingGlass />
            <input
              type="text"
              name="destination"
              className="flex-1 outline-none border-none"
              placeholder="All destinations ..."
              id="destination"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[14px] text-white font-[600]">Activity</h1>
          <div className="w-[220px] h-[52px] bg-white flex items-center rounded-[10px] px-3 gap-2">
            <BottleWine />
            <select name="activity" className="flex-1" id="activity">
              <option value="">Select Activity</option>
              <option value="hiking">Hiking</option>
              <option value="skiing">Skiing</option>
              <option value="swimming">Swimming</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[14px] text-white font-[600]">Departure Month</h1>
          <div className="w-[220px] h-[52px] bg-white flex items-center rounded-[10px] px-3 gap-2">
            <Calendar />
            <select name="activity" className="flex-1" id="activity">
              <option value="" aria-placeholder="All months">
                All Months
              </option>
              <option value="hiking">Hiking</option>
              <option value="skiing">Skiing</option>
              <option value="swimming">Swimming</option>
            </select>
          </div>
        </div>
        <button className="w-[153px] h-[52px] bg-[#F7C121] rounded-[42px] text-[14px] text-white font-[600]">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSearch;
