import { IMG_ILLST_INDUSTRY_LEADER, IMG_ILLST_REGISTER_ISSUER, IMG_ILLUST_GLOBAL_PRESENCE, IMG_LILLST_FINANCIAL_KNOW_HOW } from "@/assets/img";
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
    <section id="section-why-choose-us">
      <div className="my-container px-10">
        <div className="mb-20">
          <h1 className="text-[100px] leading-tight font-bold">
            Why <br />
            Choose Us ?
          </h1>
        </div>

        <div className="">
          <div className="flex gap-5">
            {WHY_CHOOSE_US_CARD_DATA.map((d, idx) => (
              <div key={idx + d.id} className="w-3/12 group rounded-3xl p-7 hover:scale-105 transition-all duration-500">
                <Img src={d.img} alt={d.title} className="mb-8 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[20deg]" />
                <div className="">
                  <h1 className="text-3xl mb-4 font-semibold">{d.title}</h1>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
