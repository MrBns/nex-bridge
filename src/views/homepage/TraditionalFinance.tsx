import React from "react";
import Img from "../../components/helper/Img";
import { IMG_MOBILE_TRADITIONAL_FINANCE } from "@/assets/img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";

type Props = {};

function TraditionalFinance({}: Props) {
  return (
    <div className="my-container mx-auto flex justify-between gap-10 mt-20 text-white relative">
      <div className="w-[75%] rounded-[50px] flex flex-col pt-10 pb-16 pl-24 pr-28 bg-[url('/ready-to-take-bg.svg')] bg-cover bg-no-repeat bg-bottom">
        <p className="text-[83.63px] leading-[86px] font-medium">
          <span className="text-[48px] font-extralight">
            We envision a future where
          </span>
          <br />
          traditional finance integrates seamlessly with blockchain
        </p>
        <GradientBorderButton variant="minimal"  className="mt-20 [--border-width:2px] w-max bg-black text-white font-medium px-8 py-6 rounded-[15px] flex items-center gap-3">
          Contact us
          <svg
            width="58"
            height="16"
            viewBox="0 0 58 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z"
              fill="white"
            />
          </svg>
        </GradientBorderButton>
      </div>
      <Img
        className="absolute right-0"
        src={IMG_MOBILE_TRADITIONAL_FINANCE.src}
        alt=""
      />
    </div>
  );
}

export default TraditionalFinance;
