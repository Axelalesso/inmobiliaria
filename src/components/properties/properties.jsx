import propiedades from "../../data/propiedades";
import PropertyCard from "../propertycard/propertycard";
import "./properties.css";

function Properties() {
  return (
    <section id="propiedades" className="props-section">
      <div className="props-grid">
        {propiedades.map((propiedad) => (
          <PropertyCard
            key={propiedad.id}
            property={propiedad}
          />
        ))}
      </div>
    </section>
  );
}

export default Properties;