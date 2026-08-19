import { Link } from "react-router-dom";
import { useState } from "react";
import "./services.css";

function Services() {
  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      num: "01",
      name: "Compra, Venta y Alquileres",
      desc: "Acompañamos todo el proceso de compra, venta o alquiler de propiedades, desde la búsqueda inicial hasta el cierre de la operación.",
      path: "/compra"
    },
    {
      num: "02",
      name: "Tasación",
      desc: "Realizamos tasaciones profesionales basadas en el análisis del mercado actual para determinar el valor real de tu propiedad.",
      path: "/tasacion"
    },
    {
      num: "03",
      name: "Área Jurídica",
      desc: "Contamos con asesoramiento legal especializado en cada etapa de la operación inmobiliaria, garantizando seguridad jurídica.",
      path: "/juridico"
    },
    {
      num: "04",
      name: "Administración de Consorcios",
      desc: "Gestionamos consorcios de manera integral, incluyendo administración financiera, mantenimiento y resolución de conflictos.",
      path: "/consorcios"
    },
    {
      num: "05",
      name: "Capacitaciones",
      desc: "Ofrecemos capacitaciones para profesionales del sector inmobiliario, con foco en actualización normativa y comercial.",
      path: "/capacitaciones"
    },
    {
      num: "06",
      name: "Asesoramiento para Inversiones",
      desc: "Te ayudamos a identificar las mejores oportunidades de inversión inmobiliaria según tu perfil y objetivos.",
      path: "/inversiones"
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

          <Link
            key={service.num}
            to={service.path}
            className="service-card"
          >

            <div className="service-num">
              {service.num}
            </div>

            <div className="service-name">
              {service.name}
            </div>

            <div className="service-desc">
              <p>{service.desc}</p>
            </div>

            <span className="service-link">
              Ver más →
            </span>

          </Link>

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