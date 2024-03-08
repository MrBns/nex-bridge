import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import "./header.effect";

const animate_video =
  "https://cdn.discordapp.com/attachments/1063452671698272328/1215329940816531516/Comp_1_1.mp4?ex=65fc5b35&is=65e9e635&hm=64808184c1de1701ce4d5a8a4f4ee93fad6aa300b69bef435bcb29cc8d52b9e4&";

export default function Header() {
  return (
    <header
    
      className="header p-2 min-h-[600px] md:min-h-[700px]  lg:min-h-screen relative isolate grid place-items-center overflow-hidden"
      id="homepage-header"
    >
      {/* Background Video */}
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

    {/* Background video marger  */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-20"></div>

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
