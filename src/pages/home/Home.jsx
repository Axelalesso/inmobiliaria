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

import WhySection from "../whysection/whysection";

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

        <WhySection />

        


    <section className="nosotros-section" id="nosotros">

  <div className="nosotros-container">

    <div className="nosotros-header">

      <span className="nosotros-tag">
        Nosotros
      </span>

      <h2 className="nosotros-title">
        Una mirada profesional
        <br />
        sobre cada <span>propiedad.</span>
      </h2>

      <p className="nosotros-intro">
        Inmobiliaria Díaz & Asociados nace con el propósito de brindar
        un servicio inmobiliario diferente, basado en la confianza,
        el asesoramiento profesional y la seguridad jurídica.
      </p>

    </div>


    <div className="nosotros-content">

      <div className="nosotros-text">

        <h3>
          Una forma diferente de
          entender el mercado inmobiliario
        </h3>

        <p>
          Nuestro enfoque combina la actividad inmobiliaria con una
          sólida formación y experiencia en el ámbito del Derecho,
          permitiendo acompañar a nuestros clientes de manera integral
          en decisiones tan importantes como comprar, vender o alquilar
          una propiedad.
        </p>

        <p>
          Entendemos que detrás de cada inmueble existe un proyecto,
          una inversión, una familia o una nueva etapa. Por eso,
          buscamos que cada operación sea acompañada con claridad,
          responsabilidad y atención personalizada.
        </p>

        <p>
          Contemplamos tanto las necesidades del cliente como los
          aspectos legales propios de cada operación.
        </p>

      </div>


      <div className="nosotros-profile">

        <h3>
          Dra. Noelia Karina Díaz
        </h3>

        <div className="nosotros-profession">
          Abogada · Escribana · Profesora de Derecho
          <br />
          Corredora Pública e Inmobiliaria
        </div>

        <p>
          Con más de 10 años de experiencia en el ámbito jurídico,
          la Dra. Noelia Karina Díaz integra su trayectoria profesional
          con su actividad inmobiliaria, aportando una visión
          especialmente orientada a la seguridad y el respaldo jurídico.
        </p>

        <div className="nosotros-formation">

          <div className="nosotros-formation-title">
            Formación profesional
          </div>

          <p>
            Cuenta con formación de posgrado en Derecho Societario,
            Derecho Tributario, Derecho Administrativo y Redacción
            de Sentencias, además de una Maestría en Formación de la
            Magistratura, realizada en el marco de la Escuela Judicial
            del Consejo Asesor de la Magistratura.
          </p>

        </div>

      </div>

    </div>
    
     <div className="about-location">

  <div className="about-location-info">
    <span className="about-location-tag">VISITANOS</span>

    <h3>Nuestra oficina</h3>

    <p>
      Lamadrid 117 · Oficina 110
      <br />
      San Miguel de Tucumán, Tucumán
    </p>
  </div>

  <div className="about-map">
    <iframe
      src="https://www.google.com/maps?q=Lamadrid+117,+San+Miguel+de+Tucumán,+Tucumán&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación de Inmobiliaria Díaz & Asociados"
    ></iframe>
  </div>

</div>


    <div className="nosotros-final">

      <p>
        Porque elegir una propiedad también es
        <span> elegir con quién confiar </span>
        una decisión importante.
      </p>

    </div>

   



  </div>

</section>


<section className="legal-disclaimer">
  <div className="legal-disclaimer-container">

    <h2>INFORMACIÓN LEGAL Y ADVERTENCIAS</h2>

    <p>
      Toda la información contenida en este sitio web es de carácter
      orientativo y puede estar sujeta a modificaciones. Los precios,
      la disponibilidad de unidades, las condiciones de financiación
      y las actualizaciones contractuales pueden variar según el
      contexto del mercado y la normativa legal vigente en el país.
    </p>

    <p>
      Para obtener información precisa, actualizada y personalizada
      al momento de tu decisión, es indispensable contactar con uno
      de nuestros asesores comerciales.
    </p>

  </div>
</section>



        <Footer />
      </div>
    </>
  );
}

export default Home;