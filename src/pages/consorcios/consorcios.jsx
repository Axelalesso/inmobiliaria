import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import "./consorcios.css";

function Consorcios() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="consorcios-page">

        {/* HERO */}
        <section className="consorcios-hero">
          <div className="consorcios-hero-content">
            <span className="consorcios-eyebrow">
              ADMINISTRACIÓN DE CONSORCIOS
            </span>

            <h1>
              Gestión profesional,
              <br />
              <span>transparente y eficiente</span>
            </h1>

            <p>
              Una administración responsable para cuidar el patrimonio
              común, mejorar la convivencia y garantizar el correcto
              funcionamiento del edificio.
            </p>

            <a
              href="https://wa.me/5493815475092?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20administraci%C3%B3n%20de%20consorcios."
              target="_blank"
              rel="noopener noreferrer"
              className="consorcios-hero-btn"
            >
              Consultar por el servicio
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="consorcios-intro">
          <div className="consorcios-section-label">
            UNA GESTIÓN INTEGRAL
          </div>

          <h2>
            Mucho más que administrar
            <br />
            <span>un edificio</span>
          </h2>

          <p>
            La administración de un consorcio requiere mucho más que el pago
            de expensas. Implica organización, control financiero,
            mantenimiento, cumplimiento de obligaciones y una adecuada
            gestión de las relaciones entre propietarios, inquilinos,
            proveedores y terceros.
          </p>

          <p>
            Ofrecemos un servicio integral de administración de consorcios
            orientado a lograr una gestión ordenada, transparente y
            eficiente, procurando preservar el patrimonio común y mejorar
            la convivencia y el funcionamiento del edificio.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className="consorcios-services">

          <div className="consorcios-section-heading">
            <span>¿QUÉ INCLUYE NUESTRO SERVICIO?</span>

            <h2>
              Administración
              <br />
              <strong>integral</strong>
            </h2>
          </div>

          <div className="consorcios-service-grid">

            {/* ADMINISTRATIVA */}
            <article className="consorcios-service-card">
              <div className="service-number">01</div>

              <h3>Gestión administrativa</h3>

              <p>
                Nos ocupamos de la organización y seguimiento de la
                administración cotidiana del consorcio.
              </p>

              <ul>
                <li>Elaboración y gestión de expensas.</li>
                <li>Registro y seguimiento de pagos.</li>
                <li>Control de ingresos y egresos.</li>
                <li>Gestión de documentación del consorcio.</li>
                <li>Organización y archivo de comprobantes.</li>
                <li>Atención de consultas de propietarios.</li>
                <li>Seguimiento de morosidad.</li>
                <li>Comunicación de información relevante.</li>
                <li>Organización de reuniones y asambleas.</li>
                <li>Conservación de documentación.</li>
              </ul>
            </article>

            {/* FINANCIERA */}
            <article className="consorcios-service-card">
              <div className="service-number">02</div>

              <h3>Administración financiera</h3>

              <p>
                Trabajamos para que los recursos del consorcio sean
                administrados de manera responsable y ordenada.
              </p>

              <ul>
                <li>Control presupuestario.</li>
                <li>Seguimiento de gastos comunes.</li>
                <li>Pago y administración de servicios.</li>
                <li>Control de fondos del consorcio.</li>
                <li>Seguimiento de cuentas.</li>
                <li>Planificación de gastos extraordinarios.</li>
                <li>Información periódica sobre la situación económica.</li>
              </ul>
            </article>

            {/* MANTENIMIENTO */}
            <article className="consorcios-service-card">
              <div className="service-number">03</div>

              <h3>Mantenimiento y proveedores</h3>

              <p>
                Coordinamos y realizamos el seguimiento de las tareas
                necesarias para conservar adecuadamente los espacios y
                bienes comunes.
              </p>

              <ul>
                <li>Mantenimiento general.</li>
                <li>Reparaciones.</li>
                <li>Limpieza.</li>
                <li>Ascensores.</li>
                <li>Instalaciones eléctricas.</li>
                <li>Instalaciones sanitarias.</li>
                <li>Servicios de emergencia.</li>
                <li>Mantenimiento de espacios comunes.</li>
                <li>Presupuestos y contratación de proveedores.</li>
                <li>Seguimiento de trabajos realizados.</li>
              </ul>

              <div className="service-highlight">
                El objetivo es anticiparnos a los problemas y evitar que
                pequeñas deficiencias se transformen en reparaciones de
                mayor costo.
              </div>
            </article>

          </div>
        </section>

        {/* ASESORAMIENTO JURÍDICO */}
        <section className="consorcios-legal">

          <div className="legal-content">
            <span className="consorcios-section-label">
              NUESTRO DIFERENCIAL
            </span>

            <h2>
              Asesoramiento jurídico
              <br />
              <span>para consorcios</span>
            </h2>

            <p>
              Nuestro diferencial es contar con un área jurídica vinculada
              a la administración, permitiendo abordar de manera integral
              aquellas situaciones que requieren análisis legal.
            </p>

            <div className="legal-grid">

              <div>
                <h3>Brindamos orientación en:</h3>

                <ul>
                  <li>Reglamento de propiedad horizontal.</li>
                  <li>Derechos y obligaciones de propietarios.</li>
                  <li>Conflictos entre copropietarios.</li>
                  <li>Reclamos por expensas.</li>
                  <li>Morosidad.</li>
                  <li>Contratos con proveedores.</li>
                </ul>
              </div>

              <div>
                <h3>También abordamos:</h3>

                <ul>
                  <li>Reclamos y requerimientos.</li>
                  <li>Cuestiones laborales.</li>
                  <li>Daños y responsabilidades.</li>
                  <li>Conflictos relacionados con espacios comunes.</li>
                  <li>Análisis de documentación.</li>
                  <li>Asesoramiento previo a medidas legales.</li>
                </ul>
              </div>

            </div>

            <p className="legal-bottom-text">
              Cuando una situación requiere intervención profesional
              específica, el área jurídica permite evaluar las alternativas
              disponibles y determinar el curso de acción correspondiente.
            </p>
          </div>

        </section>

        {/* ASAMBLEAS */}
        <section className="consorcios-assembly">

          <div className="assembly-content">
            <span className="consorcios-section-label">
              ORGANIZACIÓN Y PARTICIPACIÓN
            </span>

            <h2>
              Asambleas y toma
              <br />
              <span>de decisiones</span>
            </h2>

            <p>
              Acompañamos al consorcio en la organización de las asambleas
              y en los procesos de toma de decisiones.
            </p>

            <p>
              Buscamos facilitar una comunicación clara entre la
              administración y los copropietarios, proporcionando la
              información necesaria para que las decisiones se adopten de
              manera ordenada y conforme al marco legal aplicable.
            </p>
          </div>

        </section>

        {/* TRANSPARENCIA */}
        <section className="consorcios-transparency">

          <div className="transparency-header">
            <span className="consorcios-section-label">
              CONTROL Y TRANSPARENCIA
            </span>

            <h2>
              Una administración
              <br />
              <span>que genera confianza</span>
            </h2>

            <p>
              Consideramos que una buena administración debe generar
              confianza. Por eso, procuramos que los propietarios puedan
              contar con información clara sobre cada aspecto de la gestión.
            </p>
          </div>

          <div className="transparency-flow">
            <div>
              <strong>Qué se recauda</strong>
            </div>

            <span>→</span>

            <div>
              <strong>Qué se paga</strong>
            </div>

            <span>→</span>

            <div>
              <strong>En qué se gasta</strong>
            </div>

            <span>→</span>

            <div>
              <strong>Qué trabajos se realizan</strong>
            </div>

            <span>→</span>

            <div>
              <strong>Qué necesidades tiene el edificio</strong>
            </div>
          </div>

          <p className="transparency-bottom">
            La transparencia en la gestión permite mejorar la administración
            de los recursos y fortalecer la confianza entre los integrantes
            del consorcio.
          </p>

        </section>

        {/* COMPROMISO */}
        <section className="consorcios-commitment">

          <div className="commitment-title">
            <span className="consorcios-section-label">
              NUESTRO COMPROMISO
            </span>

            <h2>
              Administrar un consorcio
              <br />
              <span>significa cuidar un patrimonio</span>
            </h2>

            <p>
              Administrar un consorcio significa cuidar un patrimonio que
              pertenece a todos.
            </p>
          </div>

          <div className="commitment-grid">

            <div>
              <span>01</span>
              <h3>Organización</h3>
            </div>

            <div>
              <span>02</span>
              <h3>Transparencia</h3>
            </div>

            <div>
              <span>03</span>
              <h3>Control</h3>
            </div>

            <div>
              <span>04</span>
              <h3>Comunicación</h3>
            </div>

            <div>
              <span>05</span>
              <h3>Prevención</h3>
            </div>

            <div>
              <span>06</span>
              <h3>Asesoramiento profesional</h3>
            </div>

          </div>

          <p className="commitment-final">
            Nuestro objetivo es que los propietarios tengan la tranquilidad
            de contar con una administración que gestione, controle y
            responda.
          </p>

        </section>

        {/* CTA */}
        <section className="consorcios-cta">

          <div>
            <span>¿BUSCÁS UNA ADMINISTRACIÓN PARA TU CONSORCIO?</span>

            <h2>
              Hablemos sobre las necesidades
              <br />
              de tu edificio.
            </h2>

            <p>
              Solicitá una entrevista para conocer nuestro servicio y
              evaluar las necesidades particulares de tu edificio.
            </p>

            <a
              href="https://wa.me/5493815475092?text=Hola%2C%20quisiera%20consultar%20por%20la%20administraci%C3%B3n%20de%20mi%20consorcio."
              target="_blank"
              rel="noopener noreferrer"
              className="consorcios-cta-btn"
            >
              Solicitar entrevista
            </a>
          </div>

        </section>

        {/* FRASE FINAL */}
        <section className="consorcios-final">
          <p>
            Administramos tu consorcio como lo que es:
          </p>

          <h2>
            un patrimonio que merece cuidado,
            <br />
            transparencia y responsabilidad.
          </h2>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Consorcios;