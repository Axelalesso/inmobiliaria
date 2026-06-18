import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  const navigate = useNavigate();

  const [filtros, setFiltros] = useState({
    operacion: "Comprar",
    tipo: "Departamento",
    zona: "",
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleBuscar = () => {
    const params = new URLSearchParams();
    if (filtros.operacion) params.set("operacion", filtros.operacion);
    if (filtros.tipo)      params.set("tipo", filtros.tipo);
    if (filtros.zona.trim()) params.set("zona", filtros.zona.trim());

    navigate(`/propiedades?${params.toString()}`);
  };

  return (
    <div className="search-bar">
      <div className="search-field">
        <label>Operación</label>
        <select name="operacion" value={filtros.operacion} onChange={handleChange}>
          <option>Comprar</option>
          <option>Alquilar</option>
        </select>
      </div>

      <div className="search-field">
        <label>Tipo</label>
        <select name="tipo" value={filtros.tipo} onChange={handleChange}>
          <option>Departamento</option>
          <option>Casa</option>
          <option>PH</option>
          <option>Galpón Comercial</option>
          <option>Terreno</option>
        </select>
      </div>

      <div className="search-field">
        <label>Zona</label>
        <input
          type="text"
          name="zona"
          placeholder="Barrio o ciudad..."
          value={filtros.zona}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleBuscar()}
        />
      </div>

      <button className="search-btn" onClick={handleBuscar}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;