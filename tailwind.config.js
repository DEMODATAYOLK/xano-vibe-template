/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mystical cosmic color palette
        cosmic: {
          purple: {
            deep: "#2D1B69",
            medium: "#4A148C",
            light: "#7B1FA2",
            glow: "#9C27B0",
          },
          blue: {
            midnight: "#0A0E27",
            deep: "#1A237E",
            medium: "#283593",
            light: "#3949AB",
          },
          gold: {
            bright: "#FFD700",
            medium: "#FFA000",
            dark: "#FF8F00",
            glow: "#FFC107",
          },
          starlight: {
            white: "#FFFFFF",
            light: "#F8F9FA",
            silver: "#E3F2FD",
            mist: "#BBDEFB",
          },
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
        "cosmic-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "cosmic-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(156, 39, 176, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(156, 39, 176, 0.6), 0 0 60px rgba(255, 193, 7, 0.3)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "cosmic-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cosmic-float": "cosmic-float 6s ease-in-out infinite",
        "cosmic-glow": "cosmic-glow 3s ease-in-out infinite",
        "star-twinkle": "star-twinkle 2s ease-in-out infinite",
        "cosmic-pulse": "cosmic-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}