import React from "react";
import { Space_Grotesk } from "next/font/google";
import BlogSidebar from "@/components/shared/BlogSidebar";
import { ICON_BLOG_CHECK_ICON, ICON_BLOG_FB_ICON, ICON_BLOG_TWITTER_ICON } from "@/assets/icon";
import Img from "@/components/helper/Img";
import axios from "axios";
import { ADMIN_URL } from "@/lib/config/url";
import { BLOG } from "../page";
import GradientBorderButton from "@/components/shared/buttons/GradientBorderButton";
import { headers } from "next/headers";

const font = Space_Grotesk({
  weight: ["500", "400"],
  subsets: ["latin"],
});

type Props = {
  params: { slug: string };
};

type BLOG_DATA = {
  data: BLOG[];
};

async function BlogView({ params: { slug }, ...restProps }: Props) {
  let data: BLOG_DATA["data"][0] | null = null;
  let header = headers();

  try {
    const blogResponse = await axios.get(
      `${ADMIN_URL}/api/blogs?filters[slug][$eq]=${slug}&populate[0]=author.profilePic&populate[1]=categories&populate[2]=thumbnail`
    );
    if (blogResponse.status === 200) {
      data = (blogResponse.data as BLOG_DATA).data[0];
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {/* future plan */}
      {/* <Head>
        <BlogMetaData
          title={data?.attributes?.title || "Nexbridge press blog"}
          img={data?.attributes?.thumbnail?.data?.attributes?.url || ""}
          summary={data?.attributes?.summary || "no description found"}
          url={`${""}`}
        />
      </Head> */}
      <main id="blogs-view" className="min-h-screen my-container pt-20 pb-16 md:pb-32">
        <hgroup className="mt-16 lg:mt-28">
          <h2 className="text-[#1190F5] text-[24px] font-bold">Blog</h2>
          <h1 className={`mt-2 text-[40px]/[50px] font-bold ${font.className}`}>{data?.attributes.title}</h1>
        </hgroup>

        <section className="w-full mt-5 sm:mt-14 md:mt-20 lg:mt-32 flex flex-col lg:flex-row gap-10">
          <section className="w-full lg:w-[60%]">
            {/* thumbnail */}
            <div className="w-full h-[250px] md:h-[300px] xl:h-[475px] bg-[#D9D9D9] rounded-[17px] overflow-hidden">
              {data?.attributes.thumbnail && (
                <Img
                  className="w-full h-full object-cover sm:object-fill"
                  src={`${ADMIN_URL}${data?.attributes.thumbnail.data.attributes.url}`}
                  alt="thumbnail"
                />
              )}
            </div>

            {/* author */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* will replace this with the author image later */}
                <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]">
                  {data?.attributes?.author?.data?.attributes?.profilePic?.data?.attributes?.url && (
                    <Img
                      src={`${ADMIN_URL}${data?.attributes?.author?.data?.attributes?.profilePic?.data?.attributes?.url}`}
                      alt="profilePic"
                      className="w-full h-full object-cover rounded-full"
                    />
                  )}
                </div>
                <div className="text-[11px]/[18px]">
                  <p className="font-semibold">
                    {data?.attributes?.author?.data?.attributes?.firstName} {data?.attributes?.author?.data?.attributes?.lastName}
                  </p>
                  <p className="opacity-80">{data?.attributes?.createdAt}</p>
                </div>
              </div>
              <div className="">
                <GradientBorderButton variant="minimal" className="px-3 py-2 [--border-width:1px]">
                  {data?.attributes?.categories.data[0]?.attributes.Category}
                </GradientBorderButton>
              </div>
            </div>

            {/* content */}
            <div className="mt-10 text-[14px]/[21px]" id="BLOG_DETAILS_VIEW_CONTENT_HTML">
              {data?.attributes?.content && <div dangerouslySetInnerHTML={{ __html: data?.attributes?.content ?? "" }}></div>}
            </div>

            {/* summary */}
            <p className="mt-10 text-[14px]/[21px]">{data?.attributes.summary}</p>

            {/* author */}
            <div className="mt-20 w-full blog_bottom_author_card_gradient rounded-[17px] p-4 md:p-8 flex gap-5">
              <div className="shrink-0 w-[70px] h-[70px] md:w-[112px] md:h-[112px] bg-[#D9D9D9] relative rounded-full">
                {data?.attributes?.author?.data?.attributes?.profilePic?.data?.attributes?.url && (
                  <Img
                    src={`${ADMIN_URL}${data?.attributes?.author?.data?.attributes?.profilePic?.data?.attributes?.url}`}
                    alt="profilePic"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
                <div className="absolute bottom-0 right-0 w-[34px] h-[34px] bg-[#92DEED] rounded-full flex items-center justify-center">
                  <Img src={ICON_BLOG_CHECK_ICON.src} alt="check" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <span className="tracking-[8px] text-[13px]/[18px] md:text-[14px]/[21px]">AUTHOR</span>
                  <div className="flex items-center gap-5">
                    <Img src={ICON_BLOG_FB_ICON.src} alt="facebook" />
                    <Img src={ICON_BLOG_TWITTER_ICON.src} alt="twitter" />
                  </div>
                </div>
                <p className="mt-1 text-[16px]/[18px] md:text-[22px]/[28px] font-semibold uppercase">
                  {data?.attributes?.author?.data?.attributes?.firstName} {data?.attributes?.author?.data?.attributes?.lastName}
                </p>
                <p className="mt-3 text-[11px]/[18px]">{data?.attributes?.author?.data?.attributes?.about}</p>
              </div>
            </div>
          </section>
          <BlogSidebar />
        </section>
      </main>
    </>
  );
}

export default BlogView;
