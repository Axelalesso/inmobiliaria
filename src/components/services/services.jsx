import { useState } from "react";
import "./services.css";

function Services() {

  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      num: "01",
      name: "Compra, Venta y Alquileres"
    },
    {
      num: "02",
      name: "Tasación"
    },
    {
      num: "03",
      name: "Área Jurídica"
    },
    {
      num: "04",
      name: "Administración de Consorcios"
    },
    {
      num: "05",
      name: "Capacitaciones"
    },
    {
      num: "06",
      name: "Asesoramiento para Inversiones"
    }
  ];

  const visibleServices = showMore
    ? services
    : services.slice(0, 3);

  return (
    <section
      id="servicios"
      className="services-section"
    >
      <div className="section-header">
        <span className="section-tag">
          Lo que hacemos
        </span>

        <h2 className="section-title">
          Nuestros servicios
        </h2>
      </div>

      <div className="services-grid">
        {visibleServices.map((service) => (
          <div
            key={service.num}
            className="service-card"
          >
            <div className="service-num">
              {service.num}
            </div>

            <div className="service-name">
              {service.name}
            </div>
          </div>
        ))}
      </div>

      <div className="services-button-wrapper">
        <button
          className="services-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore
            ? "Ver menos"
            : "Ver todos los servicios"}
        </button>
      </div>
    </section>
  );
}

export default Services;