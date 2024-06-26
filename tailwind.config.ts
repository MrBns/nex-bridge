import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(212.76deg, rgba(28, 117, 188, 0.3) 5.52%, rgba(0, 0, 0, 0) 80.42%)",
        "gradient-blue": "background: linear-gradient(90deg, rgba(146,222,237,1) 0%, rgba(255,255,255,1) 100%)",
        "gradient-white": "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
        "stroke-gradient": "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
        "gradient-black": "linear-gradient(180deg, rgba(17,17,43,1) 0%, rgba(17,17,43,0) 100%)",
        "light-gray-gradient": "linear-gradient(180deg, rgba(213,217,229,1) 0%, rgba(213,217,229,0) 100%)",
        "blog-gradient": "linear-gradient(180deg, rgba(28,117,188,0.3) 0%, rgba(255,255,255,0) 100%)",
        "blog-item-gradient": "linear-gradient(180deg, rgba(28,117,188,1) 0%, rgba(139,185,221,0) 50%, rgba(28,117,188,1) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        monument: ["Monument Extended", ...defaultTheme.fontFamily.sans],
        michroma: ["var(--font-michroma)"],
      },

      colors: {
        darkBlue: "#11112B",
        lightBlue: "#92DEED",
        lightGray: "#D5D9E5",
      },

      screens: {
        // lg: "1428px",
        pl: "1339px",
        px: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
