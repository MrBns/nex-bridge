import React from "react";
import Footer from "@/components/layout-comp/Footer";
import SectionWantToConnect from "@/views/homepage/SectionWantToConnect";

type Props = {};

function Vision({}: Props) {
  return (
    <main className="bg-black pt-20">
      <section className="mt-28 px-5 xl:px-0 w-full max-w-[1300px] mx-auto circle-radial-gradient mb-20">
        <h1 className="text-[54px]/[71px] sm:text-[64px]/[81px] text-center lg:text-left">
          Our Vision
        </h1>
        <p className="mt-5 text-[24px]/[34px] opacity-70 max-w-[600px] text-center mx-auto lg:ml-0 lg:text-left">
          We envision a future where traditional finance integrates seamlessly
          with blockchain.
        </p>
        <p className="mt-52 text-center text-[16px]/[20px] lg:text-[24px]/[34px] opacity-70">
          NexBridge is reshaping the financial landscape, seamlessly integrating
          traditional finance with the innovation of blockchain technology. Our
          mission is clear: to democratize finance, ensuring it's accessible,
          efficient, and within reach for everyone.
        </p>

        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">
              Bridging Today with Tomorrow:
            </p>
            <p className="text-[17px]/[31px]">
              We’re revolutionizing finance by merging the trustworthiness of
              traditional finance with the transformative power of blockchain.
              NexBridge offers a gateway that’s both innovative and familiar,
              facilitating a smooth transition to a more inclusive financial
              future for all participants.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">
              The Nexus of Possibilities:
            </p>
            <p className="text-[17px]/[31px]">
              NexBridge stands at the crossroads of the old and the new,
              enhancing traditional financial systems with the capabilities of
              blockchain. Our initiative is dedicated to creating a universally
              accessible financial world, where every person has the opportunity
              to engage with the financial revolution.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">
              Innovation Meets Tradition:
            </p>
            <p className="text-[17px]/[31px]">
              As pioneers at the dawn of a new financial era, NexBridge merges
              the reliability of traditional finance with the advancements in
              blockchain. Explore our ecosystem and discover how we’re making
              the future of finance robust, innovative, and ready for everyone,
              today.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">
              Efficiency Through Tokenization:
            </p>
            <p className="text-[17px]/[31px]">
              At the core of our vision is the efficiency brought by
              tokenization. This process transforms the way assets are managed,
              traded, and invested in, streamlining operations and removing
              intermediaries. Tokenization not only enhances transparency and
              security but also significantly reduces costs and barriers to
              entry, making investment opportunities more accessible to a wider
              audience.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">
              Making Finance Accessible:
            </p>
            <p className="text-[17px]/[31px]">
              Our deep expertise in traditional finance and passion for
              blockchain innovation uniquely position us to make finance more
              adaptable, accessible, and aligned with the needs of the 21st
              century.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[23px]/[31px] font-bold">For Investors:</p>
            <p className="text-[17px]/[31px]">
              NexBridge leverages tokenization to offer advantages like
              transparency, efficient transfers, and lower entry barriers.
              Investors enjoy unparalleled liquidity, facilitated by a dynamic
              mechanism that adapts to market demands and a guaranteed secondary
              market for greater fluidity.
            </p>
          </div>
        </div>
      </section>

      <SectionWantToConnect />
      <Footer />
    </main>
  );
}

export default Vision;
