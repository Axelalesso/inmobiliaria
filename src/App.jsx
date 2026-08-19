import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Juridico from "./pages/juridico/juridico";
import Capacitaciones from "./pages/capacitaciones/capacitaciones";
import Propiedades from "./pages/propiedades/propiedades";
import PropertyDetail from "./pages/propertydetail/propertydetail";
import Contact from "./pages/contact/contact";
import Compra from "./pages/compra/compra"
import Consorcios from "./pages/consorcios/consorcios"
import Inversiones from "./pages/inversiones/inversiones";
import Tasacion from "./pages/tasacion/tasacion"

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
        element={<Contact/>}
      />

      <Route
        path="/propiedad/:slug"
        element={<PropertyDetail />}
      />

      <Route
        path="/compra"
        element={<Compra />}
      />

      <Route
        path="/consorcios"
        element={<Consorcios />}
      />

      <Route
        path="/inversiones"
        element={<Inversiones />}
      />

      <Route
        path="/tasacion"
        element={<Tasacion />}
      />

    </Routes>
  );
}

export default App;