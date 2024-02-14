import Header from "@/views/homepage/Header";
import SectionWeBelieve from "@/views/homepage/SectionWeBelieve";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <SectionWeBelieve/>
    </main>
  );
}
