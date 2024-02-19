import React from "react";
import Img from "../helper/Img";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[url('/footer-wireframe.svg')] bg-cover bg-center">
        <div className="relative pt-32 pb-64 my-container mx-auto flex flex-col justify-center">
          <div className="absolute w-[30px] h-[30px] bg-[#19476C] top-0 right-1/4"></div>
          <div className="absolute w-[77px] h-[77px] bg-[#19476C] bottom-20 left-[15%]"></div>
          <div className="absolute w-[30px] h-[30px] bg-[#D9D9D9] bottom-0 right-0"></div>
          <span className="text-start heading-3 font-medium">
            <p>What to connect?</p>
            <p>
              let&apos;s{" "}
              <span className="heading-4 font-light italic">start now.</span>
            </p>
          </span>
          <button className="w-max flex items-center gap-3 mt-10 py-5 px-10 rounded-[15px] border border-white">
            <p className="font-semibold">Contact us</p>
            <svg
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="my-container mx-auto">
        <div className="flex gap-20">
          <div className="w-full flex flex-col justify-between">
            <Img
              src="/logo.svg"
              alt="logo"
              className="-ml-[30px] max-w-[491px]"
            />

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
        <div className="mt-5 border-t border-white border-opacity-50 flex items-center justify-between">
          <p className="heading-8 opacity-50 mt-3 font-light">
            Copyright © 2023 for WaveNet. All rights reserved.
          </p>
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
