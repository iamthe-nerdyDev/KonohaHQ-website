import { IIcon } from "@/interface";

const Handshake = ({ className, width, height, color, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "currentColor"}
      className={className}
      width={width || 25}
      height={height || 25}
      viewBox="0 0 640 512"
      {...props}
    >
      <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9c-10.2 9.1-23.5 14.1-37.2 14.1H96v128c20.4.6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 27 27c6.2 6.2 16.4 6.2 22.6 0 1.7-1.7 3-3.7 3.7-5.8 2.8-7.7 9.3-13.5 17.3-15.3s16.4.6 22.2 6.5l10.8 10.6c11.6 11.6 30.4 11.6 41.9 0 5.4-5.4 8.3-12.3 8.6-19.4.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6 9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2l30.1 26.8H624c8.8 0 16 7.2 16 16v208c0 17.7-14.3 32-32 32h-32c-11.8 0-22.2-6.4-27.7-16h-84.9c-3.4 6.7-7.9 13.1-13.5 18.7-17.1 17.1-40.8 23.8-63 20.1-3.6 7.3-8.5 14.1-14.6 20.2-27.3 27.3-70 30-100.4 8.1-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3 0 17.6-14.4 31.9-32 31.9H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16h99.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9.2 13.2.6zM544 320V176h-48c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8C425 120.9 401.5 112 377.1 112c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3.5 35.7 9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8.8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 10-32 0 16 16 0 1032 0zm528 16a16 16 0 100-32 16 16 0 100 32z"></path>
    </svg>
  );
};

export default Handshake;
