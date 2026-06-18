import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`sidebar ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/propiedades">Propiedades</Link>
        <Link to="/juridico">Jurídico</Link>
        <Link to="/capacitaciones">Capacitaciones</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </div>
  );
}

export default Sidebar;