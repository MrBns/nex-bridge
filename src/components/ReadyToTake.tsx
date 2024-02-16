import React from "react";
import ArrowIcon from "../assets/ArrowIcon";

type Props = {};

function ReadyToTake({}: Props) {
  return (
    <div className="my-container mx-auto flex justify-between gap-10 mt-10 text-white">
      <div className="w-[75%] rounded-[50px] flex items-end justify-between pt-20 pb-10 pl-16 pr-28 bg-[url('/ready-to-take-bg.svg')] bg-cover bg-no-repeat bg-bottom">
        <p className="text-[70.37px] leading-[75.7px] font-medium">
          We envision a future
          <br />
          where
          <br />
          traditional finance
          <br />
          integrates
          <br />
          seamlessly with
          <br />
          blockchain
        </p>
        <button className="bg-white text-[#1C75BC] px-8 py-6 rounded-[15px] mb-10 flex items-center gap-3">
          Contact
          <ArrowIcon />
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-start gap-1">
          <p className="heading-3 font-medium">500+</p>
          <span className="text-[32px] leading-[40px]">
            Successful Projects
          </span>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <p className="heading-3 font-medium">98%</p>
          <span className="text-[32px] leading-[40px]">Satisfied Clients</span>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <p className="heading-3 font-medium">500+</p>
          <span className="text-[32px] leading-[40px]">Handled Countries</span>
        </div>
      </div>
    </div>
  );
}

export default ReadyToTake;
