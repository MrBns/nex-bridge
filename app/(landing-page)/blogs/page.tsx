import React from "react";
import { ICON_HEART_OUTLINE, ICON_PAGINATION_ARROW_RIGHT } from "@/assets/icon";
import BlogSidebar from "@/components/shared/BlogSidebar";
import Img from "@/components/helper/Img";
import axios from "axios";

type Props = {};

type BLOG = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    content: string;
    short_description: string;
    summary: string;
    slug: string;
    thumbnail: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
          };
        };
      };
    };
    categories: {
      data: {
        attributes: {
          Category: string;
        };
      }[];
    };
    createdBy: {
      firstname: string;
    };
  };
};

type BLOG_DATA = {
  data: BLOG[];
};

async function Blogs({}: Props) {
  let data = null;
  try {
    const blogsResponse = await axios.get("http://localhost:1337/api/blogs?populate=*&pagination[page]=1&pagination[pageSize]=3");
    if (blogsResponse.status === 200) {
      data = (blogsResponse.data as BLOG_DATA).data;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <main id="blogs" className="min-h-screen my-container pt-20 pb-32">
      <h1 className="text-[71px]/[78px] font-bold mt-24">Blog</h1>

      <section className="w-full mt-28 flex gap-10">
        <section className="w-[60%]">
          <div className="h-full flex flex-col gap-10">{data && data.map((blog: BLOG) => <BlogCard key={`blog-${blog.id}`} blog={blog} />)}</div>
          {/* paginations */}
          <div className="grid grid-cols-4 w-max gap-4">
            <button className="px-3 py-2 rounded-lg bg-[#144064] border border-[#144064]">
              <span className="text-white text-[22px]/[28px] font-semibold">1</span>
            </button>
            <button className="px-3 py-2 rounded-lg bg-[#000000] border border-[#144064]">
              <span className="text-[#ABABAB] text-[22px]/[28px] font-semibold">2</span>
            </button>
            <button className="px-3 py-2 rounded-lg bg-[#000000] border border-[#144064]">
              <span className="text-[#ABABAB] text-[22px]/[28px] font-semibold">3</span>
            </button>
            <button className="px-3 py-2 rounded-lg bg-[#000000] border border-[#144064]">
              <Img src={ICON_PAGINATION_ARROW_RIGHT.src} alt="more" />
            </button>
          </div>
        </section>
        <BlogSidebar />
      </section>
    </main>
  );
}

type BlogCardProps = {
  blog: BLOG;
};

function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="w-full rounded-[17px] overflow-hidden">
      <div className="relative bg-[#D9D9D9] h-[300px] flex items-end">
        {/* need to add the thumbnail image */}
        {blog.attributes.thumbnail && (
          <img
            className="absolute inset-0 w-full h-full bg-cover"
            src={`http://localhost:1337${blog.attributes.thumbnail.data.attributes.formats.large.url}`}
            alt="thumbnail"
          />
        )}
        <div className="relative z-20 px-8 py-5 flex items-center gap-3">
          {blog.attributes.categories.data.map((category) => (
            <p key={category.attributes.Category} className="uppercase bg-white px-4 py-2 text-black text-[11px]/[18px] font-semibold rounded-lg">
              {category.attributes.Category}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#092B46] px-8 py-7">
        <a href={`/blogs/${blog.attributes.slug}`}>
          <h2 className="font-semibold text-[22px]/[28px]">{blog.attributes.title}</h2>
        </a>
        <p className="font-light text-[14px]/[21px] opacity-80 mt-4">{blog.attributes.short_description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* will replace this with the author image later */}
            <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]"></div>

            <div className="text-[11px]/[18px]">
              <p className="font-semibold">{blog.attributes.createdBy.firstname}</p>
              <p className="opacity-80">{blog.attributes.createdAt}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            {/* <Img src={ICON_HEART_OUTLINE.src} alt="heart" /> */}
            {/* <p className="text-[14px]/[21px] opacity-80">{props.likes}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
