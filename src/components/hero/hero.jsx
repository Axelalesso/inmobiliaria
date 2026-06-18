import "./hero.css";

function Hero() {
  return (
    <section className="hero">

  <div className="hero-left">

  
    <span className="hero-tag">
      Inmobiliaria & Área Jurídica
    </span>

    <h1 className="hero-title">
      Seguridad jurídica
      <br />
      para cada operación
      <br />
      <span>inmobiliaria</span>
    </h1>

    <p className="hero-sub">
      Compra, venta, alquileres y asesoramiento
      jurídico especializado para cada etapa
      de la operación.
    </p>


  </div>

  <div className="hero-right">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="hero-video"
    >
      <source
        src="/videos/video-hero.mp4"
        type="video/mp4"
      />
    </video>

  </div>

</section>
  );
}

export default Hero;