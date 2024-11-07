import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/**.{js,ts,jsx,tsx,mdx,scss,css}",
    "./src/components/**/**.{js,ts,jsx,tsx,mdx,scss,css}",
    "./src/app/**/**.{js,ts,jsx,tsx,mdx,scss,css}",
    "./src/styles/**/**.{js,ts,jsx,tsx,mdx,scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
