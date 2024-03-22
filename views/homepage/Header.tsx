import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";
import Link from "next/link";

const animate_video =
  "https://cdn.discordapp.com/attachments/1063452671698272328/1215329940816531516/Comp_1_1.mp4?ex=65fc5b35&is=65e9e635&hm=64808184c1de1701ce4d5a8a4f4ee93fad6aa300b69bef435bcb29cc8d52b9e4&";

export default function Header() {
  return (
    <header className="header p-2 min-h-screen relative isolate grid place-items-center overflow-hidden" id="homepage-header">
      {/* Background Video */}
      <div className="absolute h-full w-full -z-[1]  left-0 top-0">
        <video className="w-full h-full object-cover" autoPlay controls={false} playsInline muted loop id="header-animated-video">
          <source src={animate_video} />
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
