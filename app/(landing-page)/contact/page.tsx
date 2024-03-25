import { Space_Grotesk } from "next/font/google";
import Img from "../../../components/helper/Img";
import { CONTACT_BUILDING_IMAGE, IMG_NEXBRIDGE_WHITE_LOGO, IMG_WANT_TO_CONNECT_WAVE } from "../../../assets/img";

const font = Space_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main className="min-h-screen pt-20">
      <header id="" className="my-container mt-32">
        <h1 className={`${font.className} text-[71px]/[71px] font-bold`}>Contact</h1>
      </header>
      <section className="my-container flex items-end justify-between gap-10">
        <p className={`${font.className} text-[40px] font-bold shrink-0`}>Let&apos;s get in touch!</p>

        <div className="w-full flex items-center justify-end gap-5 mt-20">
          <div className="rounded-[17px] bg-gradient-to-b from-[#144064] to-[#012644] py-5 px-8 w-full max-w-[260px]">
            <div className="w-[46px] h-[46px] rounded-full border-t border-t-[#FFFFFF20] border-l border-l-[#FFFFFF20] border-r border-r-[#FFFFFF20] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_817_277)">
                  <path
                    d="M15.5856 12.693C14.543 11.8013 13.4849 11.2611 12.455 12.1515L11.8401 12.6897C11.3902 13.0803 10.5536 14.9056 7.31935 11.185C4.08572 7.46912 6.01 6.89056 6.46059 6.50328L7.0789 5.96445C8.10334 5.07202 7.71673 3.94857 6.97786 2.79211L6.53199 2.09164C5.78975 0.937876 4.98151 0.180152 3.95438 1.07124L3.39939 1.55618C2.94543 1.88688 1.67649 2.96184 1.36869 5.00399C0.998242 7.4543 2.16682 10.2602 4.84411 13.339C7.51804 16.419 10.1361 17.9661 12.616 17.9392C14.677 17.917 15.9217 16.811 16.311 16.4089L16.868 15.9233C17.8925 15.0329 17.256 14.1263 16.2127 13.2325L15.5856 12.693Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_817_277">
                    <rect width="17.2593" height="17.2593" fill="white" transform="translate(0.713867 0.680595)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className="text-[11px]/[18px] font-semibold mt-7">Phone</p>
            <a href="tel:+50322734255" className="text-[17px]/[23px] font-bold mt-2">
              +503 227 342 55
            </a>
          </div>
          <div className="rounded-[17px] bg-gradient-to-b from-[#144064] to-[#012644] py-5 px-8 w-full max-w-[357px]">
            <div className="w-[46px] h-[46px] rounded-full border-t border-t-[#FFFFFF20] border-l border-l-[#FFFFFF20] border-r border-r-[#FFFFFF20] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_817_285)">
                  <path
                    d="M16.0754 3.2425H1.84994C1.01182 3.2425 0.333008 3.92553 0.333008 4.75943V13.861C0.333008 14.6999 1.01681 15.3779 1.84994 15.3779H16.0754C16.9065 15.3779 17.5923 14.7027 17.5923 13.861V4.75943C17.5923 3.92701 16.9162 3.2425 16.0754 3.2425ZM15.8629 4.25379C15.553 4.56206 10.2194 9.86754 10.0353 10.0507C9.74875 10.3372 9.36783 10.495 8.96264 10.495C8.55746 10.495 8.17654 10.3372 7.88906 10.0498C7.76521 9.92656 2.49052 4.67968 2.06237 4.25379H15.8629ZM1.34429 13.6552V4.9659L5.71433 9.31291L1.34429 13.6552ZM2.06301 14.3666L6.43133 10.0261L7.17493 10.7658C7.65246 11.2433 8.28734 11.5063 8.96264 11.5063C9.63795 11.5063 10.2728 11.2433 10.7494 10.7667L11.494 10.0261L15.8623 14.3666H2.06301ZM16.581 13.6552L12.211 9.31291L16.581 4.9659V13.6552Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_817_285">
                    <rect width="17.2593" height="17.2593" fill="white" transform="translate(0.332031 0.680595)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className="text-[11px]/[18px] font-semibold mt-7">Email</p>
            <a href="mailto:info@nexbridge.io" className="text-[17px]/[23px] font-bold mt-2">
              info@nexbridge.io
            </a>
          </div>
        </div>
      </section>
      <section className="mt-10 relative overflow-hidden">
        <div className="absolute w-full -top-[770px]">
          <Img src={"/contact-wireframe.svg"} className="w-full" alt="" />
        </div>

        <div className="my-container">
          <div className="relative">
            <Img src={CONTACT_BUILDING_IMAGE.src} alt="building" className="aspect-square" />
            <div className="max-w-[368px] absolute bottom-5 left-5 bg-[#092B4670] rounded-[17px] px-5 pt-5 pb-4 backdrop-blur-[20px]">
              <Img src={IMG_NEXBRIDGE_WHITE_LOGO.src} alt="logo" className="w-[191px] h-[38px]" />
              <p className="font-bold text-[14px]/[21px] mt-5">Av. Las Magnolias, edificio Insigne local no. 1107. San Salvador, El Salvador.</p>
            </div>
          </div>

          <form className="ml-auto -mt-20 relative z-10 w-[60%] bg-gradient-to-br from-[#008EFF] via-[#0B0C15] to-[#1C75BC] rounded-[17px] p-7">
            <h2 className={`${font.className} text-[40px] font-bold`}>Send Us Message</h2>
            <p className="text-[14px]/[21px] mt-3">Have any questions regarding our services? Send us your message.</p>

            <div className="mt-10 flex items-center justify-between gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-[17px]/[23px] font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="rounded-[10px] py-3 px-5 bg-white focus:outline-none text-[14px]/[21px] text-black"
                  placeholder="Enter Your Name..."
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-[17px]/[23px] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="rounded-[10px] py-3 px-5 bg-white focus:outline-none text-[14px]/[21px] text-black"
                  placeholder="Enter Your Email Address..."
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-[17px]/[23px] font-bold">
                Message
              </label>
              <textarea
                name="message"
                className="rounded-[10px] py-3 px-5 bg-white focus:outline-none text-[14px]/[21px] text-black resize-none h-[140px] w-full"
                placeholder="Enter Your Message..."
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <label className="flex items-center gap-2" htmlFor="agree">
                <input type="checkbox" name="agree" className="appearance-none bg-white w-[14px] h-[14px] rounded-[3px] checked:bg-[#1C75BC]" />
                <p className="max-w-[382px] text-[11px]/[18px]">
                  By ticking this box, I am consenting to be sent monthly articles and promotions through WaveNet newsletter.
                </p>
              </label>

              <button className="text-[17px]/[23px] font-bold py-3 px-7 bg-white text-[#092B46] rounded-[10px]">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
