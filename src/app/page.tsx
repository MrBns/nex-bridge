import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import BrandSlider from "@/components/BrandSlider";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <SectionWhyChooseUs />
      <BrandSlider />
      <Blogs />
      <Footer />
    </main>
  );
}
