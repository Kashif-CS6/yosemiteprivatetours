import React, { ReactNode } from "react";

interface HalfTemplateTypes {
  children: ReactNode;
}

const HalfTemplate = ({ children }: HalfTemplateTypes) => {
  return <div className="w-[1480px] mx-auto">{children}</div>;
};

export default HalfTemplate;
