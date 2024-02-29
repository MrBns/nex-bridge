import React from "react";

import {
  IMG_LOGO_AMAZON,
  IMG_LOGO_BITFINEX,
  IMG_LOGO_BLOCKSTREAM,
  IMG_LOGO_BLOCKSTREAM_AMP,
  IMG_LOGO_BLOCKSTREAM_GREEN,
  IMG_LOGO_GOOGLE,
  IMG_LOGO_LIQUID_NETWORK,
  IMG_LOGO_MERJ,
  IMG_LOGO_SAMSUNG,
  IMG_LOGO_SIDESWAP,
  IMG_LOGO_SONY,
  IMG_LOGO_WINDOWS,
} from "../../assets/img";
import Img from "@/components/helper/Img";

type Props = {};

const LOGO_LIST = [
  IMG_LOGO_BITFINEX,
  IMG_LOGO_BLOCKSTREAM,
  IMG_LOGO_LIQUID_NETWORK,
  IMG_LOGO_BLOCKSTREAM_AMP,
  IMG_LOGO_MERJ,
  IMG_LOGO_BLOCKSTREAM_GREEN,
  IMG_LOGO_SIDESWAP,
];

function LogoList() {
  return (
    <>
      <div className="slider-anim min-w-[600px]  flex items-center justify-between shrink-0 px-0 lg:px-4 xl:px-8 w-full ">
        {LOGO_LIST.map((img, index) => (
          <Img
            className="h-[30px] lg:h-[42px] w-[13%] object-contain lg:shrink-0 px-2"
            key={"index" + index}
            src={img.src}
            alt=""
          />
        ))}
      </div>
    </>
  );
}

function BrandSlider({}: Props) {
  return (
    <div className="my-container mx-auto pt-20">
      <div className="relative slider-shadow overflow-hidden flex flex-nowrap">
        <LogoList />
        <LogoList />
      </div>
    </div>
  );
}

export default BrandSlider;
