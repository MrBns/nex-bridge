import React from "react";
import Img from "../helper/Img";
import GradientBorderButton from "../shared/buttons/GradientBorderButton";
import { FACEBOOK_ICON, IMG_NEXBRIDGE_WHITE_LOGO, INSTAGRAM_ICON, TWITTER_ICON } from "@/assets/img";

type Props = {};

export const FOOTER_LINKS = [
  {
    name: "Home",
    onClick: () => {},
    slug: "/",
  },
  {
    name: "About us",
    onClick: () => {},
    slug: "/about",
  },
  {
    name: "Vision",
    onClick: () => {},
    slug: "/vision",
  },
  {
    name: "Issuance",
    onClick: () => {},
    slug: "/issuances",
  },
  {
    name: "Contact",
    onClick: () => {},
    slug: "/contact",
  },
  {
    name: "Legal Documentation",
    onClick: () => {},
    slug: "/coming-soon",
  },
];

function Footer({}: Props) {
  return (
    <section className="my-container sm:mx-5 lg:mx-auto pb-5 border-t sm:border-t-0">
      <div className="my-container">
        <div className="flex gap-10 lg:gap-20 flex-col xl:flex-row pb-5">
          <div className="w-full pt-8 flex items-center sm:items-start flex-col justify-between gap-10">
            <Img src={IMG_NEXBRIDGE_WHITE_LOGO.src} alt="logo" className="ml-4 sm:-ml-5 max-w-[250px] md:max-w-[350px] 2xl:max-w-[400px]" />

            <div className="flex items-center gap-10 sm:gap-20 justify-between">
              <a href="#">
                <Img className="w-[30px]" src={INSTAGRAM_ICON.src} alt="instagram" />
              </a>
              <a href="#">
                <Img className="w-[40px]" src={FACEBOOK_ICON.src} alt="facebook" />
              </a>
              <a href="#">
                <Img className="w-[30px]" src={TWITTER_ICON.src} alt="twitter" />
              </a>
            </div>
          </div>

          <GradientBorderButton
            className="hidden sm:block h-max w-max whitespace-nowrap px-4 py-2 [--border-width:1.5px] font-semibold text-white text-sm 2xl:text-base no-animation rounded-md uppercase lg:mt-20"
            variant="minimal"
          >
            Private Access
          </GradientBorderButton>

          <div className="lg:min-w-max hidden sm:block">
            <h5 className="text-[20px] md:heading-6 mb-2">Explore</h5>
            <ul className="opacity-75 text-[16px]/tight 2xl:text-[18px] flex flex-row flex-wrap  md:flex-col">
              {FOOTER_LINKS.map((d, i) => (
                <li key={`nav-menu-${i}`} className="py-2 lg:py-1 px-3 lg:px-0">
                  <a href="#">{d.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="space-y-5 hidden sm:block">
            <p className="text-[20px] md:heading-6">Newsletter</p>
            <p className="text-[14px]/[1.2] sm:text-base/tight lg:text-base/tight 2xl:text-[20px]/[30px]  opacity-75 font-light">
              Subscribe to our newsletter to stay informed about our latest products, services, and promotions. Feel free to unsubscribe anytime!
            </p>

            <div className="w-full group flex items-center gap-2 bg-darkBlue focus-within:bg-black rounded-[5px] border border-white px-6 py-3 2xl:py-4">
              <input
                placeholder="Enter Your Email Address ..."
                type="email"
                className="w-full bg-transparent placeholder:text-white placeholder:opacity-75 placeholder:font-normal font-semibold focus:outline-none"
              />
              <button className="">
                <Img src="/arrow-right-bold.svg" className="group-focus-within:translate-x-2 transition-all" alt="arrow" />
              </button>
            </div>
          </div> */}
        </div>

        <div className="hidden sm:flex mt-5 border-t border-white border-opacity-50 flex-col text-center lg:text-start lg:flex-row items-center justify-between">
          <p className="text-[14px] leading-[17px] md:heading-8 opacity-50 mt-3 font-light">Copyright © 2023 for Nexbridge. All rights reserved.</p>
          <ul className="text-[14px] leading-[17px] md:heading-8 opacity-50 mt-3 font-light flex items-center gap-3">
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <p>|</p>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
