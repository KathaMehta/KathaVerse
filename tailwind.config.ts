import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        // KathaVerse Color Palette
        background: "#fff6f8", // Blush Pink
        card: "#fffafd", // Lightest Pink
        accent: "#a62648", // Rich Rose
        text: "#1a1a1a", // Deep Gray
        highlight: "#fff9d9", // Accent Yellow
        navy: "#14213d", // Deep Navy Blue
        lavender: "#e6e6fa", // Soft Lavender
        gold: "#ffd700", // Gold
        rosegold: "#b76e79", // Rose Gold

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#a62648", // Rich Rose
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#14213d", // Deep Navy Blue
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#a62648", // Rich Rose
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#fffafd", // Lightest Pink
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 2s infinite",
      },
      boxShadow: {
        gold: "0 4px 14px 0 rgba(255, 215, 0, 0.39)",
        rosegold: "0 4px 14px 0 rgba(183, 110, 121, 0.39)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #ffd700, #f0b400, #ffd700)",
        "rosegold-gradient": "linear-gradient(to right, #b76e79, #e6c9c9, #b76e79)",
        "lavender-gradient": "linear-gradient(to right, #e6e6fa, #d8bfd8, #e6e6fa)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config