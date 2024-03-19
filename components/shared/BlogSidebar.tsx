import React from "react";
import { ICON_SEARCH } from "@/assets/icon";
import Img from "@/components/helper/Img";
import axios from "axios";
import { ADMIN_URL } from "@/lib/config/url";


type LatestTwitterPostItemType = {
  id: number;
  date: string;
  title: string;
};

const TWITTER_POSTS: LatestTwitterPostItemType[] = [
  {
    id: 1,
    date: "10 July 2023",
    title: "Cloud Computing: A Game-Changer",
  },
  {
    id: 2,
    date: "29 March 2023",
    title: "Cybersecurity Threats Need to Know in 2023",
  },
  {
    id: 3,
    date: "10 December 2023",
    title: "How to Do Mobile App User Acquisition?",
  },
];

type Props = {};

type CATEGORY = {
  id: number;
  attributes: {
    Category: string;
    blogs: {
      data: any[];
    };
  };
};

type CATEGORY_DATA = {
  data: CATEGORY[];
};

async function BlogSidebar({}: Props) {
  let categories = null;

  try {
    const categoriesResponse = await axios.get(`${ADMIN_URL}/api/categories?populate=*`);
    if (categoriesResponse.status === 200) {
      categories = (categoriesResponse.data as CATEGORY_DATA).data;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <aside className="w-[40%]">
      <div className="w-full rounded-[17px] blog_aside_item_gradient px-14 pt-12 pb-10">
        <h3 className="text-[22px]/[28px] font-semibold">Search</h3>
        <div className="mt-5 border-b border-b-gray-500 flex items-center justify-between gap-4 pb-4">
          <input type="text" className="bg-transparent focus:outline-none text-[14px]/[21px] w-full" placeholder="Enter your keywords ..." />
          <Img src={ICON_SEARCH.src} alt="search" />
        </div>
      </div>

      <div className="mt-5 w-full rounded-[17px] blog_aside_item_gradient px-14 pt-12 pb-10">
        <h3 className="text-[22px]/[28px] font-semibold">Category</h3>
        <div className="mt-10 flex flex-col gap-4">
          {categories &&
            categories.map((item) => (
              <div key={`category-${item.id}`} className="flex items-center justify-between">
                <p className="text-[17px]/[22px] font-bold">{item.attributes.Category}</p>
                <p className="text-[14px]/[21px]">{item.attributes.blogs.data.length}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-5 w-full rounded-[17px] blog_aside_item_gradient px-14 pt-12 pb-10">
        <h3 className="text-[22px]/[28px] font-semibold">Latest Twitter Posts</h3>
        <div className="mt-10 flex flex-col gap-8">
          {TWITTER_POSTS.map((item) => (
            <LatestTwitterPostItem key={`latest-twitter-post-${item.id}`} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function LatestTwitterPostItem(props: LatestTwitterPostItemType) {
  return (
    <div className="flex gap-5 w-full">
      <div className="w-[73px] h-[69px] rounded-lg bg-[#D9D9D9]"></div>
      <div className="flex flex-col gap-1">
        <p className="text-[11px]/[18px]">{props.date}</p>
        <h4 className="text-[17px]/[22px] font-bold max-w-[200px]">{props.title}</h4>
      </div>
    </div>
  );
}

export default BlogSidebar;
