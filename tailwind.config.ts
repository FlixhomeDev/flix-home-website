import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka"],
        roboto: ["Roboto"],
        poppins: "Poppins",
        yrsa: ["Yrsa"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#4094e4",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondaryColor: "#a8ecbc",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        cardBackground: "#FCFCFC",
        labelColor: "#737380",
        borderColor: "#E0E4F5",
        placeholderColor: "#B2B2C0",
      },
    },
  },
  plugins: [],
} satisfies Config;
