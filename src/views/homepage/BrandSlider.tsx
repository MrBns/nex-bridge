import React from "react";

import {
  IMG_LOGO_AMAZON,
  IMG_LOGO_GOOGLE,
  IMG_LOGO_SAMSUNG,
  IMG_LOGO_SONY,
  IMG_LOGO_WINDOWS,
} from "../../assets/img";
import Img from "@/components/helper/Img";

type Props = {};

function BrandSlider({}: Props) {
  return (
    <div className="my-container mx-auto pt-40">
      <div className="relative slider-shadow overflow-hidden flex flex-nowrap gap-20">
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={IMG_LOGO_SAMSUNG.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_GOOGLE.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_AMAZON.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_WINDOWS.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_SONY.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={IMG_LOGO_SAMSUNG.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_GOOGLE.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_AMAZON.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_WINDOWS.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_SONY.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={IMG_LOGO_SAMSUNG.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_GOOGLE.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_AMAZON.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_WINDOWS.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_SONY.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={IMG_LOGO_SAMSUNG.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_GOOGLE.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_AMAZON.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_WINDOWS.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_SONY.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={IMG_LOGO_SAMSUNG.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_GOOGLE.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_AMAZON.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_WINDOWS.src} alt="" />
          <Img className="h-[42px]" src={IMG_LOGO_SONY.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
