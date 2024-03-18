import React from "react";
import { ICON_HEART_OUTLINE, ICON_PAGINATION_ARROW_RIGHT } from "@/assets/icon";
import BlogSidebar from "@/components/shared/BlogSidebar";
import Img from "@/components/helper/Img";
import BlogModel, { IBlogSchema } from "@/lib/server/model/BlogModel";
import UserModel from "@/lib/server/model/UserModel";
import { headers } from "next/headers";

type Props = {};

type BlogDataType = {
  id: string;
  tags: string[];
  title: string;
  shortDescription: string;
  thumbnail?: string;
  authorImage?: string;
  authorName: string;
  publishedDate: string;
};

// const BLOG_DATA: BLOG[] = [
//   {
//     id: 1,
//     tags: ["DESIGN", "DEVELOPMENT"],
//     title: "The Benefits of Responsive Web Design for Business",
//     shortDescription:
//       "This article explores the advantages of implementing a responsive web design for businesses, including improved user experience, increased mobile traffic, and better SEO.",
//     authorName: "Nadia Wilson",
//     publishedDate: "August 25, 2023",
//     likes: 150,
//   },
//   {
//     id: 2,
//     tags: ["TIPS", "DIGITAL MARKETING"],
//     title: "Digital Marketing Strategies for Small Businesses",
//     shortDescription:
//       "This article discusses the importance of developing a digital marketing strategy for small businesses, including the benefits of social media, SEO, and email marketing on budget.",
//     authorName: "Joshua Norman",
//     publishedDate: "June 10, 2023",
//     likes: 200,
//   },
//   {
//     id: 3,
//     tags: ["TRENDS", "DEVELOPMENT"],
//     title: "The Future of Web Development: 2023 Trends to Watch",
//     shortDescription:
//       "This article explores the top trends that are expected to shape the landscape of web development in 2023, highlighting the key areas where developers should focus on working.",
//     authorName: "Nathalie Gibson",
//     publishedDate: "January 9, 2023",
//     likes: 300,
//   },
// ];

async function Blogs({}: Props) {
  UserModel; // Calling But doing nothing.. Making sure its Registered

  const BLOG_DATA = await BlogModel.find({}).populate("author");
  // console.log(BLOG_DATA);
  headers().forEach((v, k) => console.log(`${k}==${v}`));

  return (
    <main id="blogs" className="min-h-screen my-container pt-20 pb-32">
      <h1 className="text-[71px]/[78px] font-bold mt-24">Blog</h1>

      <section className="w-full mt-28 flex gap-10">
        <section className="w-[60%]">
          <div className="h-full flex flex-col gap-10">
            {BLOG_DATA.map((blog) => (
              <BlogCard
                key=""
                data={{
                  authorName: "",
                  id: blog._id.toString(),
                  publishedDate: new Date(blog.createdAt).toLocaleString(),
                  shortDescription: blog.short_desc,
                  tags: blog.tags,
                  title: blog.title,
                  authorImage: "",
                  thumbnail: blog.thumbnail || "",
                }}
              />
            ))}
          </div>
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
  // add any further properties here
  data: BlogDataType;
};

function BlogCard(props: BlogCardProps) {
  return (
    <div className="w-full rounded-[17px] overflow-hidden">
      <div className="bg-[#D9D9D9] h-[300px] flex items-end">
        {/* need to add the thumbnail image */}
        <div className="px-8 py-5 flex items-center gap-3">
          {props.data.tags.map((tag) => (
            <p key={tag} className="uppercase bg-white px-4 py-2 text-black text-[11px]/[18px] font-semibold rounded-lg">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#092B46] px-8 py-7">
        <h2 className="font-semibold text-[22px]/[28px]">{props.data.title}</h2>
        <p className="font-light text-[14px]/[21px] opacity-80 mt-4">{props.data.shortDescription}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* will replace this with the author image later */}
            <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]"></div>

            <div className="text-[11px]/[18px]">
              <p className="font-semibold">{props.data.authorName}</p>
              <p className="opacity-80">{props.data.publishedDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Img src={ICON_HEART_OUTLINE.src} alt="heart" />
            {/* <p className="text-[14px]/[21px] opacity-80">{props.data.likes}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
