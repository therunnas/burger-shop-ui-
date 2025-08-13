/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 habilita dark baseado em classe
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",
          500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"
        },
        // paleta extra para neon/accent
        accent: {
          400: "#06b6d4", // cyan
          500: "#0891b2",
          600: "#0e7490"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.20)",
        glow: "0 0 30px rgba(8,145,178,0.35)" // cyan glow
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
