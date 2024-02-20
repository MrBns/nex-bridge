import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";

export default function Header() {
  return (
    <header
      className="header p-2 min-h-[700px]  lg:min-h-screen relative isolate grid place-items-center overflow-hidden"
      id="homepage-header"
    >
      <div className="absolute h-full w-full -z-[1]  left-0 top-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          controls={false}
          playsInline
          muted
          id="header-animated-video"
        >
          {/* <source src={"/vid/header_animation.mp4"} /> */}
          <source
            src={
              "https://cdn.discordapp.com/attachments/1063452671698272328/1209397330168647690/Comp_1_3.mp4?ex=65e6c609&is=65d45109&hm=89da31e30e3f7133cb48155aad3b849a180fcd7ea4d70b809cd65f19d054474b&"
            }
          />
        </video>
      </div>
      <div className="my-container text-white header-all-element-wrapper out-of-side">
        <div className="">
          <h1 className="leading-none text-4xl md:text-[100px] text-center  font-montserrat uppercase">
            <span className=" font-thin">Gateway to a </span>
            <span className=" blue-gradient-text">New</span>
            <span className=" block blue-gradient-text ">Financial Era</span>
          </h1>
          <div className="text-xl lg:text-[33px] uppercase text-center my-8 flex justify-center ">
            <h5 className="">For &nbsp;</h5>
            <h5 className="italic" id="word-change-and-typing-animation-span">
              <span className="animation-word  blue-gradient-text lg:px-1"></span>
              <span className="cursor">|&nbsp;</span>
            </h5>
          </div>

          <div className="text-center my-16">
            <GradientBorderButton
              variant="glow"
              className="[--border-width:3px] text-white active:!text-blue-400 font-bold px-10 py-5"
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
