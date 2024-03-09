import React from "react";
import Footer from "@/components/layout-comp/Footer";
import SectionWantToConnect from "@/views/homepage/SectionWantToConnect";

type Props = {};

function About({}: Props) {
  return (
    <main className="">
      <div className="z-[1] overflow-hidden relative about-middle-radial-gradient bg-right-bottom pt-20">
        <section className="my-container mt-20 header-gradient">
          <h1 className="text-[64px]/[81px] text-center">About Us.</h1>
          <p className="text-[24px] text-center opacity-70">
            Welcome to NexBridge, your gateway to the future of finance.
          </p>
          <div className="mt-16 grid grid-cols-1 place-items-center xl:grid-cols-2 items-center gap-20">
            <div className="sm:w-max lg:w-[614px] lg:h-[574px] overflow-hidden bg-black rounded-[35px]">
              <video
                className="h-full aspect-auto"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src="/vid/about-vid.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h2 className="text-[24px]/[34px] font-bold">
                Accessing a New Capital Market with NexBridge: Where Innovation
                Meets Tradition.
              </h2>
              <p className="mt-10 text-[16px]/[34px]">
                At NexBridge, we are more than just a digital asset issuer.
                Positioned at the crossroads of traditional finance and digital
                innovation, we deliver solutions that align seamlessly with
                regulatory standards. In an era where compliance and
                transparency are paramount, our commitment to ensuring that our
                digital products meet stringent regulations sets us apart. Our
                deep understanding of traditional finance, combined with our
                expertise in tokenization, allows us to offer a comprehensive
                360° service. From concept to realization, we and our esteemed
                market-leading partners guarantee an all-inclusive solution in
                the new age of digital finance, empowering sectors ranging from
                startups to established financial institutions with the tools
                they need to succeed.
              </p>
            </div>
          </div>
        </section>
        <section className="my-container mb-20">
          <h1 className="text-[48px]/[64px] lg:text-[64px]/[81px] text-center mt-40">
            Key Points
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 mt-20 sm:mt-32">
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Registered Issuer</p>
              <p className="text-[18px]/[34px]">
                NexBridge is a digital asset issuer, forging a link between
                traditional finance and digital assets. We empower investors
                with access to a new spectrum of tokenized investment
                opportunities, while enabling asset owners to penetrate global
                liquid capital markets.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Industry Leader</p>
              <p className="text-[18px]/[34px]">
                Innovation & Excellence: Aimed to be at the forefront of digital
                assets in regulated markets, NexBridge is recognized for
                pioneering industry standards and fostering financial
                innovation.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">Financial Know-How</p>
              <p className="text-[18px]/[34px]">
                Expertise & Experience: Founding members bring extensive
                experience from traditional finance, offering unparalleled
                expertise in navigating the financial landscape.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[24px]/[34px] font-bold">
                Flexibility DASP Selection
              </p>
              <p className="text-[18px]/[34px]">
                Tailored Solutions: NexBridge guides clients in selecting the
                ideal Digital Asset Service Providers, ensuring a perfect fit
                for project ambitions and market dynamics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
