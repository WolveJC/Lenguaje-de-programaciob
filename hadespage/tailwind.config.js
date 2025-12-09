/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Gradiente personalizado "night-sky" con crimson
        "night-sky": "linear-gradient(to bottom, #000000 0%, #1a1a1a 40%, #dc2626 100%)",
      },
      colors: {
        // Color base para fondos
        sky: {
          dark: "#000000",   // negro profundo
          accent: "#dc2626", // crimson
        },
        // Paleta de texto adaptativa
        textStage: {
          start: "#cbd5e1",   // gris claro azulado (sobre negro)
          mid: "#d4d4d8",     // plateado neutro (sobre mezcla)
          end: "#fefce8",     // marfil suave (sobre rojo)
        },
      },
    },
  },
  plugins: [],
};