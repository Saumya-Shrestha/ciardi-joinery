import Banner from "../components/common/Banner";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectProcess from "../components/projects/ProjectProcess";
import ProjectCTA from "../components/projects/ProjectCTA";

const Projects = () => {
  return (
    <>
      <Banner
        title="OUR PROJECTS"
        description="Showcase of Quality Craftsmanship and Design Excellence"
      />
      <ProjectGrid />
      <ProjectStats />
      <ProjectProcess />
      <ProjectCTA />
    </>
  );
};

export default Projects;
