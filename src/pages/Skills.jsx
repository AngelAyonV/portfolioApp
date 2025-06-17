import React from "react";
import BuildIcon from "@mui/icons-material/Build";
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
      <div
        className="skills-center p-4 rounded"
        style={{
          background: "#f5f7fa",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        <BuildIcon
          style={{
            fontSize: 50,
            color: "#1976d2",
            marginBottom: 8,
          }}
        />
        <h1
          className="fw-bold"
          style={{
            color: "#1976d2",
          }}
        >
          Mis Tecnologías
        </h1>
        <p
          style={{
            color: "#333",
          }}
        >
          Las herramientas que uso para construir en los proyectos que trabajo
        </p>
      </div>

      {/* Contenedor de cards de tecnologías */}
      <div className="skills-container d-flex flex-wrap justify-content-center gap-4 mt-4">
        {[
          { src: react, alt: "React", name: "React" },
          { src: javascript, alt: "JavaScript", name: "JavaScript" },
          { src: rubyRails, alt: "Ruby on Rails", name: "Ruby on Rails" },
          { src: html, alt: "HTML", name: "HTML" },
          { src: css, alt: "CSS", name: "CSS" },
          { src: tailwind, alt: "TailwindCSS", name: "TailwindCSS" },
          { src: reactNative, alt: "React Native", name: "React Native" },
          { src: bootstrap, alt: "Bootstrap", name: "Bootstrap" },
          { src: php, alt: "PHP", name: "PHP" },
          { src: cpp, alt: "C++", name: "C++" },
          { src: sql, alt: "SQL", name: "SQL" },
          { src: mysql, alt: "MySQL", name: "MySQL" },
          { src: postgresql, alt: "PostgreSQL", name: "PostgreSQL" },
        ].map((tech, idx) => (
          <div
            key={idx}
            className="tech-card d-flex flex-column align-items-center p-3 bg-white rounded shadow-sm"
            style={{
              width: 110,
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(25, 118, 210, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
            }}
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="mb-2"
              style={{
                width: 48,
                height: 48,
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontWeight: 500,
                color: "#1976d2",
                fontSize: 15,
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
