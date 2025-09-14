import React from "react";
import { projectsData } from "../data/Data-Proyects";
import ProjectCard from "../components/ProyectCard";

const Projects = () => {
  return (
    <div className="container mt-4">
      <h2
        className="text-center fw-bold mb-2"
        style={{ color: "#1976d2", letterSpacing: "1px" }}
      >
        Mis Proyectos
      </h2>
      <p
        className="text-center mb-4"
        style={{ color: "#374151", fontSize: "1.15rem" }}
      >
        Una colección de aplicaciones web desarrolladas con React y tecnologías
        modernas
      </p>{" "}
      <div className="row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
