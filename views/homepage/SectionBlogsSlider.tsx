"use client";

import React, { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { BlogType } from "./SectionBlogs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWindowWidth } from "../../lib/hooks/useWindowWidth";

type Props = {
  data: BlogType[];
};

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function BlogItem({
  id,
  category,
  title,
  time,
  centerId,
}: {
  id: string;
  category: string;
  title: string;
  time: string;
  centerId?: string;
}) {
  return centerId === id ? (
    <div className="lg:h-[450px] 2xl:h-[520px] bg-gradient-to-b from-[#1C75BC66] to-transparent w-full rounded-[25px] flex flex-col items-center pt-16 lg:pt-28 px-10">
      <p className="tracking-wide uppercase text-[15px] leading-[18px] lg:text-[20px] lg:leading-[30px] text-[#C4C4C4]">
        {category}
      </p>
      <h1 className="text-[22px] lg:text-[26px]/[1.2] 2xl:text-[32px]/[1.2] font-semibold text-center mt-5">
        {title}
      </h1>
      <p className="mt-5 text-[12px] lg:text-[15px]/[1.1] 2xl:text-[16px]/[26px] text-center text-[#C4C4C4]">
        {time}
      </p>
      <button className="blog-read-more-btn text-[#1C75BC] font-medium bg-black rounded-[10px] px-8 lg:px-14 py-3 mt-8">
        READ MORE
      </button>
    </div>
  ) : (
    <div className="h-[300px] lg:h-[439px] border-y border-[#C4C4C4] pt-10 pb-10 lg:pb-20 flex flex-col">
      <p className="uppercase tracking-[5px] text-[20px]">{category}</p>
      <p className="font-semibold text-[16px] leading-[26px] lg:text-[26px]/[1.2] 2xl:text-[32px]/[1.2] mt-10">
        {title}
      </p>
      <p
        className={`${font.className} mt-auto text-end text-[32px] leading-[40px] font-bold`}
      >
        {time}
      </p>
    </div>
  );
}

function SectionBlogsSlider({ data }: Props) {
  const [centerId, setCenterId] = useState(data.length >= 1 ? data[1].id : "");
  const { width } = useWindowWidth();

  useEffect(() => {
    if (width > 0 && width < 1024 && data.length > 0) {
      setCenterId(data[0].id);
    }
  }, [width, data]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      direction="horizontal"
      allowTouchMove={true}
      wrapperClass="items-end"
      onSlideChange={(swiper) => {
        let idx = swiper.activeIndex + 1;
        if (width >= 1024) {
          setCenterId(idx < data.length ? data[idx].id : data[1].id);
        } else {
          setCenterId(data[swiper.activeIndex].id);
        }
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogItem
            id={item.id}
            category={item.category}
            title={item.title}
            time={item.time}
            centerId={centerId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SectionBlogsSlider;
