import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Footer from "@/components/layout-comp/Footer";
import Blogs from "@/views/homepage/Blogs";
import BrandSlider from "@/views/homepage/BrandSlider";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";
import TraditionalFinance from "@/views/homepage/TraditionalFinance";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <SectionWhyChooseUs />
      <TraditionalFinance />
      <BrandSlider />
      <Blogs />
      <Footer />
    </main>
  );
}
