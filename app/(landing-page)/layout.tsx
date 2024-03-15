import type { Metadata } from "next";
import { Michroma, Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/layout-comp/Navbar";
import Footer from "@/components/layout-comp/Footer";
import SectionWantToConnect from "@/views/homepage/SectionWantToConnect";
import "../../styles/app.scss";
import "../../styles/tailwind.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${michroma.variable} ${montserrat.variable}`}
    >
      <head></head>
      <body className="bg-[#0B0C15]">
        <Navbar />
        {children}
        <SectionWantToConnect />
        <Footer />
      </body>
    </html>
  );
}
