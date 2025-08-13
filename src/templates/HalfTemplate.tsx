import React, { ReactNode } from "react";

interface HalfTemplateTypes {
  children: ReactNode;
}

const HalfTemplate = ({ children }: HalfTemplateTypes) => {
  return <div className="2xl:w-[1480px] mx-auto">{children}</div>;
};

export default HalfTemplate;
