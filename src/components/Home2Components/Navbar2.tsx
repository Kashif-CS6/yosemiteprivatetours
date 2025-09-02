import Link from "next/link";
import React from "react";
import LanguageDropdown from "./LanguageDropdown2";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HalfTemplate from "@/templates/HalfTemplate";

const Navbar2 = () => {
  return (
    <div className="border-b border-gray-200">
      <HalfTemplate>
        <div className=" flex items-center justify-between py-4 px-4 2xl:px-0">
          {/* left side */}
          <div className="flex items-center gap-2 md:gap-5">
            <Image
              src={"/logo.jpg"}
              alt="logo"
              width={500}
              height={500}
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <div className=" h-8 border-l border-white/10"></div>
            <div className="bg-white/10 text-white flex items-center gap-2 px-4 w-[300px] md:w-80 h-[41px] rounded-3xl">
              <FaMagnifyingGlass className="text-white" />
              <input
                type="text"
                placeholder="Search destination ...."
                className="outline-none border-none w-full h-full text-sm font-[400] placeholder:text-white"
              />
            </div>
          </div>
          {/* right side */}
          <div className="hidden text-white lg:flex items-center gap-5 font-[400]">
            <Link href={"/"}>Yosemite</Link>
            <Link href={"/"}>Tahoe</Link>
            <Link href={"/"}>Sequoias</Link>
            <Link href={"/"}>Redwoods</Link>
            <Link href={"/"}>San Franciso</Link>

            <LanguageDropdown />
            {/* <button className="bg-black text-white lg:hidden  xl:flex items-center px-5 gap-2 py-2 rounded-3xl">
              {" "}
              <IoMdCart className="text-white" />
              <span>My Cart 0</span>
            </button> */}
            <button className="w-[100px] h-[40px] rounded-[120px] flex justify-center items-center bg-[#F7C121] text-[12px] font-[600] leading-[100%]">
              Book Now
            </button>
            <button>
              <Image
                src={"/menu-icon.svg"}
                width={24}
                height={24}
                alt="menu"
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </HalfTemplate>
    </div>
  );
};

export default Navbar2;
