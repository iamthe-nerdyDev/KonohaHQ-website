"use client";

import { ArrowRight } from "@/icons";
import { IButton } from "@/interface";

const CustomButton = ({ className, handleClick, text }: IButton) => {
  return (
    <button
      className={`btn d-flex align-items-center ${className}`}
      onClick={handleClick}
    >
      <span>{text}</span>
      <ArrowRight />
    </button>
  );
};

export default CustomButton;
