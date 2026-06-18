import { useState, useMemo,  useEffect } from "react";
import properties from "../../data/propiedades";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./propiedades.css";



/* ── Iconos ── */
const IconBed = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V19"/><path d="M22 9V19"/><path d="M2 14h20"/><rect x="6" y="4" width="12" height="5" rx="1"/>
  </svg>
);
const IconBath = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 9 2 3 2 3 11"/><path d="M3 11a9 9 0 0 0 18 0H3z"/><path d="M12 20v2"/><path d="M9 23h6"/>
  </svg>
);
const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="11" width="22" height="9" rx="2"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><circle cx="7.5" cy="15.5" r="1.5"/><circle cx="16.5" cy="15.5" r="1.5"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);
const IconList = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="5" rx="1"/><rect x="3" y="11" width="18" height="5" rx="1"/><rect x="3" y="18" width="18" height="3" rx="1"/>
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconChevron = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: ".3s" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

/* ── tipos únicos para filtro ── */
const TIPOS = ["Todos", ...new Set(properties.map(p => p.tipo))];
const BADGES = ["Todos", ...new Set(properties.map(p => p.badge))];
const ORDEN_OPTS = ["Más recientes", "Menor precio", "Mayor precio"];

function badgeColor(badge) {
  if (!badge) return "badge--default";
  const b = badge.toLowerCase();
  if (b.includes("venta")) return "badge--venta";
  if (b.includes("alquiler")) return "badge--alquiler";
  return "badge--default";
}

function parsePrice(str) {
  if (!str) return 0;
  return parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;
}

/* ── Accordion sidebar ── */
function Accordion({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="prop-accordion">
      <button className="prop-accordion__head" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <IconChevron open={open} />
      </button>
      {open && <div className="prop-accordion__body">{children}</div>}
    </div>
  );
}

/* ── Card ── */
function PropCard({ p, view }) {
  const [saved, setSaved] = useState(false);
  return (

    <article className={`prop-card ${view === "list" ? "prop-card--list" : ""}`}>
      <div className="prop-card__img-wrap">
        <img src={p.imagen} alt={p.nombre} loading="lazy" />
        <span className={`prop-badge ${badgeColor(p.badge)}`}>{p.badge}</span>
        <button
          className={`prop-card__save ${saved ? "prop-card__save--active" : ""}`}
          onClick={() => setSaved(!saved)}
          aria-label="Guardar"
        >
          <IconHeart />
        </button>
        <div className="prop-card__tipo">{p.tipo}</div>
      </div>

      <div className="prop-card__body">
        <div className="prop-card__zona">
          <IconPin />
          <span>{p.zona}</span>
        </div>
        <h3 className="prop-card__nombre">{p.nombre}</h3>

        {(p.dormitorios || p.banos || p.cochera) && (
          <div className="prop-card__specs">
            {p.dormitorios && (
              <span><IconBed />{p.dormitorios} dorm.</span>
            )}
            {p.banos && (
              <span><IconBath />{p.banos} baños</span>
            )}
            {p.cochera && (
              <span><IconCar />{p.cochera} coch.</span>
            )}
          </div>
        )}

        <div className="prop-card__footer">
  <p className="prop-card__precio">
    {p.precio}
  </p>

  <div className="prop-card__actions">

    <Link
      to={`/propiedad/${p.slug}`}
      className="prop-card__detalle"
    >
      Ver detalle
    </Link>

    <a
      href="https://wa.me/5493815475092"
      target="_blank"
      rel="noopener noreferrer"
      className="prop-card__cta"
    >
      <IconWhatsApp />
      Consultar
    </a>

  </div>
        </div>
      </div>
    </article>

  );
}

