import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/views/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage:{
        "header-gradient":'linear-gradient(212.76deg, rgba(28, 117, 188, 0.3) 5.52%, rgba(0, 0, 0, 0) 80.42%)',
         
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
