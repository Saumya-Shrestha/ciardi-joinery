import { useState } from "react";

const ProjectGrid = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: "/images/projects/project3.jpg",
      title: "Modern Kitchen Renovation",
      category: "kitchen",
      location: "Hawkesbury, NSW",
      description: "Complete kitchen transformation featuring custom cabinets, stone benchtops, and modern appliances.",
      year: "2024",
    },
    {
      id: 2,
      image: "/images/projects/project2.jpg",
      title: "Luxury Walk-in Wardrobe",
      category: "wardrobe",
      location: "Sydney Hills, NSW",
      description: "Bespoke walk-in wardrobe with premium finishes and smart storage solutions.",
      year: "2024",
    },
    {
      id: 3,
      image: "/images/projects/project9.jpg",
      title: "Contemporary Bathroom Vanity",
      category: "vanity",
      location: "Richmond, NSW",
      description: "Custom floating vanity with integrated lighting and premium hardware.",
      year: "2024",
    },
    {
      id: 4,
      image: "/images/projects/project10.jpg",
      title: "Entertainment Center",
      category: "entertainment",
      location: "Penrith, NSW",
      description: "Wall-mounted entertainment unit with hidden cable management and ambient lighting.",
      year: "2023",
    },
    {
      id: 5,
      image: "/images/projects/project11.jpg",
      title: "Hair Salon Fitout",
      category: "commercial",
      location: "Windsor, NSW",
      description: "Complete salon fitout with styling stations, reception desk, and storage solutions.",
      year: "2023",
    },
    {
      id: 6,
      image: "/images/projects/project12.jpg",
      title: "Retail Store Fitout",
      category: "commercial",
      location: "Blacktown, NSW",
      description: "Modern retail space design with custom display units and customer service areas.",
      year: "2023",
    },
    {
      id: 7,
      image: "/images/projects/project13.jpg",
      title: "Home Office Built-ins",
      category: "office",
      location: "Castle Hill, NSW",
      description: "Custom home office with built-in desk, shelving, and filing solutions.",
      year: "2024",
    },
    {
      id: 8,
      image: "/images/projects/project14.jpg",
      title: "Luxury Master Ensuite",
      category: "vanity",
      location: "Parramatta, NSW",
      description: "Premium ensuite renovation with double vanity and extensive storage.",
      year: "2024",
    },
  ];

  const categories = [
    { key: "all", label: "ALL PROJECTS" },
    { key: "kitchen", label: "KITCHENS" },
    { key: "wardrobe", label: "WARDROBES" },
    { key: "vanity", label: "VANITIES" },
    { key: "entertainment", label: "ENTERTAINMENT" },
    { key: "commercial", label: "COMMERCIAL" },
    { key: "office", label: "OFFICE" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            OUR <span className="highlight">PORTFOLIO</span>
          </h1>
          <p className="lead">Showcase of our finest craftsmanship and attention to detail</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`btn px-4 py-2 mx-1 mb-2 ${filter === category.key ? "btn-danger" : "btn-outline-dark"}`}
                style={{ borderRadius: 0 }}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="col-lg-4 col-md-6 mb-5"
          >
            <div className="card project-detail-card h-100 border-0 shadow-sm">
              <div className="project-image-container position-relative overflow-hidden">
                <img
                  src={project.image}
                  className="card-img-top project-detail-image"
                  alt={project.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <h5 className="text-white fw-bold">{project.title}</h5>
                    <p className="text-white small">{project.location}</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="card-title fw-bold mb-0">{project.title}</h5>
                  <span className="badge bg-danger">{project.year}</span>
                </div>
                <p className="text-muted small mb-2">
                  <i className="fas fa-map-marker-alt me-1"></i>
                  {project.location}
                </p>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    style={{ borderRadius: 0 }}
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="row">
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No projects found in this category</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
