import { FC } from "react";
import { CardProps } from "./CardProps.types";

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-slate-800 p-8 rounded-md border border-gray-200/50`}
    >
      {children}
    </div>
  );
};

export default Card;
