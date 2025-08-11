import React, { ReactNode } from "react";
interface FullTemplateTypes {
  children: ReactNode;
  color: string;
  shd: string;
}

const FullTemplate = ({
  children,
  color = "bg-white",
  shd = "shadow-none",
}: FullTemplateTypes) => {
  return <div className={`${color} ${shd}`}>{children}</div>;
};

export default FullTemplate;