/* ── Página principal ── */
export default function Propiedades() {

  const [searchParams] = useSearchParams();

  const [tipoActivo, setTipoActivo] = useState("Todos");
  const [badgeActivo, setBadgeActivo] = useState("Todos");
  const [orden, setOrden] = useState("Más recientes");
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  useEffect(() => {

    const operacion = searchParams.get("operacion");
    const tipo = searchParams.get("tipo");
    const zona = searchParams.get("zona");

    if (operacion) {

      if (
        operacion.toLowerCase() === "comprar" ||
        operacion.toLowerCase() === "venta"
      ) {
        setBadgeActivo("En venta");
      }

      if (
        operacion.toLowerCase() === "alquilar" ||
        operacion.toLowerCase() === "alquiler"
      ) {
        setBadgeActivo("En alquiler");
      }

    }

    if (tipo) {
      setTipoActivo(tipo);
    }

    if (zona) {
      setSearch(zona);
    }

  }, [searchParams]);

  const filtered = useMemo(() => {
  let list = properties.filter((p) => {

    const matchTipo =
      tipoActivo === "Todos" ||
      p.tipo === tipoActivo;

    const matchBadge =
      badgeActivo === "Todos" ||
      p.badge === badgeActivo;

    const matchSearch =
      !search ||
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.zona.toLowerCase().includes(search.toLowerCase());

    return (
      matchTipo &&
      matchBadge &&
      matchSearch
    );
  });

  return list;
}, [
  tipoActivo,
  badgeActivo,
  search
]);

const hayFiltros =
  tipoActivo !== "Todos" ||
  badgeActivo !== "Todos" ||
  search.trim() !== "";



  return (
    <div className="prop-page">
      <Navbar />
      <Sidebar />

      {/* ── HEADER ── */}
      <header className="prop-header">
        <div className="prop-header__inner">
          <p className="prop-header__count">
            <span>{filtered.length}</span> propiedades encontradas
          </p>
          <h1 className="prop-header__title">Propiedades en Venta y Alquiler</h1>
          <nav className="prop-breadcrumb" aria-label="breadcrumb">
            Inicio <span>/</span> Propiedades <span>/</span> Resultados
          </nav>
        </div>
      </header>

      <div className="prop-layout">

        {/* ── SIDEBAR FILTROS ── */}
        <aside className="prop-sidebar">

          <div className="prop-sidebar__header">
            <h2>Filtros</h2>
            {hayFiltros && (
              <button className="prop-sidebar__clear" onClick={() => {
                setTipoActivo("Todos");
                setBadgeActivo("Todos");
                setSearch("");
              }}>
                Limpiar todo
              </button>
            )}
          </div>

          {/* Filtros activos */}
          {hayFiltros && (
            <div className="prop-active-filters">
              {tipoActivo !== "Todos" && (
                <span className="prop-chip">
                  {tipoActivo}
                  <button onClick={() => setTipoActivo("Todos")}><IconClose /></button>
                </span>
              )}
              {badgeActivo !== "Todos" && (
                <span className="prop-chip">
                  {badgeActivo}
                  <button onClick={() => setBadgeActivo("Todos")}><IconClose /></button>
                </span>
              )}
              {search && (
                <span className="prop-chip">
                  "{search}"
                  <button onClick={() => setSearch("")}><IconClose /></button>
                </span>
              )}
            </div>
          )}

          {/* Búsqueda */}
          <Accordion title="Buscar" defaultOpen={true}>
            <input
              className="prop-input"
              type="text"
              placeholder="Zona, nombre…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Accordion>

          {/* Operación */}
          <Accordion title="Operación">
            <div className="prop-filter-pills">
              {BADGES.map(b => (
                <button
                  key={b}
                  className={`prop-pill ${badgeActivo === b ? "prop-pill--active" : ""}`}
                  onClick={() => setBadgeActivo(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </Accordion>

          {/* Tipo de propiedad */}
          <Accordion title="Tipo de propiedad">
            <div className="prop-filter-list">
              {TIPOS.map(t => (
                <label key={t} className="prop-radio">
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipoActivo === t}
                    onChange={() => setTipoActivo(t)}
                  />
                  <span className="prop-radio__dot" />
                  <span className="prop-radio__label">{t}</span>
                </label>
              ))}
            </div>
          </Accordion>

        </aside>

        {/* ── CONTENIDO ── */}
        <main className="prop-main">

          {/* Barra superior */}
          <div className="prop-toolbar">
            <p className="prop-toolbar__count">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="prop-toolbar__right">
              <label className="prop-toolbar__label">
                Ordenar:
                <select
                  className="prop-select"
                  value={orden}
                  onChange={e => setOrden(e.target.value)}
                >
                  {ORDEN_OPTS.map(o => <option key={o}>{o}</option>)}
                </select>
              </label>
              <div className="prop-view-toggle">
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                  aria-label="Vista grilla"
                >
                  <IconGrid />
                </button>
                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                  aria-label="Vista lista"
                >
                  <IconList />
                </button>
              </div>
            </div>
          </div>

          {/* Grid / List */}
          {filtered.length === 0 ? (
            <div className="prop-empty">
              <p>No se encontraron propiedades con los filtros seleccionados.</p>
              <button onClick={() => { setTipoActivo("Todos"); setBadgeActivo("Todos"); setSearch(""); }}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className={`prop-grid ${view === "list" ? "prop-grid--list" : ""}`}>
              {filtered.map((p, i) => (
                <div key={p.id} style={{ animationDelay: `${i * 0.07}s` }} className="prop-grid__item">
                  <PropCard p={p} view={view} />
                </div>
              ))}
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}