import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";
import "./compra.css";

function Compra() {

  const whatsapp = "5493815475092";

  const compra = [
    {
      numero: "01",
      titulo: "Compra",
      texto:
        "Te acompañamos durante todo el proceso de compra, ayudándote a encontrar la propiedad que mejor se adapte a tus necesidades y objetivos. Brindamos asesoramiento integral para que puedas avanzar con mayor seguridad y claridad en cada etapa de la operación."
    },
    {
      numero: "02",
      titulo: "Venta",
      texto:
        "Gestionamos la comercialización de tu propiedad de manera profesional, desde la publicación y promoción hasta la negociación y concreción de la operación. Nuestro objetivo es facilitar el proceso y ayudarte a alcanzar una venta segura y conveniente."
    },
    {
      numero: "03",
      titulo: "Alquiler",
      texto:
        "Te ayudamos a encontrar el inmueble adecuado o a poner tu propiedad en alquiler, acompañándote durante todo el proceso. Brindamos asesoramiento tanto a propietarios como a inquilinos para lograr operaciones claras, ordenadas y seguras."
    }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="compra-page">

        {/* HERO */}

        <section className="compra-hero">

          <div className="compra-hero-content">

            <span className="compra-eyebrow">
              INMOBILIARIA DÍAZ & ASOCIADOS
            </span>

            <h1>
              Nuestros
              <span> Servicios</span>
            </h1>

            <p>
              Asesoramiento profesional y acompañamiento integral
              en cada decisión inmobiliaria.
            </p>

          </div>

        </section>


        {/* INTRO */}

        <section className="compra-intro">

          <span className="compra-section-label">
            LO QUE HACEMOS
          </span>

          <h2>
            Acompañamos cada operación
            <br />
            de principio a fin.
          </h2>

          <p>
            Nuestro objetivo es brindar claridad, seguridad y
            acompañamiento profesional en cada etapa del proceso
            inmobiliario.
          </p>

        </section>


        {/* SERVICIOS */}

        <section className="compra-list">

          {compra.map((compra, index) => (

            <article
              className={`compra-card ${
                index % 2 !== 0 ? "compra-card-reverse" : ""
              }`}
              key={compra.numero}
            >

              <div className="compra-number">
                {compra.numero}
              </div>

              <div className="compra-content">

                <span className="compra-label">
                  SERVICIO INMOBILIARIO
                </span>

                <h2>
                  {compra.titulo}
                </h2>

                <p>
                  {compra.texto}
                </p>

                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compra-whatsapp"
                >
                  <FaWhatsapp />
                  Consultar por WhatsApp
                </a>

              </div>

            </article>

          ))}

        </section>


        {/* CTA */}

        <section className="compra-cta">

          <div>

            <span>
              ¿TENÉS UNA CONSULTA?
            </span>

            <h2>
              Estamos para ayudarte.
            </h2>

            <p>
              Contactanos y recibí asesoramiento personalizado
              para tu próxima operación inmobiliaria.
            </p>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="compra-cta-button"
            >
              <FaWhatsapp />
              Contactanos
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Compra;