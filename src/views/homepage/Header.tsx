import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";

const animate_video =
  "https://cdn.discordapp.com/attachments/1063452671698272328/1212763102454485073/Comp_1_2.mp4?ex=65f304a7&is=65e08fa7&hm=fb8a2458118a1ca8e10ebdcbab13ae938e775fcf31596afc9d079e93b69aa094&";

export default function Header() {
  return (
    <header
      className="header p-2 min-h-[600px] md:min-h-[700px]  lg:min-h-screen relative isolate grid place-items-center overflow-hidden"
      id="homepage-header"
    >
      <div className="absolute h-full w-full -z-[1]  left-0 top-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          controls={false}
          playsInline
          muted
          loop
          id="header-animated-video"
        >
          <source src={animate_video} />
        </video>
      </div>
      <div className="my-container text-white header-all-element-wrapper">
        <div className="mt-20 lg:mt-0">
          <h1 className="text-center   uppercase">
            <span className=" leading-[1.2] text-[#c2c2c2] text-4xl lg:text-[37px]">
              Gateway to a{" "}
            </span>
            <span className=" leading-[1.2]  font-michroma text-4xl md:text-[77px] 2xl:text-[100px]">
              New
            </span>
            <span className=" leading-[1.2] block  font-michroma text-4xl md:text-[77px] 2xl:text-[100px]">
              Financial &nbsp;Era
            </span>
          </h1>
          <div className="text-xl lg:text-2xl 2xl:text-[33px] uppercase text-center my-8 flex justify-center ">
            <h5 className="font-extralight text-[#d9d9d9]">FOR &nbsp;</h5>
            <h5 className="italic" id="word-change-and-typing-animation-span">
              <span className="animation-word text-white lg:px-1 font-medium"></span>
              <span className="cursor">|&nbsp;</span>
            </h5>
          </div>

          <div className="text-center lg:my-16">
            <GradientBorderButton
              variant="glow"
              className="[--border-width:1px] mb-2  me-2 lg:me-5 text-white active:!text-blue-400 font-bold px-7 py-4 2xl:px-10 2xl:py-5"
            >
              Explore
              <Img
                src={ICON_RIGHT_ARROW.src}
                alt=""
                className="inline-block ms-6 "
              />
            </GradientBorderButton>
            <GradientBorderButton
              variant="glow"
              className="[--border-width:1px] text-white active:!text-blue-400 font-bold px-7 py-4 2xl:px-10 2xl:py-5"
            >
              Contact Us
              <Img
                src={ICON_RIGHT_ARROW.src}
                alt=""
                className="inline-block ms-6 "
              />
            </GradientBorderButton>
          </div>
        </div>
      </div>
    </header>
  );
}
