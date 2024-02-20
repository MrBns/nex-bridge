import { IMG_POLYGON_WORLD_MAP } from "@/assets/img";
import SvgMapHighlight from "@/components/animations/SvgMapHighlight";
import Img from "@/components/helper/Img";

export default function SectionMap() {
  return (
    <section id="" className="py-24 pb-40">
      <div className="my-container">
        <div data-aos className="my-16">
          <h1 className="text-2xl lg:text-5xl leading-snug text-center">
            NexBridge is registered as a digital asset issuer in the <br />
            <span className="font-monument blue-gradient-text">El Salvador</span> National Commission of Digital Assets registry.
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto">
        <div className="map-img">
          <Img src={IMG_POLYGON_WORLD_MAP.src} className=" ms-auto" alt="" />
        </div>
        <div className="highlights absolute top-[15%] left-[-20%] lg:top-[100px] lg:left-[100px] w-[300px] lg:w-[1341px]">
          <SvgMapHighlight />
        </div>
      </div>
    </section>
  );
}
