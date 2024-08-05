import type { Config } from "tailwindcss"

const config = {
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
        border: "#2BE1F5",
        input: "#2BE1F5",
        ring: "#2BE1F5",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2BE1F5",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#074113",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "#2BE1F5",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#2BE1F5",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#2BE1F5",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "#2BE1F5",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
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
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar'),],
} satisfies Config

export default config