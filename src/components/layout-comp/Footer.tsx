import React from "react";
import Img from "../helper/Img";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="my-container mx-5 lg:mx-auto">
      <div className="flex gap-10 lg:gap-20 flex-col xl:flex-row">
        <div className="w-full flex flex-col justify-between">
          <Img
            src="/logo.svg"
            alt="logo"
            className="-ml-[20px] lg:-ml-[30px] max-w-[300px] md:max-w-[491px]"
          />

          <div className="mt-10 lg:mt-auto flex items-center gap-5">
            <a href="#">
              <Img
                className="w-[32px] md:w-auto"
                src="/insta.svg"
                alt="instagram"
              />
            </a>
            <a href="#">
              <Img
                className="w-[32px] md:w-auto"
                src="/fb.svg"
                alt="facebook"
              />
            </a>
            <a href="#">
              <Img
                className="w-[32px] md:w-auto"
                src="/twitter.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="space-y-5">
            <p className="text-[20px] md:heading-6">Explore</p>
            <ul className="opacity-75 text-[16px] leading-[19px] md:text-[20px] md:leading-[30px] flex flex-col gap-3">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <p className="text-[20px] md:heading-6">Contact</p>
            <ul className="opacity-75  text-[16px] leading-[19px] md:text-[20px] md:leading-[30px] flex flex-col gap-3">
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-[20px] md:heading-6">Newsletter</p>
          <p className="text-[14px] leading-[17px] md:text-[20px] md:leading-[30px] opacity-75 font-light">
            Subscribe to our newsletter to stay informed about our latest
            products, services, and promotions. Feel free to unsubscribe
            anytime!
          </p>

          <div className="w-full flex items-center gap-2 bg-darkBlue rounded-[5px] border border-white px-6 py-4">
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
  );
}

export default Footer;
