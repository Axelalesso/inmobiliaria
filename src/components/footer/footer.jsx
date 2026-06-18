import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        © 2026 Inmobiliaria Díaz y Asociados
      </div>

      <div className="footer-dev">
        Desarrollado por{" "}
        <a
          href="https://www.instagram.com/alessocode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AlessoCode
        </a>
      </div>

      <div className="footer-links">
        <a href="#propiedades">Propiedades</a>
        <a href="#propiedades">Juridico</a>
        <a href="#propiedades">Capacitaciones</a>
        <a href="#servicios">Contacto</a>
      </div>
    </footer>
  );
}

export default Footer;