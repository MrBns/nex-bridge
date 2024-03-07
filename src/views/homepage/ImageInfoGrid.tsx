import React from "react";
import Img from "../../components/helper/Img";
import { GRID_IMAGE_1, GRID_IMAGE_2, GRID_IMAGE_3 } from "../../assets/img";

type Props = {};

function ImageGrid({}: Props) {
  return (
    <section className="my-container pb-32 flex flex-col gap-20 lg:gap-32">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-5 sm:gap-10 lg:gap-20">
        <Img src={GRID_IMAGE_1.src} alt="office" />
        <p className="text-[14px]/[16px] sm:text-[15px]/[24px] lg:text-[19px]/[28px]">
          With NexBridge,{" "}
          <span className="text-[15px] sm:text-[16px] lg:text-[20px] font-bold">
            the financial future is inclusive, innovative, and filled with
            limitless possibilities
          </span>{" "}
          for growth and economic prosperity.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-5 sm:gap-10 lg:gap-20">
        <p className="order-2 sm:order-1 text-[14px]/[16px] sm:text-[15px]/[24px] lg:text-[19px]/[28px]">
          Where{" "}
          <span className="text-[15px] sm:text-[16px] lg:text-[20px] font-bold">
            cuting-edge technology and financial innovation come together
          </span>{" "}
          to chart the path toward a barrier-free economic future.
        </p>
        <Img className="sm:order-2" src={GRID_IMAGE_2.src} alt="innovation" />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-5 sm:gap-10 lg:gap-20">
        <Img src={GRID_IMAGE_3.src} alt="global" />
        <p className="text-[14px]/[16px] sm:text-[15px]/[24px] lg:text-[19px]/[28px]">
          <span className="text-[15px] sm:text-[16px] lg:text-[20px] font-bold">
            Not just global markets
          </span>{" "}
          we transform the Salvadoran financial landscape,{" "}
          <span className="text-[15px] sm:text-[16px] lg:text-[20px] font-bold">
            connecting local dreams with global capital
          </span>{" "}
          , in a symphony of progress and opportunity{" "}
        </p>
      </div>
    </section>
  );
}

export default ImageGrid;
