"use client";

import { IMG_EL_SALVADOR_STATIC_FLAG } from "@/assets/img";
import Img from "../helper/Img";

type TProps = {};

export default function SvgMapHighlight(props: TProps) {
  return (
    <svg
      width="100%"
      // height=""
      viewBox="0 0 1341 670"
      fill="none"
      id="map-svg-highlight-circle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M744.548 334.939C744.548 344.795 736.467 353.902 722.977 360.586C709.53 367.25 690.905 371.39 670.295 371.39C649.686 371.39 631.061 367.25 617.613 360.586C604.124 353.902 596.043 344.795 596.043 334.939C596.043 325.084 604.124 315.976 617.613 309.292C631.061 302.629 649.686 298.488 670.295 298.488C690.905 298.488 709.53 302.629 722.977 309.292C736.467 315.976 744.548 325.084 744.548 334.939Z"
        fill="#8350DF"
        fillOpacity="0.04"
        stroke="url(#paint0_linear_210_2)"
        strokeWidth="1.35004"
        className="scale-animate"
      />
      <path
        d="M699.996 338.314C699.996 342.387 696.606 346.264 690.687 349.163C684.812 352.041 676.649 353.839 667.595 353.839C658.542 353.839 650.379 352.041 644.504 349.163C638.585 346.264 635.194 342.387 635.194 338.314C635.194 334.241 638.585 330.364 644.504 327.465C650.379 324.587 658.542 322.789 667.595 322.789C676.649 322.789 684.812 324.587 690.687 327.465C696.606 330.364 699.996 334.241 699.996 338.314Z"
        fill="#1C75BC"
        stroke="#1C75BC"
        strokeWidth="1.35004"
        className="scale-animate"
      />
      <path
        d="M930.853 334.938C930.853 370.52 901.916 402.915 854.714 426.455C807.552 449.975 742.351 464.542 670.295 464.542C598.24 464.542 533.039 449.975 485.877 426.455C438.674 402.915 409.737 370.52 409.737 334.938C409.737 299.357 438.674 266.962 485.877 243.421C533.039 219.901 598.24 205.334 670.295 205.334C742.351 205.334 807.552 219.901 854.714 243.421C901.916 266.962 930.853 299.357 930.853 334.938Z"
        fill="#8350DF"
        fillOpacity="0.04"
        stroke="url(#paint1_linear_210_2)"
        strokeWidth="1.35004"
        className="scale-animate"
      />
      <path
        d="M1339.92 334.938C1339.92 426.813 1265.19 510.172 1143.96 570.604C1022.78 631.014 855.31 668.398 670.295 668.398C485.28 668.398 317.814 631.014 196.626 570.604C75.3975 510.172 0.675021 426.813 0.675021 334.938C0.675021 243.064 75.3975 159.704 196.626 99.2733C317.814 38.8625 485.28 1.47824 670.295 1.47824C855.31 1.47824 1022.78 38.8625 1143.96 99.2733C1265.19 159.704 1339.92 243.064 1339.92 334.938Z"
        fill="#8350DF"
        fillOpacity="0.04"
        stroke="url(#paint2_linear_210_2)"
        strokeWidth="1.35004"
        className="scale-animate"
      />

      <rect className="flag" x="504" y="88" width="327" height="186" rx="28" fill="#1C75BC" />
      <foreignObject className="flag" x="508" y="92" width="320" height="178" rx="25">
        <video width={"100%"} autoPlay muted loop playsInline className="rounded-3xl" poster={IMG_EL_SALVADOR_STATIC_FLAG.src}>
          <source src="/vid/el-slavador-flag.mp4" type="video/mp4" />
        </video>
      </foreignObject>

      <path
        className="flag-below-arrow-sign"
        d="M669.891 334.476C668.852 336.276 666.253 336.276 665.214 334.476L645.338 300.05C644.299 298.25 645.598 296 647.677 296L687.428 296C689.507 296 690.806 298.25 689.767 300.05L669.891 334.476Z"
        fill="white"
      />

      <defs>
        <linearGradient id="paint0_linear_210_2" x1="670.295" y1="297.813" x2="765.408" y2="353.843" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C75BC" />
          <stop offset="1" stopColor="#1C75BC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_210_2" x1="670.295" y1="204.659" x2="1003" y2="399.392" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C75BC" />
          <stop offset="1" stopColor="#1C75BC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_210_2" x1="1220.44" y1="561.288" x2="-319.5" y2="194.463" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C75BC" />
          <stop offset="1" stopColor="#1C75BC" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
