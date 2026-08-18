import { useState } from "react";
import "./whysection.css";

function WhySection() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      image: "/img/atencioncliente.jpeg",
      title: "Atención Personalizada",
      description:
        "Cada cliente recibe asesoramiento adaptado a sus necesidades.",
      info:
        "Brindamos una atención cercana y personalizada, acompañando a cada cliente durante todo el proceso. Analizamos sus necesidades, objetivos y posibilidades para ofrecer soluciones acordes a cada situación."
    },
    {
      image: "/img/abogados.webp",
      title: "Equipo Jurídico e Inmobiliario",
      description:
        "Experiencia legal e inmobiliaria trabajando de manera integrada.",
      info:
        "Nuestro enfoque combina la actividad inmobiliaria con una sólida formación jurídica, permitiendo analizar cada operación desde una perspectiva integral y profesional."
    },
    {
      image: "/img/seguridad-juridica.jpg",
      title: "Seguridad Legal",
      description:
        "Analizamos cada operación para brindar tranquilidad y respaldo.",
      info:
        "Cada operación es analizada cuidadosamente para contemplar los aspectos legales correspondientes y brindar mayor seguridad, claridad y respaldo a nuestros clientes."
    },
    {
      image: "/img/marketing.jpg",
      title: "Marketing Inmobiliario",
      description:
        "Estrategias modernas para maximizar la visibilidad de cada propiedad.",
      info:
        "Utilizamos estrategias de comunicación y marketing para mejorar la presentación de las propiedades y alcanzar potenciales compradores o interesados."
    },
    {
      image: "/img/claves-transparencia.jpg",
      title: "Transparencia",
      description:
        "Comunicación clara y compromiso durante todo el proceso.",
      info:
        "Creemos que una operación inmobiliaria debe estar basada en la confianza y la comunicación clara. Mantenemos informados a nuestros clientes durante cada etapa del proceso."
    },
    {
      image: "/img/legal.jpg",
      title: "Acompañamiento Integral",
      description:
        "Desde la primera consulta hasta la firma final.",
      info:
        "Acompañamos al cliente desde el primer contacto hasta la finalización de la operación, brindando asesoramiento inmobiliario y jurídico durante todo el proceso."
    }
  ];

  return (
    <section className="why-section">

      <div className="why-header">
        <span>¿Por qué elegirnos?</span>

        <h2 id="eleginos">
          Más que una inmobiliaria,
          <br />
          un respaldo integral
        </h2>
      </div>

      <div className="why-grid">

        {cards.map((card, index) => (
          <div
            className={`why-card why-card-${index + 1}`}
            key={index}
          >

            <div
              className="why-image-container"
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.image}
                alt={card.title}
              />

              <div className="why-image-overlay">
                <span>Ver más</span>
              </div>
            </div>

            <div className="why-card-content">
              <h3>{card.title}</h3>

              <p>
                {card.description}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}

      {selectedCard && (
        <div
          className="why-modal-overlay"
          onClick={() => setSelectedCard(null)}
        >

          <div
            className="why-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="why-modal-close"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="why-modal-image"
            />

            <div className="why-modal-content">

              <span className="why-modal-tag">
                INMOBILIARIA DÍAZ & ASOCIADOS
              </span>

              <h3>
                {selectedCard.title}
              </h3>

              <p>
                {selectedCard.info}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default WhySection;