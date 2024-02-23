import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";

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
          {/* <source src={"/vid/header_animation.mp4"} /> */}
          <source
            src={
              "https://cdn.discordapp.com/attachments/1063452671698272328/1209043262422126622/bg_video.mp4?ex=65e57c48&is=65d30748&hm=fa5a67dbb213d6ba5903cc8dcb7da32d803c3637c26fc25665da50d670ef7e61&"
            }
          />
        </video>
      </div>
      <div className="my-container text-white header-all-element-wrapper out-of-side">
        <div className="mt-20 lg:mt-0">
          <h1 className="text-center   uppercase">
            <span className=" leading-[1.2] text-4xl lg:text-[37px]">
              Gateway to a{" "}
            </span>
            <span className=" leading-[1.2] blue-gradient-text font-michroma text-4xl md:text-[100px]">
              New
            </span>
            <span className=" leading-[1.2] block blue-gradient-text font-michroma text-4xl md:text-[100px]">
              Financial Era
            </span>
          </h1>
          <div className="text-xl lg:text-[33px] uppercase text-center my-8 flex justify-center ">
            <h5 className="">For &nbsp;</h5>
            <h5 className="italic" id="word-change-and-typing-animation-span">
              <span className="animation-word  blue-gradient-text lg:px-1"></span>
              <span className="cursor">|&nbsp;</span>
            </h5>
          </div>

          <div className="text-center lg:my-16">
            <GradientBorderButton
              variant="glow"
              className="[--border-width:1px] mb-2 lg:me-5 text-white active:!text-blue-400 font-bold px-10 py-3 lg:py-5"
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
              className="[--border-width:1px] text-white active:!text-blue-400 font-bold px-10 py-3 lg:py-5"
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
