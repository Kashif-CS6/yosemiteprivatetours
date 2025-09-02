import Link from "next/link";
import React from "react";
import HalfTemplate from "@/templates/HalfTemplate";
import ImageHandler from "../custom/ImageHandler";

const Header2 = () => {
  const dataDay = [
    {
      id: 1,
      heading: "1-day Tour",
      img: "/1.svg",
    },
    {
      id: 2,
      heading: "2-day Tour",
      img: "/2.svg",
    },
    {
      id: 3,
      heading: "3-day Adventure",
      img: "/3.svg",
    },
    {
      id: 4,
      heading: "4-day Experiance",
      img: "/4.svg",
    },
    {
      id: 5,
      heading: "5-day Package",
      img: "/5.svg",
    },
  ];
  return (
    <HalfTemplate>
      <div className="flex flex-wrap px-4 2xl:px-0 items-center gap-5 py-6">
        {dataDay.map((item, idx) => (
          <Link
            href={"/"}
            key={idx}
            className="flex items-center gap-2 text-[15px] font-[500]"
          >
            <ImageHandler
              ImageWidth={18}
              ImageHeight={18}
              srcImage={item.img}
              altImg={item.heading}
              className="object-cover"
            />
            <span> {item.heading}</span>
          </Link>
        ))}
      </div>
    </HalfTemplate>
  );
};

export default Header2;
