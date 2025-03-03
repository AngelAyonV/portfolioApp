import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          {/* 📌 Columna 1: Logo y nombre */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Mi Empresa</h5>
            <p className="text-muted">
              Soluciones innovadoras para tu negocio.
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

          {/* 📌 Columna 3: Redes Sociales */}
          <div className="col-md-4">
            <h5 className="fw-bold">Buscame</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="me-3 text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-3 text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 📌 Copyright */}
        <div className="mt-4">
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
