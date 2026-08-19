import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { FaSearch, FaChartLine, FaBalanceScale, FaFileContract, FaKey, FaMoneyBillWave, FaBullseye, FaHandshake } from "react-icons/fa";
import "./inversiones.css";

function Inversiones() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="inversiones-page">

        {/* HERO */}
        <section className="inversiones-hero">
          <div className="inversiones-hero-overlay"></div>

          <div className="inversiones-hero-content">
            <span className="inversiones-eyebrow">
              ASESORAMIENTO INMOBILIARIO
            </span>

            <h1>
              Invertí en inmuebles
              <br />
              con información, análisis y estrategia
            </h1>

            <p>
              Te acompañamos a tomar decisiones inmobiliarias con una
              visión integral, combinando análisis de mercado,
              asesoramiento jurídico, notarial y comercial.
            </p>

            <a href="#inversion-servicio" className="inversiones-btn">
              Conocé nuestro servicio
            </a>
          </div>
        </section>


        {/* INTRODUCCIÓN */}
        <section className="inversiones-intro" id="inversion-servicio">

          <div className="inversiones-section-header">
            <span>UNA MIRADA DIFERENTE</span>

            <h2>
              Invertir es mucho más que
              <br />
              encontrar una propiedad
            </h2>
          </div>

          <div className="inversiones-intro-text">
            <p>
              Invertir en una propiedad es mucho más que encontrar un
              inmueble atractivo. Una buena inversión requiere analizar
              el valor, estudiar la documentación, conocer el mercado y
              evaluar el potencial económico de cada operación.
            </p>

            <p>
              Nuestro servicio de asesoramiento para inversores está
              pensado para quienes buscan tomar decisiones inmobiliarias
              con una visión integral, combinando análisis inmobiliario,
              jurídico, notarial y comercial.
            </p>
          </div>

        </section>


        {/* QUÉ HACEMOS */}
        <section className="inversiones-proceso">

          <div className="inversiones-section-header center">
            <span>¿QUÉ HACEMOS POR VOS?</span>

            <h2>
              Te acompañamos en cada etapa
              <br />
              de tu inversión
            </h2>

            <p>
              Acompañamos al inversor desde la identificación de una
              oportunidad hasta la concreción y planificación de la
              inversión.
            </p>
          </div>


          <div className="inversiones-cards">

            {/* 1 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaSearch />
              </div>

              <span className="inversion-number">01</span>

              <h3>Búsqueda de oportunidades</h3>

              <p>
                Analizamos las necesidades y objetivos del inversor para
                identificar propiedades que puedan resultar interesantes
                de acuerdo con su presupuesto, ubicación y estrategia.
              </p>

              <ul>
                <li>Viviendas</li>
                <li>Departamentos</li>
                <li>Terrenos</li>
                <li>Locales comerciales</li>
                <li>Oficinas</li>
                <li>Propiedades para renta</li>
                <li>Inmuebles con potencial de valorización</li>
                <li>Oportunidades de compra para posterior venta</li>
              </ul>
            </article>


            {/* 2 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaChartLine />
              </div>

              <span className="inversion-number">02</span>

              <h3>Análisis de la inversión</h3>

              <p>
                No todas las propiedades representan la misma
                oportunidad. Evaluamos diferentes variables para ayudar
                al inversor a determinar si una operación resulta
                conveniente.
              </p>

              <ul>
                <li>Precio de adquisición</li>
                <li>Ubicación</li>
                <li>Potencial de valorización</li>
                <li>Demanda de la zona</li>
                <li>Posibilidad de alquiler</li>
                <li>Potencial de renta</li>
                <li>Gastos asociados</li>
                <li>Costos de mantenimiento</li>
              </ul>
            </article>


            {/* 3 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaBalanceScale />
              </div>

              <span className="inversion-number">03</span>

              <h3>Análisis jurídico y documental</h3>

              <p>
                Una inversión segura comienza con una propiedad cuya
                situación jurídica y documental pueda ser analizada
                correctamente.
              </p>

              <p>
                Desde nuestra área jurídica y notarial podemos acompañar
                el proceso mediante la revisión de la documentación
                correspondiente y el análisis de los antecedentes
                jurídicos del inmueble.
              </p>
            </article>


            {/* 4 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaFileContract />
              </div>

              <span className="inversion-number">04</span>

              <h3>Estudio de títulos</h3>

              <p>
                Ponemos a disposición nuestra experiencia jurídica y
                notarial para analizar los antecedentes dominiales y la
                documentación relacionada con el inmueble.
              </p>

              <p>
                El objetivo es que el inversor pueda conocer mejor qué
                está comprando, cuáles son sus antecedentes y qué
                aspectos jurídicos deben ser considerados.
              </p>
            </article>


            {/* 5 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaMoneyBillWave />
              </div>

              <span className="inversion-number">05</span>

              <h3>Análisis de rentabilidad</h3>

              <p>
                Para quienes buscan generar ingresos mediante alquiler,
                analizamos el potencial locativo del inmueble y las
                condiciones del mercado.
              </p>

              <div className="rentabilidad">
                <span>Inversión inicial</span>
                <b>→</b>
                <span>Gastos</span>
                <b>→</b>
                <span>Renta potencial</span>
                <b>→</b>
                <span>Valorización</span>
              </div>

              <p>
                De esta manera, el inversor cuenta con una visión más
                completa de la operación y no solamente con el precio de
                compra.
              </p>
            </article>


            {/* 6 */}
            <article className="inversion-card">
              <div className="inversion-icon">
                <FaBullseye />
              </div>

              <span className="inversion-number">06</span>

              <h3>Estrategia de inversión</h3>

              <p>
                Diseñamos una estrategia acorde al perfil y objetivo de
                cada inversor.
              </p>

              <ul>
                <li>
                  <strong>Renta:</strong> adquirir una propiedad para
                  generar ingresos mediante alquiler.
                </li>

                <li>
                  <strong>Valorización:</strong> buscar inmuebles con
                  posibilidades de incremento de valor.
                </li>

                <li>
                  <strong>Compra y venta:</strong> identificar
                  oportunidades con potencial de reventa.
                </li>

                <li>
                  <strong>Patrimonio:</strong> incorporar inmuebles como
                  parte de una estrategia patrimonial.
                </li>

                <li>
                  <strong>Diversificación:</strong> evaluar alternativas
                  inmobiliarias para complementar otras inversiones.
                </li>
              </ul>
            </article>


            {/* 7 */}
            <article className="inversion-card inversion-card-wide">
              <div className="inversion-icon">
                <FaHandshake />
              </div>

              <span className="inversion-number">07</span>

              <h3>Acompañamiento durante la operación</h3>

              <p>
                Nuestro trabajo no termina con la elección de la
                propiedad.
              </p>

              <p>
                Acompañamos al inversor en las diferentes etapas de la
                operación, articulando los aspectos inmobiliarios,
                jurídicos y notariales que correspondan.
              </p>

              <p>
                Buscamos que cada decisión sea tomada con la mayor
                cantidad posible de información y con una estrategia
                previamente definida.
              </p>
            </article>

          </div>

        </section>


        {/* MIRADA INTEGRAL */}
        <section className="inversiones-integral">

          <div className="inversiones-section-header center">
            <span>UNA MIRADA INTEGRAL</span>

            <h2>
              Todo el conocimiento necesario
              <br />
              para tu inversión
            </h2>
          </div>


          <div className="integral-grid">

            <div className="integral-item">
              <div className="integral-number">01</div>
              <h3>Inmobiliaria</h3>

              <p>
                Búsqueda, tasación, comercialización y conocimiento
                del mercado.
              </p>
            </div>

            <div className="integral-item">
              <div className="integral-number">02</div>
              <h3>Jurídica</h3>

              <p>
                Análisis de contratos, documentación y aspectos
                legales de la operación.
              </p>
            </div>

            <div className="integral-item">
              <div className="integral-number">03</div>
              <h3>Notarial</h3>

              <p>
                Análisis documental y antecedentes jurídicos de los
                inmuebles.
              </p>
            </div>

            <div className="integral-item">
              <div className="integral-number">04</div>
              <h3>Estrategia</h3>

              <p>
                Evaluación de alternativas y planificación de la
                inversión.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="inversiones-cta">

          <div className="inversiones-cta-content">

            <span>¿TENÉS CAPITAL PARA INVERTIR?</span>

            <h2>
              No sabés por dónde empezar.
              <br />
              Nosotros te ayudamos.
            </h2>

            <p>
              Te ayudamos a transformar una intención de inversión en
              una estrategia inmobiliaria concreta. Analizamos tus
              objetivos, evaluamos alternativas y te acompañamos para
              que puedas tomar decisiones con información y respaldo
              profesional.
            </p>

            <a
              href="https://wa.me/5493815475092"
              target="_blank"
              rel="noopener noreferrer"
              className="inversiones-cta-btn"
            >
              Consultar asesoramiento
            </a>

          </div>

        </section>


        {/* DISCLAIMER */}
        <section className="inversiones-disclaimer">

          <p>
            <strong>Importante:</strong> El asesoramiento se brinda de
            manera personalizada y no implica garantía de rentabilidad
            ni de valorización futura, ya que toda inversión inmobiliaria
            está sujeta a las condiciones del mercado y a sus riesgos
            propios.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Inversiones;