import { useParams } from "react-router-dom";
import { useState } from "react";
import properties from "../../data/propiedades";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";
import './propertydetail.css';

function PropertyDetail() {
  const { slug } = useParams();
  const property = properties.find(p => p.slug === slug);
  const [mainMedia, setMainMedia] = useState(property?.imagenes?.[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!property) {
    return <h1 className="error-message">Propiedad no encontrada</h1>;
  }

  const mensajeWhatsapp = encodeURIComponent(
    `¡Hola! Estoy interesado en la propiedad: ${property.nombre} (${window.location.href}). Me gustaría recibir más información.`
  );
  const whatsappLink = `https://wa.me/${property.whatsappSoporte}?text=${mensajeWhatsapp}`;

  const handlePrev = () => {
  const newIndex =
    (currentIndex - 1 + property.imagenes.length) %
    property.imagenes.length;

  setCurrentIndex(newIndex);
  setMainMedia(property.imagenes[newIndex]);
};

const handleNext = () => {
  const newIndex =
    (currentIndex + 1) %
    property.imagenes.length;

  setCurrentIndex(newIndex);
  setMainMedia(property.imagenes[newIndex]);
};

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="pd-page">

        {/* ── HEADER ── */}
        <div className="pd-header">
          <h1 className="pd-title">{property.nombre}</h1>
          <div className="pd-meta-row">
            <span className="pd-badge">{property.badge || "VENTA"}</span>
            <span className="pd-price">{property.precio}</span>
          </div>
        </div>

        <hr className="pd-divider-top" />

        {/* ── MAIN LAYOUT ── */}
        <div className="pd-main-layout">

          {/* LEFT: Gallery */}
          <div className="pd-gallery">
            <div className="pd-main-image-wrap">
              <button className="pd-arrow pd-arrow-left" onClick={handlePrev}>&#10094;</button>
                {mainMedia.endsWith(".mp4") ? (
                  <video
                     className="pd-main-image"
                     controls
                    autoPlay={false}
                  >
                  <source src={mainMedia} type="video/mp4" />
                  </video>
                ) : (
                <img
                  src={mainMedia}
                  alt={property.nombre}
                  className="pd-main-image"
                />
              )}



              <button className="pd-arrow pd-arrow-right" onClick={handleNext}>&#10095;</button>
            </div>

            
             <div className="pd-thumbnails">
  {property.imagenes.map((media, index) => (
    <div
      key={index}
      className={`pd-thumb-wrapper ${
        currentIndex === index ? "pd-thumb--active" : ""
      }`}
      onClick={() => {
        setMainMedia(media);
        setCurrentIndex(index);
      }}
    >
      {media.endsWith(".mp4") ? (
        <>
          <video
            src={media}
            muted
            className="pd-thumb"
          />
          <span className="pd-video-icon">▶</span>
        </>
      ) : (
        <img
          src={media}
          className="pd-thumb"
          alt=""
        />
      )}
    </div>
  ))}
</div>

          {/* RIGHT: Details Card */}
          <div className="pd-details-card">
            <div className="pd-details-header">
              <span>DETALLES DE LA PROPIEDAD</span>
            </div>

            <div className="pd-details-grid">
              <div className="pd-detail-item">
                <span className="pd-detail-label">Tipo de Propiedad</span>
                <span className="pd-detail-value">{property.tipo || "Departamento"}</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Ubicación</span>
                <span className="pd-detail-value">{property.zona}</span>
              </div>

              {property.superficie && (
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Total construido</span>
                  <span className="pd-detail-value">{property.superficie} m²</span>
                </div>
              )}
              {property.superficieCubierta && (
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Superficie cubierta</span>
                  <span className="pd-detail-value">{property.superficieCubierta} m²</span>
                </div>
              )}

              {property.dormitorios && (
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Ambientes</span>
                  <span className="pd-detail-value">{property.dormitorios}</span>
                </div>
              )}
              {property.banos && (
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Baños</span>
                  <span className="pd-detail-value">{property.banos}</span>
                </div>
              )}
              {property.cochera && (
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Cochera</span>
                  <span className="pd-detail-value">{property.cochera}</span>
                </div>
              )}
            </div>

            {property.id && (
              <p className="pd-ref">(REF. IAP{String(property.id).padStart(7, '0')})</p>
            )}

            {/* Thumbnail strip inside card */}
           <div className="pd-card-thumbs">
              {property.imagenes.slice(0, 4).map((media, index) => (
                <div
                  key={index}
                  className={`pd-thumb-wrapper ${
                    currentIndex === index ? "pd-thumb--active" : ""
                  }`}
                    onClick={() => {
                   setMainMedia(media);
        setCurrentIndex(index);
      }}
    >
      {media.endsWith(".mp4") ? (
        <>
          <video
            src={media}
            muted
            className="pd-card-thumb"
          />
          <span className="pd-video-icon">▶</span>
        </>
      ) : (
        <img
          src={media}
          className="pd-card-thumb"
          alt=""
        />
      )}
    </div>
  ))}
</div>
</div>

            {/* WhatsApp CTA */}
            <div className="pd-whatsapp-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-whatsapp-btn"
            >
                <FaWhatsapp />
                  Consultar por esta propiedad
            </a>
            </div>
          </div>
        </div>

        {/* ── DESCRIPTION ── */}
        <div className="pd-description-section">
          <p className="pd-description-text">{property.descripcion}</p>
        </div>

        {/* ── MAP (optional) ── */}
        {property.mapaUrl && (
          <div className="pd-map-section">
            <h3 className="pd-section-title">Ubicación</h3>
            <div className="pd-map-wrapper">
              <iframe
                src={property.mapaUrl}
                title={`Mapa de ${property.nombre}`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default PropertyDetail;