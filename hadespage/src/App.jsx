import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import PokeData from "./pages/PokeData.jsx";
import useInterpolatedColor from "./hooks/useInterpolatedColor.js";
import AOS from "aos";
import "aos/dist/aos.css";

// Componente interno que sí puede usar useLocation
function AppContent({ background, textColor }) {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh(); // refresca animaciones al cambiar de ruta
  }, [location]);

  return (
    <div
      className="min-h-screen relative transition-colors duration-300"
      style={{ background, color: textColor }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div data-aos="fade-down">
              <Home />
            </div>
          }
        />
        <Route
          path="/contacto"
          element={
            <div data-aos="fade-down">
              <Contact />
            </div>
          }
        />
        <Route
          path="/poke-data"
          element={
            <div data-aos="fade-down">
              <PokeData />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  const { background, textColor } = useInterpolatedColor();

  return (
    <Router>
      <AppContent background={background} textColor={textColor} />
    </Router>
  );
}

export default App;