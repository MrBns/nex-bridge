import { IMG_RESHAPPING_BACKGROUND } from "@/assets/img";
import Img from "@/components/helper/Img";
import Script from "next/script";
import BrandSlider from "./BrandSlider";

function CountCard({ amount = "", label = "", amountSuffix = "" }) {
  return (
    <div className="p-5 text-center flex-shrink-0 w-1/3 lg:w-fit ">
      <h1 className="text-2xl md:text-[56px] font-bold">
        <span className="" data-count={amount} data-count-ms="100"></span>
        <span>{amountSuffix}</span>
      </h1>
      <p className="text-sm lg:mt-3 md:text-lg">{label}</p>
    </div>
  );
}

export default function SectionReshaping() {
  return (
    <>
      <section
        id="we-believe"
        className="relative isolate w-full overflow-x-hidden lg:overflow-visible"
      >
        {/* background effect */}
        <div className="absolute w-full -z-10" draggable={false}>
          <Img
            src={IMG_RESHAPPING_BACKGROUND.src}
            className="w-[200%] max-w-none  lg:w-full select-none"
            alt=""
            draggable={false}
          />
        </div>

        {/* logos slider */}
        <BrandSlider />

        <div className="my-container text-white">
          <div className="max-w-[1316px] py-10 lg:py-40 mx-auto">
            <div className="text-center lg:mt-26">
              <hgroup
                data-aos
                className="lg:leading-tight text-3xl  2xl:leading-[81px] lg:text-[44px] 2xl:text-[64px]"
              >
                <h1 className="mt-8 mb-4 leading-[0.98em] font-light gap-2 items-center">
                  Reshaping the financial landscape
                  <span className="lg:block"></span> for a world, where finance
                  is
                </h1>
                <h1 className="leading-none font-semibold">
                  Accessible, Efficient and Universal
                </h1>
              </hgroup>
              <div className="max-w-[883px] mx-auto my-12">
                <p id="typedtext"></p>
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
      <Script src="/js/typedtext.js" defer strategy="lazyOnload"></Script>
    </>
  );
}
