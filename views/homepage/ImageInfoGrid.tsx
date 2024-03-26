import React from "react";

const INFO_VID_1 = "/vid/anim-vid-1.mp4";
const INFO_VID_2 = "/vid/anim-vid-2.mp4";
const INFO_VID_3 = "/vid/anim-vid-3.mp4";

type Props = {};

function ImageGrid({}: Props) {
  return (
    <section id="image-grid" className="relative">
      <div className="background-glow absolute w-full h-full z-[2]"></div>
      <div className="my-container pb-20 sm:pb-32 flex flex-col gap-10 sm:gap-20 lg:gap-32 z-[20] relative">
        <div className="w-full grid grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            {/* <Img
              className="absolute object-cover w-full h-full"
              src={GRID_IMAGE_1.src}
              alt="office"
            /> */}
            <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={INFO_VID_1} />
            </video>
            <p className="text-[15px]/[15px] sm:text-[20px]/[20px] md:text-[30px]/[30px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              future is
              <br />
              <span className="font-medium">
                inclusive,
                <br />
                innovative.
              </span>
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[19px]/[28px]">
            With NexBridge,{" "}
            <span className="text-[16px] lg:text-[20px] font-bold">
              the financial future is inclusive, innovative, and filled with limitless possibilities
            </span>{" "}
            for growth and economic prosperity.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            {/* <Img className="absolute object-cover w-full h-full" src={GRID_IMAGE_2.src} alt="innovation" /> */}

            <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={INFO_VID_2} />
            </video>

            <p className="text-[15px]/[15px] sm:text-[20px]/[20px] md:text-[30px]/[30px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              <span className="font-medium">cuting-edge technology and financial innovation</span> comes together.
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[19px]/[28px]">
            Where <span className="text-[16px] lg:text-[20px] font-bold">cuting-edge technology and financial innovation come together</span> to chart
            the path toward a barrier-free economic future.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            {/* <Img className="absolute object-cover w-full h-full" src={GRID_IMAGE_3.src} alt="global" /> */}

            <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={INFO_VID_3} />
            </video>

            <p className="text-[15px]/[15px] sm:text-[20px]/[20px] md:text-[30px]/[30px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              connecting
              <br />
              <span className="font-medium">local dreams with global capital.</span>
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[19px]/[28px]">
            <span className="text-[16px] lg:text-[20px] font-bold">Not just global markets</span> we transform the Salvadoran financial landscape,{" "}
            <span className="text-[16px] lg:text-[20px] font-bold">connecting local dreams with global capital</span> , in a symphony of progress and
            opportunity{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageGrid;
