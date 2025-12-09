/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Gradiente dinámico general (negro → crimson)
        "night-sky": "linear-gradient(to bottom, #000000 0%, #1a1a1a 40%, #dc2626 100%)",

        // Gradiente estático para Contact (negro 75% → rojo oscuro 25%)
        "contact-gradient": "linear-gradient(to bottom, #000000 0%, #000000 75%, #991b1b 100%)",
      },
      colors: {
        // Paleta base
        sky: {
          dark: "#000000",   // negro profundo
          accent: "#dc2626", // crimson
          accentDark: "#991b1b", // rojo oscuro para variantes
        },
        // Colores de texto adaptativos
        textStage: {
          start: "#cbd5e1",  // gris claro azulado (sobre negro)
          mid: "#d4d4d8",    // plateado neutro (sobre la mezcla)
          end: "#fefce8",    // marfil suave (sobre rojo)
        },
        // Color neutro global
        moon: "#ffffff",
      },
    },
  },
  plugins: [],
};