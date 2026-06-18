import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Juridico from "./pages/juridico/juridico";
import Capacitaciones from "./pages/capacitaciones/capacitaciones";
import Propiedades from "./pages/propiedades/propiedades";
import PropertyDetail from "./pages/propertydetail/propertydetail";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/propiedades"
        element={<Propiedades />}
      />

      <Route
        path="/juridico"
        element={<Juridico />}
      />

      <Route
        path="/capacitaciones"
        element={<Capacitaciones />}
      />


      <Route
        path="/contacto"
        element={<Contacto />}
      />

      <Route
        path="/propiedad/:slug"
        element={<PropertyDetail />}
      />

    </Routes>
  );
}

export default App;