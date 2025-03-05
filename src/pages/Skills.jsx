import React from "react";
import images from "../../public/logo-images/index"; // Importa el archivo de barril
import react from "/logo-images/react-image.png";


const Skills = () => {
  return (
    <div className="skills-page">
      {/* Texto central llamativo */}
      <div className="skills-center">
        <h1>Mis Tecnologías 💻</h1>
        <p>Las herramientas que uso para construir en los proyectos que trabajo</p>
      </div>

      {/* Contenedor de imágenes flotantes */}
      <div className="skills-container">
        <img src={react} alt="React" className="image" />
        <img
          src="/logo-images/js-image.png"
          alt="JavaScript"
          className="image"
        />
        <img
          src="/logo-images/rubyrails-image.png"
          alt="Ruby on Rails"
          className="image"
        />
        <img src="/logo-images/html-image.png" alt="HTML" className="image" />
        <img src="/logo-images/css-image.png" alt="CSS" className="image" />
        <img
          src="/logo-images/tailwind-image.png"
          alt="TailwindCSS"
          className="image"
        />
        <img
          src="/logo-images/reactnative-image.png"
          alt="React Native"
          className="image"
        />
        <img
          src="/logo-images/boostrap-image.png"
          alt="Bootstrap"
          className="image"
        />
        <img src="/logo-images/php-image.png" alt="PHP" className="image" />
        <img src="/logo-images/c++-image.png" alt="C++" className="image" />
        <img src="/logo-images/sql-image.png" alt="SQL" className="image" />
        <img src="/logo-images/mysql-image.png" alt="MySQL" className="image" />
        <img
          src="/logo-images/postgresql-image.png"
          alt="PostgreSQL"
          className="image"
        />
      </div>
    </div>
  );
};

export default Skills;
