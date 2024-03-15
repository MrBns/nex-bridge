import React from "react";
import Img from "../../components/helper/Img";
import { IMG_MOBILE_TRADITIONAL_FINANCE } from "@/assets/img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";

type Props = {};

function SectionTraditionalFinance({}: Props) {
  return (
    <section id="finance">
      <div className="my-container mt-10 xl:mb-20 2xl:mb-40 text-white">
        <div
          className="w-full py-20 px-5 lg:pt-14 2xl:pt-20 lg:pb-16 lg:px-24 rounded-3xl lg:rounded-[50px] 
        bg-[url('/ready-to-take-bg.png')] bg-cover bg-no-repeat bg-bottom relative overflow-hidden"
        >
          <div className="w-full h-full absolute inset-0 background-glow-top z-[1]"></div>
          <div className="w-full h-full absolute inset-0 background-glow-bottom z-[1]"></div>

          <div>
            <h2 className="relative text-xl lg:text-[32px] xl:text-[48px] font-extralight z-[10]">
              We envision a future where
            </h2>
            <h1 className="relative mt-3 lg:mt-5 text-3xl lg:text-[54px] xl:text-[64px] leading-none 2xl:text-[82px] font-medium z-[10]">
              traditional finance integrates seamlessly with blockchain
            </h1>
          </div>

          <GradientBorderButton
            variant="minimal"
            className="z-[5] no-animation mt-10 lg:mt-36 lg:mx-0 [--border-width:1px] w-max !bg-black text-white 
            font-medium px-5 py-4 lg:px-8 lg:py-6 rounded-[15px] flex items-center gap-3 lg:gap-14"
          >
            Contact us
            <svg
              width="58"
              height="16"
              viewBox="0 0 58 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] lg:w-auto"
            >
              <path
                d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z"
                fill="white"
              />
            </svg>
          </GradientBorderButton>
        </div>
      </div>
    </section>
  );
}

export default SectionTraditionalFinance;
