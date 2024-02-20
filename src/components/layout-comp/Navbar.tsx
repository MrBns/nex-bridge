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

            <div className="ms-auto flex-shrink-0 me-2 md:hidden">
              <button id="navbar-toggle-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="navbar-menu-el"
              className="flex-1  hidden md:block fixed md:static w-full h-full left-0 lg:w-auto lg:h-auto top-0 bg-darkBlue md:bg-transparent z-50"
            >
              <ul className="flex flex-col md:flex-row p-10 md:p-0 justify-center">
                {NAVBAR_MENU_DATA.map((data, index) => (
                  <li key={`${index}-${data.slug}`} className="p-4">
                    <a href="" className="text-4xl md:text-base text-center block md:inline-block">
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="md:hidden mt-5">
                  <button
                    id="navbar-menu-close-button"
                    className="text-4xl w-full bg-red-500/10 py-3 rounded-2xl lg:text-base text-red-100 text-center block "
                  >
                    Go Back
                  </button>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <GradientBorderButton
                className="px-4 py-2 [--border-width:2px] font-semibold text-white no-animation rounded-md uppercase"
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
