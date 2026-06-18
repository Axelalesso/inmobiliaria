import "./contact.css";
import { useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar";
import emailjs from "emailjs-com";


function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_w9rd2fr",
      "template_93a26vh",
      form.current,
      "cBWCN85JKR53z4jF9"
    )
    .then(() => {
      setSuccess("Consulta enviada correctamente ✓");
      form.current.reset();
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setSuccess("Error al enviar la consulta");
      setLoading(false);
    });
  };

  return (
    <>
    <Navbar />
    <Sidebar/>
    <section id="contacto" className="contact-section">

      <div className="contact-right">
        <div className="contact-header">
          <h2 className="contact-title">Solicite una consulta</h2>
          <p className="contact-subtitle">
            Nuestro equipo se comunicará con usted a la brevedad.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder="Juan García"
                required
              />
            </div>

            <div className="field-group">
              <label className="field-label">Teléfono</label>
              <input
                type="tel"
                name="user_phone"
                placeholder="+54 11 1234-5678"
                required
              />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="juan@empresa.com"
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Servicio</label>
            <select name="service" required>
              <option value="">Seleccione una opción</option>
              <option value="Comprar">Quiero comprar</option>
              <option value="Vender">Quiero vender</option>
              <option value="Alquilar">Quiero alquilar</option>
              <option value="Tasar">Quiero tasar</option>
            </select>
          </div>

          <div className="divider" />

          <div className="field-group">
            <label className="field-label">Mensaje</label>
            <textarea
              name="message"
              placeholder="Contanos en qué podemos ayudarte..."
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar consulta →"}
          </button>

          <p className="form-note">🔒 Tu información es confidencial y nunca se comparte con terceros.</p>

          {success && <p className="form-success">{success}</p>}

        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Contact;