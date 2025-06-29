import { FaComments, FaDraftingCompass, FaTools, FaCheckCircle } from "react-icons/fa";

const ProjectProcess = () => {
  const steps = [
    {
      icon: FaComments,
      title: "CONSULTATION",
      description: "We discuss your vision, requirements, and budget to understand your project needs.",
      step: "01",
    },
    {
      icon: FaDraftingCompass,
      title: "DESIGN & QUOTE",
      description: "Our team creates detailed designs and provides transparent pricing for your project.",
      step: "02",
    },
    {
      icon: FaTools,
      title: "CONSTRUCTION",
      description: "Expert craftsmen bring your project to life using premium materials and techniques.",
      step: "03",
    },
    {
      icon: FaCheckCircle,
      title: "COMPLETION",
      description: "Final installation, quality inspection, and handover of your completed project.",
      step: "04",
    },
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold">
              OUR PROJECT <span className="highlight">PROCESS</span>
            </h1>
            <p className="lead">From initial consultation to final delivery - how we work</p>
          </div>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
            >
              <div className="card border-0 shadow-sm text-center h-100 project-process-card">
                <div className="card-body p-4 position-relative">
                  <div className="process-step-number">{step.step}</div>
                  <div className="mb-3">
                    <div className="project-process-icon mx-auto">
                      <step.icon
                        className="text-white"
                        style={{ fontSize: "2rem" }}
                      />
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;
