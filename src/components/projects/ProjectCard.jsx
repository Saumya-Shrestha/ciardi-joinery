const ProjectCard = ({ imageName, altText }) => {
  return (
    <div className="project-card mb-3 mb-md-0">
      <img
        src={`/images/projects/${imageName}`}
        alt={altText}
        className="project-image"
      />
    </div>
  );
};

export default ProjectCard;
