import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nord: {
          night: "#05070A",
          card: "#101820",
          steel: "#101820",
          panel: "#101820",
          border: "#263238",
          ice: "#7DD3FC",
          primary: "#7DD3FC",
          accent: "#A3E635",
          frost: "#E5E7EB",
          smoke: "#9CA3AF",
          amber: "#A3E635",
          danger: "#EF4444"
        }
      },
      boxShadow: {
        survival: "0 22px 70px rgba(0, 0, 0, 0.38), 0 0 28px rgba(125, 211, 252, 0.08)",
        glow: "0 0 34px rgba(125, 211, 252, 0.16)",
        accent: "0 0 28px rgba(163, 230, 53, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
