import React from "react";
import Img from "../helper/Img";
import { NAVBAR_MENU_DATA } from "./Navbar";
import GradientBorderButton from "../shared/buttons/GradientBorderButton";

type Props = {};

function Footer({}: Props) {
  return (
    <section className="my-container sm:mx-5 lg:mx-auto">
      <div className="my-container">
        <div className="flex gap-10 lg:gap-20 flex-col xl:flex-row">
          <div className="w-full pt-8 flex flex-col justify-between">
            <Img
              src="/logo.svg"
              alt="logo"
              className="max-w-[300px] md:max-w-[350px] 2xl:max-w-[491px]"
            />
          </div>

          <GradientBorderButton
            className="h-max w-max whitespace-nowrap px-4 py-2 [--border-width:1.5px] font-semibold text-white text-sm 2xl:text-base no-animation rounded-md uppercase lg:mt-20"
            variant="minimal"
          >
            Private Access
          </GradientBorderButton>

          <div className="lg:min-w-max">
            <h5 className="text-[20px] md:heading-6 mb-2">Explore</h5>
            <ul className="opacity-75 text-[16px]/tight 2xl:text-[20px] flex flex-row flex-wrap  md:flex-col">
              {NAVBAR_MENU_DATA.map((d, i) => (
                <li key={`nav-menu-${i}`} className="py-2 lg:py-1 px-3 lg:px-0">
                  <a href="#">{d.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-[20px] md:heading-6">Newsletter</p>
            <p className="text-[14px]/[1.2] sm:text-base/tight lg:text-base/tight 2xl:text-[20px]/[30px]  opacity-75 font-light">
              Subscribe to our newsletter to stay informed about our latest
              products, services, and promotions. Feel free to unsubscribe
              anytime!
            </p>

            <div className="w-full flex items-center gap-2 bg-darkBlue rounded-[5px] border border-white px-6 py-3 2xl:py-4">
              <input
                placeholder="Enter Your Email Address ..."
                type="email"
                className="w-full bg-transparent placeholder:text-white placeholder:opacity-75 font-light focus:outline-none"
              />
              <button className="">
                <Img src="/arrow-right-bold.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-white border-opacity-50 flex flex-col text-center lg:text-start lg:flex-row items-center justify-between">
          <p className="text-[14px] leading-[17px] md:heading-8 opacity-50 mt-3 font-light">
            Copyright © 2023 for WaveNet. All rights reserved.
          </p>
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
