import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Footer from "@/components/layout-comp/Footer";
import BrandSlider from "@/views/homepage/BrandSlider";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";
import SectionMap from "@/views/homepage/SectionMap";
import SectionTraditionalFinance from "@/views/homepage/SectionTraditionalFinance";
import SectionBlogs from "@/views/homepage/SectionBlogs";
import SectionWantToConnect from "@/views/homepage/SectionWantToConnect";
import "@/lib/client/scroll-animation.effect";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <BrandSlider />
      <SectionWeBelieve />
      <SectionWhyChooseUs />
      <SectionMap />
      <SectionTraditionalFinance />
      <SectionBlogs />
      <SectionWantToConnect />
      <Footer />
    </main>
  );
}
