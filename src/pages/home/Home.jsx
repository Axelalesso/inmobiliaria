import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import SearchBar from "../../components/searchbar/searchbar";
import Properties from "../../components/properties/properties";
import Services from "../../components/services/services";
import Footer from "../../components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "../../components/sidebar/sidebar";
import { useInView } from "react-intersection-observer";
import HeroSlider from "../../components/heroslider/heroslider";

import "./home.css";



function Home() {
  return (
    <>
      <div>
        <a
          href="https://wa.me/5493815475092"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <Sidebar />

        <Navbar />
        <Hero />
        <SearchBar />

        <HeroSlider/>


        <Properties />
        <Services />

        <section className="why-section">

      <div className="why-header">
        <span>¿Por qué elegirnos?</span>

        <h2 id="eleginos" >
          Más que una inmobiliaria,
          <br />
          un respaldo integral
        </h2>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <img src="/img/atencioncliente.jpeg" alt="atencion personalizada" />
          <h3>Atención Personalizada</h3>
          <p>
            Cada cliente recibe asesoramiento
            adaptado a sus necesidades.
          </p>
        </div>
        

        <div className="why-card-2">
          <img src="/img/abogados.webp" alt="equipo juridico e inmobiliario" />
          <h3>Equipo Jurídico e Inmobiliario</h3>
          <p>
            Experiencia legal e inmobiliaria
            trabajando de manera integrada.
          </p>
        </div>

        <div className="why-card-3">
          <img src="/img/seguridad-juridica.jpg" alt="seguridad legal" />
          <h3>Seguridad Legal</h3>
          <p>
            Analizamos cada operación para
            brindar tranquilidad y respaldo.
          </p>
        </div>

        <div className="why-card-4">
          <img src="/img/marketing.jpg" alt="marketing inmobiliario" />
          <h3>Marketing Inmobiliario</h3>
          <p>
            Estrategias modernas para maximizar
            la visibilidad de cada propiedad.
          </p>
        </div>

        <div className="why-card-5">
          <img src="/img/claves-transparencia.jpg" alt="transparencia" />
          <h3>Transparencia</h3>
          <p>
            Comunicación clara y compromiso
            durante todo el proceso.
          </p>
        </div>

        <div className="why-card-6">
          <img src="/img/legal.jpg" alt="acompañamiento integral" />
          <h3>Acompañamiento Integral</h3>
          <p>
            Desde la primera consulta hasta
            la firma final.
          </p>
        </div>

      </div>

    </section>

        
      <section className="about-section">

      <div className="about-left">

        <span className="about-tag">
          Sobre Nosotros
        </span>

        <h2 id="nosotros" className="about-title">
          Experiencia,
          <br />
          confianza y
          <br />
          respaldo jurídico
        </h2>

      </div>

      <div className="about-right">

        <p className="about-text">
          En Inmobiliaria Díaz & Asociados trabajamos
          para brindar soluciones inmobiliarias y
          jurídicas integrales, acompañando a cada
          cliente con profesionalismo, transparencia
          y compromiso.
        </p>

        <p className="about-text">
          Nuestro equipo combina experiencia en el
          mercado inmobiliario con asesoramiento
          legal especializado, garantizando seguridad
          en cada operación de compra, venta,
          alquiler e inversión.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <h3>
                +30
              </h3>
                  <span>Años de experiencia</span>
            </div>

          <div className="about-stat">
             <h3>
      +100
    </h3>
    <span>Operaciones realizadas</span>
  </div>

  <div className="about-stat">
    <h3>
      
      %100
    </h3>
    <span>Atención personalizada</span>
  </div>

        </div>

      </div>

    </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;