import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";
import Link from "next/link";
import { ADMIN_URL } from "@/lib/config/url";
import { IStaticAssetResponse } from "@/lib/types/strapi-api/static-asset-all";

const animate_video = "/vid/header-animation.mp4";

export default async function Header() {
  //Loading Static Assets only header_bg_vid field;
  const header_animate_vid: IStaticAssetResponse<["header_bg_vid"]> = await (
    await fetch(`${ADMIN_URL}/api/static-asset?populate[header_bg_vid][field][0]=url`, { cache: "no-store" })
  ).json();

  return (
    <header className="header p-2 min-h-screen relative isolate grid place-items-center overflow-hidden" id="homepage-header">
      {/* Background Video */}
      <div className="absolute h-full w-full -z-[1]  left-0 top-0">
        <video className="w-full h-full object-cover" autoPlay controls={false} playsInline muted loop id="header-animated-video">
          <source src={ADMIN_URL + header_animate_vid?.data?.attributes?.header_bg_vid?.data?.attributes?.url} />
        </video>
      </div>

      {/* Background video marger  */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0B0C15] to-transparent h-28"></div>

      <div className="my-container text-white header-all-element-wrapper">
        <div className="mt-20 lg:mt-0">
          <h1 className="lg:text-center   uppercase">
            <span className="leading-[1.2] text-[#c2c2c2] text-base block lg:inline lg:text-[37px]">Gateway to a </span>
            <span className=" leading-[1.2]  font-michroma text-5xl md:text-[77px] 2xl:text-[100px]">New</span>
            <span className=" leading-[1.2] block  font-michroma text-5xl md:text-[77px] 2xl:text-[100px]">
              Financial<span>&nbsp;</span> Era
            </span>
          </h1>
          <div className="text-xl lg:text-2xl 2xl:text-[33px] uppercase text-center my-8 flex lg:justify-center ">
            <h5 className="font-extralight text-[#d9d9d9]">FOR &nbsp;</h5>
            <h5 className="italic" id="word-change-and-typing-animation-span">
              <span className="animation-word text-white lg:px-1 font-medium"></span>
              <span className="cursor">|&nbsp;</span>
            </h5>
          </div>

          <div className="text-center lg:my-16 flex flex-col lg:flex-row justify-center max-w-[60%] lg:max-w-none">
            <Link href="#explore">
              <GradientBorderButton
                variant="glow"
                className="[--border-width:1px] mb-2 lg:mb-0  lg:me-5 text-white active:!text-blue-400 font-bold px-7 py-4 2xl:px-10 2xl:py-5"
              >
                Explore
                <Img src={ICON_RIGHT_ARROW.src} alt="" className="inline-block ms-6 " />
              </GradientBorderButton>
            </Link>
            <Link href="/contact">
              <GradientBorderButton
                variant="glow"
                className="[--border-width:1px] text-white active:!text-blue-400 font-bold px-7 py-4 2xl:px-10 2xl:py-5"
              >
                Contact Us
                <Img src={ICON_RIGHT_ARROW.src} alt="" className="inline-block ms-6 " />
              </GradientBorderButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
