import React from "react";
import Img from "../../components/helper/Img";
import { IMG_MOBILE_TRADITIONAL_FINANCE } from "@/assets/img";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";

type Props = {};

function SectionTraditionalFinance({}: Props) {
  return (
    <div className="my-container lg:mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-10 lg:mt-20 text-white relative">
      <div
        className="w-full pt-36 sm:pt-40 xl:w-[75%] p-10 rounded-[25px] lg:rounded-[50px] flex flex-col lg:pt-10 lg:pb-16 lg:pl-24 lg:pr-28 bg-[url('/ready-to-take-bg.svg')] bg-cover bg-no-repeat bg-bottom text-center lg:text-left"
      >
        <p data-aos className="lg:text-[54px] lg:leading-[58px] xl:text-[83.63px] xl:leading-[86px] font-medium">
          <span className="lg:text-[32px] lg:leading-[36px] xl:text-[48px] font-extralight">
            We envision a future where
          </span>
          <br />
          traditional finance integrates seamlessly with blockchain
        </p>
        <GradientBorderButton
          variant="minimal"
          
          className="mt-5 lg:mt-20 [--border-width:2px] font-medium px-5 py-4 lg:px-8 lg:py-6 rounded-[15px] inline-flex justify-center items-center gap-3 w-fit"
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
      <Img
        aos
        className="absolute w-2/3 max-w-[250px] lg:max-w-none md:w-1/6 -top-[50%]  left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:-top-0 lg:right-0 lg:bottom-0 xl:bottom-auto lg:w-1/3 xl:w-auto"
        src={IMG_MOBILE_TRADITIONAL_FINANCE.src}
        alt=""
      />
    </div>
  );
}

export default SectionTraditionalFinance;
