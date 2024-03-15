import React from "react";
import { Space_Grotesk } from "next/font/google";
import BlogSidebar from "@/components/shared/BlogSidebar";
import {
  ICON_BLOG_CHECK,
  ICON_BLOG_FB,
  ICON_BLOG_LEFT_ARROW,
  ICON_BLOG_RIGHT_ARROW,
  ICON_BLOG_TWITTER,
  ICON_QUOTE,
} from "@/assets/icon";
import Img from "@/components/helper/Img";

const font = Space_Grotesk({
  weight: ["500", "400"],
  subsets: ["latin"],
});

type Props = {};

function BlogView({}: Props) {
  return (
    <main id="blogs-view" className="min-h-screen my-container pt-20 pb-32">
      <hgroup className="mt-28">
        <h2 className="text-[#1190F5] text-[24px] font-bold">Blog</h2>
        <h1 className={`text-[40px] font-bold ${font.className}`}>
          Cloud Computing: A Game-Changer for Small Businesses
        </h1>
      </hgroup>

      <section className="w-full mt-32 flex gap-10">
        <section className="w-[60%]">
          {/* thumbnail */}
          <div className="w-full h-[475px] bg-[#D9D9D9] rounded-[17px]"></div>

          {/* author */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* will replace this with the author image later */}
              <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]"></div>
              <div className="text-[11px]/[18px]">
                <p className="font-semibold">Nathan Atkinson</p>
                <p className="opacity-80">July 10, 2023</p>
              </div>
            </div>
            <div className="h-[57px] w-[127px] bg-white rounded-lg"></div>
          </div>

          {/* content */}
          <p className="mt-10 text-[14px]/[21px]">
            For small businesses, the ability to access enterprise-level
            technology has long been a challenge. Historically, small businesses
            have had limited access to the resources needed to compete with
            larger companies. However, cloud computing has changed the game for
            small businesses, providing access to affordable, scalable
            technology solutions that were previously out of reach. One of the
            biggest advantages of cloud computing for small businesses is the
            cost savings. By moving their IT infrastructure to the cloud,
            businesses can avoid the upfront costs associated with purchasing
            and maintaining physical servers and hardware. Cloud computing also
            eliminates the need for in-house IT staff, reducing labor costs.
            <br />
            <br />
            In addition to cost savings, cloud computing also provides small
            businesses with greater flexibility and scalability. With
            cloud-based solutions, businesses can easily add or remove users,
            applications, and services as needed, without having to invest in
            additional hardware or software.
          </p>

          {/* quote */}
          <div className="mt-10 w-full p-10 rounded-[17px] bg-[#1190F5] flex items-start justify-center">
            <Img src={ICON_QUOTE.src} alt="quote" />
            <div className="max-w-[90%] mx-auto">
              <h4 className="text-[22px]/[28px] font-semibold text-white">
                Cloud computing provides affordable, scalable, & cheap
                technology solutions for small business.
              </h4>
              <p className="mt-5 flex gap-1">
                <span>-</span>
                <span className="flex flex-col">
                  <span className="text-[14px]/[21px]">Nathalie Birkinson</span>
                  <span className="text-[11px]/[18px]">
                    CEO of TechBrainers Corporation
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* summary */}
          <p className="mt-10 text-[14px]/[21px]">
            In summary, cloud computing is a game-changer for small businesses,
            providing access to affordable, scalable, and secure technology
            solutions that were previously out of reach. By moving their IT
            infrastructure to the cloud, small businesses can reduce costs,
            increase flexibility, and stay competitive in today&apos;s
            fast-paced business environment.
          </p>

          {/* author */}
          <div className="mt-20 w-full blog_bottom_author_card_gradient rounded-[17px] p-8 flex gap-5">
            <div className="shrink-0 w-[112px] h-[112px] rounded-full bg-[#D9D9D9] relative">
              <div className="absolute bottom-0 right-0 w-[34px] h-[34px] bg-[#92DEED] rounded-full flex items-center justify-center">
                <Img src={ICON_BLOG_CHECK.src} alt="check" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="tracking-[8px] text-[14px]/[21px]">
                  AUTHOR
                </span>
                <div className="flex items-center gap-5">
                  <Img src={ICON_BLOG_FB.src} alt="facebook" />
                  <Img src={ICON_BLOG_TWITTER.src} alt="twitter" />
                </div>
              </div>
              <p className="mt-1 text-[22px]/[28px] font-semibold">NEXBRIDGE</p>
              <p className="mt-3 text-[11px]/[18px]">
                Nathan Akitson is a seasoned cloud computing expert and blogger
                with years of experience in the field. Currently, he works as a
                Cloud Solutions Architect at a leading tech company in Silicon
                Valley and contributes several articles to our technology blog.
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
