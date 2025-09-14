import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4"
      style={{
        overflow: "hidden",
        background: "#fff",
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 180,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "220px",
            maxHeight: "180px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="p-4">
        <h5 style={{ fontWeight: 700 }}>{project.title}</h5>
        <p style={{ color: "#374151" }}>{project.description}</p>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {project.techs &&
            project.techs.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "#f3f3f3",
                  borderRadius: "16px",
                  padding: "6px 16px",
                  fontSize: "1rem",
                  color: "#222",
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-100 d-flex align-items-center justify-content-center"
          style={{
            background: "#222",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.1rem",
            borderRadius: "50px",
            padding: "12px 0",
            gap: "8px",
          }}
        >
          <OpenInNewIcon style={{ fontSize: 20 }} />
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
