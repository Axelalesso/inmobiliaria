import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import "./tasacion.css";

function Tasacion() {

  const whatsappNumber = "5493815475092";

  const mensajeWhatsapp = encodeURIComponent(
    "Hola, quisiera solicitar una tasación inmobiliaria para mi propiedad."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensajeWhatsapp}`;

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="tasaciones-page">

        {/* HERO */}
        <section className="tasaciones-hero">
          <div className="tasaciones-hero-overlay"></div>

          <div className="tasaciones-hero-content">
            <span className="tasaciones-eyebrow">
              TASACIONES INMOBILIARIAS
            </span>

            <h1>
              Conocé el valor real
              <br />
              de tu propiedad
            </h1>

            <p>
              Una tasación profesional es el primer paso para tomar
              decisiones inmobiliarias con mayor seguridad y claridad.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tasaciones-hero-btn"
            >
              <FaWhatsapp />
              Solicitar tasación
            </a>
          </div>
        </section>


        {/* INTRODUCCIÓN */}
        <section className="tasaciones-intro">

          <div className="tasaciones-section-label">
            <span>01</span>
            <p>EL VALOR DE TU PROPIEDAD</p>
          </div>

          <div className="tasaciones-intro-content">

            <div className="tasaciones-intro-title">
              <h2>
                Una correcta tasación
                <br />
                hace la diferencia
              </h2>
            </div>

            <div className="tasaciones-intro-text">
              <p>
                Determinar el valor de un inmueble no consiste únicamente
                en establecer un precio, sino en realizar un análisis
                integral de sus características y de las condiciones
                actuales del mercado.
              </p>

              <p>
                Nuestro servicio de tasación está orientado a propietarios,
                inversores y clientes que necesitan conocer el valor de
                referencia de una propiedad para vender, alquilar,
                invertir, realizar una operación patrimonial o evaluar
                alternativas inmobiliarias.
              </p>
            </div>

          </div>
        </section>


        {/* ANÁLISIS INTEGRAL */}
        <section className="tasaciones-analisis">

          <div className="tasaciones-section-label">
            <span>02</span>
            <p>ANÁLISIS INTEGRAL</p>
          </div>

          <div className="tasaciones-analisis-header">
            <h2>
              Evaluamos cada variable
              <br />
              que influye en el valor
            </h2>

            <p>
              Analizamos las características particulares del inmueble
              junto con el contexto inmobiliario para obtener una
              valoración coherente con el mercado.
            </p>
          </div>


          <div className="tasaciones-grid">

            <div className="tasacion-card">
              <span className="tasacion-number">01</span>
              <h3>Ubicación y entorno</h3>
              <p>
                Analizamos la zona, accesibilidad, servicios,
                equipamiento comercial, educativo y urbano.
              </p>
            </div>

            <div className="tasacion-card">
              <span className="tasacion-number">02</span>
              <h3>Características del inmueble</h3>
              <p>
                Evaluamos superficie, distribución, antigüedad,
                estado de conservación, calidad constructiva
                y funcionalidad.
              </p>
            </div>

            <div className="tasacion-card">
              <span className="tasacion-number">03</span>
              <h3>Características particulares</h3>
              <p>
                Consideramos orientación, luminosidad, vistas,
                espacios exteriores, cocheras, amenities y
                otros atributos diferenciales.
              </p>
            </div>

            <div className="tasacion-card">
              <span className="tasacion-number">04</span>
              <h3>Situación del mercado</h3>
              <p>
                Analizamos el comportamiento de la oferta y demanda,
                valores de propiedades comparables y condiciones
                actuales de comercialización.
              </p>
            </div>

            <div className="tasacion-card">
              <span className="tasacion-number">05</span>
              <h3>Propiedades comparables</h3>
              <p>
                Estudiamos inmuebles similares para establecer
                parámetros de referencia y obtener una valoración
                coherente con el mercado.
              </p>
            </div>

            <div className="tasacion-card">
              <span className="tasacion-number">06</span>
              <h3>Potencial comercial</h3>
              <p>
                Evaluamos las condiciones necesarias para posicionar
                la propiedad de manera competitiva frente a otras
                alternativas disponibles.
              </p>
            </div>

          </div>

        </section>


        {/* TASACIÓN ESTRATÉGICA */}
        <section className="tasaciones-estrategica">

          <div className="tasaciones-estrategica-content">

            <span className="tasaciones-eyebrow">
              UNA TASACIÓN ESTRATÉGICA
            </span>

            <h2>
              No se trata solamente
              <br />
              de ponerle un número
            </h2>

            <p>
              Nuestro propósito es brindarte una valoración fundamentada
              y útil para la toma de decisiones.
            </p>

            <div className="tasaciones-comparison">

              <div className="comparison-item">
                <span>01</span>
                <h3>Precio demasiado elevado</h3>
                <p>
                  Puede generar falta de consultas, prolongar los tiempos
                  de comercialización y dificultar la negociación.
                </p>
              </div>

              <div className="comparison-item">
                <span>02</span>
                <h3>Valor por debajo del potencial</h3>
                <p>
                  Puede significar una pérdida económica para el propietario
                  y desaprovechar el verdadero valor del inmueble.
                </p>
              </div>

            </div>

            <p className="tasaciones-highlight">
              Buscamos establecer un valor de mercado razonable y
              competitivo, teniendo en cuenta las características
              particulares del inmueble y el contexto inmobiliario.
            </p>

          </div>

        </section>


        {/* PARA QUÉ SIRVE */}
        <section className="tasaciones-usos">

          <div className="tasaciones-section-label">
            <span>03</span>
            <p>¿PARA QUÉ PODÉS NECESITAR UNA TASACIÓN?</p>
          </div>

          <div className="tasaciones-usos-header">
            <h2>
              Una herramienta para
              <br />
              tomar mejores decisiones
            </h2>
          </div>


          <div className="tasaciones-usos-grid">

            <div className="uso-card">
              <span>01</span>
              <h3>Venta de propiedades</h3>
              <p>
                Definimos una estrategia de precio adecuada para ingresar
                al mercado de manera competitiva y aumentar las
                posibilidades de concretar la operación.
              </p>
            </div>

            <div className="uso-card">
              <span>02</span>
              <h3>Alquiler</h3>
              <p>
                Estimamos un valor locativo acorde a las características
                del inmueble y a los valores de referencia de la zona.
              </p>
            </div>

            <div className="uso-card">
              <span>03</span>
              <h3>Inversiones inmobiliarias</h3>
              <p>
                Te ayudamos a analizar el valor de una propiedad como
                herramienta para evaluar oportunidades de inversión.
              </p>
            </div>

            <div className="uso-card">
              <span>04</span>
              <h3>Planificación patrimonial</h3>
              <p>
                Conocer el valor actualizado de un inmueble permite contar
                con una referencia para tomar decisiones sobre el patrimonio.
              </p>
            </div>

            <div className="uso-card">
              <span>05</span>
              <h3>Operaciones inmobiliarias</h3>
              <p>
                Brindamos orientación de valor para acompañar procesos
                de negociación y toma de decisiones.
              </p>
            </div>

          </div>

        </section>


        {/* COMPROMISO */}
        <section className="tasaciones-compromiso">

          <div className="tasaciones-compromiso-left">

            <span className="tasaciones-eyebrow">
              NUESTRO COMPROMISO
            </span>

            <h2>
              Experiencia,
              <br />
              criterio y respaldo
            </h2>

          </div>

          <div className="tasaciones-compromiso-right">

            <p>
              Trabajamos con un enfoque profesional, objetivo y
              personalizado, brindando información clara para que puedas
              comprender cómo se determina el valor de tu propiedad y
              cuáles son las condiciones del mercado.
            </p>

            <ul>
              <li>
                <FaCheckCircle />
                Análisis profesional
              </li>

              <li>
                <FaCheckCircle />
                Valoración fundamentada
              </li>

              <li>
                <FaCheckCircle />
                Asesoramiento personalizado
              </li>

              <li>
                <FaCheckCircle />
                Información clara y transparente
              </li>
            </ul>

          </div>

        </section>


        {/* CTA FINAL */}
        <section className="tasaciones-cta">

          <div className="tasaciones-cta-content">

            <span className="tasaciones-eyebrow">
              ¿QUERÉS CONOCER EL VALOR DE TU PROPIEDAD?
            </span>

            <h2>
              Tasamos con criterio.
              <br />
              Asesoramos con experiencia.
            </h2>

            <p>
              Solicitá una tasación y recibí el asesoramiento necesario
              para definir la mejor estrategia para tu inmueble.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tasaciones-cta-btn"
            >
              <FaWhatsapp />
              Solicitar una tasación
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Tasacion;