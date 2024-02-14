import { IMG_NEXT_BRIDGE_LOGO } from "@/assets/img";
import Image from "next/image";

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
      <nav className="text-white py-5 fixed bg-transparent w-full">
        <div className="my-container">
          <div className="flex items-center">
            <div className="">
              <Image src={IMG_NEXT_BRIDGE_LOGO} className="mb-5" alt="nex-bridge-logo" />
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
              <button className="p-2 px-4 border rounded-md">Sign in</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
