import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          {/* 📌 Columna 1: Logo y Eslogan */}
          <div className="col-md-4 mb-3 text-center">
            {/* <img src="/logo.png" alt="Ángel Ayón" className="logo-img mb-2" /> */}
            <h5 className="fw-bold">🚀 Ángel Ayón</h5>
            <p className="text-light">
              Desarrollador web | React, React Native
            </p>
          </div>

          {/* 📌 Columna 2: Enlaces rápidos */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#proyects" className="text-light text-decoration-none">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-light text-decoration-none">
                  Habilidades
                </a>
              </li>
            </ul>
          </div>
          {/* 📌 Columna 3: Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">📌 Búscame en:</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://mx.linkedin.com/in/angel-ayon-a2a51433b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 LinkedIn
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.computrabajo.com.mx/cvs/TU-PERFIL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 Computrabajo
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://www.occ.com.mx/perfil/TU-PERFIL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎯 OCC Mundial
                </a>
              </li> */}
              <li>
                <a
                  href="https://github.com/AngelAyonV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🖥️ GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 📌 Copyright */}
        <div className="mt-4">
          <p className="text-light text-decoration-none">
            &copy; {new Date().getFullYear()} Todos los derechos reservados
            Angel Ayon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
