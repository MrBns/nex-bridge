import React from "react";
import { ICON_SEARCH } from "@/assets/icon";
import Img from "@/components/helper/Img";
import axios from "axios";
import { ADMIN_URL } from "@/lib/config/url";
import { TBlogLatestNewsResponse } from "@/lib/types/strapi-api/blog-latest-news-response";
import Link from "next/link";

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
  let latestnews: TBlogLatestNewsResponse = await (
    await fetch(
      `${ADMIN_URL}/api/blogs?fields%5B0%5D=createdAt&fields%5B1%5D=title&populate%5Bthumbnail%5D%5Bfields%5D%5B2%5D=url&fields%5B4%5D=slug&fields%5B5%5D=uid&sort=createdAt%3Aasc&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=3`
    )
  ).json();
  console.log(latestnews);

  try {
    const categoriesResponse = await axios.get(`${ADMIN_URL}/api/categories?populate=*`);
    if (categoriesResponse.status === 200) {
      categories = (categoriesResponse.data as CATEGORY_DATA).data;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <aside className="w-full lg:w-[40%]">
      {/* <div className="w-full rounded-[17px] blog_aside_item_gradient px-8 py-7 md:px-14 md:pt-12 pb-10">
        <h3 className="text-[22px]/[28px] font-semibold">Search</h3>
        <div className="mt-5 border-b border-b-gray-500 flex items-center justify-between gap-4 pb-4">
          <input type="text" className="bg-transparent focus:outline-none text-[14px]/[21px] w-full" placeholder="Enter your keywords ..." />
          <Img src={ICON_SEARCH.src} alt="search" />
        </div>
      </div>

      <div className="mt-5 w-full rounded-[17px] blog_aside_item_gradient px-8 py-7 md:px-14 md:pt-12 pb-10">
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
      </div> */}

      <div className="mt-5 w-full rounded-[17px] blog_aside_item_gradient px-8 py-7 md:px-14 md:pt-12 pb-10">
        <h3 className="text-[22px]/[28px] font-semibold">Our Latest News</h3>
        <div className="mt-10 flex flex-col gap-8">
          {/* {TWITTER_POSTS.map((item) => (
            <LatestTwitterPostItem key={`latest-twitter-post-${item.id}`} {...item} />
          ))} */}
          {latestnews?.data?.map((news) => (
            <LatestTwitterPostItem key={`latest-twitter-post-${news.attributes.uid}`} {...news} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function LatestTwitterPostItem(props: TBlogLatestNewsResponse["data"][0]) {
  return (
    <Link href={`/blogs/${props.attributes.slug}`} className="flex gap-5 w-full">
      <div className="w-[73px] h-[69px] rounded-lg bg-[#D9D9D9]"></div>
      <div className="flex flex-col gap-1">
        <p className="text-[11px]/[18px]">{new Date(props.attributes.createdAt).toDateString()}</p>
        <h4 className="text-[17px]/[22px] font-bold max-w-[200px]">{props.attributes.title}</h4>
      </div>
    </Link>
  );
}

export default BlogSidebar;
