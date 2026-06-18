import "./capacitaciones.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar"

/* ── iconos SVG inline ── */
const IconGavel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 6l-8.5 8.5a2.12 2.12 0 0 0 3 3L17 9l-3-3z"/><path d="m16 2 6 6"/><path d="M3.4 20.4 2 22"/><path d="m9 3 3 3"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const cursos = [
  {
    icon: <IconHome />,
    tag: "Módulo 1",
    titulo: "Créditos Hipotecarios",
    desc: "Análisis, gestión y asesoramiento de créditos hipotecarios para operaciones inmobiliarias. Casos prácticos reales.",
  },
  {
    icon: <IconGavel />,
    tag: "Módulo 2",
    titulo: "Auxiliar Jurídico",
    desc: "Conceptos jurídicos fundamentales aplicados al ámbito profesional inmobiliario. Dictado por abogados en actividad.",
  },
];

const beneficios = [
  { icon: <IconUsers />, titulo: "Docentes especializados", desc: "Abogados y profesionales activos con años de trayectoria en el sector." },
  { icon: <IconBook />,  titulo: "Formación práctica",      desc: "Casos reales, simulaciones y ejercicios aplicados al mercado actual." },
  { icon: <IconRefresh />, titulo: "Contenido actualizado", desc: "Programas revisados permanentemente según la normativa vigente." },
  { icon: <IconBadge />, titulo: "Certificación oficial",   desc: "Certificado reconocido para potenciar tu perfil profesional." },
];

function Capacitaciones() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="cap-page">

      {/* ── HERO ── */}
      <section className="cap-hero">
        <div className="cap-hero__inner">
          <span className="cap-eyebrow">Capacitaciones</span>
          <h1 className="cap-hero__h1">
            Formación jurídica<br />
            <em>e inmobiliaria</em>
          </h1>
          <p className="cap-hero__p">
            Cursos dictados por docentes y abogados especializados
            para potenciar tu desarrollo profesional.
          </p>
          <div className="cap-hero__cta-row">
            <a href="#cursos" className="cap-btn cap-btn--outline">Ver cursos</a>
            <a
              href="https://wa.me/+5493815475092"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-btn cap-btn--gold"
            >
              <span className="cap-btn__icon"><IconWhatsApp /></span>
              Consultar ahora
            </a>
          </div>
        </div>
        <div className="cap-hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── CURSOS ── */}
      <section className="cap-cursos" id="cursos">
        <div className="cap-section-header">
          <span className="cap-eyebrow cap-eyebrow--dark">Programas</span>
          <h2 className="cap-section-h2">Nuestros cursos</h2>
        </div>
        <div className="cap-cursos__grid">
          {cursos.map((c, i) => (
            <article className="curso-card" key={i}>
              <div className="curso-card__icon" aria-hidden="true">{c.icon}</div>
              <span className="curso-card__tag">{c.tag}</span>
              <h3 className="curso-card__h3">{c.titulo}</h3>
              <p className="curso-card__p">{c.desc}</p>
              <div className="curso-card__footer">
                <a
                  href="https://wa.me/+5493815475092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="curso-card__link"
                >
                  Consultar inscripción <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="cap-beneficios">
        <div className="cap-section-header cap-section-header--light">
          <span className="cap-eyebrow cap-eyebrow--gold">Por qué elegirnos</span>
          <h2 className="cap-section-h2 cap-section-h2--light">
            Lo que nos distingue
          </h2>
        </div>
        <div className="beneficios-grid">
          {beneficios.map((b, i) => (
            <div className="beneficio-item" key={i}>
              <div className="beneficio-item__icon" aria-hidden="true">{b.icon}</div>
              <h4 className="beneficio-item__titulo">{b.titulo}</h4>
              <p className="beneficio-item__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cap-cta">
        <div className="cap-cta__inner">
          <span className="cap-eyebrow cap-eyebrow--dark">Inscripciones abiertas</span>
          <h2 className="cap-cta__h2">
            Tu próximo paso<br />comienza aquí
          </h2>
          <p className="cap-cta__p">
            Consultanos para conocer fechas, modalidad y requisitos.
            Te respondemos en menos de 24&nbsp;horas.
          </p>
          <a
            href="https://wa.me/+5493815475092"
            target="_blank"
            rel="noopener noreferrer"
            className="cap-btn cap-btn--gold cap-btn--lg"
          >
            <span className="cap-btn__icon"><IconWhatsApp /></span>
            Solicitar información
          </a>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}

export default Capacitaciones;