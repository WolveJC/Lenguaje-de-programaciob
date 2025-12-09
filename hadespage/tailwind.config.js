/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // todos los componentes React
    "./public/index.html"           // asegura que Tailwind escanee tu HTML base
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Gradiente personalizado
        "night-sky": "linear-gradient(to bottom, #000000 0%, #1a1a1a 40%, #dc2626 100%)",
      },
      colors: {
        // Color personalizado "moon"
        moon: "#ffffff",
        // Paleta "sky" con crimson
        sky: {
          dark: "#1a1a1a",
          accent: "#dc2626", // crimson
        },
      },
    },
  },
  plugins: [],
};