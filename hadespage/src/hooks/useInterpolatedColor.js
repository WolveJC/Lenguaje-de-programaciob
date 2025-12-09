import { useMemo } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import useScrollProgress from "./useScrollProgress.js";

// Interpolación entre dos colores hex
function interpolateColor(color1, color2, factor) {
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);

  const r1 = (c1 >> 16) & 0xff,
        g1 = (c1 >> 8) & 0xff,
        b1 = c1 & 0xff;
  const r2 = (c2 >> 16) & 0xff,
        g2 = (c2 >> 8) & 0xff,
        b2 = c2 & 0xff;

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `rgb(${r},${g},${b})`; // corregido con backticks
}

// Hook principal: devuelve gradiente y color de texto
export default function useInterpolatedColor() {
  const progress = useScrollProgress();

  const { dark, accent } = useMemo(() => {
    const fullConfig = resolveConfig(tailwindConfig);
    const fallback = { dark: "#000000", accent: "#dc2626" }; // negro + crimson
    const sky = fullConfig.theme?.colors?.sky || {};
    return {
      dark: sky.dark || fallback.dark,
      accent: sky.accent || fallback.accent,
    };
  }, []);

  // Limitamos el rojo a un máximo del 75% del viewport
  const stop = Math.min(progress * 100, 75);

  // Gradiente dinámico
  const background = `linear-gradient(to bottom, ${dark} 0%, ${dark} ${stop}%, ${accent} ${stop}%, ${accent} 100%)`;

  // Texto adaptativo según progreso
  let textColor;
  if (progress < 0.33) {
    textColor = "#cbd5e1"; // gris claro azulado
  } else if (progress < 0.66) {
    textColor = "#d4d4d8"; // plateado neutro
  } else {
    textColor = "#fefce8"; // marfil suave
  }

  return { background, textColor };
}