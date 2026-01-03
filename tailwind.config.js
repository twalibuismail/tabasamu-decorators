import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Hapa tunaweza kuongeza fonts siku zijazo
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            // Hapa ndipo tunapobadilisha rangi za Tabasamu Decorators
            primary: {
              DEFAULT: "#B76E79", // Rose Gold (Rangi Kuu)
              foreground: "#FFFFFF", // Maandishi juu ya Rose Gold yatakuwa meupe
            },
            secondary: {
              DEFAULT: "#E5E4E2", // Kijivu Chepesi/Silver (Rangi ya Pili)
              foreground: "#000000",
            },
            focus: "#B76E79", // Rangi ya 'border' ukibonyeza input
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#D48E98", // Rose Gold iliyokoza kidogo kwa giza
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};