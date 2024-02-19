import { IMG_NEXT_BRIDGE_LOGO } from "@/assets/img";
import Image from "next/image";
import Script from "next/script";
import "./navbar.effect";
import GradientBorderButton from "../shared/buttons/GradientBorderButton";

type TProps = {};

const NAVBAR_MENU_DATA = [
  {
    name: "About Us",
    onClick: () => {},
    slug: "about-us",
  },
  {
    name: "Services",
    onClick: () => {},
    slug: "services",
  },
  {
    name: "Pricing",
    onClick: () => {},
    slug: "pricing",
  },
  {
    name: "Blog",
    onClick: () => {},
    slug: "blog",
  },
  {
    name: "Contact",
    onClick: () => {},
    slug: "contact",
  },
];

export default function Navbar(props: TProps) {
  return (
    <>
      {/* <Script src={new URL("./navbar.effect.ts").pathname} strategy="afterInteractive" /> */}
      <nav id="main-navbar" className="text-white  fixed  w-full z-[100]">
        <div className="my-container">
          <div className="flex items-center">
            <div className="">
              <a href="/#" className="block">
                <Image
                  src={IMG_NEXT_BRIDGE_LOGO}
                  className="mb-5"
                  alt="nex-bridge-logo"
                />
              </a>
            </div>
            <div className="flex-1 ">
              <ul className="flex justify-center">
                {NAVBAR_MENU_DATA.map((data, index) => (
                  <li key={`${index}-${data.slug}`} className="p-4">
                    <a href="" className="">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <GradientBorderButton
                className="px-4 py-2 [--border-width:2px] rounded-md uppercase"
                variant="minimal"
              >
                Sign In
              </GradientBorderButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
