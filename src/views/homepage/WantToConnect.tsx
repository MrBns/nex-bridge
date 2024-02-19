import React from "react";

type Props = {};

function WantToConnect({}: Props) {
  return (
    <div className="flex flex-col w-full">
      <div
        id="want-to-connect"
        // bg-[url('/footer-wireframe.svg')]
        className="w-full  bg-cover bg-center"
      >
        <div className="relative pt-10 pb-52 lg:pt-32 lg:pb-64 my-container mx-5 lg:mx-auto flex flex-col justify-center">
          <div className="absolute w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] bg-[#19476C] top-0 right-1/4"></div>
          <div className="absolute w-[50px] h-[50px] lg:w-[77px] lg:h-[77px] bg-[#19476C] bottom-20 left-[15%]"></div>
          <div className="absolute w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] bg-[#D9D9D9] bottom-0 right-0"></div>

          <span className="text-start heading-5 leading-[58px] lg:heading-3 font-medium">
            <p>Want to connect?</p>
            <p>
              let&apos;s{" "}
              <span className="heading-6 lg:heading-4 font-light italic">
                start now.
              </span>
            </p>
          </span>
          <button className="w-max flex items-center gap-3 mt-10 py-3 px-4 lg:py-5 lg:px-10 rounded-[15px] border border-white">
            <p className="font-semibold">Contact us</p>
            <svg
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[50px] lg:w-auto"
            >
              <path
                d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WantToConnect;
