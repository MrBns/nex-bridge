import {
  IMG_NEXBRIDGE_WHITE_LOGO as IMG_NEX_BRIDGE_WHITE_LOGO,
  IMG_NEXT_BRIDGE_LOGO,
} from "@/assets/img";
import Img from "@/components/helper/Img";
import Script from "next/script";

function CountCard({ amount = "", label = "", amountSuffix = "" }) {
  return (
    <div className="p-5 text-center flex-shrink-0 w-1/3 ">
      <h1 className="text-2xl md:text-[56px] font-bold">
        <span className="" data-count={amount} data-count-ms="100"></span>
        <span>{amountSuffix}</span>
      </h1>
      <p className="text-sm lg:mt-3 md:text-lg">{label}</p>
    </div>
  );
}

export default function SectionWeBelieve() {
  return (
    <>
      <section id="we-believe">
        <div className="my-container text-white">
          <div className="max-w-[1316px] py-10 lg:py-40 mx-auto">
            <div className="text-center lg:mt-26">
              <hgroup
                data-aos
                className="titles leading-[0.8] lg:leading-tight text-4xl lg:text-[96px]"
              >
                <h1 className="flex justify-center flex-col md:flex-row  mb-4 lg:mb-0 gap-2 items-center ">
                  <span className="  mt-8">We believe that </span>{" "}
                  <Img
                    src={IMG_NEX_BRIDGE_WHITE_LOGO.src}
                    className="inline-block h-[50px] lg:h-[115px]"
                    alt=""
                  />
                </h1>
                {/* <h1 className="flex justify-center gap-5 items-center ">
                <span className="leading-[0.8] mt-8 flex-shrink-0">We believe that </span> <Img src={IMG_NEX_BRIDGE_WHITE_LOGO.src} className="inline-block h-[30px] lg:h-[115px]" alt="" />
              </h1> */}
                <h1 className="">
                  can{" "}
                  <span className="we-believe-change-text font-bold">
                    {" "}
                    Change{" "}
                  </span>
                  the world.
                </h1>
              </hgroup>
              <div className="max-w-[883px] mx-auto my-12">
                <p className="">
                  NexBridge is a digital asset issuer, forging a link between
                  traditional finance and digital assets. We empower investors
                  with access to a new spectrum of tokenized investment
                  opportunities, while enabling asset owners to penetrate global
                  liquid capital markets.
                </p>
              </div>

              <div className="mt-20 stat-root">
                <div className="flex items-center">
                  <CountCard
                    amount={"500"}
                    amountSuffix="+"
                    label="successful Project"
                  />
                  <hr className="line flex-1 hidden md:block"></hr>
                  <CountCard
                    amount={"98"}
                    amountSuffix="%"
                    label="Satisfied Client"
                  />
                  <hr className="line flex-1 hidden md:block"></hr>
                  <CountCard
                    amount="5"
                    amountSuffix="+"
                    label="Handled Countries"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="/js/statanimate.js" defer strategy="lazyOnload"></Script>
    </>
  );
}
