import { IMG_NEXBRIDGE_WHITE_LOGO as IMG_NEX_BRIDGE_WHITE_LOGO, IMG_NEXT_BRIDGE_LOGO } from "@/assets/img";
import Img from "@/components/helper/Img";

function CountCard({ amount = "", label = "" }) {
  return (
    <div className="p-5 text-center flex-shrink-0 ">
      <h1 className="text-[56px] font-bold">{amount}</h1>
      <p className="text-lg">{label}</p>
    </div>
  );
}

export default function SectionWeBelieve() {
  return (
    <section id="we-believe">
      <div className="my-container text-white">
        <div className="max-w-[1316px] py-40 mx-auto">
          <div className="text-center mt-52">
            <hgroup className="titles text-[96px]">
              <h1 className="flex justify-center gap-5 items-center ">
                <span className="leading-[0.8] mt-8">We believe that </span> <Img src={IMG_NEX_BRIDGE_WHITE_LOGO.src} className="inline-block h-[115px]" alt="" />
              </h1>
              <h1 className="">
                can <span className="we-believe-change-text font-bold"> Change </span>the world.
              </h1>
            </hgroup>
            <div className="max-w-[883px] mx-auto my-12">
              <p className="">
                NexBridge is a digital asset issuer, forging a link between traditional finance and digital assets. We empower investors with access to a new spectrum of tokenized investment
                opportunities, while enabling asset owners to penetrate global liquid capital markets.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-center">
              <CountCard amount={"500+"} label="successful Project" />
              <hr className="line flex-1"></hr>
              <CountCard amount={"98%"} label="Satisfied Client" />
              <hr className="line flex-1"></hr>
              <CountCard amount={"35+"} label="Handled Countries" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
