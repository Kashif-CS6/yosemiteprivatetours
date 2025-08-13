import Link from "next/link";
import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HalfTemplate from "@/templates/HalfTemplate";

const Navbar = () => {
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
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className=" h-8 border-l border-gray-300"></div>
            <div className="bg-gray-100 flex items-center gap-2 px-4 w-[70vw] md:w-80 h-[50px] rounded-3xl">
              <FaMagnifyingGlass className="text-gray-400" />
              <input
                type="text"
                placeholder="Search destination ...."
                className="outline-none border-none w-full h-full text-sm font-[400]"
              />
            </div>
          </div>
          {/* right side */}
          <div className="hidden lg:flex items-center gap-5 font-[400]">
            <Link href={"/"}>Yosemite</Link>
            <Link href={"/"}>Mammoth Lakes</Link>
            <Link href={"/"}>Tahoe</Link>
            <Link href={"/"}>Alcatraz</Link>
            <Link href={"/"}>Rating</Link>
            <Link href={"/"}>Blogs</Link>
            <LanguageDropdown />
            <button className="bg-black text-white lg:hidden  xl:flex items-center px-5 gap-2 py-2 rounded-3xl">
              {" "}
              <IoMdCart className="text-white" />
              <span>My Cart 0</span>
            </button>
          </div>
        </div>
      </HalfTemplate>
    </div>
  );
};

export default Navbar;
