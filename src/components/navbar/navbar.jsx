import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './navbar.css';
import { FaInstagram,FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/img/logo-inmo.jpeg" alt="Logo Coa Construcciones" className="logo-img" />
        </Link>
      </div>

      {/* ICONO HAMBURGUESA: Solo se mostrará en el celu vía CSS */}
      <div className="menu-hamburguesa" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* ITEMS DE NAVEGACIÓN */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="/" onClick={closeMenu}>Inicio</a>
        <a href="#propiedades" onClick={closeMenu}>Propiedades</a>
        
        <HashLink
          smooth
          to="/#servicios"
          onClick={closeMenu}
          >
            Servicios
        </HashLink>

        <HashLink
          smooth
          to="/#eleginos"
          onClick={closeMenu}
          >
            Eleginos
        </HashLink>

        <HashLink
          smooth
          to="/#nosotros"
          onClick={closeMenu}
          >
            Nosotros
        </HashLink>

        
        {/* Redes sociales dentro del menú (solo se ven en el celu) */}
        <div className="nav-social-mobile">
          <a href="https://www.instagram.com/inmobiliariadiazyasoc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/noelia-karina-diaz-1b7132246?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="social-icon"/>
        </a>
        </div>
      </div>

      {/* REDES SOCIALES ESCRITORIO: Se ocultarán en el celu vía CSS */}
      <div className="nav-social">
        <a href="https://www.instagram.com/inmobiliariadiazyasoc/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/noelia-karina-diaz-1b7132246?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="social-icon"/>
        </a>
      </div>
    </nav>
  );
}