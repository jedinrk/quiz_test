import React from "react";

import Image from "next/image";
import homeSvg from "../../../public/homeSmall.svg";
import fwdArrow from "../../../public/forwardArrow.svg";

const HomeIcon = () => <Image src={homeSvg} alt="Home Icon" />;
const ArrowIcon = () => <Image src={fwdArrow} alt="Arrow Icon" />;

export default function Breadcrumb() {
  return (
    <div className="flex px-[64px] py-[32px] items-center">
      <span>
        <HomeIcon />
      </span>
      <span className="mx-[8px]">
        <ArrowIcon />
      </span>
      <span className="text-gray-300 text-base font-normal">Thank you</span>
    </div>
  );
}
