import React from "react";
import { projectsData } from "../data/Data-Proyects";
import ProjectCard from "../components/ProyectCard";

const Projects = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-6 mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
