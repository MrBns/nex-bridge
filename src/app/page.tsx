import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import Image from "next/image";
import ReadyToTake from "@/components/ReadyToTake";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <ReadyToTake />
      <Blogs />
      <Footer />
    </main>
  );
}
