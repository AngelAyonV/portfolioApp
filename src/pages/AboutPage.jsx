import React from "react";

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
        <div className="row align-items-center mt-5">
          {/* Columna 1: Estudios */}
          <div className="col-md-5 p-4 bg-light rounded shadow my-4">
            <h3>🎓 Mis Estudios</h3>
            <p>Estudiante de [Facultad de Informatica UAS].</p>
            <p>Licenciatura en Informatica. Especialización en [desarrollo de paginas web].</p>
            <p>Ingles basico.</p>
          </div>

          {/* Línea separadora (solo en pantallas grandes) */}
          <div className="col-md-2 d-none d-md-block">
            <div className="divider"></div>
          </div>

          {/* Columna 2: Experiencia */}
          <div className="col-md-5 p-4 bg-light rounded shadow">
            <h3>💼 Experiencia</h3>
            <p>Practicante en [FCFM UAS] mantenimiento a la pagina de la facultad FIC.</p>
            <p>Proyectos personales con React React Native.</p>
            <p>Prácticas en [Area de sistemas en Funeraria Santa Maria de la Luz].</p>
          </div>
        </div>

        {/* Sección de habilidades con botón */}
        <div className="py-4">
          <h3 className="fw-bold skills-text">🔥 Mis Habilidades</h3>
          <button className="btn btn-dark mt-3 px-4 " onClick={goToSkills}>
            Ver Habilidades ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
