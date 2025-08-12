import Image from "next/image";
import React from "react";

const Freecancelation = () => {
  return (
    <div className="flex items-center bg-green-100/50 rounded-3xl justify-between md:px-14">
      {/* left side */}
      <div className="flex flex-col gap-4 text-green-950">
        <h1 className="font-bold text-3xl">Free Cancelation</h1>
        <p className="text-[17px] font-[500] w-96">
          You'll receive a full refund if you cancel at least 25 house in
          advance of most experiance{" "}
        </p>
      </div>
      {/* right side */}
      <div>
        <Image
          src={"/health.png"}
          width={500}
          height={500}
          className="w-48 h-48"
          alt="Image-width"
        />
      </div>
    </div>
  );
};

export default Freecancelation;
