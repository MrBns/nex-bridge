import {
  IMG_ILLST_INDUSTRY_LEADER,
  IMG_ILLST_REGISTER_ISSUER,
  IMG_ILLUST_GLOBAL_PRESENCE,
  IMG_LILLST_FINANCIAL_KNOW_HOW,
  IMG_WHY_CHOOSE_US_WAVE,
} from "@/assets/img";
import Img from "@/components/helper/Img";

const WHY_CHOOSE_US_CARD_DATA = [
  {
    id: "data-1",
    img: IMG_ILLST_REGISTER_ISSUER.src,
    title: "Registerd Issuer",
    desc: "NexBridge is registered as a digital asset issuer in the El Salvador National Commission of Digital Assets registry, holding the license number EAD-0003",
  },
  {
    id: "data-1",
    img: IMG_ILLST_INDUSTRY_LEADER.src,
    title: "Industry Leader",
    desc: "Created with the aim of being an industry leader in issuing digital assets in regulated markets",
  },
  {
    id: "data-1",
    img: IMG_LILLST_FINANCIAL_KNOW_HOW.src,
    title: "Financial Know-how",
    desc: "Our founding members and stakeholders have longstanding experience in traditional finance and hold licenses across multiple countries",
  },
  {
    id: "data-1",
    img: IMG_ILLUST_GLOBAL_PRESENCE.src,
    title: "Global presence",
    desc: "Group of companies consolidated in jurisdictions globally accepted as financial centers, partnership with industry leader across different sectors",
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
      <div className="my-container lg:px-10">
        <div data-aos className="mb-20">
          <h1 className="text-5xl xl:text-7xl 2xl:text-[100px] leading-tight font-bold">
            Why <br />
            Choose Us ?
          </h1>
        </div>

        <div className="">
          <div className="flex flex-wrap">
            {WHY_CHOOSE_US_CARD_DATA.map((d, idx) => (
              <div
                key={idx + d.id}
                data-aos
                className="w-1/2 lg:w-3/12 group rounded-3xl p-2 lg:p-7 hover:scale-105 transition-all duration-500"
              >
                <Img
                  src={d.img}
                  alt={d.title}
                  className="mb-8 h-[100px] opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[20deg]"
                />
                <div className="">
                  <h1 className="lg:text-3xl mb-4 font-semibold">{d.title}</h1>
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
