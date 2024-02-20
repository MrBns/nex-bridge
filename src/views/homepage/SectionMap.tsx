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
            <span className="font-monument blue-gradient-text">
              El Salvador
            </span>{" "}
            National Commission of Digital Assets registry.
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto">
        <div className="map-img relative w-fit ms-auto">
          <Img src={IMG_POLYGON_WORLD_MAP.src} className=" ms-auto" alt="" />

          <div className="highlights absolute top-[20%]  left-[-13%] w-[67%] ">
            <SvgMapHighlight />
          </div>
        </div>
      </div>
    </section>
  );
}
