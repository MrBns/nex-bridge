import { ADMIN_URL } from "@/lib/config/url";
import { IStaticAssetResponse } from "@/lib/types/strapi-api/static-asset-all";
import React from "react";

type Props = {};

async function Vision({}: Props) {
  //Loading Static Assets only header_bg_vid field;
  const assets: IStaticAssetResponse<["vision_header_bg_vid"]> = await (
    await fetch(`${ADMIN_URL}/api/static-asset?populate[0]=vision_header_bg_vid`, { cache: "no-store" })
  ).json();

  return (
    <main className="pt-20">
      <div className="flex flex-col items-center justify-center gap-10 overflow-hidden relative py-10 mt-10">
        {/* Background Video */}
        <div className="absolute h-full w-full -z-[1] left-0 top-0">
          <video className="w-full h-full object-cover" autoPlay controls={false} playsInline muted loop>
            <source src={ADMIN_URL + assets?.data?.attributes?.vision_header_bg_vid?.data?.attributes?.url} />
          </video>
        </div>

        {/* Background video marger  */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0B0C15] to-transparent h-28"></div>

        <h1 className="text-[54px]/[71px] sm:text-[64px]/[71px] text-center">Our Vision</h1>
        <p className="text-[24px]/[34px] opacity-70 max-w-4xl text-center mx-auto">
          We envision a future where traditional finance integrates seamlessly with blockchain.
        </p>
      </div>

      <section className="mt-28 px-5 xl:px-0 w-full max-w-[1300px] mx-auto circle-radial-gradient mb-20">
        <hgroup data-aos className="lg:leading-tight text-lg  2xl:leading-[42px] 2xl:text-[38px] text-center">
          <h1 className="mt-8 leading-none font-light">
            NexBridge is reshaping the financial landscape, seamlessly integrating traditional finance with the innovation of blockchain technology.
            Our mission is clear:
          </h1>
          <h1 className="leading-none font-semibold">to democratize finance, ensuring it&apos;s accessible, efficient,</h1> and within reach for
          everyone.
        </hgroup>

        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">Bridging Today with Tomorrow:</p>
            <p className="text-[17px]/[31px]">
              We’re revolutionizing finance by merging the trustworthiness of traditional finance with the transformative power of blockchain.
              NexBridge offers a gateway that’s both innovative and familiar, facilitating a smooth transition to a more inclusive financial future
              for all participants.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">The Nexus of Possibilities:</p>
            <p className="text-[17px]/[31px]">
              NexBridge stands at the crossroads of the old and the new, enhancing traditional financial systems with the capabilities of blockchain.
              Our initiative is dedicated to creating a universally accessible financial world, where every person has the opportunity to engage with
              the financial revolution.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">Innovation Meets Tradition:</p>
            <p className="text-[17px]/[31px]">
              As pioneers at the dawn of a new financial era, NexBridge merges the reliability of traditional finance with the advancements in
              blockchain. Explore our ecosystem and discover how we’re making the future of finance robust, innovative, and ready for everyone, today.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">Efficiency Through Tokenization:</p>
            <p className="text-[17px]/[31px]">
              At the core of our vision is the efficiency brought by tokenization. This process transforms the way assets are managed, traded, and
              invested in, streamlining operations and removing intermediaries. Tokenization not only enhances transparency and security but also
              significantly reduces costs and barriers to entry, making investment opportunities more accessible to a wider audience.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">Making Finance Accessible:</p>
            <p className="text-[17px]/[31px]">
              Our deep expertise in traditional finance and passion for blockchain innovation uniquely position us to make finance more adaptable,
              accessible, and aligned with the needs of the 21st century.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">For Investors:</p>
            <p className="text-[17px]/[31px]">
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
