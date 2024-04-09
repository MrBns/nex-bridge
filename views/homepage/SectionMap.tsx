import { IMG_MAP_CONER_BG, IMG_PLAYGON_WORLD_MAP } from "@/assets/img";
import SvgMapHighlight from "@/components/animations/SvgMapHighlight";
import Img from "@/components/helper/Img";

export default function SectionMap() {
  return (
    <section id="" className="py-24 relative pb-20 md:pb-40 isolate">
      <div className="absolute  rotate-180 lg:rotate-0 left-0 lg:left-auto lg:right-0  -top-[7%] lg:-top-[15%] -z-10">
        <Img alt="" src={IMG_MAP_CONER_BG.src} className="" />
      </div>
      <div className="my-container">
        <div data-aos className="my-16">
          <h1 className="text-2xl lg:text-5xl leading-snug text-center">
            NexBridge is registered as a digital asset issuer in the <br />
            <span className="font-monument text-[#1C75BC]">El Salvador</span> National Commission of Digital Assets registry.
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto">
        <div className="my-container">
          <div className="map-img relative w-fit ms-auto">
            <Img src={IMG_PLAYGON_WORLD_MAP.src} className="ms-auto w-full" alt="" />

            <div className="highlights absolute top-[11%]  lg:top-[20%]  -left-[18%] lg:left-[-13%] w-[80%] lg:w-[67%] ">
              <SvgMapHighlight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
