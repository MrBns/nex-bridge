import React from "react";
import { Space_Grotesk } from "next/font/google";
import BlogSidebar from "@/components/shared/BlogSidebar";
import { ICON_BLOG_CHECK, ICON_BLOG_FB, ICON_BLOG_LEFT_ARROW, ICON_BLOG_RIGHT_ARROW, ICON_BLOG_TWITTER, ICON_QUOTE } from "@/assets/icon";
import Img from "@/components/helper/Img";
import axios from "axios";

const font = Space_Grotesk({
  weight: ["500", "400"],
  subsets: ["latin"],
});

type Props = {
  slug: string;
};

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

async function BlogView({ slug }: Props) {
  let data = null;
  try {
    const blogResponse = await axios.get(`http://localhost:1337/api/blogs?slug=${slug}&populate=*`);
    if (blogResponse.status === 200) {
      data = (blogResponse.data as BLOG_DATA).data[0];
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <main id="blogs-view" className="min-h-screen my-container pt-20 pb-32">
      <hgroup className="mt-28">
        <h2 className="text-[#1190F5] text-[24px] font-bold">Blog</h2>
        <h1 className={`text-[40px] font-bold ${font.className}`}>{data?.attributes.title}</h1>
      </hgroup>

      <section className="w-full mt-32 flex gap-10">
        <section className="w-[60%]">
          {/* thumbnail */}
          <div className="w-full h-[475px] bg-[#D9D9D9] rounded-[17px] overflow-hidden">
            {data?.attributes.thumbnail && (
              <Img
                className="w-full h-full object-cover"
                src={`http://localhost:1337${data?.attributes.thumbnail.data.attributes.formats.large.url}`}
                alt="thumbnail"
              />
            )}
          </div>

          {/* author */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* will replace this with the author image later */}
              <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]"></div>
              <div className="text-[11px]/[18px]">
                <p className="font-semibold">{data?.attributes.createdBy.firstname}</p>
                <p className="opacity-80">{data?.attributes.createdAt}</p>
              </div>
            </div>
            <div className="h-[57px] w-[127px] bg-white rounded-lg"></div>
          </div>

          {/* content */}
          <div className="mt-10 text-[14px]/[21px]">
            {data?.attributes.content && <div dangerouslySetInnerHTML={{ __html: data?.attributes.content ?? "" }}></div>}
          </div>

          {/* quote */}
          {/* <div className="mt-10 w-full p-10 rounded-[17px] bg-[#1190F5] flex items-start justify-center">
            <Img src={ICON_QUOTE.src} alt="quote" />
            <div className="max-w-[90%] mx-auto">
              <h4 className="text-[22px]/[28px] font-semibold text-white">
                Cloud computing provides affordable, scalable, & cheap technology solutions for small business.
              </h4>
              <p className="mt-5 flex gap-1">
                <span>-</span>
                <span className="flex flex-col">
                  <span className="text-[14px]/[21px]">Nathalie Birkinson</span>
                  <span className="text-[11px]/[18px]">CEO of TechBrainers Corporation</span>
                </span>
              </p>
            </div>
          </div> */}

          {/* summary */}
          <p className="mt-10 text-[14px]/[21px]">{data?.attributes.summary}</p>

          {/* author */}
          <div className="mt-20 w-full blog_bottom_author_card_gradient rounded-[17px] p-8 flex gap-5">
            <div className="shrink-0 w-[112px] h-[112px] rounded-full bg-[#D9D9D9] relative">
              <div className="absolute bottom-0 right-0 w-[34px] h-[34px] bg-[#92DEED] rounded-full flex items-center justify-center">
                <Img src={ICON_BLOG_CHECK.src} alt="check" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="tracking-[8px] text-[14px]/[21px]">AUTHOR</span>
                <div className="flex items-center gap-5">
                  <Img src={ICON_BLOG_FB.src} alt="facebook" />
                  <Img src={ICON_BLOG_TWITTER.src} alt="twitter" />
                </div>
              </div>
              <p className="mt-1 text-[22px]/[28px] font-semibold">NEXBRIDGE</p>
              <p className="mt-3 text-[11px]/[18px]">
                Nathan Akitson is a seasoned cloud computing expert and blogger with years of experience in the field. Currently, he works as a Cloud
                Solutions Architect at a leading tech company in Silicon Valley and contributes several articles to our technology blog.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between">
            <button>
              <Img src={ICON_BLOG_LEFT_ARROW.src} alt="previous" />
            </button>
            <button>
              <Img src={ICON_BLOG_RIGHT_ARROW.src} alt="next" />
            </button>
          </div>
        </section>
        <BlogSidebar />
      </section>
    </main>
  );
}

export default BlogView;
