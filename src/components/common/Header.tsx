import Image from "next/image";
import Link from "next/link";
import React from "react";
import HalfTemplate from "@/templates/HalfTemplate";


const Header = () => {
  const dataDay = [
    {
      id: 1,
      heading: "1-day Tour",
      img: "/day-1.png",
    },
    {
      id: 2,
      heading: "2-day Tour",
      img: "/day-2.png",
    },
    {
      id: 3,
      heading: "3-day Adventure",
      img: "/day-3.png",
    },
    {
      id: 4,
      heading: "4-day Experiance",
      img: "/day-4.png",
    },
    {
      id: 5,
      heading: "5-day Package",
      img: "/day-5.png",
    },
  ];
  return (
   
      <HalfTemplate>
        <div className="flex items-center gap-5 py-6">
          {dataDay.map((item, idx) => (
            <Link
              href={"/"}
              key={idx}
              className="flex items-center gap-2 text-[15px] font-[500]"
            >
              <Image
                width={18}
                height={18}
                src={item.img}
                alt={item.heading}
                className="object-cover"
              />
              <span> {item.heading}</span>
            </Link>
          ))}
        </div>
      </HalfTemplate>
    
  );
};

export default Header;
