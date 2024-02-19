import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";

export default function Header() {
  return (
    <header
      className="header p-2 min-h-screen relative isolate"
      id="homepage-header"
    >
      <div className="absolute object-cover h-full -z-[1]">
        <video autoPlay controls={false} playsInline muted>
          <source src={"/vid/header_animation.mp4"} />
        </video>
      </div>
      <div className="my-container text-white">
        <div className="mt-[300px]">
          <h1 className="leading-tight text-center font-montserrat uppercase">
            <span className="text-[102px] font-thin">Gateway to a &nbsp;</span>
            <span className="text-[102px] blue-gradient-text">New</span>
            <span className="text-[102px] block blue-gradient-text ">
              Financial Era
            </span>
          </h1>
          <h5 className="text-[33px] uppercase text-center">
            <span className="">For</span>{" "}
            <span className="italic blue-gradient-text"></span>{" "}
          </h5>

          <div className="text-center mt-8">
            <GradientBorderButton
              variant="glow"
              className="[--border-width:3px] text-white active:!text-blue-400 px-10 py-5 uppercase"
            >
              Explore Now{" "}
              <Img
                src={ICON_RIGHT_ARROW.src}
                alt=""
                className="inline-block ms-2 "
              />
            </GradientBorderButton>
          </div>
        </div>
      </div>
    </header>
  );
}
