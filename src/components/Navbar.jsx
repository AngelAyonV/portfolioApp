import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand my-3" href="#">
          Angel Ayon
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)} // Cambia el estado al hacer clic
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyects" onClick={closeNavbar}>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeNavbar}>
                Habilidades
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
