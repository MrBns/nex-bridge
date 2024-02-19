import React from "react";

import {
  BrandLogo1,
  BrandLogo2,
  BrandLogo3,
  BrandLogo4,
  BrandLogo5,
} from "../../assets/img";
import Img from "@/components/helper/Img";

type Props = {};

function BrandSlider({}: Props) {
  return (
    <div className="my-container mx-auto pt-20 lg:pt-40">
      <div className="relative slider-shadow overflow-hidden flex gap-10 md:gap-20 w-full">
        <div className="w-full slider-anim flex items-center justify-between shrink-0 gap-5 md:gap-10">
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="w-full slider-anim flex items-center justify-between shrink-0 gap-5 md:gap-10">
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="w-full slider-anim flex items-center justify-between shrink-0 gap-5 md:gap-10">
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="w-full slider-anim flex items-center justify-between shrink-0 gap-5 md:gap-10">
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="w-full slider-anim flex items-center justify-between shrink-0 gap-5 md:gap-10">
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[20px] md:h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
