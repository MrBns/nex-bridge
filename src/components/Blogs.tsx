import React from "react";
import { Space_Grotesk } from "next/font/google";

type Props = {};

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function BlogItem({
  category,
  title,
  time,
}: {
  category: string;
  title: string;
  time: string;
}) {
  return (
    <div className="h-[439px] border-y border-[#C4C4C4] pt-10 pb-20">
      <p className="uppercase tracking-[5px] text-[20px]">{category}</p>
      <p className="font-semibold text-[32px] leading-[40px] mt-10">{title}</p>
      <p className={`${font.className} mt-16 text-end heading-5 font-bold`}>
        {time}
      </p>
    </div>
  );
}

function Blogs({}: Props) {
  return (
    <div className="w-full pt-20 pb-64">
      <div className="bg-blog-gradient bg-top h-[100px]"></div>
      <div className="my-container mx-auto mt-5">
        <h1 className="text-center heading-3 font-bold">Blogs</h1>
        <p className="text-center mt-16 max-w-[896px] mx-auto text-[20px] leading-[30px]">
          Stay up to date with the latest trends and insights in technology with
          our informative blog. From industry news to expert tips, we&apos;ve got you
          covered.
        </p>
      </div>

      <div className="my-container mx-auto grid grid-cols-3 place-items-center gap-10 mt-24">
        <BlogItem
          category="TECH"
          title="Why Cloud Computing is Essential for Your Business in Year 2023"
          time="01.03"
        />
        <div className="h-[520px] bg-gradient-to-b from-[#1C75BC66] to-transparent w-full rounded-[25px] flex flex-col items-center pt-28 px-10">
          <p className="tracking-wide uppercase text-[20px] leading-[30px] text-[#C4C4C4]">
            TIPS
          </p>
          <p className="heading-6 font-semibold text-center mt-5">
            How to Protect Business from Cybersecurity Threats
          </p>
          <p className="mt-5 heading-8 text-center text-[#C4C4C4]">
            12 April 2023 | TeamWaveNet
          </p>

          <button className="blog-read-more-btn text-[#1C75BC] font-medium bg-black rounded-[10px] px-14 py-3 mt-8">
            READ MORE
          </button>
        </div>
        <BlogItem
          category="REVIEW"
          title="5 Ways Software Developer
          Can Boost Your Business
          Quicker Than Ever"
          time="20.05"
        />
      </div>

      <button className="mt-20 mx-auto w-max flex items-center gap-3 py-5 px-10 rounded-[15px] border border-white">
        <p className="uppercase font-semibold">Read more articles</p>
        <svg
          width="101"
          height="16"
          viewBox="0 0 101 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default Blogs;
