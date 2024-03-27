import React from "react";
import { ICON_HEART_OUTLINE, ICON_PAGINATION_ARROW_RIGHT } from "@/assets/icon";
import BlogSidebar from "@/components/shared/BlogSidebar";
import Img from "@/components/helper/Img";
import axios from "axios";
import { ADMIN_URL } from "@/lib/config/url";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string> & {
    page: string;
  };
};

export type BLOG = {
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
          url: string;
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
    author: {
      data: {
        attributes: {
          firstName: string;
          lastName: string;
          about?: string;
          profilePic: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
};

type BLOG_DATA = {
  data: BLOG[];
};

async function Blogs({ searchParams: { page = "0" }, ...restProps }: Props) {
  let data = null;
  let pageNumber = Number(page) === 0 ? 1 : Number(page);
  let pagination: Pagination | undefined = undefined;

  try {
    const blogsResponse = await axios.get(
      `${ADMIN_URL}/api/blogs?populate[0]=author.profilePic&populate[1]=categories&populate[2]=thumbnail&pagination[page]=${pageNumber}&pagination[pageSize]=3&pagination[withCount]=true&sort=createdAt:desc`
    );
    if (blogsResponse.status === 200) {
      data = (blogsResponse.data as BLOG_DATA).data;
      pagination = blogsResponse.data.meta.pagination;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <main id="blogs" className="min-h-screen my-container pt-20 pb-16 md:pb-32">
      <h1 className="text-[54px]/[58px] md:text-[71px]/[78px] font-bold mt-10 sm:mt-20 md:mt-24">Blog</h1>

      <section className="w-full mt-16 md:mt-28 flex flex-col lg:flex-row gap-10">
        <section className="w-full lg:w-[60%]">
          <div className="h-full flex flex-col gap-10">
            {data && data.map((blog: BLOG) => <BlogCard key={`blog-${blog.attributes.slug}`} blog={blog} />)}
          </div>
          <div className="mt-5 lg:mt-0 grid grid-cols-4 w-max gap-4">
            {[...new Array(pagination?.pageCount)].map((_v, idx) => (
              <Link
                href={`/blogs?page=${idx + 1}`}
                key={`key-${idx}`}
                className={`px-3 py-2 rounded-lg border text-center border-[#144064] ${pagination?.page === idx + 1 ? "bg-[#144064]" : ""}`}
              >
                <span className="text-white text-[22px]/[28px] font-semibold">{idx + 1}</span>
              </Link>
            ))}

            {pagination?.page !== pagination?.pageCount && (
              <Link href={`/blogs?page=${Number(page) + 1}`} className="px-3 py-2 rounded-lg bg-[#000000] text-center border border-[#144064]">
                <Img src={ICON_PAGINATION_ARROW_RIGHT.src} alt="next" />
              </Link>
            )}
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
      <div className="relative bg-[#D9D9D9] aspect-video w-full flex items-end overflow-hidden">
        {/* need to add the thumbnail image */}
        {blog?.attributes?.thumbnail && (
          <Img
            className="w-full aspect-video object-cover object-center max-w-none"
            src={`${ADMIN_URL}${blog?.attributes?.thumbnail?.data?.attributes?.url}`}
            alt="thumbnail"
          />
        )}
        <div className="absolute z-20 px-8 py-5 flex items-center gap-3">
          {blog.attributes.categories.data.map((category) => (
            <p key={category.attributes.Category} className="uppercase bg-white px-4 py-2 text-black text-[11px]/[18px] font-semibold rounded-lg">
              {category.attributes.Category}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#092B46] px-5 md:px-8 py-4 md:py-7">
        <a href={`/blogs/${blog.attributes.slug}`}>
          <h2 className="font-semibold text-[22px]/[28px]">{blog.attributes.title}</h2>
        </a>
        <p className="font-light text-[14px]/[21px] opacity-80 mt-4">{blog.attributes.short_description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* will replace this with the author image later */}
            <div className="overflow-hidden rounded-full w-[50px] h-[50px] bg-[#D9D9D9]">
              {blog?.attributes?.author?.data?.attributes?.profilePic?.data?.attributes?.url && (
                <Img
                  className="w-full h-full"
                  src={`${ADMIN_URL}${blog.attributes.author.data.attributes.profilePic.data.attributes.url}`}
                  alt="profilePic"
                />
              )}
            </div>

            <div className="text-[11px]/[18px]">
              <p className="font-semibold">
                {blog?.attributes?.author?.data?.attributes?.firstName} {blog?.attributes?.author?.data?.attributes?.lastName}
              </p>
              <p className="opacity-80">{new Date(blog.attributes.createdAt).toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
