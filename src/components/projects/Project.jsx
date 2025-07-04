import ProjectCard from "./ProjectCard";
import Button from "../common/Button";

const Project = () => {
  return (
    <>
      <div className="container-flex text-center project">
        <h1 className="fw-bold pb-5">
          RECENT <span className="highlight">PROJECTS</span>
        </h1>
        <div className="row">
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project1.jpg"
              altText="Project 1"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project2.jpg"
              altText="Project 2"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project3.jpg"
              altText="Project 3"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project4.jpg"
              altText="Project 4"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project5.jpg"
              altText="Project 5"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project6.jpg"
              altText="Project 6"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project7.jpg"
              altText="Project 7"
            />
          </div>
          <div className="col-12 col-md-3">
            <ProjectCard
              imageName="project8.jpg"
              altText="Project 8"
            />
          </div>
        </div>
        <Button
          text="VIEW ALL WORKS"
          style={{ marginTop: "60px" }}
        />
      </div>
    </>
  );
};

export default Project;
