import React from "react";
import react from "/logo-images/react-image.png";
import javascript from "/logo-images/js-image.png";
import rubyRails from "/logo-images/rubyrails-image.png";
import html from "/logo-images/html-image.png";
import css from "/logo-images/css-image.png";
import tailwind from "/logo-images/tailwind-image.png";
import reactNative from "/logo-images/reactnative-image.png";
import bootstrap from "/logo-images/boostrap-image.png";
import php from "/logo-images/php-image.png";
import cpp from "/logo-images/cpp-image.png";
import sql from "/logo-images/sql-image.png";
import mysql from "/logo-images/mysql-image.png";
import postgresql from "/logo-images/postgresql-image.png";


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
          src={javascript}
          alt="JavaScript"
          className="image"
        />
        <img
          src={rubyRails}
          alt="Ruby on Rails"
          className="image"
        />
        <img src={html} alt="HTML" className="image" />
        <img src={css} alt="CSS" className="image" />
        <img
          src={tailwind}
          alt="TailwindCSS"
          className="image"
        />
        <img
          src={reactNative}
          alt="React Native"
          className="image"
        />
        <img
          src={bootstrap}
          alt="Bootstrap"
          className="image"
        />
        <img src={php} alt="PHP" className="image" />
        <img src={cpp} alt="C++" className="image" />
        <img src={sql} alt="SQL" className="image" />
        <img src={mysql} alt="MySQL" className="image" />
        <img
          src={postgresql}
          alt="PostgreSQL"
          className="image"
        />
      </div>
    </div>
  );
};

export default Skills;
