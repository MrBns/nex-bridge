import { ADMIN_URL } from "@/lib/config/url";
import { IStaticAssetResponse } from "@/lib/types/strapi-api/static-asset-all";
import React from "react";
import Img from "@/components/helper/Img";
import { IMG_VISION_POINT_1, IMG_VISION_POINT_2, IMG_VISION_POINT_3, IMG_VISION_POINT_4, IMG_VISION_POINT_5, IMG_VISION_POINT_6 } from "@/assets/img";

type Props = {};

async function Vision({}: Props) {
  //Loading Static Assets only header_bg_vid field;
  const assets: IStaticAssetResponse<["vision_header_bg_vid"]> = await (
    await fetch(`${ADMIN_URL}/api/static-asset?populate[0]=vision_header_bg_vid`, { cache: "no-store" })
  ).json();

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-10 overflow-hidden relative py-20 h-[450px]">
        {/* Background video marger  */}
        <div className="absolute top-0 w-full bg-gradient-to-b from-[#0B0C15] to-transparent h-28"></div>

        {/* Background Video */}
        <div className="absolute h-full w-full -z-[1] left-0 top-0">
          <video className="w-full h-full object-cover" autoPlay controls={false} playsInline muted loop>
            <source src={ADMIN_URL + assets?.data?.attributes?.vision_header_bg_vid?.data?.attributes?.url} />
          </video>
        </div>

        {/* Background video marger  */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0B0C15] to-transparent h-28"></div>
        <div className="mt-12">
          <h1 className="text-[54px]/[71px] sm:text-[64px]/[71px] text-center font-michroma uppercase font-bold mb-2">Our Vision</h1>
          <p className="text-xl lg:text-2xl opacity-70 max-w-4xl text-center mx-auto">
            We envision a future where traditional finance integrates seamlessly with blockchain.
          </p>
        </div>
      </div>

      <section className="pt-28 px-5 xl:px-0 w-full my-container circle-radial-gradient mb-20">
        <hgroup data-aos className="lg:leading-tight text-lg  2xl:leading-[42px] 2xl:text-[38px] text-center">
          <h1 className="mt-8 leading-none font-light">
            NexBridge is reshaping the financial landscape, seamlessly integrating traditional finance with the innovation of blockchain technology.
            Our mission is clear:
          </h1>
          <h1 className="leading-none font-semibold">to democratize finance, ensuring it&apos;s accessible, efficient,</h1> and within reach for
          everyone.
        </hgroup>

        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_1.src} alt="" className="absolute bottom-0 right-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">
              Bridging Today
              <br />
              with Tomorrow:
            </p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              We’re revolutionizing finance by merging the trustworthiness of traditional finance with the transformative power of blockchain.
              NexBridge offers a gateway that’s both innovative and familiar, facilitating a smooth transition to a more inclusive financial future
              for all participants.
            </p>
          </div>
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_2.src} alt="" className="absolute bottom-0 left-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">
              The Nexus of
              <br />
              Possibilities:
            </p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              NexBridge stands at the crossroads of the old and the new, enhancing traditional financial systems with the capabilities of blockchain.
              Our initiative is dedicated to creating a universally accessible financial world, where every person has the opportunity to engage with
              the financial revolution.
            </p>
          </div>
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_3.src} alt="" className="absolute bottom-0 right-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">
              Innovation Meets
              <br />
              Tradition:
            </p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              As pioneers at the dawn of a new financial era, NexBridge merges the reliability of traditional finance with the advancements in
              blockchain. Explore our ecosystem and discover how we’re making the future of finance robust, innovative, and ready for everyone, today.
            </p>
          </div>
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_4.src} alt="" className="absolute bottom-0 left-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">Efficiency Through Tokenization:</p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              At the core of our vision is the efficiency brought by tokenization. This process transforms the way assets are managed, traded, and
              invested in, streamlining operations and removing intermediaries. Tokenization not only enhances transparency and security but also
              significantly reduces costs and barriers to entry, making investment opportunities more accessible to a wider audience.
            </p>
          </div>
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_5.src} alt="" className="absolute bottom-0 right-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">Making Finance Accessible:</p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              Our deep expertise in traditional finance and passion for blockchain innovation uniquely position us to make finance more adaptable,
              accessible, and aligned with the needs of the 21st century.
            </p>
          </div>
          <div className="flex flex-col gap-10 card-points-gradient border border-[#ffffff20] rounded-[31px] px-10 py-8 lg:px-14 lg:py-10 relative overflow-hidden">
            <Img src={IMG_VISION_POINT_6.src} alt="" className="absolute top-0 left-0" />
            <p className="text-[28px]/[36px] lg:text-[36px]/[49px] font-medium">For Investors:</p>
            <p className="text-[18px]/[27px] text-[#ffffff70]">
              NexBridge leverages tokenization to offer advantages like transparency, efficient transfers, and lower entry barriers. Investors enjoy
              unparalleled liquidity, facilitated by a dynamic mechanism that adapts to market demands and a guaranteed secondary market for greater
              fluidity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Vision;
