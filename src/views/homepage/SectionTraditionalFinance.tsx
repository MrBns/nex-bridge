import React from "react";
import Img from "../../components/helper/Img";
import { IMG_MOBILE_TRADITIONAL_FINANCE } from "@/assets/img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";

type Props = {};

function SectionTraditionalFinance({}: Props) {
  return (
    <section id="">
      <div className="my-container  lg:mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-10 text-white">
        <div className="w-full pt-36 sm:pt-40 lg:pt-14 lg:pb-16 lg:px-24   rounded-3xl lg:rounded-[50px] flex flex-col  bg-[url('/ready-to-take-bg.svg')] bg-cover bg-no-repeat bg-bottom">
          <div className="">
            <h2 className="lg:text-[32px] xl:text-[48px] font-extralight">
              We envision a future where
            </h2>
            <h1 className="lg:text-[54px] xl:text-[64px] leading-none 2xl:text-[82px] font-medium">
              traditional finance integrates seamlessly with blockchain
            </h1>
          </div>

          <GradientBorderButton
            variant="minimal"
            className="mt-5 lg:mt-40 [--border-width:2px] w-max bg-black text-white font-medium px-5 py-4 lg:px-8 lg:py-6 rounded-[15px] flex items-center gap-3 lg:gap-14"
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
