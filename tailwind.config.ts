import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        ink: "#0A0A0A",
        "ink-soft": "#1A1A1A",
        secondary: "#0A0A0A",
        accent: "#1A1A1A",
        surface: "#F2F2F2",
        "surface-light": "#E8E8E8",
        line: "#E5E5E5",
        text: "#0A0A0A",
        "text-muted": "#6B6B6B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0A0A0A 0%, #2E2E2E 100%)",
        "ink-gradient": "linear-gradient(180deg, #0A0A0A 0%, #6B6B6B 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.06), transparent 60%)",
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        "scroll-bounce": "scroll-bounce 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
