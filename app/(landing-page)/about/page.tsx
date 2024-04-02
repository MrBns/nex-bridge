import { ADMIN_URL } from "@/lib/config/url";
import { IStaticAssetResponse } from "@/lib/types/strapi-api/static-asset-all";
import React from "react";

type Props = {};

async function About({}: Props) {
  //Loading Static Assets only header_bg_vid field;
  const assets: IStaticAssetResponse<["about_us_header_vid"]> = await (
    await fetch(`${ADMIN_URL}/api/static-asset?populate[0]=about_us_header_vid`, { cache: "no-store" })
  ).json();

  return (
    <main className="">
      <div className="relative  py-20 overflow-hidden h-[450px]">
        {/* Background video marger  */}
        <div className="absolute top-0 w-full bg-gradient-to-b from-[#0B0C15] to-transparent h-28"></div>

        {/* Background Video */}
        <div className="absolute h-full w-full -z-[1] left-0 top-0">
          <video className="w-full h-full object-cover" autoPlay controls={false} playsInline muted loop>
            <source src={ADMIN_URL + assets?.data?.attributes?.about_us_header_vid?.data?.attributes?.url} />
          </video>
        </div>

        {/* Background video marger  */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0B0C15] to-transparent h-28"></div>

        <div className="py-20">
          <h1 className="text-[58px]/[1.2] text-center font-michroma uppercase font-bold mb-2">About Us.</h1>
          <p className="text-xl lg:text-2xl text-center opacity-70 px-10">Welcome to NexBridge, your gateway to the future of finance.</p>
        </div>
      </div>

      <div className="z-[1] overflow-hidden relative about-middle-radial-gradient bg-right-bottom pt-20">
        <section className="my-container mt-20 header-gradient relative">
          <div className="mt-16 flex items-center justify-center gap-20">
            <div>
              <h2 className="text-[30px]/[34px] font-bold text-center">
                Accessing a New Capital Market with NexBridge: Where Innovation Meets Tradition.
              </h2>

              <hgroup data-aos className="leading-[20px] text-[15px] lg:text-[19px] text-center max-w-6xl mx-auto">
                <h1 className="mt-8 leading-[30px] font-light">
                  At NexBridge, we are more than just a digital asset issuer. Positioned at the crossroads of traditional finance and digital
                  innovation, we deliver solutions that align seamlessly with regulatory standards. In an era where compliance and transparency are
                  paramount, our commitment to ensuring that our digital products meet stringent regulations sets us apart. Our deep understanding of
                  traditional finance, combined with our expertise in <p className="leading-none font-semibold inline-block">tokenization</p>, allows
                  us to offer a comprehensive <p className="leading-none font-semibold inline-block">360° service</p>. From concept to realization, we
                  and our esteemed market-leading partners guarantee an all-inclusive solution in the new age of digital finance, empowering sectors
                  ranging from startups to established financial institutions with the tools they need to succeed.
                </h1>
              </hgroup>
            </div>
          </div>
        </section>

        <section className="my-container mb-20">
          <h1 className="text-[48px]/[64px] lg:text-[64px]/[81px] text-center mt-40">Key Points</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 mt-20 sm:mt-32">
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Registered Issuer</p>
              <p className="text-[18px]/[34px]">
                NexBridge is a digital asset issuer, forging a link between traditional finance and digital assets. We empower investors with access
                to a new spectrum of tokenized investment opportunities, while enabling asset owners to penetrate global liquid capital markets.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Industry Leader</p>
              <p className="text-[18px]/[34px]">
                Innovation & Excellence: Aimed to be at the forefront of digital assets in regulated markets, NexBridge is recognized for pioneering
                industry standards and fostering financial innovation.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Financial Know-How</p>
              <p className="text-[18px]/[34px]">
                Expertise & Experience: Founding members bring extensive experience from traditional finance, offering unparalleled expertise in
                navigating the financial landscape.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Flexibility DASP Selection</p>
              <p className="text-[18px]/[34px]">
                Tailored Solutions: NexBridge guides clients in selecting the ideal Digital Asset Service Providers, ensuring a perfect fit for
                project ambitions and market dynamics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
