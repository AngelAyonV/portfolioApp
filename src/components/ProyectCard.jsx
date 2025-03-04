const ProjectCard = ({ project }) => {
  return (
    <div className="card shadow-sm p-3 rounded-4 border-0 d-flex flex-row align-items-center">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="ms-3">
        <h5 className="mb-1">{project.title}</h5>
        <p className="text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
