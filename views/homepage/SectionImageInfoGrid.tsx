import { ADMIN_URL } from "@/lib/config/url";
import { IStaticAssetResponse } from "@/lib/types/strapi-api/static-asset-all";
import React from "react";
import Img from "../../components/helper/Img";
import { IMG_IMAGE_GRID_1, IMG_IMAGE_GRID_2, IMG_IMAGE_GRID_3 } from "@/assets/img";

type Props = {};

async function SectionImageInfoGrid({}: Props) {
  //Loading Static Assets only header_bg_vid field;
  const assets: IStaticAssetResponse<["home_info_vid1", "home_info_vid2", "home_info_vid3"]> = await (
    await fetch(`${ADMIN_URL}/api/static-asset?populate[0]=home_info_vid1&populate[1]=home_info_vid2&populate[2]=home_info_vid3`)
  ).json();

  return (
    <section id="image-grid" className="relative">
      <div className="background-glow absolute w-full h-full z-[2]"></div>
      <div className="my-container pb-20 sm:pb-32 flex flex-col gap-10 sm:gap-20 lg:gap-32 z-[20] relative">
        <div className="w-full grid sm:grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative border border-[#ffffff30] h-[200px] lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            <Img className="absolute object-cover w-full h-full" src={IMG_IMAGE_GRID_1.src} alt="office" />
            {/* <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={ADMIN_URL + assets?.data?.attributes?.home_info_vid1?.data?.attributes?.url} />
            </video> */}
            <p className="text-[30px]/[35px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              future is
              <br />
              <span className="font-medium">
                inclusive,
                <br />
                innovative.
              </span>
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[37px]/[48px]">
            With NexBridge,{" "}
            <span className="text-[16px] lg:text-[37px] font-bold">
              the financial future is inclusive, innovative, and filled with limitless possibilities
            </span>{" "}
            for growth and economic prosperity.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative border border-[#ffffff30] h-[200px] lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            <Img className="absolute object-cover w-full h-full" src={IMG_IMAGE_GRID_2.src} alt="innovation" />

            {/* <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={ADMIN_URL + assets?.data?.attributes?.home_info_vid2?.data?.attributes?.url} />
            </video> */}

            <p className="text-[30px]/[35px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              <span className="font-medium">cuting-edge technology and financial innovation</span> comes together.
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[37px]/[48px]">
            Where <span className="text-[16px] lg:text-[37px] font-bold">cuting-edge technology and financial innovation come together</span> to chart
            the path toward a barrier-free economic future.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 items-center gap-3 sm:gap-10 lg:gap-20">
          <div className="flex items-center relative border border-[#ffffff30] h-[200px] lg:h-[325px] overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[33px]">
            <Img className="absolute object-cover w-full h-full" src={IMG_IMAGE_GRID_3.src} alt="global" />

            {/* <video
              className="absolute w-full h-full object-cover rounded-[10px] md:rounded-[20px] lg:rounded-[33px]"
              autoPlay
              controls={false}
              playsInline
              muted
              loop
            >
              <source src={ADMIN_URL + assets?.data?.attributes?.home_info_vid3?.data?.attributes?.url} />
            </video> */}

            <p className="text-[30px]/[35px] lg:text-[50px]/[50px] font-thin z-[20] py-5 md:py-10 lg:py-0 px-5 lg:px-10">
              connecting
              <br />
              <span className="font-medium">local dreams with global capital.</span>
            </p>
          </div>
          <p className="text-[15px]/[24px] lg:text-[37px]/[48px]">
            <span className="text-[16px] lg:text-[37px] font-bold">Not just global markets</span> we transform the Salvadoran financial landscape,{" "}
            <span className="text-[16px] lg:text-[37px] font-bold">connecting local dreams with global capital</span> , in a symphony of progress and
            opportunity{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionImageInfoGrid;
