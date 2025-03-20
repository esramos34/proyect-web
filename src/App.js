import React from "react";
import "./styles.css"; // Estilos generales
import { Home } from "./Home/Home"; // Importar el componente Home

// Componente principal
export default function App() {
  return (
    <div className="App">
      <Home /> {/* Aquí se usa el componente Home */}
    </div>
  );
}
