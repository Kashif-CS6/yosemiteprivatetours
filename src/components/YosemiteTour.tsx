// components/YosemiteTourCard.tsx
import HalfTemplate from "@/templates/HalfTemplate";
import React from "react";
import FullTemplate from "@/templates/FullTemplate";
import ImageHandler from "./custom/ImageHandler";

const YosemiteTour = () => {
  return (
    <FullTemplate color="bg-gray-50" shd="shadow-none">
      <HalfTemplate>
        <div className="flex items-center justify-between">
          {/* left side */}
          <div className="w-6/12 flex flex-col gap-3 h-[60vh] justify-center">
            <h1 className="text-3xl tracking-wide font-bold leading-[60px]">
              About Yosemite Private Tours
            </h1>
            <p className="text-[17px] font-[400] leading-[150%]">
              Embark on Exclusive & Epic Yosemite Private Tours: Luxurious,
              worry-free overnight travel experiences. Unveil Yosemite's
              enchanting magic and nature's marvels in style. Whether solo or
              with your favorite company, friends, or family — exhilarating
              adventures await! Opt for personalized Day-to-Multiday private
              custom tours; the longer you stay, the more of Yosemite's wonders
              you'll adore!
            </p>
            <button className="mt-8 w-fit px-18 font-bold py-2 border border-gray-800 rounded-full   transition">
              Read more
            </button>
          </div>

          {/* right side */}
          <div>
            <ImageHandler
              ImageWidth={500}
              ImageHeight={500}
              srcImage={"/pray.png"}
              altImg="Pray icon"
              className="object-cover"
            />
          </div>
        </div>
      </HalfTemplate>
    </FullTemplate>
  );
};

export default YosemiteTour;
