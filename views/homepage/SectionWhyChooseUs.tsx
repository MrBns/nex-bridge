"use client";

import {
  IMG_ICON_FINANCIAL,
  IMG_ICON_GLOBAL_PRESENCE,
  IMG_ICON_INDUSTRY_LEADER,
  IMG_ICON_ISSUER,
  IMG_MAP_CONER_BG as IMG_MAP_CORNER_BG,
  IMG_WHY_CHOOSE_US_CARD_WIREFRAME,
  IMG_WHY_CHOOSE_US_WAVE,
} from "@/assets/img";
import Img from "@/components/helper/Img";

const WHY_CHOOSE_US_CARD_DATA = [
  {
    id: "data-1",
    img: IMG_ICON_ISSUER.src,
    title: "Registered Issuer in the El Salvador",
    desc: "National Commission of Digital Assets registry.",
    shortWidth: false,
  },
  {
    id: "data-1",
    img: IMG_ICON_INDUSTRY_LEADER.src,
    title: "Industry Leader",
    desc: "Forefront of digital assets in regulated markets.",
    shortWidth: true,
  },
  {
    id: "data-1",
    img: IMG_ICON_FINANCIAL.src,
    title: "Financial Know-how",
    desc: "Bring extensive experience from traditional finance",
    shortWidth: true,
  },
  {
    id: "data-1",
    img: IMG_ICON_GLOBAL_PRESENCE.src,
    title: "Global presence",
    desc: "Worldwide Network and partnerships with sector leaders.",
    shortWidth: true,
  },
];

export default function SectionWhyChooseUs() {
  return (
    <section id="section-why-choose-us" className="relative">
      <div className="h-[100px] lg:h-[200px] 2xl:h-[250px] relative max-w-[1920px] mx-auto z-10">
        <Img src={IMG_WHY_CHOOSE_US_WAVE.src} alt="nex-bridge-wave" className="absolute top-[0%] lg:-top-[50%] left-0 lg:opacity-30" />
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

        <div className="mx-auto z-20 relative">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 why-choose-us-slider gap-5">
            {WHY_CHOOSE_US_CARD_DATA.map((d, idx) => (
              <div
                key={idx}
                data-aos
                className="group flex lg:flex-col rounded-[16px] p-7 why-choose-us-card-points-gradient border border-[#ffffff20] relative w-full"
              >
                <Img src={IMG_WHY_CHOOSE_US_CARD_WIREFRAME.src} alt={d.title} className="absolute bottom-0 right-0" />
                {/* <Img
                  src={d.img}
                  alt={d.title}
                  className="me-4 lg:mb-8  lg:me-0 w-[70px] h-[80px] flex-shrink-0 object-contain  lg:w-auto lg:h-[100px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[20deg]"
                /> */}
                <div className="">
                  <h1 className={`text-[18px]/[1] lg:text-xl 2xl:text-3xl mb-2 lg:mb-4 font-semibold ${d.shortWidth ? "max-w-[200px]" : ""}`}>
                    {d.title}
                  </h1>
                  <p className="text-[12px] max-w-[170px] lg:max-w-none lg:text-base text-white/60">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
