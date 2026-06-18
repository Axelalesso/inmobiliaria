import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar"

import "./juridico.css";

const IconScale = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9l9-6 9 6M3 9h18M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9"/>
    <line x1="8" y1="14" x2="8" y2="14.01"/>
    <line x1="16" y1="14" x2="16" y2="14.01"/>
  </svg>
);

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconSearch = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconUsers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const serviciosVenta = [
  {
    icon: <IconSearch />,
    titulo: "Estudio de títulos",
    detalle: "Due Diligence y análisis exhaustivo de antecedentes dominiales.",
  },
  {
    icon: <IconShield />,
    titulo: "Saneamiento de títulos",
    detalle: "Regularización de documentación y eliminación de vicios registrales.",
  },
  {
    icon: <IconScale />,
    titulo: "Cancelación de hipotecas",
    detalle: "Levantamiento de embargos, inhibiciones y gravámenes reales.",
  },
  {
    icon: <IconUsers />,
    titulo: "Planificación sucesoria",
    detalle: "Estructuración patrimonial y transmisión hereditaria inmobiliaria.",
  },
  {
    icon: <IconScale />,
    titulo: "Contratos complejos",
    detalle: "Redacción y negociación de compraventas con cláusulas a medida.",
  },
  {
    icon: <IconSearch />,
    titulo: "Permutas y desarrollos",
    detalle: "Operaciones complejas, fideicomisos y proyectos inmobiliarios.",
  },
  {
    icon: <IconUsers />,
    titulo: "Mediación entre herederos",
    detalle: "Resolución de conflictos entre copropietarios y condóminos.",
  },
];

const serviciosAlquiler = [
  {
    icon: <IconShield />,
    titulo: "Auditoría de garantías",
    detalle: "Evaluación legal de avales, fianzas y garantías locativas.",
  },
  {
    icon: <IconScale />,
    titulo: "Contratos reforzados",
    detalle: "Cláusulas de protección integral para el propietario locador.",
  },
  {
    icon: <IconSearch />,
    titulo: "Gestión de morosidad",
    detalle: "Recupero extrajudicial de deudas con mínima fricción.",
  },
  {
    icon: <IconUsers />,
    titulo: "Cartas documento",
    detalle: "Emisión y seguimiento de intimaciones con respaldo jurídico.",
  },
  {
    icon: <IconShield />,
    titulo: "Convenios de desocupación",
    detalle: "Acuerdos de entrega anticipada del inmueble con seguridad legal.",
  },
  {
    icon: <IconScale />,
    titulo: "Defensa del propietario",
    detalle: "Representación integral ante incumplimientos y conflictos.",
  },
  {
    icon: <IconSearch />,
    titulo: "Ejecución contractual",
    detalle: "Acciones legales por incumplimientos de contrato de locación.",
  },
];

const diferenciales = [
  {
    numero: "01",
    titulo: "Protección Patrimonial",
    texto:
      "Resguardamos los intereses de nuestros clientes en cada etapa del proceso, anticipando riesgos antes de que se materialicen.",
  },
  {
    numero: "02",
    titulo: "Prevención de Conflictos",
    texto:
      "Analizamos cada situación para minimizar contingencias futuras, con un enfoque proactivo y no reactivo.",
  },
  {
    numero: "03",
    titulo: "Asesoramiento Integral",
    texto:
      "Área inmobiliaria y jurídica trabajando en perfecta sintonía para ofrecer una solución completa y sin fisuras.",
  },
];

function Juridico() {
  return (
    <>
      <Navbar />

      <Sidebar/>
      <main className="juridico-page">

        {/* ── HERO ── */}
        <section className="juridico-hero">
          <div className="juridico-hero__noise" />
          <div className="juridico-hero__content">
            <span className="juridico-eyebrow">Área Jurídica Especializada</span>
            <h1 className="juridico-hero__title">
              El respaldo legal que
              <br />
              <em>define la diferencia</em>
            </h1>
            <p className="juridico-hero__lead">
              Asesoramiento especializado en derecho inmobiliario, contractual
              y sucesorio — seguridad jurídica en cada operación.
            </p>
            <div className="juridico-hero__stats">
              <div className="hero-stat">
                <span className="hero-stat__num">+15</span>
                <span className="hero-stat__label">años de experiencia</span>
              </div>
              <div className="hero-stat__divider" />
              <div className="hero-stat">
                <span className="hero-stat__num">+800</span>
                <span className="hero-stat__label">operaciones asesoradas</span>
              </div>
              <div className="hero-stat__divider" />
              <div className="hero-stat">
                <span className="hero-stat__num">100%</span>
                <span className="hero-stat__label">enfoque en resultados</span>
              </div>
            </div>
          </div>
          <div className="juridico-hero__scroll-hint" aria-hidden="true">
            <span />
          </div>
        </section>

        {/* ── VENTA ── */}
        <section className="juridico-services">
          <div className="juridico-services__header">
            <span className="juridico-eyebrow">Operaciones de Venta</span>
            <h2>Servicios Jurídicos</h2>
            <p>Cobertura completa para cada etapa de la transacción.</p>
          </div>
          <div className="juridico-services__grid">
            {serviciosVenta.map((s, i) => (
              <article key={i} className="juridico-service-card">
                <div className="juridico-service-card__icon">{s.icon}</div>
                <h3>{s.titulo}</h3>
                <p>{s.detalle}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── ALQUILER ── */}
        <section className="juridico-services juridico-services--alt">
          <div className="juridico-services__header">
            <span className="juridico-eyebrow">Locaciones</span>
            <h2>Servicios para Alquileres</h2>
            <p>Protección integral para propietarios en contratos de locación.</p>
          </div>
          <div className="juridico-services__grid">
            {serviciosAlquiler.map((s, i) => (
              <article key={i} className="juridico-service-card juridico-service-card--dark">
                <div className="juridico-service-card__icon">{s.icon}</div>
                <h3>{s.titulo}</h3>
                <p>{s.detalle}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── DIFERENCIAL ── */}
        <section className="juridico-diferencial">
          <div className="juridico-diferencial__label">
            <span className="juridico-eyebrow">Diferencial</span>
            <h2>Seguridad jurídica<br />para cada operación</h2>
          </div>
          <div className="juridico-diferencial__items">
            {diferenciales.map((d, i) => (
              <div key={i} className="juridico-diferencial__item">
                <span className="juridico-diferencial__num">{d.numero}</span>
                <div>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="juridico-cta">
          <div className="juridico-cta__inner">
            <span className="juridico-eyebrow juridico-eyebrow--light">Contacto</span>
            <h2>¿Necesitás asesoramiento legal?</h2>
            <p>
              Recibí atención personalizada para tu caso. Nuestro equipo
              jurídico analiza tu situación sin costo inicial.
            </p>
            <a
              href="https://wa.me/+5493815475092"
              target="_blank"
              rel="noopener noreferrer"
              className="juridico-cta__btn"
            >
              <span>Solicitar consulta</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Juridico;