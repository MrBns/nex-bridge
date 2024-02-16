import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Image from "next/image";
import ReadyToTake from "@/components/ReadyToTake";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import BrandSlider from "@/components/BrandSlider";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <ReadyToTake />
      <BrandSlider />
      <Blogs />
      <Footer />
    </main>
  );
}
