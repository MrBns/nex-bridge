import Header from "@/views/homepage/Header";

import SectionReshaping from "@/views/homepage/SectionReshapping";
import Footer from "@/components/layout-comp/Footer";
import BrandSlider from "@/views/homepage/BrandSlider";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";
import SectionMap from "@/views/homepage/SectionMap";
import SectionTraditionalFinance from "@/views/homepage/SectionTraditionalFinance";
import SectionBlogs from "@/views/homepage/SectionBlogs";
import SectionWantToConnect from "@/views/homepage/SectionWantToConnect";
import "@/lib/client/scroll-animation.effect";
import ImageInfoGrid from "@/views/homepage/ImageInfoGrid";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div id="explore" className="py-2"></div>
      <SectionReshaping />
      <SectionWhyChooseUs />
      <SectionMap />
      <ImageInfoGrid />
      <SectionTraditionalFinance />
      <SectionBlogs />
    </main>
  );
}
