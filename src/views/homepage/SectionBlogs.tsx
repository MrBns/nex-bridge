import React from "react";
import SectionBlogsSlider from "./SectionBlogsSlider";

type Props = {};

const BLOGS_DATA = [
  {
    id: "blog-1",
    category: "TECH",
    title: "Why Cloud Computing is Essential for Your Business in Year 2023",
    time: "01.03",
  },
  {
    id: "blog-2",
    category: "TIPS",
    title: "How to Protect Business from Cybersecurity Threats",
    time: "12 April 2023 | TeamWaveNet",
  },
  {
    id: "blog-3",
    category: "REVIEW",
    title:
      "5 Ways Software Developer Can Boost Your Business Quicker Than Ever",
    time: "20.05",
  },
  {
    id: "blog-4",
    category: "TECH",
    title: "Why Cloud Computing is Essential for Your Business in Year 2023",
    time: "01.03",
  },
  {
    id: "blog-5",
    category: "REVIEW",
    title:
      "5 Ways Software Developer Can Boost Your Business Quicker Than Ever",
    time: "20.05",
  },
];

export type BlogType = (typeof BLOGS_DATA)[number];

function SectionBlogs({}: Props) {
  return (
    <div className="w-full pt-20 pb-40">
      <div className="bg-blog-gradient bg-top h-[70px] md:h-[100px]"></div>
      <div data-aos className="my-container mx-5 lg:mx-auto mt-5">
        <h1 className="text-center heading-5 lg:heading-3 font-bold">Blogs</h1>
        <p className="text-center mt-5 lg:mt-16 max-w-[896px] mx-auto text-[12px] leading-[15px] md:text-[16px] md:leading-[19px] lg:text-[20px] lg:leading-[30px]">
          Stay up to date with the latest trends and insights in technology with
          our informative blog. From industry news to expert tips, we&apos;ve
          got you covered.
        </p>
      </div>

      <div className="my-container mx-5 lg:mx-auto mt-10 lg:mt-24">
        <SectionBlogsSlider data={BLOGS_DATA} />
      </div>

      <button className="mt-20 mx-auto w-max flex items-center gap-3 py-3 px-3 lg:py-5 lg:px-10 rounded-[15px] border border-white hover:scale-105 active:scale-100 transition-transform">
        <p className="uppercase font-semibold">Read more articles</p>
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
  );
}

export default SectionBlogs;
