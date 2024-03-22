import { IMG_NEXBRIDGE_WHITE_LOGO } from "@/assets/img";
import Image from "next/image";
import "./navbar.effect";
import GradientBorderButton from "../shared/buttons/GradientBorderButton";
import Link from "next/link";

type TProps = {};

export const NAVBAR_MENU_DATA = [
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
    name: "Issuances",
    onClick: () => {},
    slug: "/issuances",
  },
  {
    name: "Blog",
    onClick: () => {},
    slug: "/blogs",
  },
  {
    name: "Contact",
    onClick: () => {},
    slug: "/contact",
  },
];

export default function Navbar(props: TProps) {
  return (
    <>
      {/* <Script src={new URL("./navbar.effect.ts").pathname} strategy="afterInteractive" /> */}
      <nav id="main-navbar" className="text-white fixed  w-screen z-[100]">
        <div className="my-container">
          <div className="flex items-center">
            <div className="">
              <a href="/#" className="block">
                <Image src={IMG_NEXBRIDGE_WHITE_LOGO} className="mb-5 w-[200px]  2xl:w-[260px]" alt="nex-bridge-logo" />
              </a>
            </div>

            <div className="ms-auto flex-shrink-0 me-2 lg:hidden">
              <button id="navbar-toggle-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="navbar-menu-el"
              className="flex-1  hidden lg:block absolute lg:static w-full h-screen left-0 lg:w-auto lg:h-auto top-0 bg-black lg:bg-transparent z-50"
            >
              <ul className="flex flex-col lg:flex-row p-10 lg:p-0 justify-center">
                {NAVBAR_MENU_DATA.map((data, index) => (
                  <li key={`${index}-${data.slug}`} className="p-4">
                    <Link href={data.slug} className="text-4xl navbar-menu-link uppercase md:text-sm 2xl:text-base text-center block lg:inline-block">
                      {data.name}
                    </Link>
                  </li>
                ))}
                <li className="lg:hidden mt-5">
                  <button
                    id="navbar-menu-close-button"
                    className="text-xl w-full  py-3 rounded-2xl lg:text-base text-[#0F75BC] text-center flex items-center justify-center gap-5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Go Back
                  </button>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <Link href="/coming-soon">
                <GradientBorderButton
                  className="px-4 py-2 [--border-width:1.5px] font-semibold text-white text-sm 2xl:text-base no-animation rounded-md uppercase"
                  variant="minimal"
                >
                  Private Access
                </GradientBorderButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
