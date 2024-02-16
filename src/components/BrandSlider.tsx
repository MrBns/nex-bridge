"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
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
    <div className="my-container mx-auto pt-60">
      <Swiper
        className="w-full"
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        freeMode={true}
        centeredSlides={true}
        speed={5000}
        allowTouchMove={true}
        loopAddBlankSlides={true}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <Img className="h-[42px]" src={BrandLogo1.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className="h-[42px]" src={BrandLogo2.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className="h-[42px]" src={BrandLogo3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className="h-[42px]" src={BrandLogo4.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className="h-[42px]" src={BrandLogo5.src} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BrandSlider;
