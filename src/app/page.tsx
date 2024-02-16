import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";

import ReadyToTake from "../components/ReadyToTake";
import Footer from "../components/Footer";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve />
      <SectionWhyChooseUs />
      {/* <ReadyToTake /> */}

      {/* @iamajraj please include margin stuff inside section. */}
      {/* <div className="mt-80"></div> */}
      <Footer />
    </main>
  );
}
