import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface IIcon {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export interface IButton {
  text: string;
  handleClick?: () => void;
  className?: string;
}

export interface IClanData {
  name: string;
  description: string;
  image: StaticImageData;
  alt?: string;
}

export interface IFAQs {
  question: string;
  answer: string;
}

export interface ITestimony {
  testimony: string;
  role: string;
  name: string;
  image: StaticImageData | string;
  width?: number;
  height?: number;
}

export interface ITutor {
  name: string;
  pfp: StaticImageData | string;
  skills: Array<string>;
  x?: string;
  telegram?: string;
  width?: number;
  height?: number;
}
