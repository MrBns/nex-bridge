import Header from "@/views/homepage/Header";

import SectionReshaping from "@/views/homepage/SectionReshapping";
import SectionWhyChooseUs from "@/views/homepage/SectionWhyChooseUs";
import SectionMap from "@/views/homepage/SectionMap";
import SectionTraditionalFinance from "@/views/homepage/SectionTraditionalFinance";
import SectionBlogs from "@/views/homepage/SectionBlogs";
import "@/lib/client/scroll-animation.effect";
import SectionImageInfoGrid from "@/views/homepage/SectionImageInfoGrid";


export default function Home() {
  return (
    <main className="">
      <Header />
      <div id="explore" className="py-2"></div>
      <SectionReshaping />
      <SectionWhyChooseUs />
      <SectionMap />
      <SectionImageInfoGrid />
      <SectionTraditionalFinance />
      <SectionBlogs />
    </main>
  );
}
