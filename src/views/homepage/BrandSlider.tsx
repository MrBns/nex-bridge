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

const LOGO_LIST = [
  IMG_LOGO_SAMSUNG,
  IMG_LOGO_GOOGLE,
  IMG_LOGO_AMAZON,
  IMG_LOGO_WINDOWS,
  IMG_LOGO_SONY,
];

function BrandSlider({}: Props) {
  return (
    <div className="my-container mx-auto pt-40">
      <div className="relative slider-shadow overflow-hidden flex flex-nowrap">
        <div className="slider-anim flex items-center justify-between shrink-0 px-10 lg:px-20 w-full min-w-[1100px]  gap-5">
          {LOGO_LIST.map((img, index) => (
            <Img
              className="h-[30px] lg:h-[42px] shrink-0 "
              key={"index" + index}
              src={img.src}
              alt=""
            />
          ))}
        </div>
        <div className="slider-anim flex items-center justify-between shrink-0 px-10 lg:px-20 w-full min-w-[1100px]  gap-5">
          {LOGO_LIST.map((img, index) => (
            <Img
              className="h-[30px] lg:h-[42px] shrink-0 "
              key={"index" + index}
              src={img.src}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
