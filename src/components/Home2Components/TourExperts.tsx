import React from "react";
import ExpertOption from "./ExpertOption";

const TourExperts = () => {
  return (
    <div>
      <div className="pt-30">
        <h1 className="text-[#193E1A] text-[50px] font-[700] leading-[55px] text-center">
          Your Premier Yosemite Private Tour Experts
        </h1>
        <p className="text-[36px] font-[500] leading-[55px] text-[#193E1A] text-center ">
          Discover Our 5 Most Exclusive Overnight Escapes
        </p>
      </div>
      <div>
        {[1, 2, 3, 4].map((item, index) => (
          <ExpertOption item={item} key={index} />
        ))}
      </div>
    </div>
  );
  {
    /* other section here */
  }
};

export default TourExperts;
