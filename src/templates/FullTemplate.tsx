import React, { ReactNode } from "react";
interface FullTemplateTypes {
  children: ReactNode;
  color: string;
}

const FullTemplate = ({ children, color }: FullTemplateTypes) => {
  return (
    <div style={{ background: color }} className={`bg-[${color}]`}>
      {children}
    </div>
  );
};

export default FullTemplate;
