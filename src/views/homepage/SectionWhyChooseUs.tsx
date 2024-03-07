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
      <div className="my-container">
        <div data-aos className="mb-20">
          <h1 className="text-5xl xl:text-7xl 2xl:text-[100px] leading-tight font-bold">
            Why <br />
            Choose Us ?
          </h1>
        </div>

        <div className="">
          <div className="relative flex flex-wrap why-choose-us-slider slider-shadow">
            {WHY_CHOOSE_US_CARD_DATA.map((d, idx) => (
              <div
                key={idx}
                data-aos
                className="group w-1/4 rounded-3xl p-2 lg:p-7 hover:scale-105 transition-all duration-500"
              >
                <Img
                  src={d.img}
                  alt={d.title}
                  className="mb-8 h-[100px] opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[20deg]"
                />
                <div className="">
                  <h1 className="lg:text-xl 2xl:text-3xl mb-4 font-semibold">
                    {d.title}
                  </h1>
                  <p className="text-xs">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
