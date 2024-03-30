import { IMG_RESHAPPING_BACKGROUND } from "@/assets/img";
import Img from "@/components/helper/Img";
import Script from "next/script";
import BrandSlider from "./BrandSlider";

function CountCard({ amount = "", label = "", amountSuffix = "" }) {
  return (
    <div className="lg:p-5 text-center flex-1 w-1/3 lg:w-fit ">
      <h1 className="text-lg md:text-[56px] font-bold">
        <span className="" data-count={amount} data-count-ms="100"></span>
        <span>{amountSuffix}</span>
      </h1>
      <p className="text-[7px] lg:mt-3 md:text-lg">{label}</p>
    </div>
  );
}

export default function SectionReshaping() {
  return (
    <>
      <section id="we-believe" className="relative isolate w-full overflow-x-hidden lg:overflow-visible">
        {/* background effect */}
        <div className="absolute top-[10%] lg:top-0 w-full -z-10" draggable={false}>
          <Img src={IMG_RESHAPPING_BACKGROUND.src} className="w-full select-none" alt="" draggable={false} />
        </div>

        {/* logos slider */}
        <BrandSlider />

        <div className="my-container text-white">
          <div className="max-w-[1316px] py-10 lg:py-40 mx-auto">
            <div className="text-center lg:mt-26">
              <hgroup data-aos className="lg:leading-tight text-lg  2xl:leading-[81px] lg:text-[44px] 2xl:text-[64px]">
                <h1 className="mt-8 mb-4 leading-none font-light gap-2 items-center">
                  Reshaping the financial landscape
                  <span className="lg:block"></span> for a world, where finance is
                </h1>
                <h1 className="leading-none font-semibold">Accessible, Efficient and Universal</h1>
              </hgroup>
              <div className="max-w-[300px] lg:max-w-[883px] mx-auto my-5 lg:my-12">
                <p id="typedtext" className="text-[10px] md:text-sm lg:text-base"></p>
              </div>

              <div className=" mt-5 lg:mt-20 stat-root">
                <div className="flex items-center">
                  <CountCard amount={"500"} amountSuffix="+" label="successful Project" />
                  <hr className="line flex-1"></hr>
                  <CountCard amount={"98"} amountSuffix="%" label="Satisfied Client" />
                  <hr className="line flex-1"></hr>
                  <CountCard amount="5" amountSuffix="+" label="Handled Countries" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="/js/statanimate.js" defer strategy="afterInteractive"></Script>
      <Script src="/js/typedtext.js" defer strategy="afterInteractive"></Script>
    </>
  );
}
