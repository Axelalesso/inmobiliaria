import "./propertycard.css";

function PropertyCard({ property }) {
  return (
    <div className="prop-card">
      <div className="prop-img">
        <img
          src={property.imagen}
          alt={property.nombre}
          className="property-image"
        />

        <div className="prop-badge">
          {property.badge}
        </div>
      </div>

      <div className="prop-body">
        <div className="prop-tipo">
          {property.tipo}
        </div>

        <h3 className="prop-nombre">
          {property.nombre}
        </h3>

        <div className="prop-zona">
          📍 {property.zona}
        </div>

        <div className="prop-features">
          {property.dormitorios && (
            <div>{property.dormitorios} dorm.</div>
          )}

          {property.banos && (
            <div>{property.banos} baños</div>
          )}

          {property.metros && (
            <div>{property.metros} m²</div>
          )}

          {property.cochera && (
            <div>{property.cochera} cochera</div>
          )}
        </div>

        <div className="prop-price">
          {property.precio}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;