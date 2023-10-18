import { IIcon } from "@/interface";

const CaretUp = ({ className, width, height, color, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "currentColor"}
      className={className}
      width={width || 25}
      height={height || 25}
      viewBox="0 0 320 512"
      {...props}
    >
      <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 320.1 32 320.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
    </svg>
  );
};

export default CaretUp;
