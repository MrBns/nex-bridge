import React from "react";
import ArrowIcon from "../assets/ArrowIcon";
import Img from "./helper/Img";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[url('/footer-wireframe.svg')] bg-cover bg-center">
        <div className="relative pt-32 pb-48 my-container mx-auto flex flex-col items-center justify-center">
          <div className="absolute w-[30px] h-[30px] bg-[#1C75BC] top-0 right-1/4"></div>
          <div className="absolute w-[77px] h-[77px] bg-[#1C75BC] bottom-20 left-[15%]"></div>
          <div className="absolute w-[30px] h-[30px] bg-[#D9D9D9] bottom-0 right-0"></div>
          <span className="text-center heading-3 font-medium">
            <p>Need IT Solutions?</p>
            <p>
              let&apos;s <span className="heading-4 font-light italic">start now.</span>
            </p>
          </span>
          <button className="flex items-center gap-3 uppercase mt-10 bg-darkBlue py-5 px-10 rounded-[15px] border border-white">
            <p>GET FREE CONSULTATION</p>
            <ArrowIcon color="white" />
          </button>
        </div>
      </div>
      <div className="my-container mx-auto">
        <div className="flex gap-20">
          <div className="w-full flex flex-col justify-between">
            <Img src="/logo.svg" alt="logo" className="-ml-[30px] max-w-[491px]" />

            <div className="flex items-center gap-5">
              <a href="#">
                <Img src="/insta.svg" alt="instagram" />
              </a>
              <a href="#">
                <Img src="/fb.svg" alt="facebook" />
              </a>
              <a href="#">
                <Img src="/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="space-y-5">
            <p className="heading-6">Explore</p>
            <ul className="opacity-75 text-[20px] leading-[30px] flex flex-col gap-3">
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
            <p className="heading-6">Contact</p>
            <ul className="opacity-75 text-[20px] leading-[30px] flex flex-col gap-3">
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
          <div className="space-y-5">
            <p className="heading-6">Newsletter</p>
            <p className="text-[20px] leading-[30px] opacity-75 font-light">
              Subscribe to our newsletter to stay informed about our latest products, services, and promotions. Feel free to unsubscribe anytime!
            </p>

            <div className="w-full flex items-center gap-2 bg-darkBlue rounded-[5px] border border-white px-6 py-4">
              <input placeholder="Enter Your Email Address ..." type="email" className="w-full bg-transparent placeholder:text-white placeholder:opacity-75 font-light focus:outline-none" />
              <button className="">
                <Img src="/arrow-right-bold.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 border-t border-white border-opacity-50 flex items-center justify-between">
          <p className="heading-8 opacity-50 mt-3 font-light">Copyright © 2023 for WaveNet. All rights reserved.</p>
          <ul className="heading-8 opacity-50 mt-3 font-light flex items-center gap-3">
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
    </div>
  );
}

export default Footer;
