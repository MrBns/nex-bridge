"use client";

import React from "react";
import Img from "./helper/Img";
import {
  BrandLogo1,
  BrandLogo2,
  BrandLogo3,
  BrandLogo4,
  BrandLogo5,
} from "../assets/img";

type Props = {};

function BrandSlider({}: Props) {
  return (
    <div className="my-container mx-auto pt-40">
      <div className="relative slider-shadow overflow-hidden flex flex-nowrap gap-20">
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
        <div className="slider-anim flex items-center justify-between w-full shrink-0">
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
