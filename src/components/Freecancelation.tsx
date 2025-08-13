import HalfTemplate from "@/templates/HalfTemplate";
import React from "react";
import ImageHandler from "./custom/ImageHandler";

const Freecancelation = () => {
  return (
    <div className="px-4 lg:px-0">
      <HalfTemplate>
        <div className="flex items-center md:w-auto px-4  gap-4 md:gap-0 py-6 md:py-0 justify-center flex-wrap md:flex-nowrap  bg-green-100/50 rounded-3xl md:justify-between md:px-14">
          {/* left side */}
          <div className="flex flex-col gap-4 text-green-950">
            <h1 className="font-bold text-3xl">Free Cancelation</h1>
            <p className="text-[17px] font-[500] md:w-96">
              You'll receive a full refund if you cancel at least 25 house in
              advance of most experiance{" "}
            </p>
          </div>
          {/* right side */}
          <div>
            <ImageHandler
              srcImage={"/health.png"}
              ImageWidth={500}
              ImageHeight={500}
              className="w-48 h-48"
              altImg="Image-width"
            />
          </div>
        </div>
      </HalfTemplate>
    </div>
  );
};

export default Freecancelation;
