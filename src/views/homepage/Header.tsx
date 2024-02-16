import { ICON_RIGHT_ARROW } from "@/assets/icon";
import Img from "@/components/helper/Img";

export default function Header() {
  return (
    <header className="header p-2 min-h-screen relative isolate" id="homepage-header">
      <div className="absolute object-cover h-full -z-[1]">
        <video autoPlay controls={false} playsInline muted loop>
          <source src={"/vid/111.webm"} />
        </video>
      </div>
      <div className="my-container text-white">
        <div className="mt-[300px]">
          <h1 className="leading-tight text-center">
            <span className="text-[51px] uppercase">Gateway to a </span>
            <span className="text-[102px] font-monument blue-gradient-text">New</span>
            <span className="text-[102px] block font-monument blue-gradient-text">Financial Era</span>
          </h1>
          <h5 className="text-[33px] uppercase text-center">
            {" "}
            <span className="">For</span> <span className="italic blue-gradient-text">Entrepreneurs</span>{" "}
          </h5>
          <div className="text-center mt-8">
            {/* //TODO: Style Button Perfectly */}
            <button className="border-[2px] uppercase px-5 bg-[#00101C10] border-sky-300/50 py-4 rounded-lg">
              Explore Now <Img src={ICON_RIGHT_ARROW.src} alt="" className="inline-block ms-2" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
