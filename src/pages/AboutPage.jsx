import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const AboutPage = () => {
  // Función para ir a la sección de habilidades
  const goToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="about-page">
      {/* Mensaje en la parte superior pegado completamente */}
      <div className="about-header">
        <h2 className="text-white">Bienvenido a mi historia</h2>
        <p className="text-white">Conoce más sobre mí y mi trayectoria</p>
      </div>

      {/* Contenido principal */}
      <div className="about-content">
        <h1>Sobre Mí</h1>
        <p>Soy un programador apasionado por la innovación y la tecnología.</p>
      </div>
      <div className="container text-center about-page">
        {/* Fila para estudios y experiencia */}
        <div className="row mt-5">
          {/* Columna 1: Estudios */}
          <div className="col-md-5 p-4 bg-light rounded shadow my-0 text-start">
            <div className="text-center mb-2">
              <SchoolIcon style={{ fontSize: 40, color: "#1976d2" }} />
            </div>
            <h3>Mis Estudios</h3>
            <ul className="list-unstyled mb-0 ">
              <li>
                <h4 style={{ color: "#374151", marginBottom: 0 }}>
                  Licenciatura en Informática
                </h4>
                <span
                  style={{
                    color: "#1a237e", // azul oscuro
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    display: "block",
                    marginBottom: 2,
                  }}
                >
                  Universidad Autónoma de Sinaloa (UAS)
                </span>
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "1rem",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  2020 – 2025
                </span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2.5rem",
                    color: "#1976d2",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                    marginTop: 8,
                  }}
                >
                  <span>Desarrollo Web</span>
                  <span>Bases de Datos</span>
                  <span>Ingeniería de Software</span>
                  <span>Programación Orientada a Objetos</span>
                  <span>Redes de Computadoras</span>
                  <span>Seguridad Informática</span>
                  <span>Inteligencia Artificial</span>
                  <span>Administración de Proyectos</span>
                  <span>Sistemas Operativos</span>
                  <span>Algoritmos y Estructuras de Datos</span>
                  <span>Desarrollo Móvil</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Línea separadora (solo en pantallas grandes) */}
          <div className="col-md-2 d-none d-md-block">
            <div className="divider"></div>
          </div>

          {/* Columna 2: Experiencia */}
          <div className="col-md-5 p-4 bg-light rounded shadow text-start">
            <div className="text-center mb-2">
              <WorkIcon style={{ fontSize: 40, color: "#1976d2" }} />
            </div>
            <h3 style={{ color: "#1a237e", marginBottom: 24 }}>
              Historial Laboral
            </h3>
            <div style={{ marginBottom: 24 }}>
              <h5 style={{ color: "#374151", marginBottom: 0 }}>
                NEXGEN SYSTEMS
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: 600 }}>Desarrollador Web Jr.</span>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                  2025 Actual
                </span>
              </div>
              <ul style={{ marginLeft: 0, paddingLeft: 18, marginBottom: 12 }}>
                <li>
                  Desarrollo fullstack: interfaces web (React, Angular, Vue) y
                  APIs RESTful.
                </li>
                <li>
                  Integración de IA en procesos de negocio y consumo de APIs
                  (OpenAI, Gemini).
                </li>
                <li>
                  Gestión de bases de datos (PostgreSQL, MongoDB), seguridad y
                  rendimiento.
                </li>
                <li>
                  Colaboración en equipos multidisciplinarios, documentación y
                  soporte técnico.
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: 24 }}>
              <h5 style={{ color: "#374151", marginBottom: 0 }}>
                SANTA MARIA DE LA LUZ FUNERARIA
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: 600 }}>
                  Practicante Programador Jr.
                </span>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                  2025
                </span>
              </div>
              <ul style={{ marginLeft: 0, paddingLeft: 18, marginBottom: 12 }}>
                <li>
                  Desarrollo y mejora del sistema interno usando React, Ruby on
                  Rails, MySQL.
                </li>
                <li>
                  Implementación de nuevas funcionalidades, optimizando procesos
                  internos.
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: 24 }}>
              <h5 style={{ color: "#374151", marginBottom: 0 }}>
                FIC Y FCFM UAS
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: 600 }}>
                  Actualización de la página web y mantenimiento a equipos de
                  cómputo
                </span>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                  2024
                </span>
              </div>
              <ul style={{ marginLeft: 0, paddingLeft: 18, marginBottom: 12 }}>
                <li>Actualización de la página web mediante WordPress.</li>
                <li>
                  Mantenimiento preventivo y correctivo de equipos de cómputo.
                </li>
                <li>
                  Diagnóstico y solución de problemas técnicos en sistemas
                  operativos y software.
                </li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: "#374151", marginBottom: 0 }}>
                VALDEZ BALUARTE
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: 600 }}>
                  Analista de Carteras de Clientes
                </span>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                  2022
                </span>
              </div>
              <ul style={{ marginLeft: 0, paddingLeft: 18 }}>
                <li>
                  Revisión, organización y actualización de datos en carteras de
                  clientes.
                </li>
                <li>
                  Creación y mantenimiento de archivos físicos y digitales.
                </li>
                <li>Manejo de sistemas CRM y software de gestión de datos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección de habilidades con botón */}
        <div className="py-4">
          <h3 className="fw-bold skills-text">Mis Habilidades</h3>
          <button
            className="btn btn-dark mt-3 px-4"
            style={{
              borderRadius: "999px",
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: "1.1rem",
              letterSpacing: "1px",
            }}
            onClick={goToSkills}
          >
            Ver Habilidades ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
