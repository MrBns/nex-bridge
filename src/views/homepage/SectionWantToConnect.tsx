import { IMG_WANT_TO_CONNECT_WAVE } from "@/assets/img";
import Img from "@/components/helper/Img";
import Script from "next/script";
import React from "react";

type Props = {};

function SectionWantToConnect({}: Props) {
  return (
    <>
      <section id="want-to-connect" className="relative overflow-x-hidden overflow-y-clip lg:overflow-visible">
       <div className="background-glow absolute w-[900px]  lg:w-[1502px] h-[400px] lg:h-[962px] top-[10%] lg:-top-[40%] -left-[50%] lg:-left-[10%] "></div>

        <div className=" absolute top-[18%] w-full">
          <Img
            src={IMG_WANT_TO_CONNECT_WAVE.src}
            className="w-full max-w-[1920px] mx-auto"
            alt=""
          />
        </div>

        <div className="my-container  bg-cover bg-center relative">
          <div className="relative pt-28 py-20 lg:py-32 2xl:pt-40 2xl:pb-52  my-container mx-5 flex flex-col justify-center">
            <div className="text-5xl lg:text-7xl xl:text-[80px] 2xl:text-[100px]/none font-bold">
              <h1 className="">Want to connect?</h1>
              <h1 className="mt-5 lg:mt-0">
                let&apos;s <span className="font-light italic">start now.</span>
              </h1>
            </div>

            <button className="w-max flex items-center gap-3 mt-10 py-3 px-4 lg:py-5 lg:px-10 rounded-[15px] border border-white hover:scale-105 active:scale-100 transition-transform bg-black">
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
      </section>
    </>
  );
}

export default SectionWantToConnect;
