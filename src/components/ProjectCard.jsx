const ProjectCard = ({ imageName, altText }) => {
  return (
    <div className="col-3 project-card">
      <img
        src={`/images/projects/${imageName}`}
        alt={altText}
        className="project-image"
      />
    </div>
  );
};

export default ProjectCard;
