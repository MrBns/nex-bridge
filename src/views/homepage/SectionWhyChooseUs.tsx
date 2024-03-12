"use client";

import {
  IMG_ICON_FINANCIAL,
  IMG_ICON_GLOBAL_PRESENCE,
  IMG_ICON_INDUSTRY_LEADER,
  IMG_ICON_ISSUER,
  IMG_ILLST_INDUSTRY_LEADER,
  IMG_ILLST_REGISTER_ISSUER,
  IMG_ILLUST_GLOBAL_PRESENCE,
  IMG_LILLST_FINANCIAL_KNOW_HOW,
  IMG_MAP_CONER_BG as IMG_MAP_CORNER_BG,
  IMG_WHY_CHOOSE_US_WAVE,
} from "@/assets/img";
import Img from "@/components/helper/Img";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const WHY_CHOOSE_US_CARD_DATA = [
  {
    id: "data-1",
    img: IMG_ICON_ISSUER.src,
    title: "Registered Issuer in the El Salvador",
    desc: "National Commission of Digital Assets registry.",
  },
  {
    id: "data-1",
    img: IMG_ICON_FINANCIAL.src,
    title: "Industry Leader",
    desc: "Forefront of digital assets in regulated markets.",
  },
  {
    id: "data-1",
    img: IMG_ICON_GLOBAL_PRESENCE.src,
    title: "Financial Know-how",
    desc: "Bring extensive experience from traditional finance",
  },
  {
    id: "data-1",
    img: IMG_ICON_INDUSTRY_LEADER.src,
    title: "Global presence",
    desc: "Worldwide Network and partnerships with sector leaders.",
  },
];

export default function SectionWhyChooseUs() {
  return (
    <section id="section-why-choose-us" className="relative">
      <div className="h-[100px] lg:h-[200px] 2xl:h-[250px] relative max-w-[1920px] mx-auto z-10">
        <Img
          src={IMG_WHY_CHOOSE_US_WAVE.src}
          alt="nex-bridge-wave"
          className="absolute top-[0%] lg:-top-[50%] left-0 lg:opacity-30"
        />
      </div>


      <div className="absolute lg:hidden right-0 top-[40%] -z-10">
        <Img alt="" src={IMG_MAP_CORNER_BG.src} className="w-[250px]" />
      </div>

      <div className="my-container">
        <div data-aos className=" mb-12 lg:mb-20">
          <h1 className="text-[40px] xl:text-7xl 2xl:text-[100px] text-center lg:text-left leading-tight font-bold">
            Why <br />
            Choose Us ?
          </h1>
        </div>

        <div className=" mx-auto max-w-[275px] lg:max-w-none">
          <div className="relative flex flex-col  lg:flex-row flex-wrap why-choose-us-slider gap-y-6 lg:gap-y-0  ">
            {WHY_CHOOSE_US_CARD_DATA.map((d, idx) => (
              <div
                key={idx}
                data-aos
                className="group flex lg:flex-col items-center lg:items-start lg:w-1/4 rounded-3xl md:p-2 lg:p-7 hover:scale-105 transition-all duration-500"
              >
                <Img
                  src={d.img}
                  alt={d.title}
                className="me-4 lg:mb-8  lg:me-0 w-[70px] h-[80px] flex-shrink-0 object-contain  lg:w-auto lg:h-[100px] lg:opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[20deg]"
                />
                <div className="">
                  <h1 className="text-[18px]/[1] lg:text-xl 2xl:text-3xl mb-2 lg:mb-4 font-semibold">
                    {d.title}
                  </h1>
                  <p className="text-[10px] max-w-[170px] lg:max-w-none lg:text-sm">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
