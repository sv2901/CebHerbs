/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A4D2E",
          foreground: "#FFFFFF",
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#1A4D2E",
          600: "#16422A",
          700: "#143A22",
          800: "#0F2A1A",
          900: "#0D2818",
        },
        secondary: {
          DEFAULT: "#F5F5F0",
          foreground: "#1A4D2E",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#FFFFFF",
        },
        surface: "#FFFFFF",
        bone: "#F5F5F0",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(26, 77, 46, 0.08)',
        'hover': '0 10px 40px -2px rgba(26, 77, 46, 0.12)',
        'glass': '0 8px 32px 0 rgba(26, 77, 46, 0.1)',
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
