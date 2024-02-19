import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Footer from "@/components/layout-comp/Footer";
import Blogs from "@/views/homepage/Blogs";
import BrandSlider from "@/views/homepage/BrandSlider";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";
import TraditionalFinance from "@/views/homepage/TraditionalFinance";
import SectionMap from "@/views/homepage/SectionMap";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <SectionWhyChooseUs />
      <SectionMap />
      <TraditionalFinance />

      <BrandSlider />
      <Blogs />
      <Footer />
    </main>
  );
}
